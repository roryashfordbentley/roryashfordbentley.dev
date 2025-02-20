import DOMPurify from 'dompurify'
import styles from './Prose.module.css'

import { ReactNode } from 'react'

function cleanMarkup(htmlCode: string) {
  return { __html: DOMPurify.sanitize(htmlCode) }
}

export const Prose = ({ children }: { children: string }) => {
  return (
    <section className={styles.contentWrapper} dangerouslySetInnerHTML={cleanMarkup(children)} />
  )
}
