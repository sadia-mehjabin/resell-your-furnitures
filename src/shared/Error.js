import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h2 className='text-5xl text-red-600 font-bold'>Something is not right. Please check it out.</h2>
            <h2 className='text-5xl text-red-600 font-bold'>{error.statusText || error.message}</h2>
        </div>
    );
};

export default Error;