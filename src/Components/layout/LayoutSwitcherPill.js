import React from 'react';
import { LayoutGrid, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';

export default function LayoutSwitcherPill({ currentLayout, onChangeLayout }) {
  const layouts = [
    { id: 'bento', label: 'Bento Studio', icon: LayoutGrid, desc: 'Interactive OS & Canvas' },
    { id: 'cyber', label: 'Cyber Showcase', icon: Sparkles, desc: 'Widescreen Flow' },
    { id: 'executive', label: 'Recruiter View', icon: SlidersHorizontal, desc: 'Split Dashboard' },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 no-print">
      <div className="p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-cyan-500/40 shadow-2xl shadow-cyan-500/10 flex items-center gap-1">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs text-slate-400 font-semibold border-r border-slate-800">
          <Eye size={13} className="text-cyan-400" />
          <span>Switch Layout:</span>
        </div>

        {layouts.map((item) => {
          const Icon = item.icon;
          const isActive = currentLayout === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeLayout(item.id)}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
              title={item.desc}
            >
              <Icon size={14} className={isActive ? 'text-white' : 'text-slate-400'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
