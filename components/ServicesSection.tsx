'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA, SITE_CONFIG } from '@/lib/data';
import { Search, Target, Share2, Globe, CheckCircle2, MessageSquare, ArrowRight, Sparkles, Cpu } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-[#A2C0E6]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#A2C0E6]" />;
      case 'Target':
        return <Target className="w-6 h-6 text-[#A2C0E6]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#A2C0E6]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#A2C0E6]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#A2C0E6]" />;
    }
  };

  const handleEnquireService = (h3Title: string, h4Title: string) => {
    const text = encodeURIComponent(
      `Hello Veiled Story! I am inquiring about "${h4Title}" under ${h3Title} for my business in Zirakpur / Tricity. Please share pricing and strategy details.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-[#060d16]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* H2 Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
            <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" />
            <span>End-to-End Digital Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Our Digital Marketing Services in Zirakpur
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Veiled Story provides complete digital marketing capabilities tailored specifically to help businesses in Zirakpur, Chandigarh, Panchkula, and Mohali achieve search dominance, high lead volume, and strong brand recognition.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SERVICES_DATA.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#A2C0E6] text-[#060d16] shadow-lg shadow-[#A2C0E6]/30 scale-105'
                    : 'liquid-glass text-slate-200 hover:text-white hover:border-[#A2C0E6]/50'
                }`}
              >
                {getServiceIcon(service.iconName)}
                <span>{service.h3}</span>
              </button>
            );
          })}
        </div>

        {/* Display Active Service Details */}
        {SERVICES_DATA.filter((s) => s.id === activeTab).map((service) => (
          <div key={service.id} className="space-y-10 animate-fadeIn">
            
            {/* Service H3 & Description Banner */}
            <div className="liquid-glass rounded-3xl p-6 md:p-8 border border-[#A2C0E6]/35 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/40">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {/* H3 Heading */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {service.h3}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  {service.description}
                </p>
              </div>

              <button
                onClick={() => handleEnquireService(service.h3, "General Inquiry")}
                className="px-5 py-3 rounded-xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shrink-0 flex items-center gap-2 shadow-md shadow-[#A2C0E6]/20 transition duration-300"
              >
                <MessageSquare className="w-4 h-4 fill-[#060d16]" /> Enquire Now
              </button>
            </div>

            {/* H4 Subcategories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.h4s.map((sub, idx) => (
                <div
                  key={idx}
                  className="liquid-glass-interactive rounded-2xl p-6 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/70 flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold text-[#A2C0E6] uppercase tracking-widest bg-[#A2C0E6]/10 px-2.5 py-1 rounded-md border border-[#A2C0E6]/30">
                        {service.h3.split(' ')[0]} 0{idx + 1}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] opacity-80 group-hover:opacity-100 transition" />
                    </div>

                    {/* H4 Subcategory Heading - Internal Link */}
                    <h4 className="text-base font-bold text-white group-hover:text-[#A2C0E6] transition-colors">
                      {sub.slug ? (
                        <Link
                          href={sub.slug.startsWith('/') ? sub.slug : `/services/${sub.slug}`}
                          className="hover:underline hover:text-[#A2C0E6] transition-colors"
                          title={`${sub.title} in Zirakpur & Tricity - Veiled Story`}
                        >
                          {sub.title}
                        </Link>
                      ) : (
                        sub.title
                      )}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#A2C0E6]/20 flex items-center justify-between">
                    <button
                      onClick={() => handleEnquireService(service.h3, sub.title)}
                      className="text-[11px] font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      Enquire Now
                    </button>
                    {sub.slug ? (
                      <Link
                        href={sub.slug.startsWith('/') ? sub.slug : `/services/${sub.slug}`}
                        className="text-xs font-bold text-[#A2C0E6] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        title={`View ${sub.title} Landing Page`}
                      >
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleEnquireService(service.h3, sub.title)}
                        className="text-xs font-bold text-[#A2C0E6] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        Enquire <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Service Section Visual Banner */}
            <div className="liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/30 flex flex-col sm:flex-row items-center gap-4">
              <Image
                src={
                  service.id === 'seo-services'
                    ? 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop'
                    : service.id === 'ppc-services'
                    ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
                    : service.id === 'smm-services'
                    ? 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop'
                    : service.id === 'aeo-geo-services'
                    ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
                    : 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop'
                }
                alt={`${service.h3} Services in Zirakpur, Chandigarh, Panchkula & Mohali - Veiled Story`}
                width={600}
                height={300}
                className="w-full sm:w-48 h-28 object-cover rounded-xl border border-[#A2C0E6]/25"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1 text-center sm:text-left">
                <h5 className="text-sm font-bold text-white">
                  Looking for customized {service.h3} in Zirakpur?
                </h5>
                <p className="text-xs text-slate-300">
                  Our digital marketing experts optimize every campaign for local search intent, maximum lead conversion, and superior ROI across the Tricity region.
                </p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
