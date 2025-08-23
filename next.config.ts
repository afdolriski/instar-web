import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    remotePatterns: [new URL('https://*.tempo.co/**')],
    loader: 'custom',
    loaderFile: './src/lib/image-loader.js',
  },
};

export default nextConfig;
