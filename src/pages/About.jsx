import React from 'react';
import { Target, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="bg-yellow-400 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-black text-red-700 uppercase mb-6 tracking-tighter">
            Bridging Ideas <br /> to Reality
          </h1>
          <p className="text-xl text-red-900/80 max-w-2xl mx-auto font-medium">
            At BridgeRoot Services, we don't just provide solutions; we build the foundations 
            that allow your business to grow and thrive in a digital-first world.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision - Two Column */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-yellow-100 rounded-full -z-10 blur-3xl" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded on the principles of integrity and innovation, BridgeRoot Services 
              was created to solve complex technical challenges with simple, elegant 
              strategies. We believe every great achievement starts with a solid root system.
            </p>
            <ul className="space-y-3">
              {['Client-Centric Approach', 'Innovation-Driven Results', 'Uncompromising Quality'].map((text) => (
                <li key={text} className="flex items-center gap-3 text-gray-800 font-semibold">
                  <CheckCircle className="text-red-600" size={20} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
             {/* Replace this div with an <img /> tag if you have an office photo */}
             <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">Brand Image / Office Photo</span>
          </div>
        </div>
      </section>

      {/* 3. Stats / Values Grid */}
      <section className="bg-red-700 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Target />, label: "Projects Done", value: "250+" },
            { icon: <Users />, label: "Happy Clients", value: "120+" },
            { icon: <Award />, label: "Awards Won", value: "15" },
            { icon: <CheckCircle />, label: "Years Exp", value: "10+" },
          ].map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="flex justify-center mb-4 text-yellow-400">{stat.icon}</div>
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-red-200 text-sm font-bold uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;