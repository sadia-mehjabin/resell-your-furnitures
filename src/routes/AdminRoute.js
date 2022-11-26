import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const AdminRoute = ({children}) => {
    const {user, load} = useContext(AuthContext)
    console.log(user)
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    // const { data: usersRole = [], isLoading, refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/usersRole');
    //         const data = await res.json()
    //         return data;
    //     }
    // })

    const location = useLocation();

    // if(load || isLoading){
    //     return <div className="flex items-center justify-center ">
    //     <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    //     </div>
    // }

    // usersRole.map(rol => {
    //     if(rol.role === 'admin'){
    //         return children
    //     }
    // })
    // if(user && usersRole.map(rol => rol.role === 'admin')){
    //     return children
    // }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;

};

export default AdminRoute;