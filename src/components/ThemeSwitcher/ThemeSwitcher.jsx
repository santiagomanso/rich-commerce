const ThemeSwitcher = () => {
  return (
    <div className='flex items-center text-2xl border-b-2 border-transparent gap-x-5'>
      <i
        onClick={() => {
          document.documentElement.classList.remove('dark')
        }}
        className='fa-solid fa-sun cursor-pointer'
      ></i>
      <i
        onClick={() => {
          document.documentElement.classList.add('dark')
        }}
        className='fa-solid fa-moon cursor-pointer'
      ></i>
    </div>
  )
}

export default ThemeSwitcher
