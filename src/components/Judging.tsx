import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Code2, Layout, TrendingUp, Presentation } from 'lucide-react';
import { JUDGING_CRITERIA } from '../data/hackathonData';

export const Judging: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Lightbulb className="w-6 h-6 text-[#FFD400]" />;
      case 1: return <Code2 className="w-6 h-6 text-[#FFD400]" />;
      case 2: return <Layout className="w-6 h-6 text-[#FFD400]" />;
      case 3: return <TrendingUp className="w-6 h-6 text-[#FFD400]" />;
      case 4: return <CheckCircle2 className="w-6 h-6 text-[#FFD400]" />;
      default: return <Presentation className="w-6 h-6 text-[#FFD400]" />;
    }
  };

  return (
    <section id="judging" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            Evaluation Framework
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Judging <span className="text-[#FFD400]">Criteria</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Projects are evaluated objectively using a weighted scoring matrix by senior industry judges.
          </p>
        </div>

        {/* 6 Grid Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JUDGING_CRITERIA.map((criterion, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0F0F14] border border-white/10 relative overflow-hidden group hover:border-[#FFD400]/50 hover:shadow-[0_0_25px_rgba(255,212,0,0.15)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="font-heading font-black text-2xl text-[#FFD400] px-3 py-1 rounded-xl bg-black border border-[#FFD400]/30 shadow-inner">
                    {criterion.percentage}%
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#FFD400] transition-colors">
                  {criterion.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                  {criterion.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                {criterion.checklist.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
