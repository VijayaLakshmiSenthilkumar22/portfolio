import React, { useState } from 'react';
import { Mail, Linkedin, Phone, FileText, Sparkles, Check, Copy, ChevronRight, Briefcase } from 'lucide-react';
import profileImage from '../../assets/image.png';
import { resumeData } from '../../data/resumeData';

export default function Hero({ onOpenResume }) {
  const { personal, stats } = resumeData;
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Decorative background glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full glow-spot-cyan pointer-events-none blur-3xl opacity-30 -z-10" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full glow-spot-indigo pointer-events-none blur-3xl opacity-25 -z-10" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 rounded-full glow-spot-purple pointer-events-none blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Engineer @ BIZMETRIC India</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400 hidden sm:inline">2.1+ Yrs Full Stack</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Vijayalakshmi S
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl text-cyan-300 font-semibold mb-5 flex items-center justify-center lg:justify-start gap-2">
              <Briefcase size={20} className="text-cyan-400" />
              <span>Full Stack Software Engineer</span>
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Specializing in building scalable web architectures with <span className="text-white font-semibold">React.js</span>,{' '}
              <span className="text-white font-semibold">TypeScript</span>, <span className="text-white font-semibold">FastAPI</span>, and{' '}
              <span className="text-white font-semibold">Node.js</span>. Proven track record of delivering visual workflow designers, dynamic form engines, and high-performance RESTful APIs.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10">
              {['React.js', 'Python (FastAPI)', 'Node.js', 'TypeScript', 'React Flow', 'MongoDB & SQL', 'AI Engineering'].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center gap-2 group"
              >
                <FileText size={18} />
                <span>View Interactive Resume</span>
                <Sparkles size={16} className="text-cyan-200 group-hover:rotate-12 transition-transform" />
              </button>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 shadow-md transition-all duration-200 flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <ChevronRight size={16} className="text-slate-400" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 border border-cyan-500/30 transition-all duration-200 flex items-center gap-2"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Contact Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 border-t border-slate-800/80 text-slate-400 text-xs sm:text-sm">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={16} className="text-cyan-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail size={16} className="text-indigo-400" />
                <span>{personal.email}</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors relative"
                title="Click to copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Phone Copied!</span>
                  </>
                ) : (
                  <>
                    <Phone size={16} className="text-teal-400" />
                    <span>{personal.phone}</span>
                    <Copy size={12} className="opacity-60" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Profile Visual Card */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer glowing orbital rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-2xl -z-10" />
              
              <div className="w-full h-full rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-slate-800 to-indigo-500/40 shadow-2xl overflow-hidden relative group">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0d121f] relative">
                  <img
                    src={profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Current Role</p>
                      <p className="text-xs sm:text-sm font-bold text-white">Software Engineer</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      BIZMETRIC
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Experience Bubble */}
              <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 shadow-xl flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs sm:text-sm font-bold text-white">2.1+ Years</span>
                <span className="text-[11px] text-slate-400">Exp.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all text-center group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
