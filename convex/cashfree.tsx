"use node";

import { Cashfree, CFEnvironment } from "cashfree-pg";
import { action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { Resend } from "resend";
import { StudentWelcomeEmail, AdminNotificationEmail } from "./emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

const cashfree = new Cashfree(
  CFEnvironment.SANDBOX,
  process.env.CASHFREE_APP_ID,
  process.env.CASHFREE_SECRET_KEY,
);

export const createCourseOrder = action({
  args: {
    userPhone: v.string(),
    itemsIds: v.array(v.id("courses")),
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

    const { amount } = await ctx.runQuery(internal.courses.getCheckoutAmount, {
      courseIds: args.itemsIds,
      userId: userId,
    });

    if (amount <= 0) {
      throw new Error("Invalid order amount.");
    }

    await ctx.runMutation(internal.orders.savePendingOrder, {
      orderId,
      userId,
      userEmail,
      userPhone: args.userPhone,
      itemIds: args.itemsIds,
      amount: amount,
    });

    const request = {
      order_amount: amount,
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

export const verifyCoursePayment = action({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in.");
    }

    const currentUserId = identity.subject;

    const prefixLength = "order_".length;

    const lastUnderscoreIndex = args.orderId.lastIndexOf("_");

    const orderUserId = args.orderId.substring(
      prefixLength,
      lastUnderscoreIndex,
    );

    if (orderUserId !== currentUserId) {
      console.error(
        `Malicious attempt: User ${currentUserId} tried to verify order ${args.orderId}`,
      );
      throw new Error("Unauthorized: You can only verify your own orders.");
    }

    try {
      const response = await cashfree.PGFetchOrder(args.orderId);
      const orderData = response.data;
      const status = orderData.order_status;

      if (status === "PAID") {
        await ctx.runMutation(internal.orders.markOrderAsPaid, {
          orderId: args.orderId,
          paymentId: orderData.payment_session_id,
        });

        const order = await ctx.runQuery(internal.orders.getOrderDetails, {
          orderId: args.orderId,
        });

        if (!order) {
          console.error("Order missing for email sending");
          return "PAID";
        }

        const user = await ctx.runQuery(internal.users.getUserByClerkId, {
          clerkId: order.userId,
        });

        try {
          await resend.emails.send({
            from: "Acme Astrology <onboarding@resend.dev>",
            to: order.userEmail,
            subject: "Payment Received! Scheduling your Astrology Course",
            react: (
              <StudentWelcomeEmail
                amount={order.amount}
                name={user?.name || user?.email}
                orderId={order.orderId}
                courses={order.coursesDetails}
              />
            ),
          });

          await resend.emails.send({
            from: "System <onboarding@resend.dev>",
            to: "sushant20.sharma00@gmail.com",
            subject: `New Sale: ₹${order.amount}`,
            react: (
              <AdminNotificationEmail
                amount={order.amount}
                courses={order.coursesDetails}
                customerEmail={user?.email}
                customerPhone={user?.phone}
              />
            ),
          });
        } catch (emailError) {
          console.error("Failed to send emails:", emailError);
        }

        return "PAID";
      }

      if (
        status === "EXPIRED" ||
        status === "TERMINATED" ||
        status === "TERMINATION_REQUESTED"
      ) {
        await ctx.runMutation(internal.orders.markOrderAsFailed, {
          orderId: args.orderId,
        });
        return "FAILED";
      }

      return "PENDING";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error setting up order request:", error.response.data);
      throw new Error("Payment verification failed (network)");
    }
  },
});

// Fixed consultation booking price in INR
const BOOKING_PRICE = 1500;

export const createBookingOrder = action({
  args: {
    userPhone: v.string(),
    serviceType: v.string(),
    message: v.optional(v.string()),
    sex: v.union(v.literal("male"), v.literal("female"), v.literal("other")),
    dateOfBirth: v.string(),
    timeOfBirth: v.string(),
    placeOfBirth: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("You must be logged in to book.");

    const userId = identity.subject;
    const userEmail = identity.email;

    if (!userEmail) {
      throw new Error("Your account must have an email to book.");
    }

    // Update user profile fields
    await ctx.runMutation(internal.users.updateProfileFields, {
      userId,
      sex: args.sex,
      dateOfBirth: args.dateOfBirth,
      timeOfBirth: args.timeOfBirth,
      placeOfBirth: args.placeOfBirth,
    });

    const orderId = `booking_${userId}_${Date.now()}`;

    // Save pending booking
    await ctx.runMutation(internal.bookings.savePendingBooking, {
      orderId,
      userId,
      userEmail,
      userPhone: args.userPhone,
      serviceType: args.serviceType,
      message: args.message,
      amount: BOOKING_PRICE,
    });

    const request = {
      order_amount: BOOKING_PRICE,
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
        "Error setting up booking order request:",
        error.response.data.message,
      );
      throw new Error("Payment init failed");
    }
  },
});

export const verifyBookingPayment = action({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in.");
    }

    const currentUserId = identity.subject;

    const prefixLength = "booking_".length;
    const lastUnderscoreIndex = args.orderId.lastIndexOf("_");
    const orderUserId = args.orderId.substring(
      prefixLength,
      lastUnderscoreIndex,
    );

    if (orderUserId !== currentUserId) {
      console.error(
        `Malicious attempt: User ${currentUserId} tried to verify booking ${args.orderId}`,
      );
      throw new Error("Unauthorized: You can only verify your own bookings.");
    }

    try {
      const response = await cashfree.PGFetchOrder(args.orderId);
      const orderData = response.data;
      const status = orderData.order_status;

      if (status === "PAID") {
        await ctx.runMutation(internal.bookings.markBookingAsPaid, {
          orderId: args.orderId,
          paymentId: orderData.payment_session_id,
        });
        return "PAID";
      }

      if (
        status === "EXPIRED" ||
        status === "TERMINATED" ||
        status === "TERMINATION_REQUESTED"
      ) {
        await ctx.runMutation(internal.bookings.markBookingAsFailed, {
          orderId: args.orderId,
        });
        return "FAILED";
      }

      return "PENDING";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error verifying booking:", error.response.data);
      throw new Error("Booking verification failed (network)");
    }
  },
});
