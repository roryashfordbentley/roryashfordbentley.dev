import type { Meta, StoryObj } from '@storybook/nextjs'

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
        footerToolsTitle: 'React',
        footerToolsLink: 'https://react.dev/',
        footerToolsIcon: {
          url: '/api/icons/file/react.svg',
          alt: 'Next.js logo',
        },
      },
      {
        footerToolsTitle: 'Next.js',
        footerToolsLink: 'https://nextjs.org/',
        footerToolsIcon: {
          url: '/api/icons/file/next.svg',
          alt: 'Next.js logo',
        },
      },
      {
        footerToolsTitle: 'Vercel',
        footerToolsLink: 'https://vercel.com/',
        footerToolsIcon: {
          url: '/api/icons/file/vercel.svg',
          alt: 'Vercel logo',
        },
      },
      {
        footerToolsTitle: 'Payload',
        footerToolsLink: 'https://payloadcms.com/',
        footerToolsIcon: {
          url: '/api/icons/file/payload.svg',
          alt: 'Payload logo',
        },
      },
      {
        footerToolsTitle: 'Storybook',
        footerToolsLink: 'https://storybook.js.org/',
        footerToolsIcon: {
          url: '/api/icons/file/storybook.svg',
          alt: 'Vercel logo',
        },
      },
    ],
  },
}
