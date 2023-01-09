import { useState } from 'react'
import { useParams } from 'react-router-dom'
import SkeletonGrid from '../../components/grids/SkeletonGrid'
import Product from '../../components/Product/Product'
import { products } from '../../data/products'

//tener otro state, pasar el filter a una fn useEffect

const ProductsScreen = () => {
  //get id from params
  const { categoryId } = useParams()

  //state to store RAW collection of products
  const [items, setItems] = useState(products)

  //filter function to extract matching categories and products
  const filterItems = items.filter((item, i) => {
    return item.category_id == categoryId
  })

  const [filteredItems, setfilteredItems] = useState(filterItems)
  //map de prouct con filter

  return (
    <div>
      <h1 className='mt-14 mb-2 font-semibold text-gray-600'>
        Private Islands
      </h1>
      {/* from a category, a collection of products get rendered */}
      {!filteredItems ? (
        <SkeletonGrid />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {filterItems.map((item) => (
            <Product item={item} key={item.product_id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsScreen
