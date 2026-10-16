import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { resumeData } from '../../data/resumeData';
import { Code2, Workflow, Server, Database, Layers, Bot, Sparkles } from 'lucide-react';

const ICON_MAP = {
  Code2: Code2,
  Workflow: Workflow,
  Server: Server,
  Database: Database,
  Layers: Layers,
  Bot: Bot,
};

export default function Skills() {
  const { skillCategories } = resumeData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Skills & Tech Stack Matrix"
          subtitle="Modern web technologies, stateful workflows, RESTful backends, and AI engineering copilots."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, idx) => {
            const Icon = ICON_MAP[category.icon] || Code2;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          skill.highlight
                            ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm'
                            : 'bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-600 hover:text-white'
                        }`}
                      >
                        {skill.highlight && (
                          <Sparkles size={12} className="text-cyan-400 animate-pulse" />
                        )}
                        <span>{skill.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${
                            skill.level === 'Expert'
                              ? 'bg-cyan-500/30 text-cyan-200'
                              : 'bg-slate-700/60 text-slate-400'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-cyan-400/80 font-medium">Production Tested</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
