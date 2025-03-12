import AtpAgent, { Agent, CredentialSession } from '@atproto/api'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { Grid, GridItem } from '@components/Grid/Grid'

import styles from './BlueskyFeed.module.css' // External CSS for the styles

/**
 * Authenticate Bluesky user
 *
 * @returns AtP agent
 */
const authenticateBlueskyUser = async () => {
  const bskyIdentifier = process.env.BLUESKY_IDENTIFIER as string
  const bskyAppPassword = process.env.BLUESKY_APP_PASSWORD as string

  if (!bskyIdentifier || !bskyAppPassword) {
    throw new Error(
      'Missing credentials, are the keys BLUESKY_IDENTIFIER and BLUESKY_APP_PASSWORD set in the .env file?',
    )
  }

  const session = new CredentialSession(new URL('https://bsky.social'))
  const agent = new Agent(session)

  try {
    await session.login({
      identifier: bskyIdentifier,
      password: bskyAppPassword,
    })

    return { session, agent }
  } catch (error) {
    console.log(error)
    throw new Error('Unable to authenticate Bluesky user.')
  }
}

/**
 * Get Bluesky posts
 *
 * This function is used to fetch the latest Bluesky posts.
 */
export async function getBskyPosts(numberOfPosts: number) {
  if (numberOfPosts <= 0) {
    throw new Error('Number of posts must be greater than 0.')
  }

  const agent = (await authenticateBlueskyUser()).agent

  const response = await agent.getAuthorFeed({
    actor: agent.assertDid,
    includePins: false,
    filter: 'posts_no_replies',
    limit: numberOfPosts,
  })

  const posts = response.data.feed

  return posts
}

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
}) {
  return (
    <div className={styles.card}>
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
 * mockData is an array of dummy posts. This allows for us to test the component in Storybook without
 * dealing with API and CORS errors.
 */
export async function BlueskyFeed(props: { numberOfPosts: number; mockData: any }) {
  let posts = []

  if (!props.mockData) {
    posts = await getBskyPosts(props.numberOfPosts)
  } else {
    posts = props.mockData.slice(0, props.numberOfPosts)
  }

  return (
    <Grid columnsMedium={3} gutter>
      {posts.map((post: any, i: number) => {
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
            />
          </GridItem>
        )
      })}
    </Grid>
  )
}
