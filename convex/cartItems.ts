import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addToCart = mutation({
  args: { courseId: v.id("courses"), guestId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    let userId: string | undefined;
    let guestId: string | undefined;

    if (identity) {
      userId = identity.subject;

      const existingCartItem = await ctx.db
        .query("cartItems")
        .withIndex("by_user_course", (q) =>
          q.eq("userId", userId).eq("courseId", args.courseId),
        )
        .first();

      if (existingCartItem) return { status: "Item already in cart" };

      await ctx.db.insert("cartItems", {
        courseId: args.courseId,
        guestId: undefined,
        userId,
      });

      return { status: "added" };
    } else {
      if (!args.guestId) throw new Error("Guest ID required for guest users");
      guestId = args.guestId;

      const existingCartItem = await ctx.db
        .query("cartItems")
        .withIndex("by_guest_course", (q) =>
          q.eq("guestId", guestId).eq("courseId", args.courseId),
        )
        .first();

      if (existingCartItem) return { status: "Item already in cart" };

      await ctx.db.insert("cartItems", {
        courseId: args.courseId,
        userId: undefined,
        guestId,
      });

      return { status: "added" };
    }
  },
});

export const removeFromCart = mutation({
  args: {
    cartItemId: v.id("cartItems"),
    guestId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const guestId = args.guestId;

    const item = await ctx.db.get(args.cartItemId);
    if (!item) return;

    if (identity) {
      if (item.userId !== identity.subject) throw new Error("Unauthorized");
    } else {
      if (item.guestId !== guestId) throw new Error("Unauthorized");
    }

    await ctx.db.delete(args.cartItemId);
  },
});

export const getCart = query({
  args: { guestId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    const userId = identity?.subject;
    const guestId = args.guestId;

    if (!userId && !guestId) return [];

    let cartItems;

    if (userId) {
      cartItems = await ctx.db
        .query("cartItems")
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .collect();
    } else {
      cartItems = await ctx.db
        .query("cartItems")
        .withIndex("by_guest", (q) => q.eq("guestId", guestId))
        .collect();
    }

    const cartWithDetails = await Promise.all(
      cartItems.map(async (item) => {
        const course = await ctx.db.get(item.courseId);

        if (!course) return null;

        return {
          ...item,
          course: {
            courseId: course._id,
            title: course.title,
            price: course.price,
            discount: course.discount,
            imageUrl: await ctx.storage.getUrl(course.imageId),
          },
        };
      }),
    );

    return cartWithDetails.filter((item) => item !== null);
  },
});

export const mergeGuestCart = mutation({
  args: { guestId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("You are not logged in.");

    const userId = identity.subject;

    const guestCartItems = await ctx.db
      .query("cartItems")
      .withIndex("by_guest", (q) => q.eq("guestId", args.guestId))
      .collect();

    if (guestCartItems.length === 0) return;

    for (const item of guestCartItems) {
      const existingItem = await ctx.db
        .query("cartItems")
        .withIndex("by_user_course", (q) =>
          q.eq("userId", userId).eq("courseId", item.courseId),
        )
        .first();

      if (existingItem) {
        await ctx.db.delete(item._id);
      } else {
        await ctx.db.patch(item._id, {
          userId,
          guestId: undefined,
        });
      }
    }
  },
});
