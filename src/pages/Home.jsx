import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import products from '../productContent'
import { getCartCount, onCartUpdated } from '../utils/cartStorage'

const faqItems = [
  {
    question: 'How can I place an order?',
    answer:
      'Choose a product, open details, set quantity, and click Add to Cart. Then complete checkout from the cart page.',
  },
  {
    question: 'Do you provide warranty?',
    answer:
      'Yes. Warranty coverage depends on the brand and model. Warranty details are shown with each product.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery usually takes 2 to 5 business days based on your location.',
  },
]

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const refreshCartCount = () => setCartCount(getCartCount())
    refreshCartCount()

    const removeListener = onCartUpdated(refreshCartCount)
    window.addEventListener('focus', refreshCartCount)

    return () => {
      removeListener()
      window.removeEventListener('focus', refreshCartCount)
    }
  }, [])

  useEffect(() => {
    if (!location.hash) return

    const element = document.querySelector(location.hash)
    if (!element) return

    const timer = setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)

    return () => clearTimeout(timer)
  }, [location.hash])

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [],
  )

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <main className='home-page'>
      <header className='home-header' data-reveal>
        <div className='home-header__logo'>CyberNest</div>

        <div className='home-header__search-wrap'>
          <input
            type='text'
            className='home-header__search'
            placeholder='Search Product'
            aria-label='Search Product'
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>

        <button
          type='button'
          className='home-header__cart'
          aria-label='Cart'
          onClick={() => navigate('/cart')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.8'
            strokeLinecap='round'
            strokeLinejoin='round'
            width='22'
            height='22'
            aria-hidden='true'
          >
            <circle cx='8' cy='21' r='1' />
            <circle cx='19' cy='21' r='1' />
            <path d='M2.5 3h2l2.7 12.6a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6' />
          </svg>
          {cartCount > 0 && <span className='home-header__cart-badge'>{cartCount}</span>}
        </button>
      </header>

      <section className='home-hero' data-reveal data-reveal-delay='80'>
        <div className='home-hero__logo'>logitech</div>

        <div className='home-hero__left-speaker' />
        <div className='home-hero__right-speaker' />
        <div className='home-hero__shelf-left' />
        <div className='home-hero__shelf-right' />

        <div className='home-hero__webcam' />

        <article className='home-hero__center-card'>
          <h1>WORK BEAUTIFULLY</h1>
          <p>The Logitech family designed to work together beautifully</p>
        </article>

        <div className='home-hero__desk' />
        <div className='home-hero__keyboard' />
        <div className='home-hero__remote' />
        <div className='home-hero__lamp' />
        <div className='home-hero__plant' />
      </section>
        <br/>

      <section id='about-section' className='home-inline-section' data-reveal>
        <p className='info-page__eyebrow'>About CyberNest</p>
        <h2>Built for people who love reliable computer gear</h2>
        <p>
          We curate quality parts and peripherals for gaming, work, and creative setups.
          Every product in our catalog is selected for value, durability, and daily performance.
        </p>
      </section>
      <br/>

      <ProductGrid
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        products={filteredProducts}
      />

      <section id='faqs-section' className='home-inline-section' data-reveal data-reveal-delay='60'>
        <p className='info-page__eyebrow'>FAQs</p>
        <h2>Frequently asked questions</h2>
        <div className='faq-list'>
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className='faq-item'
              data-reveal
              data-reveal-delay={index * 50}
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section
        id='contact-section'
        className='home-inline-section home-inline-section--contact'
        data-reveal
        data-reveal-delay='90'
      >
        <p className='info-page__eyebrow'>Contact</p>
        <h2>Need help with a product or order?</h2>
        <p>Send us a message and our support team will get back to you quickly.</p>
        <div className='home-inline-contact__actions'>
          <button type='button' onClick={() => navigate('/account')}>
            Open Account
          </button>
          <span>support@cybernest.com | +1 2345 678 910</span>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home
