import { BlogMeta } from '@components/BlogMeta/BlogMeta'
import { Tags } from '@components/Tags/Tags'
import { Tag } from '@components/Tag/Tag'
import styles from './BlogMasthead.module.css' // External CSS for the styles

export const BlogMasthead = (props: {
  title: string
  description: string
  datePosted: string
  readingTime?: string
  image?: React.ReactNode
  tags?: Array<{ title: string; slug: string }>
}) => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.titleWrapper}>
          {props.title && <h1 className={styles.title}>{props.title}</h1>}
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.meta}>
            <BlogMeta datePosted={props.datePosted} readingTime={props.readingTime} />
          </div>
          <div className={styles.tags}>
            <Tags>
              {props.tags?.map((tag) => (
                <Tag key={tag.slug} label={tag.title} link={`/blog/tag/${tag.slug}`} />
              ))}
            </Tags>
          </div>
        </aside>
      </div>

      {props.image && <div className={styles.coverImage}>{props.image}</div>}

      {props.description && <p className={styles.description}>{props.description}</p>}
    </header>
  )
}
