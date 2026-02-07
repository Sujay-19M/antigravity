import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Optimized for static hosting (Cloudflare Pages/GitHub Pages)
  basePath: process.env.NODE_ENV === "production" ? "/mandarmani-havens" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/mandarmani-havens/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
