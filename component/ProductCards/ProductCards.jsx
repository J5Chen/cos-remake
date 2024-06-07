import styles from './ProductCards.module.css'
import dress from './dress.jpg'
import shirt from './shirt.webp'
function ProductCard({ imgSrc, imageText, updatePortal, updateFilter, gender }) {
  return (
    <div className={styles.productCard}>
      <img src={imgSrc}></img>
      <p>{imageText}</p>
      {console.log(gender)}
      <p onClick={() => { updatePortal('Products'); updateFilter(gender) }} className={styles.shop}>shop now</p>
    </div>
  )
}

function ProductCards({ updateFilter, updatePortal }) {
  const productArray = [{ img: dress, text: "WOMEN'S DRESSES", gender: 'women' }, { img: shirt, text: "MEN'S TOP", gender: 'men' }]
  return (
    <div className={styles.productCards}>
      {productArray.map((product) =>
        <ProductCard key={product.text} imgSrc={product.img} imageText={product.text} gender={product.gender} updateFilter={updateFilter} updatePortal={updatePortal} />
      )
      }
    </div>
  )
}

export default ProductCards
