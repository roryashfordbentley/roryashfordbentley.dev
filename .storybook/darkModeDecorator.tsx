import { Preview } from '@storybook/react'

const preview: Preview = {
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme || 'light'

      if (selectedTheme == 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      return
    },
  ],
}

export default preview
