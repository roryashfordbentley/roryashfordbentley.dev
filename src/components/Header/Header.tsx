import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { LogoLink } from '@components/LogoLink/LogoLink'
import { MainNav } from '@components/MainNav/MainNav'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'
import { GridLayout, GridLayoutItem } from '@components/GridLayout/GridLayout'
import styles from './Header.module.css'

/**
 *
 * @returns Primary Navigation
 */
const payload = await getPayload({ config: configPromise })

const navPrimary = await payload.findGlobal({
  slug: 'navPrimary',
  depth: 1,
})

console.log(navPrimary.items)

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
              <MainNav />
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
