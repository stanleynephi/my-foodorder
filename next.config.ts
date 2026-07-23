import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "goldbelly.imgix.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },

  typescript: {
    // ⚠️ Dangerously allows production builds to successfully complete
    // even if your project has type errors.
    ignoreBuildErrors: true,
  },
}

export default nextConfig
