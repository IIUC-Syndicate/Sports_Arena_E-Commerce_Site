import React from 'react';
import ContainerX from './ContainerX';
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp, FaLinkedin, FaTelegram } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className='border-0 border-t-[1px] border-gray-300'>
            <ContainerX className="grid md:grid-cols-3 gap-5 justify-center md:justify-between w-full text-base-content py-10 px-4">
                <div className='grid text-center md:text-left sm:grid-cols-3 gap-5 col-span-2'>
                    <nav>
                        <h6 className="footer-title block">Services</h6>
                        <a className="link link-hover block">Branding</a>
                        <a className="link link-hover block">Design</a>
                        <a className="link link-hover block">Marketing</a>
                        <a className="link link-hover block">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title block">Company</h6>
                        <a className="link link-hover block">About us</a>
                        <a className="link link-hover block">Contact</a>
                        <a className="link link-hover block">Jobs</a>
                        <a className="link link-hover block">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title block">Legal</h6>
                        <a className="link link-hover block">Terms of use</a>
                        <a className="link link-hover block">Privacy policy</a>
                        <a className="link link-hover block">Cookie policy</a>
                    </nav>
                </div>
                <form className='text-center md:text-left min-w-[150px] mx-auto'>
                    <h1 className='text-3xl font-semibold text-accent'>Sports Arena</h1>
                    <fieldset>
                        <div>Connect with us</div>
                        <div className="join mt-4">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item focus:outline-0" />
                            <button className="btn btn-accent join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </ContainerX>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <ContainerX className={'flex flex-col md:flex-row justify-between w-full'}>
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Sports Arena</p>
                    </aside>
                    <aside className='flex gap-2'>
                        <FaFacebook className='text-2xl cursor-pointer transition-all duration-300 hover:text-accent'/>
                        <FaTwitter className='text-2xl cursor-pointer transition-all duration-300 hover:text-accent'/>
                        <FaLinkedin className='text-2xl cursor-pointer transition-all duration-300 hover:text-accent'/>
                        <FaTelegram className='text-2xl cursor-pointer transition-all duration-300 hover:text-accent'/>
                    </aside>
                </ContainerX>
            </footer>
        </div>
    );
};

export default Footer;