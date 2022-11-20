/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: false },
  images: {
    domains: [
      "github-readme-stats.vercel.app",
      "i3.ytimg.com"
    ]
  }
}

module.exports = nextConfig
