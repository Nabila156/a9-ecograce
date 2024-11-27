import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {

    const links = <>
        <NavLink to={'/'} className='text-lg font-bold text-green-600 px-4 lg:px-0 lg:ml-24'>Home</NavLink>
        <NavLink className='text-lg font-bold text-green-600 px-4 lg:px-0 lg:ml-12'>Eco Travel Tips</NavLink>
        <NavLink className='text-lg font-bold text-green-600 px-4 lg:px-0 lg:ml-12'>Campaigns</NavLink>
        <NavLink className='text-lg font-bold text-green-600 px-4 lg:px-0 lg:ml-12'>Sign up</NavLink>
        <NavLink className='text-lg font-bold text-green-600 px-4 lg:px-0 lg:ml-12'>Update</NavLink>
    </>

    return (
        <div className="navbar">
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
                    </ul>
                </div>
                <div className='flex gap-2 md:gap-4 items-center'>
                    <img className='size-12 rounded-full' src="/assets/logo.webp" alt="logo" />
                    <h2 className='font-gummy text-green-800 font-extrabold text-3xl md:text-4xl'>EcoGrace</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
              <NavLink className="btn bg-gradient-to-r from-blue-500 to-green-400 text-lg font-bold rounded-full flex items-center gap-2"><FaRegUser />Profile</NavLink>
            </div>
        </div>
    );
};

export default Navbar;