import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images uploaded through the CMS (Cloudinary) and the stock photos used in its content
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
