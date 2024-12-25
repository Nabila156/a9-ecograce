import { Link } from "react-router-dom";
import DynamicTitle from "../DynamicTitle";
import Footer from "../Footer";
import Navbar from "../Navbar";

const UpdateProfile = () => {
    return (
        <div className='min-h-screen flex flex-col font-archivo'>
            <DynamicTitle></DynamicTitle>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-grow card bg-blue-50 mx-auto my-10 w-full max-w-xs md:max-w-lg'>
                    <form className="card-body">
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
                            <input type="url" name='photo' placeholder="photo-url" className="input input-bordered" required />
                        </div>
                        <Link className='btn mt-3 text-white text-lg font-bold bg-gradient-to-r from-blue-200 to-blue-500'>Update</Link>
                    </form>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateProfile;