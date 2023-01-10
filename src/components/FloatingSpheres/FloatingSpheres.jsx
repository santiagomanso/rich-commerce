const FloatingSpheres = () => {
  return (
    <div className='hidden lg:inline-block'>
      <div className='absolute top-[20%] left-0 w-[450px] h-[450px] bg-pink-600 dark:bg-indigo-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter pointer-events-none blur-xl opacity-20 dark:opacity-20  animate-blobLeft ' />
      <div className='absolute top-[2%] right-10 w-[400px] h-[400px] bg-sky-600 dark:bg-fuchsia-400 rounded-full mix-blend-multiply dark:mix-blend-normal filter pointer-events-none blur-xl opacity-20 dark:opacity-20  animate-blobRight ' />
      <div className='absolute bottom-[5%] right-[50%] translate-x-[50%] w-[450px] h-[450px] bg-amber-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter pointer-events-none blur-xl opacity-20 dark:opacity-20  animate-blobBottom ' />
    </div>
  )
}

export default FloatingSpheres
