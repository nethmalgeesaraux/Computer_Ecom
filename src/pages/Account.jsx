import React from 'react'
import Footer from '../components/Footer'

const Account = () => {
  return (
    <main className='info-page'>
      <section className='info-page__hero'>
        <p className='info-page__eyebrow'>My Account</p>
        <h1>Manage your profile</h1>
        <p>Update your personal details, password and contact information.</p>
      </section>

      <section className='account-layout'>
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

      <Footer />
    </main>
  )
}

export default Account
