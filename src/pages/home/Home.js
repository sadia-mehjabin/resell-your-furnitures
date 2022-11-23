import React from 'react';
import img from '../../../src/banner.jpg'
const Home = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold m-5'>Welcome To Home Page</h2>
            <img className='w-full' src={img} alt="" />
        </div>
    );
};

export default Home;