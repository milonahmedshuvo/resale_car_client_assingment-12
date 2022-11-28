import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import AddProduct from "../components/Dashbord/AddProduct/AddProduct";
import AllBuyers from "../components/Dashbord/AllBuyers/AllBuyers";
import AllSellers from "../components/Dashbord/AllSellers/AllSellers";
import Dashbord from "../components/Dashbord/Dashbord/Dashbord";
import MyBuyer from "../components/Dashbord/MyBuyer/MyBuyer";
import MyOrder from "../components/Dashbord/MyOrder/MyOrder";
import MyProduct from "../components/Dashbord/MyProduct/MyProduct";
import DashbordLayout from "../components/DashbordLayout/DashbordLayout";
import Login from "../components/Firepage/Login";
import Singup from "../components/Firepage/Singup";
import Allproduct from "../components/Home/Catagori/Allproduct";
import ProviteRoute from "../components/Home/Catagori/ProviteRoute";
import Home from "../components/Home/Home/Home";
import Mainlayout from "../Layout/Mainlayout";
import ErrorPage from "../Sheared/ErrorPage/ErrorPage";





export const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path:'/catagory/:id',
                element:<ProviteRoute><Allproduct></Allproduct></ProviteRoute>,
                loader:({params})=>{
                    return fetch(`https://react-assignment-server-12.vercel.app/catagoris/${params.id}`)
                }
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
    
    {
        path:'/dashbord',
        element:<ProviteRoute><DashbordLayout></DashbordLayout></ProviteRoute>,
        children:[
            {
                path:"/dashbord",
                element:<Dashbord></Dashbord>
            },
            {
                path:"/dashbord/myorder",
                element:<MyOrder></MyOrder>
            },
            {
                path:"/dashbord/allseller",
                element:<AllSellers></AllSellers>
            },
            {
                path:"/dashbord/mybuyer",
                element:<MyBuyer></MyBuyer>
            },
            {
                path:"/dashbord/myproducts",
                element:<MyProduct></MyProduct>
            },
            {
                path:"/dashbord/addproducts",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/dashbord/allbuyer",
                element:<AllBuyers></AllBuyers>
            }
        ]
    }
])




