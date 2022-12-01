const ProductsGrid = ({ item }) => {
  return (
    <div className='hover:-translate-y-1  duration-500 flex flex-col justify-between rounded-lg shadow-md  group rounded-t-md transition-all ease-in-out border-2 border-gray-300/80  rounded-b-[3.4rem] relative h-[80vh]'>
      <div className='h-[50vh] w-full overflow-hidden'>
        <img
          className='h-full w-full object-cover border-2 border-gray-100 rounded-lg'
          src={`${item.img}`}
          alt={`${item.name}`}
        />
      </div>
      <div className='h-[33vh] bg-gradient-to-br from-slate-400/70 via-white to-white px-5 py-8'>
        <div className='grid grid-cols-3 '>
          <p className='text-gray-700 text-xl font-semibold'>{item.left_col}</p>
          <p className='text-center text-gray-700 text-xl font-semibold'>
            {item.mid_col}
          </p>
          <span className='text-xl text-green-700 bg-green-100 px-2 py-1 rounded-md'>
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
