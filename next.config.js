/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal production configuration to avoid permission issues
  output: 'export',
  basePath: '/Posspole-catalyst',
  assetPrefix: '/Posspole-catalyst/',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Disable all experimental features
  experimental: {},
  
  // ESLint configuration
  eslint: {
    dirs: ['app', 'components'],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;