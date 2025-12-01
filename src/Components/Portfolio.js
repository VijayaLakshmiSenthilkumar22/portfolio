import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, ExternalLink, Code, Database, Server, GraduationCap, Award, ChevronDown, Calendar, MapPin, ArrowRight, Menu, X } from 'lucide-react';

export default function UniquePortfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'education', 'certifications'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Budget & Expense Tracker',
      description: 'Full-stack financial tracking system with advanced reporting and analytics dashboard',
      tech: ['React.js', 'Redux', 'Spring Boot', 'MySQL'],
      impact: 'Enhanced user accountability with real-time expense categorization',
      features: ['Monthly Reports', 'Secure Auth', 'API Integration', 'Data Visualization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Visual Workflow Management',
      description: 'Dynamic visual builder for enterprise process design with drag-and-drop capabilities',
      tech: ['React.js', 'TypeScript', 'React Flow', 'Azure SQL'],
      impact: '60% reduction in design cycle time',
      features: ['99.9% Reliability', 'Real-time Validation', 'Drag & Drop', 'Auto-save'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'AI Resume Shortlisting Platform',
      description: 'Automated screening tool with intelligent matching algorithms',
      tech: ['React.js', 'TypeScript', 'Material-UI', 'AI Integration'],
      impact: '70% reduction in manual screening effort',
      features: ['Smart Matching', 'Custom Filters', 'Bulk Processing', 'Analytics'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Enterprise HRMS Module',
      description: 'Core employee lifecycle management with role-based access control',
      tech: ['React.js', 'Redux', 'TypeScript', 'Java Microservices'],
      impact: 'Streamlined HR operations with comprehensive audit logging',
      features: ['RBAC', 'Analytics Dashboard', 'Audit Logs', 'Modular Design'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const skills = {
    'Frontend': ['React.js', 'Redux', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'React Flow'],
    'Styling': ['Tailwind CSS', 'Material-UI', 'Bootstrap', 'Responsive Design'],
    'Backend': ['Spring Boot', 'Java', 'RESTful APIs', 'Microservices'],
    'Database': ['MongoDB', 'MySQL', 'Azure SQL'],
    'Tools': ['Git', 'Jira', 'Postman', 'Swagger', 'JMeter', 'Thunder Client']
  };

  const certifications = [
    { name: 'MongoDB - Relational to Document Model', org: 'MongoDB', date: 'Nov 2025' },
    { name: 'Oracle Database SQL Certified Associate', org: 'Oracle', date: 'Jul 2023' },
    { name: 'Academic Process Mining Fundamental', org: 'Celonis', date: 'Jul 2023' },
    { name: 'JMeter - Performance Testing', org: 'SimpliLearn', date: 'Jul 2025' }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen relative overflow-hidden">
      {/* Animated gradient orb that follows cursor */}
      <div 
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              VS
            </div>
            <div className="hidden md:flex gap-8">
              {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative group ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-transform origin-left ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:viji592001@gmail.com"
                className="hidden sm:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-400 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
              <div className="flex flex-col gap-4">
                {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase());
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="mailto:viji592001@gmail.com"
                  className="sm:hidden px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-semibold text-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4 sm:mb-6 inline-block">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs sm:text-sm font-medium">
              Associate Software Engineer
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight px-2">
            VIJAYALAKSHMI S
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Building scalable web applications and innovative user experiences with{' '}
            <span className="text-cyan-400 font-semibold">React.js</span>,{' '}
            <span className="text-blue-400 font-semibold">TypeScript</span>, and{' '}
            <span className="text-purple-400 font-semibold">Spring Boot</span>
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <a
              href="mailto:viji592001@gmail.com"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Email Me
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-700 rounded-full font-semibold flex items-center justify-center gap-2 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 text-sm sm:text-base"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
              LinkedIn
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce mt-8 sm:mt-12 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ChevronDown size={28} className="sm:w-8 sm:h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over a year of experience building scalable web applications. 
                I specialize in creating seamless user experiences and robust backend architectures.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                My approach combines clean code principles, modern development practices, and a keen eye for design 
                to deliver solutions that not only work flawlessly but also delight users.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-400">1+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400">10+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400">4</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Certifications</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                <MapPin className="text-cyan-400" size={20} />
                Quick Facts
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Location</div>
                    <div className="text-gray-400 text-sm">Coimbatore, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Current Role</div>
                    <div className="text-gray-400 text-sm">Associate Software Engineer at BAPS</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Education</div>
                    <div className="text-gray-400 text-sm">MCA from Alagappa University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4 gap-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink 
                      className="text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" 
                      size={18}
                    />
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-slate-900/50 rounded-lg border-l-4 border-cyan-500">
                    <div className="text-xs sm:text-sm font-semibold text-cyan-400 mb-1">Impact</div>
                    <div className="text-sm sm:text-base text-gray-300">{project.impact}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 sm:px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, items], idx) => {
              const icons = [Code, Server, Database, Code, Server];
              const Icon = icons[idx];
              const colors = ['from-cyan-500 to-blue-500', 'from-purple-500 to-pink-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500', 'from-blue-500 to-indigo-500'];
              
              return (
                <div
                  key={category}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 sm:p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className={`p-2.5 sm:p-3 bg-gradient-to-br ${colors[idx]} rounded-lg flex-shrink-0`}>
                      <Icon size={20} className="sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-900/50 border border-slate-700 rounded-lg text-xs sm:text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />
            
            <div className="space-y-8 sm:space-y-12">
              <div className="relative pl-12 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-6 top-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900" />
                
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Associate Software Engineer</h3>
                      <div className="text-cyan-400 font-semibold text-sm sm:text-base">BAPS</div>
                    </div>
                    <div className="sm:text-right">
                      <div className="flex items-center gap-2 text-gray-400 mb-1 text-xs sm:text-sm">
                        <Calendar size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>Sep 2024 - Present</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                        <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>Coimbatore, India</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {[
                      'Developed and maintained user-facing features using React.js and TypeScript with focus on performance',
                      'Contributed to RESTful API development using Java and Spring Boot for seamless integration',
                      'Collaborated with design team to implement Material-UI components following best practices',
                      'Executed comprehensive unit and integration tests using JUnit/Jest for software reliability',
                      'Participated in Agile Scrum meetings providing updates and addressing technical challenges'
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm sm:text-base text-gray-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { degree: 'Master of Computer Applications', institution: 'Alagappa University', year: '2022 - 2024', highlight: true },
              { degree: 'B.Sc Computer Science', institution: 'Thiagarajar College', year: '2019 - 2022', grade: 'CGPA: 9.0' },
              { degree: 'Higher Secondary (HSC)', institution: 'Government Higher Secondary School', year: '2018 - 2019', grade: '72%' },
              { degree: 'Secondary (SSLC)', institution: 'Government Higher Secondary School', year: '2016 - 2017', grade: '93%' }
            ].map((edu, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-5 sm:p-6 ${
                  edu.highlight 
                    ? 'border-cyan-500/50 sm:col-span-2' 
                    : 'border-slate-700 hover:border-cyan-500/50'
                } transition-all duration-300`}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex-shrink-0">
                    <GraduationCap size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">{edu.degree}</h3>
                    <p className="text-cyan-400 mb-1 text-sm sm:text-base">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <span>{edu.year}</span>
                      {edu.grade && <span className="text-green-400 font-semibold">{edu.grade}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-5 sm:p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                    <Award size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-1 text-sm sm:text-base">{cert.org}</p>
                    <p className="text-xs sm:text-sm text-gray-400">Issued: {cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <a href="mailto:viji592001@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
          <p className="text-gray-400 mb-2 text-sm sm:text-base">Designed & Developed by Vijayalakshmi S</p>
          <p className="text-gray-600 text-xs sm:text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}