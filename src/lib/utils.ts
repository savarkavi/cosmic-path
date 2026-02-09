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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function calculateCartTotal(cartItems: any[]) {
  return cartItems.reduce((total, item) => {
    const course = item.course;
    if (!course) return total;

    const discountedPrice = calculateDiscountedPrice(
      course.price,
      course.discount,
    );

    return total + discountedPrice;
  }, 0);
}

export function formatINR(value: number | string) {
  return Number(value).toLocaleString("en-IN");
}
