import styles from './Pagination.module.css'

export const Pagination = (props: {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  maxNumLinks: number
}) => {
  const numberOfPages = Math.ceil(props.totalItems / props.itemsPerPage)

  return (
    <nav className={styles.wrapper} aria-labelledby="pagination">
      <h2 id="pagination">Pagination</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a className={styles.link} href="">
            &lt; Prev
          </a>
        </li>

        {Array.from({ length: Math.min(numberOfPages, props.maxNumLinks) }).map((_, index) => (
          <li className={styles.listItem}>
            {index + 1 === props.currentPage ? (
              <a aria-current="page" className={`${styles.link} ${styles.linkActive}`} href="">
                {index + 1}
              </a>
            ) : (
              <a className={styles.link} href="">
                {index + 1}
              </a>
            )}
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
