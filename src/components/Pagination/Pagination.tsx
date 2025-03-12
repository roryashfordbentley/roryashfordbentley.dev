'use client'

import Link from 'next/link'
import styles from './Pagination.module.css'
import { useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

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

export const PageNumber = (props: { pageNumber: string; active?: boolean }) => {
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
      className={props.active ? `${styles.link} ${styles.linkActive}` : styles.link}
      href={
        // <pathname>?sort=desc
        pathname + '?' + createQueryString('page', props.pageNumber)
      }
    >
      {props.pageNumber}
    </Link>
  )
}

export const Pagination = (props: {
  totalItems: number
  itemsPerPage: number
  currentPage: number | any
}) => {
  const numberOfPages = Math.ceil(props.totalItems / props.itemsPerPage)

  let startPage = 1
  let endPage = numberOfPages

  if (props.currentPage - 2 > 0) {
    startPage = props.currentPage - 2
  }

  if (props.currentPage + 2 < numberOfPages) {
    endPage = props.currentPage + 2
  }

  return (
    <nav className={styles.wrapper} aria-labelledby="pagination">
      <h2 id="pagination">Pagination</h2>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/2">
            &lt; Prev
          </Link>
        </li>

        {range(startPage, endPage + 1).map((index) => (
          <li className={styles.listItem} key={index}>
            <PageNumber pageNumber={index.toString()} active={index === props.currentPage} />
          </li>
        ))}

        <li className={styles.listItem}>
          <a className={styles.link} href="">
            Next &gt;
          </a>
        </li>
      </ul>
    </nav>
  )
}
