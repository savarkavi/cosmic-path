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
import { ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const CartSheet = () => {
  const { count, cartItems, isLoading, subtotal } = useCart();

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
          <SheetTitle className="text-3xl">Your Cart</SheetTitle>
        </SheetHeader>
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
                  <p className="font-bold text-black">{item.course.title}</p>
                  <p>{`₹${calculateDiscountedPrice(item.course.price, item.course.discount)}`}</p>
                </div>
                <Button
                  variant="outline"
                  className="border-primary w-fit rounded-full text-sm"
                >
                  <X />
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        <SheetFooter>
          <div className="flex items-center gap-12 text-xl font-bold">
            <p>Subtotal</p>
            <p>{`₹${subtotal}`}</p>
          </div>
          <Button className="bg-foreground mt-4 w-full py-6 text-white">
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
