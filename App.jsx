import React, { useState, useEffect } from 'react';
import {
  Terminal, Search, Database, User, Shield, ExternalLink,
  CheckCircle2, Circle, Flame, Target, BookOpen, Layers,
  Cpu, ArrowRight, Clock, Award, Code2, Server, Cloud,
  ChevronRight, RefreshCw, BarChart2, Check, AlertCircle, Copy
} from 'lucide-react';

function PersistenceLogo({ className = "w-10 h-10" }) {
  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-slate-900 border border-cyan-500/30 overflow-hidden shadow-lg shadow-cyan-950/50 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="starGlow" cx="36%" cy="20%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="25%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="silhouetteGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
        </defs>

        <circle cx="36" cy="20" r="16" fill="url(#starGlow)" />
        <circle cx="36" cy="20" r="3.5" fill="#ffffff" />
        <line x1="36" y1="6" x2="36" y2="34" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="22" y1="20" x2="50" y2="20" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="10" x2="46" y2="30" stroke="#7dd3fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
        <line x1="46" y1="10" x2="26" y2="30" stroke="#7dd3fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />

        <circle cx="48" cy="32" r="5" stroke="#38bdf8" strokeWidth="0.5" opacity="0.25" />
        <circle cx="58" cy="42" r="8" stroke="#38bdf8" strokeWidth="0.5" opacity="0.15" />

        <ellipse cx="48" cy="62" rx="4.5" ry="5.5" fill="url(#silhouetteGrad)" stroke="#38bdf8" strokeWidth="0.8" />
        <path d="M 46 67 Q 48 70 50 72 L 44 76" stroke="#38bdf8" strokeWidth="0.8" fill="none" />
        
        <path d="M 43 72 Q 35 78 34 98 L 62 98 Q 61 78 53 72 Z" fill="url(#silhouetteGrad)" stroke="#38bdf8" strokeWidth="0.8" />
        
        <path d="M 44 72 Q 40 60 38 46" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 44 72 Q 40 60 38 46" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" fill="none" />

        <line x1="38" y1="46" x2="35" y2="43" stroke="#7dd3fc" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="38" y1="46" x2="36.5" y2="42" stroke="#7dd3fc" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="38" y1="46" x2="38" y2="41.5" stroke="#7dd3fc" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="38" y1="46" x2="39.5" y2="42" stroke="#7dd3fc" strokeWidth="0.9" strokeLinecap="round" />
        <line x1="38" y1="46" x2="41" y2="43" stroke="#7dd3fc" strokeWidth="0.9" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const INITIAL_PROBLEMS = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', company: 'Google', pattern: 'Hash Map', solved: true, url: 'https://leetcode.com/problems/two-sum/' },
  { id: 2, title: 'LRU Cache', difficulty: 'Medium', company: 'Google', pattern: 'Design / Doubly Linked List', solved: false, url: 'https://leetcode.com/problems/lru-cache/' },
  { id: 3, title: 'Trapping Rain Water', difficulty: 'Hard', company: 'Google', pattern: 'Two Pointers / Stack', solved: false, url: 'https://leetcode.com/problems/trapping-rain-water/' },
  { id: 4, title: 'Valid Parentheses', difficulty: 'Easy', company: 'Meta', pattern: 'Stack', solved: true, url: 'https://leetcode.com/problems/valid-parentheses/' },
  { id: 5, title: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', company: 'Meta', pattern: 'DFS / Trees', solved: false, url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
  { id: 6, title: 'Merge k Sorted Lists', difficulty: 'Hard', company: 'Amazon', pattern: 'Min-Heap / PriorityQueue', solved: false, url: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
  { id: 7, title: 'Course Schedule II', difficulty: 'Medium', company: 'Amazon', pattern: 'Topological Sort / Graphs', solved: false, url: 'https://leetcode.com/problems/course-schedule-ii/' },
  { id: 8, title: 'Subarray Sum Equals K', difficulty: 'Medium', company: 'Microsoft', pattern: 'Prefix Sum + Hash Map', solved: true, url: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
  { id: 9, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', company: 'Microsoft', pattern: 'Binary Search', solved: false, url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' }
];

const COMPREHENSIVE_ROUNDS = [
  {
    company: 'Uber',
    type: 'System Design / High Concurrency',
    title: 'Distributed Ride Matching & Geospatial Dispatches',
    scope: 'Handle 100k driver coordinate pings/sec with sub-second driver dispatch routing and zero stale state.',
    architecture: 'Spatial H3 Hexagonal Cell Indexing + Redis Geospatial Pub/Sub + Distributed Kafka Partitioning by GeoHash.',
    ambiguityPoints: [
      'What is the maximum driver heartbeat ping interval before marking offline?',
      'Are riders matched strictly by linear proximity or ETA using real-time road topology?',
      'How do we handle network partitions during driver dispatch lock acquisition?'
    ]
  },
  {
    company: 'Stripe',
    type: 'Idempotency & Data Invariants',
    title: 'Double-Entry Core Financial Payment Ingestion',
    scope: 'Process credit card authorizations with absolute zero-double charge guarantees under network retries.',
    architecture: 'Idempotency-Key hashing at API Gateway + PostgreSQL SERIALIZABLE transaction ledgers with balance check constraints.',
    ambiguityPoints: [
      'What is the TTL on unique idempotency keys?',
      'How are in-flight concurrent requests with the identical idempotency key handled?',
      'How does the system reconcile out-of-order charge and refund webhook events?'
    ]
  },
  {
    company: 'OpenAI',
    type: 'High Throughput & GPU Inference',
    title: 'Streaming LLM Gateway with PagedAttention KV-Cache',
    scope: 'Manage continuous batching across GPU clusters with token-per-minute sliding rate limits.',
    architecture: 'SSE (Server-Sent Events) Gateway + Redis Token Bucket Quotas + Paged KV-Cache Router across vLLM nodes.',
    ambiguityPoints: [
      'Is rate-limiting calculated against prompt tokens or prompt + max_completion tokens?',
      'How are backpressure and cancelled client SSE streams handled at the model server?',
      'What fallback strategy executes when GPU node VRAM exhausts PagedAttention slots?'
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dsa');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [problems, setProblems] = useState(() => {
    const saved = localStorage.getItem('with_persistance_problems');
    return saved ? JSON.parse(saved) : INITIAL_PROBLEMS;
  });

  useEffect(() => {
    localStorage.setItem('with_persistance_problems', JSON.stringify(problems));
  }, [problems]);

  const toggleSolved = (id) => {
    setProblems(prev => prev.map(p => p.id === id ? { ...p, solved: !p.solved } : p));
  };

  const filteredProblems = selectedCompany === 'All' 
    ? problems 
    : problems.filter(p => p.company === selectedCompany);

  const solvedCount = problems.filter(p => p.solved).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <PersistenceLogo className="w-10 h-10" />
            <div>
              <span className="font-black text-lg tracking-wider text-white">WITH</span>
              <span className="font-black text-lg tracking-wider bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">_PERSISTANCE</span>
              <span className="ml-2 text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">PROD</span>
            </div>
          </div>

          <nav className="flex space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('dsa')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition flex items-center space-x-2 ${
                activeTab === 'dsa' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>DSA Tracker</span>
            </button>
            <button
              onClick={() => setActiveTab('comprehensive')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition flex items-center space-x-2 ${
                activeTab === 'comprehensive' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Comprehensive Rounds</span>
            </button>
            <button
              onClick={() => setActiveTab('database')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition flex items-center space-x-2 ${
                activeTab === 'database' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Database Engine</span>
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition flex items-center space-x-2 ${
                activeTab === 'profile' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Candidate Profile</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        {/* Banner */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-2">
              Continuous Technical Mastery
              <span className="text-xs bg-slate-800 text-slate-400 border border-slate-700 px-2 py-0.5 rounded-full font-mono">v1.0.0</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Curated company-wise interview problems, distributed system architectures, and live tracking.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
            <div className="text-center px-3 border-r border-slate-800">
              <div className="text-xl font-bold text-cyan-400">{solvedCount}/{problems.length}</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Solved</div>
            </div>
            <div className="text-center px-3">
              <div className="text-xl font-bold text-indigo-400">120 GB</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Active DB</div>
            </div>
          </div>
        </div>

        {/* Tab 1: DSA Tracker */}
        {activeTab === 'dsa' && (
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex gap-2">
                {['All', 'Google', 'Meta', 'Amazon', 'Microsoft'].map(company => (
                  <button
                    key={company}
                    onClick={() => setSelectedCompany(company)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition ${
                      selectedCompany === company
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {company}
                  </button>
                ))}
              </div>
              <div className="text-xs text-slate-400">
                Showing {filteredProblems.length} targeted problems
              </div>
            </div>

            <div className="grid gap-3">
              {filteredProblems.map(item => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition flex items-center justify-between gap-4"
                >
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => toggleSolved(item.id)}
                      className={`w-6 h-6 rounded flex items-center justify-center transition border ${
                        item.solved ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'border-slate-700 hover:border-slate-500 text-transparent'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${item.solved ? 'line-through text-slate-500' : 'text-slate-100'}`}>
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                          {item.company}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">Pattern: {item.pattern}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                      item.difficulty === 'Easy' ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' :
                      item.difficulty === 'Medium' ? 'bg-amber-950/60 text-amber-400 border-amber-800' :
                      'bg-rose-950/60 text-rose-400 border-rose-800'
                    }`}>
                      {item.difficulty}
                    </span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Comprehensive Rounds */}
        {activeTab === 'comprehensive' && (
          <div className="space-y-6">
            <div className="text-sm text-slate-400">
              In-depth production system interview architectures transitioning away from simple coding loops toward complete system robustness.
            </div>
            <div className="grid gap-6">
              {COMPREHENSIVE_ROUNDS.map((round, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">{round.company} &bull; {round.type}</span>
                      <h2 className="text-lg font-bold text-white mt-1">{round.title}</h2>
                    </div>
                  </div>
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
                    <div><strong className="text-slate-300">Production Scope:</strong> <span className="text-slate-400">{round.scope}</span></div>
                    <div><strong className="text-slate-300">Target Architecture:</strong> <span className="text-cyan-300 font-mono">{round.architecture}</span></div>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Ambiguity & Verification Checklist</h3>
                    <ul className="space-y-1.5">
                      {round.ambiguityPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-400 flex items-start gap-2">
                          <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Database Engine */}
        {activeTab === 'database' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <h2 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-cyan-400" />
                Storage Pool & PostgreSQL Schema Architecture
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Active dynamically allocated pool: <strong>120 GB</strong> reserved from available 5TB storage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">Allocated Disk</div>
                  <div className="text-xl font-bold text-cyan-400 mt-1">120.00 GB</div>
                  <div className="text-[10px] text-emerald-400 mt-1">4.88 TB Safe Headroom</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">Relational Nodes</div>
                  <div className="text-xl font-bold text-indigo-400 mt-1">3 Active (HA)</div>
                  <div className="text-[10px] text-slate-400 mt-1">Primary + 2 Read Replicas</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">P99 Query Latency</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">4.2 ms</div>
                  <div className="text-[10px] text-slate-400 mt-1">Connection Pooling Enabled</div>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-2">// DDL Sample for Candidate Solved Ledger</div>
                <pre className="text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
{`CREATE TABLE candidate_solved_records (
    record_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_handle VARCHAR(64) NOT NULL,
    problem_id INT NOT NULL,
    company_slug VARCHAR(32) NOT NULL,
    execution_time_ms NUMERIC(6,2),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT unique_user_problem UNIQUE (user_handle, problem_id)
);`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Profile */}
        {activeTab === 'profile' && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-2xl mx-auto space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center font-bold text-xl text-white">
                AG
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Avinash Gidijala</h2>
                <p className="text-xs text-slate-400">Computer Science & Engineering &bull; Software Track</p>
                <div className="flex gap-2 mt-2">
                  <span className="text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-800 px-2 py-0.5 rounded font-mono">
                    github: avinashgidijala
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">Total Solved</div>
                <div className="text-lg font-bold text-white mt-1">{solvedCount}</div>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="text-xs text-slate-400">Target Track</div>
                <div className="text-lg font-bold text-cyan-400 mt-1">Full-Stack / Core SWE</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-4 text-center text-xs text-slate-500">
        WITH_PERSISTANCE &bull; Aim High &bull; Ready for Production
      </footer>
    </div>
  );
}
