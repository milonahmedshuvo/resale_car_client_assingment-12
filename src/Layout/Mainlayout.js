import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';
import Header from '../Sheared/Header/Header';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;