// Next.js config wrapped with next-intl plugin (v4)
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000
  },
  experimental: {
    // keep defaults; avoid unstable flags
  }
};

module.exports = withNextIntl(nextConfig);
