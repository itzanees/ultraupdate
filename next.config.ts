import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // output: "export",
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ultratekcs.com" },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;