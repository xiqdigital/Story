'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/data';
import {
  TrendingUp,
  Search,
  Target,
  ArrowUpRight,
  CheckCircle2,
  Filter,
  MessageSquare,
  Sparkles,
  BarChart3,
  Award,
  Zap,
  Building2,
  Pill,
  ShoppingBag,
  Stethoscope,
  Factory
} from 'lucide-react';

export interface CaseStudy {
  id: string;
  clientName: string;
  category: 'seo' | 'ppc' | 'lead-gen' | 'omnichannel';
  industry: string;
  location: string;
  imageSeed: string;
  challenge: string;
  strategy: string[];
  duration: string;
  beforeMetrics: {
    label: string;
    value: string;
  }[];
  afterMetrics: {
    label: string;
    value: string;
    growth: string;
  }[];
  keyResults: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'real-estate-zirakpur',
    clientName: 'Luxury Residential Apartments (VIP Road, Zirakpur)',
    category: 'lead-gen',
    industry: 'Real Estate & Property',
    location: 'Zirakpur, Punjab',
    imageSeed: 'case-real-estate-zirakpur',
    challenge: 'High CPL (Cost Per Lead) exceeding ₹850 with low lead intent and spam inquiries through unoptimized Facebook lead forms.',
    strategy: [
      'Deployed hyper-targeted Google Search Ads for high-intent keywords like "3 BHK Flats VIP Road Zirakpur".',
      'Rebuilt custom high-speed landing page with instant WhatsApp inquiry triggers.',
      'Implemented custom qualifier questions on Meta Ads lead forms to eliminate non-serious buyers.'
    ],
    duration: '90 Days Campaign',
    beforeMetrics: [
      { label: 'Cost Per Lead (CPL)', value: '₹850 / lead' },
      { label: 'Monthly Leads', value: '24 inquiries' },
      { label: 'Site Conversion Rate', value: '1.2%' }
    ],
    afterMetrics: [
      { label: 'Cost Per Lead (CPL)', value: '₹195 / lead', growth: '-77% Cost Reduction' },
      { label: 'Monthly Leads', value: '185 Verified Leads', growth: '+670% Lead Volume' },
      { label: 'Site Conversion Rate', value: '6.8%', growth: '5.6x Higher Conv.' }
    ],
    keyResults: ['14 Luxury Flat Bookings Closed', '₹2.8 Cr Sales Volume Generated', 'ROI: 8.4x Ad Spend']
  },
  {
    id: 'pharma-pcd-mohali',
    clientName: 'PCD Pharma Franchise Manufacturer',
    category: 'seo',
    industry: 'Pharma & Healthcare',
    location: 'Mohali, Punjab',
    imageSeed: 'case-pharma-mohali',
    challenge: 'Zero organic visibility beyond Page 3 for competitive pharma franchise keywords across North India.',
    strategy: [
      'Executed full technical SEO audit fixing 120+ canonical, crawl, and page speed bottlenecks.',
      'Optimized 35+ product category pages with high-intent E-E-A-T pharma content & Schema markup.',
      'Targeted B2B franchise keywords: "PCD Pharma Franchise in Mohali" and "Third Party Pharma Manufacturing".'
    ],
    duration: '6 Months SEO Sprint',
    beforeMetrics: [
      { label: 'Organic Monthly Visits', value: '380 visits' },
      { label: 'Google Rank (Page 1)', value: '0 Keywords' },
      { label: 'B2B Franchise Inquiries', value: '4 / month' }
    ],
    afterMetrics: [
      { label: 'Organic Monthly Visits', value: '7,420 visits', growth: '+1,850% Traffic' },
      { label: 'Google Rank (Page 1)', value: '28 Keywords #1-#3', growth: 'Page 1 Dominance' },
      { label: 'B2B Franchise Inquiries', value: '92 Verified Leads', growth: '23x Franchise Leads' }
    ],
    keyResults: ['#1 Spot for PCD Pharma Franchise Mohali', 'Pan-India Distribution Expansion', 'Zero Paid Ad Reliance']
  },
  {
    id: 'dental-clinic-chandigarh',
    clientName: 'Multi-Specialty Cosmetic Dental Studio',
    category: 'ppc',
    industry: 'Healthcare & Dental',
    location: 'Chandigarh & Panchkula',
    imageSeed: 'case-dental-chandigarh',
    challenge: 'High ad cost waste on Google PPC due to broad match keywords and missing negative keyword lists.',
    strategy: [
      'Restructured Google Ads campaign into precise phrase & exact match ad groups for high-ticket dental implants & aligners.',
      'Optimized Google Business Profile for local 3-Pack rankings in Sectors 17, 35 & Panchkula Sector 11.',
      'Added click-to-call extension & automated WhatsApp appointment booking widget.'
    ],
    duration: '60 Days Performance Ads',
    beforeMetrics: [
      { label: 'Cost Per Appointment', value: '₹1,200' },
      { label: 'Google Map Local Rank', value: '#14 Spot' },
      { label: 'Monthly Patient Calls', value: '18 calls' }
    ],
    afterMetrics: [
      { label: 'Cost Per Appointment', value: '₹310', growth: '-74% Cost Cut' },
      { label: 'Google Map Local Rank', value: '#1 Spot (Top 3 Pack)', growth: 'Local Map Dominance' },
      { label: 'Monthly Patient Calls', value: '142 Direct Calls', growth: '+688% Calls' }
    ],
    keyResults: ['78 New Dental Implants Booked', 'Google Map #1 Ranking in Tricity', 'Ad Spend Decreased 35%']
  },
  {
    id: 'b2b-manufacturing-panchkula',
    clientName: 'Industrial Packaging Machinery Manufacturer',
    category: 'omnichannel',
    industry: 'B2B Industrial Manufacturing',
    location: 'Panchkula, Haryana',
    imageSeed: 'case-b2b-panchkula',
    challenge: 'Outdated non-responsive website losing international & pan-India industrial quotes to competitors.',
    strategy: [
      'Developed modern Next.js + Tailwind high-speed product catalog website with detailed technical specs.',
      'Implemented combined Google Search Ads + LinkedIn B2B targeting decision-makers in pharmaceutical & FMCG plants.',
      'Added Generative Engine Optimization (GEO) & Schema to feature in AI Search Overviews.'
    ],
    duration: '4 Months Digital Transformation',
    beforeMetrics: [
      { label: 'Monthly RFP Inquiries', value: '3 RFPs' },
      { label: 'Website Mobile Speed', value: '28 / 100' },
      { label: 'Average Deal Size', value: '₹2.5 Lakhs' }
    ],
    afterMetrics: [
      { label: 'Monthly RFP Inquiries', value: '38 Qualified RFPs', growth: '12.6x Quote Growth' },
      { label: 'Website Mobile Speed', value: '98 / 100', growth: 'Instant Loading' },
      { label: 'Average Deal Size', value: '₹8.2 Lakhs', growth: '+228% Contract Value' }
    ],
    keyResults: ['Pan-India Machinery Contracts Secured', 'Cited in Google AI Search Summaries', 'High-Trust Corporate Brand']
  }
];

export const CaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'seo' | 'ppc' | 'lead-gen' | 'omnichannel'>('all');

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === activeFilter);

  const handleWhatsAppInquiry = (clientName: string) => {
    const text = encodeURIComponent(
      `Hi Veiled Story! I saw your Case Study for "${clientName}". I want to get similar growth results for my business in Zirakpur / Tricity (+917905403546).`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden border-b border-[#A2C0E6]/20 bg-[#060d16]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-[#A2C0E6]" />
            Verified Performance & Growth Metrics
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Client Growth Case Studies & <span className="bg-gradient-to-r from-white via-[#A2C0E6] to-[#7ba8e0] bg-clip-text text-transparent">Before vs After Results</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Real performance snapshots showing how our SEO, Google Ads, and Lead Generation frameworks transform business revenue across Zirakpur, Chandigarh, Panchkula & Mohali.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'all'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-lg shadow-[#A2C0E6]/20'
                : 'liquid-glass text-slate-300 hover:text-white border border-[#A2C0E6]/20'
            }`}
          >
            <Filter className="w-3.5 h-3.5" /> All Case Studies
          </button>

          <button
            onClick={() => setActiveFilter('seo')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'seo'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-lg shadow-[#A2C0E6]/20'
                : 'liquid-glass text-slate-300 hover:text-white border border-[#A2C0E6]/20'
            }`}
          >
            <Search className="w-3.5 h-3.5" /> SEO Campaigns
          </button>

          <button
            onClick={() => setActiveFilter('ppc')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'ppc'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-lg shadow-[#A2C0E6]/20'
                : 'liquid-glass text-slate-300 hover:text-white border border-[#A2C0E6]/20'
            }`}
          >
            <Zap className="w-3.5 h-3.5" /> Google Ads / PPC
          </button>

          <button
            onClick={() => setActiveFilter('lead-gen')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'lead-gen'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-lg shadow-[#A2C0E6]/20'
                : 'liquid-glass text-slate-300 hover:text-white border border-[#A2C0E6]/20'
            }`}
          >
            <Target className="w-3.5 h-3.5" /> Meta & Lead Gen
          </button>

          <button
            onClick={() => setActiveFilter('omnichannel')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'omnichannel'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-lg shadow-[#A2C0E6]/20'
                : 'liquid-glass text-slate-300 hover:text-white border border-[#A2C0E6]/20'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Omnichannel Growth
          </button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 hover:border-[#A2C0E6]/70 transition duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-5">
                
                {/* Header Image & Badges */}
                <div className="relative rounded-2xl overflow-hidden border border-[#A2C0E6]/20 bg-[#060d16]">
                  <Image
                    src={
                      study.id === 'real-estate-zirakpur'
                        ? 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop'
                        : study.id === 'pharma-pcd-mohali'
                        ? 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop'
                        : study.id === 'dental-clinic-chandigarh'
                        ? 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
                        : 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'
                    }
                    alt={`${study.clientName} Case Study - Veiled Story Digital Marketing`}
                    width={800}
                    height={400}
                    className="w-full h-48 sm:h-52 object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category & Location Floating Pill */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#060d16]/90 backdrop-blur-md text-[#A2C0E6] border border-[#A2C0E6]/40 text-[11px] font-bold">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#060d16]/90 backdrop-blur-md text-slate-300 border border-[#A2C0E6]/30 text-[11px] font-bold">
                      📍 {study.location}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#A2C0E6] text-[#060d16] font-black text-[10px] uppercase tracking-wider shadow-lg">
                    {study.duration}
                  </div>
                </div>

                {/* Client Name & Challenge */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#A2C0E6] transition flex items-center justify-between gap-2">
                    <span>{study.clientName}</span>
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-[#A2C0E6]">Core Challenge:</strong> {study.challenge}
                  </p>
                </div>

                {/* Strategy Bullet Points */}
                <div className="space-y-1.5 p-3.5 rounded-2xl bg-[#060d16]/60 border border-[#A2C0E6]/20">
                  <div className="text-[11px] font-bold text-[#A2C0E6] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" /> Key Strategy Implemented:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {study.strategy.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A2C0E6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BEFORE vs AFTER Metrics Block */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
                    <span className="text-slate-400">Before Campaign</span>
                    <span className="text-[#A2C0E6] flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> After Veiled Story Optimization
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {study.afterMetrics.map((after, idx) => {
                      const before = study.beforeMetrics[idx];
                      return (
                        <div
                          key={idx}
                          className="p-3 rounded-2xl bg-[#060d16]/90 border border-[#A2C0E6]/30 flex flex-col justify-between space-y-1"
                        >
                          <div className="text-[10px] text-slate-400 font-semibold truncate">
                            {after.label}
                          </div>

                          <div className="flex items-baseline justify-between gap-1">
                            <span className="text-xs text-slate-500 line-through">
                              {before?.value}
                            </span>
                            <span className="text-sm font-black text-[#A2C0E6]">
                              {after.value}
                            </span>
                          </div>

                          <div className="inline-block self-start px-1.5 py-0.5 rounded bg-[#A2C0E6]/20 text-[#A2C0E6] text-[10px] font-bold border border-[#A2C0E6]/30">
                            {after.growth}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Results Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {study.keyResults.map((result, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#A2C0E6]/10 text-[#A2C0E6] text-[11px] font-medium border border-[#A2C0E6]/20 flex items-center gap-1"
                    >
                      <Award className="w-3 h-3 text-[#A2C0E6]" />
                      {result}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom CTA Action */}
              <div className="pt-3 border-t border-[#A2C0E6]/15">
                <button
                  onClick={() => handleWhatsAppInquiry(study.clientName)}
                  className="w-full py-3 rounded-xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-md shadow-[#A2C0E6]/20 transition flex items-center justify-center gap-2 duration-300"
                >
                  <MessageSquare className="w-4 h-4 fill-[#060d16]" />
                  <span>Get Similar Growth Results for Your Business</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-extrabold text-white flex items-center justify-center md:justify-start gap-2">
              Ready to create your own digital growth case study?
              <Sparkles className="w-5 h-5 text-[#A2C0E6]" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get a customized SEO Audit, Google Ads proposal, or Lead Generation strategy tailored to your exact business niche in Zirakpur, Chandigarh, Panchkula, or Mohali.
            </p>
          </div>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              'Hi Veiled Story! I would like a custom growth strategy & ROI estimate for my business in Zirakpur / Tricity (+917905403546).'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-[#A2C0E6] text-[#060d16] font-black text-xs hover:bg-white shadow-lg shadow-[#A2C0E6]/25 transition duration-300 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-[#060d16]" />
            <span>Claim Free Strategy Session</span>
          </a>
        </div>

      </div>
    </section>
  );
};
