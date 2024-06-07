import React from 'react'
import styles from './WarehouseBanner.module.css'
function WarehouseBanner({ warehouseText }) {
  return (
    <div className={styles.banner}>
      {warehouseText.map((text) =>
        <p key={text}>{text}</p>
      )}
      <a>WOMEN</a>
      <a>MEN</a>
    </div>

  )
}

export default WarehouseBanner
