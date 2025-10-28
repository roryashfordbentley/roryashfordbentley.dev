import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import { getPayload } from 'payload'

import React from 'react'

import { Grid, GridItem } from '@components/Grid/Grid'
import { CardArticle } from '@components/CardArticle/CardArticle'
import { Pagination } from '@components/Pagination/Pagination'
import { PageTitle } from '@components/PageTitle/PageTitle'
import { Wrapper } from '@components/Wrapper/Wrapper'
import { HeaderContainer } from '@components/Header/Header.container'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const payload = await getPayload({ config: configPromise })

  /**
   * Grab the Page content by finding a page with the slug Blog in the Pages collection
   */
  const blogPage = await payload.find({
    collection: 'pages',
    limit: 1,
    pagination: false,
    draft: true, // Required for live preview
    where: {
      slug: { equals: 'blog' },
    },
  })

  const pageTitle = blogPage.docs?.[0]?.title ?? 'Blog'
  const pageDescription = blogPage.docs?.[0]?.description ?? ''

  const { page = '1' } = await searchParams

  const currentPage = parseInt(Array.isArray(page) ? page[0] : page)

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 8,
    overrideAccess: false,
    page: currentPage,
  })

  // Get total number of posts in collection
  const totalPosts = posts.totalDocs

  return (
    <>
      <HeaderContainer light />
      <Wrapper>
        <PageTitle title={pageTitle} description={pageDescription} />

        <Grid columns={1} columnsMedium={6} gutter>
          {posts.docs.map((post, index) => {
            const featuredImage = (post?.featuredImageWithMetadata?.featuredImage as Media) || ''

            return (
              <GridItem columnSpan={currentPage == 1 && index < 2 ? 3 : 2} key={post.id}>
                <CardArticle
                  imageSrc={featuredImage?.url ? featuredImage?.url : undefined}
                  imageAlt={featuredImage?.alt ? featuredImage?.alt : undefined}
                  title={post.title ?? ''}
                  description={post.description ?? ''}
                  date={post.createdAt ?? null}
                  url={`/blog/${encodeURIComponent(post.slug ?? '')}`}
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
