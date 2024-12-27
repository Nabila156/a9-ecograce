import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DynamicTitle from '../components/DynamicTitle';
import Campaigns from '../components/campaigns/campaigns';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const CampaignsLayout = () => {
    const { loading } = useContext(AuthContext);
    const campaigns = useLoaderData();

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div> 
    }

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