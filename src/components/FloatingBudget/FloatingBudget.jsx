import React, { useContext, useState } from 'react'
import { PlayerContext } from '../../context/PlayerContext'

const FloatingBudget = () => {
  const [activeName, setActiveName] = useState(false)
  const [activeBudget, setActiveBudget] = useState(false)

  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  const { player, setPlayer } = useContext(PlayerContext)
  return (
    <>
      {player && (
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
              <div className='flex gap-2 items-center justify-end'>
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
                px-2 py-6 flex gap-3 font-medium items-center  duration-500 border-2 border-green-600 cursor-pointer z-50`}
            >
              <p className='text-green-800 dark:text-green-900 w-[150px]'>
                {formatter.format(player.estWorthPrev)}M
              </p>
              <i className='absolute right-4 top-3 fa-solid fa-sack-dollar text-5xl text-green-800 self-end'></i>
            </div>
          </div>

          {/* phone - tablets */}
          <div
            className='lg:hidden fixed top-[89%]  sm:translate-x-[25%] text-white z-50 bg-gray-600/95 py-4  w-full sm:w-2/3 flex justify-evenly items-center
          '
          >
            <div className='flex flex-col items-center'>
              <div className='h-10 w-10'>
                <img
                  className='rounded-full h-full w-full'
                  src={player.squareImage}
                  alt={player.uri}
                />
              </div>
              <span className=' max-w-[150px] max-h-[23px] text-ellipsis overflow-hidden'>
                {player.uri}
              </span>
            </div>
            <div className='flex flex-col items-center gap-x-2'>
              <i className='fa-solid fa-sack-dollar text-4xl text-gray-400'></i>
              <p className='text-gray-300 dark:text-gray-300'>
                {formatter.format(player.estWorthPrev)}M
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default FloatingBudget
