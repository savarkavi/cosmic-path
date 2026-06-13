"use client";

import { useState } from "react";
import { useAction, useQuery } from "convex/react";
import { load } from "@cashfreepayments/cashfree-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface WebinarRegisterButtonProps {
  webinarId: Id<"webinars">;
  price: number;
  className?: string;
  children?: React.ReactNode;
}

export default function WebinarRegisterButton({
  webinarId,
  price,
  className,
  children,
}: WebinarRegisterButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const user = useQuery(api.users.getMe);
  const existingRegistration = useQuery(
    api.webinarRegistrations.getUserRegistration,
    { webinarId },
  );
  const createOrder = useAction(
    api.cashfree.createWebinarRegistrationOrder,
  );

  if (existingRegistration?.status === "paid") {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full bg-green-500/20 px-7 py-4 text-base font-bold text-green-300 ${className ?? ""}`}
      >
        <CheckCircle2 className="size-5" />
        Already Registered
      </span>
    );
  }

  const handleRegister = async () => {
    if (!user?.phone) {
      router.push("/onboarding");
      return;
    }

    setIsLoading(true);
    try {
      const cashfree = await load({
        mode:
          process.env.NEXT_PUBLIC_CASHFREE_MODE === "production"
            ? "production"
            : "sandbox",
      });

      const paymentSessionId = await createOrder({
        userPhone: user.phone,
        webinarId,
      });

      await cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self" as const,
      });
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Failed to initialize payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleRegister}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? (
        "Processing..."
      ) : (
        children ?? (
          <>
            Reserve Your Seat - Rs. {price}
            <ArrowRight className="size-5" />
          </>
        )
      )}
    </button>
  );
}
