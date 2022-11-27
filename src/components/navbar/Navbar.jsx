import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false) //navbar logic
  const [active, setActive] = useState('home') //underline active navigation

  const handleActive = (link) => {
    setActive(link)
  }

  return (
    <nav>
      {/* Mobile Navigation */}
      <button className='btnNavOpen' onClick={() => setOpenNav(true)}>
        <i className='text-2xl sm:text-4xl fa-solid fa-bars'></i>
      </button>
      <aside
        id='aside'
        className={` fixed ${
          openNav ? 'translate-x-0' : '-translate-x-full'
        }   `}
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

      {/* Pc Navigation */}
      <div className='navPc hidden lg:flex justify-between items-center'>
        <Link
          to='/'
          onClick={() => handleActive('home')}
          className={`hover:border-violet-600 ${
            active === 'home'
              ? 'border-b-4 border-violet-600'
              : 'border-b-4 border-transparent'
          } flex items-center gap-2`}
        >
          <i className={` fa-solid fa-house text-xl text-violet-600`}></i>
          <span className='text-xl'>Home</span>
        </Link>

        <div className='flex items-center space-x-5'></div>

        <div className='flex space-x-14 items-center'>
          <Link
            to='/characters'
            onClick={() => handleActive('characters')}
            className={`hover:border-violet-600 ${
              active === 'characters'
                ? 'border-b-4 border-violet-600'
                : 'border-b-4 border-transparent'
            } flex items-center gap-2`}
          >
            <span className='text-lg'>characters</span>
          </Link>
          <Link
            to='/Login'
            onClick={() => handleActive('login')}
            className={`hover:border-violet-600 ${
              active === 'login'
                ? 'border-b-4 border-violet-600'
                : 'border-b-4 border-transparent'
            } flex items-center gap-2`}
          >
            <span className='text-lg'>Log in</span>
          </Link>
          <Link
            to='/Cart'
            onClick={() => handleActive('cart')}
            className={`hover:border-violet-600 ${
              active === 'cart'
                ? 'border-b-4 border-violet-600'
                : 'border-b-4 border-transparent'
            } flex items-center gap-2`}
          >
            <i className='fa-solid fa-cart-shopping text-xl text-violet-600'></i>
            <span className='text-lg'>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
