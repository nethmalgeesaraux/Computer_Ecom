import React, { useEffect, useMemo, useState } from 'react'
import { getCartItems, saveCartItems } from '../utils/cartStorage'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

  const updateCart = (nextItems) => {
    setCartItems(nextItems)
    saveCartItems(nextItems)
  }

  const changeQty = (id, delta) => {
    const next = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
      )
      .filter((item) => item.quantity > 0)
    updateCart(next)
  }

  const removeItem = (id) => {
    updateCart(cartItems.filter((item) => item.id !== id))
  }

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  return (
    <section className='cart-page' data-reveal>
      <h1 data-reveal>Cart</h1>

      {cartItems.length === 0 && <p className='cart-page__empty'>Your cart is empty.</p>}

      {cartItems.length > 0 && (
        <>
          <div className='cart-page__list' data-reveal data-reveal-delay='40'>
            {cartItems.map((item, index) => (
              <article
                key={item.id}
                className='cart-page__item'
                data-reveal
                data-reveal-delay={index * 35}
              >
                <img src={item.image} alt={item.title} className='cart-page__image' />
                <div className='cart-page__info'>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                  <p className='cart-page__price'>${item.price.toFixed(2)}</p>
                </div>
                <div className='cart-page__controls'>
                  <button type='button' onClick={() => changeQty(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button type='button' onClick={() => changeQty(item.id, 1)}>
                    +
                  </button>
                </div>
                <button
                  type='button'
                  className='cart-page__remove'
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </article>
            ))}
          </div>

          <div className='cart-page__total' data-reveal data-reveal-delay='90'>
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </section>
  )
}

export default CartPage
