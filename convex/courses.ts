import { v } from "convex/values";
import { internalQuery, mutation, query, QueryCtx } from "./_generated/server";

import { Doc } from "./_generated/dataModel";
import { requireAdmin } from "./helpers";

const getImageUrls = async (ctx: QueryCtx, courses: Doc<"courses">[]) => {
  return await Promise.all(
    courses.map(async (course) => ({
      ...course,
      imageUrl: await ctx.storage.getUrl(course.imageId),
    })),
  );
};

export const createCourse = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    price: v.number(),
    discount: v.optional(v.number()),
    classes: v.number(),
    imageId: v.id("_storage"),
    difficulty: v.union(v.literal("beginner"), v.literal("advanced")),
    courseContent: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const baseSlug = args.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    let slug = baseSlug;
    let counter = 1;

    while (true) {
      const existing = await ctx.db
        .query("courses")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .first();

      if (!existing) {
        break;
      }

      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    await ctx.db.insert("courses", {
      title: args.title,
      slug,
      description: args.description,
      price: args.price,
      discount: args.discount,
      classes: args.classes,
      difficulty: args.difficulty,
      courseContent: args.courseContent,
      imageId: args.imageId,
      imageUrl: null,
    });
  },
});

export const getFeaturedCourses = query({
  args: {},
  handler: async (ctx) => {
    const courses = await ctx.db.query("courses").order("asc").take(6);

    return getImageUrls(ctx, courses);
  },
});

export const getAllCourses = query({
  args: {},
  handler: async (ctx) => {
    const courses = await ctx.db
      .query("courses")
      .order("asc")
      .collect();

    return getImageUrls(ctx, courses);
  },
});

export const getCourseBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    let course = await ctx.db
      .query("courses")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();

    if (course) {
      const imageUrl = await ctx.storage.getUrl(course.imageId);
      course = {
        ...course,
        imageUrl,
      };
    }

    return course;
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.storage.generateUploadUrl();
  },
});

export const getCheckoutAmount = internalQuery({
  args: {
    courseIds: v.array(v.id("courses")),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    let totalAmount = 0;
    const courses = [];

    for (const id of args.courseIds) {
      const course = await ctx.db.get(id);
      if (!course) continue;

      const price = calculateDiscountedPrice(course.price, course.discount);
      totalAmount += price;
      courses.push(course);
    }

    return {
      amount: totalAmount,
      validCourses: courses,
    };
  },
});

function calculateDiscountedPrice(
  price: number,
  discountPercentage?: number,
): number {
  if (!discountPercentage || discountPercentage <= 0) {
    return price;
  }

  if (discountPercentage >= 100) {
    return 0;
  }

  const discountedPrice = price - (price * discountPercentage) / 100;

  return Math.round(discountedPrice);
}
