import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import img from '../../../src/banner.jpg'
import AdvertiseSection from './AdvertiseSection';
import CategoryCard from './CategoryCard';
const Home = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://resell-your-furniture-server-side.vercel.app/products');
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <div className="flex items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }
    return (
        <div>
            <div className="hero min-h-screen rounded-3xl" style={{ backgroundImage: `url("https://i.ibb.co/pJQvX5w/banner.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Sell And Chill</h1>
                        <p className="mb-5 text-2xl font-semibold">Want to sell your old furnitures? Or want to buy? Our website will be the best marketplace for you.</p>
                    </div>
                </div>
            </div>

            <div className='m-5 bg-orange-50 rounded-3xl p-2'>
                <h2 className='text-5xl text-center font-bold m-5'>Category section</h2>
                <div>
                    <CategoryCard></CategoryCard>
                </div>
            </div>
            <AdvertiseSection
                products={products}
            ></AdvertiseSection>

            <div className='bg-green-200 w-3/4 mx-auto m-5 p-5 rounded-lg'>
                <h2 className='text-center text-5xl font-bold m-4'>Contact us</h2>
                <p className='text-center font-bold'>our office: 31/A mirpur 12 road, dhaka.
                    <br />
                    email: resellProducts@Gmail.com <br />
                    contact no: 7224356
                </p>
            </div>

        </div>
    );
};

export default Home;