import styles from './ExploreBanner.module.css'

function ExploreBanner({ exploreArray, updatePortal, updateCategory }) {
  return (
    <div className={styles.explore}>
      <p>More to explore</p>
      <div className={styles.exploreGrid}>
        {exploreArray.map((x) =>
          <div onClick={() => { updatePortal('Products'); updateCategory(x.toLowerCase()) }} key={x}>{x}</div>
        )}
      </div>
    </div>
  )
}

export default ExploreBanner
