import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-toastify';

const MyProducts = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/products1?email=${user?.email}`

    const { data: myproducts = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('newAccessToken')}`
                }
            });
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
    
    const handleDelete = (id) => {
        
        const agree = window.confirm('are you sure to delete?')

        if(agree){
            fetch(`http://localhost:5000/products/${id}`, {
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

    const handleChangeStatus = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div className="overflow-x-auto">
            <h2 className='text-5xl text-center font-bold m-5'>My Products</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Resale Price</th>
                        <th>Advertise</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myproducts.length && myproducts?.map((product, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.data.photoURL} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.data.productName}</td>
                                <td>{product.data.selectCategory}</td>
                                <td>{product.data.resalePrice}</td>
                                {
                                    product?.status ?
                                    <td>
                                        <button className='btn btn-sm btn-success' >Advertised</button> 
                                    </td> 
                                    : <td><button onClick={()=> handleChangeStatus(product._id)} className='btn btn-sm btn-success'>Advertise</button></td>
                                    
                                }
                                <td><button   className='btn btn-sm btn-error' onClick={() => handleDelete(product._id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

export default MyProducts;