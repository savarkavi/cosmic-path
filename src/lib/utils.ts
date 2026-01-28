import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDiscountedPrice(
  price: number,
  discountPercentage?: number,
): number {
  if (!discountPercentage || discountPercentage <= 0) {
    return price;
  }

  if (discountPercentage >= 100) {
    return 0;
  }

  const discountedPrice = price - (price * discountPercentage) / 100;

  return Math.round(discountedPrice);
}
