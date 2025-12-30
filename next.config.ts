import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://dev.to/bugs_bunny",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
