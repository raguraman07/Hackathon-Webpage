import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Navigation,
  Clock,
  Compass,
  CheckCircle2,
  Play,
  RotateCcw,
  ExternalLink,
  Sparkles,
  Award,
  Layers,
  Info,
  CornerUpLeft
} from 'lucide-react';

// Exact Google Maps Route Link provided by User
const GOOGLE_MAPS_ROUTE_URL = "https://maps.app.goo.gl/u5io47xvY7jRt38n9?g_st=ac";

interface Checkpoint {
  id: string;
  name: string;
  subtitle: string;
  distance: string;
  instruction: string;
  x: number;
  y: number;
  progressThreshold: number; // 0 to 100
  iconText: string;
  landmarkRight?: string;
  landmarkLeft?: string;
}

const ROUTE_CHECKPOINTS: Checkpoint[] = [
  {
    id: 'cp1',
    name: 'SNS College of Technology',
    subtitle: 'SNS Kalvi Nagar Entry Gate (NH-209)',
    distance: '0 m',
    instruction: 'Start at Main Entrance Gate',
    x: 80,
    y: 460,
    progressThreshold: 0,
    iconText: '01'
  },
  {
    id: 'cp2',
    name: 'Dept. of ECE',
    subtitle: 'Head East past Dept of Electronics & Comm.',
    distance: '110 m',
    instruction: 'Head East along campus access road',
    x: 240,
    y: 460,
    progressThreshold: 20,
    iconText: '02',
    landmarkRight: 'Dept of ECE (Right)'
  },
  {
    id: 'cp3',
    name: 'College of Physiotherapy & SNS Lawn',
    subtitle: 'Turn Left towards Central Campus Boulevard',
    distance: '250 m',
    instruction: 'Turn Left onto Main Campus Avenue',
    x: 740,
    y: 460,
    progressThreshold: 45,
    iconText: '03',
    landmarkRight: 'SNS College of Physiotherapy'
  },
  {
    id: 'cp4',
    name: 'SNS Playground & Open Auditorium',
    subtitle: 'Continue straight along Campus Avenue',
    distance: '380 m',
    instruction: 'Straight past Sports Complex & Auditorium',
    x: 740,
    y: 220,
    progressThreshold: 75,
    iconText: '04',
    landmarkRight: 'SNS Playground & Open Auditorium',
    landmarkLeft: 'SNS College Shuttle Stop'
  },
  {
    id: 'cp5',
    name: 'Dept. of EEE Junction',
    subtitle: 'Turn Left at Electrical & Electronics Block',
    distance: '460 m',
    instruction: 'Turn Left at Dept of EEE',
    x: 650,
    y: 110,
    progressThreshold: 90,
    iconText: '05',
    landmarkLeft: 'Dept. of EEE'
  },
  {
    id: 'cp6',
    name: 'SNS DT Playhouse',
    subtitle: 'SNS College of Engineering (Autonomous)',
    distance: '500 m',
    instruction: 'Arrived at 24-Hour Hackathon Arena (Right)',
    x: 480,
    y: 110,
    progressThreshold: 100,
    iconText: '06'
  }
];

export const CampusNavigation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [activeHoverCp, setActiveHoverCp] = useState<string | null>(null);
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const animationRef = useRef<number | null>(null);

  // Guided Navigation Animation Loop
  useEffect(() => {
    if (isPlaying) {
      const duration = 8000; // 8 seconds complete route guided tour
      const startTime = performance.now();
      const initialProgress = progress >= 100 ? 0 : progress;

      const animateStep = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const newProgress = Math.min(100, initialProgress + (elapsed / duration) * (100 - initialProgress));
        setProgress(newProgress);

        if (newProgress < 100) {
          animationRef.current = requestAnimationFrame(animateStep);
        } else {
          setIsPlaying(false);
        }
      };

      animationRef.current = requestAnimationFrame(animateStep);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying]);

  const handleStartNavigation = () => {
    if (progress >= 100) setProgress(0);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  // Interpolate exact GPS Beacon position along SVG route segments
  const getCurrentGpsCoords = (p: number) => {
    if (p <= 0) return { x: ROUTE_CHECKPOINTS[0].x, y: ROUTE_CHECKPOINTS[0].y };
    if (p >= 100) return { x: ROUTE_CHECKPOINTS[ROUTE_CHECKPOINTS.length - 1].x, y: ROUTE_CHECKPOINTS[ROUTE_CHECKPOINTS.length - 1].y };

    for (let i = 0; i < ROUTE_CHECKPOINTS.length - 1; i++) {
      const cpA = ROUTE_CHECKPOINTS[i];
      const cpB = ROUTE_CHECKPOINTS[i + 1];
      if (p >= cpA.progressThreshold && p <= cpB.progressThreshold) {
        const ratio = (p - cpA.progressThreshold) / (cpB.progressThreshold - cpA.progressThreshold);
        return {
          x: cpA.x + (cpB.x - cpA.x) * ratio,
          y: cpA.y + (cpB.y - cpA.y) * ratio
        };
      }
    }
    return { x: ROUTE_CHECKPOINTS[0].x, y: ROUTE_CHECKPOINTS[0].y };
  };

  const currentGps = getCurrentGpsCoords(progress);
  const activeCheckpoint = ROUTE_CHECKPOINTS.slice().reverse().find((c) => progress >= c.progressThreshold) || ROUTE_CHECKPOINTS[0];

  return (
    <section id="campus-map" className="py-24 bg-[#0B0B0B] relative border-t border-white/5 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FFD400]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#FFC107]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20 text-xs font-mono text-[#FFD400] uppercase tracking-widest mb-4"
          >
            <Compass className="w-3.5 h-3.5 animate-spin-slow text-[#FFD400]" />
            <span>Official Google Maps Campus Route</span>
          </motion.div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Wayfinding To <span className="text-[#FFD400] drop-shadow-[0_0_25px_rgba(255,212,0,0.4)]">SNS DT Playhouse</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            500m guided turn-by-turn roadmap from SNS College of Technology to SNS DT Playhouse at SNS College of Engineering.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Vector Roadmap (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative rounded-3xl bg-[#0F0F14] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl group">
              
              {/* Map Header Toolbar */}
              <div className="p-4 sm:px-6 bg-black/70 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#10B981] animate-ping" />
                  <span className="text-xs font-mono text-gray-300 font-semibold tracking-wide flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#FFD400]" />
                    FASTEST ROUTE (500 METERS)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleStartNavigation}
                    className="px-4 py-2 rounded-xl bg-[#FFD400] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FFD400]/20 hover:bg-[#FFE033] active:scale-95 transition-all flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isPlaying ? 'Navigating...' : progress >= 100 ? 'Replay Route' : 'Start Navigation'}</span>
                  </button>

                  <button
                    onClick={handleReset}
                    title="Reset Route"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <a
                    href={GOOGLE_MAPS_ROUTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-[#FFD400] text-gray-200 hover:text-black text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Vector SVG Roadmap (900 x 550 viewBox) */}
              <div className="relative w-full aspect-[16/10] bg-[#0A0A0F] overflow-hidden select-none">
                <svg
                  viewBox="0 0 900 550"
                  className="w-full h-full object-cover"
                >
                  <defs>
                    {/* Glowing Line Gradient */}
                    <linearGradient id="routeGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="40%" stopColor="#FFD400" />
                      <stop offset="100%" stopColor="#FFE033" />
                    </linearGradient>

                    {/* Glow Filter */}
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Green Lawns & Campus Gardens */}
                  <rect x="50" y="50" width="380" height="350" rx="30" fill="#064E3B" opacity="0.12" />
                  <rect x="790" y="50" width="80" height="420" rx="20" fill="#064E3B" opacity="0.15" />
                  <rect x="470" y="270" width="220" height="150" rx="24" fill="#064E3B" opacity="0.18" />

                  {/* Secondary Connecting Roads */}
                  <path
                    d="M 50 460 L 850 460 M 740 50 L 740 490 M 480 50 L 480 490 M 240 50 L 240 490"
                    stroke="#1E1E28"
                    strokeWidth="10"
                    strokeDasharray="6 6"
                    fill="none"
                  />

                  {/* MAIN ROUTE ROAD BASE: Head East (80->740, y:460) -> Turn Left North (740, 460->110) -> Turn Left West (740->480, y:110) */}
                  <path
                    d="M 80 460 L 740 460 L 740 110 L 480 110"
                    stroke="#181822"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M 80 460 L 740 460 L 740 110 L 480 110"
                    stroke="#2A2A3C"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />

                  {/* VECTOR BUILDINGS & LANDMARKS ALONG EXACT ROUTE */}

                  {/* Origin Building: SNS College of Technology */}
                  <g
                    className="cursor-pointer transition-opacity hover:opacity-100 opacity-90"
                    onClick={() => setSelectedBuilding('SNS College of Technology')}
                  >
                    <rect x="20" y="360" width="120" height="75" rx="14" fill="#14141C" stroke="#10B981" strokeWidth="2" />
                    <rect x="30" y="370" width="100" height="55" rx="8" fill="#1A2A22" />
                    <text x="80" y="396" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">SNS Tech</text>
                    <text x="80" y="412" fill="#A7F3D0" fontSize="8" fontFamily="monospace" textAnchor="middle">Main Gate Entry</text>
                  </g>

                  {/* Landmark 1: Dept of ECE */}
                  <g
                    className="cursor-pointer transition-opacity hover:opacity-100 opacity-85"
                    onClick={() => setSelectedBuilding('Dept. of ECE')}
                  >
                    <rect x="180" y="350" width="110" height="65" rx="12" fill="#14141C" stroke="#374151" strokeWidth="1.5" />
                    <text x="235" y="380" fill="#E5E7EB" fontSize="10" fontWeight="bold" textAnchor="middle">Dept. of ECE</text>
                    <text x="235" y="396" fill="#9CA3AF" fontSize="8" fontFamily="monospace" textAnchor="middle">Electronics & Comm</text>
                  </g>

                  {/* Landmark 2: SNS College of Physiotherapy & Lawn */}
                  <g
                    className="cursor-pointer transition-opacity hover:opacity-100 opacity-85"
                    onClick={() => setSelectedBuilding('SNS College of Physiotherapy')}
                  >
                    <rect x="470" y="350" width="140" height="70" rx="14" fill="#14141C" stroke="#374151" strokeWidth="1.5" />
                    <text x="540" y="380" fill="#E5E7EB" fontSize="10" fontWeight="bold" textAnchor="middle">Physiotherapy College</text>
                    <text x="540" y="396" fill="#9CA3AF" fontSize="8" fontFamily="monospace" textAnchor="middle">& SNS Lawn</text>
                  </g>

                  {/* Landmark 3: SNS Playground & Open Auditorium */}
                  <g
                    className="cursor-pointer transition-opacity hover:opacity-100 opacity-90"
                    onClick={() => setSelectedBuilding('SNS Playground & Open Auditorium')}
                  >
                    <rect x="770" y="160" width="110" height="150" rx="16" fill="#064E3B" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="825" y="225" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">SNS Playground</text>
                    <text x="825" y="245" fill="#E5E7EB" fontSize="9" fontWeight="bold" textAnchor="middle">& Open Auditorium</text>
                  </g>

                  {/* Landmark 4: SNS College Shuttle Stop & The Helvetika */}
                  <g
                    className="cursor-pointer transition-opacity hover:opacity-100 opacity-85"
                    onClick={() => setSelectedBuilding('SNS Shuttle Stop & The Helvetika')}
                  >
                    <rect x="580" y="170" width="120" height="65" rx="12" fill="#14141C" stroke="#374151" strokeWidth="1.5" />
                    <text x="640" y="200" fill="#E5E7EB" fontSize="10" fontWeight="bold" textAnchor="middle">Shuttle Stop</text>
                    <text x="640" y="216" fill="#9CA3AF" fontSize="8" fontFamily="monospace" textAnchor="middle">The Helvetika</text>
                  </g>

                  {/* Landmark 5: Dept of EEE (Junction Turn) */}
                  <g
                    className="cursor-pointer transition-opacity hover:opacity-100 opacity-90"
                    onClick={() => setSelectedBuilding('Dept. of EEE')}
                  >
                    <rect x="580" y="45" width="120" height="60" rx="12" fill="#14141C" stroke="#FFD400" strokeOpacity="0.4" strokeWidth="2" />
                    <text x="640" y="75" fill="#FFD400" fontSize="10" fontWeight="bold" textAnchor="middle">Dept. of EEE</text>
                    <text x="640" y="90" fill="#9CA3AF" fontSize="8" fontFamily="monospace" textAnchor="middle">Turn Left Junction</text>
                  </g>

                  {/* DESTINATION BUILDING: SNS DT PLAYHOUSE @ SNS COLLEGE OF ENGINEERING */}
                  <g
                    className="cursor-pointer"
                    onClick={() => setSelectedBuilding('SNS DT Playhouse')}
                  >
                    <rect x="330" y="45" width="150" height="110" rx="18" fill="#FFD400" fillOpacity="0.08" stroke="#FFD400" strokeWidth="2.5" filter="url(#glow)" />
                    <rect x="340" y="55" width="130" height="90" rx="14" fill="#1A1910" stroke="#FFD400" strokeWidth="1.5" />
                    <text x="405" y="88" fill="#FFD400" fontSize="12" fontWeight="900" textAnchor="middle">SNS DT PLAYHOUSE</text>
                    <text x="405" y="106" fill="#FFFFFF" fontSize="9" fontWeight="bold" letterSpacing="0.5" textAnchor="middle">SNS COLLEGE OF ENG.</text>

                    {/* Venue Badge */}
                    <rect x="360" y="118" width="90" height="18" rx="9" fill="#FFD400" />
                    <text x="405" y="131" fill="#000000" fontSize="9" fontWeight="900" textAnchor="middle">VENUE READY</text>
                  </g>

                  {/* Vector Trees */}
                  <g fill="#10B981" opacity="0.6">
                    <circle cx="150" cy="430" r="8" />
                    <circle cx="320" cy="430" r="9" />
                    <circle cx="430" cy="430" r="10" />
                    <circle cx="710" cy="430" r="9" />
                    <circle cx="710" cy="310" r="11" />
                    <circle cx="710" cy="140" r="10" />
                    <circle cx="530" cy="140" r="9" />
                  </g>

                  {/* ACTIVE ANIMATED GLOWING ROUTE PATH */}
                  <path
                    d="M 80 460 L 740 460 L 740 110 L 480 110"
                    stroke="url(#routeGlow)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="1200"
                    strokeDashoffset={1200 - (1200 * progress) / 100}
                    filter="url(#glow)"
                    fill="none"
                  />

                  {/* Moving GPS Position Beacon Dot */}
                  {progress > 2 && (
                    <g opacity="0.95">
                      <circle cx={currentGps.x} cy={currentGps.y} r="18" fill="#FFD400" opacity="0.25" className="animate-ping" />
                      <circle cx={currentGps.x} cy={currentGps.y} r="11" fill="#FFD400" opacity="0.5" />
                      <circle cx={currentGps.x} cy={currentGps.y} r="5" fill="#FFFFFF" />
                    </g>
                  )}

                  {/* Checkpoint Nodes along SVG Route */}
                  {ROUTE_CHECKPOINTS.map((cp) => {
                    const isReached = progress >= cp.progressThreshold;
                    const isHovered = activeHoverCp === cp.id;

                    return (
                      <g
                        key={cp.id}
                        className="cursor-pointer"
                        onMouseEnter={() => setActiveHoverCp(cp.id)}
                        onMouseLeave={() => setActiveHoverCp(null)}
                        onClick={() => setProgress(cp.progressThreshold)}
                      >
                        <circle
                          cx={cp.x}
                          cy={cp.y}
                          r={isHovered ? '16' : '12'}
                          fill={isReached ? '#FFD400' : '#1F2937'}
                          fillOpacity={isReached ? '0.35' : '0.6'}
                          stroke={isReached ? '#FFD400' : '#4B5563'}
                          strokeWidth="2"
                          className="transition-all duration-300"
                        />
                        <circle
                          cx={cp.x}
                          cy={cp.y}
                          r="6"
                          fill={isReached ? '#FFD400' : '#9CA3AF'}
                        />

                        {/* Hover Tooltip */}
                        {isHovered && (
                          <g transform={`translate(${cp.x}, ${cp.y - 25})`}>
                            <rect x="-65" y="-18" width="130" height="24" rx="6" fill="#000000" stroke="#FFD400" strokeWidth="1" />
                            <text x="0" y="-2" fill="#FFD400" fontSize="10" fontWeight="bold" textAnchor="middle">
                              {cp.name} ({cp.distance})
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}

                  {/* ORIGIN PIN */}
                  <g transform="translate(80, 460)">
                    <circle cx="0" cy="0" r="22" fill="#10B981" opacity="0.2" className="animate-ping" />
                    <rect x="-45" y="16" width="90" height="20" rx="6" fill="#10B981" />
                    <text x="0" y="30" fill="#000000" fontSize="9" fontWeight="900" textAnchor="middle">START: SNS TECH</text>
                  </g>

                  {/* DESTINATION PIN */}
                  <g transform="translate(480, 110)">
                    <circle cx="0" cy="0" r="28" fill="#FFD400" opacity="0.3" className="animate-ping" />
                    <path d="M 0 -22 L 14 0 L 0 8 L -14 0 Z" fill="#FFD400" />
                    <circle cx="0" cy="-8" r="4" fill="#000000" />
                  </g>
                </svg>

                {/* Live Instruction Banner at Top of Map */}
                <div className="absolute top-4 left-4 right-4 p-3 rounded-2xl bg-black/85 border border-white/10 backdrop-blur-md flex items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#FFD400] font-bold">
                    <CornerUpLeft className="w-4 h-4 text-[#FFD400] animate-bounce" />
                    <span>STEP {activeCheckpoint.iconText}: {activeCheckpoint.instruction}</span>
                  </div>
                  <span className="text-gray-400 text-[11px] hidden sm:inline">{activeCheckpoint.distance} / 500m</span>
                </div>

                {/* Floating Compass Rose Widget */}
                <div className="absolute bottom-4 right-4 p-3 rounded-2xl bg-black/85 border border-white/10 backdrop-blur-md flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-[#FFD400]/40 flex items-center justify-center">
                    <Compass className="w-4 h-4 text-[#FFD400] animate-spin-slow" />
                  </div>
                  <div className="text-[10px] font-mono text-gray-400">
                    <span className="block font-bold text-white">EAST → NORTH → WEST</span>
                    <span>SNS CAMPUS ROUTE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Zone Dismissible Banner */}
            <AnimatePresence>
              {selectedBuilding && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 rounded-2xl bg-[#0F0F14] border border-[#FFD400]/40 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#FFD400]" />
                    <span className="text-gray-300">Selected Landmark: <strong className="text-white">{selectedBuilding}</strong></span>
                  </div>
                  <button
                    onClick={() => setSelectedBuilding(null)}
                    className="text-gray-500 hover:text-white font-mono"
                  >
                    DISMISS [X]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Route Stats & Step-by-Step Google Roadmap (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Route Stats Summary */}
            <div className="p-6 rounded-3xl bg-[#0F0F14] border border-white/10 space-y-5 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#FFD400] uppercase tracking-widest block">DESTINATION</span>
                  <h3 className="font-heading font-extrabold text-xl text-white">SNS DT Playhouse</h3>
                  <p className="text-xs text-gray-400 mt-0.5">SNS College of Engineering</p>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black border border-white/5 space-y-1">
                  <span className="text-gray-400 font-mono text-[10px] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#FFD400]" />
                    EST. DRIVE / WALK
                  </span>
                  <p className="font-bold text-white text-sm">2 Minutes (500m)</p>
                </div>

                <div className="p-3 rounded-xl bg-black border border-white/5 space-y-1">
                  <span className="text-gray-400 font-mono text-[10px] flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#FFD400]" />
                    ROUTE ACCESSIBILITY
                  </span>
                  <p className="font-bold text-white text-sm">Campus Access</p>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_ROUTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#FFD400] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FFD400]/20 hover:bg-[#FFE033] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Navigate in Google Maps</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Turn-by-Turn Route Timeline */}
            <div className="p-6 rounded-3xl bg-[#0F0F14] border border-white/10 space-y-4">
              <h4 className="font-heading font-bold text-base text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFD400]" />
                Turn-by-Turn Roadmap
              </h4>

              <div className="space-y-3 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-[2px] before:bg-white/10">
                {ROUTE_CHECKPOINTS.map((cp) => {
                  const isReached = progress >= cp.progressThreshold;

                  return (
                    <div
                      key={cp.id}
                      onClick={() => setProgress(cp.progressThreshold)}
                      className={`relative flex items-start gap-3.5 p-3 rounded-2xl border transition-all cursor-pointer ${
                        isReached
                          ? 'bg-[#FFD400]/10 border-[#FFD400]/40 text-white'
                          : 'bg-black/40 border-white/5 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 z-10 ${
                          isReached
                            ? 'bg-[#FFD400] text-black shadow-lg shadow-[#FFD400]/20'
                            : 'bg-gray-800 text-gray-400'
                        }`}
                      >
                        {isReached ? <CheckCircle2 className="w-4 h-4" /> : cp.iconText}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h5 className={`font-bold text-xs ${isReached ? 'text-[#FFD400]' : 'text-gray-300'}`}>
                            {cp.name}
                          </h5>
                          <span className="text-[10px] font-mono text-gray-500">{cp.distance}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {cp.instruction}
                        </p>
                        {cp.landmarkRight && (
                          <span className="inline-block mt-1 text-[10px] font-mono text-[#FFD400]/80">
                            • {cp.landmarkRight}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
