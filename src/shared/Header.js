import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Header = ({params}) => {
    const {user, logOut} = useContext(AuthContext)
    // const [categories, setCategories] = useState([])
    const data = useLoaderData()
    const categories = ['BedRoom', 'Kitchen', 'Dining']

    const handleLogOut = () => {
        logOut()
        .then(() => {
        })
        .catch(err => console.log(err))
      }

    return (
        <div className="navbar" style={{ background: 'linear-gradient(to right, rgba(250, 220, 47), rgba(118, 75, 162, 0.5))'}}>
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li>
                    <select className="select max-w-xs">
                    <option disabled selected>Categories</option>
                    <option><Link>BedRoom</Link></option>
                    <option><Link>Kitchen</Link></option>
                    <option><Link>Dinninng</Link></option>
                    </select>
                    </li>
                </ul>
                </div>
                <h2 className="btn btn-ghost normal-case text-xl"> Resell Your Furnitures</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='font-bold' to={'/'}>Home</Link></li>
                    <li><Link className='font-bold' to={'/blog'}>Blog</Link></li>
                    <li>
                    <div className="dropdown dropdown-right">
                    <label tabIndex={0} className=" font-bold">Categories</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            categories?.map(category => <Link to={`/displayProduct/${category}`}>{category}</Link>)
                        }
                    </ul>
                    </div>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/dashboard'}>DashBoard</Link>
                {
                    user? <button onClick={handleLogOut} className='btn mx-3'>Log out</button>
                    : <Link className='mx-4 btn bg-purple-700' to={'/login'}>Log In</Link>
                }
                
            </div>
        </div>
    );
};

export default Header;