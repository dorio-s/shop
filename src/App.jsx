import { useState } from 'react'
import './App.scss'
import products from './data/products';
import { Router } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (products) => {
    setCartItems(prev => [...prev, product])
  }
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <Router>
      <Header/>
    <main className='min-h-screen'>
    <Routers>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetail addToCart={addToCart}/>}/>
      <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
      </Routers>
    </main>
    <Footer/>
    </Router>
  )
}


