import React, { useState } from 'react';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import LayoutSwitcherPill from './Components/layout/LayoutSwitcherPill';
import BentoStudioLayout from './Components/layouts/BentoStudioLayout';
import CyberShowcaseLayout from './Components/layouts/CyberShowcaseLayout';
import ExecutiveDashboardLayout from './Components/layouts/ExecutiveDashboardLayout';
import ResumeModal from './Components/resume/ResumeModal';

function App() {
  // Available layouts: 'bento' (Interactive OS), 'cyber' (Widescreen Flow), 'executive' (Recruiter Dashboard)
  const [layout, setLayout] = useState('bento');
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 relative pb-16">
      {/* Top Navbar with Layout Switcher & Resume Action */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        currentLayout={layout}
        onChangeLayout={(newLayout) => setLayout(newLayout)}
      />

      {/* Main Dynamic Layout Body */}
      <main className="pt-20">
        {layout === 'bento' && (
          <BentoStudioLayout onOpenResume={() => setResumeOpen(true)} />
        )}

        {layout === 'cyber' && (
          <CyberShowcaseLayout onOpenResume={() => setResumeOpen(true)} />
        )}

        {layout === 'executive' && (
          <ExecutiveDashboardLayout onOpenResume={() => setResumeOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Layout Switcher Pill */}
      <LayoutSwitcherPill
        currentLayout={layout}
        onChangeLayout={(newLayout) => setLayout(newLayout)}
      />

      {/* Interactive Resume Modal (ATS & Modern view with PDF Print) */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
