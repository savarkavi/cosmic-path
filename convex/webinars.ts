import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { requireAdmin } from "./helpers";

export const createWebinar = mutation({
  args: {
    title: v.string(),
    headline: v.string(),
    description: v.string(),
    price: v.number(),
    scheduledAt: v.string(),
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
        .query("webinars")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .first();

      if (!existing) break;

      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    await ctx.db.insert("webinars", {
      title: args.title,
      headline: args.headline,
      slug,
      description: args.description,
      price: args.price,
      scheduledAt: args.scheduledAt,
      status: "upcoming",
      createdAt: Date.now(),
    });
  },
});

export const getNextUpcomingWebinar = query({
  args: {},
  handler: async (ctx) => {
    const webinars = await ctx.db
      .query("webinars")
      .withIndex("by_status", (q) => q.eq("status", "upcoming"))
      .collect();

    const upcoming = webinars
      .filter((w) => new Date(w.scheduledAt).getTime() > Date.now())
      .sort(
        (a, b) =>
          new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime(),
      );

    return upcoming[0] ?? null;
  },
});

export const getWebinarBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("webinars")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
  },
});

export const getAllWebinars = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("webinars").order("desc").collect();
  },
});
