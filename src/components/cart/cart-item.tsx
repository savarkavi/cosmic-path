"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { calculateDiscountedPrice, formatINR } from "@/lib/utils";
import { Loader2, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface CartItemProps {
  item: {
    _id: Id<"cartItems">;
    guestId?: string;
    course: {
      courseId: Id<"courses">;
      title: string;
      price: number;
      discount?: number;
      imageUrl?: string | null;
    };
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const removeItem = useMutation(api.cartItems.removeFromCart);

  const handleRemoveItem = async () => {
    setIsRemoving(true);

    try {
      await removeItem({ cartItemId: item._id, guestId: item.guestId });
      toast.success("Item removed from the cart.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsRemoving(false);
    }
  };

  const discountedPrice = calculateDiscountedPrice(
    item.course.price,
    item.course.discount,
  );

  return (
    <div className="border-border flex gap-6 border-b pb-6">
      <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={item.course.imageUrl ? item.course.imageUrl : "/placeholder.png"}
          alt={item.course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-foreground text-lg font-bold">
            {item.course.title}
          </h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-primary text-xl font-bold">
              ₹{formatINR(discountedPrice)}
            </span>
            {item.course.discount && item.course.discount > 0 && (
              <>
                <span className="text-muted-foreground text-sm line-through">
                  ₹{formatINR(item.course.price)}
                </span>
                <span className="bg-accent text-accent-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                  {item.course.discount}% off
                </span>
              </>
            )}
          </div>
        </div>
        <Button
          variant="outline"
          disabled={isRemoving}
          className="border-destructive text-destructive hover:bg-destructive mt-3 w-fit min-w-28 cursor-pointer rounded-full hover:text-white"
          onClick={handleRemoveItem}
        >
          {isRemoving ? (
            <Loader2 className="animate-spin" />
          ) : (
            <span className="flex items-center gap-1">
              <X className="h-4 w-4" />
              Remove
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
