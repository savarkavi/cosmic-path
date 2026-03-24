"use node";

import { Cashfree, CFEnvironment } from "cashfree-pg";
import { action, internalAction } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { Resend } from "resend";
import {
  StudentWelcomeEmail,
  AdminNotificationEmail,
  StudentBookingEmail,
} from "./emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

const cashfree = new Cashfree(
  process.env.CASHFREE_ENV === "PRODUCTION"
    ? CFEnvironment.PRODUCTION
    : CFEnvironment.SANDBOX,
  process.env.CASHFREE_APP_ID,
  process.env.CASHFREE_SECRET_KEY,
);

export const fulfillOrder = internalAction({
  args: { orderId: v.string(), paymentId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const { alreadyPaid } = await ctx.runMutation(
      internal.orders.markOrderAsPaid,
      {
        orderId: args.orderId,
        paymentId: args.paymentId,
      },
    );

    if (alreadyPaid) {
      console.log(
        `fulfillOrder: ${args.orderId} already fulfilled, skipping emails.`,
      );
      return;
    }

    const order = await ctx.runQuery(internal.orders.getOrderDetails, {
      orderId: args.orderId,
    });

    if (!order) {
      console.error(
        `fulfillOrder: Order ${args.orderId} missing after marking paid`,
      );
      return;
    }

    const user = await ctx.runQuery(internal.users.getUserByClerkId, {
      clerkId: order.userId,
    });

    try {
      await resend.emails.send({
        from: "Cosmic Path <onboarding@resend.dev>",
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
        to: "myaccount.abc@gmail.com",
        subject: `New Sale: ₹${order.amount}`,
        react: (
          <AdminNotificationEmail
            amount={order.amount}
            courses={order.coursesDetails}
            customerName={user?.name}
            customerEmail={user?.email}
            customerPhone={user?.phone}
          />
        ),
      });
    } catch (emailError) {
      console.error("fulfillOrder: Failed to send emails:", emailError);
    }
  },
});

export const fulfillBooking = internalAction({
  args: { orderId: v.string(), paymentId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const { alreadyPaid } = await ctx.runMutation(
      internal.bookings.markBookingAsPaid,
      {
        orderId: args.orderId,
        paymentId: args.paymentId,
      },
    );

    if (alreadyPaid) {
      console.log(
        `fulfillBooking: ${args.orderId} already fulfilled, skipping emails.`,
      );
      return;
    }

    const booking = await ctx.runQuery(internal.bookings.getBookingDetails, {
      orderId: args.orderId,
    });

    if (!booking) {
      console.error(
        `fulfillBooking: Booking ${args.orderId} missing after marking paid`,
      );
      return;
    }

    const user = await ctx.runQuery(internal.users.getUserByClerkId, {
      clerkId: booking.userId,
    });

    try {
      await resend.emails.send({
        from: "Cosmic Path <onboarding@resend.dev>",
        to: booking.userEmail,
        subject: "Booking Confirmed! Consultation Scheduled",
        react: (
          <StudentBookingEmail
            name={user?.name || user?.email}
            orderId={booking.orderId}
            amount={booking.amount}
            serviceType={booking.serviceType}
            message={booking.message}
          />
        ),
      });

      await resend.emails.send({
        from: "System <onboarding@resend.dev>",
        to: "myaccount.abc@gmail.com",
        subject: `New Booking: ₹${booking.amount}`,
        react: (
          <AdminNotificationEmail
            amount={booking.amount}
            customerName={user?.name}
            customerEmail={user?.email}
            customerPhone={user?.phone}
            bookingDetails={{
              serviceType: booking.serviceType,
              message: booking.message,
              dateOfBirth: user?.dateOfBirth,
              timeOfBirth: user?.timeOfBirth,
              placeOfBirth: user?.placeOfBirth,
            }}
          />
        ),
      });
    } catch (emailError) {
      console.error("fulfillBooking: Failed to send emails:", emailError);
    }
  },
});

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

    const baseUrl =
      process.env.CASHFREE_ENV === "PRODUCTION"
        ? "https://cosmic-path.vercel.app"
        : "http://localhost:3000";

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
        return_url: `${baseUrl}/checkout?order_id=${orderId}`,
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
        await ctx.runAction(internal.cashfree.fulfillOrder, {
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

// --------------------------------------------------------
// Booking order creation & verification
// --------------------------------------------------------

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

    await ctx.runMutation(internal.users.updateProfileFields, {
      userId,
      sex: args.sex,
      dateOfBirth: args.dateOfBirth,
      timeOfBirth: args.timeOfBirth,
      placeOfBirth: args.placeOfBirth,
    });

    const orderId = `booking_${userId}_${Date.now()}`;

    await ctx.runMutation(internal.bookings.savePendingBooking, {
      orderId,
      userId,
      userEmail,
      userPhone: args.userPhone,
      serviceType: args.serviceType,
      message: args.message,
      amount: BOOKING_PRICE,
    });

    const baseUrl =
      process.env.CASHFREE_ENV === "PRODUCTION"
        ? "https://cosmic-path.vercel.app"
        : "http://localhost:3000";

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
        return_url: `${baseUrl}/checkout?order_id=${orderId}`,
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
        await ctx.runAction(internal.cashfree.fulfillBooking, {
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

// --------------------------------------------------------
// Webhook handler
// --------------------------------------------------------

export const processWebhookPayment = internalAction({
  args: {
    signature: v.string(),
    timestamp: v.string(),
    rawBody: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      cashfree.PGVerifyWebhookSignature(
        args.signature,
        args.rawBody,
        args.timestamp,
      );
    } catch (error) {
      console.error("Cashfree webhook signature verification failed:", error);
      throw new Error("Invalid webhook signature");
    }

    const payload = JSON.parse(args.rawBody);
    const eventType: string = payload.type;
    const orderData = payload.data?.order;

    if (!orderData?.order_id) {
      console.error("Cashfree webhook: Missing order_id in payload");
      return;
    }

    const orderId: string = orderData.order_id;
    const isBooking = orderId.startsWith("booking_");
    const isCourseOrder = orderId.startsWith("order_");

    if (eventType === "PAYMENT_SUCCESS_WEBHOOK") {
      const paymentData = payload.data?.payment;
      const paymentId: string | undefined =
        paymentData?.cf_payment_id?.toString();

      if (isBooking) {
        await ctx.runAction(internal.cashfree.fulfillBooking, {
          orderId,
          paymentId,
        });
      } else if (isCourseOrder) {
        await ctx.runAction(internal.cashfree.fulfillOrder, {
          orderId,
          paymentId,
        });
      }
    }

    if (
      eventType === "PAYMENT_FAILED_WEBHOOK" ||
      eventType === "PAYMENT_USER_DROPPED_WEBHOOK"
    ) {
      if (isBooking) {
        await ctx.runMutation(internal.bookings.markBookingAsFailed, {
          orderId,
        });
      } else if (isCourseOrder) {
        await ctx.runMutation(internal.orders.markOrderAsFailed, { orderId });
      }
    }
  },
});
