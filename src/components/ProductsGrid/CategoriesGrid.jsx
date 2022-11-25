//fix grid img messing up layout
//no need for localState, map directly from props
//make smaller component

import Product from '../Product/Product'

const CategoriesGrid = ({ products }) => {
  return (
    <>
      <h2 className='mt-14 text-xl font-semibold text-gray-600'>
        Our Categories of luxury assets
      </h2>
      <div className='mt-5 w-full grid grid-cols-3 gap-x-20 gap-y-10'>
        {products.length > 0
          ? products.map((product) => (
              <Product product={product} key={product.id} />
            ))
          : ''}
      </div>
    </>
  )
}

export default CategoriesGrid
