import React from 'react';
import { Crosshair } from 'lucide-react';

export default function HeroSection() {
  return (
    <div 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(15, 25, 35, 0.7), rgba(15, 25, 35, 0.9)), url("https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF4655" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1923]"></div>
      <div className="text-center z-10 px-4 animate-fade-in max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-border rounded-full"></div>
            <Crosshair className="text-[#FF4655] relative z-10" size={56} />
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Reach Your <span className="text-[#FF4655] relative">Peak
            <span className="absolute -inset-1 bg-[#FF4655]/10 blur-lg -z-10"></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light mb-12">
          Professional Valorant boosting by <span className="text-[#FF4655]">Radiant</span> players
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#FF4655] hover:bg-[#FF4655]/90 text-white font-bold py-4 px-8 rounded transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,70,85,0.3)] relative group">
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF4655]/0 via-[#FF4655]/30 to-[#FF4655]/0 animate-[shine_1.5s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Get Started
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-[#FF4655] text-[#FF4655] font-bold py-4 px-8 rounded transition-all hover:bg-[#FF4655]/10 group">
            <span className="group-hover:animate-pulse">View Pricing</span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-24 fill-[#0F1923] transform rotate-180" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,30 Z" />
        </svg>
      </div>
    </div>
  );
}