import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <nav className='bg-[#E5ECF2] md:px-10 lg:px-32 py-10'>
                <Navbar></Navbar>
            </nav>
            <main>
                
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;