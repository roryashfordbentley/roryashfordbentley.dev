import styles from './Content.module.css'
import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

/**
 * This component is used to wrap the content of the page, but more specifically,
 * it allows us to provide an overlap of the fixed footer content so that it appears
 * to overlap the footer component
 */

export const Content = ({ children }: ContentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
