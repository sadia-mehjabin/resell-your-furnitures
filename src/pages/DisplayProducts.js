import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const DisplayProducts = () => {
    const [products, setProducts] = useState()
    const dataLoader = useLoaderData()
    
    // useEffect(() => {
    //     fetch('http://localhost:5000/products/')
    //     .then(res => res.json())
    //     .then(data => {

    //         // const filteredData = data.filter(dat => dat.categoryName ===  products.categoryName)
    //         // const filteredData = data.filter(dat => console.log(dat.data.selectCategory))
    //         setProducts(data)
            
    //     })
    // }, [])
    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, [])
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