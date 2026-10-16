import React, { useState } from 'react';
import { Play, RotateCcw, RotateCw, Plus, Cpu, RefreshCw } from 'lucide-react';

const INITIAL_NODES = [
  { id: '1', title: 'Intake Wizard', type: 'Trigger', tech: 'React Hook Form', status: 'idle', color: 'from-blue-500 to-cyan-500' },
  { id: '2', title: 'Schema Validator', type: 'Validation', tech: 'JSON Schema / Zod', status: 'idle', color: 'from-cyan-500 to-teal-500' },
  { id: '3', title: 'FastAPI Dispatcher', type: 'Backend REST', tech: 'Python FastAPI', status: 'idle', color: 'from-indigo-500 to-purple-500' },
  { id: '4', title: 'Multi-DB Persistence', type: 'Storage', tech: 'PostgreSQL & Mongo', status: 'idle', color: 'from-emerald-500 to-teal-600' },
  { id: '5', title: 'Automated Score Engine', type: 'Evaluation', tech: 'Matching Algorithm', status: 'idle', color: 'from-amber-500 to-orange-500' },
];

export default function WorkflowSimulator() {
  const [nodes, setNodes] = useState(INITIAL_NODES);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [history, setHistory] = useState([INITIAL_NODES]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [simulateRollback, setSimulateRollback] = useState(false);
  const [logs, setLogs] = useState([
    'System ready. Architecture based on Interactive Process Designer.',
    'Serving 500+ users with optimistic UI updates and undo/redo history.',
  ]);

  const addLog = (msg) => {
    setLogs((prev) => [msg, ...prev.slice(0, 5)]);
  };

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    addLog(`🚀 Starting pipeline simulation (${nodes.length} nodes active)...`);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (simulateRollback && current === 2) {
        // Trigger simulated rollback
        clearInterval(interval);
        setActiveStep(2);
        addLog('⚠️ API network timeout at Node 3! Triggering automatic rollback logic...');
        setTimeout(() => {
          addLog('↺ Optimistic state successfully rolled back. Database consistency preserved.');
          setIsRunning(false);
          setActiveStep(-1);
        }, 1200);
        return;
      }

      if (current < nodes.length) {
        setActiveStep(current);
        addLog(`✓ Node [${nodes[current].title}] passed payload successfully (${(Math.random() * 20 + 5).toFixed(1)}ms).`);
      } else {
        clearInterval(interval);
        addLog('✨ Pipeline completed successfully with 100% data integrity!');
        setTimeout(() => {
          setIsRunning(false);
          setActiveStep(-1);
        }, 1500);
      }
    }, 700);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIdx = historyIndex - 1;
      setHistoryIndex(newIdx);
      setNodes(history[newIdx]);
      addLog(`↺ Undo triggered (State #${newIdx + 1})`);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIdx = historyIndex + 1;
      setHistoryIndex(newIdx);
      setNodes(history[newIdx]);
      addLog(`↻ Redo triggered (State #${newIdx + 1})`);
    }
  };

  const addCustomNode = () => {
    const newNode = {
      id: String(Date.now()),
      title: `Custom Hook ${nodes.length + 1}`,
      type: 'Dynamic Module',
      tech: 'Config-Driven Component',
      status: 'idle',
      color: 'from-pink-500 to-rose-500',
    };
    const updated = [...nodes, newNode];
    const newHistory = [...history.slice(0, historyIndex + 1), updated];
    setNodes(updated);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    addLog(`+ Added custom node: [${newNode.title}] to runtime canvas.`);
  };

  const resetPipeline = () => {
    setNodes(INITIAL_NODES);
    setHistory([INITIAL_NODES]);
    setHistoryIndex(0);
    setActiveStep(-1);
    setIsRunning(false);
    addLog('Reset pipeline to default initial state.');
  };

  return (
    <div className="rounded-3xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background neon glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Live Architecture Showcase
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            Interactive Workflow & Process Engine
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Demonstrating React Flow canvas concepts, undo/redo state tracking, and optimistic rollbacks.
          </p>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              isRunning
                ? 'bg-cyan-500/30 text-cyan-200 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20'
            }`}
          >
            {isRunning ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
            <span>{isRunning ? 'Executing...' : 'Run Simulation'}</span>
          </button>

          <button
            onClick={handleUndo}
            disabled={historyIndex === 0 || isRunning}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
            title="Undo State Change"
          >
            <RotateCcw size={15} />
          </button>

          <button
            onClick={handleRedo}
            disabled={historyIndex >= history.length - 1 || isRunning}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 transition-colors"
            title="Redo State Change"
          >
            <RotateCw size={15} />
          </button>

          <button
            onClick={addCustomNode}
            disabled={nodes.length >= 7 || isRunning}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-cyan-300 hover:bg-slate-700 border border-slate-700 flex items-center gap-1 transition-colors"
            title="Add Custom Dynamic Node"
          >
            <Plus size={14} />
            <span>Add Node</span>
          </button>

          <button
            onClick={resetPipeline}
            className="px-2.5 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800"
            title="Reset Canvas"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Simulated Canvas with Connected Nodes */}
      <div className="py-8 overflow-x-auto">
        <div className="flex items-center gap-3 min-w-[700px] justify-between relative py-4 px-2">
          
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-800 -translate-y-1/2 -z-0">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-500"
              style={{
                width: activeStep >= 0 ? `${(activeStep / (nodes.length - 1)) * 100}%` : '0%',
              }}
            />
          </div>

          {nodes.map((node, idx) => {
            const isCurrent = activeStep === idx;
            const isPast = activeStep > idx;

            return (
              <div
                key={node.id}
                className={`relative z-10 flex-1 max-w-[150px] p-3.5 rounded-2xl border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-slate-900 border-cyan-400 ring-4 ring-cyan-400/20 scale-105 shadow-lg shadow-cyan-500/20'
                    : isPast
                    ? 'bg-slate-900 border-emerald-500/60 shadow-sm'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Status Dot */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    0{idx + 1}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isCurrent
                        ? 'bg-cyan-400 animate-ping'
                        : isPast
                        ? 'bg-emerald-400'
                        : 'bg-slate-600'
                    }`}
                  />
                </div>

                <div className="text-xs font-bold tracking-tight text-white truncate">
                  {node.title}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {node.type}
                </div>
                <div className="mt-2 text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 truncate font-mono border border-slate-700/60">
                  {node.tech}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Execution Telemetry Console (Full Width) */}
      <div className="pt-4 border-t border-slate-800">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-[11px] flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-800 text-slate-400 text-xs">
              <span className="flex items-center gap-1.5">
                <Cpu size={13} className="text-indigo-400" />
                Pipeline Telemetry Logs
              </span>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer text-slate-300 text-xs font-sans">
                  <input
                    type="checkbox"
                    checked={simulateRollback}
                    onChange={(e) => setSimulateRollback(e.target.checked)}
                    className="rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-0"
                  />
                  <span>Simulate API Error & Rollback</span>
                </label>
                <span className="text-[10px] text-emerald-400 hidden sm:inline">● 95%+ High Availability</span>
              </div>
            </div>

            <div className="space-y-1.5 text-slate-300 min-h-[75px]">
              {logs.map((log, lIdx) => (
                <div key={lIdx} className="leading-relaxed truncate">
                  <span className="text-slate-500 mr-2">&gt;</span>
                  <span className={lIdx === 0 ? 'text-cyan-300 font-medium' : 'text-slate-400'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2.5 mt-2 border-t border-slate-800/80 text-[10px] text-slate-500 flex justify-between items-center">
            <span>Redux State History: {historyIndex + 1}/{history.length}</span>
            <span className="text-slate-400">60% Code Duplication Reduced</span>
          </div>
        </div>
      </div>
    </div>
  );
}
