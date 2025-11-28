import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mail, Linkedin, Code, Briefcase, GraduationCap, Award, Zap, Target, Database, TrendingUp, ChevronRight, CornerRightDown, MapPin, Clock, GitCommit, Settings, Server } from 'lucide-react';

// --- Utility Components ---

// 1. Accent Title Component (Sticky Header) - Z-index set to z-30
const AccentSectionTitle = ({ children, icon: Icon }) => (
  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 sm:mb-10 border-b border-cyan-500/50 pb-3 flex items-center 
        sticky top-20 bg-gray-900/90 backdrop-blur-sm z-30 transition-shadow duration-300 shadow-xl shadow-black/30">
    <Icon className="w-6 h-6 sm:w-7 sm:h-7 mr-3 sm:mr-4 text-cyan-400 flex-shrink-0" />
    {children}
  </h2>
);

// 2. Main Container Card
const DarkCard = ({ children, className = '' }) => (
  <div className={`p-4 sm:p-6 md:p-8 rounded-xl bg-gray-800 border border-gray-700 shadow-2xl transition-all duration-300 hover:border-cyan-500 ${className}`}>
    {children}
  </div>
);

// 3. Project Detail Component
const ProjectDetail = ({ project }) => (
  <DarkCard className="space-y-3 sm:space-y-4">
    <div className="flex items-start justify-between">
      <div className="flex items-center space-x-3 min-w-0 pr-2"> 
        {React.cloneElement(project.icon, { className: 'w-6 h-6 text-cyan-400 flex-shrink-0' })}
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug break-words">{project.title}</h3>
      </div>
      <span className="text-xs font-semibold px-2 py-1 bg-cyan-600/30 text-cyan-300 rounded-full border border-cyan-600 flex-shrink-0 ml-auto">
        {project.tech.split(',')[0].trim()}
      </span>
    </div>
    
    <p className="text-gray-400 border-l-4 border-cyan-500/80 pl-3 italic text-sm">
      <span className='font-bold text-cyan-300'>Impact:</span> {project.impact}
    </p>
    
    <p className="text-gray-500 font-medium text-xs sm:text-sm">
      {project.tech}
    </p>

    <div className="pt-2">
      <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
        <CornerRightDown className="w-4 h-4 mr-2 text-cyan-500 flex-shrink-0" /> Key Features:
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.metrics.map((m,i) => (
          <span key={i} className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-lg border border-gray-600 hover:bg-gray-600 transition">
            {m}
          </span>
        ))}
      </div>
    </div>
  </DarkCard>
);

// 4. Skillset Category Component (Static Grid)
const NewSkillCategoryList = ({ category, items, icon: Icon }) => (
  <div className="p-4 sm:p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500 transition duration-300">
    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 border-b border-gray-700 pb-2 flex items-center">
      <Icon className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />
      {category}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((s,i) => (
        <span 
          key={i} 
          className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-500/50 hover:bg-cyan-600/30 transition"
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

// --- DATA DEFINITIONS ---

const projects = [
    {
      title: 'Budget and Expense Tracker (1/4)',
      icon: <TrendingUp />,
      tech: 'React.js, Redux, Tailwind CSS, Spring Boot, MySQL',
      impact: 'Designed and implemented a full-stack financial tracking system for enhanced user accountability and reporting.',
      metrics: ['Expense categorization', 'Monthly reports dashboard', 'Secure Auth', 'API integration']
    },
    {
      title: 'Visual Workflow Management (2/4)',
      icon: <Zap />,
      tech: 'React.js, TypeScript, React Flow, Azure SQL',
      impact: 'Developed a dynamic visual builder, cutting design cycle time by over 60% for enterprise processes.',
      metrics: ['99.9% reliability', '40% development time reduction', 'Drag-and-drop builder', 'Real-time validation']
    },
    {
      title: 'AI Resume Shortlisting Platform (3/4)',
      icon: <Target />,
      tech: 'React.js, TypeScript, Material-UI, AI Integration',
      impact: 'Built the frontend module for an automated screening tool, reducing recruiter manual effort by 70%.',
      metrics: ['Automated screening engine', 'Smart matching algorithms', 'Custom filter options', 'Scalable architecture']
    },
    {
      title: 'Enterprise HRMS Module (4/4)',
      icon: <Database />,
      tech: 'React.js, Redux, TypeScript, Java (Microservices)',
      impact: 'Contributed to the development of core employee lifecycle features, ensuring role-based access control.',
      metrics: ['Role-based access control', 'Analytics dashboard integration', 'Full audit logging', 'Modular components']
    }
  ];

// --- MAIN PORTFOLIO COMPONENT ---

export default function ProfessionalPortfolio() {
  const sectionKeys = ['overview', 'skills', 'projects', 'experience', 'education', 'certifications'];
  const [activeTab, setActiveTab] = useState(sectionKeys[0]);
  // RESTORED STATES:
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); 
  const [isFading, setIsFading] = useState(false); 
  
  const overviewRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);

  const sectionRefs = {
    overview: overviewRef,
    projects: projectsRef,
    skills: skillsRef,
    experience: experienceRef,
    education: educationRef,
    certifications: certificationsRef
  };

  // --- SCROLL OFFSET LOGIC ---
  const scrollToSection = useCallback((section) => {
    const element = sectionRefs[section]?.current;
    if (element) {
      const topOfElement = element.getBoundingClientRect().top + window.scrollY;
      
      const offset = 150; // Offset for fixed nav and sticky header
      const targetY = topOfElement - offset;
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
      setActiveTab(section);
    }
  }, [sectionRefs]);


  // --- 1. Sub-Scroll Logic for Projects (2 seconds per project) - RESTORED ---
  useEffect(() => {
    if (activeTab !== 'projects') {
      setCurrentProjectIndex(0); 
      return;
    }

    const projectDuration = 2000; // 2 seconds total cycle time
    const fadeOutDuration = 500; // 0.5 seconds for fade out

    const projectTimer = setInterval(() => {
        setIsFading(true); // Start fade-out
        
        // Wait for fade-out to complete (500ms) before changing content
        setTimeout(() => {
            const isLastProject = currentProjectIndex === projects.length - 1;
            
            if (isLastProject) {
                // If we are on the last project, let the main timer handle the advance 
                // and break the project cycle
                clearInterval(projectTimer);
            } else {
                // Move to the next project index
                setCurrentProjectIndex(prevIndex => prevIndex + 1);
                setIsFading(false); // Start fade-in immediately after index change
            }
        }, fadeOutDuration);

    }, projectDuration);

    // If we are at the last project, we need to clear the project timer
    // and let the main timer (useEffect 2) handle the advance.
    if (activeTab === 'projects' && currentProjectIndex === projects.length - 1) {
        // Only clear the interval if the condition is met upon rendering
        return; 
    }

    return () => clearInterval(projectTimer);
  }, [activeTab, currentProjectIndex]);


  // --- 2. Main Automatic Vertical Scrolling Logic (Pauses for Project Cycle) - RESTORED ---
  useEffect(() => {
    // Standard duration for most sections
    const defaultDuration = 2500; 
    
    // The main timer only advances if we are NOT in the 'projects' section,
    // OR if we have cycled through all projects (i.e., at the last project index).
    const isReadyToAdvance = activeTab !== 'projects' || currentProjectIndex === projects.length - 1;

    // Determine the duration based on readiness
    const currentDuration = isReadyToAdvance ? defaultDuration : 2000; // If not ready, use project cycle time

    if (!isReadyToAdvance && activeTab === 'projects') return;

    const timer = setInterval(() => {
      const currentIndex = sectionKeys.indexOf(activeTab);
      
      if (currentIndex === -1) {
          scrollToSection(sectionKeys[0]);
          return;
      }
      
      const nextIndex = (currentIndex + 1) % sectionKeys.length;
      const nextSection = sectionKeys[nextIndex];
      
      // If we are advancing FROM the projects section, reset the project index
      if (activeTab === 'projects') {
          setCurrentProjectIndex(0);
      }

      scrollToSection(nextSection);
    }, currentDuration); 

    return () => clearInterval(timer);
  }, [activeTab, sectionKeys, scrollToSection, currentProjectIndex]); 


  // --- 3. Intersection Observer for Manual Scrolling Feedback ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: '-150px 0px -50% 0px' } 
    );

    Object.keys(sectionRefs).forEach(key => {
      if (sectionRefs[key].current) {
        sectionRefs[key].current.id = key;
        observer.observe(sectionRefs[key].current);
      }
    });

    return () => {
      Object.keys(sectionRefs).forEach(key => {
        if (sectionRefs[key].current) {
          observer.unobserve(sectionRefs[key].current);
        }
      });
    };
  }, [sectionRefs]); 

  // --- Data Definitions (Skills and non-project data) ---
  const skills = {
    'Frontend Core': { 
      items: ['React.js', 'Redux', 'TypeScript', 'JavaScript (ES6+)', 'HTML', 'React Flow'],
      icon: Code
    },
    'UI & Styling Frameworks': {
      items: ['CSS', 'Tailwind CSS', 'Material-UI', 'Bootstrap'],
      icon: Settings
    },
    'Backend & Database': {
      items: ['Spring', 'Java', 'RESTful APIs', 'MongoDB', 'MySQL'],
      icon: Server
    },
    'Tools & Version Control': {
      items: ['Git', 'Swagger', 'Jira', 'Postman', 'JMeter', 'Thunder Client'],
      icon: GitCommit
    }
  };
  
  const certifications = [
    { name: 'MongoDB - Relational to Document Model', org: 'MongoDB', date: 'Nov 2025', icon: Database },
    { name: 'Oracle Database SQL Certified Associate', org: 'Oracle', date: 'Jul 2023', icon: Server },
    { name: 'Academic process mining fundamental', org: 'Celonis', date: 'Jul 2023', icon: Target },
    { name: 'JMeter - Performance Testing', org: 'SimpliLearn', date: 'Jul 2025', icon: Zap },
  ];

  const educationDetails = [
    { degree: 'Master of Computer Applications', institution: 'Alagappa University', details: '' },
    { degree: 'B.Sc Computer Science', institution: 'Thiagarajar College', details: 'CGPA: 9.0' },
    { degree: 'Higher Secondary (HSC)', institution: 'M.A.N.U Girls Higher Sec School', details: 'Percentage: 93%' },
    { degree: 'Secondary (SSLC)', institution: 'M.A.N.U Girls Higher Sec School', details: 'Percentage: 86%' },
  ];
  // ---------------------------------------------------------------------

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans scroll-smooth">

      {/* FIXED NAVIGATION (z-50) */}
      <nav className="sticky top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 p-2 sm:p-3 md:p-4 flex justify-center gap-2 sm:gap-3 flex-wrap shadow-lg shadow-black/50 border-b border-gray-700">
        
        {/* Navigation Tabs */}
        {sectionKeys.map(tab => (
          <button
            key={tab}
            onClick={() => scrollToSection(tab)}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 ease-in-out ${
              activeTab === tab 
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/40' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            {tab === 'certifications' ? 'Certifications' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 space-y-16 sm:space-y-24">

        {/* 1. OVERVIEW (Z-40 covers the sticky header Z-30 below it) */}
        <div ref={overviewRef} id="overview" className="relative z-40 bg-gray-900">
            <div className="space-y-6 text-center pt-8 border-b border-gray-700/50 pb-12">
                
                <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-2">Associate Software Engineer</p>
                
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                    VIJAYALAKSHMI S
                </h1>
                
                <p className="text-gray-400 md:max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
                    <span className='font-bold text-white'>Full-Stack Developer</span> specializing in <span className='font-bold text-white'>React.js, TypeScript, and Spring Boot</span>. 1+ year of experience delivering high-performance, scalable web applications for enterprise environments. Focused on clean code and robust architecture.
                </p>

                <div className="mt-8 flex justify-center gap-4 sm:gap-6 flex-wrap">
                    <a 
                    href="mailto:viji592001@gmail.com" 
                    className="px-5 py-2 sm:px-6 sm:py-3 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition shadow-lg shadow-cyan-600/50 flex items-center gap-2 font-medium text-sm sm:text-base"
                    >
                    <Mail size={16} /> Email Me
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/vijayalakshmi-senthilkumar-89b0b22b1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-5 py-2 sm:px-6 sm:py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition flex items-center gap-2 font-medium text-sm sm:text-base"
                    >
                    <Linkedin size={16} /> LinkedIn
                    </a>
                </div>
            </div>
        </div>

        <hr className="border-gray-800" /> 
        
        {/* 2. SKILLS (Sticky Header - z-30) */}
        <section ref={skillsRef} className="space-y-8 sm:space-y-10">
          <AccentSectionTitle icon={Code}>Technical Skillset</AccentSectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, data], idx) => (
              <NewSkillCategoryList 
                key={idx} 
                category={category} 
                items={data.items} 
                icon={data.icon} 
              />
            ))}
          </div>
        </section>

        <hr className="border-gray-800" /> 
        
        {/* 3. PROJECTS (RE-IMPLEMENTED CYCLING DISPLAY) */}
        <section ref={projectsRef} className="space-y-8 sm:space-y-10">
          <AccentSectionTitle icon={Briefcase}>Key Development Projects</AccentSectionTitle>

          <div className="space-y-6 sm:space-y-8">
            {/* Project Detail Wrapper with Fade Transition */}
            <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                <ProjectDetail project={projects[currentProjectIndex]} />
            </div>
            
            {/* Visual indicator of sub-scroll progress */}
            <div className="text-center text-gray-500 text-sm font-medium pt-2">
                Project {currentProjectIndex + 1} of {projects.length}
            </div>
          </div>
        </section>

        <hr className="border-gray-800" /> 
        
        {/* 4. EXPERIENCE (Sticky Header) */}
        <section ref={experienceRef} className="space-y-8 sm:space-y-10">
          <AccentSectionTitle icon={Briefcase}>Professional Experience</AccentSectionTitle>
          
          <div className="relative border-l-2 border-gray-700 pl-4 sm:pl-6 space-y-6">

            <div className="relative p-4 sm:p-5 bg-gray-700 rounded-lg shadow-xl hover:shadow-cyan-900/40 transition duration-300 border-t-4 border-cyan-500">
              <span className="absolute left-[-15px] top-6 w-3 h-3 rounded-full bg-cyan-500 border-2 border-gray-700" />
              
              <h4 className="text-xl sm:text-2xl font-bold text-white">Associate Software Engineer</h4>
              <p className="text-cyan-400 mb-2 text-sm sm:text-base">BAPS | <MapPin className="w-4 h-4 inline-block text-gray-500 mr-1" /> Coimbatore</p>
              <p className="text-sm text-gray-400 font-medium flex items-center mb-3">
                <Clock className="w-4 h-4 mr-2" /> Sep 2024 - Present
              </p>

              {/* Responsibility/Detail List */}
              <ul className="text-gray-300 text-xs sm:text-sm space-y-2 border-t border-gray-600 pt-3">
                  <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                      Developed and maintained <span className='font-bold text-white'>user-facing features</span> using React.js and TypeScript, ensuring high performance and responsiveness.
                  </li>
                  <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                      Contributed to <span className='font-bold text-white'>RESTful API development</span> using Java and Spring Boot for seamless front-end/back-end integration.
                  </li>
                  <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                      Collaborated with the design team to implement <span className='font-bold text-white'>Material-UI</span> components and uphold code standards via Git and pull requests.
                  </li>
                  <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                      Executed <span className='font-bold text-white'>unit and integration tests</span> using Junit/Jest to ensure software reliability and performance stability.
                  </li>
                  <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mt-1 mr-2 text-cyan-400 flex-shrink-0" />
                      Participated in <span className='font-bold text-white'>Agile Scrum meetings</span>, providing timely updates on task progress and addressing technical roadblocks.
                  </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" /> 

        {/* 5. EDUCATION (Sticky Header) */}
        <section ref={educationRef} className="space-y-8 sm:space-y-10">
          <AccentSectionTitle icon={GraduationCap}>Academic History</AccentSectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {educationDetails.map((edu, index) => (
              <div key={index} className="relative p-4 sm:p-5 bg-gray-800 rounded-lg shadow-xl hover:shadow-cyan-900/40 transition duration-300 border-l-4 border-cyan-500">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-cyan-400 text-sm sm:text-md">{edu.institution}</p>
                {edu.details && <p className="text-gray-500 text-xs sm:text-sm mt-2">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-800" /> 

        {/* 6. CERTIFICATIONS (Sticky Header) */}
        <section ref={certificationsRef} className="space-y-8 sm:space-y-10">
          <AccentSectionTitle icon={Award}>Certifications</AccentSectionTitle>
          
          <div className="space-y-4">
            {certifications.map((c,i) => (
              <div key={i} className="flex items-start p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500 transition duration-300">
                {c.icon && <c.icon className="w-5 h-5 mr-4 mt-1 text-cyan-400 flex-shrink-0" />} 
                <div>
                  <h4 className="font-bold text-white text-md sm:text-lg leading-snug">{c.name}</h4>
                  <p className="text-cyan-400 text-xs sm:text-sm">{c.org}</p>
                  <p className="text-gray-500 text-xs mt-1">Issued: {c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="py-6 text-center border-t border-gray-700 mt-12 sm:mt-16 bg-gray-900 text-gray-500">
        <p className="text-sm">Designed and Developed by Vijayalakshmi S</p>
        <p className="text-xs mt-1">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}