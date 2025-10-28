import styles from './ContentContainer.module.css'
import { ReactNode } from 'react'
import { Wrapper } from '@components/Wrapper/Wrapper'

interface ContentProps {
  children: ReactNode
}

export const ContentContainer = ({ children }: ContentProps) => {
  return (
    <section className={styles.contentContainer}>
      <Wrapper>{children}</Wrapper>
    </section>
  )
}
