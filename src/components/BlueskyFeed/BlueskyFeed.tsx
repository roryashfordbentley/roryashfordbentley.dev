import { HeartIcon } from '@heroicons/react/24/outline'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { Grid, GridItem } from '@components/Grid/Grid'
import { Container, ContainerItem } from '@components/Container/Container'
import { ButtonLink } from '@components/ButtonLink/ButtonLink'

import styles from './BlueskyFeed.module.css' // External CSS for the styles

/**
 * Post meta
 *
 * This Component is used to display the meta information for a post
 * i.e. likes, comments and reposts.
 */
export function PostMeta(props: { replyCount: number; repostCount: number; likeCount: number }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.metaItem} title="Likes" aria-label={`Likes: ${props.likeCount}`}>
        <HeartIcon className={styles.metaIcon} />
        <span className={styles.count}>{props.likeCount}</span>
      </div>

      <div className={styles.metaItem} title="Reposts" aria-label={`Reposts: ${props.likeCount}`}>
        <ArrowPathRoundedSquareIcon className={styles.metaIcon} />
        <span className={styles.count}>{props.repostCount}</span>
      </div>

      <div className={styles.metaItem} title="Replies" aria-label={`Replies: ${props.likeCount}`}>
        <ChatBubbleOvalLeftIcon className={styles.metaIcon} />
        <span className={styles.count}>{props.replyCount}</span>
      </div>
    </footer>
  )
}

/**
 * Post author
 *
 * This Component is used to display the author information for a post
 * i.e. avatar, display name and handle.
 */
export function PostAuthor(props: { avatar: string; displayName: string; handle: string }) {
  return (
    <figure className={styles.avatar}>
      <img src={props.avatar} alt="bsky profile picture" />

      <figcaption>
        <span className={styles.displayName}>{props.displayName}</span>
        <span className={styles.handle}>@{props.handle}</span>
      </figcaption>
    </figure>
  )
}

/**
 * This Component is used to display the content of a post
 */
export function PostContent({ children }: { children: React.ReactNode }) {
  return <div className={styles.content}>{children}</div>
}

export function Post(props: {
  avatar: string
  displayName: string
  handle: string
  content: string
  replyCount: number
  repostCount: number
  likeCount: number
  variant?: 'secondary' | 'tertiary'
}) {
  return (
    <div
      className={`${styles.card} ${props.variant == 'secondary' ? styles[`cardSecondary`] : ''} ${props.variant == 'tertiary' ? styles[`cardTertiary`] : ''}`}
    >
      <PostAuthor avatar={props.avatar} displayName={props.displayName} handle={props.handle} />

      <PostContent>{props.content}</PostContent>

      <PostMeta
        replyCount={props.replyCount}
        repostCount={props.repostCount}
        likeCount={props.likeCount}
      />
    </div>
  )
}

/**
 * Bluesky feed
 *
 * This Component is used to display the latest Bluesky posts.
 * Including the author, content and meta information.
 *
 */
export async function BlueskyFeed(props: { posts: Array<any> }) {
  //let posts = []

  /*if (!props.mockData) {
    posts = await getBskyPosts(props.numberOfPosts)
  } else {
    posts = props.mockData.slice(0, props.numberOfPosts)
  }*/

  return (
    <section className={styles.wrapper}>
      <Container>
        <ContainerItem>
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

                return (
                  <GridItem key={i}>
                    <Post
                      avatar={avatar || ''}
                      displayName={displayName || ''}
                      handle={handle}
                      content={content}
                      replyCount={replyCount || 0}
                      repostCount={repostCount || 0}
                      likeCount={likeCount || 0}
                      variant={
                        (i + 1) % 2 == 0 ? 'secondary' : (i + 1) % 3 == 0 ? 'tertiary' : undefined
                      }
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
