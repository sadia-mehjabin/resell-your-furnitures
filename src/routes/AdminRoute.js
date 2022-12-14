import React, { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, load} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if(load || isAdminLoading){
        return <button className="btn loading">loading</button>
    }

    if(user && isAdmin){
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;