const MainContainer = ({ children }) => {
  return (
    <div className='h-screen mx-auto bg-white  lg:max-w-[1536px] px-2 py-5 font-primary'>
      {children}
    </div>
  )
}

export default MainContainer
