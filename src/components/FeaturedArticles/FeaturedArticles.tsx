import { ReactElement, ReactNode } from 'react'
import { Grid, GridItem } from '@components/Grid/Grid'
import styles from './FeaturedArticles.module.css'

export const FeaturedArticles = (props: {
  title: string
  articlePrimary: ReactElement
  articleSecondary: ReactElement
  articleTertiary: ReactElement
}) => {
  return (
    <section className={styles.articles}>
      <header>
        <h2 className={styles.title}>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <Grid columns={6} gutter>
          <GridItem columnSpan={6} columnSpanMedium={4}>
            <div className={styles.articlePrimary}>{props.articlePrimary}</div>
          </GridItem>

          <GridItem columnSpan={6} columnSpanMedium={2}>
            <div className={styles.articleSecondary}>{props.articleSecondary}</div>
            <div className={styles.articleSecondary}>{props.articleTertiary}</div>
          </GridItem>
        </Grid>
      </div>
    </section>
  )
}
