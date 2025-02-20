import DOMPurify from 'dompurify'
import styles from './Prose.module.css'
import { ReactNode } from 'react'

function cleanMarkup(htmlCode: string) {
  return { __html: DOMPurify.sanitize(htmlCode) }
}

/**
 * The Prose component is used for areas on the site that output rich-text.
 * This will be used for rendering HTML content provided by CMS or 3rd Party
 * API's so the component included [DOMPurify](https://github.com/cure53/DOMPurify) to ensure that markup is sanitized
 * ahead of being passed through to dangerouslySetInnerHTML to prevent XSS
 * vulnerabilites.
 */
export const Prose = ({ children }: { children: string }) => {
  return (
    <section className={styles.contentWrapper} dangerouslySetInnerHTML={cleanMarkup(children)} />
  )
}
