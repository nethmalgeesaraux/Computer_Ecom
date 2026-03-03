import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/product' },
  { label: 'FAQs', to: '/cart' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  return (
    <header className='top-nav'>
      <nav className='top-nav__links' aria-label='Main Navigation'>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `top-nav__link ${isActive ? 'top-nav__link--active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button type='button' className='top-nav__profile' aria-label='Profile'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.8'
          strokeLinecap='round'
          strokeLinejoin='round'
          width='20'
          height='20'
          aria-hidden='true'
        >
          <path d='M20 21a8 8 0 1 0-16 0' />
          <circle cx='12' cy='7' r='4' />
        </svg>
      </button>
    </header>
  )
}

export default Navbar
