import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(process.env.GITHUB_PAGES === "true" ? {
    output: "export" as const,
    basePath: "/kita",
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
