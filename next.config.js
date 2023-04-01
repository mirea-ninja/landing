/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '.',
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['cdn.cms.mirea.ninja'],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/landing',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
