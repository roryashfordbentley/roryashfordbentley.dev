'use client'

import styles from './TableOfContents.module.css'
import React, { useState } from 'react'
import { extractHeadings } from '@scripts/extractHeadings'
import { nestHeadings } from '@scripts/nestHeadings'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export const TableOfContents = ({ data }: { data: SerializedEditorState }) => {
  // Only extract H2 and H3
  const headings = extractHeadings(data, [2, 3])
  const nested = nestHeadings(headings)

  // State
  const [isOpen, setIsOpen] = useState(false)

  const renderList = (items: typeof nested) => (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>{item.text}</a>
          {item.children.length > 0 && renderList(item.children)}
        </li>
      ))}
    </ul>
  )

  return (
    <div id="ToC" className={styles.wrapper}>
      <h2 className={styles.heading}>
        <button
          type="button"
          aria-expanded="true"
          className={styles.triggerButton}
          aria-controls="sect1"
          id="accordion1id"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={styles.buttonTitle}>In this article:</span>
          <span className={styles.buttonIcon}>{isOpen ? '-' : '+'}</span>
        </button>
      </h2>
      <nav
        role="region"
        aria-labelledby="accordion1id"
        className={`${styles.content} ${isOpen ? styles.contentOpen : ''}`}
        hidden={!isOpen}
      >
        {renderList(nested)}
      </nav>
    </div>
  )
}
