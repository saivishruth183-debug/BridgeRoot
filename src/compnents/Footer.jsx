import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* 1. Brand Column */}
        <div className="space-y-6">
          <Link to="/">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
              BridgeRoot <span className="text-yellow-400 block text-xs tracking-[0.3em]">Services</span>
            </h2>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Building robust digital foundations and bridging the gap between complexity and success since 2014.
          </p>
          <div className="flex gap-4">
            <Facebook size={20} className="hover:text-yellow-400 cursor-pointer transition-colors" />
            <Twitter size={20} className="hover:text-yellow-400 cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-yellow-400 cursor-pointer transition-colors" />
            <Linkedin size={20} className="hover:text-yellow-400 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* 3. Services (Mini List) */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Services</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Digital Transformation</li>
            <li>Strategic Consulting</li>
            <li>Cyber Security</li>
            <li>Custom Software</li>
          </ul>
        </div>

        {/* 4. Contact Info */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Reach Out</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-yellow-400" />
              hello@bridgeroot.com
            </li>
            <li className="flex items-center gap-3 text-gray-400 leading-snug">
              <MapPin size={16} className="text-yellow-400" />
              123 Business Way, Tech City,<br /> Silicon Valley, CA
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-gray-500">
        <p>© {currentYear} BridgeRoot Services. All Rights Reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;