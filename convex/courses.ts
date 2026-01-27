import { v } from "convex/values";
import { mutation, query, QueryCtx } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";
import { Doc } from "./_generated/dataModel";

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
    about: v.string(),
    price: v.number(),
    discount: v.optional(v.number()),
    duration: v.string(),
    imageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthorized");

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
      about: args.about,
      price: args.price,
      discount: args.discount,
      duration: args.duration,
      imageId: args.imageId,
      imageUrl: null,
    });
  },
});

export const getFeaturedCourses = query({
  args: {},
  handler: async (ctx) => {
    const courses = await ctx.db.query("courses").order("desc").take(6);

    return getImageUrls(ctx, courses);
  },
});

export const getAllCourses = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    const courses = await ctx.db
      .query("courses")
      .order("desc")
      .paginate(args.paginationOpts);

    return courses;
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
    return await ctx.storage.generateUploadUrl();
  },
});
