import React from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import Banner from '../Banner/Banner'
import ProductCards from '../ProductCards/ProductCards'
import styles from './HomePage.module.css'

function HomePage({ updatePortal, updateFilter }) {
    return (
        <div className={styles.flex}>
            <ImageCarousel updatePortal={updatePortal} updateFilter={updateFilter} />
            <Banner bannerText='SUMMER PREVIEW' />
            <ProductCards updatePortal={updatePortal} updateFilter={updateFilter}/>
        </div>
    )
}

export default HomePage