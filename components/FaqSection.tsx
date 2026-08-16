'use client';

import React, { useState } from 'react';
import { FAQS_DATA, SITE_CONFIG } from '@/lib/data';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "General", "Local", "Services", "Coverage", "SEO", "Pricing"];

  const filteredFaqs = filter === "All"
    ? FAQS_DATA
    : FAQS_DATA.filter(f => f.category === filter);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const handleAskCustomFaq = () => {
    const text = encodeURIComponent(`Hi Veiled Story! I have a question about your digital marketing services in Zirakpur / Tricity.`);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="faqs" className="py-20 relative overflow-hidden bg-[#060d16]/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* H2 Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
            <HelpCircle className="w-3.5 h-3.5 text-[#A2C0E6]" />
            <span>Got Questions? We&apos;ve Got Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions About Digital Marketing
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Everything you need to know about partnering with Veiled Story—the top digital marketing company in Zirakpur, Chandigarh, Panchkula, and Mohali.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                filter === cat
                  ? 'bg-[#A2C0E6] text-[#060d16] font-bold shadow-md shadow-[#A2C0E6]/20'
                  : 'liquid-glass text-slate-300 hover:text-white border border-[#A2C0E6]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Liquid Glass Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'liquid-glass border-[#A2C0E6]/60 shadow-xl shadow-[#A2C0E6]/10'
                    : 'liquid-glass hover:border-[#A2C0E6]/40 border-[#A2C0E6]/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  {/* H3 FAQ Question */}
                  <h3 className={`text-base font-bold transition-colors ${
                    isOpen ? 'text-[#A2C0E6]' : 'text-slate-100 hover:text-[#A2C0E6]'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className="p-1.5 rounded-lg bg-[#060d16]/40 text-[#A2C0E6] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#A2C0E6]/20 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3 animate-fadeIn">
                    <p>{faq.answer}</p>
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={handleAskCustomFaq}
                        className="text-xs text-[#A2C0E6] font-semibold hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-[#A2C0E6]/20" /> Have another question? Ask us on WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
