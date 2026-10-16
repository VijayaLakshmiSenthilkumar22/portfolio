import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Contact from '../sections/Contact';
import WorkflowSimulator from '../interactive/WorkflowSimulator';
import ChennaiRelocationBadge from '../interactive/ChennaiRelocationBadge';

export default function CyberShowcaseLayout({ onOpenResume }) {
  return (
    <div>
      {/* Hero Section */}
      <Hero onOpenResume={onOpenResume} />

      {/* Chennai Relocation Spotlight Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-12 relative z-20">
        <ChennaiRelocationBadge />
      </div>

      {/* Interactive Workflow Simulator Feature */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <WorkflowSimulator />
      </div>

      {/* Main Sections */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
