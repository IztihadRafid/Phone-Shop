import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourite from "../pages/Favourite/Favourite";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Phone from "../pages/Phone/Phone";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element:  <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('Phones.json')
            },
            {
                path: "/favourite",
                element: <Favourite></Favourite>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element: <Phone></Phone>,
                loader:()=>fetch('Phones.json')
            }
        ]
        
    }
]) 

export default myCreatedRoute;