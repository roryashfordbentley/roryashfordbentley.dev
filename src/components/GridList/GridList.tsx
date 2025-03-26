import { Container, ContainerItem } from '@components/Container/Container'
import styles from './GridList.module.css'
import { ReactElement } from 'react'

export const GridListItem = (props: {
  icon: ReactElement | null
  title: string
  description: string
}) => {
  return (
    <div className={styles.skill}>
      <figure className={styles.skillFig}>{props.icon}</figure>

      <h3 className={styles.skillTitle}>{props.title}</h3>
      <p className={styles.skillDescription}>{props.description}</p>
    </div>
  )
}

export const GridList = (props: {
  title: string
  description: string
  children: React.ReactNode
}) => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <ContainerItem>
          <header>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.description}>{props.description}</p>
          </header>
          <div className={styles.skills}>{props.children}</div>
        </ContainerItem>
      </Container>
    </section>
  )
}
