import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'
import { PlayerContext } from '../../context/PlayerContext'
import { RedirectContext } from '../../context/RedirectContext'
import Badge from '../Badge/Badge'
import Dropdown from '../dropdown/Dropdown'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './navbar.css'

const Navbar = () => {
  const { user, logout } = UserAuth()

  const navigate = useNavigate()

  const [openNav, setOpenNav] = useState(false) //navbar logic
  const [active, setActive] = useState('home') //underline active navigation
  const [email, setEmail] = useState('') //to send to child dropDown

  const { setPlayer } = useContext(PlayerContext)
  const { cart, setCart } = useContext(CartContext)
  const { setPath } = useContext(RedirectContext)

  useEffect(() => {
    if (user) {
      setEmail(user.email)
    }
  }, [user])

  const handleActive = (link) => {
    setActive('')
  }

  const handleLogout = async () => {
    setPath('')
    setPlayer('')
    setCart([])
    setOpenNav(false)
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav>
      {/* Mobile Navigation */}
      <Link to='/' className='homeDiv'>
        <i className='fa-solid fa-house'></i>
        <span>Home</span>
      </Link>
      <button className='btnNavOpen' onClick={() => setOpenNav(true)}>
        <i className='fa-solid fa-bars'></i>
      </button>
      <aside
        id='aside'
        className={` fixed ${
          openNav ? 'translate-x-0' : '-translate-x-full'
        }   `}
      >
        <div className='absolute top-5 left-4 text-white flex justify-start gap-x-16 w-full'>
          {user ? <span className='text-white'>{email}</span> : ''}
          <ThemeSwitcher setOpenNav={setOpenNav} />
        </div>
        <button
          className='btnNavClose'
          id='navClose'
          onClick={() => setOpenNav(false)}
        >
          <i className='text-white  fa-solid fa-bars'></i>
        </button>
        <ul>
          <Link
            to='/'
            onClick={() => {
              setActive('home')
              setOpenNav(false)
            }}
            className={`${
              active === 'home' ? 'border-b-[6px] border-indigo-400' : ''
            } `}
          >
            Home
          </Link>
          <Link
            to='/categories'
            onClick={() => {
              setActive('categories')
              if (!user) {
                setPath('/categories')
              } else {
                setPath('')
              }
              setOpenNav(false)
            }}
            className={`${
              active === 'categories' ? 'border-b-[6px] border-indigo-400' : ''
            } `}
          >
            Categories
          </Link>
          <Link
            to='/characters'
            onClick={() => {
              setActive('characters')
              setOpenNav(false)
            }}
            className={`${
              active === 'characters' ? 'border-b-[6px] border-indigo-400' : ''
            } `}
          >
            Characters
          </Link>
          <Link
            to='/profile'
            onClick={() => {
              setActive('profile')
              setOpenNav(false)
            }}
            className={`${
              active === 'profile' ? 'border-b-[6px] border-indigo-400' : ''
            } `}
          >
            Profile
          </Link>
          {user ? (
            ''
          ) : (
            <Link
              to='/login'
              onClick={() => {
                setActive('login')
                setOpenNav(false)
              }}
              className={`${
                active === 'login' ? 'border-b-[6px] border-indigo-400' : ''
              } `}
            >
              Login
            </Link>
          )}
          <Link
            to='/cart'
            onClick={() => {
              setActive('cart')
              if (!user) {
                setPath('/cart')
              } else {
                setPath('')
              }
              setOpenNav(false)
            }}
            className={` relative ${
              active === 'cart' ? 'border-b-[6px] border-indigo-400' : ''
            } `}
          >
            Cart
          </Link>
          {user ? (
            <span
              className='text-red-600 bg-red-200 py-2 rounded-md'
              onClick={handleLogout}
            >
              Logout
            </span>
          ) : (
            ''
          )}
        </ul>
      </aside>

      {/* Pc Navigation */}
      <div className='navPc z-40'>
        <Link
          to='/'
          onClick={() => handleActive('home')}
          className={`hover:border-slate-600 ${
            active === 'home'
              ? 'border-b-4 border-slate-600'
              : 'border-b-4 border-transparent'
          } flex items-center gap-2`}
        >
          <i className={` fa-solid fa-house text-xl text-slate-600`}></i>
          <span>Home</span>
        </Link>

        <div className='flex space-x-14 items-center'>
          <ThemeSwitcher />
          <Link
            to='/howtoplay'
            onClick={() => handleActive('howtoplay')}
            className={`hover:border-slate-600 ${
              active === 'howtoplay'
                ? 'border-b-4 border-slate-600'
                : 'border-b-4 border-transparent'
            } flex items-center gap-2`}
          >
            <span>How to play</span>
          </Link>
          <Link
            to='/categories'
            onClick={() => {
              if (!user) {
                setPath('/categories')
              } else {
                setPath('')
              }
              handleActive('categories')
            }}
            className={`hover:border-slate-600 ${
              active === 'categories'
                ? 'border-b-4 border-slate-600'
                : 'border-b-4 border-transparent'
            } flex items-center gap-2`}
          >
            <span>Categories</span>
          </Link>
          <Link
            to='/characters'
            onClick={() => {
              if (!user) {
                setPath('/characters')
              }
              handleActive('characters')
            }}
            className={`hover:border-slate-600 ${
              active === 'characters'
                ? 'border-b-4 border-slate-600'
                : 'border-b-4 border-transparent'
            } flex items-center gap-2`}
          >
            <span>Characters</span>
          </Link>
          {user ? (
            ''
          ) : (
            <Link
              to='/Login'
              onClick={() => handleActive('login')}
              className={`hover:border-slate-600 ${
                active === 'login'
                  ? 'border-b-4 border-slate-600'
                  : 'border-b-4 border-transparent'
              } flex items-center gap-2`}
            >
              <span>Log in</span>
            </Link>
          )}
          <Link
            to='/Cart'
            onClick={() => {
              handleActive('cart')
              if (!user) {
                setPath('/cart')
              }
            }}
            className={`relative hover:border-slate-600 ${
              active === 'cart'
                ? 'border-b-4 border-slate-600'
                : 'border-b-4 border-transparent'
            } flex items-center gap-2`}
          >
            <span> Cart </span>
            <i className='fa-solid fa-cart-shopping text-xl text-slate-600'></i>
            {cart.length > 0 ? (
              <Badge position='absolute -top-3 -right-6' />
            ) : (
              ''
            )}
          </Link>
          {user ? <Dropdown name={email} logout={handleLogout} /> : ''}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
