import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { resumeData } from '../../data/resumeData';
import { Award, Calendar, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const { certifications } = resumeData;

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Professional Certifications"
          subtitle="Specialized certifications in Relational SQL, MongoDB Schema Design, and Performance Engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Award size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-cyan-300 border border-slate-700">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>
                
                <div className="text-sm font-semibold text-cyan-400 mb-2">
                  {cert.issuer}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {cert.date}
                </span>

                {cert.credentialId ? (
                  <span className="font-mono text-[10px] text-cyan-400/90 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-emerald-400/80">
                    <ShieldCheck size={13} />
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
