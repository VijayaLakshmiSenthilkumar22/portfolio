import React from 'react';
import { Send, Clock, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function ChennaiRelocationBadge() {
  const { personal } = resumeData;

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 sm:p-7 bg-gradient-to-r from-emerald-950/40 via-cyan-950/40 to-slate-900 border border-emerald-500/40 shadow-2xl shadow-emerald-500/10">
      {/* Animated glowing beacon */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Side: Target Location & Status */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Relocation Preference: Chennai, India 🚆
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Clock size={12} />
              Immediate Joiner / Fast Relocation
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Actively Seeking Software Engineering Roles in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Chennai, Tamil Nadu
            </span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Currently based in <strong className="text-white">Madurai</strong>, fully ready and flexible to relocate to <strong className="text-emerald-400">Chennai</strong> for on-site, hybrid, or remote full-stack engineering opportunities.
          </p>
        </div>

        {/* Right Side: Quick Action CTA */}
        <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
          <a
            href={`mailto:${personal.email}?subject=${encodeURIComponent('Software Engineer Opportunity in Chennai')}&body=${encodeURIComponent('Hi Vijayalakshmi,\n\nWe saw your portfolio and are interested in discussing a Software Engineer opportunity with our team in Chennai.\n\nBest regards,')}`}
            className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
            <span>Connect for Chennai Role</span>
          </a>

          <div className="flex items-center justify-center lg:justify-end gap-2 text-xs text-slate-400">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>100% Relocation Ready</span>
          </div>
        </div>

      </div>
    </div>
  );
}
