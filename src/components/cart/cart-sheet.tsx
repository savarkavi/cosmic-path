"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/useCart";
import { calculateDiscountedPrice } from "@/lib/utils";
import { Loader2, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { Id } from "../../../convex/_generated/dataModel";
import { toast } from "sonner";
import CheckoutButton from "./checkout-button";

const CartSheet = () => {
  const [isRemoving, setIsRemoving] = useState({ itemId: "", loading: false });

  const user = useQuery(api.users.getMe);
  const { count, cartItems, isLoading, subtotal } = useCart();
  const removeItem = useMutation(api.cartItems.removeFromCart);

  const handleRemoveItem = async (
    itemId: Id<"cartItems">,
    guestId: string | undefined,
  ) => {
    setIsRemoving({ itemId, loading: true });

    try {
      await removeItem({ cartItemId: itemId, guestId });
      toast.success("Item removed from the cart.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsRemoving({ itemId: "", loading: false });
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <ShoppingCart className="cursor-pointer" />
        <span className="bg-primary absolute -top-4 -right-4 flex h-4 w-4 shrink-0 items-center justify-center rounded-full p-3 text-sm text-white">
          {count}
        </span>
      </SheetTrigger>
      <SheetContent className="z-99">
        <SheetHeader>
          <SheetTitle className="text-3xl">Cart</SheetTitle>
        </SheetHeader>
        {isLoading || user === undefined ? (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <Loader2 className="animate-spin" />
            <span>Loading cart...</span>
          </div>
        ) : (
          <>
            {cartItems.length === 0 && (
              <div className="flex h-full items-center justify-center p-5">
                <p className="text-2xl">Your cart is empty.</p>
              </div>
            )}
            <div className="mt-8 flex flex-col gap-8 p-5">
              {cartItems.map((item) => (
                <div key={item._id} className="flex gap-4">
                  <div className="relative h-26 w-20 shrink-0">
                    <Image
                      src={
                        item.course.imageUrl
                          ? item.course.imageUrl
                          : "/placeholder.png"
                      }
                      alt="course image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex w-full flex-col justify-between">
                    <div>
                      <p className="font-bold text-black">
                        {item.course.title}
                      </p>
                      <p>{`₹${calculateDiscountedPrice(item.course.price, item.course.discount)}`}</p>
                    </div>
                    <Button
                      variant="outline"
                      disabled={isRemoving.loading}
                      className="border-primary w-fit min-w-24 cursor-pointer rounded-full text-sm"
                      onClick={() => handleRemoveItem(item._id, item.guestId)}
                    >
                      {isRemoving.itemId === item._id && isRemoving.loading ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <span className="flex items-center gap-1">
                          <X />
                          Remove
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            {cartItems.length !== 0 && (
              <SheetFooter>
                <div className="flex items-center gap-12 text-xl font-bold">
                  <p>Subtotal</p>
                  <p>{`₹${subtotal}`}</p>
                </div>
                <CheckoutButton
                  courseIds={cartItems.map((item) => item.course.courseId)}
                  userPhone={user?.phone}
                >
                  Checkout
                </CheckoutButton>
              </SheetFooter>
            )}
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
