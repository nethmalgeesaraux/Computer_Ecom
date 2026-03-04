import React from 'react'
import { Clock3, Mail, MapPin, PhoneCall, SendHorizontal } from 'lucide-react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <main className='info-page'>
      <section className='info-page__hero contact-hero' data-reveal>
        <p className='info-page__eyebrow'>Contact</p>
        <h1>Let&apos;s build your perfect setup together</h1>
        <p>
          Tell us what you need and our team will guide you with the right
          products, pricing, and support.
        </p>
      </section>

      <section className='contact-layout' data-reveal data-reveal-delay='60'>
        <form className='contact-form' data-reveal data-reveal-delay='20'>
          <label>
            Full Name
            <input type='text' placeholder='Enter your name' />
          </label>
          <label>
            Email Address
            <input type='email' placeholder='Enter your email' />
          </label>
          <label>
            Message
            <textarea rows='5' placeholder='Write your message...' />
          </label>
          <button type='submit'>
            <SendHorizontal size={16} aria-hidden='true' />
            Send Message
          </button>
        </form>

        <aside className='contact-card' data-reveal data-reveal-delay='90'>
          <h2>Contact Info</h2>
          <ul className='contact-card__list'>
            <li>
              <MapPin size={18} aria-hidden='true' />
              <span>70 Washington Square South, New York, NY 10012, US</span>
            </li>
            <li>
              <PhoneCall size={18} aria-hidden='true' />
              <span>+1 2345 678 910</span>
            </li>
            <li>
              <Mail size={18} aria-hidden='true' />
              <span>support@cybernest.com</span>
            </li>
            <li>
              <Clock3 size={18} aria-hidden='true' />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </li>
          </ul>
          <div className='contact-card__map' aria-hidden='true' />
        </aside>
      </section>

      <Footer />
    </main>
  )
}

export default Contact
