import { getPayload } from 'payload'
import { RenderBlocks } from '@blocks/RenderBlocks'
import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { HeaderContainer } from '@components/Header/Header.container'

/**
 * Blocks
 */
import { CodeBlockSchema } from '@/blocks/Code/Schema'

/**
 * Components
 */
import { Prose } from '@components/Prose/Prose'
import { LexicalToJSX } from '@components/utils/LexicalToJSX'
import { LivePreviewListener } from '@components/utils/LivePreviewListener'

import { BlogMasthead } from '@/components/BlogMasthead/BlogMasthead'
import { BigImage } from '@/components/BigImage/BigImage'
import { Container, ContainerItem } from '@components/Container/Container'
import { Wrapper } from '@/components/Wrapper/Wrapper'

/**
 * Load the blog post data from Payload
 */
async function getBlogPost(slug: string) {
  const payload = await getPayload({ config: configPromise })

  const post = await payload.find({
    collection: 'posts',
    limit: 1,
    pagination: false,
    draft: true, // Required for live preview
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return post.docs[0]
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug

  const postData = await getBlogPost(slug)

  if (!postData) {
    return notFound() //  404 page
  }

  //console.log(JSON.stringify(postData, null, 4))

  const title = postData.title || ''
  const description = postData.description || ''
  const featuredImage = (postData?.featuredImageWithMetadata?.featuredImage as Media) || ''
  const featuredImageCaption = postData?.featuredImageWithMetadata?.caption || ''
  const featuredImageCredit = postData?.featuredImageWithMetadata?.credit || ''
  const featuredImageCreditLink = postData?.featuredImageWithMetadata?.creditLink || ''
  const content = postData.content || ''
  const layout = postData.layout || []
  const date = postData.createdAt || ''
  const tags =
    postData.tags?.map((tag: any) => ({
      title: tag.title,
      slug: tag.slug,
    })) || []

  const image = featuredImage.url ? (
    <Image src={featuredImage.url ?? ''} alt={featuredImage?.alt ?? ''} width={1370} height={776} />
  ) : null

  const bigImage = featuredImage ? (
    <BigImage
      image={image ?? ''}
      caption={featuredImageCaption}
      credit={featuredImageCredit}
      creditLink={featuredImageCreditLink}
    />
  ) : null

  return (
    <>
      <LivePreviewListener />
      <HeaderContainer light />
      <Wrapper>
        <BlogMasthead
          title={title}
          description={description}
          datePosted={date}
          readingTime="5 minutes"
          image={bigImage}
          tags={tags}
        ></BlogMasthead>

        <Container>
          {content && (
            <Prose padded>
              <LexicalToJSX data={content} />
            </Prose>
          )}
        </Container>

        <RenderBlocks blocks={layout} />
      </Wrapper>
    </>
  )
}
