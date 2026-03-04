import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import products from '../productContent'
import { getCartItems, saveCartItems } from '../utils/cartStorage'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [addedMessage, setAddedMessage] = useState('')

  const product = useMemo(() => {
    if (!id) return products[0]
    return products.find((item) => item.id === Number(id))
  }, [id])

  const handleAddToCart = () => {
    if (!product) return

    const parsedCart = getCartItems()
    const existing = parsedCart.find((item) => item.id === product.id)

    let updatedCart = parsedCart
    if (existing) {
      updatedCart = parsedCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
      )
    } else {
      updatedCart = [...parsedCart, { ...product, quantity }]
    }

    saveCartItems(updatedCart)
    setAddedMessage(`Added ${quantity} item(s) to cart`)
  }

  if (!product) {
    return (
      <section className='product-details product-details--empty' data-reveal>
        <h2>Product not found</h2>
        <button type='button' onClick={() => navigate('/')}>
          Back to Home
        </button>
      </section>
    )
  }

  return (
    <section className='product-details' data-reveal>
      <div className='product-details__image-wrap' data-reveal data-reveal-delay='20'>
        <img src={product.image} alt={product.title} className='product-details__image' />
      </div>

      <div className='product-details__info' data-reveal data-reveal-delay='80'>
        <p className='product-details__category'>{product.category}</p>
        <h1>{product.title}</h1>
        <p className='product-details__description'>{product.description}</p>
        <p className='product-details__price'>${product.price.toFixed(2)}</p>

        <div className='product-details__actions'>
          <div className='product-details__qty'>
            <button
              type='button'
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button type='button' onClick={() => setQuantity((prev) => prev + 1)}>
              +
            </button>
          </div>

          <button type='button' className='product-details__add-btn' onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button type='button' className='product-details__go-cart' onClick={() => navigate('/cart')}>
            Go to Cart
          </button>
        </div>

        {addedMessage && <p className='product-details__message'>{addedMessage}</p>}
      </div>
    </section>
  )
}

export default ProductDetails
