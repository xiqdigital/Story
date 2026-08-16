'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/data';
import { MessageSquare, Phone, MapPin, Globe, Sparkles, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [city, setCity] = useState('Zirakpur');
  const [message, setMessage] = useState('');

  const handleDirectWhatsAppForm = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Veiled Story! I would like to request a customized marketing strategy:\n` +
      `- Name: ${name}\n` +
      `- Business: ${business || 'N/A'}\n` +
      `- Phone: ${phone}\n` +
      `- City: ${city}\n` +
      `- Message: ${message || 'Please contact me for digital marketing consultation.'}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleActionClick = (h4Action: string) => {
    const text = encodeURIComponent(
      `Hello Veiled Story! I am interested in: "${h4Action}" for my business in Zirakpur / Tricity.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#060d16]">
      {/* Background glowing liquid blobs */}
      <div className="liquid-blob w-96 h-96 bg-[#A2C0E6]/15 top-0 right-0" />
      <div className="liquid-blob w-96 h-96 bg-[#A2C0E6]/15 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-[#A2C0E6]/40 shadow-2xl space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
              <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" />
              <span>Take the First Step to Market Dominance</span>
            </div>

            {/* H2 Title */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Ready to Grow Your Business Online With Veiled Story?
            </h2>

            {/* H3 Subtitle */}
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-[#A2C0E6] to-[#7ba8e0] bg-clip-text text-transparent">
              Let’s Build a Digital Marketing Strategy That Delivers Results
            </h3>

            <p className="text-sm text-slate-300">
              Transform your digital footprint across Zirakpur, Chandigarh, Panchkula & Mohali with custom SEO, Google Ads, and high-converting web design.
            </p>
          </div>

          {/* H4 Action Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              onClick={() => handleActionClick("Get a Free Digital Marketing Consultation")}
              className="p-5 rounded-2xl liquid-glass hover:bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 hover:border-[#A2C0E6] transition cursor-pointer group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1">
                {/* H4 Heading */}
                <h4 className="text-sm font-bold text-white group-hover:text-[#A2C0E6] transition-colors">
                  Get a Free Digital Marketing Consultation
                </h4>
                <p className="text-xs text-slate-300">
                  Speak directly with senior growth strategists regarding your local search potential.
                </p>
              </div>
              <span className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1">
                Consult Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            <div
              onClick={() => handleActionClick("Request a Customized Marketing Strategy")}
              className="p-5 rounded-2xl liquid-glass hover:bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 hover:border-[#A2C0E6] transition cursor-pointer group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1">
                {/* H4 Heading */}
                <h4 className="text-sm font-bold text-white group-hover:text-[#A2C0E6] transition-colors">
                  Request a Customized Marketing Strategy
                </h4>
                <p className="text-xs text-slate-300">
                  Receive a tailored 90-day SEO, PPC, and social media roadmap for your exact budget.
                </p>
              </div>
              <span className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1">
                Request Strategy <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            <div
              onClick={() => handleActionClick("Talk to Our Digital Marketing Experts")}
              className="p-5 rounded-2xl liquid-glass hover:bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 hover:border-[#A2C0E6] transition cursor-pointer group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1">
                {/* H4 Heading */}
                <h4 className="text-sm font-bold text-white group-hover:text-[#A2C0E6] transition-colors">
                  Talk to Our Digital Marketing Experts
                </h4>
                <p className="text-xs text-slate-300">
                  Connect via WhatsApp or phone call for immediate assistance.
                </p>
              </div>
              <span className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1">
                Talk to Experts <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Quick Lead Form & Office Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6 border-t border-[#A2C0E6]/20">
            
            {/* Quick WhatsApp Form */}
            <div className="lg:col-span-7 liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/30 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#A2C0E6]" /> Quick WhatsApp Enquiry Form
              </h4>
              <p className="text-xs text-slate-300">
                Submit your inquiry below to trigger a pre-formatted message directly to our official WhatsApp line:
              </p>

              <form onSubmit={handleDirectWhatsAppForm} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="ctaName" className="sr-only">Your Name</label>
                    <input
                      id="ctaName"
                      type="text"
                      required
                      placeholder="Your Name *"
                      aria-label="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#060d16]/90 border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                    />
                  </div>
                  <div>
                    <label htmlFor="ctaPhone" className="sr-only">Phone or WhatsApp Number</label>
                    <input
                      id="ctaPhone"
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp Number *"
                      aria-label="Phone or WhatsApp Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#060d16]/90 border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="ctaBusiness" className="sr-only">Business Name or Niche</label>
                    <input
                      id="ctaBusiness"
                      type="text"
                      placeholder="Business Name / Niche"
                      aria-label="Business Name or Niche"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      className="w-full bg-[#060d16]/90 border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                    />
                  </div>
                  <div>
                    <label htmlFor="ctaCitySelect" className="sr-only">Target Location</label>
                    <select
                      id="ctaCitySelect"
                      aria-label="Target Location"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-[#060d16]/90 border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                    >
                      <option value="Zirakpur">Location: Zirakpur</option>
                      <option value="Chandigarh">Location: Chandigarh</option>
                      <option value="Panchkula">Location: Panchkula</option>
                      <option value="Mohali">Location: Mohali</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="ctaMessage" className="sr-only">Business Goals or Services Needed</label>
                  <textarea
                    id="ctaMessage"
                    rows={2}
                    placeholder="Tell us about your business goals or services needed..."
                    aria-label="Tell us about your business goals or services needed"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#060d16]/90 border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-lg shadow-[#A2C0E6]/20 transition duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-[#060d16]" />
                  <span>Send WhatsApp Message</span>
                </button>
              </form>
            </div>

            {/* Direct Contact Card */}
            <div className="lg:col-span-5 liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/30 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#A2C0E6]" /> Veiled Story Agency Contact Info
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A2C0E6] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Direct Phone & WhatsApp:</span>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="font-bold text-[#A2C0E6] hover:underline">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#A2C0E6] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Official Website:</span>
                    <a href={`https://${SITE_CONFIG.domain}`} target="_blank" rel="noopener noreferrer" className="font-bold text-[#A2C0E6] hover:underline">
                      {SITE_CONFIG.domain}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#A2C0E6] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Email Address:</span>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="font-bold text-slate-200 hover:underline">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A2C0E6] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Operational Headquarters:</span>
                    <span className="font-medium text-slate-200">{SITE_CONFIG.address}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 text-[11px] text-[#A2C0E6] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                <span>100% Confidentiality & Instant Response Guaranteed</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
