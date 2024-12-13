import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createNewUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        if(password.length < 6){
            setError({...error, name: "must be at least 6 character long"})
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                </div>

                {
                    error.name && <label className="label text-sm text-red-600"> {error.name} </label>
                }

                <div className="form-control mt-6">
                    <button className="btn text-white text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-200">Register</button>
                </div>
                <p className='text-center'>Do you already have an account? Please <Link to={'/auth/login'} className='font-bold text-blue-800'>Login</Link >.</p>
            </form>
        </div>
    );
};

export default Register;