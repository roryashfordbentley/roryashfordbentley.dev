import queryBySlug from '@scripts/queryBySlug'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { notFound } from 'next/navigation'

import { LivePreviewListener } from '@/components/utils/LivePreviewListener'
import { LexicalToJSX } from '@/components/utils/LexicalToJSX'
import { RenderBlocks } from '@blocks/RenderBlocks'

import { HeaderContainer } from '@components/Header/Header.container'
import { Container, ContainerItem } from '@components/Container/Container'
import { Wrapper } from '@components/Wrapper/Wrapper'
import { Prose } from '@components/Prose/Prose'
import { PageTitle } from '@components/PageTitle/PageTitle'

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
      <Wrapper>
        <PageTitle title={pageData.title ?? ''} description={pageData.description ?? ''} />
        <Prose padded>{pageData.content && <LexicalToJSX data={pageData.content} />}</Prose>
        <RenderBlocks blocks={layout} />
      </Wrapper>
    </>
  )
}
