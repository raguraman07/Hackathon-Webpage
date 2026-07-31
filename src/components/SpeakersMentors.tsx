import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { SPEAKERS_MENTORS } from '../data/hackathonData';

export const SpeakersMentors: React.FC = () => {
  return (
    <section id="speakers" className="py-24 bg-[#070709] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            Industry Luminaries
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Speakers & <span className="text-[#FFD400]">Mentors</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Learn from principal engineers, tech founders, and research directors offering round-the-clock guidance.
          </p>
        </div>

        {/* Grid of Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPEAKERS_MENTORS.map((person) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-[#0F0F14] border border-white/10 overflow-hidden group hover:border-[#FFD400]/50 hover:shadow-[0_0_30px_rgba(255,212,0,0.15)] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-white/5 to-black">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F14] via-transparent to-transparent" />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#FFD400] transition-colors">
                    {person.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#FFD400] font-semibold mt-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{person.role} • {person.organization}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center gap-3">
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#FFD400] hover:bg-white/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
                  </a>
                )}
                {person.twitter && (
                  <a
                    href={person.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#FFD400] hover:bg-white/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                )}
                {person.github && (
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#FFD400] hover:bg-white/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
