import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";

export const savePendingOrder = internalMutation({
  args: {
    orderId: v.string(),
    userId: v.string(),
    userEmail: v.string(),
    userPhone: v.string(),
    itemIds: v.array(v.id("courses")),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("orders", { ...args, status: "pending" });
  },
});

export const markOrderAsPaid = internalMutation({
  args: { orderId: v.string(), paymentId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .first();

    if (!order) throw new Error("Order not found");

    if (order.status === "paid") {
      console.log("Order already marked as paid, skipping logic.");
      return;
    }

    await ctx.db.patch(order._id, {
      status: "paid",
      paymentId: args.paymentId,
    });

    // Remove purchased courses from user's cart
    for (const courseId of order.itemIds) {
      const cartItem = await ctx.db
        .query("cartItems")
        .withIndex("by_user_course", (q) =>
          q.eq("userId", order.userId).eq("courseId", courseId),
        )
        .first();

      if (cartItem) {
        await ctx.db.delete(cartItem._id);
      }
    }
  },
});

export const markOrderAsFailed = internalMutation({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .unique();

    if (!order) {
      console.warn(`Could not mark missing order ${args.orderId} as failed.`);
      return;
    }
    if (order.status === "paid") return;

    await ctx.db.patch(order._id, {
      status: "failed",
    });
  },
});

export const getOrderDetails = internalQuery({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .unique();

    if (!order) return null;

    const courses = await Promise.all(
      order.itemIds.map((id) => ctx.db.get(id)),
    );

    const validCourses = courses.filter((c) => c !== null);

    return {
      ...order,
      coursesDetails: validCourses,
    };
  },
});
