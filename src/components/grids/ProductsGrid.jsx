const ProductsGrid = ({ item }) => {
  return (
    <div className='hover:-translate-y-1  duration-500 flex flex-col justify-between shadow-md  group  transition-all ease-in-out border-2 border-gray-300/80  rounded-md relative h-[80vh]'>
      <div className='h-[50vh] w-full overflow-hidden'>
        <img
          className='h-full w-full object-cover border-2 border-gray-100'
          src={`${item.img}`}
          alt={`${item.name}`}
        />
      </div>
      <div
        className='h-[33vh] bg-gradient-to-br px-5 py-8  rounded-md
       from-slate-400/70 dark:from-black/90
       via-white           dark:via-white/5
       to-white            dark:to-slate-800/70'
      >
        <div className='grid grid-cols-3 '>
          <p className='text-gray-700  font-semibold'>{item.left_col}</p>
          <p className='text-center text-gray-700  font-semibold'>
            {item.mid_col}
          </p>
          <span className=' text-green-700 dark:text-green-900 bg-green-200 dark:bg-green-300 px-2 py-1 rounded-md'>
            {item.right_col} Million
          </span>
        </div>
        <div className='h-4/5 overflow-auto'>
          <p className='mt-2 text-gray-600 font-medium h-full'>{item.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductsGrid
