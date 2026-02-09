"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import CheckoutButton from "./checkout-button";
import { formatINR } from "@/lib/utils";

interface CartSummaryProps {
  subtotal: number;
  itemCount: number;
  courseIds: Id<"courses">[];
}

const CartSummary = ({ subtotal, itemCount, courseIds }: CartSummaryProps) => {
  const user = useQuery(api.users.getMe);

  return (
    <div className="border-border bg-card rounded-xl border p-6 shadow-sm">
      <h2 className="text-foreground mb-4 text-xl font-bold">Order Summary</h2>

      <div className="space-y-3">
        <div className="text-muted-foreground flex justify-between">
          <span>Items ({itemCount})</span>
          <span>₹{formatINR(subtotal)}</span>
        </div>

        <div className="border-border border-t pt-3">
          <div className="text-foreground flex justify-between text-lg font-bold">
            <span>Subtotal</span>
            <span className="text-primary">₹{formatINR(subtotal)}</span>
          </div>
          <p className="text-muted-foreground mt-1 text-xs">
            Taxes and discounts calculated at checkout
          </p>
        </div>
      </div>

      <CheckoutButton
        courseIds={courseIds}
        userPhone={user?.phone}
        className="mt-6"
      >
        Proceed to Checkout
      </CheckoutButton>
    </div>
  );
};

export default CartSummary;
