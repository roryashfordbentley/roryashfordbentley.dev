import styles from './InformationBox.module.css'
import { ReactNode } from 'react'

export const InformationBox = (props: { content: ReactNode }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>{props.content}</div>
    </section>
  )
}
