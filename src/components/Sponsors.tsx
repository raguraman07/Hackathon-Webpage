import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { SPONSORS } from '../data/hackathonData';

export const Sponsors: React.FC = () => {
  const titleSponsors = SPONSORS.filter((s) => s.tier === 'Title');
  const platinumSponsors = SPONSORS.filter((s) => s.tier === 'Platinum');
  const otherSponsors = SPONSORS.filter((s) => s.tier !== 'Title' && s.tier !== 'Platinum');

  return (
    <section id="sponsors" className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            Powered By Tech Giants
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Our Valued <span className="text-[#FFD400]">Sponsors</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Backed by visionary corporate partners, cloud providers, and innovation funds driving next-gen engineering talent.
          </p>
        </div>

        {/* Title Sponsors Tier (Largest Cards) */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold text-[#FFD400] uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> TITLE SPONSORS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {titleSponsors.map((sponsor) => (
              <motion.a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[#0F0F14] border-2 border-[#FFD400]/40 relative overflow-hidden group hover:border-[#FFD400] hover:shadow-[0_0_40px_rgba(255,212,0,0.3)] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-black bg-[#FFD400] px-3 py-1 rounded-full uppercase">
                    {sponsor.tier} PARTNER
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#FFD400] transition-colors" />
                </div>

                <div className="py-6 text-center">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-gray-400 group-hover:text-[#FFD400] transition-colors tracking-wider uppercase">
                    {sponsor.logoText}
                  </span>
                  <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-xs mx-auto">
                    {sponsor.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Platinum Sponsors Grid */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
              PLATINUM PARTNERS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {platinumSponsors.map((sponsor) => (
              <motion.a
                key={sponsor.id}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-[#0F0F14] border border-white/10 group hover:border-[#FFD400]/50 hover:shadow-[0_0_25px_rgba(255,212,0,0.15)] transition-all flex items-center justify-between"
              >
                <div>
                  <span className="font-heading font-extrabold text-2xl text-gray-400 group-hover:text-white transition-colors tracking-wide">
                    {sponsor.logoText}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">{sponsor.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#FFD400] transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Gold & Tech Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {otherSponsors.map((sponsor) => (
            <motion.a
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-[#0F0F14] border border-white/10 group hover:border-[#FFD400]/40 transition-all text-center"
            >
              <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">
                {sponsor.tier}
              </span>
              <span className="font-heading font-bold text-base text-gray-400 group-hover:text-[#FFD400] transition-colors">
                {sponsor.logoText}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
