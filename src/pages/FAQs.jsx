import React from 'react'
import Footer from '../components/Footer'

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
    answer:
      'Standard delivery usually takes 2 to 5 business days based on your location.',
  },
  {
    question: 'Can I cancel an order?',
    answer:
      'Orders can be canceled before dispatch. Contact support quickly with your order information.',
  },
]

const FAQs = () => {
  return (
    <main className='info-page'>
      <section className='info-page__hero'>
        <p className='info-page__eyebrow'>FAQs</p>
        <h1>Frequently asked questions</h1>
        <p>
          Quick answers about ordering, delivery, warranty, and support.
        </p>
      </section>

      <section className='faq-list'>
        {faqItems.map((item) => (
          <details key={item.question} className='faq-item'>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>

      <Footer />
    </main>
  )
}

export default FAQs
