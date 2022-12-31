import { useState } from 'react'

const ThemeSwitcher = () => {
  const [active, setActive] = useState('sun')
  return (
    <div className='flex items-center text-2xl border-b-2 border-transparent gap-x-5 rounded-md'>
      <i
        onClick={() => {
          setActive('sun')
          document.documentElement.classList.remove('dark')
        }}
        className={`fa-solid fa-sun cursor-pointer ${
          active === 'sun' ? 'text-yellow-600' : 'text-gray-300/80'
        }`}
      ></i>
      <i
        onClick={() => {
          setActive('moon')
          document.documentElement.classList.add('dark')
        }}
        className={`fa-solid fa-moon cursor-pointer ${
          active === 'moon' ? 'text-violet-500' : 'text-gray-500'
        }`}
      ></i>
    </div>
  )
}

export default ThemeSwitcher
