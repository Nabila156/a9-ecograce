
import Navbar from '../Navbar';
import DynamicTitle from '../DynamicTitle';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyProfile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='min-h-screen flex flex-col font-archivo'>
            <DynamicTitle></DynamicTitle>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow text-center my-10'>
                {
                    user && (
                        <div className='text-center'>
                            <img className='h-40 mx-auto rounded mt-5' src={user.photoURL} alt="user" />
                            <h2 className='font-bold text-2xl md:text-4xl mt-4 text-gray-600'>Welcome {user.displayName}!</h2>
                            <p className='mt-4 text-gray-600 font-semibold text-lg'>Email: {user.email}</p>
                        </div>
                    )
                }
                <Link to='/update-profile' className="btn mt-5 font-bold text-lg text-gray-600 bg-gray-300">Update Profile</Link>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyProfile;