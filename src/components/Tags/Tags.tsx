import { ReactNode } from 'react'
import styles from './Tags.module.css'

export const Tags = (props: { title?: 'Tags'; children: ReactNode; padded?: boolean }) => {
  return (
    <section className={`${styles.container} ${props.padded ? styles.containerPadded : ''}`}>
      <h2 className={styles.title}>{props.title ? props.title : 'Tags'}</h2>
      <div className={styles.tags}>{props.children}</div>
    </section>
  )
}
