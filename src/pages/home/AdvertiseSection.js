import React from 'react';
import ProductCard from '../../components/ProductCard';

const AdvertiseSection = ({products}) => {
    return (
        <div className='m-3 bg-slate-100 rounded-3xl p-3'>
            <h2 className='text-5xl text-center font-bold m-7'>Advertise Section</h2>
            <div className='grid lg:grid-cols-2 gap-7'>
            {
                products.map(product => <ProductCard 
                    product={product}
                    ></ProductCard>)
            }
            </div>
        </div>
    );
};

export default AdvertiseSection;