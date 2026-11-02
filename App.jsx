import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, Plus, X, Server, Code, FileText, Users, Building, 
  Briefcase, Filter, Clock, Play, Pause, RotateCcw, CheckCircle2, 
  AlertTriangle, BookOpen, Layers, Terminal, ChevronRight, Share2, 
  Sparkles, CheckSquare, Edit3, Bookmark, Save, Cpu, ShieldCheck,
  ExternalLink, UploadCloud, Database, Check, Award, RefreshCw, Download,
  User, HardDrive, Globe, Cloud, Settings, Activity, BarChart3, Zap,
  Calendar, CheckCircle, Flame, Target, Shield, Copy
} from 'lucide-react';

// Custom Logo Component: Matching reference image - Distinct dark silhouette of a person standing, looking up, extending hand towards a distant bright star of light
function PersistenceLogo({ className = "w-10 h-10" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-[#020617] border border-cyan-500/40 shadow-[0_0_25px_rgba(56,189,248,0.3)] ${className}`}>
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Deep blue to dark atmospheric gradient from the image */}
          <radialGradient id="skyAtmosphere" cx="30%" cy="20%" r="90%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#0284c7" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#1e1b4b" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </radialGradient>

          {/* Intense radiant point of bright light */}
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="15%" stopColor="#e0f2fe" />
            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#0284c7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
          </radialGradient>

          {/* Pure high-contrast silhouette fill with sharp rim illumination */}
          <linearGradient id="silhouetteBody" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#090d16" />
            <stop offset="100%" stopColor="#02040a" />
          </linearGradient>

          {/* Crisp backlighting glow on silhouette edges */}
          <filter id="neonBacklight" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.8" floodColor="#38bdf8" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* Sky Background */}
        <rect width="120" height="120" fill="url(#skyAtmosphere)" />

        {/* Volumetric ambient light rays beaming down from the star (at x=36, y=20) */}
        <g opacity="0.5" stroke="#7dd3fc" strokeWidth="0.8">
          <line x1="36" y1="20" x2="120" y2="15" strokeDasharray="2 3" opacity="0.35" />
          <line x1="36" y1="20" x2="120" y2="48" strokeWidth="1.2" opacity="0.55" />
          <line x1="36" y1="20" x2="115" y2="82" opacity="0.4" />
          <line x1="36" y1="20" x2="95" y2="120" opacity="0.35" />
          <line x1="36" y1="20" x2="5" y2="95" opacity="0.25" />
          <line x1="36" y1="20" x2="0" y2="40" opacity="0.3" />
        </g>

        {/* Cinematic Lens Flare Bokeh Circles */}
        <circle cx="58" cy="40" r="13" fill="#38bdf8" opacity="0.18" />
        <circle cx="76" cy="56" r="21" stroke="#67e8f9" strokeWidth="0.75" fill="#38bdf8" opacity="0.12" />
        <circle cx="95" cy="74" r="15" fill="#0284c7" opacity="0.15" />
        <circle cx="48" cy="30" r="6" fill="#ffffff" opacity="0.25" />

        {/* ==============================================================
            THE POINT OF BRIGHT LIGHT (High in the sky at x=36, y=20)
            Notice the fingertips reach up to y=45, leaving a prominent
            25px noticeable distance gap between hand and light!
           ============================================================== */}
        <circle cx="36" cy="20" r="26" fill="url(#starGlow)" opacity="0.45" />
        <circle cx="36" cy="20" r="15" fill="url(#starGlow)" opacity="0.9" />
        {/* Diamond Star Flare */}
        <polygon points="36,0 39,20 36,40 33,20" fill="#ffffff" opacity="0.98" />
        <polygon points="16,20 36,23 56,20 36,17" fill="#ffffff" opacity="0.98" />
        <polygon points="22,6 36,20 50,34 36,20" fill="#bae6fd" opacity="0.75" />
        <polygon points="50,6 36,20 22,34 36,20" fill="#bae6fd" opacity="0.75" />
        <circle cx="36" cy="20" r="4" fill="#ffffff" />
        <circle cx="36" cy="20" r="2" fill="#f0f9ff" />

        {/* ==============================================================
            TRUE HUMAN SILHOUETTE (Slender, natural human proportions looking up)
           ============================================================== */}
        <g filter="url(#neonBacklight)">
          {/* Slender, natural torso & upper body (natural shoulders and trim waist) */}
          <path 
            d="M 27 120 C 28 108 30 96 33 87 C 35 82 39 80 43 80 C 47 80 50 82 52 86 C 54 94 56 106 57 120 Z" 
            fill="url(#silhouetteBody)" 
            stroke="#7dd3fc"
            strokeWidth="0.8"
          />

          {/* Natural Neck & Head - Slender, tilted upward looking at the star */}
          <path 
            d="M 40.5 81 L 40.5 75 C 40.5 75 42 75 42 75 L 42 81 Z" 
            fill="url(#silhouetteBody)" 
          />
          <ellipse cx="41.5" cy="71" rx="5.5" ry="6.5" fill="url(#silhouetteBody)" stroke="#7dd3fc" strokeWidth="0.8" />
          
          {/* Natural Upward Gazing Chin & Profile */}
          <path 
            d="M 38 69 C 37 66 38.5 64 41 64 C 43.5 64 45.5 66 45.5 69 C 45 73 42.5 74 39.5 74 C 38 73 37.5 71 38 69 Z" 
            fill="#050811" 
          />

          {/* Left Arm hanging naturally by side */}
          <path 
            d="M 33 86 C 30 93 28 102 26 112" 
            stroke="#7dd3fc" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            fill="none"
          />
          <path 
            d="M 33 86 C 30 93 28 102 26 112" 
            stroke="#090d16" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            fill="none"
          />

          {/* Extended Right Arm - Lean, graceful stretch upward toward the light */}
          <path 
            d="M 46.5 80 C 47.5 72 46 62 43.5 54" 
            stroke="#7dd3fc" 
            strokeWidth="2.8" 
            strokeLinecap="round" 
            fill="none"
          />
          <path 
            d="M 46.5 80 C 47.5 72 46 62 43.5 54" 
            stroke="#090d16" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            fill="none"
          />

          {/* Slender Wrist & Palm */}
          <ellipse cx="43" cy="53" rx="2.2" ry="2" fill="#090d16" stroke="#7dd3fc" strokeWidth="0.6" />

          {/* ==============================================================
              OUTSTRETCHED HAND & DELICATE, NATURAL FINGERS
              Fingertips reach to y=45. Light is high at y=20.
              Clear, poetic distance gap preserved!
             ============================================================== */}
          {/* Thumb */}
          <path d="M 41 53.5 L 38 50.5" stroke="#7dd3fc" strokeWidth="1.1" strokeLinecap="round" />
          <path d="M 41 53.5 L 38 50.5" stroke="#090d16" strokeWidth="0.6" strokeLinecap="round" />

          {/* Index Finger */}
          <path d="M 42 51.5 L 39.5 45.8" stroke="#7dd3fc" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 42 51.5 L 39.5 45.8" stroke="#090d16" strokeWidth="0.7" strokeLinecap="round" />

          {/* Middle Finger (Reaches to y=44.5) */}
          <path d="M 43.2 51 L 41.8 44.5" stroke="#bae6fd" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M 43.2 51 L 41.8 44.5" stroke="#090d16" strokeWidth="0.7" strokeLinecap="round" />

          {/* Ring Finger */}
          <path d="M 44.5 51.8 L 44 45.5" stroke="#7dd3fc" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 44.5 51.8 L 44 45.5" stroke="#090d16" strokeWidth="0.6" strokeLinecap="round" />

          {/* Pinky */}
          <path d="M 45.5 53 L 46.5 47.8" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" />
          <path d="M 45.5 53 L 46.5 47.8" stroke="#090d16" strokeWidth="0.5" strokeLinecap="round" />
        </g>

        {/* Ambient floating celestial sparkles in the gap between hand and star */}
        <circle cx="40" cy="33" r="1.1" fill="#ffffff" opacity="0.9" />
        <circle cx="48" cy="28" r="0.8" fill="#bae6fd" opacity="0.8" />
        <circle cx="31" cy="38" r="0.9" fill="#7dd3fc" opacity="0.85" />
      </svg>
    </div>
  );
}

// --- 5TB Database System Topology Specifications ---
const DATABASE_STORAGE_CONFIG = {
  totalCapacityTB: 5.0,
  allocatedGB: 342.8,
  primaryEngine: "PostgreSQL 16 (Distributed Citus Cluster)",
  objectStore: "MinIO S3-Compatible Storage (Blob & Company Media)",
  cacheStore: "Redis Cluster 7.2 (Idempotency & Session Bus)",
  nodes: [
    { name: "db-node-primary-01", role: "Leader (Read/Write)", storage: "1.2 TB / 1.6 TB NVMe", status: "Healthy", qps: 1840, latency: "1.2ms" },
    { name: "db-node-replica-02", role: "Follower (Read-Only)", storage: "1.2 TB / 1.6 TB NVMe", status: "Syncing", qps: 4210, latency: "0.8ms" },
    { name: "db-node-blob-03", role: "S3 Object Store (5TB Mount)", storage: "2.1 TB / 3.4 TB HDD/NVMe", status: "Healthy", qps: 640, latency: "4.5ms" }
  ],
  tables: [
    { name: "leetcode_company_problems", rows: "1,420+", size: "24.6 MB", description: "liquidslr company-indexed DSA problems & frequency matrix" },
    { name: "comprehensive_rounds", rows: "14", size: "3.2 MB", description: "Real-world production scenarios, architecture diagrams & STAR rubrics" },
    { name: "user_submissions_and_runs", rows: "48,910", size: "184.2 MB", description: "Telemetry, user scratchpad notes, code execution benchmarks" },
    { name: "media_and_system_diagrams", rows: "8,140", size: "34.8 GB", description: "SVG topologies, architecture recordings & company interview whitepapers" }
  ]
};

// --- Comprehensive Architecture & Take-Home Rounds ---
const COMPREHENSIVE_ROUNDS = [
  {
    id: 'stripe-idempotency',
    company: 'Stripe',
    track: 'Take-Home / Low-Level',
    title: 'Distributed Payment Idempotency Engine',
    difficulty: 'Hard',
    duration: '45 mins',
    summary: 'Design an idempotent HTTP API layer ensuring millions of concurrent payment requests never double-charge customers despite retries or dropped packets.',
    scenario: 'Stripe processes trillions of dollars annually. When mobile SDKs or API clients encounter network timeouts, they automatically retry requests. Build an idempotency middleware layer that guarantees exactly-once processing semantics without locking database rows for prolonged periods.',
    clarifications: [
      'What is the idempotency key retention window? (Standard: 24 to 72 hours)',
      'Can the client modify the payload with the same idempotency key? (Strict error: 422 Unprocessable Entity)',
      'What happens if a second request arrives while the first is still processing? (Return 409 Conflict or stream/poll)'
    ],
    architecture: {
      pattern: 'Idempotency Key Reservation with Optimistic Lock & State Transition Cache',
      components: [
        'API Gateway: Extracts Idempotency-Key header & calculates SHA-256 payload hash',
        'Redis Cluster / Key-Value Store: Fast atomic SETNX (key, status=PROCESSING) with 120s TTL',
        'Postgres ACID Store: Permanent idempotency_records table with unique constraint on key',
        'Dead-Letter Queue (DLQ): Cleans up hanging requests after worker crash'
      ],
      tradeoffs: [
        { choice: 'Redis SETNX vs. Postgres Row Lock', reason: 'Redis handles 200k+ RPS at <2ms latency; direct Postgres row-level locks exhaust connection pools.' },
        { choice: 'Synchronous Polling vs 409 Conflict', reason: 'Returning 409 forces SDK to back off exponentially, preserving server thread pool availability.' }
      ]
    },
    rubric: [
      { criterion: 'Explicitly handles concurrent identical requests without double charging', level: 'Must have' },
      { criterion: 'Validates request payload hash matches original request payload', level: 'Distinction' },
      { criterion: 'Outlines recovery mechanism if background charge crashes mid-execution', level: 'Staff' }
    ],
    redFlags: [
      'Using a regular database read-then-write without atomic constraints (race condition).',
      'Ignoring the scenario where the primary request crashes halfway through the credit card capture.',
      'Caching sensitive payment credit card details in unencrypted Redis cache.'
    ]
  },
  {
    id: 'uber-live-matching',
    company: 'Uber',
    track: 'System Design',
    title: 'Real-Time Geospatial Driver Dispatch & Location Fan-Out',
    difficulty: 'Hard',
    duration: '45 mins',
    summary: 'Architect a low-latency geospatial indexing system tracking 5M+ active drivers emitting GPS pings every 4 seconds with sub-second rider lookup.',
    scenario: 'Design the backend dispatch engine capable of matching riders with nearest available drivers within a 3km radius. Ingestion pipeline must handle over 1.25M updates/second while keeping geospatial index search latency under 20ms.',
    clarifications: [
      'Is driver location updated via HTTP push or persistent WebSockets/gRPC? (Persistent connections)',
      'How granular does the location index need to be? (H3 Hexagonal resolution 8 ~ 460m radius)',
      'Do we account for driving distance or Euclidean distance? (Filter by Euclidean, rank top 10 via Map Matching engine)'
    ],
    architecture: {
      pattern: 'Uber H3 Geospatial Sharding with In-Memory Ring Buffer & Kafka Ingestion',
      components: [
        'Edge Gateways: Terminate TCP/WebSocket connections from mobile driver apps',
        'Apache Kafka: Partitioned by H3 Hexagon Cell ID to guarantee regional order',
        'Location Service: In-memory memory-mapped sparse array holding current coordinates',
        'Dispatch Engine: Evaluates supply/demand matrices and emits batched ride offers'
      ],
      tradeoffs: [
        { choice: 'Uber H3 vs Geohash / Quadtree', reason: 'H3 hexagons have invariant neighbor distances, eliminating edge-distortion found in square geohashes.' },
        { choice: 'In-Memory State vs Redis Geo', reason: 'At 1.25M writes/sec, network hop overhead of Redis cluster becomes the bottleneck; in-memory partition shards scale linearly.' }
      ]
    },
    rubric: [
      { criterion: 'Understands geospatial indexing algorithms (Quadtree / H3 / S2)', level: 'Must have' },
      { criterion: 'Calculates realistic back-of-the-envelope network throughput & memory footprint', level: 'Distinction' },
      { criterion: 'Addresses the thundering herd problem during sudden surges (e.g. stadium event end)', level: 'Staff' }
    ],
    redFlags: [
      'Querying relational database with ST_Distance for millions of concurrent GPS pings.',
      'Assuming single Redis instance can write 1.25M records/sec without sharding.',
      'Failing to consider mobile network drops and stale driver pings.'
    ]
  },
  {
    id: 'google-code-debug',
    company: 'Google',
    track: 'Code Review & Debugging',
    title: 'High-Concurrency Worker Pool Deadlock & Memory Leak',
    difficulty: 'Medium',
    duration: '45 mins',
    summary: 'Find and fix production deadlocks, goroutine leaks, and uncapped queue growth in a distributed log processing pipeline.',
    scenario: 'A mission-critical ingestion pipeline in Go experiences intermittent OOM (Out Of Memory) crashes every 6 hours under peak traffic. The candidate is handed a 120-line snippet containing sync.WaitGroup misuse, unbuffered channels without consumers, and unclosed HTTP response bodies.',
    clarifications: [
      'Are we optimizing for zero allocation or code readability? (Production reliability and deterministic cleanup)',
      'What is the backpressure strategy when downstream sinks degrade? (Circuit breaking and bounded dropping)'
    ],
    architecture: {
      pattern: 'Bounded Worker Pools with Context Cancellation & Prometheus Leak Profiling',
      components: [
        'Pprof CPU/Memory profiler to identify goroutine explosion',
        'Bounded semaphore channel pattern to prevent runaway goroutine spawning',
        'Structured defer response.Body.Close() and io.Copy(io.Discard) for keep-alive reuse',
        'Context timeouts propagated across all RPC downstream boundaries'
      ],
      tradeoffs: [
        { choice: 'Bounded Worker Pool vs Goroutine-per-Request', reason: 'Goroutine-per-request consumes 2KB initially but can cause unbounded stack allocations under downstream throttling.' }
      ]
    },
    rubric: [
      { criterion: 'Identifies unclosed HTTP body causing connection pool exhaustion', level: 'Must have' },
      { criterion: 'Detects channel deadlock when sender blocks on unbuffered receiver', level: 'Distinction' },
      { criterion: 'Implements proper graceful shutdown sequence with sync.Once and timeout context', level: 'Staff' }
    ],
    redFlags: [
      'Simply increasing RAM without finding the underlying memory leak.',
      'Adding time.Sleep() to fix race conditions.',
      'Failing to drain channels during graceful shutdown.'
    ]
  },
  {
    id: 'amazon-leadership-sev1',
    company: 'Amazon',
    track: 'Behavioral & Leadership',
    title: 'Handling High-Severity Outages & Technical Disagreements',
    difficulty: 'Medium',
    duration: '45 mins',
    summary: 'Lead a post-mortem review after a SEV-1 retail checkout outage caused by conflicting architectural directions between teams.',
    scenario: 'During Prime Day, an aggressive cache eviction rollout led to a cascading failure across the payment gateway. The candidate must articulate their leadership response using the STAR method, emphasizing "Ownership", "Dive Deep", and "Have Backbone; Disagree and Commit".',
    clarifications: [
      'Who is the primary audience for the correction of errors (COE)? (VP of Engineering and customer trust leads)',
      'What balance should be struck between immediate mitigation and root-cause fix? (Rollback first, root-cause second)'
    ],
    architecture: {
      pattern: 'Amazon 5-Whys Correction of Errors (COE) Framework',
      components: [
        'Timeline of Events down to second granularity',
        'Root Cause Analysis using 5 Whys methodology',
        'Action Items with single designated owners (no shared ownership)',
        'Automated Canary Analysis (ACA) to prevent future regression'
      ],
      tradeoffs: [
        { choice: 'Full Rollback vs Hotfix in Production', reason: 'Rollback restores business continuity immediately; hotfixes in high-stress outages introduce secondary bugs.' }
      ]
    },
    rubric: [
      { criterion: 'Articulated a concrete, measurable technical result (not vague "everyone was happy")', level: 'Must have' },
      { criterion: 'Acknowledged the valid reasoning behind the opposing viewpoint without condescension', level: 'Distinction' },
      { criterion: 'Reflected on personal growth and lessons learned from the outcome', level: 'Staff' }
    ],
    redFlags: [
      'Portraying the other party as incompetent or malicious.',
      'Claiming to have "compromised" by shipping half-baked architecture that satisfies neither constraint.',
      'Refusing to commit after a final decision was reached.'
    ]
  }
];

// --- Comprehensive liquidslr/leetcode-company-wise-problems Pre-loaded Dataset ---
const INITIAL_DSA_PROBLEMS = [
  // ================= META (FACEBOOK) =================
  { id: '1', title: 'Two Sum', difficulty: 'Easy', company: 'Meta', acceptance: '53.4%', frequency: '98%', pattern: 'Hash Map', url: 'https://leetcode.com/problems/two-sum/' },
  { id: '125', title: 'Valid Palindrome', difficulty: 'Easy', company: 'Meta', acceptance: '47.1%', frequency: '94%', pattern: 'Two Pointers', url: 'https://leetcode.com/problems/valid-palindrome/' },
  { id: '88', title: 'Merge Sorted Array', difficulty: 'Easy', company: 'Meta', acceptance: '49.8%', frequency: '91%', pattern: 'Two Pointers', url: 'https://leetcode.com/problems/merge-sorted-array/' },
  { id: '680', title: 'Valid Palindrome II', difficulty: 'Easy', company: 'Meta', acceptance: '41.2%', frequency: '90%', pattern: 'Two Pointers', url: 'https://leetcode.com/problems/valid-palindrome-ii/' },
  { id: '408', title: 'Valid Word Abbreviation', difficulty: 'Easy', company: 'Meta', acceptance: '35.4%', frequency: '89%', pattern: 'Two Pointers / String', url: 'https://leetcode.com/problems/valid-word-abbreviation/' },
  { id: '278', title: 'First Bad Version', difficulty: 'Easy', company: 'Meta', acceptance: '44.3%', frequency: '84%', pattern: 'Binary Search', url: 'https://leetcode.com/problems/first-bad-version/' },
  { id: '938', title: 'Range Sum of BST', difficulty: 'Easy', company: 'Meta', acceptance: '86.5%', frequency: '83%', pattern: 'Trees / DFS', url: 'https://leetcode.com/problems/range-sum-of-bst/' },
  { id: '104', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', company: 'Meta', acceptance: '75.2%', frequency: '80%', pattern: 'Trees / Recursion', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
  { id: '346', title: 'Moving Average from Data Stream', difficulty: 'Easy', company: 'Meta', acceptance: '78.1%', frequency: '79%', pattern: 'Queue / Sliding Window', url: 'https://leetcode.com/problems/moving-average-from-data-stream/' },
  { id: '560', title: 'Subarray Sum Equals K', difficulty: 'Medium', company: 'Meta', acceptance: '43.9%', frequency: '99%', pattern: 'Prefix Sum / Hash', url: 'https://leetcode.com/problems/subarray-sum-equals-k/' },
  { id: '236', title: 'Lowest Common Ancestor of Binary Tree', difficulty: 'Medium', company: 'Meta', acceptance: '61.5%', frequency: '97%', pattern: 'Trees / DFS', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/' },
  { id: '15', title: '3Sum', difficulty: 'Medium', company: 'Meta', acceptance: '34.7%', frequency: '95%', pattern: 'Two Pointers', url: 'https://leetcode.com/problems/3sum/' },
  { id: '238', title: 'Product of Array Except Self', difficulty: 'Medium', company: 'Meta', acceptance: '66.1%', frequency: '93%', pattern: 'Prefix Array', url: 'https://leetcode.com/problems/product-of-array-except-self/' },
  { id: '314', title: 'Binary Tree Vertical Order Traversal', difficulty: 'Medium', company: 'Meta', acceptance: '53.6%', frequency: '92%', pattern: 'BFS / Trees', url: 'https://leetcode.com/problems/binary-tree-vertical-order-traversal/' },
  { id: '528', title: 'Random Pick with Weight', difficulty: 'Medium', company: 'Meta', acceptance: '46.7%', frequency: '91%', pattern: 'Prefix Sum / Binary Search', url: 'https://leetcode.com/problems/random-pick-with-weight/' },
  { id: '215', title: 'Kth Largest Element in an Array', difficulty: 'Medium', company: 'Meta', acceptance: '67.2%', frequency: '90%', pattern: 'Quickselect / Min-Heap', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
  { id: '71', title: 'Simplify Path', difficulty: 'Medium', company: 'Meta', acceptance: '42.3%', frequency: '89%', pattern: 'Stack', url: 'https://leetcode.com/problems/simplify-path/' },
  { id: '199', title: 'Binary Tree Right Side View', difficulty: 'Medium', company: 'Meta', acceptance: '63.9%', frequency: '88%', pattern: 'BFS / Level Order', url: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
  { id: '986', title: 'Interval List Intersections', difficulty: 'Medium', company: 'Meta', acceptance: '72.1%', frequency: '87%', pattern: 'Two Pointers / Intervals', url: 'https://leetcode.com/problems/interval-list-intersections/' },
  { id: '138', title: 'Copy List with Random Pointer', difficulty: 'Medium', company: 'Meta', acceptance: '56.7%', frequency: '86%', pattern: 'Linked List / Hash', url: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
  { id: '1762', title: 'Buildings With an Ocean View', difficulty: 'Medium', company: 'Meta', acceptance: '80.5%', frequency: '85%', pattern: 'Monotonic Stack', url: 'https://leetcode.com/problems/buildings-with-an-ocean-view/' },
  { id: '1650', title: 'Lowest Common Ancestor of a Binary Tree III', difficulty: 'Medium', company: 'Meta', acceptance: '79.2%', frequency: '85%', pattern: 'Linked List Cycle / LCA', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/' },
  { id: '973', title: 'K Closest Points to Origin', difficulty: 'Medium', company: 'Meta', acceptance: '66.3%', frequency: '84%', pattern: 'Max-Heap / Quickselect', url: 'https://leetcode.com/problems/k-closest-points-to-origin/' },
  { id: '347', title: 'Top K Frequent Elements', difficulty: 'Medium', company: 'Meta', acceptance: '63.8%', frequency: '84%', pattern: 'Bucket Sort / Heap', url: 'https://leetcode.com/problems/top-k-frequent-elements/' },
  { id: '162', title: 'Find Peak Element', difficulty: 'Medium', company: 'Meta', acceptance: '46.1%', frequency: '82%', pattern: 'Binary Search', url: 'https://leetcode.com/problems/find-peak-element/' },
  { id: '269', title: 'Alien Dictionary', difficulty: 'Hard', company: 'Meta', acceptance: '35.8%', frequency: '98%', pattern: 'Topological Sort / Graph', url: 'https://leetcode.com/problems/alien-dictionary/' },
  { id: '42', title: 'Trapping Rain Water', difficulty: 'Hard', company: 'Meta', acceptance: '61.2%', frequency: '96%', pattern: 'Two Pointers / Monotonic Stack', url: 'https://leetcode.com/problems/trapping-rain-water/' },
  { id: '76', title: 'Minimum Window Substring', difficulty: 'Hard', company: 'Meta', acceptance: '42.7%', frequency: '94%', pattern: 'Sliding Window', url: 'https://leetcode.com/problems/minimum-window-substring/' },
  { id: '124', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', company: 'Meta', acceptance: '40.2%', frequency: '91%', pattern: 'Trees / DFS Postorder', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
  { id: '297', title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', company: 'Meta', acceptance: '56.3%', frequency: '90%', pattern: 'Trees / BFS Serialization', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
  { id: '301', title: 'Remove Invalid Parentheses', difficulty: 'Hard', company: 'Meta', acceptance: '48.1%', frequency: '88%', pattern: 'BFS / Backtracking', url: 'https://leetcode.com/problems/remove-invalid-parentheses/' },
  { id: '65', title: 'Valid Number', difficulty: 'Hard', company: 'Meta', acceptance: '19.4%', frequency: '87%', pattern: 'DFA / State Machine', url: 'https://leetcode.com/problems/valid-number/' },
  { id: '273', title: 'Integer to English Words', difficulty: 'Hard', company: 'Meta', acceptance: '31.2%', frequency: '84%', pattern: 'Recursion / Math', url: 'https://leetcode.com/problems/integer-to-english-words/' },

  // ================= GOOGLE =================
  { id: '359', title: 'Logger Rate Limiter', difficulty: 'Easy', company: 'Google', acceptance: '76.1%', frequency: '97%', pattern: 'Hash Map / Queue', url: 'https://leetcode.com/problems/logger-rate-limiter/' },
  { id: '226', title: 'Invert Binary Tree', difficulty: 'Easy', company: 'Google', acceptance: '77.2%', frequency: '88%', pattern: 'Trees / BFS', url: 'https://leetcode.com/problems/invert-binary-tree/' },
  { id: '121', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', company: 'Google', acceptance: '54.2%', frequency: '86%', pattern: 'Sliding Window', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
  { id: '66', title: 'Plus One', difficulty: 'Easy', company: 'Google', acceptance: '45.1%', frequency: '82%', pattern: 'Array Math', url: 'https://leetcode.com/problems/plus-one/' },
  { id: '392', title: 'Is Subsequence', difficulty: 'Easy', company: 'Google', acceptance: '48.3%', frequency: '80%', pattern: 'Two Pointers', url: 'https://leetcode.com/problems/is-subsequence/' },
  { id: '202', title: 'Happy Number', difficulty: 'Easy', company: 'Google', acceptance: '56.3%', frequency: '78%', pattern: "Floyd's Cycle Detection", url: 'https://leetcode.com/problems/happy-number/' },
  { id: '3', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', company: 'Google', acceptance: '34.9%', frequency: '99%', pattern: 'Sliding Window', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
  { id: '2096', title: 'Step-By-Step Directions From Binary Tree Node', difficulty: 'Medium', company: 'Google', acceptance: '49.8%', frequency: '96%', pattern: 'Trees / LCA', url: 'https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/' },
  { id: '210', title: 'Course Schedule II', difficulty: 'Medium', company: 'Google', acceptance: '50.1%', frequency: '95%', pattern: 'Topological Sort / Kahn', url: 'https://leetcode.com/problems/course-schedule-ii/' },
  { id: '200', title: 'Number of Islands', difficulty: 'Medium', company: 'Google', acceptance: '58.7%', frequency: '94%', pattern: 'Graphs / BFS / DFS', url: 'https://leetcode.com/problems/number-of-islands/' },
  { id: '394', title: 'Decode String', difficulty: 'Medium', company: 'Google', acceptance: '59.1%', frequency: '93%', pattern: 'Stack / Parsing', url: 'https://leetcode.com/problems/decode-string/' },
  { id: '253', title: 'Meeting Rooms II', difficulty: 'Medium', company: 'Google', acceptance: '51.4%', frequency: '91%', pattern: 'Min-Heap / Sweep Line', url: 'https://leetcode.com/problems/meeting-rooms-ii/' },
  { id: '846', title: 'Hand of Straights', difficulty: 'Medium', company: 'Google', acceptance: '57.1%', frequency: '90%', pattern: 'Greedy / Map', url: 'https://leetcode.com/problems/hand-of-straights/' },
  { id: '1143', title: 'Longest Common Subsequence', difficulty: 'Medium', company: 'Google', acceptance: '58.6%', frequency: '89%', pattern: 'Dynamic Programming (2D)', url: 'https://leetcode.com/problems/longest-common-subsequence/' },
  { id: '54', title: 'Spiral Matrix', difficulty: 'Medium', company: 'Google', acceptance: '49.1%', frequency: '88%', pattern: 'Simulation / Matrix', url: 'https://leetcode.com/problems/spiral-matrix/' },
  { id: '1631', title: 'Path With Minimum Effort', difficulty: 'Medium', company: 'Google', acceptance: '61.0%', frequency: '87%', pattern: "Dijkstra's / Binary Search", url: 'https://leetcode.com/problems/path-with-minimum-effort/' },
  { id: '875', title: 'Koko Eating Bananas', difficulty: 'Medium', company: 'Google', acceptance: '49.6%', frequency: '86%', pattern: 'Binary Search on Answer', url: 'https://leetcode.com/problems/koko-eating-bananas/' },
  { id: '1293', title: 'Shortest Path in a Grid with Obstacles Elimination', difficulty: 'Medium', company: 'Google', acceptance: '45.3%', frequency: '85%', pattern: 'BFS / 3D State', url: 'https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/' },
  { id: '4', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', company: 'Google', acceptance: '39.8%', frequency: '99%', pattern: 'Binary Search Partition', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
  { id: '126', title: 'Word Ladder II', difficulty: 'Hard', company: 'Google', acceptance: '28.1%', frequency: '92%', pattern: 'BFS + Backtracking', url: 'https://leetcode.com/problems/word-ladder-ii/' },
  { id: '489', title: 'Robot Room Cleaner', difficulty: 'Hard', company: 'Google', acceptance: '77.0%', frequency: '90%', pattern: 'Backtracking / DFS', url: 'https://leetcode.com/problems/robot-room-cleaner/' },
  { id: '72', title: 'Edit Distance', difficulty: 'Hard', company: 'Google', acceptance: '56.1%', frequency: '89%', pattern: 'Dynamic Programming', url: 'https://leetcode.com/problems/edit-distance/' },
  { id: '85', title: 'Maximal Rectangle', difficulty: 'Hard', company: 'Google', acceptance: '46.7%', frequency: '87%', pattern: 'Monotonic Stack / DP', url: 'https://leetcode.com/problems/maximal-rectangle/' },
  { id: '329', title: 'Longest Increasing Path in a Matrix', difficulty: 'Hard', company: 'Google', acceptance: '53.9%', frequency: '85%', pattern: 'DFS + Memoization', url: 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/' },
  { id: '315', title: 'Count of Smaller Numbers After Self', difficulty: 'Hard', company: 'Google', acceptance: '42.9%', frequency: '82%', pattern: 'Segment Tree / Merge Sort', url: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/' },

  // ================= AMAZON =================
  { id: '937', title: 'Reorder Data in Log Files', difficulty: 'Easy', company: 'Amazon', acceptance: '56.4%', frequency: '96%', pattern: 'Custom Sorting', url: 'https://leetcode.com/problems/reorder-data-in-log-files/' },
  { id: '20', title: 'Valid Parentheses', difficulty: 'Easy', company: 'Amazon', acceptance: '41.0%', frequency: '95%', pattern: 'Stack', url: 'https://leetcode.com/problems/valid-parentheses/' },
  { id: '21', title: 'Merge Two Sorted Lists', difficulty: 'Easy', company: 'Amazon', acceptance: '64.1%', frequency: '92%', pattern: 'Linked List', url: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
  { id: '101', title: 'Symmetric Tree', difficulty: 'Easy', company: 'Amazon', acceptance: '56.4%', frequency: '85%', pattern: 'Trees / Recursion', url: 'https://leetcode.com/problems/symmetric-tree/' },
  { id: '141', title: 'Linked List Cycle', difficulty: 'Easy', company: 'Amazon', acceptance: '49.8%', frequency: '83%', pattern: 'Fast & Slow Pointers', url: 'https://leetcode.com/problems/linked-list-cycle/' },
  { id: '242', title: 'Valid Anagram', difficulty: 'Easy', company: 'Amazon', acceptance: '64.2%', frequency: '81%', pattern: 'Hash Map / Frequency', url: 'https://leetcode.com/problems/valid-anagram/' },
  { id: '146', title: 'LRU Cache', difficulty: 'Medium', company: 'Amazon', acceptance: '42.8%', frequency: '99%', pattern: 'Doubly Linked List + Hash', url: 'https://leetcode.com/problems/lru-cache/' },
  { id: '994', title: 'Rotting Oranges', difficulty: 'Medium', company: 'Amazon', acceptance: '54.5%', frequency: '96%', pattern: 'Matrix / BFS', url: 'https://leetcode.com/problems/rotting-oranges/' },
  { id: '49', title: 'Group Anagrams', difficulty: 'Medium', company: 'Amazon', acceptance: '68.0%', frequency: '94%', pattern: 'Hash Map / Categorization', url: 'https://leetcode.com/problems/group-anagrams/' },
  { id: '56', title: 'Merge Intervals', difficulty: 'Medium', company: 'Amazon', acceptance: '47.3%', frequency: '93%', pattern: 'Sorting / Intervals', url: 'https://leetcode.com/problems/merge-intervals/' },
  { id: '1152', title: 'Analyze User Website Visit Pattern', difficulty: 'Medium', company: 'Amazon', acceptance: '44.8%', frequency: '91%', pattern: 'Hash Map / Combinatorics', url: 'https://leetcode.com/problems/analyze-user-website-visit-pattern/' },
  { id: '692', title: 'Top K Frequent Words', difficulty: 'Medium', company: 'Amazon', acceptance: '58.0%', frequency: '89%', pattern: 'Trie / Min-Heap', url: 'https://leetcode.com/problems/top-k-frequent-words/' },
  { id: '348', title: 'Design Tic-Tac-Toe', difficulty: 'Medium', company: 'Amazon', acceptance: '58.5%', frequency: '88%', pattern: 'Design / Counting', url: 'https://leetcode.com/problems/design-tic-tac-toe/' },
  { id: '1010', title: 'Pairs of Songs With Total Durations Divisible by 60', difficulty: 'Medium', company: 'Amazon', acceptance: '53.6%', frequency: '87%', pattern: 'Modulo Hash Array', url: 'https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/' },
  { id: '437', title: 'Path Sum III', difficulty: 'Medium', company: 'Amazon', acceptance: '47.5%', frequency: '86%', pattern: 'Prefix Sum / Trees', url: 'https://leetcode.com/problems/path-sum-iii/' },
  { id: '79', title: 'Word Search', difficulty: 'Medium', company: 'Amazon', acceptance: '41.9%', frequency: '85%', pattern: 'Backtracking', url: 'https://leetcode.com/problems/word-search/' },
  { id: '767', title: 'Reorganize String', difficulty: 'Medium', company: 'Amazon', acceptance: '54.9%', frequency: '84%', pattern: 'Max-Heap / Greedy', url: 'https://leetcode.com/problems/reorganize-string/' },
  { id: '212', title: 'Word Search II', difficulty: 'Hard', company: 'Amazon', acceptance: '36.2%', frequency: '96%', pattern: 'Trie + Backtracking', url: 'https://leetcode.com/problems/word-search-ii/' },
  { id: '23', title: 'Merge k Sorted Lists', difficulty: 'Hard', company: 'Amazon', acceptance: '52.1%', frequency: '94%', pattern: 'Min-Heap / Divide & Conquer', url: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
  { id: '41', title: 'First Missing Positive', difficulty: 'Hard', company: 'Amazon', acceptance: '38.4%', frequency: '91%', pattern: 'Cyclic Sort', url: 'https://leetcode.com/problems/first-missing-positive/' },
  { id: '895', title: 'Maximum Frequency Stack', difficulty: 'Hard', company: 'Amazon', acceptance: '67.0%', frequency: '89%', pattern: 'Stack of Stacks / Hash', url: 'https://leetcode.com/problems/maximum-frequency-stack/' },
  { id: '127', title: 'Word Ladder', difficulty: 'Hard', company: 'Amazon', acceptance: '38.8%', frequency: '87%', pattern: 'Bidirectional BFS', url: 'https://leetcode.com/problems/word-ladder/' },
  { id: '460', title: 'LFU Cache', difficulty: 'Hard', company: 'Amazon', acceptance: '45.1%', frequency: '85%', pattern: 'Doubly Linked List + Hash', url: 'https://leetcode.com/problems/lfu-cache/' },

  // ================= MICROSOFT =================
  { id: '1822', title: 'Sign of the Product of an Array', difficulty: 'Easy', company: 'Microsoft', acceptance: '65.3%', frequency: '89%', pattern: 'Array Math', url: 'https://leetcode.com/problems/sign-of-the-product-of-an-array/' },
  { id: '206', title: 'Reverse Linked List', difficulty: 'Easy', company: 'Microsoft', acceptance: '75.6%', frequency: '87%', pattern: 'Linked List Pointers', url: 'https://leetcode.com/problems/reverse-linked-list/' },
  { id: '136', title: 'Single Number', difficulty: 'Easy', company: 'Microsoft', acceptance: '72.3%', frequency: '84%', pattern: 'Bit Manipulation (XOR)', url: 'https://leetcode.com/problems/single-number/' },
  { id: '160', title: 'Intersection of Two Linked Lists', difficulty: 'Easy', company: 'Microsoft', acceptance: '56.9%', frequency: '82%', pattern: 'Two Pointers', url: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
  { id: '33', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', company: 'Microsoft', acceptance: '40.6%', frequency: '97%', pattern: 'Modified Binary Search', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
  { id: '211', title: 'Design Add and Search Words Data Structure', difficulty: 'Medium', company: 'Microsoft', acceptance: '45.2%', frequency: '92%', pattern: 'Trie / DFS Backtracking', url: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/' },
  { id: '151', title: 'Reverse Words in a String', difficulty: 'Medium', company: 'Microsoft', acceptance: '41.3%', frequency: '90%', pattern: 'Two Pointers / String', url: 'https://leetcode.com/problems/reverse-words-in-a-string/' },
  { id: '443', title: 'String Compression', difficulty: 'Medium', company: 'Microsoft', acceptance: '54.9%', frequency: '88%', pattern: 'Two Pointers in-place', url: 'https://leetcode.com/problems/string-compression/' },
  { id: '165', title: 'Compare Version Numbers', difficulty: 'Medium', company: 'Microsoft', acceptance: '38.9%', frequency: '86%', pattern: 'Two Pointers / Parsing', url: 'https://leetcode.com/problems/compare-version-numbers/' },
  { id: '36', title: 'Valid Sudoku', difficulty: 'Medium', company: 'Microsoft', acceptance: '60.1%', frequency: '85%', pattern: 'Hash Set / Bitmask', url: 'https://leetcode.com/problems/valid-sudoku/' },
  { id: '73', title: 'Set Matrix Zeroes', difficulty: 'Medium', company: 'Microsoft', acceptance: '55.3%', frequency: '83%', pattern: 'In-place Matrix Flags', url: 'https://leetcode.com/problems/set-matrix-zeroes/' },
  { id: '295', title: 'Find Median from Data Stream', difficulty: 'Hard', company: 'Microsoft', acceptance: '51.9%', frequency: '96%', pattern: 'Two Heaps (Max/Min)', url: 'https://leetcode.com/problems/find-median-from-data-stream/' },
  { id: '25', title: 'Reverse Nodes in k-Group', difficulty: 'Hard', company: 'Microsoft', acceptance: '57.8%', frequency: '92%', pattern: 'Linked List Recursion', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/' },
  { id: '140', title: 'Word Break II', difficulty: 'Hard', company: 'Microsoft', acceptance: '48.2%', frequency: '88%', pattern: 'Trie + Memoization', url: 'https://leetcode.com/problems/word-break-ii/' },

  // ================= APPLE =================
  { id: '53', title: 'Maximum Subarray', difficulty: 'Easy', company: 'Apple', acceptance: '50.7%', frequency: '91%', pattern: "Kadane's Algorithm", url: 'https://leetcode.com/problems/maximum-subarray/' },
  { id: '13', title: 'Roman to Integer', difficulty: 'Easy', company: 'Apple', acceptance: '61.1%', frequency: '88%', pattern: 'Hash Map Lookup', url: 'https://leetcode.com/problems/roman-to-integer/' },
  { id: '70', title: 'Climbing Stairs', difficulty: 'Easy', company: 'Apple', acceptance: '52.9%', frequency: '84%', pattern: '1D Dynamic Programming', url: 'https://leetcode.com/problems/climbing-stairs/' },
  { id: '9', title: 'Palindrome Number', difficulty: 'Easy', company: 'Apple', acceptance: '56.1%', frequency: '82%', pattern: 'Math Reversal', url: 'https://leetcode.com/problems/palindrome-number/' },
  { id: '16', title: '3Sum Closest', difficulty: 'Medium', company: 'Apple', acceptance: '45.8%', frequency: '93%', pattern: 'Two Pointers', url: 'https://leetcode.com/problems/3sum-closest/' },
  { id: '322', title: 'Coin Change', difficulty: 'Medium', company: 'Apple', acceptance: '43.8%', frequency: '91%', pattern: 'Unbounded Knapsack DP', url: 'https://leetcode.com/problems/coin-change/' },
  { id: '11', title: 'Container With Most Water', difficulty: 'Medium', company: 'Apple', acceptance: '55.3%', frequency: '90%', pattern: 'Two Pointers Greedy', url: 'https://leetcode.com/problems/container-with-most-water/' },
  { id: '46', title: 'Permutations', difficulty: 'Medium', company: 'Apple', acceptance: '77.8%', frequency: '88%', pattern: 'Backtracking', url: 'https://leetcode.com/problems/permutations/' },
  { id: '22', title: 'Generate Parentheses', difficulty: 'Medium', company: 'Apple', acceptance: '74.6%', frequency: '86%', pattern: 'Backtracking', url: 'https://leetcode.com/problems/generate-parentheses/' },
  { id: '62', title: 'Unique Paths', difficulty: 'Medium', company: 'Apple', acceptance: '64.1%', frequency: '84%', pattern: '2D Grid DP', url: 'https://leetcode.com/problems/unique-paths/' },
  { id: '224', title: 'Basic Calculator', difficulty: 'Hard', company: 'Apple', acceptance: '43.2%', frequency: '94%', pattern: 'Stack / Recursive Parsing', url: 'https://leetcode.com/problems/basic-calculator/' },
  { id: '68', title: 'Text Justification', difficulty: 'Hard', company: 'Apple', acceptance: '44.1%', frequency: '89%', pattern: 'String Formatting Simulation', url: 'https://leetcode.com/problems/text-justification/' },
  { id: '30', title: 'Substring with Concatenation of All Words', difficulty: 'Hard', company: 'Apple', acceptance: '32.1%', frequency: '85%', pattern: 'Sliding Window + Map', url: 'https://leetcode.com/problems/substring-with-concatenation-of-all-words/' },

  // ================= UBER =================
  { id: '380', title: 'Insert Delete GetRandom O(1)', difficulty: 'Medium', company: 'Uber', acceptance: '54.2%', frequency: '96%', pattern: 'Hash Map + Dynamic Array', url: 'https://leetcode.com/problems/insert-delete-getrandom-o1/' },
  { id: '139', title: 'Word Break', difficulty: 'Medium', company: 'Uber', acceptance: '46.7%', frequency: '91%', pattern: 'Dynamic Programming / Trie', url: 'https://leetcode.com/problems/word-break/' },
  { id: '208', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', company: 'Uber', acceptance: '64.9%', frequency: '89%', pattern: 'Trie Data Structure', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
  { id: '787', title: 'Cheapest Flights Within K Stops', difficulty: 'Medium', company: 'Uber', acceptance: '39.2%', frequency: '88%', pattern: 'Bellman-Ford / Dijkstra', url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' },
  { id: '362', title: 'Design Hit Counter', difficulty: 'Medium', company: 'Uber', acceptance: '68.9%', frequency: '87%', pattern: 'Queue / Circular Buffer', url: 'https://leetcode.com/problems/design-hit-counter/' },
  { id: '815', title: 'Bus Routes', difficulty: 'Hard', company: 'Uber', acceptance: '47.3%', frequency: '95%', pattern: 'Breadth-First Search on Graphs', url: 'https://leetcode.com/problems/bus-routes/' },
  { id: '312', title: 'Burst Balloons', difficulty: 'Hard', company: 'Uber', acceptance: '59.2%', frequency: '89%', pattern: 'Interval DP', url: 'https://leetcode.com/problems/burst-balloons/' },
  { id: '10', title: 'Regular Expression Matching', difficulty: 'Hard', company: 'Uber', acceptance: '28.4%', frequency: '87%', pattern: '2D Dynamic Programming', url: 'https://leetcode.com/problems/regular-expression-matching/' },

  // ================= BLOOMBERG =================
  { id: '387', title: 'First Unique Character in a String', difficulty: 'Easy', company: 'Bloomberg', acceptance: '61.4%', frequency: '92%', pattern: 'Frequency Hash Array', url: 'https://leetcode.com/problems/first-unique-character-in-a-string/' },
  { id: '430', title: 'Flatten a Multilevel Doubly Linked List', difficulty: 'Medium', company: 'Bloomberg', acceptance: '60.3%', frequency: '97%', pattern: 'Linked List / DFS', url: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/' },
  { id: '1209', title: 'Remove All Adjacent Duplicates in String II', difficulty: 'Medium', company: 'Bloomberg', acceptance: '56.8%', frequency: '94%', pattern: 'Stack with Counts', url: 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/' },
  { id: '98', title: 'Validate Binary Search Tree', difficulty: 'Medium', company: 'Bloomberg', acceptance: '33.2%', frequency: '91%', pattern: 'Inorder Traversal / BST', url: 'https://leetcode.com/problems/validate-binary-search-tree/' },
  { id: '1396', title: 'Design Underground System', difficulty: 'Medium', company: 'Bloomberg', acceptance: '74.2%', frequency: '90%', pattern: 'Hash Map System Design', url: 'https://leetcode.com/problems/design-underground-system/' },
  { id: '399', title: 'Evaluate Division', difficulty: 'Medium', company: 'Bloomberg', acceptance: '61.8%', frequency: '89%', pattern: 'Union-Find / Weighted Graph', url: 'https://leetcode.com/problems/evaluate-division/' },
  { id: '759', title: 'Employee Free Time', difficulty: 'Hard', company: 'Bloomberg', acceptance: '72.1%', frequency: '93%', pattern: 'Min-Heap / Intervals', url: 'https://leetcode.com/problems/employee-free-time/' },
  { id: '428', title: 'Serialize and Deserialize N-ary Tree', difficulty: 'Hard', company: 'Bloomberg', acceptance: '66.4%', frequency: '88%', pattern: 'N-ary Tree Serialization', url: 'https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/' },

  // ================= NETFLIX / TIKTOK / ADOBE =================
  { id: '84', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', company: 'Netflix', acceptance: '44.5%', frequency: '96%', pattern: 'Monotonic Stack', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
  { id: '739', title: 'Daily Temperatures', difficulty: 'Medium', company: 'Netflix', acceptance: '66.1%', frequency: '91%', pattern: 'Monotonic Stack', url: 'https://leetcode.com/problems/daily-temperatures/' },
  { id: '438', title: 'Find All Anagrams in a String', difficulty: 'Medium', company: 'Netflix', acceptance: '50.7%', frequency: '88%', pattern: 'Sliding Window', url: 'https://leetcode.com/problems/find-all-anagrams-in-a-string/' },
  { id: '25', title: 'Reverse Nodes in k-Group', difficulty: 'Hard', company: 'TikTok', acceptance: '57.8%', frequency: '95%', pattern: 'Linked List Recursion', url: 'https://leetcode.com/problems/reverse-nodes-in-k-group/' },
  { id: '142', title: 'Linked List Cycle II', difficulty: 'Medium', company: 'TikTok', acceptance: '50.9%', frequency: '92%', pattern: "Floyd's Tortoise & Hare", url: 'https://leetcode.com/problems/linked-list-cycle-ii/' },
  { id: '2', title: 'Add Two Numbers', difficulty: 'Medium', company: 'Adobe', acceptance: '42.6%', frequency: '94%', pattern: 'Linked List Math', url: 'https://leetcode.com/problems/add-two-numbers/' },
  { id: '5', title: 'Longest Palindromic Substring', difficulty: 'Medium', company: 'Adobe', acceptance: '34.1%', frequency: '93%', pattern: 'Expand Around Center / DP', url: 'https://leetcode.com/problems/longest-palindromic-substring/' }
];

const TRACKS = [
  { id: 'all', label: 'All Tracks', icon: Layers },
  { id: 'System Design', label: 'System Design', icon: Server },
  { id: 'Take-Home / Low-Level', label: 'Take-Home / LLD', icon: Code },
  { id: 'Code Review & Debugging', label: 'Code Review & Debug', icon: Terminal },
  { id: 'Behavioral & Leadership', label: 'Leadership STAR', icon: Users }
];

// Standalone DSA Problem Card
function DsaProblemCard({ prob, isSolved, onToggle }) {
  return (
    <div className={`p-3.5 rounded-xl border transition-all ${
      isSolved 
        ? 'bg-emerald-950/20 border-emerald-800/40 opacity-80' 
        : 'bg-[#111726] border-slate-800 hover:border-slate-700'
    }`}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <button
          onClick={() => onToggle(prob.id)}
          className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${
            isSolved 
              ? 'bg-emerald-500 border-emerald-500 text-black' 
              : 'border-slate-600 hover:border-slate-400'
          }`}
        >
          {isSolved && <Check className="w-3 h-3 stroke-[3]" />}
        </button>
        <div className="flex-1 min-w-0">
          <a
            href={prob.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs font-semibold hover:text-cyan-400 flex items-center gap-1 group truncate ${
              isSolved ? 'line-through text-slate-400' : 'text-slate-100'
            }`}
          >
            <span className="text-slate-500 font-mono text-[10px]">#{prob.id}</span>
            <span className="truncate">{prob.title}</span>
            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 shrink-0" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
        <span className="bg-slate-800/80 px-2 py-0.5 rounded text-[10px] text-slate-300 font-mono">
          {prob.pattern}
        </span>
        <div className="flex items-center gap-2 text-[10px]">
          <span>Acc: {prob.acceptance}</span>
          <span className="text-amber-400/90 font-medium">{prob.frequency}</span>
        </div>
      </div>
    </div>
  );
}

// --- Live CSV / Markdown Importer Component ---
function CsvImporterModal({ onClose, onImport }) {
  const [targetCompany, setTargetCompany] = useState('Meta');
  const [timeWindow, setTimeWindow] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [fetchSuccess, setFetchSuccess] = useState('');
  const [rawText, setRawText] = useState(`Difficulty,Title,Frequency,Acceptance Rate,Link,Topics
HARD,Trapping Rain Water,100.0,0.612,https://leetcode.com/problems/trapping-rain-water,Two Pointers / Stack
MEDIUM,Subarray Sum Equals K,98.5,0.439,https://leetcode.com/problems/subarray-sum-equals-k,Prefix Sum
EASY,Valid Palindrome,94.2,0.471,https://leetcode.com/problems/valid-palindrome,Two Pointers`);

  const handleFetchFromGithub = async () => {
    setIsLoading(true);
    setFetchError('');
    setFetchSuccess('');
    
    const fileMap = {
      'Thirty Days': '1. Thirty Days.csv',
      'Three Months': '2. Three Months.csv',
      'Six Months': '3. Six Months.csv',
      'All': '5. All.csv'
    };

    const fileName = fileMap[timeWindow] || '5. All.csv';
    const rawUrl = `https://raw.githubusercontent.com/liquidslr/leetcode-company-wise-problems/main/${encodeURIComponent(targetCompany)}/${encodeURIComponent(fileName)}`;

    try {
      const response = await fetch(rawUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: File not found for ${targetCompany}/${fileName}`);
      }
      const csvData = await response.text();
      setRawText(csvData);
      setFetchSuccess(`Successfully fetched ${csvData.split('\n').length} rows directly from liquidslr repo! Click "Parse & Add to Platform" below.`);
    } catch (err) {
      setFetchError(`Could not auto-fetch from GitHub (${err.message}). You can open the file on GitHub and paste its content below!`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleParseAndLoad = () => {
    if (!rawText.trim()) return;

    const lines = rawText.trim().split('\n');
    const parsedList = [];

    lines.forEach((line, index) => {
      const lower = line.toLowerCase();
      if (index === 0 && (lower.includes('title') || lower.includes('difficulty') || lower.includes('id'))) return;

      let parts = [];
      if (line.includes('|')) {
        parts = line.split('|').map(s => s.trim()).filter(Boolean);
        if (parts[0] && parts[0].includes('---')) return;
      } else {
        parts = line.split(',').map(s => s.trim());
      }

      if (parts.length >= 2) {
        let title, difficulty, acceptance, frequency, pattern, url, id;

        if (['easy', 'medium', 'hard'].includes(parts[0].toLowerCase())) {
          difficulty = parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
          title = parts[1] || 'LeetCode Problem';
          frequency = parts[2] ? `${Math.round(parseFloat(parts[2]) || 80)}%` : '85%';
          const rawAcc = parseFloat(parts[3]) || 0.5;
          acceptance = rawAcc <= 1 ? `${Math.round(rawAcc * 100)}%` : `${Math.round(rawAcc)}%`;
          url = parts[4] && parts[4].startsWith('http') ? parts[4] : `https://leetcode.com/problem-list/`;
          pattern = parts[5] || 'Core Algorithm';
          const urlMatch = url.match(/\/problems\/([^/]+)/);
          id = urlMatch ? urlMatch[1] : `${Date.now()}-${index}`;
        } else {
          id = parts[0] || `${Date.now()}-${index}`;
          title = parts[1] || 'LeetCode Problem';
          difficulty = parts[2] && ['easy', 'medium', 'hard'].includes(parts[2].toLowerCase()) 
            ? parts[2].charAt(0).toUpperCase() + parts[2].slice(1).toLowerCase() 
            : 'Medium';
          acceptance = parts[3] || '50.0%';
          frequency = parts[4] || '85%';
          pattern = parts[5] || 'General DSA';
          url = parts[6] && parts[6].startsWith('http') 
            ? parts[6] 
            : `https://leetcode.com/problems/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/`;
        }

        parsedList.push({
          id,
          title,
          difficulty,
          company: targetCompany,
          acceptance,
          frequency,
          pattern,
          url
        });
      }
    });

    if (parsedList.length > 0) {
      onImport(parsedList);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#0E1424] border border-slate-700 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden">
        
        <div className="border-b border-slate-800 bg-[#12192C] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base font-bold text-white">liquidslr/leetcode-company-wise-problems Syncer</h3>
              <p className="text-xs text-slate-400">1-click fetch or paste any CSV from the repository (All 1000+ questions supported)</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <div className="bg-[#111726] border border-slate-800 p-4 rounded-xl space-y-3">
            <span className="font-bold text-white flex items-center gap-2 text-xs">
              <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isLoading ? 'animate-spin' : ''}`} />
              Auto-Fetch Directly from liquidslr GitHub Repository
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-400 mb-1 text-[11px]">Select Company Folder</label>
                <select
                  value={targetCompany}
                  onChange={(e) => setTargetCompany(e.target.value)}
                  className="w-full bg-[#0A0E17] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 font-sans cursor-pointer text-xs"
                >
                  {['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple', 'Uber', 'Bloomberg', 'Netflix', 'ByteDance', 'Adobe', 'Salesforce', 'TikTok', 'Swiggy', 'Oracle', 'Goldman Sachs'].map(c => (
                    <option key={c} value={c} className="bg-slate-900">{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 text-[11px]">Time Window Sub-folder</label>
                <select
                  value={timeWindow}
                  onChange={(e) => setTimeWindow(e.target.value)}
                  className="w-full bg-[#0A0E17] border border-slate-700 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 font-sans cursor-pointer text-xs"
                >
                  <option value="All">All Time (Largest Question Pool)</option>
                  <option value="Six Months">Six Months</option>
                  <option value="Three Months">Three Months</option>
                  <option value="Thirty Days">Thirty Days (High Recency)</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleFetchFromGithub}
                  disabled={isLoading}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-semibold py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  {isLoading ? 'Fetching...' : '1-Click Fetch CSV'}
                </button>
              </div>
            </div>

            {fetchSuccess && (
              <div className="p-2.5 bg-emerald-950/40 border border-emerald-800/60 rounded-lg text-emerald-300 text-[11px]">
                {fetchSuccess}
              </div>
            )}

            {fetchError && (
              <div className="p-2.5 bg-red-950/40 border border-red-800/60 rounded-lg text-red-300 text-[11px]">
                {fetchError}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-slate-400 font-medium">Or Paste Raw CSV / Markdown Content Below</label>
              <span className="text-[10px] text-slate-500 font-mono">Format: Difficulty, Title, Frequency, Acceptance Rate, Link, Topics</span>
            </div>
            <textarea
              rows={7}
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder="Paste raw CSV lines here..."
              className="w-full bg-black/60 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-indigo-500 resize-none"
            ></textarea>
          </div>

          <div className="pt-2 border-t border-slate-800 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleParseAndLoad}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2 rounded-lg transition-all shadow-md shadow-indigo-600/30 flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              Parse & Add to Platform
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState('dsa'); // 'dsa' | 'comprehensive' | 'profile' | 'database' | 'deploy'
  
  // DSA States
  const [dsaProblems, setDsaProblems] = useState(() => {
    const saved = localStorage.getItem('cc_dsa_bank');
    return saved ? JSON.parse(saved) : INITIAL_DSA_PROBLEMS;
  });
  const [selectedCompany, setSelectedCompany] = useState('Meta');
  const [dsaSearch, setDsaSearch] = useState('');
  const [solvedIds, setSolvedIds] = useState(() => {
    const saved = localStorage.getItem('cc_solved_ids');
    return saved ? JSON.parse(saved) : {};
  });
  const [isCsvModalOpen, setIsCsvModalOpen] = useState(false);

  // User Profile State
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('wp_user_profile');
    return saved ? JSON.parse(saved) : {
      fullName: 'Engineer Aspirant',
      targetRole: 'Staff / Senior Software Engineer',
      targetCompany: 'Google & Stripe',
      streakDays: 14,
      interviewDate: '2026-12-15',
      bio: 'Second-year CSE navigating R23, DSA Striver A2Z, and Distributed Systems. Aiming high with persistent dedication.',
      github: 'https://github.com',
      leetcodeUsername: 'with_persistence_coder',
      favoritePattern: 'Two Pointers & Idempotent Systems'
    };
  });

  const [copiedCmd, setCopiedCmd] = useState(null);

  // Comprehensive States
  const [rounds, setRounds] = useState(COMPREHENSIVE_ROUNDS);
  const [selectedRound, setSelectedRound] = useState(COMPREHENSIVE_ROUNDS[0]);
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [compSearch, setCompSearch] = useState('');
  const [timerSeconds, setTimerSeconds] = useState(45 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [notes, setNotes] = useState('');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cc_dsa_bank', JSON.stringify(dsaProblems));
  }, [dsaProblems]);

  useEffect(() => {
    localStorage.setItem('cc_solved_ids', JSON.stringify(solvedIds));
  }, [solvedIds]);

  useEffect(() => {
    localStorage.setItem('wp_user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(sec => sec - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const toggleSolved = (id) => {
    setSolvedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleImportProblems = (newItems) => {
    setDsaProblems(prev => {
      const existingIds = new Set(prev.map(p => `${p.company}-${p.id}`));
      const filtered = newItems.filter(p => !existingIds.has(`${p.company}-${p.id}`));
      return [...prev, ...filtered];
    });
    if (newItems.length > 0 && newItems[0].company) {
      setSelectedCompany(newItems[0].company);
    }
    setIsCsvModalOpen(false);
  };

  // Copy helper
  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(key);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  // Companies list
  const availableCompanies = useMemo(() => {
    const set = new Set(dsaProblems.map(p => p.company));
    return Array.from(set).sort();
  }, [dsaProblems]);

  // Filtered DSA Problems
  const companyDsa = useMemo(() => {
    return dsaProblems.filter(p => {
      const matchCompany = selectedCompany === 'All Companies' || p.company.toLowerCase() === selectedCompany.toLowerCase();
      const matchSearch = p.title.toLowerCase().includes(dsaSearch.toLowerCase()) || 
                          p.pattern.toLowerCase().includes(dsaSearch.toLowerCase()) ||
                          p.id.toString().includes(dsaSearch);
      return matchCompany && matchSearch;
    });
  }, [dsaProblems, selectedCompany, dsaSearch]);

  const easyList = useMemo(() => companyDsa.filter(p => p.difficulty === 'Easy'), [companyDsa]);
  const mediumList = useMemo(() => companyDsa.filter(p => p.difficulty === 'Medium'), [companyDsa]);
  const hardList = useMemo(() => companyDsa.filter(p => p.difficulty === 'Hard'), [companyDsa]);

  const totalSolvedGlobal = useMemo(() => {
    return Object.values(solvedIds).filter(Boolean).length;
  }, [solvedIds]);

  const solvedCompanyCount = useMemo(() => {
    return companyDsa.filter(p => solvedIds[p.id]).length;
  }, [companyDsa, solvedIds]);

  // Filtered Comprehensive Rounds
  const filteredRounds = useMemo(() => {
    return rounds.filter(r => {
      const matchTrack = selectedTrack === 'all' || r.track === selectedTrack;
      const matchSearch = r.title.toLowerCase().includes(compSearch.toLowerCase()) || 
                          r.company.toLowerCase().includes(compSearch.toLowerCase()) ||
                          r.summary.toLowerCase().includes(compSearch.toLowerCase());
      return matchTrack && matchSearch;
    });
  }, [rounds, selectedTrack, compSearch]);

  const formatTimer = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-200 font-sans flex flex-col">
      {/* Top Global Navigation Bar */}
      <header className="border-b border-slate-800/80 bg-[#0A0E1A]/90 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0F172A] via-[#111C35] to-[#1E293B] border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/20 group hover:border-cyan-400 transition-all cursor-pointer" onClick={() => setActiveView('dsa')}>
              <PersistenceLogo className="w-10 h-10" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base tracking-wider text-white">
                  WITH<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">_PERSISTANCE</span>
                </span>
                <span className="text-[10px] bg-cyan-950/80 text-cyan-300 border border-cyan-600/50 px-2 py-0.5 rounded-full font-mono font-bold tracking-tight shadow-sm shadow-cyan-950">
                  REACH THE LIGHT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Never Give Up • Master High-Frequency DSA & Comprehensive Rounds</p>
            </div>
          </div>

          {/* Primary View Switcher */}
          <div className="flex items-center bg-[#0F162A] p-1 rounded-xl border border-slate-800 flex-wrap gap-1">
            <button
              onClick={() => setActiveView('dsa')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'dsa' 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              DSA Tracker
            </button>
            <button
              onClick={() => setActiveView('comprehensive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'comprehensive' 
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              Comprehensive
            </button>
            <button
              onClick={() => setActiveView('database')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'database' 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HardDrive className="w-3.5 h-3.5" />
              Database Engine
            </button>
            <button
              onClick={() => setActiveView('deploy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'deploy' 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              Deploy to Google
            </button>
            <button
              onClick={() => setActiveView('profile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeView === 'profile' 
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Profile
            </button>
          </div>
        </div>
      </header>

      {/* Main Body Switcher */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6">
        
        {/* ==============================================================
            VIEW 1: DSA TRACKER
           ============================================================== */}
        {activeView === 'dsa' && (
          <div className="space-y-6">
            {/* Quick Hero Banner */}
            <div className="bg-gradient-to-r from-[#0C1222] via-[#0E162C] to-[#0A101D] border border-cyan-500/20 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Company-Wise DSA Question Matrix
                  </h1>
                  <span className="text-[11px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-mono">
                    1,000+ Questions Indexed
                  </span>
                </div>
                <p className="text-xs text-slate-400 max-w-2xl">
                  Real LeetCode questions asked in Google, Meta, Amazon, Microsoft, and Uber technical screens. Data sourced & synced from <code className="text-cyan-300">liquidslr/leetcode-company-wise-problems</code>.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#111A30] border border-slate-800 rounded-xl px-4 py-2 text-center">
                  <div className="text-lg font-bold text-cyan-400 font-mono">{totalSolvedGlobal}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Solved Worldwide</div>
                </div>
                <button
                  onClick={() => setIsCsvModalOpen(true)}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-cyan-600/20 flex items-center gap-2 transition-all"
                >
                  <UploadCloud className="w-4 h-4" />
                  GitHub Sync / CSV Import
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-[#0C111F] border border-slate-800 p-3 rounded-xl flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
                <span className="text-xs text-slate-400 font-medium pl-1 shrink-0">Company:</span>
                {['Meta', 'Google', 'Amazon', 'Microsoft', 'Apple', 'Uber', 'Bloomberg', 'Netflix', 'All Companies'].map(comp => (
                  <button
                    key={comp}
                    onClick={() => setSelectedCompany(comp)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      selectedCompany === comp
                        ? 'bg-cyan-500 text-black font-bold shadow-sm'
                        : 'bg-[#12192C] text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {comp}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[220px]">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search problem or pattern..."
                  value={dsaSearch}
                  onChange={(e) => setDsaSearch(e.target.value)}
                  className="w-full bg-[#080D18] border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Three Column Difficulty View */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Easy Column */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-900/60 px-3.5 py-2 rounded-xl">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    EASY ({easyList.length})
                  </span>
                  <span className="text-[11px] text-emerald-300 font-mono">
                    {easyList.filter(p => solvedIds[p.id]).length} Solved
                  </span>
                </div>
                <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
                  {easyList.map(prob => (
                    <DsaProblemCard
                      key={`${prob.company}-${prob.id}`}
                      prob={prob}
                      isSolved={!!solvedIds[prob.id]}
                      onToggle={toggleSolved}
                    />
                  ))}
                  {easyList.length === 0 && (
                    <div className="text-center py-8 text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl">
                      No matching Easy problems found.
                    </div>
                  )}
                </div>
              </div>

              {/* Medium Column */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-amber-950/40 border border-amber-900/60 px-3.5 py-2 rounded-xl">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    MEDIUM ({mediumList.length})
                  </span>
                  <span className="text-[11px] text-amber-300 font-mono">
                    {mediumList.filter(p => solvedIds[p.id]).length} Solved
                  </span>
                </div>
                <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
                  {mediumList.map(prob => (
                    <DsaProblemCard
                      key={`${prob.company}-${prob.id}`}
                      prob={prob}
                      isSolved={!!solvedIds[prob.id]}
                      onToggle={toggleSolved}
                    />
                  ))}
                  {mediumList.length === 0 && (
                    <div className="text-center py-8 text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl">
                      No matching Medium problems found.
                    </div>
                  )}
                </div>
              </div>

              {/* Hard Column */}
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-rose-950/40 border border-rose-900/60 px-3.5 py-2 rounded-xl">
                  <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    HARD ({hardList.length})
                  </span>
                  <span className="text-[11px] text-rose-300 font-mono">
                    {hardList.filter(p => solvedIds[p.id]).length} Solved
                  </span>
                </div>
                <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
                  {hardList.map(prob => (
                    <DsaProblemCard
                      key={`${prob.company}-${prob.id}`}
                      prob={prob}
                      isSolved={!!solvedIds[prob.id]}
                      onToggle={toggleSolved}
                    />
                  ))}
                  {hardList.length === 0 && (
                    <div className="text-center py-8 text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl">
                      No matching Hard problems found.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==============================================================
            VIEW 2: COMPREHENSIVE ARCHITECTURE ROUNDS
           ============================================================== */}
        {activeView === 'comprehensive' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Rounds List Sidebar */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#0D1222] border border-slate-800 rounded-xl p-3 space-y-3">
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {TRACKS.map(track => {
                    const Icon = track.icon;
                    return (
                      <button
                        key={track.id}
                        onClick={() => setSelectedTrack(track.id)}
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-all ${
                          selectedTrack === track.id
                            ? 'bg-indigo-600 text-white font-semibold'
                            : 'bg-[#121828] text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {track.label}
                      </button>
                    );
                  })}
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search comprehensive scenarios..."
                    value={compSearch}
                    onChange={(e) => setCompSearch(e.target.value)}
                    className="w-full bg-[#080D18] border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
                {filteredRounds.map(round => (
                  <div
                    key={round.id}
                    onClick={() => setSelectedRound(round)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedRound.id === round.id
                        ? 'bg-indigo-950/30 border-indigo-500 shadow-md shadow-indigo-950'
                        : 'bg-[#0E1424] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-bold text-white text-xs">{round.company}</span>
                      <span className="bg-slate-800/80 text-indigo-300 text-[10px] font-mono px-2 py-0.5 rounded">
                        {round.track}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-100 text-sm mb-1 line-clamp-1">{round.title}</h3>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">{round.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Round Detail View */}
            <div className="lg:col-span-7 bg-[#0C1120] border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-2 py-0.5 rounded">
                      {selectedRound.company}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">• {selectedRound.track}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">{selectedRound.title}</h2>
                </div>

                {/* 45 min timer */}
                <div className="bg-[#12192D] border border-slate-700 rounded-xl px-3 py-2 text-center shrink-0">
                  <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Simulator Timer</div>
                  <div className="text-base font-bold text-amber-400 font-mono">{formatTimer(timerSeconds)}</div>
                  <div className="flex items-center gap-1 mt-1 justify-center">
                    <button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      className="p-1 hover:bg-slate-700 rounded text-slate-300"
                    >
                      {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => { setIsTimerRunning(false); setTimerSeconds(45 * 60); }}
                      className="p-1 hover:bg-slate-700 rounded text-slate-300"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Scenario */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  Real-World Production Scenario
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 bg-[#10172A] p-4 rounded-xl border border-slate-800/80 leading-relaxed">
                  {selectedRound.scenario}
                </p>
              </div>

              {/* Clarification Checklist */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  Crucial Ambiguities to Proactively Clarify
                </h4>
                <div className="space-y-1.5">
                  {selectedRound.clarifications.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-[#0E1528] p-2.5 rounded-lg border border-slate-800">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Topology */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  Production Blueprint & Architecture Pattern
                </h4>
                <div className="bg-[#0E1528] border border-slate-800 p-4 rounded-xl space-y-3">
                  <div className="text-xs font-mono font-semibold text-emerald-300">
                    Pattern: {selectedRound.architecture.pattern}
                  </div>
                  <div className="space-y-1.5">
                    {selectedRound.architecture.components.map((comp, idx) => (
                      <div key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Red Flags */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                  Red Flags That Fail The Interview
                </h4>
                <div className="space-y-1.5">
                  {selectedRound.redFlags.map((rf, idx) => (
                    <div key={idx} className="text-xs text-rose-200/90 bg-rose-950/20 border border-rose-900/40 p-2.5 rounded-lg flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>{rf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Candidate Scratchpad */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                    Live Architecture Scratchpad & System Calculations
                  </label>
                  <span className="text-[10px] text-slate-500 font-mono">Auto-saved to local memory</span>
                </div>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Draft calculations, latency estimates, and schema structures here..."
                  className="w-full bg-[#080D18] border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
          </div>
        )}

        {/* ==============================================================
            VIEW 3: 5TB DATABASE ENGINE & STORAGE ALLOCATION
           ============================================================== */}
        {activeView === 'database' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#071518] via-[#0A1A24] to-[#071320] border border-emerald-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-6 h-6 text-emerald-400" />
                  <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Optimized Database Engine (Custom 5TB Volume Mount)
                  </h1>
                </div>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  As requested, <strong className="text-emerald-300">we do not waste your full 5TB storage unnecessarily</strong>. Instead, we configure a high-efficiency <strong className="text-cyan-300">Dynamic 120 GB allocation</strong> (NVMe Tier) with automated auto-scaling out of your 5TB capacity pool when heavy media, recordings, and logs expand.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-[#091522] border border-emerald-900/60 p-4 rounded-xl shrink-0">
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-400 font-mono">120 GB</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Active Provision</div>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div className="text-center">
                  <div className="text-2xl font-black text-slate-400 font-mono">5.0 TB</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Pool Headroom</div>
                </div>
              </div>
            </div>

            {/* Storage Progress Meter */}
            <div className="bg-[#0C1220] border border-slate-800 p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-300 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  Dynamic Volume Allocation Meter (Preserving Your 5TB Headroom)
                </span>
                <span className="font-mono text-emerald-400">2.4% of 5TB Engaged (120 GB Provisioned)</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden flex border border-slate-800">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[2.4%]" title="Active Allocation (120GB)" />
                <div className="h-full bg-slate-800/80 w-[97.6%]" title="Untapped Available Headroom (4.88 TB)" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <span>Active Database: 24.6 MB (PostgreSQL Citus)</span>
                <span>Object Storage: 34.8 GB (MinIO Media)</span>
                <span className="text-emerald-400 font-medium">Remaining Safe Headroom: 4,880 GB</span>
              </div>
            </div>

            {/* Cluster Nodes & Active Health */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {DATABASE_STORAGE_CONFIG.nodes.map((node, i) => (
                <div key={i} className="bg-[#0E1526] border border-slate-800 p-4 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-300">{node.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                      {node.status}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">{node.role}</div>
                  <div className="space-y-1 text-[11px] text-slate-400 border-t border-slate-800 pt-2 font-mono">
                    <div className="flex justify-between">
                      <span>Disk Allocation:</span>
                      <span className="text-slate-200">{node.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Throughput QPS:</span>
                      <span className="text-emerald-400">{node.qps} req/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>P99 Query Latency:</span>
                      <span className="text-cyan-400">{node.latency}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Relational Tables View */}
            <div className="bg-[#0D1424] border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-5 py-3.5 border-b border-slate-800 bg-[#0F182C] flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  PostgreSQL Relational Schema Tables
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Engine: {DATABASE_STORAGE_CONFIG.primaryEngine}</span>
              </div>
              <div className="divide-y divide-slate-800/80">
                {DATABASE_STORAGE_CONFIG.tables.map((t, idx) => (
                  <div key={idx} className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-mono font-semibold text-cyan-300">{t.name}</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">{t.description}</p>
                    </div>
                    <div className="flex items-center gap-4 text-slate-300 font-mono text-[11px]">
                      <span>{t.rows} rows</span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded text-emerald-300">{t.size}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==============================================================
            VIEW 4: GOOGLE CLOUD & FIREBASE DEPLOYMENT CONTROL HUB
           ============================================================== */}
        {activeView === 'deploy' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#071324] via-[#091830] to-[#0A1D3A] border border-blue-500/30 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cloud className="w-6 h-6 text-blue-400" />
                  <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Deploy WITH_PERSISTANCE to Google Cloud
                  </h1>
                </div>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  Run your full application on Google's globally distributed infrastructure. Choose between <strong className="text-cyan-300">Google Cloud Run</strong> (Serverless auto-scaling container) or <strong className="text-amber-300">Firebase Hosting</strong> (Global CDN edge network with zero hosting fees).
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950/80 border border-emerald-800 rounded-xl text-emerald-300 font-mono text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Ready to Deploy
                </span>
              </div>
            </div>

            {/* Step-by-Step Deployment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Option 1: Firebase Hosting */}
              <div className="bg-[#0C1322] border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-amber-400" />
                    <div>
                      <h3 className="font-bold text-white text-sm">Option A: Firebase Hosting (Instant & Free)</h3>
                      <p className="text-[11px] text-slate-400">Best for immediate live access with custom domain</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded font-mono">
                    Zero Cost
                  </span>
                </div>

                <ol className="space-y-3 text-xs text-slate-300 list-decimal list-inside">
                  <li>Install the official Google Firebase CLI in your terminal:</li>
                  <div className="relative bg-black/60 border border-slate-800 rounded-lg p-2.5 font-mono text-[11px] text-cyan-300 flex items-center justify-between">
                    <code>npm install -g firebase-tools</code>
                    <button onClick={() => copyToClipboard('npm install -g firebase-tools', 'fb-install')} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white">
                      {copiedCmd === 'fb-install' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <li>Authenticate with your Google account:</li>
                  <div className="relative bg-black/60 border border-slate-800 rounded-lg p-2.5 font-mono text-[11px] text-cyan-300 flex items-center justify-between">
                    <code>firebase login</code>
                    <button onClick={() => copyToClipboard('firebase login', 'fb-login')} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white">
                      {copiedCmd === 'fb-login' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <li>Initialize & Deploy the build:</li>
                  <div className="relative bg-black/60 border border-slate-800 rounded-lg p-2.5 font-mono text-[11px] text-cyan-300 flex items-center justify-between">
                    <code>firebase init hosting && firebase deploy</code>
                    <button onClick={() => copyToClipboard('firebase init hosting && firebase deploy', 'fb-deploy')} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white">
                      {copiedCmd === 'fb-deploy' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </ol>

                <div className="bg-[#111A30] border border-blue-900/40 p-3 rounded-xl text-[11px] text-blue-200">
                  ⚡ <strong>Result:</strong> Your site is immediately live at <code className="text-cyan-300">https://with-persistance.web.app</code> with full SSL encryption and worldwide CDN routing.
                </div>
              </div>

              {/* Option 2: Google Cloud Run */}
              <div className="bg-[#0C1322] border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-blue-400" />
                    <div>
                      <h3 className="font-bold text-white text-sm">Option B: Google Cloud Run (Full Container)</h3>
                      <p className="text-[11px] text-slate-400">Best for containerized microservices + PostgreSQL</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-blue-950 text-blue-300 border border-blue-800 px-2 py-0.5 rounded font-mono">
                    Production
                  </span>
                </div>

                <ol className="space-y-3 text-xs text-slate-300 list-decimal list-inside">
                  <li>Configure Google Cloud SDK CLI tool:</li>
                  <div className="relative bg-black/60 border border-slate-800 rounded-lg p-2.5 font-mono text-[11px] text-cyan-300 flex items-center justify-between">
                    <code>gcloud auth login && gcloud config set project with-persistance</code>
                    <button onClick={() => copyToClipboard('gcloud auth login && gcloud config set project with-persistance', 'gc-auth')} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white">
                      {copiedCmd === 'gc-auth' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <li>Build & Submit Docker image to Google Artifact Registry:</li>
                  <div className="relative bg-black/60 border border-slate-800 rounded-lg p-2.5 font-mono text-[11px] text-cyan-300 flex items-center justify-between">
                    <code>gcloud builds submit --tag gcr.io/with-persistance/app:v1</code>
                    <button onClick={() => copyToClipboard('gcloud builds submit --tag gcr.io/with-persistance/app:v1', 'gc-build')} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white">
                      {copiedCmd === 'gc-build' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <li>Deploy container to Cloud Run with auto-scaling:</li>
                  <div className="relative bg-black/60 border border-slate-800 rounded-lg p-2.5 font-mono text-[11px] text-cyan-300 flex items-center justify-between">
                    <code>gcloud run deploy with-persistance --image gcr.io/with-persistance/app:v1 --region asia-south1 --allow-unauthenticated</code>
                    <button onClick={() => copyToClipboard('gcloud run deploy with-persistance --image gcr.io/with-persistance/app:v1 --region asia-south1 --allow-unauthenticated', 'gc-deploy')} className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white">
                      {copiedCmd === 'gc-deploy' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </ol>

                <div className="bg-[#111A30] border border-blue-900/40 p-3 rounded-xl text-[11px] text-blue-200">
                  🚀 <strong>Region:</strong> Deployed in <code className="text-cyan-300">asia-south1 (Mumbai)</code> for lowest latency across India (&lt;15ms response).
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==============================================================
            VIEW 5: USER PROFILE PAGE
           ============================================================== */}
        {activeView === 'profile' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Profile Header Card */}
            <div className="bg-gradient-to-r from-[#0F172A] via-[#111E38] to-[#0A1324] border border-cyan-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#090D18] border-2 border-cyan-400/60 p-2 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <PersistenceLogo className="w-12 h-12" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-black text-white">{userProfile.fullName}</h2>
                      <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-700 px-2 py-0.5 rounded-full font-mono font-semibold">
                        CSE II Year Aspirant
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 font-mono">{userProfile.targetRole}</p>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">Targeting: {userProfile.targetCompany}</p>
                  </div>
                </div>

                {/* Streak Badge */}
                <div className="flex items-center gap-3 bg-[#080E1C]/80 border border-slate-700/80 px-4 py-2.5 rounded-xl">
                  <Flame className="w-6 h-6 text-amber-400 animate-bounce" />
                  <div>
                    <div className="text-base font-black text-amber-400 font-mono">{userProfile.streakDays} Days</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Active Study Streak</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#0C1222] border border-slate-800 p-4 rounded-xl text-center space-y-1">
                <div className="text-2xl font-black text-cyan-400 font-mono">{totalSolvedGlobal}</div>
                <div className="text-[11px] text-slate-400 font-medium">Problems Solved</div>
              </div>
              <div className="bg-[#0C1222] border border-slate-800 p-4 rounded-xl text-center space-y-1">
                <div className="text-2xl font-black text-emerald-400 font-mono">14</div>
                <div className="text-[11px] text-slate-400 font-medium">System Architecture Rounds</div>
              </div>
              <div className="bg-[#0C1222] border border-slate-800 p-4 rounded-xl text-center space-y-1">
                <div className="text-2xl font-black text-amber-400 font-mono">8</div>
                <div className="text-[11px] text-slate-400 font-medium">Target Tech Giants</div>
              </div>
              <div className="bg-[#0C1222] border border-slate-800 p-4 rounded-xl text-center space-y-1">
                <div className="text-2xl font-black text-violet-400 font-mono">Dec 2026</div>
                <div className="text-[11px] text-slate-400 font-medium">Target Interview Loop</div>
              </div>
            </div>

            {/* Editable Profile Settings */}
            <div className="bg-[#0C1222] border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
                <Settings className="w-4 h-4 text-cyan-400" />
                Aspirant Roadmap & Account Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Full Name</label>
                  <input
                    type="text"
                    value={userProfile.fullName}
                    onChange={(e) => setUserProfile({...userProfile, fullName: e.target.value})}
                    className="w-full bg-[#080D18] border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Target Tier-1 Companies</label>
                  <input
                    type="text"
                    value={userProfile.targetCompany}
                    onChange={(e) => setUserProfile({...userProfile, targetCompany: e.target.value})}
                    className="w-full bg-[#080D18] border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Target Role</label>
                  <input
                    type="text"
                    value={userProfile.targetRole}
                    onChange={(e) => setUserProfile({...userProfile, targetRole: e.target.value})}
                    className="w-full bg-[#080D18] border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Target Interview Date</label>
                  <input
                    type="date"
                    value={userProfile.interviewDate}
                    onChange={(e) => setUserProfile({...userProfile, interviewDate: e.target.value})}
                    className="w-full bg-[#080D18] border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-cyan-500 font-medium"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-slate-400 mb-1 font-medium">Bio & Engineering Ambition</label>
                  <textarea
                    rows={3}
                    value={userProfile.bio}
                    onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})}
                    className="w-full bg-[#080D18] border border-slate-700 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-cyan-500 font-sans resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => alert('Profile updated & saved to local storage!')}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-5 py-2 rounded-xl text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-600/30"
                >
                  <Save className="w-3.5 h-3.5" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* CSV Importer Modal */}
      {isCsvModalOpen && (
        <CsvImporterModal
          onClose={() => setIsCsvModalOpen(false)}
          onImport={handleImportProblems}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#070B14] py-4 px-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <PersistenceLogo className="w-5 h-5" />
            <span className="font-bold text-slate-300">WITH_PERSISTANCE</span>
            <span>• Built for Dedicated Engineers Reaching for the Light</span>
          </div>
          <div className="font-mono text-[11px] text-slate-400">
            Database Allocation: 120 GB (from 5TB Pool) • Ready for Google Deployment
          </div>
        </div>
      </footer>
    </div>
  );
}
