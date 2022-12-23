import { Link } from 'react-router-dom'
import Reviews from '../Reviews/Reviews'

const Category = ({ category }) => {
  return (
    <Link
      to={`/category/${category.category_id}`}
      className={`group bg-gradient-to-b rounded-t-md transition-all ease-in-out border-2 border-gray-300/80  ${category.row} ${category.col} flex flex-col flex-1  overflow-hidden shadow-md`}
      key={category.category_id}
    >
      <div className='h-full relative'>
        <div className='h-full w-full relative overflow-hidden'>
          <Reviews />
          <img
            className='group-hover:scale-125 duration-[2s] bg-black/60
            object-cover w-full h-full'
            alt='imagen'
            src={category.img}
          />
        </div>
        {category.adult || category.new ? (
          <div
            className={`text-center rotate-[30deg] absolute top-2 -right-7 
      ${category.adult ? 'text-red-500 bg-red-200' : ''}
      ${
        category.new ? 'text-amber-500 bg-yellow-200' : ''
      } px-14 py-[0.10rem] text-lg font-semibold shadow-lg`}
          >
            {category.adult ? '+16' : ''}
            {category.new ? 'NEW' : ''}
          </div>
        ) : (
          ''
        )}
      </div>
      <div
        className='duration-700 bg-gradient-to-t
        from-gray-300 via-white to-white flex flex-col items-center px-5 py-4'
      >
        <h3 className='text-gray-700  font-semibold'>{category.name}</h3>
        <p className='text-gray-500 font-medium'>{category.desc}</p>
      </div>
    </Link>
  )
}

export default Category
