import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DynamicTitle from "../DynamicTitle";
import Navbar from "../Navbar";

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="font-archivo">
            <DynamicTitle></DynamicTitle>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit} className="card-body card bg-blue-50 mx-auto my-10 w-full max-w-xs md:max-w-lg">
                <h1 className="text-center text-2xl font-bold md:text-4xl mb-5">Reset Password</h1>
                <div className="form-control">
                    <input
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} // for editing the email
                        placeholder="email"
                        className="input input-bordered" required />
                </div>
                <a
                href="https://mail.google.com" 
                target="_blank" 
                className="btn font-bold text-lg mt-5 bg-zinc-400">Reset Password</a>
            </form>
        </div>
    );
};

export default ForgotPassword;