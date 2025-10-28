import styles from './Hero.module.css'
import { Wrapper } from '@components/Wrapper/Wrapper'
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
      <Wrapper>
        <div className={styles.inner}>
          <div className={styles.profile}>
            <figure className={styles.image}>
              <img src={props.imageSrc} alt={props.imageAlt ?? ''} />
            </figure>
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{props.title ?? ''}</h1>
            <p className={styles.description}>{props.description ?? ''}</p>
            <div className={styles.wysiwyg}>
              {props.content && <LexicalToJSX data={props.content} />}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}
