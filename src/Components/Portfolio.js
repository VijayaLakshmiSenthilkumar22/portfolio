import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, ExternalLink, GraduationCap, Award, Calendar, MapPin, ChevronRight, Menu, X } from 'lucide-react';

export default function ProfessionalPortfolio() {
  // --- State Variables ---
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // --- Data Definitions (Unchanged) ---
  const projects = [
    {
      title: 'TaskFlow – Team Task & Workflow Management System',
      description: 'Full-stack application enabling teams to manage tasks, assign work, and track workflow through status updates (To-Do/In Progress/Done). Features graphical progress charts and priority filtering.',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'MySQL'],
      impact: 'Demonstrates full-stack CRUD, complex state management (Redux), and data visualization in a practical business context.',
      link: '#'
    },
    {
      title: 'EduVision Analytics Platform',
      description: 'Web platform for academic institutions to monitor and analyze performance metrics using clear, interactive data visualizations and customizable charts.',
      tech: ['React.js', 'Tailwind CSS', 'MySQL'],
      impact: 'Enables data-driven decision-making for improved academic performance.',
      link: '#'
    },
    {
      title: 'Budget & Expense Tracker',
      description: 'Secure financial management system providing real-time expense categorization, monthly reporting, and transaction history. Includes robust user authentication.',
      tech: ['React.js', 'Spring Boot', 'MySQL'],
      impact: 'Enhanced user accountability with secure authentication and automated categorization.',
      link: '#'
    },
    {
      title: 'Visual Workflow Management System',
      description: 'Enterprise-grade tool for designing complex business processes using drag-and-drop functionality, built for high reliability and optimized performance.',
      tech: ['React.js', 'TypeScript', 'React Flow', 'Azure SQL'],
      impact: 'Achieved 99.9% system reliability and reduced design cycle time by 60%.',
      link: '#'
    }
  ];

  const skills = {
    'Frontend Development': ['React.js', 'Redux', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'React Flow'],
    'UI Frameworks': ['Tailwind CSS', 'Material-UI', 'Bootstrap', 'Responsive Design'],
    'Backend Development': ['RESTful APIs'],
    'Database Management': ['MongoDB', 'MySQL', 'Azure SQL'],
    'Development Tools': ['Git', 'Jira', 'Postman', 'Swagger', 'JMeter', 'Thunder Client']
  };

  const certifications = [
    { name: 'Oracle Database SQL Certified Associate', org: 'Oracle', date: 'July 2023', link: '#' },
    { name: 'Schema Design Optimization', org: 'MongoDB', date: 'November 2025', credentialId: 'MDB7m73i11el8', link: '#' },
    { name: 'Relational to Document Model', org: 'MongoDB', date: 'November 2025', link: '#' },
    { name: 'HTML CSS', org: 'Open Weaver', date: 'July 2023', link: '#' },
    { name: 'Academic Process Mining Fundamental', org: 'Celonis', date: 'July 2023', link: '#' },
    { name: 'JMeter - Performance Testing', org: 'SimpliLearn', date: 'July 2025', link: '#' }
  ];
  // --- End Data Definitions ---

  // --- Effect and Handlers ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust detection to center of screen for smoother switching
          return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      // Close menu after clicking on mobile
      setIsMenuOpen(false); 
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // --- End Effect and Handlers ---


  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <div className="text-xl font-serif font-bold text-amber-500">
              Vijayalakshmi S
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.toLowerCase() ? 'text-amber-500' : 'text-gray-300 hover:text-amber-500'
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-amber-500 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-full z-40 bg-gray-900 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={toggleMenu} 
            className="text-gray-300 hover:text-amber-500"
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 pt-10">
          {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-xl font-bold transition-colors ${
                activeSection === item.toLowerCase() ? 'text-amber-500' : 'text-gray-300 hover:text-amber-500'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* End Mobile Menu */}


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center pt-24">
          <div className="mb-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 bg-amber-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">VS</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold mb-4 text-white">
            Vijayalakshmi Senthilkumar
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-amber-500 mb-3 font-semibold">
            Associate Software Engineer
          </p>
          
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Software developer specializing in building scalable <strong className="text-white">Applications</strong>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:viji592001@gmail.com"
              className="px-6 py-2 sm:px-8 sm:py-3 bg-amber-500 text-gray-900 rounded font-bold hover:bg-amber-600 transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              <Mail size={16} />
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-amber-500 text-amber-500 rounded font-bold hover:bg-amber-500 hover:text-gray-900 transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-8 pt-8 border-t border-gray-700 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-500">1+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-500">{projects.length}+</div>
              <div className="text-xs sm:text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-amber-500">{certifications.length}</div>
              <div className="text-xs sm:text-sm text-gray-400">Certifications</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 sm:mb-12 text-center text-white">
            About Me
          </h2>
          
          <div className="prose max-w-none">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I am a dedicated full-stack developer with over a year of professional experience in building scalable web applications. My expertise lies in creating seamless user experiences and robust backend architectures using modern technologies.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Currently serving as an Associate Software Engineer at BA PRODUCTS AND SYSTEMS INDIA PRIVATE LIMITED, I specialize in <strong className="text-amber-500">Software</strong> development. My approach combines clean code principles, modern development practices, and attention to detail to deliver solutions that exceed expectations.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              I am passionate about continuous learning and staying current with industry best practices. My goal is to contribute to innovative projects that make a meaningful impact while growing as a software engineer.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="text-xs font-semibold text-gray-400 mb-1">LOCATION</div>
              <div className="text-sm sm:text-base text-white">Coimbatore, India</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="text-xs font-semibold text-gray-400 mb-1">EMAIL</div>
              <div className="text-sm sm:text-base text-white">viji592001@gmail.com</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="text-xs font-semibold text-gray-400 mb-1">EDUCATION</div>
              <div className="text-sm sm:text-base text-white">MCA, Alagappa University</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 sm:mb-12 text-center text-white">
            Professional Experience
          </h2>

          <div className="border-l-2 border-amber-500 pl-6 sm:pl-8 ml-2 sm:ml-4">
            
            {/* 1. Associate Software Engineer (Current Role) */}
            <div className="relative pb-12">
              <div className="absolute -left-[17px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-amber-500 rounded-full border-4 border-gray-900" />
              
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Associate Software Engineer</h3>
                    <div className="text-base sm:text-lg text-amber-500 font-medium">BA PRODUCTS AND SYSTEMS INDIA PRIVATE LIMITED</div>
                  </div>
                  <div className="mt-2 md:mt-0 text-right text-xs sm:text-sm">
                    <div className="text-gray-400 flex items-center gap-2 mb-1 justify-end">
                      <Calendar size={14} />
                      <span>September 2024 - Present</span>
                    </div>
                    <div className="text-gray-400 flex items-center gap-2 justify-end">
                      <MapPin size={14} />
                      <span>Coimbatore, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <ChevronRight size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Developed and maintained user-facing features using <strong className="text-white">React.js and TypeScript</strong> with a strong focus on performance optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Contributed to <strong className="text-white">RESTful API development using Java and Spring Boot</strong> for seamless frontend-backend integration</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Collaborated with cross-functional teams to implement Material-UI components following industry best practices</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Software Testing Internship */}
            <div className="relative pb-12">
              <div className="absolute -left-[17px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-amber-500 rounded-full border-4 border-gray-900" />
              
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Software Testing Intern (Manual)</h3>
                    <div className="text-base sm:text-lg text-amber-500 font-medium">ASTRO Web Solution</div>
                  </div>
                  <div className="mt-2 md:mt-0 text-right text-xs sm:text-sm">
                    <div className="text-gray-400 flex items-center gap-2 mb-1 justify-end">
                      <Calendar size={14} />
                      <span>May 2024 - July 2024</span>
                    </div>
                    <div className="text-gray-400 flex items-center gap-2 justify-end">
                      <MapPin size={14} />
                      <span>Madurai, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  <div className="flex items-start gap-3">
                    <ChevronRight size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Gained practical experience in Manual Testing and executed test cases on live applications to ensure quality assurance.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">Learned and applied tools for specialized testing, including JMeter for Performance Testing and Postman for API testing.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 sm:mb-12 text-center text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                // FIXED: Reduced main card padding for a smaller overall size
                className="border border-gray-700 rounded-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow bg-gray-900 flex flex-col" 
              >
                {/* Project Header and Link */}
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View project ${project.title}`}>
                    <ExternalLink className="text-amber-500 hover:text-white transition-colors flex-shrink-0" size={18} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-2 sm:mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Impact - FIXED: Reduced internal padding and margin */}
                <div className="bg-gray-800 p-2 sm:p-3 rounded mb-2 sm:mb-3 border-l-4 border-amber-500">
                  <div className="text-xs font-semibold text-amber-500 mb-0.5">KEY IMPACT</div>
                  <div className="text-sm text-white">{project.impact}</div>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto"> 
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 text-gray-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 sm:mb-12 text-center text-white">
            Technical Skills
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-700">
                <h3 className="text-lg sm:text-xl font-bold text-amber-500 mb-3 sm:mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900 border border-gray-700 rounded text-xs sm:text-sm text-gray-300 hover:border-amber-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 sm:mb-12 text-center text-white">
            Education
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {[
              { degree: 'Master of Computer Applications', institution: 'Alagappa University', year: '2022 - 2024', icon: GraduationCap },
              { degree: 'Bachelor of Science in Computer Science', institution: 'Thiagarajar College', year: '2019 - 2022', grade: 'CGPA: 9.0', icon: GraduationCap },
              { degree: 'Higher Secondary Certificate (HSC)', institution: 'Government Higher Secondary School', year: '2018 - 2019', grade: '86%', icon: GraduationCap },
              { degree: 'Secondary School Certificate (SSLC)', institution: 'Government Higher Secondary School', year: '2016 - 2017', grade: '93%', icon: GraduationCap }
            ].map((edu, idx) => (
              <div key={idx} className="border border-gray-700 rounded-lg p-4 sm:p-6 bg-gray-900 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-amber-500 rounded flex-shrink-0">
                    <edu.icon size={20} className="text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-sm text-gray-300 mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{edu.year}</span>
                      {edu.grade && <span className="font-semibold text-amber-500">{edu.grade}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 sm:mb-12 text-center text-white">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-amber-500 rounded flex-shrink-0">
                    <Award size={20} className="text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-amber-500 font-medium mb-1">{cert.org}</p>
                    <p className="text-xs text-gray-400">Issued: {cert.date}</p>
                    {cert.credentialId && (
                       <p className="text-xs text-gray-500 mt-1">Credential ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="mailto:viji592001@gmail.com"
              className="px-6 py-2 sm:px-8 sm:py-3 bg-amber-500 text-gray-900 rounded font-bold hover:bg-amber-600 transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              <Mail size={16} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-amber-500 text-amber-500 rounded font-bold hover:bg-amber-500 hover:text-gray-900 transition-colors flex items-center gap-2 text-sm sm:text-base"
            >
              <Linkedin size={16} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-6 border-t border-gray-700 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-400 mb-2">© 2024 Vijayalakshmi Senthilkumar. All rights reserved.</p>
          <p className="text-xs text-gray-500">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}