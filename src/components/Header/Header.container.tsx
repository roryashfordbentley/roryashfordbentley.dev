import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { Header } from '@/components/Header/Header'
import { MainNavContainer } from '@components/MainNav/MainNav.container'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'
import { SocialNavContainer } from '@/components/SocialNav/Social.Nav.container'
import { LogoLink } from '@components/LogoLink/LogoLink'

const payload = await getPayload({ config: configPromise })
const navItems = await payload.findGlobal({ slug: 'navPrimary' })

const items = navItems?.items ?? []
const socialLinks = navItems?.socialLinks ?? []

export function HeaderContainer(props: { light?: boolean }) {
  const logo = <LogoLink link="/" />
  const nav = <MainNavContainer items={items} />
  const social = <SocialNavContainer items={socialLinks} />

  var themeToggleInstance = <ThemeToggle />

  return (
    <Header
      logo={logo}
      navMenu={nav}
      socialMenu={social}
      light={props.light}
      themeToggle={themeToggleInstance}
    />
  )
}
