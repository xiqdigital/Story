'use client';

import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/data';
import { MessageSquare, ArrowRight, ShieldCheck, TrendingUp, Sparkles, Star, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenAuditModal: () => void;
  onOpenRoiCalc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal, onOpenRoiCalc }) => {
  const handleWhatsAppEnquiry = (serviceName?: string) => {
    const text = serviceName
      ? `Hi Veiled Story! I need information regarding ${serviceName} in Zirakpur / Tricity. Direct enquiry.`
      : `Hi Veiled Story! I would like to consult with your digital marketing experts regarding growing my business in Zirakpur, Chandigarh, Panchkula & Mohali.`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const heroH4List = [
    { title: "SEO Services for Higher Search Rankings", icon: "Search" },
    { title: "AEO & GEO Optimization for AI Search Engines (ChatGPT, Gemini)", icon: "Cpu" },
    { title: "Google Ads & PPC Management for Faster Leads", icon: "Target" },
    { title: "Social Media Marketing for Stronger Brand Engagement", icon: "Share2" },
    { title: "Website Design & Development That Converts", icon: "Globe" },
    { title: "Content Marketing That Builds Authority", icon: "FileText" },
    { title: "Local SEO to Reach Customers Near You", icon: "MapPin" },
    { title: "Branding & Creative Design for a Memorable Identity", icon: "Palette" },
    { title: "Performance Marketing Focused on ROI", icon: "TrendingUp" }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Liquid Animated Gradient Blobs */}
      <div className="liquid-blob w-96 h-96 bg-[#A2C0E6]/25 top-10 -left-20" />
      <div className="liquid-blob w-[500px] h-[500px] bg-[#7ca8e3]/20 bottom-0 right-0" />
      <div className="liquid-blob w-80 h-80 bg-[#c5dcfa]/20 top-1/2 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
              <span className="flex h-2 w-2 rounded-full bg-[#A2C0E6] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" />
              <span>#1 Rated Digital Growth Agency in Tricity</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Veiled Story - Digital Marketing Company in{' '}
              <span className="bg-gradient-to-r from-white via-[#A2C0E6] to-[#7ba8e0] bg-clip-text text-transparent">Zirakpur</span>
            </h1>

            {/* H2 Subheading */}
            <h2 className="text-xl md:text-2xl font-bold text-slate-200 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#A2C0E6] shrink-0" />
              Grow Your Business With Proven Local Digital Marketing Services
            </h2>

            {/* Comprehensive SEO Intro Paragraph */}
            <p className="text-base md:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Welcome to <strong className="text-[#A2C0E6] font-semibold">Veiled Story</strong>, a premier digital marketing company based on VIP Road, Zirakpur. We help local businesses, real estate developers, healthcare clinics, retail stores, and service providers in Zirakpur, Chandigarh, Panchkula, and Mohali grow online. From Google Map SEO and Google Ads to Facebook marketing and modern web design, we deliver genuine inquiries and measurable revenue growth.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleWhatsAppEnquiry()}
                className="px-6 py-3.5 rounded-2xl text-sm font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white hover:shadow-[0_0_30px_rgba(162,192,230,0.6)] shadow-xl shadow-[#A2C0E6]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 duration-300"
              >
                <MessageSquare className="w-5 h-5 fill-[#060d16]" />
                <span>Instant WhatsApp Enquiry</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onOpenRoiCalc}
                className="px-6 py-3.5 rounded-2xl text-sm font-semibold liquid-glass-interactive text-[#A2C0E6] border-[#A2C0E6]/40 hover:border-[#A2C0E6] flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#A2C0E6]" />
                <span>Calculate Your ROI & Leads</span>
              </button>
            </div>

            {/* Quick Metrics Trust Bar */}
            <div className="pt-6 border-t border-[#A2C0E6]/20 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#A2C0E6]">250+</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#c5dcfa]">98.4%</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Client Retention</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#7ba8e0]">10x+</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Average Lead Growth</div>
              </div>
            </div>

          </div>

          {/* Right Floating Glass Card Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-6 liquid-glass border border-[#A2C0E6]/35 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#A2C0E6]/20">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#A2C0E6]" />
                  <h3 className="text-base font-bold text-white">
                    Complete Digital Marketing Services
                  </h3>
                </div>
                <span className="px-2.5 py-1 text-[10px] uppercase font-bold rounded-full bg-[#A2C0E6]/20 text-[#A2C0E6] border border-[#A2C0E6]/30">
                  Under One Roof
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Explore our full spectrum of specialized growth capabilities engineered specifically for Zirakpur & Tricity markets:
              </p>

              {/* H4 Service Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {heroH4List.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleWhatsAppEnquiry(item.title)}
                    className="p-3 rounded-xl bg-[#060d16]/80 hover:bg-[#A2C0E6]/15 border border-[#A2C0E6]/20 hover:border-[#A2C0E6]/50 transition cursor-pointer group flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xs font-semibold text-slate-200 group-hover:text-[#A2C0E6] transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Digital Marketing Dashboard Image with Alt text */}
              <div className="pt-2">
                <div className="relative rounded-2xl overflow-hidden border border-[#A2C0E6]/40 bg-[#060d16]/90 group shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                    alt="Veiled Story Digital Growth Agency Real-time Marketing Analytics Dashboard"
                    width={800}
                    height={450}
                    className="w-full h-44 object-cover opacity-90 group-hover:opacity-100 transition duration-500 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/40 to-transparent flex flex-col justify-between p-3.5 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-[#060d16]/80 backdrop-blur-md text-[10px] font-extrabold text-[#A2C0E6] border border-[#A2C0E6]/30 uppercase tracking-widest">
                        Live Agency Performance Dashboard
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold text-[#A2C0E6] bg-[#A2C0E6]/15 border border-[#A2C0E6]/30">
                        +240% ROI Growth
                      </span>
                    </div>

                    <div className="flex items-center justify-between w-full text-xs text-slate-200 pointer-events-auto">
                      <span className="flex items-center gap-1 font-medium text-[#A2C0E6]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#A2C0E6]" /> Veiledstory.com Verified Agency
                      </span>
                      <button
                        onClick={onOpenAuditModal}
                        className="text-[11px] font-bold text-[#A2C0E6] hover:text-white underline decoration-[#A2C0E6] decoration-2 underline-offset-2"
                      >
                        Request Website Audit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
