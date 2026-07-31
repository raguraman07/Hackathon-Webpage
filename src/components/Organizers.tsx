import React from 'react';
import { motion } from 'framer-motion';
import { ORGANIZERS } from '../data/hackathonData';

export const Organizers: React.FC = () => {
  return (
    <section id="organizers" className="py-24 bg-[#070709] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            The Visionaries
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Organizing <span className="text-[#FFD400]">Committee</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Conducted by the Department of Computer Science & Engineering, SNS College of Engineering. Meet the faculty mentors and student leaders driving COREXATHON '26.
          </p>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORGANIZERS.map((org, idx) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0F0F14] border border-white/10 text-center hover:border-[#FFD400]/40 transition-all group"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#FFD400]/30 group-hover:scale-105 transition-transform">
                <img
                  src={org.image}
                  alt={org.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#FFD400] transition-colors">
                {org.name}
              </h3>
              <span className="text-xs font-mono text-[#FFD400] block mt-1">
                {org.role}
              </span>
              <span className="text-[11px] text-gray-400 block mt-0.5">
                {org.organization}
              </span>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                {org.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
