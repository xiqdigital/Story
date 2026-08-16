'use client';

import React from 'react';
import { INDUSTRIES_DATA, SITE_CONFIG } from '@/lib/data';
import { Store, Rocket, ShoppingBag, Briefcase, Home, Stethoscope, ArrowUpRight, MessageSquare } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (index: number) => {
    switch (index) {
      case 0: return <Store className="w-5 h-5 text-[#A2C0E6]" />;
      case 1: return <Rocket className="w-5 h-5 text-[#A2C0E6]" />;
      case 2: return <ShoppingBag className="w-5 h-5 text-[#A2C0E6]" />;
      case 3: return <Briefcase className="w-5 h-5 text-[#A2C0E6]" />;
      case 4: return <Home className="w-5 h-5 text-[#A2C0E6]" />;
      case 5: return <Stethoscope className="w-5 h-5 text-[#A2C0E6]" />;
      default: return <Briefcase className="w-5 h-5 text-[#A2C0E6]" />;
    }
  };

  const handleIndustryEnquiry = (industryTitle: string) => {
    const text = encodeURIComponent(
      `Hello Veiled Story! I am looking for customized digital marketing solutions for my business in the sector: "${industryTitle}" in Zirakpur / Tricity.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#060d16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* H2 Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
            <Briefcase className="w-3.5 h-3.5 text-[#A2C0E6]" />
            <span>Tailored Industry Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Digital Marketing Solutions for Every Business
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every industry possesses unique buyer personas, decision cycles, and search parameters. At Veiled Story, we customize performance funnels for your precise market niche in Zirakpur and across Tricity.
          </p>
        </div>

        {/* H3 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <div
              key={idx}
              className="liquid-glass-interactive rounded-2xl p-6 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/60 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/30 w-fit">
                  {getIndustryIcon(idx)}
                </div>

                {/* H3 Heading */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#A2C0E6] transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#A2C0E6]/20 flex items-center justify-between">
                <span className="text-[11px] text-[#A2C0E6] font-medium">Customized Funnels</span>
                <button
                  onClick={() => handleIndustryEnquiry(ind.title)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white transition duration-300 flex items-center gap-1"
                >
                  <span>Consult</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/35 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">
              Don&apos;t see your exact industry listed above?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              We design custom digital marketing frameworks for niche business models in Zirakpur, Chandigarh, Panchkula & Mohali.
            </p>
          </div>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Veiled Story! I want a custom digital marketing consultation for my unique business type.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white transition duration-300 shrink-0 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-[#060d16]" /> Ask Our Experts
          </a>
        </div>

      </div>
    </section>
  );
};
