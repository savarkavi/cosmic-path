"use client";

import { useGuestId } from "@/hooks/useGuestId";
import { Doc } from "../../../convex/_generated/dataModel";
import { Button } from "../ui/button";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface AddToCartButton {
  course: Doc<"courses">;
}

const AddToCartButton = ({ course }: AddToCartButton) => {
  const [isLoading, setIsLoading] = useState(false);

  const guestId = useGuestId();
  const addToCart = useMutation(api.cartItems.addToCart);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await addToCart({ courseId: course._id, guestId });
    } catch (error) {
      toast.error("Failed to add to cart. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading}
      variant="outline"
      className="border-primary w-full rounded-full py-6"
      onClick={handleAddToCart}
    >
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <span>Add to cart</span>
      )}
    </Button>
  );
};

export default AddToCartButton;
