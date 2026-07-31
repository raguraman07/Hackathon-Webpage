import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { HACKATHON_DETAILS } from '../data/hackathonData';

export const ContactVenue: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Query',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Query', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#070709] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20">
            Get In Touch
          </span>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mt-4">
            Venue & <span className="text-[#FFD400]">Contact</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Have questions or sponsorship inquiries? Contact the COREXATHON organizing team or visit our campus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Campus Info & Interactive Map */}
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-[#0F0F14] border border-white/10 space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-white">
                {HACKATHON_DETAILS.collegeName}
              </h3>
              <p className="text-xs font-mono text-[#FFD400] uppercase tracking-wider">
                {HACKATHON_DETAILS.accreditation}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono text-gray-500 block">CAMPUS VENUE</span>
                    <p className="text-sm text-gray-200 font-medium leading-relaxed">
                      {HACKATHON_DETAILS.venue}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {HACKATHON_DETAILS.address}
                    </p>
                    <a
                      href={HACKATHON_DETAILS.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-bold text-[#FFD400] hover:underline"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-500 block">OFFICIAL EMAIL</span>
                    <a href={`mailto:${HACKATHON_DETAILS.contactEmail}`} className="text-sm text-[#FFD400] font-semibold hover:underline">
                      {HACKATHON_DETAILS.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-500 block">HELPLINE PHONE</span>
                    <a href={`tel:${HACKATHON_DETAILS.contactPhone}`} className="text-sm text-gray-200 font-medium">
                      {HACKATHON_DETAILS.contactPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Frame with Direct Action Overlay */}
            <div className="h-64 rounded-3xl overflow-hidden border border-white/10 relative shadow-xl group">
              <iframe
                title="SNS College of Engineering Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.22858714081!2d76.99464527586523!3d11.096357853198533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f793e20e8b15%3A0xb2b26090e9d6d4a5!2sSNS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={HACKATHON_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-black/90 hover:bg-[#FFD400] text-white hover:text-black border border-white/20 text-xs font-extrabold flex items-center gap-2 shadow-2xl backdrop-blur-md transition-all active:scale-95"
                >
                  <MapPin className="w-4 h-4 text-[#FFD400] group-hover:text-black" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Contact Form */}
          <div className="p-8 rounded-3xl bg-[#0F0F14] border border-white/10 relative">
            <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Inquiring about team participation, travel assistance, or sponsorships? Fill out the form below.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center bg-[#FFD400]/10 border border-[#FFD400]/40 rounded-2xl my-8 space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-[#FFD400] mx-auto" />
                <h4 className="font-heading font-bold text-xl text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-gray-300">
                  Thank you for reaching out. The COREXATHON team will get back to your email within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">YOUR FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD400] text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD400] text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">INQUIRY SUBJECT</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white focus:outline-none focus:border-[#FFD400] text-sm"
                  >
                    <option value="General Query">General Registration Query</option>
                    <option value="Sponsorship">Sponsorship Opportunities</option>
                    <option value="Travel Support">Travel & Accommodation</option>
                    <option value="Hardware Track">Hardware / IoT Track Support</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD400] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#FFD400] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FFD400]/20 hover:bg-[#FFE033] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500">FOLLOW COREXATHON</span>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#FFD400] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#FFD400] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" /></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#FFD400] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#FFD400] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
