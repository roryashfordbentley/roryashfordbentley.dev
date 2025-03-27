import { Container, ContainerItem } from '@components/Container/Container'
import styles from './PageTitle.module.css'
import { Grid, GridItem } from '../Grid/Grid'
import { G } from 'vitest/dist/chunks/reporters.d.CqBhtcTq.js'

export const PageTitle = (props: { title: string; description?: string }) => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <ContainerItem>
          <Grid columns={4} gutter>
            <GridItem columnSpan={4} columnSpanMedium={3}>
              <div className={styles.content}>
                {props.title && <h1 className={styles.title}>{props.title}</h1>}
                {props.description && <p className={styles.description}>{props.description}</p>}
              </div>
            </GridItem>
          </Grid>
        </ContainerItem>
      </Container>
    </section>
  )
}
