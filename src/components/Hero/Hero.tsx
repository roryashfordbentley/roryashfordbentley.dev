import styles from './Hero.module.css'
import { Wrapper } from '@components/Wrapper/Wrapper'
import { LexicalToJSX } from '@components/utils/LexicalToJSX'
import Image from 'next/image'

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
              <Image src={props.imageSrc} alt={props.imageAlt ?? ''} width={408} height={544} />
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
