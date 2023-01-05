const FloatingSpheres = () => {
  return (
    <>
      <div className='absolute top-[20%] left-0 w-[400px] h-[400px] bg-pink-600 rounded-full mix-blend-multiply filter  animate-blobLeft blur-3xl opacity-30' />
      <div className='absolute top-[2%] right-10 w-[400px] h-[400px] bg-sky-600 rounded-full mix-blend-multiply filter  animate-blobRight blur-3xl opacity-30' />
      <div className='absolute bottom-[5%] right-[50%] translate-x-[50%] w-[400px] h-[400px] bg-amber-500 rounded-full mix-blend-multiply filter  animate-blobBottom blur-3xl opacity-30' />
    </>
  )
}

export default FloatingSpheres
