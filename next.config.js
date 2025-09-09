
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Additional Next.js specific configurations
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Performance optimizations
  compress: true,
  
  // Disable experimental features that might cause permission issues
  experimental: {
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
      
      // Additional optimizations for Cloudflare Pages
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    
    // Fallback for Node.js modules in browser
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  
  // Additional optimizations for static export
  generateEtags: false,
  distDir: '.next',
};

module.exports = nextConfig;
