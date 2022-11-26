import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/myOrders?email=${user?.email}`

    const { data: myOrders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders', user?.email],
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
    refetch()
    return (
        <div className="overflow-x-auto">
            <h2 className='text-5xl text-center font-bold m-5'>My Orders</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Meeting Place</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.length && myOrders?.map((order, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td>{order.itemName}</td>
                                <td>{order.price}</td>
                                <td>{order.meetingPlace}</td>
                                <td><button className='btn btn-sm btn-secondary'>Pay</button></td>
                                {/* <td><button onClick={()=> handleChangeStatus(product._id)} className='btn btn-sm btn-success'>Advertise</button></td>
                                <td><button   className='btn btn-sm btn-error' onClick={() => handleDelete(product._id)}>Delete</button></td> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;