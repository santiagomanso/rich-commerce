const Product = ({ item }) => {
  return (
    <div className=' flex flex-col justify-between shadow-md   border-2 border-gray-300/80  rounded-md relative h-[80vh]'>
      <div className='h-[50vh] w-full overflow-hidden'>
        <img
          className='h-full w-full object-cover border-2 border-gray-100'
          src={`${item.img}`}
          alt={`${item.name}`}
        />
      </div>
      <div
        className='h-[33vh] bg-gradient-to-br px-5 py-2  rounded-md
         from-slate-400/70 dark:from-black/90
         via-white           dark:via-white/5
         to-white            dark:to-slate-800/70'
      >
        <div className='grid grid-cols-3 items-center place-content-between '>
          <p className='col-span-2 text-gray-700  font-semibold'>
            {item.left_col}
          </p>
          <p className='text-center text-gray-700  font-semibold'>
            {item.mid_col}
          </p>
        </div>
        <div className='h-4/6 overflow-auto lg:my-1'>
          <p className='text-gray-600 font-medium h-full'>{item.desc}</p>
        </div>
        <div className='lg:py-3 grid grid-cols-1 lg:grid-cols-2 items-center place-items-center'>
          <span className='lg:text-lg text-green-700 dark:text-green-900 font-semibold px-2 py-1 rounded-md'>
            $ {item.right_col} Million
          </span>
          <button className='w-full md:w-[200px] py-2 lg:py-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md  text-white'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
