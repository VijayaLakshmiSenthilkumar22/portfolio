import React, { useState } from 'react';
import { X, Printer, Copy, Check, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal } = resumeData;
  const [themeMode, setThemeMode] = useState('dark'); // 'dark' or 'light' (ATS printable)
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const textResume = `
${personal.name}
${personal.title}
${personal.location} | ${personal.phone} | ${personal.email}
LinkedIn: ${personal.linkedin}

PROFESSIONAL SUMMARY:
${personal.summary}

TECHNICAL SKILLS:
- Frontend: React.js, Redux, JavaScript, TypeScript, HTML5, CSS3, Material-UI (MUI), Tailwind CSS, Bootstrap
- React Expertise: Hooks, Context API, React Flow, React Hook Form, Performance Optimization, Code Splitting
- Backend & Database: Node.js, Python (FastAPI), REST API Integration, MongoDB, MySQL, Azure SQL, PostgreSQL
- Tools & Platforms: Git, Postman, Swagger, Jira, VS Code, Agile/Scrum, Azure, JMeter, SFTP
- AI Tools: Claude AI, ChatGPT, Perplexity AI, Blackbox AI, Google Antigravity

PROFESSIONAL EXPERIENCE:
Software Engineer | BIZMETRIC India Private Limited
Madurai, India | Feb 2026 – Present
- Architecting scalable web applications and high-performance RESTful APIs using React.js, FastAPI, Node.js, and TypeScript.
- Designing modular, configuration-driven components to fulfill complex client requirements.
- Managing database schemas across PostgreSQL, MySQL, and MongoDB with strict integrity checks.
- Integrating AI-accelerated workflows to enhance delivery velocity.

Associate Software Engineer | BA Product and System India Private Limited
Coimbatore, India | September 2024 – Feb 2026
- Engineered a drag-and-drop workflow designer with full CRUD capabilities and undo/redo history tracking.
- Built a reusable workflow pattern library, decreasing duplicate code by 60% and accelerating feature development.
- Connected backend APIs with optimistic rendering and automatic rollback logic for consistent data state.
- Maintained 95%+ system availability serving 500+ active users managing complex business process automations.
- Implemented type safety practices, reducing runtime errors by 35% and improving maintainability.

EDUCATION:
Master of Computer Applications (MCA) | Alagappa University | 7.9 CGPA | 2024 - 2026 (Distance Education)
Bachelor of Science in Computer Science | Thiagarajar College | 8 CGPA | 2021 - 2024 (Full Time)

KEY PROJECTS:
1. Interactive Process Designer
- Engineered drag-and-drop workflow designer with full CRUD capabilities and undo/redo history tracking.
- Established permission-based access system with view-only, editing, and sharing access levels.
- Designed workflow export/import functionality with JSON schema validation for data persistence and version tracking.
- Built reusable workflow pattern library, decreasing duplicate code by 60% and accelerating feature development.
- Connected backend APIs with optimistic rendering and automatic rollback logic.
- Maintained 95%+ system availability serving 500+ active users.

2. Configuration-Driven Enterprise Platform
- Developed and maintained a configuration-driven enterprise platform enabling dynamic management of application modules, workflows, forms, business rules, and system-level configurations.
- Built full-stack solution with focus on reusable, scalable, configurable components.
- Implemented dynamic UI configurations, API integrations, database operations, validation logic, and workflow-based functionalities.

3. Applicant Screening & Evaluation System
- Engineered progressive form wizard for skill requirements input and multi-document uploads.
- Built drag-and-drop upload interface with real-time file validation (PDF, DOC, DOCX).
- Designed evaluation dashboard with applicant rankings, compatibility scores, and dynamic filtering.
- Implemented automated email workflow with customizable templates for candidate communication and scheduling.
- Decreased hiring team's screening effort by 70% through automated matching algorithms and intelligent scoring.
- Implemented type safety practices, reducing runtime errors by 35%.

4. Enterprise Management Platform
- Built centralized web application to streamline business processes and manage core organizational operations. Worked extensively on database management, data processing, and business logic implementation.
- Implemented dynamic forms, role-based access, workflow-driven processes, validations, reporting features, and API integrations.
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const isLight = themeMode === 'light';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity no-print"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-2 sm:p-4 md:p-6">
        <div
          className={`relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden z-10 transition-colors my-8 ${
            isLight
              ? 'bg-white text-slate-900 border border-slate-300'
              : 'bg-[#0c101a] text-slate-100 border border-slate-700/80'
          }`}
        >
          {/* Action Header Bar (Hidden in Print) */}
          <div
            className={`px-6 py-4 border-b flex flex-wrap items-center justify-between gap-4 no-print ${
              isLight
                ? 'bg-slate-100 border-slate-200'
                : 'bg-slate-900/90 border-slate-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
              <span className="text-sm font-bold tracking-tight">
                Interactive Professional Resume
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-500 font-semibold">
                Updated
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Theme Toggle (Dark vs ATS Printable) */}
              <div
                className={`p-1 rounded-xl flex items-center gap-1 border text-xs font-semibold ${
                  isLight
                    ? 'bg-slate-200 border-slate-300'
                    : 'bg-slate-800 border-slate-700'
                }`}
              >
                <button
                  onClick={() => setThemeMode('dark')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    !isLight
                      ? 'bg-cyan-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-black'
                  }`}
                >
                  Dark View
                </button>
                <button
                  onClick={() => setThemeMode('light')}
                  className={`px-2.5 py-1 rounded-lg transition-colors ${
                    isLight
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ATS White
                </button>
              </div>

              {/* Copy Plain Text */}
              <button
                onClick={handleCopyPlainText}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                  isLight
                    ? 'bg-white border-slate-300 hover:bg-slate-50 text-slate-700'
                    : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                }`}
                title="Copy plain text resume for application portals"
              >
                {copiedText ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              {/* Print / Save PDF */}
              <button
                onClick={handlePrint}
                className="px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className={`p-1.5 rounded-xl transition-colors ${
                  isLight
                    ? 'text-slate-500 hover:text-black hover:bg-slate-200'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Printable Resume Document Area */}
          <div
            id="printable-resume"
            className={`p-6 sm:p-10 md:p-12 space-y-8 print:p-0 print:space-y-6 ${
              isLight ? 'bg-white text-slate-900' : 'bg-[#0c101a] text-slate-100'
            }`}
          >
            {/* 1. Header */}
            <div className="border-b pb-6 border-slate-300/60 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1
                    className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                      isLight ? 'text-slate-950' : 'text-white'
                    }`}
                  >
                    {personal.name}
                  </h1>
                  <p
                    className={`text-lg sm:text-xl font-bold tracking-wide mt-1 uppercase ${
                      isLight ? 'text-cyan-700' : 'text-cyan-400'
                    }`}
                  >
                    {personal.title}
                  </p>
                </div>

                <div className="text-xs sm:text-sm space-y-1 sm:text-right">
                  <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                    <MapPin size={14} className={isLight ? 'text-emerald-600' : 'text-emerald-400'} />
                    <span>Madurai, India • <strong className={isLight ? 'text-emerald-700' : 'text-emerald-300'}>Relocating to Chennai, India</strong></span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                    <Phone size={14} className={isLight ? 'text-slate-500' : 'text-slate-400'} />
                    <span>{personal.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                    <Mail size={14} className={isLight ? 'text-slate-500' : 'text-slate-400'} />
                    <span>{personal.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 font-medium text-cyan-600 dark:text-cyan-400">
                    <Linkedin size={14} />
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      linkedin.com/in/vijayalakshmi-senthilkumar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Professional Summary */}
            <div>
              <h2
                className={`text-sm font-extrabold tracking-wider uppercase mb-2 pb-1 border-b ${
                  isLight
                    ? 'text-slate-900 border-slate-300'
                    : 'text-cyan-400 border-slate-800'
                }`}
              >
                Professional Summary
              </h2>
              <p
                className={`text-xs sm:text-sm leading-relaxed text-justify ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                {personal.summary}
              </p>
            </div>

            {/* 3. Technical Skills */}
            <div>
              <h2
                className={`text-sm font-extrabold tracking-wider uppercase mb-3 pb-1 border-b ${
                  isLight
                    ? 'text-slate-900 border-slate-300'
                    : 'text-cyan-400 border-slate-800'
                }`}
              >
                Technical Skills
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                <div>
                  <span className="font-bold">Frontend: </span>
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    React.js, Redux, JavaScript, TypeScript, HTML5, CSS3, Material-UI (MUI), Tailwind CSS, Bootstrap
                  </span>
                </div>
                <div>
                  <span className="font-bold">React Expertise: </span>
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Hooks, Context API, React Flow, React Hook Form, Performance Optimization, Code Splitting
                  </span>
                </div>
                <div>
                  <span className="font-bold">Backend & Database: </span>
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Node.js, Python (FastAPI), REST API Integration, MongoDB, MySQL, Azure SQL, PostgreSQL
                  </span>
                </div>
                <div>
                  <span className="font-bold">Tools & Platforms: </span>
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Git, Postman, Swagger, Jira, VS Code, Agile/Scrum, Azure, JMeter, SFTP (Secure Deployment)
                  </span>
                </div>
                <div>
                  <span className="font-bold">AI Tools: </span>
                  <span className={isLight ? 'text-slate-700' : 'text-slate-300'}>
                    Claude AI, ChatGPT, Perplexity AI, Blackbox AI, Google Antigravity
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Professional Experience */}
            <div>
              <h2
                className={`text-sm font-extrabold tracking-wider uppercase mb-4 pb-1 border-b ${
                  isLight
                    ? 'text-slate-900 border-slate-300'
                    : 'text-cyan-400 border-slate-800'
                }`}
              >
                Professional Experience
              </h2>
              <div className="space-y-5">
                {/* Bizmetric */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                    <span className={isLight ? 'text-slate-900' : 'text-white'}>
                      Software Engineer | BIZMETRIC India Private Limited
                    </span>
                    <span className={isLight ? 'text-slate-600' : 'text-slate-400 font-medium'}>
                      Madurai, India | Feb 2026 – Present
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <li>
                      Architecting scalable web applications and high-performance RESTful APIs using React.js, FastAPI, Node.js, and TypeScript.
                    </li>
                    <li>
                      Engineering modular, configuration-driven product components designed for rapid adaptability and multi-tenant customization.
                    </li>
                    <li>
                      Managing complex relational and NoSQL database schemas across PostgreSQL, MySQL, and MongoDB with strict integrity checks.
                    </li>
                    <li>
                      Leveraging modern AI engineering tools (Claude AI, Antigravity) to accelerate product development cycles and code quality.
                    </li>
                  </ul>
                </div>

                {/* BA Product */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                    <span className={isLight ? 'text-slate-900' : 'text-white'}>
                      Associate Software Engineer | BA Product and System India Private Limited
                    </span>
                    <span className={isLight ? 'text-slate-600' : 'text-slate-400 font-medium'}>
                      Coimbatore, India | September 2024 – Feb 2026
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <li>
                      Engineered a drag-and-drop workflow designer using React.js and React Flow with full CRUD capabilities and undo/redo history tracking.
                    </li>
                    <li>
                      Built a reusable workflow pattern library, decreasing duplicate code by 60% and accelerating feature development.
                    </li>
                    <li>
                      Connected backend APIs with optimistic rendering and automatic rollback logic, maintaining 95%+ system availability serving 500+ active users.
                    </li>
                    <li>
                      Implemented type safety practices across modules, reducing runtime errors by 35% and improving maintainability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Key Projects */}
            <div>
              <h2
                className={`text-sm font-extrabold tracking-wider uppercase mb-4 pb-1 border-b ${
                  isLight
                    ? 'text-slate-900 border-slate-300'
                    : 'text-cyan-400 border-slate-800'
                }`}
              >
                Key Projects
              </h2>

              <div className="space-y-4">
                {/* 1. Interactive Process Designer */}
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Interactive Process Designer
                  </div>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <li>
                      Engineered a drag-and-drop workflow designer with full CRUD capabilities and undo/redo history tracking.
                    </li>
                    <li>
                      Established permission-based access system with view-only, editing, and sharing access levels.
                    </li>
                    <li>
                      Designed workflow export/import functionality with JSON schema validation for data persistence and version tracking.
                    </li>
                    <li>
                      Built a reusable workflow pattern library, decreasing duplicate code by 60% and accelerating feature development.
                    </li>
                    <li>
                      Connected backend APIs with optimistic rendering and automatic rollback logic for consistent data state.
                    </li>
                    <li>
                      Maintained 95%+ system availability serving 500+ active users managing complex business process automations.
                    </li>
                  </ul>
                </div>

                {/* 2. Configuration-Driven Enterprise Platform */}
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Configuration-Driven Enterprise Platform
                  </div>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <li>
                      Developed and maintained a configuration-driven enterprise platform enabling dynamic management of application modules, workflows, forms, business rules, and system-level configurations.
                    </li>
                    <li>
                      Built full-stack solution with focus on reusable, scalable, configurable components.
                    </li>
                    <li>
                      Implemented dynamic UI configurations, API integrations, database operations, validation logic, and workflow-based functionalities to support flexible business requirements.
                    </li>
                  </ul>
                </div>

                {/* 3. Applicant Screening & Evaluation System */}
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Applicant Screening & Evaluation System
                  </div>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <li>
                      Engineered a progressive form wizard for skill requirements input and multi-document uploads.
                    </li>
                    <li>
                      Built drag-and-drop upload interface with real-time file validation (PDF, DOC, DOCX).
                    </li>
                    <li>
                      Designed evaluation dashboard with applicant rankings, compatibility scores, and dynamic filtering.
                    </li>
                    <li>
                      Implemented automated email workflow with customizable templates for candidate communication and scheduling.
                    </li>
                    <li>
                      Decreased hiring team's screening effort by 70% through automated matching algorithms and intelligent scoring.
                    </li>
                    <li>
                      Implemented type safety practices, reducing runtime errors by 35% and improving maintainability.
                    </li>
                  </ul>
                </div>

                {/* 4. Enterprise Management Platform */}
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Enterprise Management Platform
                  </div>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <li>
                      Built a centralized web application to streamline business processes and manage core organizational operations. Worked extensively on database management, data processing, and business logic implementation.
                    </li>
                    <li>
                      Implemented dynamic forms, role-based access, workflow-driven processes, validations, reporting features, and API integrations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Education */}
            <div>
              <h2
                className={`text-sm font-extrabold tracking-wider uppercase mb-3 pb-1 border-b ${
                  isLight
                    ? 'text-slate-900 border-slate-300'
                    : 'text-cyan-400 border-slate-800'
                }`}
              >
                Education
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Master of Computer Applications (MCA) | Alagappa University
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    7.9 CGPA | 2024 – 2026 (Distance Education)
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white">
                    Bachelor of Science in Computer Science | Thiagarajar College
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    8 CGPA | 2021 – 2024 (Full Time)
                  </span>
                </div>
              </div>
            </div>

            {/* 7. Certifications */}
            <div>
              <h2
                className={`text-sm font-extrabold tracking-wider uppercase mb-3 pb-1 border-b ${
                  isLight
                    ? 'text-slate-900 border-slate-300'
                    : 'text-cyan-400 border-slate-800'
                }`}
              >
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li>
                  <span className="font-semibold">Oracle Database SQL Certified Associate</span> – Oracle (July 2023)
                </li>
                <li>
                  <span className="font-semibold">Schema Design Optimization</span> – MongoDB (Nov 2025 | ID: MDB7m73i11el8)
                </li>
                <li>
                  <span className="font-semibold">Relational to Document Model</span> – MongoDB (Nov 2025)
                </li>
                <li>
                  <span className="font-semibold">JMeter - Performance Testing</span> – SimpliLearn (July 2025)
                </li>
                <li>
                  <span className="font-semibold">Academic Process Mining Fundamental</span> – Celonis (July 2023)
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer actions (hidden in print) */}
          <div
            className={`px-6 py-4 border-t flex items-center justify-between text-xs no-print ${
              isLight
                ? 'bg-slate-50 border-slate-200 text-slate-500'
                : 'bg-slate-900/90 border-slate-800 text-slate-400'
            }`}
          >
            <span>Tip: Use the "Print / Save PDF" button to download this formatted resume.</span>
            <button
              onClick={onClose}
              className="font-bold text-cyan-500 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
