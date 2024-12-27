
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DynamicTitle from '../components/DynamicTitle';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AuthLayout = () => {
    const {loading} = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div> 
    }
    return (
        <div className='font-archivo flex flex-col min-h-screen'>
            <DynamicTitle></DynamicTitle>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;