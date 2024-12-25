import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { AuthContext } from '../provider/AuthProvider';
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const links = <>
        <NavLink to={'/'} className={({isActive}) => `text-lg font-bold px-4 lg:px-0 ${isActive ? 'text-blue-500' : 'text-green-600'}`}>Home</NavLink>
        <NavLink to={'/tips'} className={({isActive}) => `text-lg font-bold px-4 lg:px-0 lg:ml-12 ${isActive ? 'text-blue-500' : 'text-green-600'}`}>Eco Travel Tips</NavLink>
        <NavLink  to={'/campaigns'} className={({isActive}) => `text-lg font-bold px-4 lg:px-0 lg:ml-12 ${isActive ? 'text-blue-500' : 'text-green-600'}`}>Campaigns</NavLink>
       
    </>

    return (
        <div className="navbar bg-[#E5ECF2] md:px-10 lg:px-32 py-10">
            <div>
                {
                    user && user.email
                }
            </div>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                        <li className='block md:hidden'><NavLink to={'/auth/login'} className="btn mr-1 md:mr-10 bg-gradient-to-r from-blue-500 to-green-400 text-base md:text-lg font-bold rounded-xl flex items-center gap-2"><AiOutlineLogin className='md:size-6'/>Login</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex gap-2 md:gap-4 items-center'>
                    <img className='size-12 rounded-full' src="/assets/logo.webp" alt="logo" />
                    <h2 className='font-gummy text-green-800 font-extrabold text-4xl md:text-5xl'>EcoGrace</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email? <NavLink onClick={logOut} className="btn hidden md: mr-1 md:mr-10 bg-gradient-to-r from-blue-500 to-green-400 text-lg font-bold rounded-xl md:flex items-center gap-2"><IoMdLogOut className='size-6'/>Logout</NavLink>
                    : <NavLink to={'/auth/login'} className="btn hidden md: mr-1 md:mr-10 bg-gradient-to-r from-blue-500 to-green-400 text-lg font-bold rounded-xl md:flex items-center gap-2"><AiOutlineLogin className='size-6'/>Login</NavLink>
             
                }
               <NavLink to={'/my-profile'} className="border border-blue-500 p-2 rounded-full"><FaRegUser className='size-6 md:size-8' /></NavLink>
            </div>
        </div>
    );
};

export default Navbar;