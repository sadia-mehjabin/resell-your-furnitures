import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';
import BookingModal from './BookingModal';

const ProductCard = ({product}) => {
    const [bookingProduct, setBookingProduct] = useState(null) 
      
    const {productName, OriginalPrice, resalePrice, location,  description, yearsOfUse, sellersName, selectCondition , mobileNumber, paid} = product.data;
    const {user} = useContext(AuthContext)

    const handleReportItem = () => {
        const reportedItems = {
            image:product.data.photoURL,
            itemName: product.data.productName,
            userEmail: user.email,
        }
    
        fetch('http://localhost:5000/reportedItems',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportedItems)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                toast('reported successfully')
            }
        })
    }

    return (
        <div>
            {
                product.paid || <div className="card card-side bg-base-200 shadow-xl">
                <figure><img className='h-96' src={product?.data?.photoURL} alt="Movie"/></figure>
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
                    <label onClick={()=> setBookingProduct(product)} htmlFor="bookingModal" className="btn btn-primary w-full">Book Now</label>
                    <button className='btn btn primary w-full' onClick={handleReportItem}>Report to admin</button>
                    </div>
                </div>
                    {
                        bookingProduct && <BookingModal
                        product={bookingProduct}
                        setBookingProduct={setBookingProduct}
                        ></BookingModal>
                    }
                    
                </div> 
            }
        </div>
    );
};

export default ProductCard;