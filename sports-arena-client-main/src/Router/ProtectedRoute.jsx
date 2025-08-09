
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';
import Spinner from '../components/shared/Spinner';

const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    //console.log(location);
    if(loading){
        return <Spinner></Spinner>
    }
    else if(user){
        return children;
    }
    else{
        return <Navigate to={'/login'}  state={{ from: location }}></Navigate>
    }
};

export default ProtectedRoute;