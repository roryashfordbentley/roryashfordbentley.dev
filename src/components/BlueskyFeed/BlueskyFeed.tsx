import { RichText, Facet, RichTextSegment } from '@atproto/api'

import { Grid, GridItem } from '@components/Grid/Grid'
import { Container, ContainerItem } from '@components/Container/Container'
import { ButtonLink } from '@components/ButtonLink/ButtonLink'
import { BlueskyCard } from '@components/BlueskyCard/BlueskyCard'

import styles from './BlueskyFeed.module.css' // External CSS for the styles

/**
 * Bluesky feed
 *
 * This Component is used to display the latest Bluesky posts.
 * Including the author, content and meta information.
 *
 */
export async function BlueskyFeed(props: { posts: Array<any> }) {
  return (
    <section className={styles.wrapper}>
      <Container>
        <ContainerItem layout="wide">
          <h2 className={styles.title}>
            Latest posts from
            <br />
            <em>Bluesky</em>
          </h2>

          <div className={styles.posts}>
            <Grid columnsMedium={3} gutter>
              {props.posts.map((post: any, i: number) => {
                const { author, record, embed, replyCount, repostCount, likeCount } = post.post
                const { avatar, displayName, handle } = author

                const content = record.text as string
                const facets = record.facets as Facet[]

                //console.log(JSON.stringify(facets, null, 4))
                // Check if the post is a repost by checking the handle
                const isRepost = handle !== 'roryashfordbentley.dev' ? true : false

                return (
                  <GridItem key={i}>
                    <BlueskyCard
                      avatar={avatar || ''}
                      displayName={displayName || ''}
                      handle={handle}
                      repost={isRepost}
                      content={content}
                      embed={embed}
                      facets={facets}
                      replyCount={replyCount || 0}
                      repostCount={repostCount || 0}
                      likeCount={likeCount || 0}
                      variant={(() => {
                        switch (i % 3) {
                          case 0:
                            return undefined // Default
                          case 1:
                            return 'secondary'
                          case 2:
                            return 'tertiary'
                        }
                      })()}
                    />
                  </GridItem>
                )
              })}
            </Grid>
          </div>

          <div className={styles.buttonWrapper}>
            <ButtonLink
              url="https://bsky.app/profile/roikles.bsky.social"
              label="View more on Bluesky"
              type="tertiary"
            />
          </div>
        </ContainerItem>
      </Container>
    </section>
  )
}
