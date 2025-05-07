// These styles apply to every route in the application
import '@styles/tokens/colours.css'
import '@styles/tokens/fonts.css'
import '@styles/tokens/spacing.css'
import '@styles/tokens/media-queries.css'
import '@styles/tokens/border-radius.css'
import '@styles/tokens/utility.css'
import '@styles/reset.css'
import '@styles/global.css'
import '@styles/typography.css'

import '@components/Header/Header'
import '@components/Footer/Footer'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import { LogoLink } from '@components/LogoLink/LogoLink'
import { MainNavContainer } from '@components/MainNav/MainNav.container'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'
import { Content } from '@components/Content/Content'
import { FooterContainer } from '@/components/Footer/Footer.container'
import { SocialNavContainer } from '@/components/SocialNav/Social.Nav.container'

export const metadata: Metadata = {
  title: 'R/AB website',
  icons: {
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png'],
  },
  manifest: '/favicon/site.webmanifest',
}

const inter = Inter({ subsets: ['latin'] })
const logo = <LogoLink link="/" />
const payload = await getPayload({ config: configPromise })
const navItems = await payload.findGlobal({ slug: 'navPrimary' })

const items = navItems?.items ?? []
const socialLinks = navItems?.socialLinks ?? []

/**
 * Prepare the social items for rendering
 */
/*const socialLinksList = socialLinks.map((item) => {
  if (typeof item.link === 'string') {
    return {
      ...item,
      link: `/${item.link.replace(/^\/+/, '')}`,
    }
  }

  return item
})*/

const nav = <MainNavContainer items={items} />
const social = <SocialNavContainer items={socialLinks} />

var themeToggleInstance = <ThemeToggle />

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isLocal = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" className={inter.className}>
      <body className={isLocal ? 'dev' : ''}>
        <Content>
          <Header logo={logo} navMenu={nav} socialMenu={social} themeToggle={themeToggleInstance} />
          {children}
        </Content>
        <FooterContainer />
      </body>
    </html>
  )
}
