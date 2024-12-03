import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CampaignsLayout = () => {
    return (
        <div className='min-h-screen flex flex-col font-archivo'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow'>
                <h1>HEY! WELCOME TO OUR CAMPAIGNS.</h1>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CampaignsLayout;