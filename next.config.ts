import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-study-notes",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
