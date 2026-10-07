import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: false, // This ensures console.log is kept in production
  },
};

export default nextConfig;
