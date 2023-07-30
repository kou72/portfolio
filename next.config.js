/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && '',
  reactStrictMode: true,
}

module.exports = nextConfig
