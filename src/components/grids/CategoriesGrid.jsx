import Category from '../Category/Category'

const CategoriesGrid = ({ categories }) => {
  return (
    <section>
      <h1 className='mb-2 font-semibold text-gray-600'>
        Our Categories of luxury assets
      </h1>
      <div
        className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 select-none
      md:gap-10 gap-y-10
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
