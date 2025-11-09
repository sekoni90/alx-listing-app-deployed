import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  outputFileTracingRoot: __dirname,
  typescript: {
    // Make TypeScript errors fatal in production
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
