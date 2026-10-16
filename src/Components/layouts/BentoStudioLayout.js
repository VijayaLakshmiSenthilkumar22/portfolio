import React, { useState } from 'react';
import ChennaiRelocationBadge from '../interactive/ChennaiRelocationBadge';
import WorkflowSimulator from '../interactive/WorkflowSimulator';
import DevTerminal from '../interactive/DevTerminal';
import ProjectDetailModal from '../projects/ProjectDetailModal';
import profileImage from '../../assets/image.png';
import { resumeData } from '../../data/resumeData';
import { 
  Briefcase, 
  MapPin, 
  Phone, 
  FileText, 
  Sparkles, 
  ArrowUpRight, 
  GraduationCap, 
  Award, 
  Code2, 
  Check, 
  ShieldCheck
} from 'lucide-react';

export default function BentoStudioLayout({ onOpenResume }) {
  const { personal, stats, experience, projects, education, certifications } = resumeData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* 1. Chennai Relocation Beacon Spotlight */}
      <ChennaiRelocationBadge />

      {/* 2. Bento Header Row: Profile Hero + Career Stat Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Profile Identity Card */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400/40 p-1 bg-slate-800 flex-shrink-0 shadow-lg">
                <img
                  src={profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 mb-1">
                  <Sparkles size={12} />
                  Software Engineer @ BIZMETRIC
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {personal.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-400">
                  {personal.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {personal.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3 text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <MapPin size={14} />
                Madurai ➔ Relocating to Chennai
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenResume}
                className="px-4 py-2 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
              >
                <FileText size={14} />
                <span>Open Resume</span>
              </button>

              <button
                onClick={handleCopyPhone}
                className="px-3 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1.5 transition-colors"
                title="Copy phone"
              >
                {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Phone size={14} />}
                <span>{copiedPhone ? 'Copied!' : 'Phone'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 6-Cell Metrics Hub Card */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Production Impact Metrics
              </span>
              <span className="text-[11px] text-cyan-400 font-mono">2.1+ Years In Industry</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">{s.label}</div>
                  <div className="text-[10px] text-slate-500 leading-tight">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span>Specialization</span>
            <span className="text-cyan-300 font-mono">React Flow • FastAPI • Multi-DB</span>
          </div>
        </div>
      </div>

      {/* 3. Centerpiece: Interactive Live Workflow Simulator */}
      <div>
        <WorkflowSimulator />
      </div>

      {/* 4. Split Row: Interactive Dev Terminal + Key Flagship Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Interactive Dev Console */}
        <div className="lg:col-span-6">
          <DevTerminal onOpenResume={onOpenResume} />
        </div>

        {/* Right: Flagship Projects Cards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Code2 size={18} className="text-cyan-400" />
              Flagship Enterprise Systems
            </h3>
            <span className="text-xs text-slate-500">Click card for architecture</span>
          </div>

          {projects.slice(0, 3).map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 cursor-pointer shadow-lg hover:shadow-cyan-500/5 transition-all group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {p.badge}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                  <span>Inspect</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {p.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/80">
                {p.tech.slice(0, 4).map((t, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Experience Timeline + Education / Certs Bento Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Experience Timeline */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Briefcase size={18} className="text-indigo-400" />
              Career Journey
            </h3>
            <span className="text-xs text-emerald-400 font-semibold">● 2.1+ Years Exp</span>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-800 pb-2">
                <span
                  className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-[#0a0d14] ${
                    exp.isCurrent ? 'bg-cyan-400 ring-2 ring-cyan-400/30' : 'bg-slate-600'
                  }`}
                />
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 className="text-sm font-bold text-white">{exp.role}</h4>
                  <span className="text-xs text-slate-400">{exp.period}</span>
                </div>
                <div className="text-xs font-semibold text-cyan-400 mb-2">
                  {exp.company} • {exp.location}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map((s, sIdx) => (
                    <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Verified Certs */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Card */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <GraduationCap size={18} className="text-teal-400" />
              Education
            </h3>
            {education.map((edu, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex justify-between items-start">
                  <div className="text-xs font-bold text-white">{edu.degree}</div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold font-mono">
                    {edu.score}
                  </span>
                </div>
                <div className="text-xs text-cyan-400 mt-0.5">{edu.institution}</div>
                <div className="text-[11px] text-slate-500 mt-1">{edu.period} • {edu.mode}</div>
              </div>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Award size={18} className="text-amber-400" />
              Top Certifications
            </h3>
            {certifications.slice(0, 3).map((cert, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{cert.name}</div>
                  <div className="text-[11px] text-cyan-400">{cert.issuer} • {cert.date}</div>
                </div>
                <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
