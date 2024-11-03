import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-260px)] w-10/12 mx-auto py-20'>
                {/* dynamic */}
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;