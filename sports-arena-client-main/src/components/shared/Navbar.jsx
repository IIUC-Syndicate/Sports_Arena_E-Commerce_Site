import { Menu } from 'lucide-react';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeController from './ThemeController';
import useAuth from '../../customHooks/useAuth';
import { Tooltip } from 'react-tooltip';
import './Navbar.css';
const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const navItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-equipment'}>All Sports Equipment</NavLink></li>
        <li><NavLink to={'/add-equipment'}>Add Equipment</NavLink></li>
        <li><NavLink to={'/my-equipment'}>My Equipment</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-2 md:px-4 md:rounded-3xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-gray-200 p-2 mr-2">
                        <Menu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'} className="text-xl text-accent uppercase font-semibold">Sports Arena</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <ThemeController />
                {
                    user ?
                        <div className='flex gap-2'>
                            <button className='btn btn-accent' onClick={signOutUser}>Logout</button>

                            <div className="avatar cursor-pointer" id="my-anchor-element">
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </div>
                            <Tooltip anchorSelect="#my-anchor-element" content={user.displayName} />
                        </div>
                        :
                        <div className='space-x-1.5'>
                            <Link to={'/login'} className="btn btn-accent">Login</Link>
                            <Link to={'/register'} className="btn btn-accent">Register</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;