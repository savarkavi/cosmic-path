"use client";

import { useGuestId } from "@/hooks/useGuestId";
import { useConvexAuth, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useRef } from "react";

const CartMerger = () => {
  const { isAuthenticated } = useConvexAuth();
  const guestId = useGuestId();
  const mergeGuestCart = useMutation(api.cartItems.mergeGuestCart);

  const hasMerged = useRef(false);

  useEffect(() => {
    if (isAuthenticated && guestId && !hasMerged.current) {
      const performMerge = async () => {
        try {
          await mergeGuestCart({ guestId });
          hasMerged.current = true;

          localStorage.removeItem("guest_cart_id");
        } catch (error) {
          console.error("Failed to merge cart:", error);
        }
      };

      performMerge();
    }
  }, [isAuthenticated, guestId, mergeGuestCart]);
  return null;
};

export default CartMerger;
