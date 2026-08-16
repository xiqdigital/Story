'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/data';
import { Sparkles, MessageSquare, ArrowRight, ShieldCheck, PhoneCall, CheckCircle2 } from 'lucide-react';
import { SeoAuditModal } from '@/components/SeoAuditModal';

interface SeoPageCTAProps {
  variant?: 'primary' | 'secondary' | 'package' | 'inline-form';
  buttonText?: string;
  subText?: string;
  packageName?: string;
}

export const SeoPageCTA: React.FC<SeoPageCTAProps> = ({
  variant = 'primary',
  buttonText = 'Get Free SEO Consultation',
  subText = 'Takes only 2 minutes • No commitment required',
  packageName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppClick = (intent: string) => {
    const text = encodeURIComponent(
      `Hi Vishal! I would like to enquire about: ${intent} for my business in Zirakpur / Tricity.\nPlease share details and website review.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  if (variant === 'inline-form') {
    return (
      <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A2C0E6]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#A2C0E6] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Instant SEO Audit Request</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Request Your Free SEO Audit & Customized Growth Plan
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Get a complete 25+ point technical, on-page, and local Google Business Profile audit delivered by Vishal Sahani within 24 hours.
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#A2C0E6] to-[#7BA4D5] text-[#060d16] font-bold text-sm hover:opacity-95 transition shadow-lg shadow-[#A2C0E6]/20 flex items-center justify-center gap-2 group"
            >
              <span>Request Free SEO Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleWhatsAppClick('Free Phone SEO Consultation')}
              className="px-6 py-3.5 rounded-xl bg-[#060d16]/80 text-white font-medium text-sm border border-[#A2C0E6]/30 hover:border-[#A2C0E6] transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#A2C0E6]" />
              <span>Call Vishal Sahani Directly</span>
            </button>
          </div>
          <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#A2C0E6]" />
            <span>100% Confidential • Direct strategy from Senior SEO Specialist</span>
          </p>
        </div>

        <SeoAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    );
  }

  return (
    <>
      <div className="inline-flex flex-col items-center sm:items-start gap-2">
        <button
          onClick={() => {
            if (packageName) {
              handleWhatsAppClick(`Custom SEO Package Enquiry (${packageName})`);
            } else {
              setIsModalOpen(true);
            }
          }}
          className={`px-7 py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-3 shadow-xl group ${
            variant === 'primary'
              ? 'bg-gradient-to-r from-[#A2C0E6] to-[#7BA4D5] text-[#060d16] hover:shadow-[#A2C0E6]/30'
              : variant === 'package'
              ? 'bg-[#A2C0E6] text-[#060d16] hover:bg-white'
              : 'bg-[#060d16] text-white border border-[#A2C0E6]/40 hover:border-[#A2C0E6]'
          }`}
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        {subText && (
          <span className="text-[11px] text-slate-400 font-medium tracking-wide">
            {subText}
          </span>
        )}
      </div>

      <SeoAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
