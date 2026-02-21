import React from 'react';
import { ArrowRight, Zap, Shield, Star, CheckCircle, Code, BarChart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 1. HERO SECTION (Existing) */}
      <section className="relative bg-yellow-400 pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-700/10 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
              <span>Trusted by 100+ Businesses</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-red-700 uppercase leading-[0.9] tracking-tighter mb-8">
              Grow Your <br /> 
              <span className="text-red-900">Digital Roots</span>
            </h1>
            <p className="text-lg text-red-900/80 mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
              We provide the structural foundation your business needs to scale. From custom software to strategic consulting, we bridge the gap to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services" className="bg-red-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-800 transition-all shadow-lg shadow-red-700/30">
                Our Services <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/50 backdrop-blur-sm text-red-900 px-8 py-4 rounded-xl font-bold hover:bg-white/80 transition-all">
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="w-full aspect-square bg-red-700 rounded-[3rem] rotate-3 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-yellow-400 opacity-20">
                <h2 className="text-[15rem] font-black">BR</h2>
              </div>
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-4xl font-black uppercase leading-none">Modern<br/>Solutions</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Zap fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Uptime</p>
                  <p className="text-xl font-black text-gray-800">99.9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED FEATURES (Existing) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-100 text-red-700 rounded-xl flex items-center justify-center">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Secure by Design</h3>
            <p className="text-gray-600">We prioritize security at the root level of every project we undertake.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Fast Execution</h3>
            <p className="text-gray-600">Speed and efficiency are the bridges to beating your competition.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-gray-100 text-gray-800 rounded-xl flex items-center justify-center">
              <Star size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Premium Quality</h3>
            <p className="text-gray-600">Our code and strategies are built to last for generations.</p>
          </div>
        </div>
      </section>

      {/* --- NEW SECTIONS BELOW --- */}

      {/* 3. CORE SERVICES PREVIEW */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">What We Build</h2>
            <div className="h-2 w-24 bg-red-700 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border-b-8 border-red-700 shadow-sm hover:shadow-xl transition-shadow group">
              <Code className="text-red-700 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-black mb-4 uppercase">Software Development</h3>
              <p className="text-gray-600 mb-6">Custom web and mobile applications engineered for scalability and high performance.</p>
              <ul className="space-y-3">
                {['React & Next.js Experts', 'Cloud Native Systems', 'API Integration'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle size={16} className="text-green-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border-b-8 border-yellow-400 shadow-sm hover:shadow-xl transition-shadow group">
              <BarChart className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-black mb-4 uppercase">Digital Strategy</h3>
              <p className="text-gray-600 mb-6">We don't just build; we plan. Our consulting helps you find the most efficient route to ROI.</p>
              <ul className="space-y-3">
                {['Market Analysis', 'Growth Hacking', 'UI/UX Audits'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle size={16} className="text-green-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS / SOCIAL PROOF */}
      <section className="bg-red-900 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2 text-yellow-400">12k+</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Hours Coded</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2 text-yellow-400">100+</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Projects Delivered</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2 text-yellow-400">25</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Industry Awards</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black mb-2 text-yellow-400">98%</p>
            <p className="text-sm font-bold uppercase tracking-widest opacity-70">Client Retention</p>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 uppercase leading-tight">
            Ready to build your <span className="text-red-700 underline decoration-yellow-400">Legacy?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Stop dreaming about growth and start engineering it. Our team is ready to bridge your ideas into reality.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-yellow-400 text-red-900 px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-500 transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Start Your Project <ArrowRight />
          </Link>
        </div>
        {/* Decorative background shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50 rounded-full -z-0" />
      </section>
    </div>
  );
};

export default Home;