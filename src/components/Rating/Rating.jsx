const Rating = () => {
  return (
    <div className='group-hover:top-4 group-hover:left-2 duration-[1s] absolute top-3 left-2 md:top-10  md:left-7 bg-slate-700/80 px-2 py-2 rounded-2xl z-10 flex gap-2 text-sm'>
      <i className='text-amber-500 fa-solid fa-star'></i>
      <i className='text-amber-500 fa-solid fa-star'></i>
      <i className='text-amber-500 fa-solid fa-star'></i>
      <i className='fa-regular fa-star text-amber-500'></i>
      <i className='fa-regular fa-star text-amber-500'></i>
    </div>
  )
}

export default Rating
