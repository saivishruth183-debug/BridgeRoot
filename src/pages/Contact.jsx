import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! We will get back to you soon.");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="bg-yellow-400 py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-red-700 uppercase mb-4 tracking-tighter">
            Let's Talk
          </h1>
          <p className="text-lg text-red-900/70 max-w-2xl mx-auto font-bold uppercase tracking-widest">
            Your bridge to digital excellence starts here.
          </p>
        </div>
        {/* Decorative Background Text */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-black text-red-700/5 select-none pointer-events-none">
          CONTACT
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="py-24 px-6 -mt-12 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Contact Info (4 Columns) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-10 rounded-3xl shadow-xl border-b-8 border-red-700">
                <h3 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Reach Our Team</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-red-700 text-white p-4 rounded-2xl shadow-lg shadow-red-700/20">
                      <Mail size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">Email Support</p>
                      <p className="text-xl font-bold text-gray-800">hello@bridgeroot.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-yellow-400 text-red-900 p-4 rounded-2xl">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">Call Center</p>
                      <p className="text-xl font-bold text-gray-800">+1 (555) 000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-gray-900 text-white p-4 rounded-2xl">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">Headquarters</p>
                      <p className="text-xl font-bold text-gray-800 leading-tight">123 Business Way,<br/>Tech City, TC 54321</p>
                    </div>
                  </div>
                </div>

                <hr className="my-10 border-gray-100" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <Clock size={20} className="text-red-700 mb-2" />
                    <p className="text-xs font-black uppercase text-gray-400">Response Time</p>
                    <p className="font-bold text-gray-800 text-sm">&lt; 24 Hours</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <Globe size={20} className="text-red-700 mb-2" />
                    <p className="text-xs font-black uppercase text-gray-400">Availability</p>
                    <p className="font-bold text-gray-800 text-sm">Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form (7 Columns) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-gray-100 space-y-6">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight mb-2">Send a Message</h3>
                  <p className="text-gray-500 font-medium">Tell us about your project goals and we'll handle the heavy lifting.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-700 focus:bg-white outline-none transition-all font-bold"
                      placeholder="John Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-700 focus:bg-white outline-none transition-all font-bold"
                      placeholder="john@example.com"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows="5" 
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-red-700 focus:bg-white outline-none transition-all font-bold resize-none"
                    placeholder="Describe your vision..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-700/30 transition-all flex items-center justify-center gap-3 group text-lg uppercase tracking-widest"
                >
                  Initiate Connection
                  <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LOCATION / MAP SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border-8 border-gray-100 h-[450px] relative">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center">
                <MapPin size={48} className="text-red-700 mb-4 animate-bounce" />
                <p className="text-gray-500 font-black uppercase tracking-widest">Interactive Map Integration</p>
                <p className="text-gray-400 text-sm mt-2">Connecting BridgeRoot to the world</p>
            </div>
            {/* Overlay Card */}
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <h4 className="font-black text-gray-900 uppercase mb-2">The Office</h4>
                <p className="text-gray-600 text-sm font-medium">Stop by for a coffee and a brainstorm session at our Tech City hub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF / TRUST FOOTER */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
              <MessageSquare size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tight">Need Urgent Help?</h4>
              <p className="text-gray-400">Our emergency support bridge is open 24/7 for existing clients.</p>
            </div>
          </div>
          <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-black uppercase hover:bg-yellow-400 hover:text-red-900 transition-all tracking-widest">
            Client Login
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;