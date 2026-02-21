import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/services", title: "Services" },
  { link: "/contact", title: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for a more "pro" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-[100] transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between ${
        scrolled 
          ? 'bg-yellow-400/95 backdrop-blur-md shadow-xl py-3' 
          : 'bg-yellow-400 py-5'
      }`}
    >
      {/* 1. LOGO */}
      <div className="flex-shrink-0">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-9 bg-red-700 rounded-sm transform group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-900 rounded-full animate-pulse" />
          </div>
          <h1 className='text-2xl text-red-700 uppercase font-black tracking-tighter leading-none'>
            BridgeRoot <span className="text-red-900 block text-[10px] tracking-[0.4em] font-bold">Services</span>
          </h1>
        </Link>
      </div>

      {/* 2. DESKTOP NAVIGATION */}
      <div className="hidden md:flex items-center bg-red-900/5 p-1.5 rounded-full border border-red-900/10"> 
        {navLinks.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link
              key={item.title} 
              to={item.link}   
              className={`relative px-6 py-2.5 text-xs uppercase tracking-widest font-black transition-all duration-300 rounded-full ${
                isActive 
                  ? 'text-white bg-red-700 shadow-lg shadow-red-700/40' 
                  : 'text-red-900 hover:text-red-700 hover:bg-white/50' 
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      {/* 3. CTA BUTTON (Desktop) */}
      <div className="hidden md:block">
        <Link 
          to="/contact" 
          className="group flex items-center gap-2 bg-red-900 text-yellow-400 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-800 transition-all active:scale-95"
        >
          Get Started
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* 4. MOBILE MENU BUTTON */}
      <button 
        className="md:hidden text-red-900 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* 5. MOBILE OVERLAY */}
      <div className={`fixed inset-0 bg-red-900 transition-transform duration-500 z-[-1] flex flex-col items-center justify-center gap-8 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      } md:hidden`}>
        {navLinks.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            onClick={() => setIsOpen(false)}
            className="text-white text-4xl font-black uppercase tracking-tighter hover:text-yellow-400 transition-colors"
          >
            {item.title}
          </Link>
        ))}
        <Link 
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-yellow-400 text-red-900 px-10 py-5 rounded-2xl font-black uppercase text-xl"
        >
          Free Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;