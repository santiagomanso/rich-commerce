import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false) //navbar logic
  const [active, setActive] = useState('home') //underline active navigation

  return (
    <>
      <button className='btnNavOpen' onClick={() => setOpenNav(true)}>
        <i className='text-2xl sm:text-4xl fa-solid fa-bars'></i>
      </button>
      <aside
        id='aside'
        className={` ${openNav ? 'translate-x-0' : '-translate-x-full'}   `}
      >
        <button
          className='btnNavClose'
          id='navClose'
          onClick={() => setOpenNav(false)}
        >
          <i className='text-2xl text-white sm:text-4xl fa-solid fa-bars'></i>
        </button>
        <ul className='flex flex-col gap-24 text-center font-black'>
          <Link
            to='/'
            onClick={() => {
              setActive('home')
              setOpenNav(false)
            }}
            className={`${
              active === 'home' ? 'border-b-[6px] border-indigo-400' : ''
            } text-3xl`}
          >
            Home
          </Link>
          <Link
            to='/profile'
            onClick={() => {
              setActive('profile')
              setOpenNav(false)
            }}
            className={`${
              active === 'profile' ? 'border-b-[6px] border-indigo-400' : ''
            } text-3xl`}
          >
            Profile
          </Link>
        </ul>
      </aside>
    </>
  )
}

export default Navbar
