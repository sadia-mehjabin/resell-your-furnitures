import React, { useEffect, useState } from 'react';
import img from '../../../src/banner.jpg'
const Home = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
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
            {
                products?.map(product => <h1>{}</h1>
                    )
            }
        </div>
    );
};

export default Home;