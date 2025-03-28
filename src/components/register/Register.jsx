import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { ImGoogle } from 'react-icons/im';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const { createNewUser, setUser, handleGoogleSignIn, updateUserProfile, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");


        // reset error & status
        setError('');

        const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordValidation.test(password)) {
            setError("The password must have an uppercase and a lowercase letter, and must be at least 6 characters long.")
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo });
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return (
        <div className="card bg-blue-50 mx-auto my-10 w-full max-w-xs md:max-w-lg">
            <h1 className='text-center animate__animated animate__flash font-extrabold text-3xl md:text-4xl text-blue-500 pt-6'>Register Now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Photo-URL</span>
                    </label>
                    <input name='photo' type="url" placeholder="photo-url" className="input input-bordered" />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn btn-sm absolute right-6 top-[52px]'>
                        {
                            showPassword ? <PiEyeLight /> : <PiEyeSlashLight />
                        }
                    </button>
                </div>


                <div className="form-control mt-6">
                    <button className="btn text-white text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-200">Register</button>
                </div>
                <p className='text-center mt-3 font-bold text-base'>OR</p>
                <Link to='/' onClick={handleGoogleSignIn} className='btn mt-3 text-white text-lg font-bold bg-gradient-to-r from-blue-200 to-blue-500'><ImGoogle />Login with Google</Link>
                <p className='text-center'>Do you already have an account? Please <Link to='/auth/login' className='font-bold text-blue-800'>Login</Link >.</p>

                {
                    error && <p className='text-red-500 text-center font-bold'>{error}</p>
                }

            </form>

        </div>
    );
};

export default Register;