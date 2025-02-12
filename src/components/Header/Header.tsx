import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { LogoLink } from '@components/LogoLink/LogoLink'
import { MainNav } from '@components/MainNav/MainNav'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'
import { GridLayout, GridLayoutItem } from '@components/GridLayout/GridLayout'
import styles from './Header.module.css'

const payload = await getPayload({ config: configPromise })

const navPrimaryData = await payload.findGlobal({
  slug: 'navPrimary',
  depth: 5,
})

export const Header = () => {
  return (
    <header className={styles['header']}>
      <GridLayout>
        <GridLayoutItem>
          <div className={styles['header__inner']}>
            <div className={styles['header__logo']}>
              <LogoLink link="/" />
            </div>

            <div className={styles['header__nav']}>
              <MainNav navItems={navPrimaryData.items} />
            </div>

            <div className={styles['header__nav']}>
              <ThemeToggle />
            </div>
          </div>
        </GridLayoutItem>
      </GridLayout>
    </header>
  )
}
