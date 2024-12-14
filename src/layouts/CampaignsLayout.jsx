import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DynamicTitle from '../components/DynamicTitle';

const CampaignsLayout = () => {
    return (
        <div className='min-h-screen flex flex-col font-archivo'>
            <DynamicTitle></DynamicTitle>
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