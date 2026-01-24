import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable error overlay in development
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  // Suppress hydration warnings
  reactStrictMode: false,
};

export default nextConfig;
