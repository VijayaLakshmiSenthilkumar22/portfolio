import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, ExternalLink, GraduationCap, Award, Calendar, MapPin,ChevronRight } from 'lucide-react';

export default function ProfessionalPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

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
    },
    {
      title: 'AI Resume Shortlisting Platform',
      description: 'Recruitment automation tool leveraging smart matching algorithms and advanced filtering to drastically reduce manual resume screening effort.',
      tech: ['React.js', 'TypeScript', 'Material-UI', 'AI Integration'],
      impact: 'Reduced manual screening effort by 70% while maintaining accuracy.',
      link: '#'
    },
    {
      title: 'Enterprise HRMS Module',
      description: 'Core module for managing the employee lifecycle, featuring role-based access control and comprehensive audit logging within a scalable architecture.',
      tech: ['React.js', 'TypeScript', 'Java Microservices'],
      impact: 'Streamlined HR operations enterprise-wide using microservices architecture.',
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
   { 
      name: 'Oracle Database SQL Certified Associate', 
      org: 'Oracle', 
      date: 'July 2023',
      link: '#'
    }, { 
      name: 'Schema Design Optimization', 
      org: 'MongoDB', 
      date: 'November 2025', 
      credentialId: 'MDB7m73i11el8', 
      link: '#' 
    },
    { 
      name: 'Relational to Document Model', 
      org: 'MongoDB', 
      date: 'November 2025', 
      link: '#' 
    },
    { 
      name: 'HTML CSS', 
      org: 'Open Weaver', 
      date: 'July 2023',
      link: '#'
    },
    
    { 
      name: 'Academic Process Mining Fundamental', 
      org: 'Celonis', 
      date: 'July 2023',
      link: '#'
    },
    { 
      name: 'JMeter - Performance Testing', 
      org: 'SimpliLearn', 
      date: 'July 2025',
      link: '#'
    }
  ];
  // --- End Data Definitions ---

  // --- Effect and Handlers (Unchanged logic) ---
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
    }
  };
  // --- End Effect and Handlers ---


  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      
      {/* Navigation (Omitted for brevity) */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-serif font-bold text-amber-500">
              Vijayalakshmi S
            </div>
            <div className="hidden md:flex gap-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
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
          </div>
        </div>
      </nav>

      {/* Hero Section (Omitted for brevity) */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center pt-24">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 bg-amber-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-4xl font-serif font-bold text-gray-900">VS</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-4 text-white">
            Vijayalakshmi Senthilkumar
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-500 mb-3 font-semibold">
            Associate Software Engineer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Software developer specializing in building scalable <strong className="text-white">Applications</strong>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:viji592001@gmail.com"
              className="px-8 py-3 bg-amber-500 text-gray-900 rounded font-bold hover:bg-amber-600 transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-amber-500 text-amber-500 rounded font-bold hover:bg-amber-500 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <div className="flex justify-center gap-12 pt-8 border-t border-gray-700 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">1+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">{projects.length}+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">{certifications.length}</div>
              <div className="text-sm text-gray-400">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Omitted for brevity) */}
      <section id="about" className="py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a dedicated full-stack developer with over a year of professional experience in building scalable web applications. My expertise lies in creating seamless user experiences and robust backend architectures using modern technologies.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Currently serving as an Associate Software Engineer at BAPS, I specialize in <strong className="text-amber-500">Software</strong> development. My approach combines clean code principles, modern development practices, and attention to detail to deliver solutions that exceed expectations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am passionate about continuous learning and staying current with industry best practices. My goal is to contribute to innovative projects that make a meaningful impact while growing as a software engineer.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="text-sm font-semibold text-gray-400 mb-1">LOCATION</div>
              <div className="text-white">Coimbatore, India</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="text-sm font-semibold text-gray-400 mb-1">EMAIL</div>
              <div className="text-white">viji592001@gmail.com</div>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="text-sm font-semibold text-gray-400 mb-1">EDUCATION</div>
              <div className="text-white">MCA, Alagappa University</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section (Omitted for brevity) */}
      <section id="experience" className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">
            Professional Experience
          </h2>

          <div className="border-l-2 border-amber-500 pl-8 ml-4">
            
            {/* 1. Associate Software Engineer (Current Role) */}
            <div className="relative pb-12">
              <div className="absolute -left-[20px] top-0 w-4 h-4 bg-amber-500 rounded-full border-4 border-gray-900" />
              
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Associate Software Engineer</h3>
                    <div className="text-lg text-amber-500 font-medium">BAPS</div>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <div className="text-gray-400 flex items-center gap-2 mb-1 justify-end">
                      <Calendar size={16} />
                      <span>September 2024 - Present</span>
                    </div>
                    <div className="text-gray-400 flex items-center gap-2 justify-end">
                      <MapPin size={16} />
                      <span>Coimbatore, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Developed and maintained user-facing features using <strong className="text-white">React.js and TypeScript</strong> with a strong focus on performance optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Contributed to <strong className="text-white">RESTful API development using Java and Spring Boot</strong> for seamless frontend-backend integration</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Collaborated with cross-functional teams to implement Material-UI components following industry best practices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Executed comprehensive <strong className="text-white">unit and integration tests using JUnit and Jest</strong> to ensure software reliability</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Actively participated in Agile Scrum ceremonies, providing regular updates and addressing technical challenges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Software Testing Internship */}
            <div className="relative pb-12">
              <div className="absolute -left-[20px] top-0 w-4 h-4 bg-amber-500 rounded-full border-4 border-gray-900" />
              
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Software Testing Intern (Manual)</h3>
                    <div className="text-lg text-amber-500 font-medium">ASTRO Web Solution</div>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <div className="text-gray-400 flex items-center gap-2 mb-1 justify-end">
                      <Calendar size={16} />
                      <span>May 2024 - July 2024</span>
                    </div>
                    <div className="text-gray-400 flex items-center gap-2 justify-end">
                      <MapPin size={16} />
                      <span>Madurai, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Gained practical experience in Manual Testing and executed test cases on live applications to ensure quality assurance.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Learned and applied tools for specialized testing, including JMeter for Performance Testing and **Postman for API testing.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight size={20} className="text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Supported the team by performing Unit Testing procedures and documenting test results and bug reports.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Projects Section - UPDATED WITH REDUCED CONTENT */}
      <section id="projects" className="py-24 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                // min-h ensures consistent card height
                className="border border-gray-700 rounded-lg p-8 hover:shadow-2xl transition-shadow bg-gray-900 flex flex-col min-h-[400px]" 
              >
                {/* Project Header and Link */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <ExternalLink className="text-amber-500 hover:text-white transition-colors flex-shrink-0" size={20} />
                </div>

                {/* Description (Flex-grow allows this content to expand and fill available space) */}
                <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Key Impact (fixed height element) */}
                <div className="bg-gray-800 p-4 rounded mb-4 border-l-4 border-amber-500">
                  <div className="text-xs font-semibold text-amber-500 mb-1">KEY IMPACT</div>
                  <div className="text-white">{project.impact}</div>
                </div>

                {/* Tech Stack (Pushed to bottom using mt-auto) */}
                <div className="mt-auto"> 
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 text-gray-200 rounded text-sm font-medium"
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

      {/* Skills Section (Omitted for brevity) */}
      <section id="skills" className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">
            Technical Skills
          </h2>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-amber-500 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-900 border border-gray-700 rounded text-gray-300 hover:border-amber-500 transition-colors"
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

      {/* Education Section (Omitted for brevity) */}
      <section id="education" className="py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">
            Education
          </h2>

          <div className="space-y-6">
            {[
              { degree: 'Master of Computer Applications', institution: 'Alagappa University', year: '2022 - 2024', icon: GraduationCap },
              { degree: 'Bachelor of Science in Computer Science', institution: 'Thiagarajar College', year: '2019 - 2022', grade: 'CGPA: 9.0', icon: GraduationCap },
              { degree: 'Higher Secondary Certificate (HSC)', institution: 'Government Higher Secondary School', year: '2018 - 2019', grade: '86%', icon: GraduationCap },
              { degree: 'Secondary School Certificate (SSLC)', institution: 'Government Higher Secondary School', year: '2016 - 2017', grade: '93%', icon: GraduationCap }
            ].map((edu, idx) => (
              <div key={idx} className="border border-gray-700 rounded-lg p-6 bg-gray-900 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500 rounded flex-shrink-0">
                    <edu.icon size={24} className="text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-300 mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
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

      {/* Certifications Section (Omitted for brevity) */}
      <section id="certifications" className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500 rounded flex-shrink-0">
                    <Award size={24} className="text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-amber-500 font-medium mb-1">{cert.org}</p>
                    <p className="text-sm text-gray-400">Issued: {cert.date}</p>
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

      {/* Contact Section (Omitted for brevity) */}
      <section id="contact" className="py-24 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex justify-center gap-4">
            <a
              href="mailto:viji592001@gmail.com"
              className="px-8 py-3 bg-amber-500 text-gray-900 rounded font-bold hover:bg-amber-600 transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-amber-500 text-amber-500 rounded font-bold hover:bg-amber-500 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer (Omitted for brevity) */}
      <footer className="py-8 px-6 border-t border-gray-700 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-2">© 2024 Vijayalakshmi Senthilkumar. All rights reserved.</p>
          <p className="text-sm text-gray-500">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}