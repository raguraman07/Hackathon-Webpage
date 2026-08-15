import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { HACKATHON_DETAILS } from '../data/hackathonData';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Rules', href: '#rules' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Venue', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-3 sm:py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <img 
              src="/corexathon-logo.png" 
              alt="COREXATHON '26 Logo" 
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-[#FFD400]/50 group-hover:scale-105 transition-transform shadow-md shadow-[#FFD400]/20 shrink-0" 
            />
            <div className="h-9 sm:h-10 px-2 py-1 rounded-xl bg-white hidden sm:flex items-center justify-center shadow-lg shadow-white/10 group-hover:scale-105 transition-transform shrink-0">
              <img src="/sns-logo.png" alt="SNS Institutions Logo" className="h-6 sm:h-7 object-contain" />
            </div>
            <div className="h-7 w-[1px] bg-white/20 hidden sm:block shrink-0" />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-heading font-black text-base sm:text-xl tracking-wider text-white group-hover:text-[#FFD400] transition-colors truncate">
                  CORE<span className="text-[#FFD400]">X</span>ATHON
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded bg-[#FFD400]/20 text-[#FFD400] border border-[#FFD400]/30 tracking-widest uppercase shrink-0">
                  '26
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#FFD400]/90 tracking-tight font-medium truncate max-w-[150px] xs:max-w-[200px] sm:max-w-none">
                Dept. of Computer Science & Engineering
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-gray-300 hover:text-[#FFD400] transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenRegister}
              className="relative group overflow-hidden rounded-xl bg-[#FFD400] px-3.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-black uppercase tracking-wider transition-all duration-300 hover:bg-[#FFE033] hover:shadow-[0_0_25px_rgba(255,212,0,0.5)] active:scale-95 flex items-center gap-1 min-h-[38px] sm:min-h-[42px]"
            >
              <span>Register</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#FFD400] via-[#FFC107] to-[#FFD400] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[58px] sm:top-[65px] bottom-0 z-40 bg-black/95 backdrop-blur-2xl border-b border-white/10 lg:hidden px-6 py-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              <div className="pb-3 mb-2 border-b border-white/10">
                <p className="text-xs text-[#FFD400] font-bold uppercase tracking-wider">
                  {HACKATHON_DETAILS.fullTitle}
                </p>
                <p className="text-xs text-gray-400 mt-1">{HACKATHON_DETAILS.dates}</p>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-200 hover:text-[#FFD400] hover:bg-white/5 transition-colors flex items-center justify-between active:bg-white/10 min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 mt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-3.5 bg-[#FFD400] text-black font-bold text-sm uppercase rounded-xl shadow-lg shadow-[#FFD400]/20 flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Register Team Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
