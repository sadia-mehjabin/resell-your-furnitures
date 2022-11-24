import React, { useState } from 'react';
import BookingModal from './BookingModal';

const ProductCard = ({product}) => {
    const [bookingProduct, setBookingProduct] = useState(null ) 
    const object = product?.data;  
    const {productName, OriginalPrice, resalePrice, location, photoURL, description, yearsOfUse, sellersName, selectCondition , mobileNumber} = object;
    
    return (
        <div className="card card-side bg-base-200 shadow-xl">
        <figure><img className='h-96' src={photoURL} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">product name: {productName}</h2>
            <p>Description: {description}</p>
            <p>Location: {location}</p>
            <p>Original price: ${OriginalPrice}</p>
            <p>resale price: ${resalePrice}</p>
            <p>yearsOfUse: {yearsOfUse}</p>
            <p>sellersName: {sellersName}</p>
            <p>Condition: {selectCondition}</p>
            <p>Mobile no: {mobileNumber}</p>
            <small>postTime: {product.hour}.{product.minutes} minutes</small>
            <div className="card-actions justify-end ">
            {/* <button className="btn">Book now</button> */}
            <label onClick={()=> setBookingProduct(product)} htmlFor="bookingModal" className="btn btn-primary">Book Now</label>
            </div>
        </div>
            {
                bookingProduct && <BookingModal
                product={bookingProduct}
                setBookingProduct={setBookingProduct}
                ></BookingModal>
            }
        </div> 
    );
};

export default ProductCard;