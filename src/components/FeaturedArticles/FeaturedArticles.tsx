import { ReactElement, ReactNode } from 'react'
import styles from './FeaturedArticles.module.css'

export const FeaturedArticles = (props: {
  articlePrimary: ReactElement
  articleSecondary: ReactElement
  articleTertiary: ReactElement
}) => {
  return (
    <section className={styles.articles}>
      <div className={styles.articlePrimary}>{props.articlePrimary}</div>
      <div className={styles.articleSecondary}>{props.articleSecondary}</div>
      <div className={styles.articleSecondary}>{props.articleTertiary}</div>
    </section>
  )
}
