import styles from './Pagination.module.css'

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

export const PageNumber = (props: { pageNumber: number; active?: boolean }) => {
  return (
    <a
      aria-current={props.active ? 'page' : undefined}
      className={props.active ? `${styles.link} ${styles.linkActive}` : styles.link}
      href=""
    >
      {props.pageNumber}
    </a>
  )
}

export const Pagination = (props: {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  maxNumLinks: number
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
          <a className={styles.link} href="">
            &lt; Prev
          </a>
        </li>

        {range(startPage, endPage + 1).map((index) => (
          <li className={styles.listItem} key={index}>
            <PageNumber pageNumber={index} active={index === props.currentPage} />
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
