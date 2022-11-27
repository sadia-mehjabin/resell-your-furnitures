import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutForm = ({ bookingData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [cardEroor, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const { price, userEmail, _id } = bookingData;

    useEffect(() => {

        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('newAccessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!elements || !stripe) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: userEmail
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }


        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email: userEmail,
                bookingId: _id
            }

            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('newAccessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        toast('congratulation! your payment is done.')
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='flex justify-center'>
                    <button className='btn btn-sm btn-primary mt-5' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
            <p className='font-bold text-red-600'>{cardEroor}</p>
            {
                transactionId && <p className='font-bold m-2 text-center text-green-600'>Your transaction id is:  {transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;