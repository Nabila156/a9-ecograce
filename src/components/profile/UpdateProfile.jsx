
import { useNavigate } from "react-router-dom";
import DynamicTitle from "../DynamicTitle";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { updateUserProfile, loading, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                toast.success("Profile updated!");
            })
            .catch((error) => {
                setError("Error", error);
            })
            .finally(() => {
                    setLoading(false);
                });

        navigate('/my-profile');
    }
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
            <main className='flex-grow card bg-blue-50 mx-auto my-10 w-full max-w-xs md:max-w-lg'>
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-center animate__animated animate__flash font-extrabold text-3xl md:text-4xl text-blue-500 pt-3">Update Your Profile</h1>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Photo-URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="photo-url" className="input input-bordered" required/>
                    </div>
                    <button className='btn mt-3 text-white text-lg font-bold bg-gradient-to-r from-blue-200 to-blue-500'>Update</button>
                </form>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateProfile;