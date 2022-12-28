import './mainContainer.css'
const MainContainer = ({ children }) => {
  return (
    <div className='outterDiv'>
      <div className='innerDiv'>{children}</div>
    </div>
  )
}

export default MainContainer
