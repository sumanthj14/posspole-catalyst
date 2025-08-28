// Build configuration for different environments
const buildConfig = {
  development: {
    basePath: '',
    assetPrefix: '',
    output: undefined,
    images: {
      unoptimized: false,
    },
    experimental: {
      optimizeCss: false,
    },
  },
  production: {
    basePath: '/Posspole-catalyst',
    assetPrefix: '/Posspole-catalyst/',
    output: 'export',
    images: {
      unoptimized: true,
    },
    experimental: {
      optimizeCss: true,
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
  },
  test: {
    basePath: '',
    assetPrefix: '',
    output: 'export',
    images: {
      unoptimized: true,
    },
  },
};

module.exports = buildConfig;