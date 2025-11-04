import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Fast Refresh (React Hot Reload)
  reactStrictMode: true,
  
  // Turbopack (default in Next.js 16) handles file watching better than webpack
  // If file watching issues persist, you can use webpack instead by running: npm run dev -- --webpack
};

export default nextConfig;