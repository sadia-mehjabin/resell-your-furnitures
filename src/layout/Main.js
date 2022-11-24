import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Main = ({params}) => {
    const data = useLoaderData()
    return (
        <div>
            <Header
            params={params}
            ></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;