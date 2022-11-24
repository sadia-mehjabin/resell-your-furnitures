import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const DisplayProducts = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-2 gap-6'>
            {
                products?.map(product => <ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default DisplayProducts;