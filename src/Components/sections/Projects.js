import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import ProjectDetailModal from '../projects/ProjectDetailModal';
import { resumeData } from '../../data/resumeData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function Projects() {
  const { projects } = resumeData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Workflows & Architecture', 'Full Stack & Cloud', 'Automation & Forms', 'Web Apps'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering"
          title="Enterprise Applications & Projects"
          subtitle="Specializing in drag-and-drop workflow designers, dynamic platforms, and high-performance full-stack architectures."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1"
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {project.badge}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                        <Sparkles size={12} />
                        Flagship
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mb-4">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Pill Grid */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-sm sm:text-base font-extrabold text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60 group-hover:border-slate-600 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 group/btn transition-colors"
                  >
                    <span>View Architecture & Highlights</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </button>

                  <span className="text-[11px] text-slate-500">
                    Click to inspect
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
