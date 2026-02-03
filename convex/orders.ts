import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

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
  },
});
