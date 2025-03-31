import { Agent, CredentialSession } from '@atproto/api'
import { BlueskyFeed } from './BlueskyFeed'

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

export async function BlueskyFeedContainer({ numberOfPosts = 3 }: { numberOfPosts?: number }) {
  const posts = await getBskyPosts(numberOfPosts)

  return <BlueskyFeed posts={posts} />
}
