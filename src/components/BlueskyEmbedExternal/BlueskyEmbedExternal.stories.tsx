import type { Meta, StoryObj } from '@storybook/nextjs'

import { BlueskyEmbedExternal } from './BlueskyEmbedExternal'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlueskyEmbedExternal',
  component: BlueskyEmbedExternal,
  parameters: {
    layout: 'padded',
    backgrounds: {
      values: [
        { name: 'Primary', value: '#ece9e2' },
        { name: 'Secondary', value: '#a03215' },
        { name: 'Tertiary', value: '#1b2227' },
      ],
      default: 'Primary', // Set the initial background by name
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlueskyEmbedExternal>

export default meta

export const Default: Story = {
  args: {
    link: 'https://github.com/vercel/next.js/discussions/77740',
    title: 'RFC: Deployment Adapters API · vercel next.js · Discussion #77740',
    thumb:
      'https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:np63qsk4tlzguykanskcipxi/bafkreicscjdxmst3p52y34h2xh2j32cwcrfwxrakfxoadsotpqxdklhhxe@jpeg',
    thumbAlt: 'Alt text for embedded image',
    description:
      'To ensure Next.js can be deployed anywhere, including serverless platforms with custom requirements, we are planning to add deployment adapters. Vercel will use the same adapter API as every other partner.',
  },
  parameters: {
    backgrounds: {
      default: 'Primary',
    },
  },
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
  parameters: {
    backgrounds: {
      default: 'Secondary',
    },
  },
}

export const Tertiary: Story = {
  args: {
    ...Default.args,
    variant: 'tertiary',
  },
  parameters: {
    backgrounds: {
      default: 'Tertiary',
    },
  },
}
