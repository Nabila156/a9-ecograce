import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

const Login = () => {

    const {setUser, userLogin} = useContext(AuthContext);
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef(null);
    
    const handleForgetPassword = ()=>{
        const email = emailRef.current?.value;
        navigate("/forgot-password", {state: {email}});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        userLogin(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user); 
          navigate(location?.state ? location.state : "/")
        })
        .catch((err) => {
            setError({...error, login: err.code});
        });
        
    };


    return (

        <div className="card bg-blue-50 mx-auto my-10 w-full max-w-xs md:max-w-lg">
            <h1 className='text-center animate__animated animate__flash font-extrabold text-3xl md:text-4xl text-blue-500 pt-6'>Login Now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Email</span>
                    </label>
                    <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                    <button type='button' onClick={()=> setShowPassword(!showPassword)} className='btn btn-sm absolute right-6 top-[52px]'>
                        {
                            showPassword ? <PiEyeSlashLight /> : <PiEyeLight />
                        }
                    </button>

                    {
                        error.login && <label className="label text-sm text-red-600"> {error.login} </label>
                    }

                    <label onClick={handleForgetPassword} className="label">
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