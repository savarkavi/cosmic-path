"use client";

import { headerItems } from "@/lib/constants";
import { Handbag } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
        scrolled ? "bg-white/5 backdrop-blur-2xl" : "bg-transparent",
      )}
    >
      <div className="flex items-center gap-2">
        <div className="relative h-10 w-10">
          <Image
            src="/cosmic-path-logo.svg"
            alt="logo"
            fill
            className="object-cover"
          />
        </div>
        <p className="font-italiana text-2xl font-bold uppercase">
          Cosmic Path
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 flex -translate-1/2 items-center gap-10">
        {headerItems.map((item) => (
          <p
            key={item.label}
            className="text-muted-foreground cursor-pointer text-lg font-semibold"
          >
            {item.label}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <Handbag className="cursor-pointer" />
        <Button
          size="lg"
          className="bg-foreground cursor-pointer rounded-full text-white"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
