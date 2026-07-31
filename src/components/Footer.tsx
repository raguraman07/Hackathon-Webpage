import React from 'react';
import { Terminal, ArrowUp, Heart } from 'lucide-react';
import { HACKATHON_DETAILS } from '../data/hackathonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFD400] text-black font-black text-xl flex items-center justify-center shadow-lg shadow-[#FFD400]/20">
              <Terminal className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-heading font-black text-2xl text-white tracking-wider">
                CORE<span className="text-[#FFD400]">X</span>ATHON '26
              </span>
              <p className="text-xs text-[#FFD400] font-mono">
                {HACKATHON_DETAILS.department}
              </p>
              <p className="text-xs text-gray-500 font-mono">
                {HACKATHON_DETAILS.collegeName}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <a href="#about" className="hover:text-[#FFD400] transition-colors">About</a>
            <a href="#timeline" className="hover:text-[#FFD400] transition-colors">Timeline</a>
            <a href="#prizes" className="hover:text-[#FFD400] transition-colors">Prizes</a>
            <a href="#schedule" className="hover:text-[#FFD400] transition-colors">Schedule</a>
            <a href="#rules" className="hover:text-[#FFD400] transition-colors">Rules</a>
            <a href="#speakers" className="hover:text-[#FFD400] transition-colors">Mentors</a>
            <a href="#faq" className="hover:text-[#FFD400] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#FFD400] transition-colors">Venue</a>
          </div>

          {/* Back To Top Floating Trigger */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-[#0F0F14] border border-white/10 text-gray-400 hover:text-black hover:bg-[#FFD400] hover:border-[#FFD400] transition-all duration-300 flex items-center gap-2 text-xs font-bold uppercase tracking-wider group"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 {HACKATHON_DETAILS.name}. Conducted by {HACKATHON_DETAILS.department}, {HACKATHON_DETAILS.collegeName}. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed & Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-[#FFD400] fill-[#FFD400]" />
            <span>for Student Developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
