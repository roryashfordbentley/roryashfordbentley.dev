'use client'

import styles from './Header.module.css'
import { ReactNode, useState } from 'react'

import { LogoLink } from '@components/LogoLink/LogoLink'
import { MobileNavButton } from '@components/MobileNavButton/MobileNavButton'
import { MobileNav } from '@components/MobileNav/MobileNav'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'

export const Header = (props: { navMenu: ReactNode; socialMenu: ReactNode; light?: boolean }) => {
  const [navOpen, setNavToggle] = useState(false)

  return (
    <header className={`${styles.wrapper} ${props.light ? styles.wrapperLight : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <LogoLink link="/" />
        </div>

        {props.navMenu && <div className={styles.nav}>{props.navMenu}</div>}
        {props.socialMenu && <div className={styles.social}>{props.socialMenu}</div>}

        <div className={styles.themeToggle}>
          <ThemeToggle />
        </div>

        <div className={styles.mobileNavButton}>
          <MobileNavButton onClick={() => setNavToggle(!navOpen)} />
        </div>
      </div>

      <div className={styles.mobileNav}>
        <MobileNav toggle={navOpen}>
          {props.navMenu && <div className={styles.mobileNavMenu}>{props.navMenu}</div>}
          {props.socialMenu && <div className={styles.mobileNavSocial}>{props.socialMenu}</div>}
        </MobileNav>
      </div>
    </header>
  )
}
