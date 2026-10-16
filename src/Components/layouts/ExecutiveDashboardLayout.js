import React, { useState } from 'react';
import ChennaiRelocationBadge from '../interactive/ChennaiRelocationBadge';
import WorkflowSimulator from '../interactive/WorkflowSimulator';
import ProjectDetailModal from '../projects/ProjectDetailModal';
import profileImage from '../../assets/image.png';
import { resumeData } from '../../data/resumeData';
import { 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  FileText, 
  Check, 
  Layers, 
  Code2, 
  Cpu, 
  GraduationCap, 
  ArrowUpRight
} from 'lucide-react';

export default function ExecutiveDashboardLayout({ onOpenResume }) {
  const { personal, experience, projects, skillCategories, education, certifications } = resumeData;
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Chennai Relocation Badge */}
      <ChennaiRelocationBadge />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sticky Column: Recruiter Profile Card */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
            {/* Avatar & Title */}
            <div className="text-center">
              <div className="relative w-28 h-28 mx-auto rounded-3xl overflow-hidden border-2 border-cyan-400/50 p-1 bg-slate-800 shadow-xl mb-4">
                <img
                  src={profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <span className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
              </div>

              <h2 className="text-2xl font-black text-white tracking-tight">
                {personal.name}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mt-0.5">
                {personal.title}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ready for Chennai Roles</span>
              </div>
            </div>

            {/* Quick Summary */}
            <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
              Full Stack Software Engineer with <strong className="text-white">2.1+ years</strong> building enterprise workflow designers (React Flow), FastAPI REST microservices, and multi-tenant architectures.
            </p>

            {/* Location & Relocation */}
            <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[10px]">CURRENT BASE:</span>
                  <span className="font-semibold text-white">Madurai, Tamil Nadu</span>
                </div>
              </div>
              <div className="flex items-start gap-2 text-slate-300 pt-1 border-t border-slate-800/80">
                <Building2Icon size={15} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-cyan-400 block text-[10px] font-bold">RELOCATION TARGET:</span>
                  <span className="font-semibold text-white">Chennai, India (Immediate)</span>
                </div>
              </div>
            </div>

            {/* Recruiter Actions */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={onOpenResume}
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <FileText size={15} />
                <span>Open ATS Printable Resume</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Mail size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                </button>

                <button
                  onClick={handleCopyPhone}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Phone size={14} />}
                  <span>{copiedPhone ? 'Copied!' : 'Copy Phone'}</span>
                </button>
              </div>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin size={15} />
                <span>View LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Recruiter Evaluation Workspace */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Tabs Bar */}
          <div className="p-1.5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-wrap gap-1 shadow-md">
            {[
              { id: 'projects', label: 'Key Projects & Metrics', icon: Code2 },
              { id: 'experience', label: 'Work History', icon: Briefcase },
              { id: 'simulator', label: 'Live Workflow Engine', icon: Cpu },
              { id: 'skills', label: 'Skills Matrix', icon: Layers },
              { id: 'education', label: 'Education & Certs', icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-xl space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {p.badge}
                      </span>
                      <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <span>Full Architecture</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Impact metrics chips */}
                  {p.metrics && (
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      {p.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className="text-sm font-extrabold text-white">{m.value}</div>
                          <div className="text-[10px] text-slate-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-slate-800 pb-2">
                  <span
                    className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-[#0a0d14] ${
                      exp.isCurrent ? 'bg-cyan-400 ring-2 ring-cyan-400/30' : 'bg-slate-600'
                    }`}
                  />
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <span className="text-xs text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-cyan-400 mb-3">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 mb-4 list-disc list-inside leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: LIVE SIMULATOR */}
          {activeTab === 'simulator' && (
            <div>
              <WorkflowSimulator />
            </div>
          )}

          {/* TAB 4: SKILLS MATRIX */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-cyan-400 font-mono">{cat.skills.length} skills</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                          s.highlight
                            ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-800 text-slate-300 border border-slate-700/60'
                        }`}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: EDUCATION & CERTS */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Degrees & Higher Education
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {education.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                      <div className="text-xs font-bold text-white">{edu.degree}</div>
                      <div className="text-xs text-cyan-400 mt-1">{edu.institution}</div>
                      <div className="text-xs text-emerald-400 font-semibold font-mono mt-1">Score: {edu.score}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{edu.period} • {edu.mode}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Professional Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                      <div className="text-xs font-bold text-white">{cert.name}</div>
                      <div className="text-[11px] text-cyan-400">{cert.issuer} • {cert.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

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

function Building2Icon({ size = 16, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}
