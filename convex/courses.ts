import { v } from "convex/values";
import { mutation } from "./_generated/server";

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
    });
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});
