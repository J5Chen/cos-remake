import './App.css'
import { useState } from 'react'
import WarehouseBanner from '../component/WarehouseBanner/WarehouseBanner'
import NavBar from '../component/NavBar/NavBar'
import HomePage from '../component/HomePage/HomePage'
import ProductList from '../component/Gallery/ProductList'
import CartList from '../component/CartList/CartList'
import ExploreBanner from '../component/ExploreBanner/ExploreBanner'
import Checkout from '../component/Checkout/Checkout'

const warehouseText = ['SPRING', 'SUMMER', '2024', 'COLLECTION', '|']
const exploreArray = ["WOMEN'S TROUSERS", "WOMEN'S TOPS", "MEN'S T-SHIRT", "MEN'S KNITWEAR"]

function App() {
  const [portal, setPortal] = useState('Home');
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');

  const updatePortal = (status) => {
    setPortal(status)
  }

  const addCart = (itemName) => {
    const index = cart.findIndex(cartItem => cartItem.name === itemName);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { name: itemName, quantity: 1 }]);
    }
    console.log(itemName);
    console.log(cart);
  };

  const removeCart = (itemName) => {
    const index = cart.findIndex(cartItem => cartItem.name === itemName);
    if (index !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[index].quantity === 1) {
        updatedCart.splice(index, 1);
      } else {
        updatedCart[index].quantity -= 1;
      }
      setCart(updatedCart);
    }
    console.log(cart);
  };

  const updateFilter = (filter) => {
    setCategory('')
    setFilter(filter)
    console.log(filter)
  }

  const updateCategory = (category) => {
    setFilter('')
    setCategory(category)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <>
      <div className='layout'>
        <WarehouseBanner warehouseText={warehouseText}  />
        <NavBar updatePortal={updatePortal} updateFilter={updateFilter} cart={cart}/>
        {portal == 'Home' && <HomePage updatePortal={updatePortal} updateFilter={updateFilter} />}
        {portal == 'Products' && <ProductList addCart={addCart} filter={filter} category={category}/>}
        {portal == 'Cart' && <CartList cartItems={cart} removeCart={removeCart} clearCart={clearCart} updatePortal={updatePortal}/>}
        {portal == 'Checkout' && <Checkout />}
        <ExploreBanner exploreArray={exploreArray} updatePortal={updatePortal} updateCategory={updateCategory} />
      </div>
    </>
  )
}

export default App
