import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'en-gb'],
    defaultLocale: 'en-gb',
  },
}

export default withPayload(nextConfig)
