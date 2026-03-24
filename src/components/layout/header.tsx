"use client";

import { headerItems, servicesData } from "@/lib/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, PlusCircle, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useQuery,
} from "convex/react";
import { api } from "../../../convex/_generated/api";
import CartSheet from "../cart/cart-sheet";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useQuery(api.users.getMe);
  const isAdmin = user?.role === "admin";
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 z-90 flex w-screen flex-col transition-all">
      <div
        className={cn(
          "hidden h-12 w-full bg-white px-4 py-3 text-black xl:block",
          scrolled ? "-top-12" : "top-0",
        )}
      >
        <div className="mx-auto flex w-full max-w-300 items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#d49f3c]" />
              <span>+91 9654915719</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#d49f3c]" />
              <span>myaccount.abc@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#d49f3c]" />
              <span>Shimla, India</span>
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
      <div className="w-full bg-[#1a1512] p-4 px-4 transition-all duration-300">
        <div
          className={cn(
            "relative mx-auto flex w-full max-w-300 items-center justify-between text-white",
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
          <div className="absolute top-1/2 left-1/2 hidden -translate-1/2 items-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "cursor-pointer bg-transparent text-base font-semibold transition-colors hover:bg-transparent hover:text-[#d49f3c] focus:bg-transparent",
                      pathname === "/" && "text-primary",
                    )}
                  >
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "cursor-pointer bg-transparent px-0 text-base font-semibold transition-colors hover:bg-transparent hover:text-[#d49f3c] focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[#d49f3c] data-[state=open]:hover:bg-transparent",
                      pathname.startsWith("/courses") && "text-primary",
                    )}
                  >
                    Courses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses?type=astrology"
                            className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                          >
                            <span className="text-base font-medium">
                              Astrology courses
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses?type=vastu"
                            className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                          >
                            <span className="text-base font-medium">
                              Vastu courses
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/courses?type=tarot"
                            className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                          >
                            <span className="text-base font-medium">
                              Tarot courses
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() => router.push("/services")}
                    className={cn(
                      "cursor-pointer bg-transparent px-0 text-base font-semibold transition-colors hover:bg-transparent hover:text-[#d49f3c] focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[#d49f3c] data-[state=open]:hover:bg-transparent",
                      pathname.startsWith("/services") && "text-primary",
                    )}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-1">
                      {servicesData.map((service) => (
                        <li key={service.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={
                                service.slug
                                  ? `/services/${service.slug}`
                                  : "/services"
                              }
                              className={cn(
                                "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
                                pathname ===
                                  (service.slug
                                    ? `/services/${service.slug}`
                                    : "/services") && "text-primary",
                              )}
                            >
                              <span className="text-base font-medium">
                                {service.label}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "cursor-pointer bg-transparent text-base font-semibold transition-colors hover:bg-transparent hover:text-[#d49f3c] focus:bg-transparent",
                      pathname === "/consultation" && "text-primary",
                    )}
                  >
                    <Link href="/consultation">Book Consultation</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "cursor-pointer bg-transparent text-base font-semibold transition-colors hover:bg-transparent hover:text-[#d49f3c] focus:bg-transparent",
                      pathname === "/about" && "text-primary",
                    )}
                  >
                    <Link href="/about">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-6">
            <CartSheet />
            <div className="hidden items-center gap-6 lg:flex">
              <AuthLoading>
                <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
              </AuthLoading>
              <Unauthenticated>
                <SignInButton>
                  <Button
                    size="lg"
                    className="cursor-pointer rounded-full bg-white text-black"
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
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Menu className="size-6 text-black" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="z-99 flex w-72 flex-col border-white/10 text-black"
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
                      className={cn(
                        "hover:text-primary rounded-md px-3 py-2.5 text-base font-semibold transition-colors hover:bg-white/5",
                        (pathname === item.href ||
                          (item.href !== "/" &&
                            pathname.startsWith(item.href))) &&
                          "text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 border-t border-gray-200 px-4 pt-6 pb-8">
                  <AuthLoading>
                    <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
                  </AuthLoading>
                  <Unauthenticated>
                    <SignInButton>
                      <Button
                        size="lg"
                        className="bg-foreground w-full cursor-pointer rounded-full text-white"
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                  </Unauthenticated>
                  <Authenticated>
                    <div className="flex w-full items-center justify-between">
                      <span className="text-base font-semibold">
                        My Account
                      </span>
                      <UserButton
                        appearance={{
                          elements: {
                            userButtonAvatarBox: {
                              width: "36px",
                              height: "36px",
                            },
                            userButtonPopoverCard: {
                              pointerEvents: "auto",
                              zIndex: 99999,
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
                    </div>
                  </Authenticated>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
