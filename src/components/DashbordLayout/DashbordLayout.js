import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hook/UseAdmin/useAdmin';
import Header from '../../Sheared/Header/Header';


const DashbordLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    
    const buyerNavbar = <>
        <li><Link to='/dashbord/myorder' className='text-violet-500 font-serif font-medium '>My Orders</Link></li>
    </>

    const sellarNavbar = <>
        <li><Link to='/dashbord/addproducts' className='text-violet-500 font-serif font-medium '>Add Product</Link></li>
        <li><Link to='/dashbord/myproducts' className='text-violet-500 font-serif font-medium '>My Product</Link></li>
        <li><Link to='/dashbord/mybuyer' className='text-violet-500 font-serif font-medium '>My Buyer</Link></li>
    </>

    const adminNavber = <>
        <li><Link to='/dashbord/allseller' className='text-violet-500 font-serif font-medium '>All Sellers</Link></li>
        <li><Link to='/dashbord/allbuyer' className='text-violet-500 font-serif font-medium '>All Buyers</Link></li>
    </>

    return (
        <div>

            <Header></Header>

            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        {
                            isAdmin === 'Seller' && sellarNavbar

                        }

                        {
                            isAdmin === 'Admin' && adminNavber
                        }


                        {
                            isAdmin === 'Buyer' && buyerNavbar
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;     

