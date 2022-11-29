import React, { useContext } from 'react'
import { Context } from '../../context/Context'

const FloatingBudget = () => {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  const [player, setPlayer] = useContext(Context)
  return (
    <>
      {player && (
        <>
          <div
            className='bg-slate-400 border-2 border-gray-500 text-slate-700 rounded-r-full
          absolute top-[50%] -translate-y-[60%] left-0 -translate-x-[12.5rem]
          px-5 py-5 flex gap-3 font-medium items-center hover:translate-x-0 duration-1000
          z-50 cursor-pointer'
          >
            <span className='flex gap-2 items-center justify-end'>
              <p className='text-3xl text-slate-700 w-[180px]'>{player.uri}</p>
              <div className='bg-black/20 rounded-full h-16 w-16 flex items-center justify-center'>
                <img
                  className='rounded-full h-full w-full'
                  src={player.squareImage}
                  alt='a'
                />
              </div>
            </span>
          </div>
          <div
            className='bg-green-300 text-green-800 rounded-r-full
        absolute top-[50%] translate-y-[60%] left-0 w-[250px] -translate-x-[11.2rem]
        px-5 py-5 flex gap-3 font-medium items-center hover:translate-x-0 duration-500 border-2 border-green-600 cursor-pointer z-50'
          >
            <p className='text-3xl w-[150px]'>
              {formatter.format(player.estWorthPrev)}M
            </p>
            <i className='absolute right-4 top-3 fa-solid fa-sack-dollar text-5xl text-green-800 self-end'></i>
          </div>
        </>
      )}
    </>
  )
}

export default FloatingBudget
