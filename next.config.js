/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '.',
  reactStrictMode: true,
  images: {
    domains: ['cdn.cms.mirea.ninja'],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/feedback',
        destination: 'https://d5d0k8rjhrtud9q2useu.apigw.yandexcloud.net/feedback',
      },
    ]
  },
}

module.exports = nextConfig
