import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  /*i18n: {
    locales: ['en', 'en-gb'],
    defaultLocale: 'en-gb',
  },*/
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Attempting to fix issue with
  // Failed to generate cache key for URL {
  // href: 'https://bsky.social/xrpc/com.atproto.server.createSession',
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },
  // Solution for image 400 on vercel: https://github.com/vercel/next.js/discussions/20138
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/media/**',
      },
    ],
  },
}

export default withPayload(nextConfig)
