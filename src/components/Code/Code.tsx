import styles from './Code.module.css'
import { highlight } from 'sugar-high'
import { useState } from 'react'
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

export const Code = (props: { label: string; codeString: string }) => {
  const codeHTML = highlight(props.codeString as string)

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(props.codeString).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.circles}>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
          <span className={styles.circle}></span>
        </div>

        {props.label && <div className={styles.title}>{props.label}</div>}

        <button title="Copy" className={styles.copyButton} onClick={handleCopy}>
          {copied ? <ClipboardDocumentCheckIcon /> : <ClipboardDocumentIcon />}
        </button>
      </header>

      <pre className={styles.codeWrapper}>
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} className={styles.code} />
      </pre>
    </div>
  )
}
