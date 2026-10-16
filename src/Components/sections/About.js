import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { resumeData } from '../../data/resumeData';
import { Workflow, Server, Database, Bot, MapPin, Mail, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { personal } = resumeData;

  const pillars = [
    {
      icon: Workflow,
      title: "Frontend & Workflow Systems",
      description: "Expert in React.js, React Flow, and TypeScript. Specializes in building drag-and-drop workflow canvases, dynamic form wizards, and modular UI libraries.",
      color: "from-cyan-500 to-blue-600",
      border: "border-cyan-500/30",
    },
    {
      icon: Server,
      title: "Scalable APIs & Backend",
      description: "Proficient in Python (FastAPI) and Node.js. Crafts high-performance RESTful APIs with optimistic rendering, schema validation, and automatic rollback logic.",
      color: "from-indigo-500 to-purple-600",
      border: "border-indigo-500/30",
    },
    {
      icon: Database,
      title: "Relational & NoSQL Databases",
      description: "Certified and experienced in MongoDB schema optimization, PostgreSQL, MySQL, and Azure SQL with proven data modeling and transaction security.",
      color: "from-emerald-500 to-teal-600",
      border: "border-emerald-500/30",
    },
    {
      icon: Bot,
      title: "AI-Accelerated Engineering",
      description: "Daily practitioner of Google Antigravity, Claude AI, ChatGPT, and Perplexity to refine code architectures, automate testing, and deliver rapid feature velocity.",
      color: "from-amber-500 to-orange-600",
      border: "border-amber-500/30",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering Scalable Systems with Clean Code"
          subtitle="Full Stack Software Engineer with 2.1 years of experience delivering high-impact web products and configurable platforms."
        />

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                {personal.summary}
              </p>
              <p>
                My development approach blends deep frontend expertise in <span className="text-white font-semibold">React.js, React Flow, and TypeScript</span> with reliable backend microservices built in <span className="text-white font-semibold">FastAPI and Node.js</span>. Having built enterprise systems serving 500+ active users with 95%+ availability, I focus heavily on writing clean, scalable, and maintainable software.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-white font-semibold">Madurai, India</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email</div>
                  <div className="text-white font-semibold truncate max-w-[170px]">{personal.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Education</div>
                  <div className="text-white font-semibold">MCA, Alagappa Univ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Highlights Card */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Core Competencies</div>
              <h3 className="text-xl font-bold text-white mb-6">What I Bring to the Table</h3>
              
              <ul className="space-y-3.5 text-sm text-slate-300">
                {[
                  "Interactive Drag-and-Drop Workflow Engines (React Flow)",
                  "Config-Driven Enterprise Module Architectures",
                  "High-Performance RESTful APIs with FastAPI & Node.js",
                  "Relational & NoSQL Optimization (MongoDB, PostgreSQL, MySQL)",
                  "Type-safe component design reducing runtime bugs by 35%",
                  "AI-assisted rapid prototyping and test automation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Working Philosophy</span>
                <span className="text-cyan-300 font-mono">Clean • Scalable • Fast</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
