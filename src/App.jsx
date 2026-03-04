import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Account from './pages/Account'
import CartPage from './pages/CartPage'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

const ScrollRevealManager = () => {
  const location = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!elements.length) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-reveal-delay')
            if (delay) {
              entry.target.style.transitionDelay = `${delay}ms`
            }
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => {
      element.classList.remove('is-visible')
      element.style.transitionDelay = '0ms'
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollRevealManager />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<Account />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
