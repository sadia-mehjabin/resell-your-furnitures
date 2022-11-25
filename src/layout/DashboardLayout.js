import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../shared/Header';

const DashboardLayout = () => {
    const { data: usersRole = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/usersRole');
            const data = await res.json()
            return data;
        }
    })

    // const role = usersRole.map(rol => console.log(rol.role))

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
                            usersRole.map(rol => {
                                if (rol.role === 'seller') {
                                    return <>
                                        <li><Link>Add a product</Link></li>
                                        <li><Link>My products</Link></li>
                                        <li><Link>My buyers</Link></li>
                                    </>
                                }
                            })
                        }
                        <li><Link>All users</Link></li>
                        <li><Link>All buyers</Link></li>
                        <li><Link>Reported items</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;