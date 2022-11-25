const Product = ({ product }) => {
  return (
    <div
      className={` ${product.row} ${product.col} flex flex-col justify-start rounded-lg shadow-md`}
      key={product.id}
    >
      <div className='rounded-t-lg group overflow-hidden h-full relative'>
        <img
          className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full'
          alt='imagen'
          src={product.img}
        />
        {product.adult || product.new ? (
          <div
            className={`text-center rotate-[30deg] absolute top-2 -right-7 
      ${product.adult ? 'text-red-500 bg-red-200' : ''}
      ${
        product.new ? 'text-amber-500 bg-yellow-200' : ''
      } px-14 py-[0.10rem] text-lg font-semibold shadow-lg`}
          >
            {product.adult ? '+16' : ''}
            {product.new ? 'NEW' : ''}
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='bg-white/20 h-[70px] flex flex-col justify-evenly items-center itemsc'>
        <h2 className='text-gray-700 text-xl font-semibold'>{product.name}</h2>
        <p className='text-gray-500 font-medium'>{product.desc}</p>
      </div>
    </div>
  )
}

export default Product
