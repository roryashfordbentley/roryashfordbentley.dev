import { Container, ContainerItem } from '@components/Container/Container'
import styles from './PageTitle.module.css'
import { Grid, GridItem } from '../Grid/Grid'

export const PageTitle = (props: { title: string; description?: string }) => {
  return (
    <section className={styles.wrapper}>
      {props.title && <h1 className={styles.title}>{props.title}</h1>}
      {props.description && <p className={styles.description}>{props.description}</p>}
    </section>
  )
}
