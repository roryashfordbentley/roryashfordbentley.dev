import { Container, ContainerItem } from '@components/Container/Container'
import styles from './Header.module.css'
import { ReactNode } from 'react'

export const Header = (props: { logo: ReactNode; navMenu: ReactNode; themeToggle: ReactNode }) => {
  return (
    <header className={styles.wrapper}>
      <Container>
        <ContainerItem>
          <div className={styles.inner}>
            {props.logo && <div className={styles.logo}>{props.logo}</div>}
            {props.navMenu && <div className={styles.nav}>{props.navMenu}</div>}
            {props.themeToggle && <div className={styles.themeToggle}>{props.themeToggle}</div>}
          </div>
        </ContainerItem>
      </Container>
    </header>
  )
}
