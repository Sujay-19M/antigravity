import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Optimized for static hosting (Cloudflare Pages)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
