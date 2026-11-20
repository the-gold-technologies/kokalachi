import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images uploaded through the CMS (Cloudinary) and the stock photos used in its content
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // Trip pages moved from /journeys to /tour-details: keep old links and search results working
  async redirects() {
    return [
      { source: "/journeys", destination: "/tour-details", permanent: true },
      { source: "/journeys/:slug", destination: "/tour-details/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
