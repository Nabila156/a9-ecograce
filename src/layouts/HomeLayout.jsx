import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Adventure from '../components/adventures/Adventure';


const HomeLayout = () => {
    return (
        <div className='font-archivo min-h-screen flex flex-col'>
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