import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Flame } from 'lucide-react';
import { TIMELINE } from '../data/hackathonData';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-16 sm:py-24 bg-black relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            Roadmap To Victory
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Event <span className="text-[#FFD400]">Timeline</span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-gray-400">
            Follow the journey from initial registration to the final 24-hour coding sprint and grand award presentation.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-[#1E1E28] ml-2.5 sm:ml-4 md:ml-32 space-y-8 sm:space-y-12">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pl-6 sm:pl-8 md:pl-12 group"
            >
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.highlight
                    ? 'bg-[#FFD400] border-[#FFD400] text-black shadow-[0_0_20px_rgba(255,212,0,0.6)] scale-110'
                    : item.status === 'completed'
                    ? 'bg-black border-emerald-500 text-emerald-500'
                    : item.status === 'current'
                    ? 'bg-[#FFD400]/20 border-[#FFD400] text-[#FFD400] animate-pulse'
                    : 'bg-black border-gray-700 text-gray-500'
                }`}
              >
                {item.highlight ? (
                  <Flame className="w-4 h-4" />
                ) : item.status === 'completed' ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-bold font-mono">{item.step}</span>
                )}
              </div>

              {/* Date & Time Badge (Desktop Left Offset) */}
              <div className="md:absolute md:-left-32 md:top-1.5 md:w-28 md:text-right mb-2 md:mb-0">
                <span className="text-xs font-mono font-bold text-[#FFD400] inline-block md:block mr-2 md:mr-0">
                  {item.date}
                </span>
                <span className="text-[11px] font-mono text-gray-500 inline-block md:block">
                  {item.time}
                </span>
              </div>

              {/* Event Card Content */}
              <div
                className={`p-4 sm:p-6 rounded-2xl border transition-all ${
                  item.highlight
                    ? 'bg-[#12121A] border-[#FFD400]/60 shadow-[0_0_30px_rgba(255,212,0,0.15)]'
                    : 'bg-[#0F0F14] border-white/10 group-hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  {item.highlight && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FFD400] text-black uppercase tracking-wider">
                      KEY MILESTONE
                    </span>
                  )}
                  <span className="text-xs font-mono text-gray-400">STAGE #{item.step}</span>
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-[#FFD400] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
