import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  //when having a container with fixed height and overflow the scroll must be done within that container ;)
  useEffect(() => {
    document.getElementById('outterDiv').scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
