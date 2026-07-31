import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Crown, CheckCircle2, Sparkles } from 'lucide-react';
import { PRIZES } from '../data/hackathonData';

export const Prizes: React.FC = () => {
  const topPodium = PRIZES.slice(0, 3);

  return (
    <section id="prizes" className="py-24 bg-[#070709] relative border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FFD400]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            What's At Stake
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Prize Pool & <span className="text-[#FFD400]">Rewards</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Over ₹5,00,000 in cash awards, incubation seed support, cloud credits, gadgets, and fast-track recruitment opportunities.
          </p>
        </div>

        {/* Podium Layout for Top 3 Overall Winners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* First Runner Up (2nd Place) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#0F0F14] border border-gray-600/40 relative flex flex-col justify-between hover:border-gray-400 transition-colors order-2 md:order-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {topPodium[1].badge}
                </span>
                <Trophy className="w-8 h-8 text-slate-300" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white">
                {topPodium[1].title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mt-1">{topPodium[1].rank}</p>

              <div className="my-6 font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                {topPodium[1].amount}
              </div>

              <div className="space-y-2.5 border-t border-white/10 pt-4">
                {topPodium[1].perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Grand Champion (1st Place - CENTER HIGHLIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181824] to-[#0F0F16] border-2 border-[#FFD400] relative flex flex-col justify-between shadow-[0_0_50px_rgba(255,212,0,0.3)] order-1 md:order-2 md:-translate-y-4"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FFD400] text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
              <Crown className="w-4 h-4 fill-black" />
              <span>GRAND WINNER</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FFD400]/20 text-[#FFD400] border border-[#FFD400]/40">
                  {topPodium[0].badge}
                </span>
                <Trophy className="w-10 h-10 text-[#FFD400]" />
              </div>

              <h3 className="font-heading font-black text-3xl text-white">
                {topPodium[0].title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mt-1">{topPodium[0].rank}</p>

              <div className="my-6 font-heading font-black text-5xl sm:text-6xl text-[#FFD400] tracking-tight drop-shadow-[0_0_20px_rgba(255,212,0,0.4)]">
                {topPodium[0].amount}
              </div>

              <div className="space-y-3 border-t border-[#FFD400]/30 pt-5">
                {topPodium[0].perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-200 font-medium">
                    <Sparkles className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Second Runner Up (3rd Place) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#0F0F14] border border-amber-800/40 relative flex flex-col justify-between hover:border-amber-600 transition-colors order-3"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-950 text-amber-400 border border-amber-800">
                  {topPodium[2].badge}
                </span>
                <Trophy className="w-8 h-8 text-amber-500" />
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-white">
                {topPodium[2].title}
              </h3>
              <p className="text-xs font-mono text-gray-400 mt-1">{topPodium[2].rank}</p>

              <div className="my-6 font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                {topPodium[2].amount}
              </div>

              <div className="space-y-2.5 border-t border-white/10 pt-4">
                {topPodium[2].perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
