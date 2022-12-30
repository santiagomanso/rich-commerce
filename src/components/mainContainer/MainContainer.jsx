import './mainContainer.css'
const MainContainer = ({ children }) => {
  return (
    <div
      className='outterDiv bg-gradient-to-br
     from-gray-200 dark:from-slate-800
     via-gray-200  dark:via-stone-700
     to-slate-400  dark:to-slate-800'
    >
      <div className='innerDiv'>{children}</div>
    </div>
  )
}

export default MainContainer
