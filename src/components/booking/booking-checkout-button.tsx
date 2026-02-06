"use client";

import { useState } from "react";
import { useAction } from "convex/react";
import { load } from "@cashfreepayments/cashfree-js";
import { toast } from "sonner";
import { api } from "../../../convex/_generated/api";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export interface BookingFormData {
  fullName: string;
  sex: "male" | "female" | "other";
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  serviceType: string;
  message?: string;
}

interface BookingCheckoutButtonProps {
  formData: BookingFormData;
  userPhone: string | undefined;
  onSuccess?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function BookingCheckoutButton({
  formData,
  userPhone,
  onSuccess,
  disabled = false,
  className,
}: BookingCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const createBookingOrder = useAction(api.cashfree.createBookingOrder);

  const handleCheckout = async () => {
    if (!userPhone) {
      toast.error("Phone number is required for booking.");
      return;
    }

    setIsLoading(true);
    try {
      const cashfree = await load({
        mode: "sandbox",
      });

      const paymentSessionId = await createBookingOrder({
        userPhone,
        serviceType: formData.serviceType,
        message: formData.message,
        sex: formData.sex,
        dateOfBirth: formData.dateOfBirth,
        timeOfBirth: formData.timeOfBirth,
        placeOfBirth: formData.placeOfBirth,
      });

      const checkoutOptions = {
        paymentSessionId,
        redirectTarget: "_self" as const,
      };

      onSuccess?.();
      await cashfree.checkout(checkoutOptions);
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Failed to initialize payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleCheckout}
      disabled={disabled || isLoading}
      className={cn(
        "cursor-pointer",
        isLoading && "cursor-not-allowed",
        className,
      )}
    >
      {isLoading ? "Processing..." : "Proceed to pay"}
    </Button>
  );
}
