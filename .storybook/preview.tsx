import type { Preview } from '@storybook/nextjs'
import { Inter, Source_Serif_4 } from 'next/font/google'

import '@styles/tokens/colours.css'
import '@styles/tokens/fonts.css'
import '@styles/tokens/spacing.css'
import '@styles/tokens/media-queries.css'
import '@styles/tokens/border-radius.css'
import '@styles/tokens/utility.css'
import '@styles/tokens/grids.css'
import '@styles/tokens/box-shadows.css'

import '@styles/reset.css'
import '@styles/global.css'
import '@styles/typography.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-family-inter',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-family-source-serif',
})

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
      <div
        className={`${inter.variable} ${sourceSerif.variable}`}
        style={{ fontFamily: 'var(--font-family-source-serif)' }}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
