import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const ReportedItems = () => {
    const url = 'https://resell-your-furniture-server-side.vercel.app/reportedItems'

        const { data: reportedItems = [], isLoading, refetch } = useQuery({
            queryKey: ['reportedItems'],
            queryFn: async () => {
                const res = await fetch(url);
                const data = await res.json()
                return data;
            }
        })
        refetch()
    
        if(isLoading){
            return <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        }

        const handleDelete = (id) => {
        
            const agree = window.confirm('are you sure to delete?')
    
            if(agree){
                fetch(`https://resell-your-furniture-server-side.vercel.app/reportedItems/${id}`, {
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
    
    return (
        <div className="overflow-x-auto">
            <h2 className='text-5xl text-center font-bold m-5'>Reported Items</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Image</th>
                        <th>Products Name</th>
                        <th>Email</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportedItems.map((item, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.itemName}</td>
                                <td>{item.userEmail}</td>
                                <td><button className='btn btn-error btn-sm' onClick={()=> handleDelete(item._id)}>Delete</button></td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportedItems;