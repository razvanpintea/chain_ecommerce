/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['razwebdev.com', 'vlkxhabmmxiwvlymbfgy.supabase.co'], // Add both required domains
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

