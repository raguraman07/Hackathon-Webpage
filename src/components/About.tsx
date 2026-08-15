import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#070709] relative overflow-hidden border-t border-white/5">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            About The Event
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Where Ambition Meets <span className="text-[#FFD400]">Innovation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            COREXATHON '26 is organized by the <strong className="text-[#FFD400]">Department of Computer Science & Engineering</strong> at SNS College of Engineering, designed to bridge the gap between academic learning and high-stakes real-world engineering.
          </p>
        </div>

        {/* 2-Column Grid: Vision & Credibility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#0F0F14] border border-white/10 relative overflow-hidden group hover:border-[#FFD400]/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">The COREXATHON Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                We believe that the most transformative technological breakthroughs happen under pressure when creative minds collide. COREXATHON provides a 24-hour continuous arena where student innovators turn abstract ideas into functional, production-ready code.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0F0F14] border border-white/10 relative overflow-hidden group hover:border-[#FFD400]/40 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 px-3 py-1 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <img src="/sns-logo.png" alt="SNS Institutions Logo" className="h-9 object-contain" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">Department of Computer Science & Engineering</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Proudly conducted by the Department of Computer Science & Engineering at SNS College of Engineering (an autonomous institution with NAAC 'A' grade accreditation). We foster an ecosystem of technical excellence, research, and innovation.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Highlights Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0F0F14] p-8 rounded-2xl border border-white/10 space-y-5"
          >
            <h3 className="font-heading font-bold text-2xl text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD400]" />
              Why COREXATHON Stands Out
            </h3>

            {[
              "10 + Innovative Technology Tracks to Explore and Build Solutions",
              "Expert Mentorship and Guidance from Industry Professionals",
              "Opportunity to Showcase Ideas and Get Incubation Support",
              "Fair and Transparent Evaluation by Experienced Jury Members",
              "24 - Hour Non-Stop Hacking Experience with Technical Mentorship & Code Reviews",
              "Collaborate with Students from Different Colleges and Backgrounds",
              "Build Real-World Solutions and Gain Hands-On Experience",
              "Exciting Challenges, Team Collaboration, and Continuous Learning",
              "Certificates, Recognition, and Rewards for Outstanding Projects"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                <span className="text-gray-300 font-medium text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
