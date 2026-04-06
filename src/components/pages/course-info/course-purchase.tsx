"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Doc } from "../../../../convex/_generated/dataModel";
import CheckoutButton from "@/components/cart/checkout-button";
import AddToCartButton from "@/components/cart/add-to-cart-button";
import { Loader2, ShieldCheck } from "lucide-react";

interface CoursePurchaseProps {
  course: Doc<"courses">;
}

const CoursePurchase = ({ course }: CoursePurchaseProps) => {
  const user = useQuery(api.users.getMe);

  const isLoading = user === undefined;

  return (
    <div className="flex flex-col gap-3">
      <AddToCartButton course={course} />
      {isLoading ? (
        <div className="bg-foreground flex items-center justify-center rounded-xl py-4">
          <Loader2 className="h-5 w-5 animate-spin text-white" />
        </div>
      ) : (
        <CheckoutButton
          courseIds={[course._id]}
          userPhone={user?.phone}
          className="rounded-xl"
        />
      )}
      <div className="mt-1 flex items-center justify-center gap-1.5 text-xs text-[#a5a09a]">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>Secure checkout</span>
      </div>
    </div>
  );
};

export default CoursePurchase;
