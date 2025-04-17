import type { Meta, StoryObj } from '@storybook/react'

import { BlueskyCard } from './BlueskyCard'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlueskyCard',
  component: BlueskyCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlueskyCard>

export default meta

export const Default: Story = {
  args: {
    avatar:
      'https://cdn.bsky.app/img/avatar/plain/did:plc:mkhsyxtw3dld6f53t5npnoot/bafkreiewioaywizz5us2jvnox3fsc6nssek5k6vnt6a5nqosvlkj3jqv4e@jpeg',
    displayName: 'Rory',
    handle: 'roikles.bsky.social',
    repost: false,
    content:
      'RFC: Deployment Adapters API We are planning to support adapters to deploy Next.js to any provider. github.com/vercel/next....',
    facets: [
      {
        features: [
          {
            $type: 'app.bsky.richtext.facet#link',
            uri: 'https://github.com/vercel/next.js/discussions/77740',
          },
        ],
        index: {
          byteEnd: 128,
          byteStart: 100,
        },
      },
    ],
    //embed: undefined,
    replyCount: 100,
    repostCount: 200,
    likeCount: 300,
    variant: undefined,
  },
}

export const Repost: Story = {
  args: {
    ...Default.args,
    repost: true,
  },
}

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
}

export const SecondaryRepost: Story = {
  args: {
    ...Secondary.args,
    repost: true,
  },
}

export const Tertiary: Story = {
  args: {
    ...Default.args,
    variant: 'tertiary',
  },
}

export const TertiaryRepost: Story = {
  args: {
    ...Tertiary.args,
    repost: true,
  },
}
