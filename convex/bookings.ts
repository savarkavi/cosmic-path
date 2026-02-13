import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";

export const savePendingBooking = internalMutation({
  args: {
    orderId: v.string(),
    userId: v.string(),
    userEmail: v.string(),
    userPhone: v.string(),
    serviceType: v.string(),
    message: v.optional(v.string()),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("bookings", { ...args, status: "pending" });
  },
});

export const markBookingAsPaid = internalMutation({
  args: { orderId: v.string(), paymentId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const booking = await ctx.db
      .query("bookings")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .first();

    if (!booking) throw new Error("Booking not found");

    if (booking.status === "paid") {
      console.log("Booking already marked as paid, skipping logic.");
      return;
    }

    await ctx.db.patch(booking._id, {
      status: "paid",
      paymentId: args.paymentId,
    });
  },
});

export const markBookingAsFailed = internalMutation({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const booking = await ctx.db
      .query("bookings")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .unique();

    if (!booking) {
      console.warn(`Could not mark missing booking ${args.orderId} as failed.`);
      return;
    }
    if (booking.status === "paid") return;

    await ctx.db.patch(booking._id, {
      status: "failed",
    });
  },
});

export const getBookingDetails = internalQuery({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const booking = await ctx.db
      .query("bookings")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .unique();

    return booking;
  },
});
