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

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { LogoLink } from '@components/LogoLink/LogoLink'
import { MainNav } from '@components/MainNav/MainNav'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'
import { Content } from '@components/Content/Content'
import { FooterContainer } from '@/components/Footer/Footer.container'

export const metadata: Metadata = {
  title: 'R/AB website',
  icons: {
    icon: ['/favicon/favicon.ico?v=4'],
    apple: ['/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/favicon/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
}

const inter = Inter({ subsets: ['latin'] })

const logoInstance = <LogoLink link="/" />

// Temp until we pull live data from Payload
const navInstance = (
  <MainNav
    navItems={[
      {
        id: 1,
        page: {
          slug: 'home',
          title: 'Home',
        },
      },
      {
        id: 2,
        page: {
          slug: 'work',
          title: 'Work',
        },
      },
      {
        id: 3,
        page: {
          slug: 'blog',
          title: 'Blog',
        },
      },
    ]}
  />
)

var themeToggleInstance = <ThemeToggle />

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Content>
          <Header logo={logoInstance} navMenu={navInstance} themeToggle={themeToggleInstance} />
          {children}
        </Content>
        <FooterContainer />
      </body>
    </html>
  )
}
