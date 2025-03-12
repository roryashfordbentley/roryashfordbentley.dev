import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import { getPayload } from 'payload'
import React from 'react'

//import type Media from 'payload'

import { Container } from '@components/Container/Container'
import { ContainerItem } from '@components/Container/Container'
import { BlogGrid, BlogGridItem } from '@components/BlogGrid/BlogGrid'
import { CardArticle } from '@components/CardArticle/CardArticle'
import { Pagination } from '@components/Pagination/Pagination'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const payload = await getPayload({ config: configPromise })

  const { page = '1' } = await searchParams

  const currentPage = parseInt(Array.isArray(page) ? page[0] : page)

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    page: currentPage,
  })

  // Get total number of posts in collection
  const totalPosts = posts.totalDocs

  return (
    <>
      {`the current page number is ${page}`}
      <Container>
        <ContainerItem>
          <BlogGrid>
            {posts.docs.map((post) => {
              const featuredImage = post.featuredImage as Media

              return (
                <BlogGridItem key={post.id}>
                  <CardArticle
                    imageSrc={featuredImage?.url ? featuredImage?.url : undefined}
                    imageAlt={featuredImage?.alt ? featuredImage?.alt : undefined}
                    title={post.title ?? ''}
                    description={post.description ?? ''}
                    date={post.createdAt ?? null}
                    url={`/blog/${encodeURIComponent(post.slug ?? '')}`}
                  />
                </BlogGridItem>
              )
            })}
          </BlogGrid>
          <Pagination totalItems={posts.totalDocs} itemsPerPage={posts.limit} currentPage={page} />
        </ContainerItem>
      </Container>
    </>
  )
}
