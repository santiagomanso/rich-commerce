import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'
import { LanguageContext } from '../../context/LanguageContext'
import { RedirectContext } from '../../context/RedirectContext'
import Rating from '../Rating/Rating'
import './category.css'

const Category = ({ category }) => {
  const { language } = useContext(LanguageContext)
  const { path, setPath } = useContext(RedirectContext)
  const { user } = useContext(UserContext)
  return (
    <Link
      onClick={() => {
        if (!user) {
          setPath(`/products/${category.category_id}`) // no user = setPath for further redirect
        } else {
          setPath('') // user = no redirect
        }
      }}
      to={`/products/${category.category_id}`}
      className={`categoryCard group ${category.row} ${category.col} 
      bg-white dark:bg-slate-800/60`}
      key={category.category_id}
    >
      <div className='h-full relative'>
        <div className='h-full w-full relative overflow-hidden'>
          <Rating />
          <img
            className='group-hover:scale-110 duration-[2s] bg-black/60
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
      <div className='categoryDesc'>
        <h3 className='text-gray-700  font-semibold'>
          {category.name[language]}
        </h3>
        <p className='text-gray-500 font-medium'>{category.desc[language]}</p>
      </div>
    </Link>
  )
}

export default Category
