import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const {createUser, updatedUser} = useContext(AuthContext)
    const { register, formState: {errors},  handleSubmit } = useForm();
    const [registerError, setRegisterError] = useState('')

    const handleregister = data => {
        setRegisterError('')
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            const userInfo = {
                displayName: data.name
            }
            updatedUser(userInfo)
            .then(()=> {
                saveUser(data.name, data.email, data.role) 
            })
            .catch(error => console.log(error))
            // setLoginUserEmail(data.email)
        })
        .catch(error => setRegisterError(error))
    }

    const saveUser = (name, email, role) => {
        const user = {name, email, role};
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged === true){
                toast('user added successfully')
            }
            // setCreateUserEmail(email)
        })
    }
    return (
        <div className="hero">
            <div className="card w-full bg-blue-100 max-w-sm shadow-2xl m-5 p-6" >
            <h1 className="text-5xl m-5 font-bold text-center">Register!</h1>
            <form onSubmit={handleSubmit(handleregister)}>
            <label className="label">
                <span className="label-text">Full Name</span>
            </label>
            <input className='input input-bordered w-full' 
            {...register("name")
            } /> 
            <label className="label">
                <span className="label-text">Select</span>
            </label>
            {/* <input className='input input-bordered w-full' 
            {...register("name") 
            } />  */}
            <select className="select w-full " {...register("role") 
            }>
                <option>User</option>
                <option>Seller</option>
            </select>
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input className='input input-bordered w-full' 
            {...register("email", {required: "email is required"})
            } /> 
            {
                errors.email && <p className='text-red-500 font-semibold' role="alert">{errors.email?.message}</p>
            }
             <br />
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input className='input input-bordered w-full' {...register("password", {
                required: "password is required"
            }) } /> <br />
            {
                errors.password && <p className='text-red-500 font-semibold' role="alert">{errors.password?.message}</p>
            }
            <p className='m-3'>Already have an account?<Link className='text-blue-400 font-semibold' to={'/login'}>Log In</Link></p>
            <input className='btn btn-accent w-full my-3' value='Register' type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Register;