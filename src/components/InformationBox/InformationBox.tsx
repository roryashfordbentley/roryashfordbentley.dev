import { Container, ContainerItem } from '@components/Container/Container'
import styles from './InformationBox.module.css'
import { ReactNode } from 'react'

export const InformationBox = (props: { title: string; subtitle: string; content: ReactNode }) => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <ContainerItem layout="wide">
          <div className={styles.inner}>
            <h2 className={styles.title}>
              <em>{props.title}</em>
              <br />
              {props.subtitle}
            </h2>

            <div className={styles.content}>{props.content}</div>
          </div>
        </ContainerItem>
      </Container>
    </section>
  )
}
