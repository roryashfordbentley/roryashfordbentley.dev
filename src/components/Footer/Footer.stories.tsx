import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './Footer'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default meta

export const Default: Story = {
  args: {
    contactTitle: 'Contact',
    email: 'hello@roryashfordbentley.dev',
    socialTitle: 'Find me on',
    socialLinks: [
      {
        footerSocialTitle: 'Bluesky',
        footerSocialLink: 'https://roikles.bsky.social/profile/rory.ashford.bentley',
      },
      {
        footerSocialTitle: 'GitHub',
        footerSocialLink: 'https://github.com/roryashfordbentley',
      },
    ],
    toolsTitle: 'Built with',
    tools: [
      {
        footerToolsTitle: 'Next.js',
        footerToolsLink: 'https://nextjs.org/',
        footerToolsIcon: {
          url: '/rab-logo-box-inverted.svg',
          alt: 'Next.js logo',
        },
      },
      {
        footerToolsTitle: 'Payload',
        footerToolsLink: 'https://payloadcms.com/',
        footerToolsIcon: {
          url: '/rab-logo-box-inverted.svg',
          alt: 'Payload logo',
        },
      },
      {
        footerToolsTitle: 'Vercel',
        footerToolsLink: 'https://vercel.com/',
        footerToolsIcon: {
          url: '/rab-logo-box-inverted.svg',
          alt: 'Vercel logo',
        },
      },
      {
        footerToolsTitle: 'Vercel',
        footerToolsLink: 'https://vercel.com/',
        footerToolsIcon: {
          url: '/rab-logo-box-inverted.svg',
          alt: 'Vercel logo',
        },
      },
      {
        footerToolsTitle: 'Vercel',
        footerToolsLink: 'https://vercel.com/',
        footerToolsIcon: {
          url: '/rab-logo-box-inverted.svg',
          alt: 'Vercel logo',
        },
      },
    ],
  },
}
