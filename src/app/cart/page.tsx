"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useCart } from "@/hooks/useCart";
import { Loader2, ShoppingCart, ArrowLeft } from "lucide-react";
import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
  const user = useQuery(api.users.getMe);
  const { cartItems, isLoading, subtotal } = useCart();

  if (isLoading || user === undefined) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        <Loader2 className="text-primary h-10 w-10 animate-spin" />
        <span className="text-muted-foreground mt-4 text-lg">
          Loading your cart...
        </span>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center text-center">
          <div className="bg-muted mb-6 flex h-24 w-24 items-center justify-center rounded-full">
            <ShoppingCart className="text-muted-foreground h-12 w-12" />
          </div>
          <h1 className="text-foreground text-3xl font-bold">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground mt-2 max-w-md">
            Looks like you haven&apos;t added any courses yet. Explore our
            collection and find something interesting!
          </p>
          <Link href="/courses">
            <Button className="bg-foreground mt-8 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Courses
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] px-4 py-32 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-foreground text-4xl font-bold">Shopping Cart</h1>
          <p className="text-muted-foreground mt-1">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            your cart
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="border-border bg-card rounded-xl border p-6 shadow-sm">
              <div className="flex flex-col gap-6">
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div>
              <CartSummary
                subtotal={subtotal}
                itemCount={cartItems.length}
                courseIds={cartItems.map((item) => item.course.courseId)}
              />

              <Link href="/courses" className="mt-4 block">
                <Button
                  variant="outline"
                  className="border-primary text-primary w-full"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
