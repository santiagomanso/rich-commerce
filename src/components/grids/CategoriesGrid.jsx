import Category from '../Category/Category'

const CategoriesGrid = ({ categories }) => {
  return (
    <section>
      <h1 className='mb-2 text-xl font-semibold text-gray-600'>
        Our Categories of luxury assets
      </h1>
      <div className='w-full grid grid-cols-3 gap-x-20 gap-y-10 select-none'>
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
