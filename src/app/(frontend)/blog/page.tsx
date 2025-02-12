import configPromise from '@payload-config'
import { Media } from '@/payload-types'
import { getPayload } from 'payload'
import React from 'react'
//import type Media from 'payload'

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
            {posts.docs.map((post) => {
              const featuredImage = post.featuredImage as Media

              return (
                <BlogGridItem key={post.id}>
                  <CardArticle
                    imageSrc={featuredImage?.url ? featuredImage?.url : undefined}
                    imageAlt={featuredImage?.alt ? featuredImage?.alt : undefined}
                    title={post.title}
                    description={post.description}
                    date={post.createdAt}
                    url={`/blog/${post.slug}`}
                  />
                </BlogGridItem>
              )
            })}
          </BlogGrid>
        </GridLayoutItem>
      </GridLayout>
      <Footer />
    </>
  )
}
