import React from 'react';
import { Target, Users, Award, CheckCircle, Rocket, ShieldCheck, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION (Existing) */}
      <section className="bg-yellow-400 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-red-700 uppercase mb-6 tracking-tighter">
            Bridging Ideas <br /> to Reality
          </h1>
          <p className="text-xl text-red-900/80 max-w-2xl mx-auto font-medium">
            At BridgeRoot Services, we don't just provide solutions; we build the foundations 
            that allow your business to grow and thrive in a digital-first world.
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION (Enhanced with image placeholder) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400/20 rounded-full -z-10 animate-pulse" />
            <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              Our <span className="text-red-700 underline decoration-yellow-400">Mission</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Founded on the principles of integrity and innovation, BridgeRoot Services 
              was created to solve complex technical challenges with simple, elegant 
              strategies. We believe every great achievement starts with a solid root system.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              {['Client-Centric Approach', 'Innovation-Driven Results', 'Uncompromising Quality'].map((text) => (
                <li key={text} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl text-gray-800 font-bold border-l-4 border-red-700">
                  <CheckCircle className="text-red-700" size={20} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-red-700 rounded-3xl rotate-3 group-hover:rotate-1 transition-transform" />
            <div className="relative bg-gray-200 rounded-3xl h-[400px] flex flex-col items-center justify-center border-2 border-white overflow-hidden shadow-2xl">
               <Users size={64} className="text-gray-400 mb-4" />
               <span className="text-gray-500 font-black uppercase tracking-widest text-sm text-center px-6">
                 [Insert High-Quality Team or Office Photography Here]
               </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS BAR (Existing) */}
      <section className="bg-red-700 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: <Target />, label: "Projects Done", value: "250+" },
            { icon: <Users />, label: "Happy Clients", value: "120+" },
            { icon: <Award />, label: "Awards Won", value: "15" },
            { icon: <CheckCircle />, label: "Years Exp", value: "10+" },
          ].map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="flex justify-center mb-4 text-yellow-400 scale-125">{stat.icon}</div>
              <div className="text-4xl font-black mb-1">{stat.value}</div>
              <div className="text-red-200 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEW SECTIONS --- */}

      {/* 4. CORE VALUES - BENTO GRID STYLE */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-gray-900 uppercase mb-4">The Values We Root For</h2>
              <p className="text-gray-600 font-medium">Culture is the bridge between a good company and a great partner. These are the pillars that support our work every day.</p>
            </div>
            <div className="h-1 w-24 bg-red-700 mb-2 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-red-700 transition-colors">
              <div className="w-14 h-14 bg-red-50 text-red-700 rounded-full flex items-center justify-center mb-6">
                <Rocket size={28} />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase">Radical Innovation</h3>
              <p className="text-gray-600 leading-relaxed">We don't settle for "good enough." We push the boundaries of what's possible to give you a competitive edge.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-red-700 transition-colors">
              <div className="w-14 h-14 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase">Extreme Integrity</h3>
              <p className="text-gray-600 leading-relaxed">Transparency is our default setting. We communicate clearly, honestly, and frequently throughout the process.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-red-700 transition-colors">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-black mb-3 uppercase">Empathy First</h3>
              <p className="text-gray-600 leading-relaxed">We listen before we build. Understanding your user's pain points is the first step in solving them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE TIMELINE / JOURNEY */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-center text-4xl font-black text-gray-900 uppercase mb-20">Our Evolution</h2>
           <div className="relative">
             {/* Central Line */}
             <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block" />
             
             <div className="space-y-24">
               {/* Step 1 */}
               <div className="relative flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-1 text-right hidden md:block">
                   <h4 className="text-2xl font-black text-red-700">2014</h4>
                   <p className="text-gray-600 font-bold">The Seed is Planted</p>
                 </div>
                 <div className="w-12 h-12 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center shrink-0">
                    <Zap size={20} className="text-red-700" />
                 </div>
                 <div className="flex-1 bg-gray-100 p-8 rounded-3xl">
                   <h4 className="text-xl font-black md:hidden text-red-700">2014</h4>
                   <p className="text-gray-600 italic">"BridgeRoot started in a small home office with a single vision: to bridge the gap between complex tech and human needs."</p>
                 </div>
               </div>

               {/* Step 2 */}
               <div className="relative flex flex-col md:flex-row-reverse items-center gap-8">
                 <div className="flex-1 text-left hidden md:block">
                   <h4 className="text-2xl font-black text-red-700">2019</h4>
                   <p className="text-gray-600 font-bold">Scaling the Bridge</p>
                 </div>
                 <div className="w-12 h-12 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center shrink-0">
                    <Users size={20} className="text-red-700" />
                 </div>
                 <div className="flex-1 bg-gray-100 p-8 rounded-3xl text-right">
                   <h4 className="text-xl font-black md:hidden text-red-700">2019</h4>
                   <p className="text-gray-600 italic">"Expanded to a team of 50+ specialists and moved to our flagship headquarters, serving clients across 3 continents."</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-red-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Let's build something <br/>that lasts.</h2>
            <button className="bg-yellow-400 text-red-900 px-10 py-4 rounded-full font-black uppercase hover:bg-white transition-colors">
              Join our Journey
            </button>
          </div>
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target size={200} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;