import type { Metadata } from "next";
import { Italiana, EB_Garamond } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import { Toaster } from "sonner";
import CartMerger from "@/components/cart-merger";

const italiana = Italiana({
  variable: "--font-italiana",
  weight: ["400"],
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmic Path",
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
        className={`${ebGaramond.variable} ${italiana.variable} flex min-h-screen flex-col justify-between antialiased`}
      >
        <ClerkProvider>
          <ConvexClientProvider>
            <CartMerger />
            {children}
          </ConvexClientProvider>
        </ClerkProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
