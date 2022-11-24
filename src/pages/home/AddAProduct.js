import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const AddAProduct = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const {register, handleSubmit, formState: {errors}} = useForm()
    const date = new Date();
    let hour = date.getHours()
    let minutes = date.getMinutes()
    const navigate = useNavigate()


    const handleForm = data => {
        const product = {
            data,
            hour,
            minutes,
            email
        }
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged === true){
                toast('product added successfully')
                navigate('/myProduct')
            }
            // setCreateUserEmail(email)
        })
    }
    
    return (
        <div className='bg-gray-100 w-96 mx-auto p-5'>
            <h2 className='text-5xl font-bold my-4'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleForm)}>
            <input type="text" placeholder="Product Name"  {...register("productName", {required: true})} className="input input-bordered w-full my-3 p-3" /> <br />
            <input type="text" placeholder="Original Price"  className="input input-bordered w-full my-3 p-3" {...register("OriginalPrice", {required: true})} /> <br />
            <input type="text" placeholder="Resale Price" className="input input-bordered w-full my-3 p-3" {...register("resalePrice", {required: true})} /> <br />
            <select className="select w-full my-3" {...register("selectCondition", {required: true})}>
                <option disabled selected>Condition</option>
                <option>excellent</option>
                <option>good</option>
                <option>fair</option>
            </select>
            <input type="text" placeholder="sellers name" className="input input-bordered w-full my-3 p-3" {...register("sellersName", {required: true})} /> <br />
            <input type="number" placeholder="Mobile number" className="input input-bordered w-full my-3 p-3" {...register("mobileNumber", {required: true})} /> <br />
            <input type="text" placeholder="Location" className="input input-bordered w-full my-3 p-3" {...register("location", {required: true})}/> <br />
            <input type="text" placeholder="Years of Use" className="input input-bordered w-full my-3 p-3" {...register("yearsOfUse", {required: true})}/> <br />
            <select className="select w-full my-3" {...register("selectCategory", {required: true})}>
                <option disabled selected>Category Name</option>
                <option>BedRoom</option>
                <option>Kitchen</option>
                <option>Dining</option>
            </select>
            <input type={'url'} placeholder="photoURL" className="input input-bordered w-full my-3 p-3" {...register("photoURL", {required: true})}/> <br />
            <textarea className="textarea input-bordered w-full my-3 p-3" placeholder="Description" {...register("description", {required: true})}></textarea> <br />
            <input type="submit" className='btn w-full' value="Add Product" />
            </form>
        </div>
    );
};

export default AddAProduct;