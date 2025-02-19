import type { Meta, StoryObj } from '@storybook/react'

import { Code } from './Code'

type Story = StoryObj<typeof meta>

const meta = {
  title: 'Components/Code',
  component: Code,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Code>

export default meta

export const Default: Story = {
  args: {
    label: 'Code.tsx',
    codeString: `import styles from './Code.module.css'
import { highlight } from 'sugar-high'

export const Code = (props: { example: string }) => {
  const codeHTML = highlight(props.example as string)

  return (
    <div>
      <code
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        className={styles.code}
      />
    </div>
  )
}`,
  },
}
