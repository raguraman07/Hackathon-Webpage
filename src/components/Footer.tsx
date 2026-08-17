import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { HACKATHON_DETAILS } from '../data/hackathonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 py-12 sm:py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/5 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/corexathon-logo.png"
                alt="COREXATHON '26 Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-[#FFD400]/40 shadow-lg shadow-[#FFD400]/20 shrink-0"
              />
              <div className="h-10 sm:h-12 px-2.5 sm:px-3 py-1 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-white/10 shrink-0">
                <img src="/sns-logo.png" alt="SNS Institutions Logo" className="h-7 sm:h-9 object-contain" />
              </div>
            </div>
            <div>
              <span className="font-heading font-black text-xl sm:text-2xl text-white tracking-wider block">
                CORE<span className="text-[#FFD400]">X</span>ATHON '26
              </span>
              <p className="text-[11px] sm:text-xs text-[#FFD400] font-mono">
                {HACKATHON_DETAILS.department}
              </p>
              <p className="text-[11px] sm:text-xs text-gray-400 font-mono">
                {HACKATHON_DETAILS.collegeName}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400">
            <a href="#about" className="hover:text-[#FFD400] transition-colors py-1">About</a>
            <a href="#timeline" className="hover:text-[#FFD400] transition-colors py-1">Timeline</a>
            <a href="#prizes" className="hover:text-[#FFD400] transition-colors py-1">Prizes</a>
            <a href="#schedule" className="hover:text-[#FFD400] transition-colors py-1">Schedule</a>
            <a href="#rules" className="hover:text-[#FFD400] transition-colors py-1">Rules</a>
            <a href="#faq" className="hover:text-[#FFD400] transition-colors py-1">FAQ</a>
            <a href="#contact" className="hover:text-[#FFD400] transition-colors py-1">Venue</a>
          </div>

          {/* Back To Top Floating Trigger */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2.5 rounded-2xl bg-[#0F0F14] border border-white/10 text-gray-400 hover:text-black hover:bg-[#FFD400] hover:border-[#FFD400] transition-all duration-300 flex items-center gap-2 text-xs font-bold uppercase tracking-wider group min-h-[44px]"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-gray-500 gap-3 text-center sm:text-left">
          <p>© 2026 {HACKATHON_DETAILS.name}. Conducted by {HACKATHON_DETAILS.department}, {HACKATHON_DETAILS.collegeName}. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed & Developed By Raguraman D</span>
            <Heart className="w-3.5 h-3.5 text-[#FFD400] fill-[#FFD400]" />

          </div>
        </div>
      </div>
    </footer>
  );
};
