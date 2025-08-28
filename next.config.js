
/** @type {import('next').NextConfig} */
const buildConfig = require('./build.config.js');

const env = process.env.NODE_ENV || 'development';
const config = buildConfig[env] || buildConfig.development;

const nextConfig = {
  ...config,
  // Additional Next.js specific configurations
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Performance optimizations
  compress: true,
  
  // Disable experimental features that might cause permission issues
  experimental: {
    ...config.experimental,
    instrumentationHook: false,
  },
  
  // ESLint configuration
  eslint: {
    dirs: ['app', 'components'],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Webpack configuration for optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize bundle size
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\\/]node_modules[\\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
