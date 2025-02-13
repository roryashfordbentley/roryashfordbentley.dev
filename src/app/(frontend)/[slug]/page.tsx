import queryBySlug from '@scripts/queryBySlug'
import Image from 'next/image'
import { Media } from '@/payload-types'

import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const pageData = await queryBySlug('pages', slug)
  const featuredImage = (pageData.featuredImage as Media) ?? null

  return (
    <>
      <Header />

      <main>
        {pageData.title}
        <br />
        current slug is {slug}
        <br />
        {featuredImage && featuredImage.url && featuredImage.alt && (
          <Image src={featuredImage.url ?? ''} alt={featuredImage.alt} width={800} height={450} />
        )}
      </main>
      <Footer />
    </>
  )
}
