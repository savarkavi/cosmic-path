import type { Metadata } from "next";
import { EB_Garamond, Playfair } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import { Toaster } from "sonner";
import CartMerger from "@/components/cart-merger";

export const playfair = Playfair({
  variable: "--font-playfair",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmic Path - See Beyond",
  description: "Astrology app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${playfair.variable} flex min-h-screen flex-col justify-between antialiased`}
      >
        <ClerkProvider>
          <ConvexClientProvider>
            <CartMerger />
            {children}
          </ConvexClientProvider>
        </ClerkProvider>
        <Toaster
          position="top-right"
          closeButton
          toastOptions={{
            classNames: {
              closeButton:
                "!bg-red-500 !text-white !absolute !top-1/2 !right-2 !left-auto !transform-x-none !transform-y-1/2",
            },
          }}
          className="z-99"
        />
      </body>
    </html>
  );
}
