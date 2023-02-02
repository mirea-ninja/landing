/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '.',
  reactStrictMode: true,
  images: {
    domains: ['cdn.cms.mirea.ninja'],
    unoptimized: true,
  },
}

module.exports = nextConfig
