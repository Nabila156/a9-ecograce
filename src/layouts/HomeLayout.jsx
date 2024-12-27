import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Adventure from '../components/adventures/Adventure';
import DynamicTitle from '../components/DynamicTitle';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const HomeLayout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    };

    return (
        <div className='font-archivo min-h-screen flex flex-col'>
            <DynamicTitle></DynamicTitle>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='flex-grow'>
                <Banner></Banner>
                <Adventure></Adventure>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;