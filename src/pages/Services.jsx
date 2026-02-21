import React from 'react';
import { 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Database, 
  Smartphone,
  Search,
  PenTool,
  Code2,
  Rocket,
  ChevronDown
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

const workflow = [
  { step: "01", title: "Discovery", desc: "We dig deep into your current 'roots' to find inefficiencies.", icon: <Search /> },
  { step: "02", title: "Architecture", desc: "We design the structural bridge for your new digital solution.", icon: <PenTool /> },
  { step: "03", title: "Development", desc: "Our engineers build with precision and premium quality code.", icon: <Code2 /> },
  { step: "04", title: "Deployment", desc: "We launch and provide the foundation for ongoing growth.", icon: <Rocket /> },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HEADER SECTION (Existing) */}
      <section className="bg-yellow-400 py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-red-700 uppercase mb-4 tracking-tighter">
            Our Services
          </h1>
          <p className="text-lg text-red-900/70 max-w-2xl mx-auto font-bold uppercase tracking-widest">
            Expert solutions rooted in excellence.
          </p>
        </div>
        {/* Decorative "Service" background text */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-black text-red-700/5 select-none pointer-events-none">
          CAPABILITIES
        </div>
      </section>

      {/* 2. SERVICES GRID (Existing) */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-red-700 cursor-pointer"
              >
                <div className="bg-red-50 text-red-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-700 group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <div className="mt-8 flex items-center text-red-700 font-black text-xs uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  View Details <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTIONS --- */}

      {/* 3. WORKFLOW / PROCESS SECTION */}
      <section className="py-24 px-6 bg-red-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">How We Bridge The Gap</h2>
            <p className="text-red-200 max-w-xl font-bold uppercase tracking-wide">A systematic approach to engineering your success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {workflow.map((item, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="text-6xl font-black text-white/10 absolute -top-10 -left-4 group-hover:text-yellow-400/20 transition-colors">
                  {item.step}
                </div>
                <div className="mb-6 text-yellow-400">
                  {React.cloneElement(item.icon, { size: 40 })}
                </div>
                <h4 className="text-xl font-black mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-red-100/70 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
            {/* Connecting line for desktop */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -z-0 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* 4. FAQ / TECHNICAL QUESTIONS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 uppercase text-center mb-16 underline decoration-yellow-400 decoration-8 underline-offset-8">
            Common Questions
          </h2>
          
          <div className="space-y-4">
            {[
              { q: "How long does a typical software project take?", a: "Most foundational projects take between 8-12 weeks from discovery to deployment, depending on the complexity of the bridge we are building." },
              { q: "Do you offer ongoing maintenance?", a: "Yes. Like any solid structure, digital roots need tending. We offer tiered support packages to ensure 99.9% uptime." },
              { q: "Can you integrate with our existing legacy systems?", a: "Absolutely. Our specialty is 'Bridging'—we create custom middleware to make sure your new tech talks to your old tech seamlessly." }
            ].map((faq, i) => (
              <div key={i} className="border-2 border-gray-100 rounded-2xl p-6 hover:border-red-100 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-black uppercase text-gray-800 tracking-tight">{faq.q}</h4>
                  <ChevronDown className="text-red-700 group-hover:rotate-180 transition-transform" />
                </div>
                <p className="mt-4 text-gray-600 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA (Enhanced) */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-yellow-400 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-red-700 uppercase mb-8 leading-[0.9]">
                Ready to build <br /> something massive?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-700 text-white font-black py-5 px-12 rounded-2xl hover:bg-red-800 transition-all uppercase tracking-widest shadow-xl">
                  Get a Free Quote
                </button>
                <button className="bg-white/50 backdrop-blur-md text-red-700 font-black py-5 px-12 rounded-2xl hover:bg-white transition-all uppercase tracking-widest">
                  View Portfolio
                </button>
              </div>
            </div>
            {/* Abstract Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-700/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700/5 rounded-full translate-x-1/3 translate-y-1/3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;