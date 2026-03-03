import React from 'react'

const categories = ['Graphic Cards', 'Laptop', 'Monitors', 'Power Supply']

const ProductGrid = () => {
  return (
    <section className='product-grid' aria-label='Product Categories'>
      <div className='product-grid__chips'>
        {categories.map((category) => (
          <button type='button' key={category} className='product-grid__chip'>
            {category}
          </button>
        ))}
      </div>

      <p className='product-grid__title'>ProductGrid</p>
    </section>
  )
}

export default ProductGrid
