import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function DevTerminal({ onOpenResume }) {
  const { personal } = resumeData;
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', text: 'Welcome to Vijayalakshmi S — Interactive Dev Console v2.1' },
    { type: 'system', text: 'Type "help" to see available commands or click the shortcut chips below.' },
  ]);
  const endRef = useRef(null);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newOutput = [...output, { type: 'input', text: `> ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newOutput.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  relocate  - View Chennai relocation status & preferred tech parks
  skills    - List core frontend, backend, database & AI skills
  projects  - Inspect top enterprise workflow projects & metrics
  exp       - View work history (BIZMETRIC & BA Product and System)
  contact   - Get direct phone, email, and LinkedIn details
  resume    - Launch interactive ATS & modern printable resume
  stats     - View key production metrics (uptime, user count, etc.)
  clear     - Clear the terminal screen`,
        });
        break;

      case 'relocate':
      case 'chennai':
      case 'location':
        newOutput.push({
          type: 'response',
          text: `LOCATION & RELOCATION STATUS:
  Current Base:     Madurai, Tamil Nadu, India
  Target Location:  CHENNAI, TAMIL NADU (Primary Preferred)
  Relocation:       Immediate / 100% Ready
  Work Mode:        On-Site, Hybrid, or Remote`,
        });
        break;

      case 'skills':
        newOutput.push({
          type: 'response',
          text: `TECHNICAL SKILLS:
  Frontend:   React.js, TypeScript, JavaScript (ES6+), Redux, Tailwind CSS, MUI
  Workflows:  React Flow, React Hook Form, Dynamic Component Architecture
  Backend:    Python (FastAPI), Node.js, RESTful API Design, JSON Schema
  Databases:  MongoDB, MySQL, PostgreSQL, Azure SQL (Schema Optimization)
  Tools & AI: Git, Postman, JMeter, Azure, Claude AI, Google Antigravity`,
        });
        break;

      case 'projects':
        newOutput.push({
          type: 'response',
          text: `KEY ENTERPRISE PROJECTS:
  1. Interactive Process Designer:
     Drag-and-drop React Flow designer with undo/redo, 500+ users, -60% code duplication.
  2. Configuration-Driven Enterprise Platform:
     Runtime module & form configuration engine with multi-database persistence.
  3. Applicant Screening & Evaluation System:
     Progressive form wizard, -70% screening effort, -35% runtime errors.
  4. Enterprise Management Platform:
     Centralized operational system with RBAC and real-time business reports.`,
        });
        break;

      case 'exp':
      case 'experience':
        newOutput.push({
          type: 'response',
          text: `EXPERIENCE TIMELINE:
  • Software Engineer @ BIZMETRIC India Private Limited
    Madurai, India | Feb 2026 – Present
    Full-stack architecture, FastAPI/Node.js, PostgreSQL/MongoDB, AI workflows.
  • Associate Software Engineer @ BA Product and System India Private Limited
    Coimbatore, India | Sept 2024 – Feb 2026
    React Flow drag-and-drop designer, 60% code reduction, 95%+ uptime for 500+ users.
  • Software Testing Intern @ ASTRO Web Solution
    Madurai, India | May 2024 – July 2024`,
        });
        break;

      case 'contact':
        newOutput.push({
          type: 'response',
          text: `CONTACT INFORMATION:
  Email:    ${personal.email}
  Phone:    ${personal.phone}
  LinkedIn: ${personal.linkedin}
  Location: Madurai (Relocating to Chennai, India)`,
        });
        break;

      case 'resume':
        if (onOpenResume) onOpenResume();
        newOutput.push({
          type: 'response',
          text: '✓ Opening Interactive ATS & Modern Printable Resume Modal...',
        });
        break;

      case 'stats':
        newOutput.push({
          type: 'response',
          text: `PRODUCTION METRICS:
  • Experience: 2.1+ Years
  • System Uptime: 95%+ High Availability
  • Daily Active Users: 500+ Users
  • Duplicate Code Reduced: -60% via reusable patterns
  • Hiring Screening Effort: -70% automated matching`,
        });
        break;

      case 'clear':
        setOutput([]);
        setInput('');
        return;

      default:
        newOutput.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`,
        });
        break;
    }

    setOutput(newOutput);
    setInput('');
  };

  useEffect(() => {
    if (endRef.current && typeof endRef.current.scrollIntoView === 'function') {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="rounded-3xl bg-[#090d16] border border-slate-800 p-5 sm:p-6 shadow-2xl flex flex-col h-[400px]">
      {/* Terminal Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">
            vijayalakshmi@dev-terminal:~
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-mono">
          <Terminal size={13} />
          <span>Interactive Shell</span>
        </div>
      </div>

      {/* Output Stream */}
      <div className="flex-1 overflow-y-auto space-y-2 font-mono text-xs pr-2 select-text">
        {output.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line.type === 'input' && (
              <span className="text-cyan-400 font-bold">{line.text}</span>
            )}
            {line.type === 'system' && (
              <span className="text-slate-500">{line.text}</span>
            )}
            {line.type === 'response' && (
              <pre className="text-slate-300 font-mono whitespace-pre-wrap">{line.text}</pre>
            )}
            {line.type === 'error' && (
              <span className="text-rose-400">{line.text}</span>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Suggested Quick Commands */}
      <div className="pt-2 pb-2 flex flex-wrap gap-1.5 text-[11px] font-mono border-t border-slate-800/80">
        <span className="text-slate-500 py-0.5">Quick run:</span>
        {['relocate', 'skills', 'projects', 'resume', 'contact'].map((c) => (
          <button
            key={c}
            onClick={() => executeCommand(c)}
            className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 transition-colors"
          >
            {c}
          </button>
        ))}
      </div>

      {/* Input Prompt */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2 border-t border-slate-800">
        <span className="text-cyan-400 font-mono font-bold">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'relocate', 'skills', 'projects'..."
          className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder-slate-600"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 transition-colors"
          title="Execute"
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}
