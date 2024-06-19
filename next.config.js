/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.fallback = { fs: false }

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
  },
}

module.exports = nextConfig
