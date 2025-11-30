import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: '.next',
  outputFileTracingRoot: __dirname,
  typescript: {
    // Make TypeScript errors fatal in production
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
