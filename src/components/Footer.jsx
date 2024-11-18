import React from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="mt-20 footer footer-center bg-[#E5ECF2] text-primary-content p-10">
            <aside>
                <img className='rounded-full size-24' src="../../public/assets/logo.webp" alt="logo" />
                <p className="font-bold font-gummy text-5xl text-green-800">
                    EcoGrace
                </p>

                <p className='text-xl text-green-800'>Explore. Protect. Inspire.</p>
            </aside>
            <nav class="grid grid-flow-col gap-10 md:gap-16 text-blue-950 font-medium">
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Adventures</a>
                <a class="link link-hover">Blog</a>
                <a class="link link-hover">Contact</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-10 text-blue-950">
                    <a href="https://www.youtube.com" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a className='cursor-pointer text-2xl' href="https://www.x.com" target="_blank">
                        <FaSquareXTwitter />
                    </a>
                    <a className='cursor-pointer text-2xl' href="https://www.instagram.com" target="_blank">
                        <FaSquareInstagram />
                    </a>
                    <a href="https://www.facebook.com" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                    
                </div>
            </nav>
            <p className='text-base text-gray-500'>Copyright © {new Date().getFullYear()} - All right reserved</p>

        </footer>
    );
};

export default Footer;