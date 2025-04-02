import { Container, ContainerItem } from '@components/Container/Container'
import styles from './GridList.module.css'
import { ReactElement } from 'react'
import { InlineSVG } from '@components/InlineSVG/InlineSVG'

export const GridListItem = (props: { iconPath: string; title: string; description: string }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillFig}>
        <InlineSVG svgPath={props.iconPath} />
      </div>

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
