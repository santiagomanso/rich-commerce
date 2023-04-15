import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { PlayerContext } from '../../context/PlayerContext'
import Badge from '../Badge/Badge'

const FloatingBudget = () => {
  const location = useLocation()
  const [activeName, setActiveName] = useState(false)
  const [activeBudget, setActiveBudget] = useState(false)
  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setShow(false)
  }, [])

  useEffect(() => {
    if (location.pathname === '/cart') {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [location])

  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  const { player, resetPlayer } = useContext(PlayerContext)
  const { cart, cartCount } = useContext(CartContext)
  return (
    <>
      {player.rank ? (
        <>
          {/* pc - laptop */}
          <div className='hidden lg:block'>
            {/* CHARACTER FLOATING DIV */}
            <div
              onClick={() => {
                setActiveName(!activeName)
                setActiveBudget(false)
                setTimeout(() => {
                  setActiveName(false)
                }, 4000)
              }}
              className={`  ${
                activeName ? 'translate-x-0' : '-translate-x-[12.5rem]'
              }
              bg-slate-400 border-2 border-gray-500 text-slate-700 rounded-r-full absolute top-[50%] -translate-y-[60%] left-0 
              px-4 py-3 flex gap-3 font-medium items-center  duration-1000 z-50 cursor-pointer`}
            >
              <div className='flex gap-2 items-center justify-end relative'>
                <p className=' text-slate-700 dark:text-slate-800 w-[180px]'>
                  {player.uri}
                </p>
                <div className='bg-black/20 rounded-full h-16 w-16 flex items-center justify-center'>
                  <img
                    className='rounded-full h-full w-full'
                    src={player.squareImage}
                    alt={player.uri}
                  />
                </div>
                <button
                  onClick={resetPlayer}
                  className='absolute -top-5 -right-3 text-white rounded-full bg-red-500 px-2 py-0 dark:text-gray-200'
                >
                  X
                </button>
              </div>
            </div>

            {/* MONEY FLOATING DIV */}
            <div
              onClick={() => {
                setActiveBudget(!activeBudget)
                setActiveName(false)
                setTimeout(() => {
                  setActiveBudget(false)
                }, 4000)
              }}
              className={` ${
                activeBudget ? 'translate-x-0' : '-translate-x-[11.2rem]'
              }
              bg-green-300  rounded-r-full absolute top-[50%]  left-0 w-[250px] translate-y-[60%]
                px-2 py-6 flex gap-3 font-medium items-center  duration-500 border-2 border-green-600 cursor-pointer z-40`}
            >
              <p className='text-green-800 dark:text-green-900 w-[150px]'>
                {formatter.format(player.estWorthPrev)}M
              </p>
              <i className='absolute right-4 top-3 fa-solid fa-sack-dollar text-5xl text-green-800 self-end'></i>
            </div>

            <div
              onClick={() => navigate('/cart')}
              className={`
              bg-white dark:bg-gradient-to-br dark:from-indigo-800 dark:to-slate-800  rounded-r-full absolute top-[29%] -left-1 w-[80px] translate-y-[60%]
                px-2 py-4 flex gap-3 font-medium items-center  duration-500 border-2 border-gray-500 cursor-pointer z-40`}
            >
              <i className='fa-solid fa-cart-shopping text-5xl text-gray-600 dark:text-gray-300'></i>
              <div className='relative'>
                {cart.length > 0 ? (
                  <Badge position='absolute -top-10 -left-4' />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      {/* phones tablets */}
      {(cart.length > 0 || player.rank) && show ? (
        <div
          className='lg:hidden fixed top-[89%]  sm:translate-x-[25%] text-white z-40 bg-gray-600/95 py-4  w-full sm:w-2/3 grid grid-cols-3 place-items-center px-5
        '
        >
          <div className='flex flex-col items-center'>
            {player.rank ? (
              <div
                onClick={() => setShow(!show)}
                className='flex flex-col items-center relative'
              >
                <button
                  className={` duration-150 ${
                    show ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                  } absolute -top-6 right-0 text-white text-xl bg-red-500 px-2 py-0 rounded-full`}
                  onClick={resetPlayer}
                >
                  X
                </button>
                <div className='h-10 w-10'>
                  <img
                    className='rounded-full h-full w-full'
                    src={player.squareImage}
                    alt={player.uri}
                  />
                </div>
                <span className='text-gray-300 max-w-[150px] max-h-[23px] text-ellipsis overflow-hidden font-medium'>
                  {player.uri}
                </span>
              </div>
            ) : (
              <Link
                to='/characters'
                className='flex flex-col items-center animate-pulse text-amber-500'
              >
                <i className='text-4xl fa-solid fa-triangle-exclamation'></i>
                <span className='text-amber-500  font-semibold'>
                  Select Player
                </span>
              </Link>
            )}
          </div>
          <div className='flex flex-col items-center gap-x-2'>
            {player.rank ? (
              <>
                <i className='fa-solid fa-sack-dollar text-4xl text-gray-300'></i>
                <p className='text-gray-300 dark:text-gray-300 font-medium tracking-wide'>
                  {formatter.format(player.estWorthPrev)}M
                </p>
              </>
            ) : (
              <Link
                to='/characters'
                className='flex flex-col items-center animate-pulse text-amber-500'
              >
                <i className='text-4xl fa-solid fa-triangle-exclamation'></i>
                <span className='text-amber-500  font-semibold'>
                  Select Player
                </span>
              </Link>
            )}
          </div>
          <Link to='/cart' className='flex flex-col items-center gap-x-2'>
            <i className='fa-solid fa-cart-shopping text-4xl text-gray-300'></i>
            <p className='text-gray-300 dark:text-gray-300 font-medium tracking-wide'>
              {cartCount}
            </p>
          </Link>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default FloatingBudget
