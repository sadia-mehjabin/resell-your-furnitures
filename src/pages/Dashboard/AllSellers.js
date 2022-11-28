import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllSellers = () => {
        const { data: sellers = [], isLoading, refetch } = useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                const res = await fetch('https://resell-your-furniture-server-side.vercel.app/users');
                const data = await res.json()
                return data;
            }
        })

    if(isLoading){
        return <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }

    const handleDelete = (id) => {
        
        const agree = window.confirm('are you sure to delete?')

        if(agree){
            fetch(`https://resell-your-furniture-server-side.vercel.app/users/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('newAccessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                toast("deleted successfully")
                refetch()
                }
            })
        }
    };

    const handleVerify = email => {
        console.log(email)
        fetch(`https://resell-your-furniture-server-side.vercel.app/sellers/${email}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('newAccessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            
        })
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
                                <td>
                                    {
                                        user.verified ? <p className='text-primary font-bold'>Verified</p> :
                                        <button onClick={() => handleVerify(user.email)} className='btn btn-success btn-sm'>Verify</button>
                                    }
                                </td>
                                <td><button className='btn btn-error btn-sm' onClick={()=> handleDelete(user._id)}>Delete</button></td>
                                
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