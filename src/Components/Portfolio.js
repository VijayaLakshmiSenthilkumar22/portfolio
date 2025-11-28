import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Code, Briefcase, GraduationCap, Award, ChevronRight, Star, Zap, Target, Database, Globe, Terminal } from 'lucide-react';

export default function ModernPortfolio() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    'Frontend': ['React.js', 'Redux', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Material-UI', 'Bootstrap', 'Tailwind CSS', 'React Flow'],
    'Backend': ['Spring', 'Java', 'RESTful APIs'],
    'Database': ['MongoDB', 'MySQL'],
    'Tools': ['Git', 'Swagger', 'Jira', 'JMeter', 'Postman', 'Thunder Client']
  };

  const projects = [
    {
    title: 'Budget and Expense Tracker',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-400 to-teal-500',
    tech: 'React.js, Redux, Tailwind CSS, Spring Boot, MySQL, Material-UI',
    impact: 'Track and manage budgets efficiently',
    metrics: ['Expense categorization', 'Monthly reports', 'Responsive design']
  },
    {
      title: 'Visual Workflow Management',
      icon: <Terminal className="w-6 h-6" />,
      color: 'from-cyan-400 to-blue-500',
      tech: 'React.js, TypeScript, React Flow, Azure SQL',
      impact: '60% faster workflow design',
      metrics: ['99.9% reliability', '40% dev time reduction']
    },
    {
      title: 'AI Resume Shortlisting',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-400 to-pink-500',
      tech: 'React.js, TypeScript, Material-UI, AI Integration',
      impact: '70% reduced recruiter workload',
      metrics: ['Automated screening', 'Smart matching']
    },
    {
      title: 'Enterprise HRMS',
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-400 to-red-500',
      tech: 'React.js, Redux, TypeScript, Java',
      impact: 'Full employee lifecycle',
      metrics: ['Role-based access', 'Analytics dashboard']
    }
  ];

  const certifications = [
    { name: 'MongoDB - Relational to Document Model', org: 'MongoDB', date: 'Nov 2025', color: 'bg-green-500' },
    { name: 'MongoDB - Schema Design Optimization', org: 'MongoDB', date: 'Nov 2025', color: 'bg-green-500' },
    { name: 'Oracle Database SQL Certified Associate', org: 'Oracle', date: 'Jul 2023', color: 'bg-red-500' },
        { name: 'Academic process mining fundamental', org: 'Celonis', date: 'Jul 2023', color: 'bg-purple-500' },
  { name: 'JMeter', org: 'SimpliLearn', date: '10th July 2025', color: 'bg-indigo-500' } // New certificate
,
    { name: 'Power Python', org: 'LUDIFU', date: 'Jun 2023', color: 'bg-blue-500' },
    { name: 'Python Programming', org: 'Sololearn', date: 'Jun 2021', color: 'bg-yellow-500' },
    { name: 'HTML & CSS', org: 'Sololearn', date: 'Aug 2021', color: 'bg-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        
        {/* Header Card */}
        <div className="mb-8 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  VS
                </span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Vijayalakshmi S
              </h1>
              <p className="text-xl text-purple-300 mb-4">Associate Software Engineer @ BAPS</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-gray-400">
                <span className="flex items-center gap-2"><MapPin size={16} className="text-purple-400" /> Madurai, India</span>
                <span className="flex items-center gap-2"><Mail size={16} className="text-cyan-400" /> viji592001@gmail.com</span>
                <span className="flex items-center gap-2"><Phone size={16} className="text-pink-400" /> +91 7502409119</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="mailto:viji592001@gmail.com" className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1" target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-2 shadow-2xl">
          <div className="flex flex-wrap gap-2">
            {['overview', 'projects', 'skills', 'experience', 'education', 'certifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl min-h-96">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Results-driven Associate Software Engineer with <span className="text-purple-400 font-semibold">1+ year</span> of hands-on experience developing full-stack web applications. Proven expertise in building scalable, user-centric solutions using React.js, TypeScript, and Spring Boot.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Strong track record of delivering complex features including workflow automation, AI-powered systems, and enterprise HR platforms. Adept at translating business requirements into efficient technical solutions.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/20">
                  <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-sm text-gray-400">Faster Workflows</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">70%</div>
                  <div className="text-sm text-gray-400">Reduced Workload</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-500/5 border border-pink-500/20">
                  <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-400">Data Reliability</div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20">
                  <div className="text-4xl font-bold text-orange-400 mb-2">10+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Languages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="text-purple-400" size={24} />
                      <h4 className="text-xl font-bold">English</h4>
                    </div>
                    <p className="text-gray-400">Professional working proficiency</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="text-cyan-400" size={24} />
                      <h4 className="text-xl font-bold">Tamil</h4>
                    </div>
                    <p className="text-gray-400">Native or bilingual proficiency</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Key Projects
              </h2>
              {projects.map((project, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-purple-400 mb-3">{project.tech}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="text-cyan-400" size={18} />
                        <span className="text-lg text-cyan-400 font-semibold">{project.impact}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.map((metric, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              {Object.entries(skills).map(([category, items], index) => (
                <div key={category} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Code className="text-purple-400" size={20} />
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-white hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Star className="text-cyan-400" size={20} />
                  Methodologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Agile/Scrum', 'Responsive Design', 'Component-Based Architecture'].map((method, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 text-white"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Experience
              </h2>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Associate Software Engineer</h3>
                    <p className="text-purple-400 text-lg mb-1">BAPS | Coimbatore</p>
                    <p className="text-gray-400">September 2024 - Present</p>
                  </div>
                </div>
                <div className="space-y-3 pl-4 border-l-2 border-purple-500/30">
                  <div className="flex items-start gap-3 group">
                    <ChevronRight className="text-purple-400 mt-1 group-hover:translate-x-1 transition-transform" size={20} />
                    <p className="text-gray-300">Led frontend development of Visual Workflow Management System, reducing workflow design time by 60%</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <ChevronRight className="text-cyan-400 mt-1 group-hover:translate-x-1 transition-transform" size={20} />
                    <p className="text-gray-300">Built AI-powered Resume Shortlisting System that reduced recruiter workload by 70%</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <ChevronRight className="text-pink-400 mt-1 group-hover:translate-x-1 transition-transform" size={20} />
                    <p className="text-gray-300">Developed full-featured HR Management Application with role-based access control</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <ChevronRight className="text-orange-400 mt-1 group-hover:translate-x-1 transition-transform" size={20} />
                    <p className="text-gray-300">Engineered robust CRUD operations ensuring 99.9% data reliability</p>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <ChevronRight className="text-green-400 mt-1 group-hover:translate-x-1 transition-transform" size={20} />
                    <p className="text-gray-300">Delivered responsive, cross-browser compatible UIs with seamless user experience</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-500/20">
                      <GraduationCap className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Master of Computer Applications</h3>
                      <p className="text-purple-400">Alagappa University</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-500/20">
                      <Award className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">B.Sc Computer Science</h3>
                      <p className="text-cyan-400 mb-1">Thiagarajar College</p>
                      <p className="text-gray-400">CGPA: 9.0</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-pink-500/20">
                      <GraduationCap className="text-pink-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Higher Secondary (HSC)</h3>
                      <p className="text-pink-400 mb-1">M.A.N.U Girls Higher Sec School</p>
                      <p className="text-gray-400">93%</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-orange-500/20">
                      <Award className="text-orange-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Secondary (SSLC)</h3>
                      <p className="text-orange-400 mb-1">M.A.N.U Girls Higher Sec School</p>
                      <p className="text-gray-400">86%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Licenses & Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full ${cert.color} mt-2 group-hover:scale-150 transition-transform duration-300`} />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-purple-400 transition-colors">{cert.name}</h3>
                        <p className="text-sm text-purple-400 mb-1">{cert.org}</p>
                        <p className="text-xs text-gray-500">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Vijayalakshmi S • Built with React & Tailwind CSS</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
}