const withPlugins = require('next-compose-plugins');

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: ['pbs.twimg.com'],
    loader: 'akamai',
    path: '',
  },
};

module.exports = withPlugins([], nextConfig);
