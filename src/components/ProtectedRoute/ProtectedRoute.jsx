import { UserAuth } from '../../context/AuthContext'
import RedirectMsg from '../RedirectMsg/RedirectMsg'

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth()

  if (!user) {
    return <RedirectMsg />
  } else {
    return children
  }
}

export default ProtectedRoute
