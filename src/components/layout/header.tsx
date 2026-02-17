"use client";

import { headerItems } from "@/lib/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, PlusCircle } from "lucide-react";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import CartSheet from "../cart/cart-sheet";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useQuery(api.users.getMe);
  const isAdmin = user?.role === "admin";

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
        "fixed top-0 left-0 z-90 flex w-full items-center justify-between px-4 py-4 md:p-6",
        scrolled
          ? "bg-white/5 text-black backdrop-blur-2xl"
          : "bg-transparent text-gray-600",
      )}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-10 w-10">
          <Image
            src="/cosmic-path-logo.svg"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="hidden text-xl leading-5 uppercase xl:block">
          <p className="font-semibold text-[#bb8b32]">Cosmic Path</p>
          <div className="text-foreground flex w-full justify-between text-sm">
            {"See Beyond".split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </div>
        </div>
      </Link>

      <div className="absolute top-1/2 left-1/2 hidden -translate-1/2 items-center gap-14 md:flex">
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
              className="bg-foreground cursor-pointer rounded-full text-white max-md:size-9 max-md:p-0"
            >
              <span className="hidden md:inline">Sign In</span>
              <span className="text-xs md:hidden">Sign In</span>
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
          >
            {isAdmin && (
              <UserButton.MenuItems>
                <UserButton.Link
                  label="Create Course"
                  labelIcon={<PlusCircle size={16} />}
                  href="/admin/courses/create"
                />
              </UserButton.MenuItems>
            )}
          </UserButton>
        </Authenticated>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu className="size-6 text-black" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="z-99 w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <div className="relative h-6 w-6">
                  <Image
                    src="/cosmic-path-logo.svg"
                    alt="logo"
                    fill
                    className="object-cover"
                  />
                </div>
                Cosmic Path
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4">
              {headerItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground hover:bg-accent rounded-md px-3 py-2.5 text-base font-semibold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
