import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const HomeLayout = () => {
    return (
        <div className='font-archivo'>
            <nav className='bg-[#E5ECF2] md:px-10 lg:px-32 py-10'>
                <Navbar></Navbar>
            </nav>
            <main>
                <Banner></Banner>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;