import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
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
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE',
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
            <h2 className='text-5xl text-center font-bold m-5'>All users</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Users Image</th>
                        <th>Users Name</th>
                        <th>Email</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button className='btn btn-error btn-sm' onClick={()=> handleDelete(user._id)}>Delete</button></td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;