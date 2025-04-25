import { Container, ContainerItem } from '@components/Container/Container'
import { VideoEmbed } from '@/components/VideoEmbed/VideoEmbed'

import styles from './ErrorScreen.module.css'

export const ErrorScreen = (props: { errorMessage?: string }) => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <ContainerItem>
          <h1 className={styles.heading}>{props.errorMessage || '404 page not found'}</h1>
          <VideoEmbed videoURL="https://www.youtube.com/embed/uKbEH8T8d0o" />
        </ContainerItem>
      </Container>
    </section>
  )
}
