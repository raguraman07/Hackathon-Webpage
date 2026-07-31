import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { HACKATHON_DETAILS } from '../data/hackathonData';

export const ContactVenue: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
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
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Enter your inquiry subject..."
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFD400] text-sm"
                  />
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
          </div>
        </div>
      </div>
    </section>
  );
};
