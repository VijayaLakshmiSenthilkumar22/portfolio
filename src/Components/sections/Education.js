import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { resumeData } from '../../data/resumeData';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const { education } = resumeData;

  return (
    <section id="education" className="py-24 relative bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Credentials"
          subtitle="Formal foundation in computer science, distributed computing, and software engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {item.score}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {item.degree}
                </h3>
                <div className="text-sm font-semibold text-cyan-400 mb-3">
                  {item.institution}
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-500" />
                    {item.period}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span>{item.mode}</span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.highlights}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-500">
                <BookOpen size={14} className="text-cyan-500/70" />
                <span>Computer Science & Application Engineering</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
