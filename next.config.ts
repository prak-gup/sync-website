import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow production builds to succeed even if ESLint errors exist in vendored/demo components.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Allow production builds to succeed even if TS errors exist in vendored/demo components.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
