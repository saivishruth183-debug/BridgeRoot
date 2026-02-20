import React from 'react';
import { 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Database, 
  Smartphone 
} from 'lucide-react';

const services = [
  {
    title: "Digital Transformation",
    desc: "We bridge the gap between legacy systems and modern cloud solutions to scale your business.",
    icon: <Globe size={32} />,
  },
  {
    title: "Strategic Consulting",
    desc: "Expert advice to root your business in sustainable growth and market-leading strategies.",
    icon: <BarChart3 size={32} />,
  },
  {
    title: "Cyber Security",
    desc: "Advanced protection protocols to ensure your data and infrastructure remain impenetrable.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Custom Software",
    desc: "Tailor-made applications built from the ground up to solve your specific operational needs.",
    icon: <Database size={32} />,
  },
  {
    title: "Mobile Solutions",
    desc: "High-performance iOS and Android applications that keep your users connected on the go.",
    icon: <Smartphone size={32} />,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Reliable, lightning-fast hosting and server management for maximum uptime.",
    icon: <Zap size={32} />,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-yellow-400 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-black text-red-700 uppercase mb-4 tracking-tighter">
            Our Services
          </h1>
          <p className="text-lg text-red-900/70 max-w-2xl mx-auto font-bold uppercase tracking-widest">
            Expert solutions rooted in excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center text-red-600 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center bg-red-700 p-12 rounded-[3rem] shadow-xl shadow-red-700/20">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start your next project?</h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-black py-4 px-10 rounded-full transition-transform hover:scale-105 uppercase tracking-wide">
            Get a Free Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;