import { useQuery } from "convex/react";
import { useGuestId } from "./useGuestId";
import { api } from "../../convex/_generated/api";
import { calculateCartTotal } from "@/lib/utils";

export function useCart() {
  const guestId = useGuestId();

  const data = useQuery(api.cartItems.getCart, { guestId });

  const isLoading = data === undefined;

  const totalPrice = data ? calculateCartTotal(data) : 0;

  return {
    cartItems: data || [],
    count: data?.length || 0,
    subtotal: totalPrice,
    isLoading,
  };
}
