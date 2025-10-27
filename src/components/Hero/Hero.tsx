import styles from './Hero.module.css'
import { ContentContainer } from '@components/ContentContainer/ContentContainer'
import { PageTitle } from '@components/PageTitle/PageTitle'
import { LexicalToJSX } from '@components/utils/LexicalToJSX'

export const Hero = (props: {
  title: string
  description: string
  content: any
  imageSrc: string
  imageAlt?: string | null | undefined
}) => {
  return (
    <section className={styles.wrapper}>
      <ContentContainer>
        <div className={styles.inner}>
          <div className={styles.profile}>
            <figure className={styles.image}>
              <img src={props.imageSrc} alt={props.imageAlt ?? ''} />
            </figure>
          </div>

          <div className={styles.content}>
            <PageTitle title={props.title ?? ''} description={props.description ?? ''} />
            <div className={styles.wysiwyg}>
              {props.content && <LexicalToJSX data={props.content} />}
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  )
}
