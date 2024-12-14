import { useLocation } from "react-router-dom";
import DynamicTitle from "./DynamicTitle";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const ForgotPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    useEffect(()=>{
        if (location.state?.email){
            setEmail(location.state.email);
        }
    },[location.state]);

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div className="font-archivo">
            <DynamicTitle></DynamicTitle>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit} className="card-body card bg-blue-50 mx-auto my-10 w-full max-w-xs md:max-w-lg">
                <h1 className="text-center text-2xl font-bold md:text-4xl mb-5">Reset Password</h1>
                <div className="form-control">
                    <input type="email" value={email} placeholder="email" className="input input-bordered" required />
                </div>
                <button className="btn font-bold text-lg mt-5 bg-zinc-400">Reset Password</button>
             </form>
        </div>
    );
};

export default ForgotPassword;