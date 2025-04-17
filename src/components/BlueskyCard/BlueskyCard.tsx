import React from 'react'
import {
  RichText,
  Facet,
  RichTextSegment,
  AppBskyEmbedImages,
  AppBskyEmbedExternal,
  AppBskyEmbedRecord,
} from '@atproto/api'

import { HeartIcon } from '@heroicons/react/24/outline'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

import styles from './BlueskyCard.module.css'
import { BlueskyEmbedExternal } from '../BlueskyEmbedExternal/BlueskyEmbedExternal'
import { link } from 'fs'

export function BlueskyCard(props: {
  avatar: string
  displayName: string
  handle: string
  repost: boolean
  content: string
  facets: Facet[]
  replyCount: number
  repostCount: number
  likeCount: number
  variant?: 'secondary' | 'tertiary'
  embed?: AppBskyEmbedImages.Main | AppBskyEmbedExternal.Main | AppBskyEmbedRecord.Main | null
}) {
  return (
    <div
      className={`
        ${styles.card}
        ${props.variant == 'secondary' ? styles[`cardSecondary`] : ''}
        ${props.variant == 'tertiary' ? styles[`cardTertiary`] : ''}
      `}
    >
      <div className={styles.avatarsWrapper}>
        {props.repost && (
          <div title="Repost" className={styles.repost}>
            <ArrowPathRoundedSquareIcon className={styles.repostIcon} />
          </div>
        )}

        <Author avatar={props.avatar} displayName={props.displayName} handle={props.handle} />
      </div>

      <Content>
        <RichTextRenderer text={props.content} facets={props.facets} />
        {props.embed && (
          <EmbedRenderer
            embed={
              props.embed as
                | AppBskyEmbedImages.View
                | AppBskyEmbedExternal.Main
                | AppBskyEmbedRecord.Main
            }
            variant={props.variant}
          />
        )}
      </Content>

      <Meta
        replyCount={props.replyCount}
        repostCount={props.repostCount}
        likeCount={props.likeCount}
      />
    </div>
  )
}

/**
 * Meta
 *
 * This Component is used to display the meta information for a post
 * i.e. likes, comments and reposts.
 */
export function Meta(props: { replyCount: number; repostCount: number; likeCount: number }) {
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

function RichTextRenderer(props: { text: string; facets?: Facet[] }) {
  const rt = new RichText({
    text: props.text,
    facets: props.facets,
  })

  return (
    <div className={styles.richText}>
      {Array.from(rt.segments()).map((segment: RichTextSegment, index: number) => {
        if (segment.isLink() && segment.link) {
          return (
            <a
              className={styles.richTextLink}
              key={index}
              href={segment.link.uri}
              target="_blank"
              rel="noopener noreferrer"
            >
              {segment.text}
            </a>
          )
        }

        return (
          <span className={styles.text} key={index}>
            {segment.text}
          </span>
        )
      })}
    </div>
  )
}

function EmbedRenderer(props: {
  embed?: AppBskyEmbedImages.View | AppBskyEmbedExternal.Main | AppBskyEmbedRecord.Main | null
  variant?: 'secondary' | 'tertiary'
}) {
  if (!props.embed) {
    return null
  }

  if ('images' in props.embed) {
    return (
      <figure className={styles.embedImages}>
        {props.embed.images.map(
          (image, index) =>
            image.thumb && (
              <img
                className={styles.embedImage}
                key={index}
                src={image.thumb}
                alt={image.alt || 'Embedded image'}
              />
            ),
        )}
      </figure>
    )
  }

  if ('external' in props.embed) {
    return (
      <BlueskyEmbedExternal
        link={props.embed.external.uri}
        title={props.embed.external.title}
        thumb={typeof props.embed.external.thumb === 'string' ? props.embed.external.thumb : ''}
        thumbAlt={props.embed.external.title}
        description={props.embed.external.description}
        variant={props.variant}
      />
    )
  }
}

/**
 * Author
 *
 * This Component is used to display the author information for a post
 * i.e. avatar, display name and handle.
 */
export function Author(props: { avatar: string; displayName: string; handle: string }) {
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
export function Content({ children }: { children: React.ReactNode }) {
  return <div className={styles.content}>{children}</div>
}
