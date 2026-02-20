import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About" },
    { link: "/services", title: "Services" },
    { link: "/contact", title: "Contact" },
];

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className='sticky top-0 z-50 bg-yellow-400/90 backdrop-blur-md px-8 py-4 flex items-center justify-between shadow-lg'>
            <div>
                <Link to="/" className="group flex items-center gap-2">
                    <div className="w-2 h-8 bg-red-600 rounded-full group-hover:scale-y-110 transition-transform" />
                    <h1 className='text-2xl text-red-700 uppercase font-black tracking-tighter leading-none'>
                        BridgeRoot <span className="text-red-900 block text-xs tracking-[0.3em]">Services</span>
                    </h1>
                </Link>
            </div>

            <div className="flex gap-2"> 
                {navLinks.map((item) => {
                    const isActive = pathname === item.link;
                    return (
                        <Link
                            key={item.title} 
                            to={item.link}   
                            className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center ${
                                isActive 
                                    ? 'text-white bg-red-700 shadow-md scale-105' 
                                    : 'text-red-900 hover:bg-red-700/10' 
                            }`}
                        >
                            {item.title}
                            {!isActive && (
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-700 rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;