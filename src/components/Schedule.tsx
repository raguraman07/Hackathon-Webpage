import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { SCHEDULE } from '../data/hackathonData';

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const daySchedule = SCHEDULE.filter((item) => item.day === activeDay);

  return (
    <section id="schedule" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            Hour-By-Hour Agenda
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Event <span className="text-[#FFD400]">Schedule</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Explore the 24-hour itinerary across Day 1 and Day 2.
          </p>
        </div>

        {/* Day 1 vs Day 2 Toggle Tabs */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-2xl bg-[#0F0F14] border border-white/10 inline-flex items-center gap-2">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-6 py-3 rounded-xl text-sm font-extrabold uppercase tracking-wider transition-all ${
                activeDay === 'day1'
                  ? 'bg-[#FFD400] text-[#000000] shadow-lg shadow-[#FFD400]/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Day 1 — Aug 28, 2026
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`px-6 py-3 rounded-xl text-sm font-extrabold uppercase tracking-wider transition-all ${
                activeDay === 'day2'
                  ? 'bg-[#FFD400] text-[#000000] shadow-lg shadow-[#FFD400]/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Day 2 — Aug 29, 2026
            </button>
          </div>
        </div>

        {/* Schedule Items List */}
        <div className="space-y-4">
          {daySchedule.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group ${
                item.highlight
                  ? 'bg-[#FFD400]/[0.06] border-[#FFD400]/50 hover:border-[#FFD400] shadow-lg shadow-[#FFD400]/5'
                  : 'bg-[#0F0F14] border-white/10 hover:border-[#FFD400]/30'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                {/* Time Badge - Fixed width for 100% pixel-perfect horizontal alignment */}
                <div
                  className={`w-full sm:w-52 shrink-0 px-4 py-2.5 rounded-xl border font-mono text-xs font-bold text-center flex items-center justify-center gap-2 whitespace-nowrap ${
                    item.highlight
                      ? 'bg-[#FFD400] text-black border-[#FFD400] shadow-md shadow-[#FFD400]/20 font-black'
                      : 'bg-black text-[#FFD400] border-white/10'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.time}</span>
                </div>

                {/* Details Column */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FFD400]" />
                      {item.location}
                    </span>

                    {item.highlight && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase bg-[#FFD400]/20 text-[#FFD400] border border-[#FFD400]/30 tracking-wider">
                        Key Milestone
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-heading font-bold text-lg transition-colors ${
                      item.highlight ? 'text-[#FFD400]' : 'text-white group-hover:text-[#FFD400]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
