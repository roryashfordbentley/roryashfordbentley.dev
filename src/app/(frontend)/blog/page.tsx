import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import { getPayload } from 'payload'
import React from 'react'
//import type Media from 'payload'

import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { Container } from '@components/Container/Container'
import { ContainerItem } from '@components/Container/Container'
import { BlogGrid, BlogGridItem } from '@components/BlogGrid/BlogGrid'
import { CardArticle } from '@components/CardArticle/CardArticle'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
  })

  return (
    <>
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
        </ContainerItem>
      </Container>
    </>
  )
}
