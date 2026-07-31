import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Lock, Users, Scale } from 'lucide-react';
import { RULES } from '../data/hackathonData';

export const Rules: React.FC = () => {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(0);

  const toggleCategory = (idx: number) => {
    setOpenCategoryIndex(openCategoryIndex === idx ? null : idx);
  };

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Users className="w-5 h-5 text-[#FFD400]" />;
      case 1: return <Lock className="w-5 h-5 text-[#FFD400]" />;
      case 2: return <FileText className="w-5 h-5 text-[#FFD400]" />;
      default: return <Scale className="w-5 h-5 text-[#FFD400]" />;
    }
  };

  return (
    <section id="rules" className="py-24 bg-[#070709] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            Transparency & Conduct
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Rules & <span className="text-[#FFD400]">Guidelines</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Clear guidelines ensure a fair, inclusive, and high-integrity competitive environment for all hackers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {RULES.map((ruleCat, idx) => {
            const isOpen = openCategoryIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-[#0F0F16] border-[#FFD400]/50 shadow-lg shadow-[#FFD400]/5'
                    : 'bg-[#0F0F14] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Category Header Bar */}
                <button
                  onClick={() => toggleCategory(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      {getCategoryIcon(idx)}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white">
                      {ruleCat.category}
                    </h3>
                  </div>

                  <div className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white transition-transform">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#FFD400]' : ''
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Rule Items */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4"
                    >
                      {ruleCat.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="p-4 rounded-xl bg-black/60 border border-white/5"
                        >
                          <h4 className="font-heading font-bold text-sm text-[#FFD400] mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
