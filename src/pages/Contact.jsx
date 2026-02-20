import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Optional: Install lucide-react or use emojis

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thanks for reaching out! We will get back to you soon.");
  };

  return (
    <section className="bg-gray-50 py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-red-700 uppercase tracking-tight">Get In Touch</h2>
          <div className="h-1.5 w-20 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto">
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-lg text-red-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email us at</p>
                    <p className="text-lg font-bold text-gray-800">hello@bridgeroot.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg text-yellow-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call us at</p>
                    <p className="text-lg font-bold text-gray-800">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Visit us</p>
                    <p className="text-lg font-bold text-gray-800">123 Business Way, Tech City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-red-500/10 focus:border-red-600 outline-none transition-all"
                placeholder="John Doe"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-red-500/10 focus:border-red-600 outline-none transition-all"
                placeholder="john@example.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-4 focus:ring-red-500/10 focus:border-red-600 outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-700/30 transition-all flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;