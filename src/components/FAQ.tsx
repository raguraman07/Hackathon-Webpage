import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { FAQS } from '../data/hackathonData';

export const FAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            Got Questions?
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Frequently Asked <span className="text-[#FFD400]">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Key details about COREXATHON '26 eligibility, registration, team limits, and campus facilities.
          </p>
        </div>

        {/* Simple Points FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-[#0F0F16] border-[#FFD400]/50 shadow-lg shadow-[#FFD400]/5'
                    : 'bg-[#0F0F14] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                    <span className="font-heading font-bold text-lg text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div className="p-1.5 rounded-full bg-white/5 text-gray-400 shrink-0">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#FFD400]' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5 ml-8"
                    >
                      {faq.answer && (
                        <p className="mb-3 text-gray-400 font-medium">{faq.answer}</p>
                      )}

                      {faq.points && faq.points.length > 0 && (
                        <ul className="space-y-2">
                          {faq.points.map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-gray-200">
                              <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}
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
