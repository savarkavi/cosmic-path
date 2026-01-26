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
    price: v.number(),
    duration: v.string(),
    imageId: v.id("_storage"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthorized");

    await ctx.db.insert("courses", {
      title: args.title,
      description: args.description,
      price: args.price,
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

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});
