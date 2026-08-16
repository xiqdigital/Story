'use client';

import React from 'react';
import { APPROACH_STEPS, GROWTH_BENEFITS, SITE_CONFIG } from '@/lib/data';
import { Compass, TrendingUp, CheckCircle, ArrowRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  const handleConsultApproach = () => {
    const text = encodeURIComponent(
      `Hello Veiled Story! I'm impressed by your 4-stage digital marketing approach. Let's discuss implementing this strategy for my company in Zirakpur / Tricity.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="approach" className="py-20 relative overflow-hidden bg-[#060d16]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-24">
        
        {/* Section 1: Our Approach */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
              <Compass className="w-3.5 h-3.5 text-[#A2C0E6]" />
              <span>Proven 4-Step Methodology</span>
            </div>
            {/* H2 Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Our Approach to Digital Marketing
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Achieving predictable online growth requires systematic engineering, not random tactics. Here is how Veiled Story transforms online presence in Zirakpur and Tricity:
            </p>
          </div>

          {/* H3 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_STEPS.map((stepItem, idx) => (
              <div
                key={idx}
                className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/60 relative group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6] text-[#060d16] font-black text-lg flex items-center justify-center mb-4 shadow-lg shadow-[#A2C0E6]/20">
                  {stepItem.step}
                </div>

                {/* H3 Heading */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#A2C0E6] transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {stepItem.desc}
                </p>

                {idx < APPROACH_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#A2C0E6]/60">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Section 2: Growth Benefits */}
        <div className="pt-8 border-t border-[#A2C0E6]/20">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
              <TrendingUp className="w-3.5 h-3.5 text-[#A2C0E6]" />
              <span>Measurable Business Outcomes</span>
            </div>
            {/* H2 Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Turn Online Visibility Into Real Business Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At Veiled Story, we bridge the gap between digital impressions and actual revenue. Here is what happens when you partner with our Zirakpur digital marketing agency:
            </p>
          </div>

          {/* H3 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GROWTH_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="liquid-glass-interactive rounded-2xl p-6 border border-[#A2C0E6]/20 hover:border-[#A2C0E6]/50 space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#A2C0E6]/15 text-[#A2C0E6]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  {/* H3 Heading */}
                  <h3 className="text-base font-bold text-white">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pl-1">
                  {benefit.desc}
                </p>
              </div>
            ))}

            {/* CTA Box */}
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/40 bg-[#060d16]/90 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" /> Ready for Real Business Expansion?
                </span>
                <p className="text-xs text-slate-200">
                  Connect directly with our senior marketing strategists in Zirakpur today.
                </p>
              </div>
              <button
                onClick={handleConsultApproach}
                className="w-full py-3 rounded-xl font-bold text-xs text-[#060d16] bg-[#A2C0E6] hover:bg-white transition duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Start Strategy Chat
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
