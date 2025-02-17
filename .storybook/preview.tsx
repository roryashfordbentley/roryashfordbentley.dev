import type { Preview } from '@storybook/react'

import '@styles/tokens/colours.css'
import '@styles/tokens/fonts.css'
import '@styles/tokens/spacing.css'
import '@styles/tokens/media-queries.css'
import '@styles/tokens/border-radius.css'
import '@styles/tokens/utility.css'

import '@styles/reset.css'
import '@styles/global.css'
import '@styles/typography.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    darkMode: {
      description: 'Toggle dark mode',
      toolbar: {
        title: 'Dark mode',
        icon: 'circlehollow',
        defaultValue: false,
        items: [
          {
            value: 'light',
            icon: 'circlehollow',
            title: 'Light',
          },
          {
            value: 'dark',
            icon: 'circle',
            title: 'Dark',
          },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.darkMode || 'light'

      if (selectedTheme == 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      return <Story />
    },
    (Story) => (
      <div className={inter.className}>
        <Story />
      </div>
    ),
  ],
}

export default preview
