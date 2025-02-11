import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Head from 'next/head'
import PageLayout from '@layouts/PageLayout'

import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import { GridLayout } from '@components/GridLayout/GridLayout'
import { GridLayoutItem } from '@components/GridLayout/GridLayout'
import { BlogGrid, BlogGridItem } from '@components/BlogGrid/BlogGrid'
import { CardArticle } from '@components/CardArticle/CardArticle'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    /*select: {
      title: true,
      slug: true,
      //categories: true,
      //meta: true,
    },*/
  })

  console.log(posts)

  /*return (
    <div>
      <h1>Posts</h1>

      <p>currentPage={posts.page}</p>
      <p>limit={12}</p>
      <p>totalDocs={posts.totalDocs}</p>

      {posts.totalPages > 1 && posts.page && (
        <>
          <p>page={posts.page}</p>
          <p>totalPages={posts.totalPages}</p>
        </>
      )}
    </div>
  )*/

  return (
    <>
      <Header />
      <GridLayout>
        <GridLayoutItem>
          <BlogGrid>
            {posts.docs.map((post) => (
              <BlogGridItem key={post.id}>
                <CardArticle
                  imageSrc={post.featuredImage.url ? post.featuredImage.url : undefined}
                  imageAlt={post.featuredImage.alt ? post.featuredImage.alt : undefined}
                  title={post.title}
                  description={post.description}
                  date={post.createdAt}
                  url={`/blog/${post.slug}`}
                />
              </BlogGridItem>
            ))}
          </BlogGrid>
        </GridLayoutItem>
      </GridLayout>
      <Footer />
    </>
  )
}
