import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Sparkles, ArrowRight, } from 'lucide-react';
import { HACKATHON_DETAILS } from '../data/hackathonData';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Live Countdown Calculation
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(HACKATHON_DETAILS.targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-black">
      {/* Dynamic Background Glowing Beams & Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD400]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FFC107]/5 rounded-full blur-[120px] pointer-events-none" />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Institution & Event Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2 rounded-full bg-[#111116] border border-[#FFD400]/30 shadow-xl shadow-[#FFD400]/10 mb-8"
        >
          <div className="h-7 px-2 py-0.5 rounded-lg bg-white flex items-center justify-center">
            <img src="/sns-logo.png" alt="SNS Institutions Logo" className="h-6 object-contain" />
          </div>
          <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFD400]">
            Organized by {HACKATHON_DETAILS.department}
          </span>
          <span className="text-xs text-gray-500">|</span>
          <span className="text-xs font-medium text-gray-300">{HACKATHON_DETAILS.collegeName}</span>
        </motion.div>

        {/* Official COREXATHON Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#FFD400] via-[#FF8800] to-[#FFD400] blur-md opacity-80 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <img
              src="/corexathon-logo.png"
              alt="COREXATHON '26 Official Logo"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-[#FFD400] shadow-2xl shadow-[#FFD400]/40 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Main Title & Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[1.05]"
        >
          CORE<span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.6)]">X</span>ATHON
          <span className="block text-3xl sm:text-5xl lg:text-6xl text-gray-400 font-extrabold mt-2 tracking-normal">
            '26
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-2xl text-gray-300 font-light tracking-wide"
        >
          {HACKATHON_DETAILS.tagline}
        </motion.p>

        {/* Key Event Badges (Date & Location) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-300"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111116] border border-white/10">
            <Calendar className="w-4 h-4 text-[#FFD400]" />
            <span>{HACKATHON_DETAILS.dates}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111116] border border-white/10">
            <MapPin className="w-4 h-4 text-[#FFD400]" />
            <span>{HACKATHON_DETAILS.venue}</span>
          </div>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto p-6 rounded-2xl bg-[#0F0F14]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative group hover:border-[#FFD400]/40 transition-colors"
        >
          <div className="text-xs font-mono text-[#FFD400] uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hackathon Begins In</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div key={idx} className="bg-black/60 rounded-xl p-3 sm:p-4 border border-white/5 text-center">
                <span className="font-heading font-black text-3xl sm:text-5xl text-white tracking-wider block">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-gray-400 mt-1 block">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Primary Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFD400] text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(255,212,0,0.4)] hover:bg-[#FFE033] hover:shadow-[0_0_45px_rgba(255,212,0,0.6)] active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Register Team Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2 text-xs font-mono text-gray-500"
        >
          <span>SCROLL TO DISCOVER</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 rounded-full bg-[#FFD400] animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
