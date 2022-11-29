import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoriesGrid from '../../components/grids/CategoriesGrid'
import ProductsGrid from '../../components/grids/ProductsGrid'
import { products } from '../../data/products'

//tener otro state, pasar el filter a una fn useEffect

const CategoryScreen = () => {
  //get id from params and use it to somehow fetch specific array of products based on category_id
  const { categoryId } = useParams()
  console.log('id:', categoryId)

  const [items, setItems] = useState(products)

  const filteredItems = items.filter((item, i) => {
    // console.log('itemCategoryid', item.category_id)
    // console.log('item', item)
    return item.category_id == categoryId
  })
  console.log('filteredItems', filteredItems)

  //map de prouct con filter

  console.log(categoryId)
  return (
    <div>
      <h1 className='mt-14 mb-2 text-xl font-semibold text-gray-600'>
        Private Islands
      </h1>
      {/* from a category, a collection of products get rendered */}
      <ProductsGrid />
    </div>
  )
}

export default CategoryScreen
