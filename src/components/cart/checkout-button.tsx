"use client";

import { useState } from "react";
import { useAction } from "convex/react";
import { load } from "@cashfreepayments/cashfree-js";
import { toast } from "sonner";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface CheckoutButtonProps {
  courseIds: Id<"courses">[];
  userPhone: string | undefined;
  children?: React.ReactNode;
  className?: string;
}

export default function CheckoutButton({
  courseIds,
  userPhone,
  children = "Buy Now",
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const createOrder = useAction(api.cashfree.createOrder);

  const handleCheckout = async () => {
    if (!userPhone) {
      return router.push("/onboarding");
    }

    setIsLoading(true);
    try {
      const cashfree = await load({
        mode: "sandbox",
      });

      const paymentSessionId = await createOrder({
        itemsIds: courseIds,
        userPhone,
      });

      const checkoutOptions = {
        paymentSessionId,
        redirectTarget: "_self" as const,
      };

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
      onClick={handleCheckout}
      disabled={isLoading}
      className={`bg-foreground mt-4 w-full py-6 text-white`}
    >
      {isLoading ? "Processing..." : children}
    </Button>
  );
}
