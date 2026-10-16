import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Sparkles, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume, currentLayout, onChangeLayout }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
          isScrolled
            ? 'bg-[#0a0d14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Relocation Status */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                VS
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base text-white tracking-tight flex items-center gap-1.5">
                  Vijayalakshmi S
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                  Full Stack Engineer
                </span>
              </div>
            </a>

            {/* Chennai Relocation Highlight Pill */}
            <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <MapPin size={12} className="text-emerald-400 animate-bounce" />
              <span>Relocating to Chennai, India</span>
            </div>
          </div>

          {/* Layout Quick Selector (Desktop) */}
          {onChangeLayout && (
            <div className="hidden md:flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold">
              {[
                { id: 'bento', label: 'Bento Studio' },
                { id: 'cyber', label: 'Cyber Showcase' },
                { id: 'executive', label: 'Recruiter View' },
              ].map((l) => (
                <button
                  key={l.id}
                  onClick={() => onChangeLayout(l.id)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    currentLayout === l.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}

          {/* Desktop Navigation for Sections (Shown when Cyber layout is active) */}
          {currentLayout === 'cyber' && (
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.slice(0, 5).map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-500/10 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          )}

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-cyan-500 bg-size-200 hover:bg-right transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <FileText size={15} />
              <span>Resume</span>
              <Sparkles size={13} className="text-cyan-200 animate-pulse" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1"
            >
              <FileText size={13} />
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#0d121f] border-l border-slate-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    VS
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm block">Vijayalakshmi S</span>
                    <span className="text-[10px] text-emerald-400 font-semibold block">Relocating to Chennai</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Layout Switcher Mobile */}
              {onChangeLayout && (
                <div className="py-4 border-b border-slate-800 space-y-2">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Select Layout
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[
                      { id: 'bento', label: 'Bento Studio (Interactive OS)' },
                      { id: 'cyber', label: 'Cyber Showcase (Full Flow)' },
                      { id: 'executive', label: 'Recruiter View (Dashboard)' },
                    ].map((l) => (
                      <button
                        key={l.id}
                        onClick={() => {
                          onChangeLayout(l.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all ${
                          currentLayout === l.id
                            ? 'bg-cyan-500 text-white shadow-sm'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Links */}
              <div className="py-4 flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-medium text-xs transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={14} className="text-slate-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-md shadow-cyan-500/20"
              >
                <FileText size={15} />
                View Interactive Resume
              </button>
              <p className="text-[11px] text-center text-slate-400">
                Madurai ➔ Relocating to Chennai
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
