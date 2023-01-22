/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],

    // disable optimization for Next SSG
    unoptimized: true, 
  },
}

module.exports = nextConfig
