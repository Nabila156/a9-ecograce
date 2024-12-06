
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className=' bg-[#E5ECF2] py-12 md:px-12 lg:px-24'>

            <footer className="footer place-items-center">
                <aside>
                    <img className='rounded-full size-12 md:size-24' src="/assets/logo.webp" alt="logo" />
                    <h2 className='font-bold font-gummy text-4xl md:text-5xl text-green-800'>EcoGrace</h2>
                    <p className='text-xl text-green-800'>Explore. Protect. Inspire.</p>
                </aside>
                <nav>
                    <h6 className="footer-title text-slate-800 font-extrabold">Services</h6>
                    <a className="link link-hover font-medium text-slate-600">Eco-Tourism Packages</a>
                    <a className="link link-hover font-medium text-slate-600">Sustainable Accommodations</a>
                    <a className="link link-hover font-medium text-slate-600">Sustainable Activities and Workshops</a>
                    <a className="link link-hover font-medium text-slate-600">Eco-Adventure Travel Insurance</a>
                    <a className="link link-hover font-medium text-slate-600">Environmental Education</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-slate-800 font-extrabold">Company</h6>

                    <div>
                        <div className='flex flex-col'>
                            <a className="link link-hover font-medium text-slate-600">About Us</a>
                            <a className="link link-hover mt-1 font-medium text-slate-600">Contact</a>
                            <a className="link link-hover mt-1 font-medium text-slate-600">Social Links</a>
                        </div>
                        <div className='flex gap-4 mt-2'>
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

                    </div>

                </nav>
                <nav>
                    <h6 className="footer-title text-slate-800 font-extrabold">Legal</h6>
                    <a className="link link-hover font-medium text-slate-600">Terms of use</a>
                    <a className="link link-hover font-medium text-slate-600">Privacy policy</a>
                    <a className="link link-hover font-medium text-slate-600">Cookie policy</a>
                </nav>

            </footer>

            <div className="divider mt-10"></div>
            <p className='text-base text-center mt-4 text-gray-500'>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>

    );
};

export default Footer;