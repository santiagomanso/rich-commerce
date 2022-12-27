import { Navigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth()

  if (!user) {
    return <Navigate to='/login' />
  } else {
    return children
  }
}

export default ProtectedRoute
