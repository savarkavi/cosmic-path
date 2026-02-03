"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAction } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/components/ui/button";

function CheckoutStatus() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const verifyPayment = useAction(api.cashfree.verifyPayment);

  const orderId = searchParams.get("order_id");

  const [status, setStatus] = useState<
    "LOADING" | "PAID" | "FAILED" | "INCOMPLETE"
  >("LOADING");

  useEffect(() => {
    if (!orderId) {
      return;
    }

    const checkStatus = async () => {
      try {
        const result = await verifyPayment({ orderId });

        if (result === "PAID") {
          setStatus("PAID");
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
  }, [orderId, verifyPayment, router]);

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
          Please wait while we confirm your order.
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
          Payment Incomplete
        </h1>
        <p className="mt-2 max-w-md text-gray-700">
          The payment process was not completed. If you just paid, please wait a
          moment and refresh. If you did&apos;t pay, then go to home.
        </p>
        <div className="mt-8 space-x-4">
          <Button onClick={() => window.location.reload()} variant="outline">
            Refresh Status
          </Button>
          <Button
            onClick={() => router.push("/")}
            className="bg-yellow-600 text-white hover:bg-yellow-700"
          >
            Go to Home
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
          Thank you for your purchase. We have sent a confirmation email to you.
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
          onClick={() => router.push("/")}
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
