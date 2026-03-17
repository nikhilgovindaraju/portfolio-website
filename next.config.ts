import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "cdn.jsdelivr.net" }],
  },
};

export default nextConfig;