import React from 'react';
import img from '../../../src/banner.jpg'
const Home = () => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => console.log(data))
    return (
        <div>
            <h2 className='text-5xl font-bold m-5'>Welcome To Home Page</h2>
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default Home;