import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const currentUser = useAuth()

    if (!currentUser.currentUser) {
      return <Navigate to="/signin" replace />;
    }
  
    return children;
  };

export default ProtectedRoute