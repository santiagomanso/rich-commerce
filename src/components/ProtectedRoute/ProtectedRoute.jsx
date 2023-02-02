import { useContext } from 'react'
import { UserContext } from '../../context/AuthContext'
import RedirectMsg from '../../Pages/RedirectMsg/RedirectMsg'

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext)

  if (!user) {
    return <RedirectMsg />
  } else {
    return children
  }
}

export default ProtectedRoute
