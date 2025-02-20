import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { LogoLink } from '@components/LogoLink/LogoLink'
import { MainNav } from '@components/MainNav/MainNav'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'
import { Container, ContainerItem } from '@components/Container/Container'
import styles from './Header.module.css'
import { ReactNode } from 'react'

/**
 * Commented out as it currently breaks Storybook - logic needs hoisting up out of components
 */

/*const payload = await getPayload({ config: configPromise })

const navPrimaryData = await payload.findGlobal({
  slug: 'navPrimary',
  depth: 5,
})

const navItems = navPrimaryData.items;

*/

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
