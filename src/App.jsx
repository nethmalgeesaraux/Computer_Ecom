import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import CartPage from './pages/CartPage'
import Contact from './pages/Contact'
import FAQs from './pages/FAQs'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
