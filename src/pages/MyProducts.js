import React, { useEffect, useState } from 'react';

const MyProducts = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
            fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [])
    return (
        <div>
            <h2>my products</h2>
        </div>
    );
};

export default MyProducts;