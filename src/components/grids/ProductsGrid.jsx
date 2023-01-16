import React from 'react'
import Product from '../Product/Product'

const ProductsGrid = ({ filterItems }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {filterItems.map((item) => (
        <Product item={item} key={item.product_id} />
      ))}
    </div>
  )
}

export default ProductsGrid
