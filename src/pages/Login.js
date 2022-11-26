import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import useAccessToken from '../hooks/useAccessToken';
// import useToken from '../hooks/useToken';


const Login = () => {
    const provider = new GoogleAuthProvider()
    const {userLogin, googleLogin} = useContext(AuthContext)
    // const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const { register, formState: {errors},  handleSubmit } = useForm();
    const [loginUserEmail, setLoginUserEmail] = useState("")
    const [loginError, setLoginError] = useState("")
    const from = location.state?.from?.pathname || '/' ;
    const [token] = useAccessToken(loginUserEmail)

    if(token){
        console.log(token)
        navigate(from, {replace:true})
    }
    const handleLogin = data => {
        setLoginError('')
        userLogin(data.email, data.password)
        .then(result => {
            const user = result.user;
            setLoginUserEmail(data.email)
            toast('successfully Loged in')
            setLoginUserEmail(data.email)
            
        })
        .catch(error => setLoginError(error.message))
    }

    const handleGoogleLogIn = () => {
        googleLogin(provider)
        .then(result => {
            const user = result.user;
            navigate(from, {replace:true})
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="hero">
            <div className="card w-full bg-pink-100 max-w-sm shadow-2xl m-5 p-6" >
            <h1 className="text-5xl m-5 font-bold text-center">Login now!</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
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
            <p className='m-3'>New to Resell your furnitures? <Link className='text-blue-400 font-semibold' to={'/register'}>register</Link></p>

            {
                loginError && <p className='text-red-500 font-semibold'>{loginError}</p>
            }
            <input className='btn bg-purple-500 w-full' value='login' type="submit" />
            
            </form>
            <button onClick={handleGoogleLogIn} className='btn btn-outline w-full my-3'>Log in With Google</button>
            </div>
        </div>
    );
};

export default Login;