import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PortalDashboard() {
  return (
    <>
      <Head>
        <title>Kadal2Kadaai - System Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-background">
        
        {/* Animated Seawater Background (Inherited from globals.css) */}
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-sky-900 via-cyan-900 to-teal-900 opacity-90 dark:opacity-100"></div>

        {/* Main Glass Panel */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 max-w-5xl w-full mx-auto flex flex-col items-center text-center shadow-2xl relative z-10">
          
          {/* Logo Section */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-orange-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>
            <img 
              src="/logo.png" 
              alt="Kadal2Kadaai Logo" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl bg-white p-1 relative z-10"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-white drop-shadow-md">
            Kadal2Kadaai
          </h1>
          <p className="text-lg md:text-xl text-sky-200 mb-12 font-light">
            Central Access Dashboard
          </p>

          {/* Panels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            
            {/* Customer Panel */}
            <Link 
              href="/" 
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:-translate-y-2 hover:bg-white/10 hover:border-orange-500 hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.2)] transition-all duration-300 no-underline"
            >
              <div className="w-16 h-16 rounded-full bg-sky-900/50 flex items-center justify-center mb-6 border border-sky-400/20 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all">
                <svg className="w-8 h-8 text-sky-300 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Customer Panel</h2>
              <p className="text-sky-200/70 text-sm leading-relaxed mb-6">
                Access the main storefront, browse fresh seafood, and place orders.
              </p>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-sky-300 group-hover:bg-orange-500 group-hover:text-white transition-colors flex items-center">
                Port: 3001
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>

             {/* Admin Panel */}
            <a 
              href="http://127.0.0.1:8001/admin/login" 
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:-translate-y-2 hover:bg-white/10 hover:border-orange-500 hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.2)] transition-all duration-300 no-underline"
            >
              <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center mb-6 border border-teal-400/20 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all">
                <svg className="w-8 h-8 text-teal-300 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Admin Panel</h2>
              <p className="text-sky-200/70 text-sm leading-relaxed mb-6">
                Master control for operations, user management, and delivery zones.
              </p>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-teal-300 group-hover:bg-orange-500 group-hover:text-white transition-colors flex items-center">
                Port: 8001
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </a>

            {/* Seller Panel */}
            <a 
              href="http://127.0.0.1:8001/seller/login" 
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:-translate-y-2 hover:bg-white/10 hover:border-orange-500 hover:shadow-[0_20px_40px_-10px_rgba(249,115,22,0.2)] transition-all duration-300 no-underline"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-900/50 flex items-center justify-center mb-6 border border-indigo-400/20 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all">
                <svg className="w-8 h-8 text-indigo-300 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Seller Panel</h2>
              <p className="text-sky-200/70 text-sm leading-relaxed mb-6">
                Dashboard for vendors to manage their fresh catch inventory and orders.
              </p>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300 group-hover:bg-orange-500 group-hover:text-white transition-colors flex items-center">
                Port: 8001
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  );
}
