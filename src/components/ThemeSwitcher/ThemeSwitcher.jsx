import { useState } from 'react'
import LanguageDropdown from './LanguageDropdown'

const ThemeSwitcher = ({ setOpenNav }) => {
  const [active, setActive] = useState('sun')
  return (
    <div className='flex items-center text-2xl border-b-2 border-transparent gap-x-5 rounded-md'>
      <i
        onClick={() => {
          if (setOpenNav) {
            setOpenNav(false)
          }
          setActive('sun')
          document.documentElement.classList.remove('dark')
        }}
        className={`fa-solid fa-sun cursor-pointer hover:-translate-y-1 duration-200 ${
          active === 'sun' ? 'text-yellow-600' : 'text-gray-300/80'
        }`}
      ></i>
      <i
        onClick={() => {
          if (setOpenNav) {
            setOpenNav(false)
          }
          setActive('moon')
          document.documentElement.classList.add('dark')
        }}
        className={`fa-solid fa-moon cursor-pointer hover:-translate-y-1 duration-200 ${
          active === 'moon' ? 'text-violet-500' : 'text-gray-500'
        }`}
      ></i>
      <LanguageDropdown />
    </div>
  )
}

export default ThemeSwitcher
