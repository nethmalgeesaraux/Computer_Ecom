import React from 'react'
import ProductGrid from '../components/ProductGrid'

const Home = () => {
  return (
    <main className='home-page'>
      <header className='home-header'>
        <div className='home-header__logo'>audiophile</div>

        <div className='home-header__search-wrap'>
          <input
            type='text'
            className='home-header__search'
            placeholder='Search Product'
            aria-label='Search Product'
          />
        </div>

        <button type='button' className='home-header__cart' aria-label='Cart'>
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
        </button>
      </header>

      <section className='home-hero'>
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

      <ProductGrid />
    </main>
  )
}

export default Home
