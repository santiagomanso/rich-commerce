import './mainContainer.css'
const MainContainer = ({ children }) => {
  return (
    <div
      className='outterDiv 
     from-gray-200 dark:from-black/95
     via-gray-200  dark:via-slate-900
     to-slate-400  dark:to-black/95'
    >
      <div className='innerDiv'>{children}</div>
    </div>
  )
}

export default MainContainer
