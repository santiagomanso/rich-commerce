import Category from '../Category/Category'

const CategoriesGrid = ({ categories }) => {
  return (
    <section>
      <h1 className='mb-2 font-semibold text-gray-600'>
        Our Categories of luxury assets
      </h1>
      <div
        className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 select-none
      sm:gap-5 md:gap-10 lg:gap-y-10
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
