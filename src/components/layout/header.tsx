"use client";

import { headerItems } from "@/lib/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import CartSheet from "../cart/cart-sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-90 flex w-full items-center justify-between p-6",
        scrolled
          ? "bg-white/5 text-black backdrop-blur-2xl"
          : "bg-transparent text-gray-600",
      )}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-8 w-8">
          <Image
            src="/cosmic-path-logo.svg"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-italiana text-2xl font-bold text-black uppercase">
          Cosmic Path
        </p>
      </Link>
      <div className="w-ful absolute top-1/2 left-1/2 flex -translate-1/2 items-center gap-14">
        {headerItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className="cursor-pointer text-lg font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <CartSheet />
        <Unauthenticated>
          <SignInButton>
            <Button
              size="lg"
              className="bg-foreground cursor-pointer rounded-full text-white"
            >
              Sign In
            </Button>
          </SignInButton>
        </Unauthenticated>
        <Authenticated>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  width: "36px",
                  height: "36px",
                },
              },
            }}
          />
        </Authenticated>
      </div>
    </div>
  );
};

export default Header;
