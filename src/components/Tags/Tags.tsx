import { ReactNode } from 'react'
import styles from './Tags.module.css'

export const Tags = (props: { title?: 'Tags'; children: ReactNode }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{props.title ? props.title : 'Tags'}</h2>
      <div className={styles.tags}>{props.children}</div>
    </section>
  )
}
