import type { Meta, StoryObj } from '@storybook/nextjs'

import { SocialNav } from './SocialNav'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/SocialNav',
  component: SocialNav,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialNav>

export default meta

export const Default: Story = {
  args: {
    items: [
      {
        link: 'https://github.com/roryashfordbentley/',
        label: 'GitHub - Rory Ashford-Bentley',
        icon: {
          name: 'Github icon',
          filename: 'github-logo.svg',
          url: '/icons/github-logo.svg',
        },
        id: '681a2cc4754e0e67e94d2ab9',
      },
      {
        link: 'https://bsky.app/profile/roryashfordbentley.dev',
        label: 'Bluesky - Rory Ashford-Bentley',
        icon: {
          filename: 'bluesky-logo.svg',
          id: '681a2db50a85a2fee38506df',
          url: '/icons/bluesky-logo.svg',
        },
        id: '681a2d08754e0e67e94d2abb',
      },
      {
        link: 'https://instagram.com/roikles',
        label: 'Instagram - Rory Ashford-Bentley',
        icon: {
          filename: 'instagram-logo.svg',
          url: '/icons/instagram-logo.svg',
        },
        id: '681b3787754e0e67e94d2abf',
      },
      ,
      {
        link: 'https://storybook.roryashfgordbentley.dev',
        label: 'Storybook - project component stories',
        icon: {
          filename: 'storybook.svg',
          url: '/icons/file/storybook.svg',
        },
        id: '681b3787754e0e67e94d2abf',
      },
    ],
  },
}
