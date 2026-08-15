import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Gift, Zap } from 'lucide-react';

export const Prizes: React.FC = () => {
  return (
    <section id="prizes" className="py-16 sm:py-24 bg-[#070709] relative border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFD400]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-bold uppercase tracking-widest mb-6 sm:mb-8"
        >
          <Trophy className="w-4 h-4 text-[#FFD400]" />
          <span>Prize Pool & Rewards</span>
        </motion.div>

        {/* Main Banner Card showcasing single sentence with emojis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-5 xs:p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#181824] via-[#0F0F16] to-[#0A0A0E] border-2 border-[#FFD400]/70 relative shadow-[0_0_60px_rgba(255,212,0,0.25)] hover:border-[#FFD400] transition-colors"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 rounded-2xl bg-[#FFD400]/20 border border-[#FFD400]/40 text-[#FFD400] shadow-lg shadow-[#FFD400]/10">
              <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-[#FFD400]" />
            </div>
          </div>

          <h2 className="font-heading font-black text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            🏆 Attractive Cash Prizes for Winners! 🎁 ✨
          </h2>

          {/* Perks Highlights Grid */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10">
            {[
              { icon: Trophy, label: "Trophies & Medals" },
              { icon: Award, label: "Certificates of Excellence" },
              { icon: Zap, label: "Incubation Seed Support" },
              { icon: Gift, label: "Exclusive Swag Kits" },
            ].map((perk, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 text-center">
                <perk.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD400]" />
                <span className="text-[11px] sm:text-xs font-semibold text-gray-200">{perk.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
