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
import { useState } from 'react'
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'

export const Code = (props: { label: string; codeString: string }) => {
  const codeHTML = highlight(props.codeString as string)

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(props.codeString).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const [dark, setDark] = useState(true)

  const toggleDarkMode = () => {
    setDark((prevDark) => !prevDark)
  }

  return (
    <div className={styles['container--dark']}>
      <header className={styles.header}>
        <div className={styles.circles}>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
        </div>

        {props.label && <div className={styles.title}>{props.label}</div>}

        <div className={styles.buttonGroup}>
          <button title="Toggle Dark Theme" className={styles.button} onClick={toggleDarkMode}>
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>

          <button title="Copy" className={styles.button} onClick={handleCopy}>
            {copied ? <ClipboardDocumentCheckIcon /> : <ClipboardDocumentIcon />}
          </button>
        </div>
      </header>

      <pre className={styles.codeWrapper}>
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} className={styles.code} />
      </pre>
    </div>
  )
}
`,
  },
}
