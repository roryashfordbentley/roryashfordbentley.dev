import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { Header } from '@/components/Header/Header'
import { MainNavContainer } from '@components/MainNav/MainNav.container'

import { SocialNavContainer } from '@/components/SocialNav/Social.Nav.container'

const payload = await getPayload({ config: configPromise })
const navItems = await payload.findGlobal({ slug: 'navPrimary' })

const items = navItems?.items ?? []
const socialLinks = navItems?.socialLinks ?? []

export function HeaderContainer(props: { light?: boolean }) {
  const nav = <MainNavContainer items={items} />
  const social = <SocialNavContainer items={socialLinks} />

  return <Header navMenu={nav} socialMenu={social} light={props.light} />
}
