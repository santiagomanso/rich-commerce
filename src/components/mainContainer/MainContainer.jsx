import './mainContainer.css'
import FloatingSpheres from '../FloatingSpheres/FloatingSpheres'
const MainContainer = ({ children }) => {
  return (
    <div
      id='outterDiv'
      className='outterDiv 
     from-gray-200 dark:from-black/95
     via-gray-200  dark:via-slate-900
     to-slate-400  dark:to-black/95'
    >
      <FloatingSpheres />
      <div className='innerDiv'>{children}</div>
    </div>
  )
}

export default MainContainer
