import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
        const { data: sellers = [], isLoading, refetch } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                const res = await fetch('http://localhost:5000/users');
                const data = await res.json()
                console.log(data)
                return data;
            }
        })

    if(isLoading){
        return <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }
    return (
        <div>
            <div className="overflow-x-auto">
            <h2 className='text-5xl text-center font-bold m-5'>All Sellers</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Users Name</th>
                        <th>Email</th>
                        <th>Verify</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((user) =>{
                            if(user.role === 'Seller'){
                                return <>
                                <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className='btn btn-success btn-sm'>Verify</button></td>
                                <td><button className='btn btn-error btn-sm'>Delete</button></td>
                                
                            </tr> 
                                </>
                            }
                        })
                            
                        
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllSellers;