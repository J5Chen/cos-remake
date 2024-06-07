import React from 'react'
import Men from './Men.webp'
import styles from '../ImageCarousel/ImageCarousel.module.css'
function ImageCarousel({ updatePortal, updateFilter }) {
  return (
    <div className={styles.imageCarousel}>
      <div className={styles.carousel}>
        <img src={Men} alt="" style={{ display: 'block', width: '100%' }} />
      </div>
      <div className={styles.buttonDiv}>
        <a onClick={() => { updatePortal('Products'); updateFilter('men') }}>Men</a>
        <a onClick={() => { updatePortal('Products'); updateFilter('women') }}>Women</a>
      </div>
    </div>
  )
}

export default ImageCarousel
