'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { WHY_CHOOSE_US_DATA, SITE_CONFIG } from '@/lib/data';
import { ShieldCheck, BarChart3, ChevronDown, ChevronUp, Sparkles, Target, Zap, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleConsult = (h3Title: string) => {
    const text = encodeURIComponent(`Hi Veiled Story! I am interested in your approach regarding "${h3Title}" for my business in Zirakpur/Tricity.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="why-choose-us" className="py-20 relative overflow-hidden bg-[#060d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* H2 Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
            <Zap className="w-3.5 h-3.5 text-[#A2C0E6]" />
            <span>The Veiled Story Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Veiled Story as Your Digital Marketing Partner?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Partnering with the right digital marketing company in Zirakpur can mean the difference between stagnant online spend and exponential business growth. Here is how our strategy-first methodology delivers consistent competitive advantage:
          </p>
        </div>

        {/* Liquid Glassmorphism Accordion UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Accordion Column */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_US_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'liquid-glass border-[#A2C0E6] shadow-xl shadow-[#A2C0E6]/10'
                      : 'bg-[#060d16]/70 hover:bg-[#A2C0E6]/10 border-[#A2C0E6]/20'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isOpen ? 'bg-[#A2C0E6] text-[#060d16]' : 'bg-[#A2C0E6]/15 text-[#A2C0E6]'
                      }`}>
                        0{idx + 1}
                      </div>
                      <div>
                        {/* H3 Heading */}
                        <h3 className={`text-base md:text-lg font-bold transition-colors ${
                          isOpen ? 'text-[#A2C0E6]' : 'text-slate-100 hover:text-[#A2C0E6]'
                        }`}>
                          {item.h3}
                        </h3>
                        {/* H4 Subheading */}
                        <h4 className="text-xs font-semibold text-[#c5dcfa] mt-0.5">
                          {item.h4}
                        </h4>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-[#060d16]/60 text-[#A2C0E6]">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#A2C0E6]/20 text-slate-300 text-sm leading-relaxed space-y-4 animate-fadeIn">
                      <p>{item.desc}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-[#A2C0E6] font-medium flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#A2C0E6]" /> Proven Tricity Growth Framework
                        </span>
                        <button
                          onClick={() => handleConsult(item.h3)}
                          className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#A2C0E6]/20 text-[#A2C0E6] border border-[#A2C0E6]/40 hover:bg-[#A2C0E6]/30 transition flex items-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5" /> Discuss This Strategy
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Visual Image & Summary Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass rounded-3xl p-6 border border-[#A2C0E6]/35 space-y-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#A2C0E6]/30">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="Why Choose Veiled Story Digital Marketing Company in Zirakpur - Growth Strategy & ROI Analytics"
                  width={800}
                  height={600}
                  className="w-full h-56 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/20 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-xs font-bold text-[#A2C0E6] uppercase tracking-widest">
                    Strategy-First Approach
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Tailored Campaigns Optimized for Better ROI in Zirakpur & Tricity
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#A2C0E6] uppercase tracking-wider flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#A2C0E6]" /> Our Promise to Every Client
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A2C0E6] mt-1.5 shrink-0" />
                    <span><strong>100% Dedicated Account Managers:</strong> Direct line of communication via WhatsApp and phone.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7ca8e3] mt-1.5 shrink-0" />
                    <span><strong>Zero Hidden Costs:</strong> Clear monthly performance insights and transparent contract terms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5dcfa] mt-1.5 shrink-0" />
                    <span><strong>Omni-Channel Synergy:</strong> Harmonizing SEO, Google Ads, and SMM for maximum search dominance.</span>
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Veiled Story! I want to discuss why choosing your agency in Zirakpur is the right fit for my business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs text-[#060d16] bg-[#A2C0E6] hover:bg-white flex items-center justify-center gap-2 shadow-lg shadow-[#A2C0E6]/20 transition duration-300"
              >
                <MessageSquare className="w-4 h-4" /> Schedule Strategy Call
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
