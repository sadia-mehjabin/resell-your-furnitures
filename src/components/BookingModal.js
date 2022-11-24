import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({product}) => {
    const {user} = useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const handleModal = data => {
        console.log(data)
    }
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box bg-green-400 lg:w-96 sm:w-full">
                <form onSubmit={handleSubmit(handleModal)}>
                <label className="label">
                    <span className="label-text">Product name</span>
                </label>
                <input type="text" placeholder={product.data.productName} className="input input-bordered w-full mb-3" disabled {...register("productName")}/>
                <label className="label">
                    <span className="label-text">Product Price</span>
                </label>
                <input type="text" placeholder={product.data.resalePrice} className="input input-bordered w-full mb-3" disabled {...register("price")}/>
                <label className="label">
                    <span className="label-text">User name</span>
                </label>
                <input type="text" placeholder={user?.displayName} className="input input-bordered w-full mb-3" disabled {...register("userName")} />
                <label className="label">
                    <span className="label-text">User email</span>
                </label>
                <input type="text" placeholder={user?.email} className="input input-bordered w-full mb-3" disabled {...register("email")} />
                <input type="text" placeholder='write your phone number' className="input input-bordered w-full my-3" {...register("phone", {required: true})}/>
                <input type="text" placeholder='Where do you want to meet?' className="input input-bordered w-full my-3" {...register("meetingPlace", {required: true})}/>
                <div className="modal-action">
                <button>
                <label htmlFor="bookingModal" type="submit"className="btn w-full">Confirm booking</label>
                </button>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;