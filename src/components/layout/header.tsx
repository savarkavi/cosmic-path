"use client";

import { headerItems } from "@/lib/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, PlusCircle, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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
    <div className="fixed left-0 z-90 flex w-full flex-col transition-all">
      <div
        className={cn(
          "hidden h-12 w-full bg-[#1a1512] px-4 py-3 xl:block",
          scrolled ? "-top-12" : "top-0",
        )}
      >
        <div className="mx-auto flex w-full max-w-300 items-center justify-between text-sm text-gray-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#d49f3c]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#d49f3c]" />
              <span>contact@cosmicpath.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#d49f3c]" />
              <span>New Delhi, India</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-white">
              <FaFacebook size={14} />
            </a>
            <a href="#" className="transition-colors hover:text-white">
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-gray-300 bg-[#F5F5F0] p-4 px-4 transition-all duration-300">
        <div
          className={cn(
            "relative mx-auto flex w-full max-w-300 items-center justify-between text-black",
          )}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-40">
              <Image
                src="/logo-cosmic-path.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="absolute top-1/2 left-1/2 hidden -translate-1/2 items-center gap-10 lg:flex">
            {headerItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                className="cursor-pointer text-lg font-semibold transition-colors hover:text-[#d49f3c]"
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
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Menu className="size-6 text-black" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="z-99 w-72 border-white/10 text-black"
              >
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
                <nav className="mt-8 flex flex-col gap-2 px-4">
                  {headerItems.map((item) => (
                    <Link
                      href={item.href}
                      key={item.label}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-primary rounded-md px-3 py-2.5 text-base font-semibold transition-colors hover:bg-white/5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
