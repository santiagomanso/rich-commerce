import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductsGrid from '../../components/grids/ProductsGrid'
import SkeletonGrid from '../../components/grids/SkeletonGrid'
import Product from '../../components/Product/Product'
import { LanguageContext } from '../../context/LanguageContext'
import { categories_list } from '../../data/categories'
import { products } from '../../data/products'

//tener otro state, pasar el filter a una fn useEffect

const ProductsScreen = () => {
  const { text, language } = useContext(LanguageContext)

  //get id from params
  const { categoryId } = useParams()

  const [categoryName, setCategoryName] = useState(
    categories_list[categoryId - 1], // array are 0based but categories list are not 0 based, so -1 fix
  )

  //state to store RAW collection of products
  const [items, setItems] = useState(products)

  //filter function to extract matching categories and products
  const filterItems = items.filter((item, i) => {
    return item.category_id === +categoryId //needs + to transform to integer otherwise === not equal between number and string
  })

  const [filteredItems, setfilteredItems] = useState(filterItems)
  //map de prouct con filter

  return (
    <main className='animate__animated animate__fadeIn'>
      <Link
        to='/categories'
        className='p-2 lg:p-0 flex gap-1 items-center  hover:translate-x-1 duration-150'
      >
        <i className='fa-solid fa-chevron-left text-gray-600 text-xl'></i>
        <span className=' text-gray-600 text-xl font-medium'>
          {text.backToCategories}
        </span>
      </Link>

      <h1 className='px-2 lg:px-0 mt-4 mb-2 font-semibold text-gray-600'>
        {categoryName.name[language]}
      </h1>
      {/* from a category, a collection of products get rendered */}
      {!filteredItems ? (
        <SkeletonGrid />
      ) : (
        <ProductsGrid filterItems={filterItems} />
      )}
    </main>
  )
}

export default ProductsScreen
