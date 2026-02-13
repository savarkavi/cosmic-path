"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";

function CheckoutStatus() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const verifyCoursePayment = useAction(api.cashfree.verifyCoursePayment);
  const verifyBookingPayment = useAction(api.cashfree.verifyBookingPayment);

  const orderId = searchParams.get("order_id");

  const isBooking = orderId?.startsWith("booking_");

  const [status, setStatus] = useState<
    "LOADING" | "PAID" | "FAILED" | "INCOMPLETE"
  >("LOADING");

  useEffect(() => {
    if (!orderId) {
      return;
    }

    const checkStatus = async (retriesLeft = 3) => {
      try {
        const result = isBooking
          ? await verifyBookingPayment({ orderId })
          : await verifyCoursePayment({ orderId });

        if (result === "PAID") {
          setStatus("PAID");
        } else if (result === "PENDING" && retriesLeft > 0) {
          // Payment may still be processing, retry after a delay
          setTimeout(() => checkStatus(retriesLeft - 1), 3000);
        } else if (result === "PENDING") {
          setStatus("INCOMPLETE");
        } else {
          setStatus("FAILED");
        }
      } catch (error) {
        console.error("Verification crashed:", error);
        setStatus("FAILED");
      }
    };

    checkStatus();
  }, [orderId, verifyCoursePayment, verifyBookingPayment, isBooking]);

  if (!orderId) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">Invalid Link!</h1>
        <p className="mt-2 text-gray-600">No Order ID found in the URL.</p>
        <Button
          onClick={() => router.push("/")}
          className="bg-foreground mt-6 rounded-lg py-2 text-white"
        >
          Go Home
        </Button>
      </div>
    );
  }

  if (status === "LOADING") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
        <h2 className="text-xl font-semibold">Verifying Payment...</h2>
        <p className="text-gray-500">
          Please stay on this page while we confirm your{" "}
          {isBooking ? "booking" : "order"}.
        </p>
      </div>
    );
  }

  if (status === "INCOMPLETE") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-yellow-50 p-4 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-3xl text-yellow-600">
          !
        </div>
        <h1 className="text-3xl font-bold text-yellow-700">
          Payment Cancelled
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Payment was not completed. No money was deducted.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            onClick={() => router.push(isBooking ? "/consultation" : "/cart")}
            className="rounded-lg bg-yellow-600 font-medium text-white transition hover:bg-yellow-700"
          >
            {isBooking ? "Return to Consultation" : "Return to Cart"}
          </Button>
        </div>
      </div>
    );
  }

  if (status === "PAID") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-green-50 p-4 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
          ✓
        </div>
        <h1 className="text-3xl font-bold text-green-700">
          Payment Successful!
        </h1>
        <p className="mt-2 max-w-md text-gray-700">
          {isBooking
            ? "Thank you for booking! We have sent a confirmation email with your consultation details."
            : "Thank you for your purchase. We have sent a confirmation email to you."}
        </p>

        <div className="mt-8 space-x-4">
          <Button
            size="lg"
            onClick={() => router.push("/")}
            className="rounded-lg bg-green-600 font-medium text-white transition hover:bg-green-700"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-50 p-4 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
        ✕
      </div>
      <h1 className="text-3xl font-bold text-red-700">Payment Failed</h1>
      <p className="mt-2 max-w-md text-gray-700">
        We couldn&apos;t verify your payment. If money was deducted, it will be
        automatically refunded within 5-7 days.
      </p>

      <div className="mt-8 space-x-4">
        <Button
          size="lg"
          onClick={() => router.push(isBooking ? "/consultation" : "/cart")}
          className="bg-foreground rounded-lg font-medium text-white transition"
        >
          Try Again
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => router.push("/contact")}
          className="border-primary rounded-lg"
        >
          Contact Support
        </Button>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutStatus />
    </Suspense>
  );
}
