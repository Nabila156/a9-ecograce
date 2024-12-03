import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const {user} = useContext(AuthContext);

    return (

        <div className="card bg-blue-50 mx-auto my-10 w-full max-w-xs md:max-w-lg">
            <h1 className='text-center animate__animated animate__flash font-extrabold text-3xl md:text-4xl text-blue-500 pt-6'>Login Now!</h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-200">Login</button>
                </div>
                <p className='text-center'>Don't you have an account? Please  <Link to={'/auth/register'} className='font-bold text-blue-800'>Register</Link >.</p>
            </form>
        </div>

    );
};

export default Login;