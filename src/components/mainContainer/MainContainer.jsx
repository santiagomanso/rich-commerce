const MainContainer = ({ children }) => {
  return (
    <div className='bg-white h-screen overflow-auto main-container'>
      <div className='h-screen mx-auto   lg:max-w-[1536px] px-2 py-5 font-primary'>
        {children}
      </div>
    </div>
  )
}

export default MainContainer
