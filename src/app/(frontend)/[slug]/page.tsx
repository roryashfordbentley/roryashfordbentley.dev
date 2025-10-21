import queryBySlug from '@scripts/queryBySlug'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { notFound } from 'next/navigation'

import { LivePreviewListener } from '@/components/utils/LivePreviewListener'
import { LexicalToJSX } from '@/components/utils/LexicalToJSX'
import { RenderBlocks } from '@blocks/RenderBlocks'

import { HeaderContainer } from '@components/Header/Header.container'
import { Container, ContainerItem } from '@components/Container/Container'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { Prose } from '@components/Prose/Prose'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const pageData = await queryBySlug('pages', slug)

  if (!pageData) {
    return notFound() //  404 page
  }

  const image = pageData?.featuredImage as Media
  const layout = pageData.layout || []

  return (
    <>
      <LivePreviewListener />

      <main>
        <HeaderContainer light />

        <PageWrapper>
          <Container>
            <Prose padded>
              {pageData.title && <h1>{pageData.title}</h1>}
              {pageData.description && <p>{pageData.description}</p>}
              {pageData.content && <LexicalToJSX data={pageData.content} />}
            </Prose>
          </Container>

          <RenderBlocks blocks={layout} />
        </PageWrapper>
      </main>
    </>
  )
}
