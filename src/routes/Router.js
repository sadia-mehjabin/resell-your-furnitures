import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import AllUsers from "../pages/Dashboard/AllUsers";
import DisplayProducts from "../pages/DisplayProducts";
import AddAProduct from "../pages/home/AddAProduct";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import MyProducts from "../pages/MyProducts";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // loader:  ({params}) => fetch(`http://localhost:5000/products/${params.id}`) ,
        // errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addAProduct',
                element: <AddAProduct></AddAProduct>
            },
            // {
            //     path: '/displayProduct',
            //     element: <DisplayProducts></DisplayProducts>
            // },
            {
                path: '/displayProduct/:id',
                element: <DisplayProducts></DisplayProducts>,
                loader: ({params}) => fetch(`http://localhost:5000/products2/${params.id}`)
            },
            {
                path: '/*',
                element: <PageNotFound></PageNotFound>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
    //         {
    //             path: '/dashboard/doctors',
    //             element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/manageDoctors',
    //             element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/payment/:id',
    //             element: <AdminRoute><Payment></Payment>
    //             </AdminRoute>,
    //             loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
    //         },
         ]
    }

])

export default router;