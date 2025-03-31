'use client'

import Link from 'next/link'
import { useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import styles from './Pagination.module.css'

/**
 * Range
 *
 * Simple way to generate a range of numbers in an array
 * eg. range(5) => [0, 1, 2, 3, 4]
 * @returns
 */
const range = (start: number, end: number, step = 1) => {
  let output = []

  if (typeof end === 'undefined') {
    end = start
    start = 0
  }

  for (let i = start; i < end; i += step) {
    output.push(i)
  }

  return output
}

const PageNumber = (props: { pageNumber: string; active?: boolean }) => {
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  return (
    <Link
      aria-current={props.active ? 'page' : undefined}
      className={
        props.active
          ? `${styles.link} ${styles.linkNumber} ${styles.linkActive}`
          : `${styles.link} ${styles.linkNumber}`
      }
      href={
        // <pathname>?sort=desc
        pathname + '?' + createQueryString('page', props.pageNumber)
      }
    >
      {props.pageNumber}
    </Link>
  )
}

const PrevLink = (props: { currentPage: number }) => {
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  if (props.currentPage - 1 > 0) {
    return (
      <Link
        className={`${styles.link} ${styles.linkPrev}`}
        href={pathname + '?' + createQueryString('page', (props.currentPage - 1).toString())}
      >
        &lt; Prev
      </Link>
    )
  } else {
    return (
      <Link className={`${styles.link} ${styles.linkPrev} ${styles.linkDisabled}`} href="#">
        &lt; Prev
      </Link>
    )
  }
}

const NextLink = (props: { currentPage: number; totalPages: number }) => {
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  //console.log(typeof props.currentPage)
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  if (props.currentPage + 1 <= props.totalPages) {
    return (
      <Link
        className={`${styles.link} ${styles.linkNext}`}
        href={pathname + '?' + createQueryString('page', (props.currentPage + 1).toString())}
      >
        Next &gt;
      </Link>
    )
  } else {
    return (
      <Link className={`${styles.link} ${styles.linkNext} ${styles.linkDisabled}`} href="#">
        Next &gt;
      </Link>
    )
  }
}

export const Pagination = (props: {
  totalItems: number
  itemsPerPage: number
  currentPage: number
}) => {
  const numberOfPages = Math.ceil(props.totalItems / props.itemsPerPage)

  let startPage = 1
  let endPage = numberOfPages

  const currentPage = Number(props.currentPage)

  if (currentPage - 2 > 0) {
    startPage = currentPage - 2
  }

  if (currentPage + 2 < numberOfPages) {
    endPage = currentPage + 2
  }

  return (
    <nav className={styles.wrapper} aria-labelledby="pagination">
      <h2 className={styles.screenReaderHeading} id="pagination">
        Pagination
      </h2>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <PrevLink currentPage={currentPage} />
        </li>

        {range(startPage, endPage + 1).map((index) => (
          <li className={styles.listItem} key={index}>
            <PageNumber pageNumber={index.toString()} active={index == currentPage} />
          </li>
        ))}

        <li className={styles.listItem}>
          <NextLink currentPage={currentPage} totalPages={numberOfPages} />
        </li>
      </ul>
    </nav>
  )
}
