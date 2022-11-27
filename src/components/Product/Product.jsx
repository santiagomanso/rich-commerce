import Reviews from '../Reviews/Reviews'

const Product = ({ product }) => {
  return (
    <div
      className={`group bg-gradient-to-b rounded-t-md transition-all ease-in-out from-slate-300 to-stone-500 border-2 border-gray-300/80  ${product.row} ${product.col} flex flex-col justify-start rounded-b-[3.4rem] overflow-hidden shadow-md min-h-[40vh]`}
      key={product.id}
    >
      <div className='rounded-t h-full relative'>
        <div className='h-full rounded-md  relative overflow-hidden p-5'>
          <Reviews />
          <img
            className='group-hover:scale-125 duration-[2s] bg-black/60 object-cover w-full h-full 
            rounded-t-[1rem] rounded-b-2xl'
            alt='imagen'
            src={product.img}
          />
        </div>
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
      <div className='group-hover:rounded duration-700 rounded-t-full rounded-b-full bg-gradient-to-bl from-white to-stone-400/70 flex flex-col justify-evenly items-center px-5 py-4'>
        <h2 className='text-gray-700 text-xl font-semibold'>{product.name}</h2>
        <p className='text-gray-500 font-medium'>{product.desc}</p>
      </div>
    </div>
  )
}

export default Product
