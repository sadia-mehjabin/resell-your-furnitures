import React, { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useIsSeller from '../hooks/useisSeller';

const SellerRoute = ({children}) => {
    const {user, load} = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useIsSeller(user?.email)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = '/';

    if(load || isSellerLoading || isAdminLoading){
        return <button className="btn loading">loading</button>
    }

    if(user){
        if(isSeller || isAdmin){
            return children;
        }    
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default SellerRoute;