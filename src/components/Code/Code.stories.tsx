import type { Meta, StoryObj } from '@storybook/nextjs'

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

export const LongText: Story = {
  args: {
    label: 'long text',
    codeString: `#!/bin/sh

echo "Running tests before pushing..."
echo "Check to makesure that there are no local file changes since last commit that could cause a build to differ locally"
git diff HEAD --quiet && npx vitest run --testTimeout=0

# Check if the tests passed
if [ $? -ne 0 ]; then
  echo "Tests failed. Push aborted."
  exit 1
fi

echo "Tests passed. Proceeding with push."
exit 0
`,
  },
}

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
