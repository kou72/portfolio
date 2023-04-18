/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS && '/portfolio',
  reactStrictMode: true,
}

module.exports = nextConfig
