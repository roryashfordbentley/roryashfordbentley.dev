import styles from './Hero.module.css'
import { Container, ContainerItem } from '@components/Container/Container'

export const Hero = (props: {
  title: string
  subtitle: string
  description: string
  button: React.ReactNode
}) => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <ContainerItem>
          <div className={styles.inner}>
            <header className={styles.header}>
              {/*<h1 className={styles.title}>{props.title}</h1>*/}
              <h1 className={styles.title}>
                Rory <br />
                Ashford-Bentley
              </h1>
              {/*<p className={styles.subtitle}>{props.subtitle}</p>*/}
              <p className={styles.subtitle}>Senior Full-Stack Engineer</p>
            </header>
          </div>
        </ContainerItem>
      </Container>
    </section>
  )
}
