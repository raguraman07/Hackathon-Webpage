import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, Sparkles, Mic } from 'lucide-react';
import { CHIEF_GUEST } from '../data/hackathonData';

export const ChiefGuest: React.FC = () => {
  return (
    <section id="chief-guest" className="py-24 bg-[#070709] relative border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20 inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#FFD400]" />
            Dignitary & Keynote Speaker
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Chief <span className="text-[#FFD400]">Guest</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Honored to welcome our distinguished guest delivering the inaugural keynote address.
          </p>
        </div>

        {/* Chief Guest Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-[#0F0F14] border border-[#FFD400]/30 overflow-hidden shadow-[0_0_50px_rgba(255,212,0,0.1)] hover:border-[#FFD400]/60 transition-all group"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Left Photo Area */}
            <div className="md:col-span-5 relative min-h-[320px] md:min-h-[420px] bg-gradient-to-b from-white/5 to-black overflow-hidden">
              <img
                src={CHIEF_GUEST.image}
                alt={CHIEF_GUEST.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0F0F14]" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-[#FFD400] text-black shadow-md shadow-[#FFD400]/30 tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 fill-current" />
                  Keynote Speaker
                </span>
              </div>
            </div>

            {/* Right Details Area */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFD400] font-bold uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>{CHIEF_GUEST.organization}</span>
                </div>

                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white group-hover:text-[#FFD400] transition-colors">
                  {CHIEF_GUEST.name}
                </h3>

                <p className="text-sm font-semibold text-gray-300 mt-1">
                  {CHIEF_GUEST.role}
                </p>

                {/* Keynote Topic Highlight Box */}
                {CHIEF_GUEST.keynoteTitle && (
                  <div className="mt-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/20 text-[#FFD400] shrink-0 mt-0.5">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                        Inaugural Keynote Speech
                      </span>
                      <span className="text-xs font-bold text-white mt-0.5 block">
                        "{CHIEF_GUEST.keynoteTitle}"
                      </span>
                    </div>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-gray-400 mt-5 leading-relaxed">
                  {CHIEF_GUEST.bio}
                </p>
              </div>

              {/* Social / Info Links */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                {CHIEF_GUEST.linkedin && (
                  <a
                    href={CHIEF_GUEST.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-black hover:bg-[#FFD400] transition-all flex items-center gap-2 text-xs font-semibold"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                )}
                {CHIEF_GUEST.twitter && (
                  <a
                    href={CHIEF_GUEST.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 text-gray-300 hover:text-black hover:bg-[#FFD400] transition-all flex items-center gap-2 text-xs font-semibold"
                    aria-label="Twitter"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
