import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext'
import { LanguageContext } from '../../context/LanguageContext'
import { PlayerContext } from '../../context/PlayerContext'
import { RedirectContext } from '../../context/RedirectContext'
import Badge from '../Badge/Badge'
import Dropdown from '../dropdown/Dropdown'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './navbar.css'

const Navbar = () => {
  const { user, logout } = useContext(UserContext)

  const { text } = useContext(LanguageContext)
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
        <span>{text.home}</span>
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
        <div className='absolute top-5 left-4 text-white flex flex-col gap-y-1 w-full'>
          {user ? <span className='text-gray-300 rounded'>{email}</span> : ''}
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
            className={`${active === 'home' ? ' border-indigo-400' : ''} `}
          >
            {text.home}
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
              active === 'categories' ? ' border-indigo-400' : ''
            } `}
          >
            <span className='bg-gradient-to-br from-indigo-500/90 to-purple-500/80 px-3 py-2 rounded-md'>
              {text.shopNow}
            </span>
          </Link>
          <Link
            to='/characters'
            onClick={() => {
              setActive('characters')
              if (!user) {
                setPath('/characters')
              } else {
                setPath('')
              }
              setOpenNav(false)
            }}
            className={`${
              active === 'characters' ? ' border-indigo-400' : ''
            } `}
          >
            {text.players}
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
              className={`${active === 'login' ? ' border-indigo-400' : ''} `}
            >
              {text.login}
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
              active === 'cart' ? ' border-indigo-400' : ''
            } `}
          >
            {text.cart}
          </Link>
          {user ? (
            <span
              className='text-red-400 py-2 rounded-md'
              onClick={handleLogout}
            >
              {text.logout}
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
          className={`hover:-translate-y-1 duration-200 ${
            active === 'home' ? '' : ''
          } flex items-center gap-2`}
        >
          <i className={` fa-solid fa-house text-xl text-slate-600`}></i>
          <span>{text.home}</span>
        </Link>

        <div className='flex space-x-14 items-center'>
          <ThemeSwitcher />
          <Link
            to='/howtoplay'
            onClick={() => handleActive('howtoplay')}
            className={`hover:-translate-y-1 duration-200 ${
              active === 'howtoplay' ? '' : ''
            } flex items-center gap-2`}
          >
            <span>{text.howToPlay}</span>
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
            className={`hover:-translate-y-1 duration-200 ${
              active === 'categories' ? '' : ''
            } flex items-center gap-2`}
          >
            <span className='shadow-md bg-gradient-to-br from-indigo-500/90 to-purple-500/80 text-gray-200 rounded-lg px-3 py-1'>
              {text.shopNow}
            </span>
          </Link>
          <Link
            to='/characters'
            onClick={() => {
              if (!user) {
                setPath('/characters')
              } else {
                setActive('')
              }
              handleActive('characters')
            }}
            className={`hover:-translate-y-1 duration-200 ${
              active === 'characters' ? '' : ''
            } flex items-center gap-2`}
          >
            <span>{text.players}</span>
          </Link>
          {user ? (
            ''
          ) : (
            <Link
              to='/Login'
              onClick={() => handleActive('login')}
              className={`hover:-translate-y-1 duration-200 ${
                active === 'login' ? '' : ''
              } flex items-center gap-2`}
            >
              <span>{text.login}</span>
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
            className={`relative hover:-translate-y-1 duration-200 ${
              active === 'cart' ? '' : ''
            } flex items-center gap-2`}
          >
            <span> {text.cart} </span>
            <i className='fa-solid fa-cart-shopping text-xl text-slate-600'></i>
            {cart.length > 0 ? (
              <Badge position='absolute -top-3 -right-6' />
            ) : (
              ''
            )}
          </Link>
          {user ? (
            <Dropdown name={email} logout={handleLogout} ulOptions='w-42 p-4' />
          ) : (
            ''
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
