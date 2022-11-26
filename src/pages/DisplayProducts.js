import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const DisplayProducts = () => {
    // const [products, setProducts] = useState()
    const dataLoader = useLoaderData()
    
    return (
        <div className='grid lg:grid-cols-2 gap-6'>
            {
                dataLoader?.map(product => <ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
            
        </div>
    );
};

export default DisplayProducts;