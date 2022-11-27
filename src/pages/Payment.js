import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const bookingData = useLoaderData()
    console.log(bookingData)
    return (
        <div>
            <h2 className='text-3xl text-center font-bold m-5'>Payment For <span className='text-primary'>{bookingData.itemName}</span></h2>
            <p className=' text-center font-bold m-5'>Please Pay {bookingData.price} taka.</p>
        </div> 
    );
};

export default Payment;