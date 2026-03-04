import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
    <main className='info-page'>
      <section className='info-page__hero' data-reveal>
        <p className='info-page__eyebrow'>About CyberNest</p>
        <h1>Built for people who love reliable computer gear</h1>
        <p>
          We curate quality parts and peripherals for gaming, work, and
          creative setups. Every product in our catalog is selected for value,
          durability, and daily performance.
        </p>
      </section>

      <section className='info-page__grid' data-reveal data-reveal-delay='70'>
        <article className='info-card' data-reveal data-reveal-delay='20'>
          <h2>Our Mission</h2>
          <p>
            Make PC shopping simple by offering trusted products, clear specs,
            and honest pricing.
          </p>
        </article>

        <article className='info-card' data-reveal data-reveal-delay='80'>
          <h2>What We Sell</h2>
          <p>
            Graphic cards, laptops, monitors, and power supplies from leading
            brands with practical warranty support.
          </p>
        </article>

        <article className='info-card' data-reveal data-reveal-delay='140'>
          <h2>Why Choose Us</h2>
          <p>
            Fast response, easy ordering flow, and product guidance focused on
            your budget and usage.
          </p>
        </article>
      </section>

      <Footer />
    </main>
  )
}

export default About
