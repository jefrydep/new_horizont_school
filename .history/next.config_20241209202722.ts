import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    unoptimized:false
  },
  output: "export",
  trailingSlash: true,
  /* config options here */
};

export default nextConfig;
