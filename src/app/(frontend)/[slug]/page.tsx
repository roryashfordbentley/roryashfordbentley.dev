import queryBySlug from '@scripts/queryBySlug'
import Image from 'next/image'
import { Media } from '@/payload-types'

import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { LivePreviewListener } from '@/components/utils/LivePreviewListener'
import { LexicalToJSX } from '@/components/utils/LexicalToJSX'

import { LogoLink } from '@components/LogoLink/LogoLink'
import { MainNav } from '@components/MainNav/MainNav'
import ThemeToggle from '@components/ThemeToggle/ThemeToggle'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const pageData = await queryBySlug('pages', slug)

  const image = pageData.featuredImage as Media

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

  return (
    <>
      <LivePreviewListener />
      <Header logo={logoInstance} navMenu={navInstance} themeToggle={themeToggleInstance} />

      <main>
        {pageData.title}
        <br />
        current slug is {slug}
        <br />
        {pageData.content && <LexicalToJSX data={pageData.content} />}
        <br />
        {image && image.url && image.alt && (
          <Image src={image.url ?? ''} alt={image.alt} width={800} height={450} />
        )}
      </main>
      <Footer />
    </>
  )
}
