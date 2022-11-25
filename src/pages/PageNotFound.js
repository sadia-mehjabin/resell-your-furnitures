import React from 'react';
import img from '../routes/404-error-page-not-found-260nw-2013538025.webp'
const PageNotFound = () => {
    return (
        <div className=''>
            <h2 className='text-center text-5xl text-blue-400 font-bold m-5'>page not found</h2>
            <div className='flex justify-center'>
            <img  src={img} alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;