import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
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
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollRevealManager />
      <Navbar onOpenAccount={() => setIsAccountOpen(true)} />
      <Routes>
        <Route path='/' element={<Home onOpenAccount={() => setIsAccountOpen(true)} />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>

      {isAccountOpen && (
        <div className='account-modal' onClick={() => setIsAccountOpen(false)}>
          <section
            className='account-modal__card'
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type='button'
              className='account-modal__close'
              aria-label='Close account modal'
              onClick={() => setIsAccountOpen(false)}
            >
              ×
            </button>

            <p className='info-page__eyebrow'>My Account</p>
            <h2>Manage your profile</h2>
            <form className='account-form'>
              <label>
                Full Name
                <input type='text' placeholder='Enter full name' />
              </label>
              <label>
                Email
                <input type='email' placeholder='Enter email address' />
              </label>
              <label>
                Phone Number
                <input type='tel' placeholder='Enter phone number' />
              </label>
              <label>
                Address
                <textarea rows='4' placeholder='Enter address' />
              </label>
              <button type='submit'>Save Changes</button>
            </form>
          </section>
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
