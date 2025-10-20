'use client'

import styles from './Code.module.css'
import { highlight } from 'sugar-high'
import { useState } from 'react'
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/outline'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

/**
 * Code Preview component
 *
 * This component is a code previewer. It uses the [Sugar-High](https://sugar-high.vercel.app/)
 * NPM [package](https://www.npmjs.com/package/sugar-high) for syntax
 * highlighting and it has a dark mode toggle. This toggle is independent of any
 * global light/dark toggle so that the dark code preview can be used on the
 * light version of a site if desired.
 */

export const Code = (props: { label: string; codeString: string; hideHeader?: boolean }) => {
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
    <div className={`${styles.container} ${dark && styles['container--dark']}`}>
      {!props.hideHeader && (
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
      )}

      <SyntaxHighlighter language="jsx" style={atomOneDark}>
        {props.codeString}
      </SyntaxHighlighter>
    </div>
  )
}
