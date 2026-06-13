import { v } from "convex/values";
import { internalMutation, internalQuery, query } from "./_generated/server";

export const savePendingRegistration = internalMutation({
  args: {
    orderId: v.string(),
    userId: v.string(),
    userEmail: v.string(),
    userPhone: v.string(),
    webinarId: v.id("webinars"),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("webinarRegistrations")
      .withIndex("by_user_webinar", (q) =>
        q.eq("userId", args.userId).eq("webinarId", args.webinarId),
      )
      .first();

    if (existing?.status === "paid") {
      throw new Error("You are already registered for this webinar.");
    }

    await ctx.db.insert("webinarRegistrations", {
      ...args,
      status: "pending",
    });
  },
});

export const markRegistrationAsPaid = internalMutation({
  args: { orderId: v.string(), paymentId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const registration = await ctx.db
      .query("webinarRegistrations")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .first();

    if (!registration) throw new Error("Registration not found");

    if (registration.status === "paid") {
      console.log("Registration already marked as paid, skipping logic.");
      return { alreadyPaid: true };
    }

    await ctx.db.patch(registration._id, {
      status: "paid",
      paymentId: args.paymentId,
      emailsSent: true,
    });

    return { alreadyPaid: false };
  },
});

export const markRegistrationAsFailed = internalMutation({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const registration = await ctx.db
      .query("webinarRegistrations")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .unique();

    if (!registration) {
      console.warn(
        `Could not mark missing registration ${args.orderId} as failed.`,
      );
      return;
    }
    if (registration.status === "paid") return;

    await ctx.db.patch(registration._id, {
      status: "failed",
    });
  },
});

export const getRegistrationDetails = internalQuery({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const registration = await ctx.db
      .query("webinarRegistrations")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .unique();

    if (!registration) return null;

    const webinar = await ctx.db.get(registration.webinarId);

    return {
      ...registration,
      webinarTitle: webinar?.title,
      webinarDate: webinar?.scheduledAt,
    };
  },
});

export const getUserRegistration = query({
  args: { webinarId: v.id("webinars") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    return ctx.db
      .query("webinarRegistrations")
      .withIndex("by_user_webinar", (q) =>
        q.eq("userId", identity.subject).eq("webinarId", args.webinarId),
      )
      .first();
  },
});
