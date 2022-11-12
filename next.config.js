/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: [
      "github-readme-stats.vercel.app",
    ]
  }
}

module.exports = nextConfig
