import type { Metadata } from "next";
import { Bodoni_Moda, Italiana } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  weight: ["400"],
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
        className={`${bodoniModa.variable} ${italiana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
