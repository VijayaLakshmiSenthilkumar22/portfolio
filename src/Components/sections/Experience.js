import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { resumeData } from '../../data/resumeData';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience"
          subtitle="Building mission-critical enterprise workflows, APIs, and scalable web solutions."
        />

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-[#0a0d14] transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-cyan-400 ring-4 ring-cyan-400/20 scale-125'
                    : 'bg-slate-600 group-hover:bg-cyan-400'
                }`}
              />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/5">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-cyan-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs sm:text-sm text-slate-400">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium">
                      <Calendar size={14} className="text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-slate-400">
                      <MapPin size={14} className="text-indigo-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role overview */}
                <p className="text-sm sm:text-base text-slate-300 mb-5 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <ChevronRight size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                    Technologies:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
