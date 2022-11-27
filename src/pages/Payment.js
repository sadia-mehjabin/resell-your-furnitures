import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_pk);

const Payment = () => {
    const bookingData = useLoaderData()
    const navigation = useNavigation()

    if(navigation.state === 'loading'){
        return <div className="flex items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-bold m-5'>Payment For <span className='text-primary'>{bookingData.itemName}</span></h2>
            <p className=' text-center font-bold m-5'>Please Pay {bookingData.price} taka.</p>
            <div className='flex justify-center'>
            <div className='w-96 m-5 bg-pink-200 rounded-lg p-7'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    bookingData={bookingData}
                    />
                </Elements>
            </div>
            </div>
        </div>
    );
};

export default Payment;