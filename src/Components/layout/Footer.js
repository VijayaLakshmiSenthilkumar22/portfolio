import React from 'react';
import { ArrowUp, Mail, Linkedin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function Footer() {
  const { personal } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-[#070a10] no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm">
            VS
          </div>
          <div>
            <div className="font-bold text-white text-sm sm:text-base">
              Vijayalakshmi S
            </div>
            <div className="text-xs text-slate-500">
              Full Stack Software Engineer • Madurai, India
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs sm:text-sm text-slate-400">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          <span className="text-slate-600">•</span>
          <span>© 2026 Vijayalakshmi S.</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center gap-2 text-xs font-semibold"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}
