const ProductsGrid = () => {
  return (
    <div className='grid grid-cols-2 gap-8'>
      <div className='bg-gradient-to-t from-slate-200 to-slate-500 h-[75vh] rounded-lg  flex flex-col justify-between px-5 py-8 relative'>
        <div className='h-3/4 w-full'>
          <img
            className='h-full w-full border-2 border-gray-100 rounded-lg'
            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d609be3b-97e9-4aa0-a393-87018020eacb-f10-1589992779.jpg'
            alt='img'
          />
        </div>
        <div className='grid grid-cols-3'>
          <p className=''>location:</p>
          <p className='text-center'>Rating</p>
          <p className='text-end text-green-700 text-xl'>Price: $5094059</p>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at totam
        porro, voluptatum aspernatur quis maiores, sit, vel doloribus blanditiis
        sed incidunt odio ad nobis perferendis obcaecati enim dolorum ducimus.
      </div>
    </div>
  )
}

export default ProductsGrid
