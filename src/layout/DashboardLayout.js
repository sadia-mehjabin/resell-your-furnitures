import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useIsSeller from '../hooks/useisSeller';
import Header from '../shared/Header';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useIsSeller(user.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 bg-base-100 text-base-content">
                        <li><Link>My orders</Link></li>
                        {
                            isSeller && <>
                                <li><Link>Add a product</Link></li>
                                <li><Link>My products</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to={'/dashboard/allUsers'}>All users</Link></li>
                                <li><Link>All sellers</Link></li>
                                <li><Link>Reported items</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;