import React from 'react'

const ProductGrid = ({
  categories,
  selectedCategory,
  onCategoryChange,
  products,
}) => {
  return (
    <section className='product-grid' aria-label='Product Categories'>
      <div className='product-grid__chips'>
        <button
          type='button'
          className={`product-grid__chip ${
            selectedCategory === 'All' ? 'product-grid__chip--active' : ''
          }`}
          onClick={() => onCategoryChange('All')}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            type='button'
            key={category}
            className={`product-grid__chip ${
              selectedCategory === category ? 'product-grid__chip--active' : ''
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='product-grid__list'>
        {products.map((product) => (
          <article key={product.id} className='product-grid__card'>
            <div className='product-grid__image-wrap'>
              <img
                src={product.image}
                alt={product.title}
                className='product-grid__image'
                loading='lazy'
              />
            </div>
            <div className='product-grid__content'>
              <h3>{product.title}</h3>
              <p className='product-grid__meta'>{product.category}</p>
              <p className='product-grid__price'>${product.price.toFixed(2)}</p>
            </div>
          </article>
        ))}
      </div>

      {products.length === 0 && (
        <p className='product-grid__empty'>No products found for this filter.</p>
      )}
    </section>
  )
}

export default ProductGrid
