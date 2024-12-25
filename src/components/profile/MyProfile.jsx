
import Navbar from '../Navbar';
import DynamicTitle from '../DynamicTitle';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    return (
        <div className='min-h-screen flex flex-col font-archivo'>
            <DynamicTitle></DynamicTitle>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow'>
                <Link to='/update-profile' className="btn">Update Profile</Link>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyProfile;