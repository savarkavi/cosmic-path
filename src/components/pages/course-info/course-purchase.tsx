"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Doc } from "../../../../convex/_generated/dataModel";
import { calculateDiscountedPrice, formatINR } from "@/lib/utils";
import CheckoutButton from "@/components/cart/checkout-button";
import AddToCartButton from "@/components/cart/add-to-cart-button";
import { Loader2 } from "lucide-react";

interface CoursePurchaseProps {
  course: Doc<"courses">;
}

const CoursePurchase = ({ course }: CoursePurchaseProps) => {
  const user = useQuery(api.users.getMe);

  const isLoading = user === undefined;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-slate-900">{`₹${formatINR(calculateDiscountedPrice(course.price, course.discount))}`}</span>
        <span className="text-lg text-slate-500 line-through">
          ₹{formatINR(course.price)}
        </span>
        <span className="text-lg text-slate-600">${course.discount}% off</span>
      </div>
      <div className="mt-5 flex flex-col gap-1">
        <AddToCartButton course={course} />
        {isLoading ? (
          <div className="bg-foreground flex items-center justify-center rounded-full py-6">
            <Loader2 className="h-5 w-5 animate-spin text-white" />
          </div>
        ) : (
          <CheckoutButton
            courseIds={[course._id]}
            userPhone={user?.phone}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default CoursePurchase;
