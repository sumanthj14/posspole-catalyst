
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/Posspole-catalyst" : "",
  assetPrefix: isProd ? "/Posspole-catalyst/" : "",
  // output: "export", // Commented out for development mode
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
