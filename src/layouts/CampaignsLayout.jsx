import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DynamicTitle from '../components/DynamicTitle';
import Campaigns from '../components/campaigns/campaigns';
import { useLoaderData } from 'react-router-dom';

const CampaignsLayout = () => {

    const campaigns = useLoaderData();

    return (
        <div className='min-h-screen flex flex-col font-archivo'>
            <DynamicTitle></DynamicTitle>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow'>
                <Campaigns campaigns={campaigns}></Campaigns>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default CampaignsLayout;