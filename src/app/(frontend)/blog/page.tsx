import configPromise from '@payload-config'
import { getPayload } from 'payload'

import React from 'react'

import { Grid, GridItem } from '@components/Grid/Grid'
import { CardArticle } from '@components/CardArticle/CardArticle'
import { Pagination } from '@components/Pagination/Pagination'
import { PageTitle } from '@components/PageTitle/PageTitle'
import { Wrapper } from '@components/Wrapper/Wrapper'
import { HeaderContainer } from '@components/Header/Header.container'
import { directUploadThingURL } from '@/scripts/directUploadThingURL'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const payload = await getPayload({ config: configPromise })

  // 1Get the Blog page
  const blogPage = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    draft: true,
    where: { slug: { equals: 'blog' } },
  })

  const pageTitle = blogPage.docs?.[0]?.title ?? 'Blog'
  const pageDescription = blogPage.docs?.[0]?.description ?? ''

  // 2Extract page number and tag from searchParams
  const { page = '1', tag } = await searchParams
  const currentPage = parseInt(Array.isArray(page) ? page[0] : page)
  const tagSlug = Array.isArray(tag) ? tag[0] : tag

  let tagId = null

  // If tag slug is provided, fetch the tag document to get its ID
  if (tagSlug) {
    const tagResult = await payload.find({
      collection: 'tags',
      limit: 1,
      where: { slug: { equals: tagSlug } },
    })

    if (tagResult.docs.length) {
      tagId = tagResult.docs[0].id
    }
  }

  // Build the posts query
  const postsQuery: any = {
    collection: 'posts',
    depth: 1,
    limit: 8,
    overrideAccess: false,
    page: currentPage,
  }

  if (tagId) {
    postsQuery.where = { tags: { contains: tagId } }
  }

  const posts = await payload.find(postsQuery)

  // Build filtered description
  const filteredDescription = tagSlug ? `Articles filtered by tag "${tagSlug}"` : pageDescription

  return (
    <>
      <HeaderContainer light />
      <Wrapper>
        <PageTitle title={pageTitle} description={filteredDescription} />

        <Grid columns={1} columnsMedium={6} gutter>
          {posts.docs.map((post, index) => {
            const p = post as any
            // Runtime-safe access to featuredImageWithMetadata
            const featuredImage = p?.featuredImageWithMetadata?.featuredImage || ''

            const imgSrc = featuredImage?.url || ''
            const imgAlt = featuredImage?.alt || ''
            const imgKey = featuredImage?._key || ''

            return (
              <GridItem columnSpanMedium={currentPage === 1 && index < 2 ? 3 : 2} key={p.id}>
                <CardArticle
                  imageSrc={imgSrc ? directUploadThingURL(imgSrc, imgKey) : undefined}
                  imageAlt={imgAlt}
                  title={p.title ?? ''}
                  date={p.createdAt ?? null}
                  url={`/blog/${encodeURIComponent(p.slug ?? '')}`}
                />
              </GridItem>
            )
          })}
        </Grid>

        <Pagination
          totalItems={posts.totalDocs}
          itemsPerPage={posts.limit}
          currentPage={currentPage}
        />
      </Wrapper>
    </>
  )
}
