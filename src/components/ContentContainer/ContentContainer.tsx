import styles from './ContentContainer.module.css'
import { ReactNode } from 'react'
import { PageWrapper } from '@components/PageWrapper/PageWrapper'

interface ContentProps {
  children: ReactNode
}

export const ContentContainer = ({ children }: ContentProps) => {
  return (
    <section className={styles.contentContainer}>
      <PageWrapper>{children}</PageWrapper>
    </section>
  )
}
