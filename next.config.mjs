import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  /*i18n: {
    locales: ['en', 'en-gb'],
    defaultLocale: 'en-gb',
  },*/
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
