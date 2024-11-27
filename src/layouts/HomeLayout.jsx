import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Adventure from '../components/adventures/Adventure';

const HomeLayout = () => {
    return (
        <div className='font-archivo'>
            <nav className='bg-[#E5ECF2] md:px-10 lg:px-32 py-10'>
                <Navbar></Navbar>
            </nav>
            <main>
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