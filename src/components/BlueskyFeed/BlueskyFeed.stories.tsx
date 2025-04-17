import type { Meta, StoryObj } from '@storybook/react'

import { BlueskyFeed } from './BlueskyFeed'

import { BlueskyCard } from '@components/BlueskyCard/BlueskyCard'

import {
  Default as CardDefault,
  Secondary,
  Tertiary,
} from '@components/BlueskyCard/BlueskyCard.stories'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/BlueskyFeed',
  component: BlueskyFeed,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlueskyFeed>

export default meta

export const Default: Story = {
  args: {
    posts: [
      {
        post: {
          author: {
            avatar:
              'https://cdn.bsky.app/img/avatar/plain/did:plc:mkhsyxtw3dld6f53t5npnoot/bafkreiewioaywizz5us2jvnox3fsc6nssek5k6vnt6a5nqosvlkj3jqv4e@jpeg',
            displayName: 'Rory',
            handle: 'roikles.bsky.social',
          },
          record: {
            text: 'A bit of Typescript wrangling and a sprinkle of Tailwind and I have got a half decent bsky integration.',
          },
          embed: null,
          replyCount: 100,
          repostCount: 200,
          likeCount: 300,
        },
      },
      {
        post: {
          author: {
            avatar:
              'https://cdn.bsky.app/img/avatar/plain/did:plc:mkhsyxtw3dld6f53t5npnoot/bafkreiewioaywizz5us2jvnox3fsc6nssek5k6vnt6a5nqosvlkj3jqv4e@jpeg',
            displayName: 'Rory',
            handle: 'roikles.bsky.social',
          },
          record: {
            text: 'A bit of Typescript wrangling and a sprinkle of Tailwind and I have got a half decent bsky integration.',
          },
          embed: null,
          replyCount: 100,
          repostCount: 200,
          likeCount: 300,
        },
      },
      {
        post: {
          author: {
            avatar:
              'https://cdn.bsky.app/img/avatar/plain/did:plc:mkhsyxtw3dld6f53t5npnoot/bafkreiewioaywizz5us2jvnox3fsc6nssek5k6vnt6a5nqosvlkj3jqv4e@jpeg',
            displayName: 'Rory',
            handle: 'roikles.bsky.social',
          },
          record: {
            text: 'A bit of Typescript wrangling and a sprinkle of Tailwind and I have got a half decent bsky integration.',
          },
          embed: null,
          replyCount: 100,
          repostCount: 200,
          likeCount: 300,
        },
      },
    ],
  },
}
