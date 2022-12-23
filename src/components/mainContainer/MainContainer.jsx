const MainContainer = ({ children }) => {
  return (
    <div className='bg-gradient-to-b from-white via-white to-slate-400 h-screen overflow-auto main-container'>
      <div className='h-screen mx-auto   lg:max-w-[1536px] lg:px-2 py-5 font-primary'>
        {children}
      </div>
    </div>
  )
}

export default MainContainer
