import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "grand-horse-125.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
