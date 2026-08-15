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
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 px-2.5 py-1 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-white/10 group-hover:scale-105 transition-transform">
              <img src="/sns-logo.png" alt="SNS Institutions Logo" className="h-8 object-contain" />
            </div>
            <div className="h-7 w-[1px] bg-white/20 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl tracking-wider text-white group-hover:text-[#FFD400] transition-colors">
                  CORE<span className="text-[#FFD400]">X</span>ATHON
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFD400]/20 text-[#FFD400] border border-[#FFD400]/30 tracking-widest uppercase">
                  '26
                </span>
              </div>
              <p className="text-[11px] text-[#FFD400]/90 tracking-tight font-medium">
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
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenRegister}
              className="relative group overflow-hidden rounded-xl bg-[#FFD400] px-5 py-2.5 text-xs font-bold text-black uppercase tracking-wider transition-all duration-300 hover:bg-[#FFE033] hover:shadow-[0_0_25px_rgba(255,212,0,0.5)] active:scale-95 flex items-center gap-1.5"
            >
              <span>Register Now</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden px-6 py-6"
          >
            <div className="flex flex-col gap-3">
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
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-200 hover:text-[#FFD400] hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </a>
              ))}

              <div className="pt-4 border-t border-white/10 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRegister();
                  }}
                  className="w-full py-3 bg-[#FFD400] text-black font-bold text-sm uppercase rounded-xl shadow-lg shadow-[#FFD400]/20 flex items-center justify-center gap-2"
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
