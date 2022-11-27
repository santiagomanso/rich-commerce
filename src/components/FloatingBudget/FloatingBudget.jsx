import React from 'react'

const FloatingBudget = () => {
  return (
    <>
      <div
        className='bg-slate-400 border-2 border-gray-500 text-slate-700 rounded-r-full
        absolute top-[50%] -translate-y-[60%] left-0 -translate-x-[10.7rem]
        px-5 py-5 flex gap-3 font-medium items-center hover:translate-x-0 duration-1000
        z-50 cursor-pointer'
      >
        <span className='flex gap-2 items-center justify-end'>
          <p className='text-3xl text-slate-700'>Elon Musk</p>
          <div className='bg-black/20 rounded-full h-14 w-14 flex items-center justify-center'>
            <img
              className='rounded-full h-full w-full'
              src='https://specials-images.forbesimg.com/imageserve/62d700cd6094d2c180f269b9/416x416.jpg?background=000000&cropX1=0&cropX2=959&cropY1=0&cropY2=959'
              alt='a'
            />
          </div>
        </span>
      </div>
      <div
        className='bg-green-300 text-green-800 rounded-r-full
      absolute top-[50%] translate-y-[60%] left-0 -translate-x-[5.8rem]
      px-5 py-5 flex gap-3 font-medium items-center hover:translate-x-0 duration-500 border-2 border-green-600 cursor-pointer'
      >
        <p className='text-3xl'>191 B</p>
        <i className='fa-solid fa-sack-dollar text-5xl text-green-800'></i>
      </div>
    </>
  )
}

export default FloatingBudget
