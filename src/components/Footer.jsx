import React from 'react'
import {
  Facebook,
  Instagram,
  Mail,
  Send,
  Twitter,
  Youtube,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='site-footer__newsletter'>
        <h2>Subscribe Our Newsletter</h2>
        <form className='site-footer__subscribe-form'>
          <Mail size={18} aria-hidden='true' />
          <input type='email' placeholder='Enter Your Email' aria-label='Email' />
          <button type='submit'>
            <Send size={16} aria-hidden='true' />
            Submit
          </button>
        </form>
      </div>

      <div className='site-footer__main'>
        <div className='site-footer__column'>
          <h3>audiophile</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex
            laboriosam dignissimos iusto ut nam! Nemo quo maxime eaque error!
          </p>
          <div className='site-footer__social'>
            <a href='#' aria-label='Facebook'>
              <Facebook size={18} aria-hidden='true' />
            </a>
            <a href='#' aria-label='Twitter'>
              <Twitter size={18} aria-hidden='true' />
            </a>
            <a href='#' aria-label='YouTube'>
              <Youtube size={18} aria-hidden='true' />
            </a>
            <a href='#' aria-label='Instagram'>
              <Instagram size={18} aria-hidden='true' />
            </a>
          </div>
        </div>

        <div className='site-footer__column'>
          <h4>Pages</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='site-footer__column'>
          <h4>Category</h4>
          <ul>
            <li>Monitors</li>
            <li>GPUs</li>
            <li>Laptops</li>
            <li>Power Supply</li>
          </ul>
        </div>

        <div className='site-footer__column'>
          <h4>Category</h4>
          <ul>
            <li>70 Washington Square South, New York, NY 10012, United States</li>
            <li>+12345 678 910</li>
            <li>+12345 678 109</li>
          </ul>
        </div>
      </div>

      <div className='site-footer__bottom'>Copyright © 2026 OnlineITuts</div>
    </footer>
  )
}

export default Footer
