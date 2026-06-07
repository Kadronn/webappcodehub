'use client';
import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'web', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-purple-500/10 bg-neutral-900/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-widest">
            WEB APP CODE HUB
          </h1>
          <a href="#order-form" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 px-6 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all">
            Order Custom Build
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <section className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full bg-cyan-500/5">
            Premium Software & Automation Solutions
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-6 mb-6 tracking-tight text-white leading-tight">
            Get Your Web Site, Automation Bot <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              & Mobile App Developed
            </span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            We build your dream project from scratch. Whether you need a ready-to-go boilerplate or a fully customized software solution tailored to your business needs.
          </p>
        </section>

        {/* Premium Core Template Showcase: MiraMi */}
        <section className="mb-20 bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 md:p-8">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-purple-500/20">
              Premium Source Code Available
            </span>
            <span className="text-cyan-400 font-mono font-bold text-sm">$1,199</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">MiraMi: Advanced Mobile App Architecture</h3>
          <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
            A production-ready, ultra-detailed baby development tracking and analytical assistant application codebase built with React Native and Expo. Perfect architecture for entrepreneurs looking to launch their mobile app instantly!
          </p>
          <a href="#order-form" onClick={() => setFormData({...formData, service: 'template', details: 'Interested in purchasing the MiraMi mobile application template codebase ($1,199).'})} className="text-xs text-cyan-400 font-bold uppercase tracking-wider hover:underline cursor-pointer">
            Acquire Source Code &rarr;
          </a>
        </section>

        {/* Order Intake Form */}
        <section id="order-form" className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 relative">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Start Your Project</h3>
          <p className="text-neutral-400 text-xs md:text-sm text-center mb-8">
            Fill out the request form below, specify your software requirements, and let's start planning immediately.
          </p>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-xl text-center font-semibold">
              🎉 Thank you! Your request has been successfully received. I will contact you shortly to discuss project details and pricing.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Your Name / Company</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:outline-none transition-all text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Email Address</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:outline-none transition-all text-white" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">What do you want to build?</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:outline-none transition-all text-white">
                  <option value="web">🌐 Custom Web Site Development</option>
                  <option value="bot">🤖 Automation & Custom Script / Bot</option>
                  <option value="template">📱 Premium Mobile App Boilerplate (MiraMi)</option>
                  <option value="other">💡 Other Bespoke Software Engineering</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Project Specifications</label>
                <textarea required rows={4} value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:border-purple-500 focus:outline-none transition-all text-white resize-none" placeholder="Describe the app features, web platform scope, or automation bot workflow you need..." />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 text-white font-black py-4 rounded-xl text-xs uppercase tracking-widest shadow-xl shadow-purple-500/10 transition-all">
                Launch Project Discovery
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="border-t border-neutral-900 py-8 text-center text-[10px] font-mono text-neutral-600">
        &copy; 2026 WEB APP CODE HUB. ALL CODES COMPLY WITH MODERN REACT NATIVE & NEXT.JS STANDARDS.
      </footer>
    </div>
  );
}

