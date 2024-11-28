import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className="card bg-blue-50 mx-auto my-10 w-full max-w-lg">
            <h1 className='text-center animate__animated animate__slideInDown font-extrabold text-4xl text-blue-500 p-10'>Login Now!</h1>
            <form className="card-body">
                <div className="form-control">
                    <label className="label animate__animated animate__slideInLeft">
                        <span className="label-text text-xl font-medium">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered animate__animated animate__slideInRight" required />
                </div>
                <div className="form-control">
                    <label className="label  animate__animated animate__slideInLeft">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered  animate__animated animate__slideInRight" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-base  animate__animated animate__slideInLeft">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6 animate__animated animate__slideInUp">
                    <button className="btn text-white text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-200">Login</button>
                </div>
                <p className='text-center animate__animated animate__slideInRight'>Don't Have An Account? <Link className='font-bold text-blue-800'>Register</Link ></p>
            </form>
        </div>

    );
};

export default Login;