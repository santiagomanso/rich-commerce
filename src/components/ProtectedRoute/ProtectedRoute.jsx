import { Navigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth()

  if (!user) {
    return <Navigate to='/login' msg='You must login before' />
  } else {
    return children
  }
}

export default ProtectedRoute
