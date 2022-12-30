import React from 'react'

const HowToPlayScreen = () => {
  return (
    <div className='lg:mt-10'>
      <span className='text-sky-700 font-semibold'>Getting started</span>
      <h1 className='font-semibold text-slate-900'>
        How To Play Billionaire eCommerce!
      </h1>

      <span className='text-gray-500 font-medium'>
        This application allow you to simulate the wealth of the top 10 forbes
        human beeings of the planet. and get a grasp of the adquisition power,
        by consuming an API and with some frontend magic i came up with this
        idea to combine the data from forbes400 api and my interest for
        E-Commerce apps to show how much it means to be within the top %1 of the
        population.
      </span>

      <div className='flex items-start gap-2 mt-10'>
        <span className='text-white font-medium bg-slate-600 px-2 py-1 rounded text-sm'>
          1
        </span>
        <div className='flex flex-col'>
          <span className='font-semibold text-slate-800'>Login</span>
          <span>First step is to login in order to be able to buy stuff!!</span>
          <ul className='list-disc pl-5'>
            <li>Create a new user with username/password</li>
            <li>Sign in with google button</li>
            <li>
              Use guest account{' '}
              <span className='inline-block py-[0.15rem] px-1 leading-none text-center whitespace-nowrap align-baseline font-medium bg-slate-400 text-white rounded'>
                recommended
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HowToPlayScreen
