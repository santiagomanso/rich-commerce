import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext'
import Category from '../Category/Category'

const CategoriesGrid = ({ categories }) => {
  const { text } = useContext(LanguageContext)

  return (
    <section className='p-2 lg:p-0'>
      <h1 className='mb-2 font-semibold text-gray-600'>{text.categoriesH1}</h1>
      <div
        className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 select-none
                   gap-7 md:gap-10 lg:gap-y-10
      '
      >
        {categories
          ? categories.map((category) => (
              <Category category={category} key={category.category_id} />
            ))
          : ''}
      </div>
    </section>
  )
}

export default CategoriesGrid
