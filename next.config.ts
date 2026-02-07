import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Optimized for static hosting (Cloudflare Pages/GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/antigravity" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
