import React from 'react'
import styles from './Banner.module.css'
function Banner({bannerText}) {
  return (
    <div className={styles.banner}>
      <p>{bannerText}</p>
    </div>
  )
}

export default Banner
