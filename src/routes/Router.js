import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import DisplayProducts from "../pages/DisplayProducts";
import AddAProduct from "../pages/home/AddAProduct";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import MyProducts from "../pages/MyProducts";
import Register from "../pages/Register";


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
                path: '/myProduct',
                element: <MyProducts></MyProducts>
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
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <DashboardLayout></DashboardLayout>,
    //     errorElement: <DisplayError></DisplayError>,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <MyAppoinment></MyAppoinment>
    //         },
    //         {
    //             path: '/dashboard/allUsers',
    //             element: <AdminRoute><Users></Users></AdminRoute>
    //         },
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
    //     ]
    // }

])

export default router;