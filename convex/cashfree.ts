"use node";

import { Cashfree, CFEnvironment } from "cashfree-pg";
import { action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

const cashfree = new Cashfree(
  CFEnvironment.SANDBOX,
  process.env.CASHFREE_APP_ID,
  process.env.CASHFREE_SECRET_KEY,
);

export const createOrder = action({
  args: {
    userPhone: v.string(),
    itemsIds: v.array(v.id("courses")),
    amount: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("You must be logged in to buy a course.");

    const userId = identity.subject;
    const userEmail = identity.email;

    if (!userEmail) {
      throw new Error("Your account must have an email to purchase.");
    }

    const orderId = `order_${userId}_${Date.now()}`;

    await ctx.runMutation(internal.orders.savePendingOrder, {
      orderId,
      userId,
      userEmail,
      userPhone: args.userPhone,
      itemIds: args.itemsIds,
      amount: args.amount,
    });

    const request = {
      order_amount: args.amount,
      order_currency: "INR",
      order_id: orderId,
      customer_details: {
        customer_id: userId,
        customer_email: userEmail,
        customer_phone: args.userPhone,
      },
      order_meta: {
        return_url: `http://localhost:3000/checkout?order_id=${orderId}`,
      },
    };

    try {
      const response = await cashfree.PGCreateOrder(request);
      return response.data.payment_session_id;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(
        "Error setting up order request:",
        error.response.data.message,
      );
      throw new Error("Payment init failed");
    }
  },
});

export const verifyPayment = action({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    try {
      const response = await cashfree.PGFetchOrder(args.orderId);
      const orderData = response.data;

      if (orderData.order_status === "PAID") {
        await ctx.runMutation(internal.orders.markOrderAsPaid, {
          orderId: args.orderId,
          paymentId: orderData.payment_session_id,
        });
        return "SUCCESS";
      }

      return orderData.order_status;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error setting up order request:", error.response.data);
      throw new Error("Payment verification failed (network)");
    }
  },
});
