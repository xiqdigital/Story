'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/data';
import {
  Calculator,
  Globe,
  Search,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  X,
  MessageSquare,
  Building2,
  ShoppingBag,
  Zap,
  Sliders,
  Layers,
  ArrowRight
} from 'lucide-react';

export type CalculatorTab = 'web-design' | 'digital-marketing' | 'seo' | 'lead-gen';

interface RoiCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: CalculatorTab;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  isOpen,
  onClose,
  initialTab = 'web-design',
}) => {
  const [activeTab, setActiveTab] = useState<CalculatorTab>(initialTab);

  // ==========================================
  // TAB 1: WEB DESIGN COST CALCULATOR STATE
  // ==========================================
  const [webCustomerType, setWebCustomerType] = useState<string>('corporate');
  const [webPageCount, setWebPageCount] = useState<string>('6-15');
  const [webAddons, setWebAddons] = useState<{ [key: string]: boolean }>({
    speed: true,
    seo: true,
    whatsapp: true,
    payment: false,
    content: true,
    hosting: true,
  });

  // Calculate Web Design Cost
  const calculateWebDesignCost = () => {
    let basePrice = 15000;
    let timelineDays = '7 - 10 Days';

    switch (webCustomerType) {
      case 'small-biz':
        basePrice = 8500;
        timelineDays = '4 - 6 Days';
        break;
      case 'corporate':
        basePrice = 22000;
        timelineDays = '8 - 12 Days';
        break;
      case 'ecommerce':
        basePrice = 35000;
        timelineDays = '12 - 18 Days';
        break;
      case 'real-estate':
        basePrice = 28000;
        timelineDays = '10 - 14 Days';
        break;
      case 'pharmacy-healthcare':
        basePrice = 24000;
        timelineDays = '8 - 12 Days';
        break;
      case 'manufacturing':
        basePrice = 26000;
        timelineDays = '10 - 14 Days';
        break;
      case 'salon-hotel':
        basePrice = 20000;
        timelineDays = '7 - 10 Days';
        break;
      case 'custom-webapp':
        basePrice = 55000;
        timelineDays = '20 - 30 Days';
        break;
      default:
        basePrice = 18000;
    }

    if (webPageCount === '6-15') basePrice += 6000;
    if (webPageCount === '16-30') basePrice += 14000;
    if (webPageCount === '30+') basePrice += 25000;

    if (webAddons.speed) basePrice += 3500;
    if (webAddons.seo) basePrice += 4500;
    if (webAddons.whatsapp) basePrice += 2500;
    if (webAddons.payment) basePrice += 5000;
    if (webAddons.content) basePrice += 4000;
    if (webAddons.hosting) basePrice += 3000;

    return { totalCost: basePrice, timeline: timelineDays };
  };

  const webCostResult = calculateWebDesignCost();

  // ==========================================
  // TAB 2: DIGITAL MARKETING COST CALCULATOR
  // ==========================================
  const [dmServices, setDmServices] = useState<{ [key: string]: boolean }>({
    seo: true,
    smm: true,
    smo: true,
    googleAds: true,
    metaAds: true,
    aeoGeo: true,
    gbp: true,
    content: false,
    leadsAuto: false,
  });
  const [dmReach, setDmReach] = useState<string>('local');

  const calculateDmCost = () => {
    let serviceFee = 0;
    let recAdSpend = 15000;

    if (dmServices.seo) serviceFee += 12000;
    if (dmServices.smm) serviceFee += 10000;
    if (dmServices.smo) serviceFee += 6000;
    if (dmServices.googleAds) {
      serviceFee += 10000;
      recAdSpend += 15000;
    }
    if (dmServices.metaAds) {
      serviceFee += 9000;
      recAdSpend += 12000;
    }
    if (dmServices.aeoGeo) serviceFee += 8000;
    if (dmServices.gbp) serviceFee += 5000;
    if (dmServices.content) serviceFee += 6000;
    if (dmServices.leadsAuto) serviceFee += 5000;

    let multiplier = 1;
    if (dmReach === 'regional') multiplier = 1.25;
    if (dmReach === 'pan-india') multiplier = 1.6;
    if (dmReach === 'international') multiplier = 2.2;

    const finalFee = Math.round(serviceFee * multiplier);
    const finalAdSpend = Math.round(recAdSpend * multiplier);
    const estimatedImpressions = Math.round((finalAdSpend / 0.8) * 15);

    return {
      monthlyFee: finalFee,
      adSpend: finalAdSpend,
      totalBudget: finalFee + finalAdSpend,
      impressions: estimatedImpressions,
    };
  };

  const dmCostResult = calculateDmCost();

  // ==========================================
  // TAB 3: SEO CALCULATOR STATE
  // ==========================================
  const [seoType, setSeoType] = useState<string>('local-onpage');
  const [seoKeywordScope, setSeoKeywordScope] = useState<string>('15-25');
  const [seoLocation, setSeoLocation] = useState<string>('tricity');
  const [seoDuration, setSeoDuration] = useState<number>(6);

  const calculateSeoCost = () => {
    let baseFee = 12000;

    if (seoType === 'local-only') baseFee = 8000;
    if (seoType === 'local-onpage') baseFee = 14000;
    if (seoType === 'full-technical') baseFee = 18000;
    if (seoType === 'ecommerce') baseFee = 24000;
    if (seoType === 'ai-geo') baseFee = 20000;

    if (seoKeywordScope === '25-50') baseFee += 6000;
    if (seoKeywordScope === '50+') baseFee += 14000;

    if (seoLocation === 'north-india') baseFee *= 1.2;
    if (seoLocation === 'pan-india') baseFee *= 1.5;

    const totalPackageMonthly = Math.round(baseFee);
    const trafficIncreaseMin = seoDuration === 3 ? 150 : seoDuration === 6 ? 350 : 700;
    const trafficIncreaseMax = seoDuration === 3 ? 300 : seoDuration === 6 ? 650 : 1400;

    return {
      monthlyPackage: totalPackageMonthly,
      trafficMin: trafficIncreaseMin,
      trafficMax: trafficIncreaseMax,
      rankingWindow: seoDuration === 3 ? '45 - 60 Days' : '60 - 90 Days',
    };
  };

  const seoResult = calculateSeoCost();

  // ==========================================
  // TAB 4: LEAD GENERATION CALCULATOR STATE
  // ==========================================
  const [leadNiche, setLeadNiche] = useState<string>('real-estate');
  const [leadChannel, setLeadChannel] = useState<string>('omnichannel');
  const [targetLeadsGoal, setTargetLeadsGoal] = useState<number>(50);

  const calculateLeadGenCost = () => {
    let baseCpl = 180; // Cost per lead in INR

    switch (leadNiche) {
      case 'real-estate':
        baseCpl = 220;
        break;
      case 'pharma':
        baseCpl = 160;
        break;
      case 'manufacturing':
        baseCpl = 280;
        break;
      case 'healthcare':
        baseCpl = 190;
        break;
      case 'education':
        baseCpl = 130;
        break;
      case 'ecommerce':
        baseCpl = 150;
        break;
      case 'services':
        baseCpl = 120;
        break;
      default:
        baseCpl = 180;
    }

    if (leadChannel === 'google-ads') baseCpl *= 1.15; // Higher intent
    if (leadChannel === 'meta-ads') baseCpl *= 0.85; // Volume
    if (leadChannel === 'omnichannel') baseCpl *= 0.95;

    const estimatedAdSpend = Math.round(targetLeadsGoal * baseCpl);
    const agencyFee = Math.max(10000, Math.round(estimatedAdSpend * 0.25));
    const totalInvestment = estimatedAdSpend + agencyFee;

    return {
      cpl: Math.round(baseCpl),
      adSpend: estimatedAdSpend,
      agencyFee: agencyFee,
      totalInvestment: totalInvestment,
      estimatedCalls: Math.round(targetLeadsGoal * 0.6),
    };
  };

  const leadResult = calculateLeadGenCost();

  if (!isOpen) return null;

  // Generic WhatsApp sender
  const sendWhatsAppQuote = (customMsg: string) => {
    const text = encodeURIComponent(customMsg);
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#060d16]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl liquid-glass rounded-3xl p-5 sm:p-8 border border-[#A2C0E6]/40 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#A2C0E6]/20">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#A2C0E6] text-[#060d16] font-black shadow-lg shadow-[#A2C0E6]/20">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
                Veiled Story Price & ROI Calculator
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#A2C0E6]/20 text-[#A2C0E6] text-[10px] font-bold border border-[#A2C0E6]/30">
                  Instant Estimate
                </span>
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Zirakpur, Chandigarh, Panchkula & Mohali Digital Growth Estimator
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#060d16]/90 text-slate-300 hover:text-[#A2C0E6] border border-[#A2C0E6]/20 transition"
            title="Close Calculator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Tabs Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-[#060d16]/90 border border-[#A2C0E6]/30">
          
          <button
            onClick={() => setActiveTab('web-design')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'web-design'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-[#A2C0E6]/10'
            }`}
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Web Design</span>
          </button>

          <button
            onClick={() => setActiveTab('digital-marketing')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'digital-marketing'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-[#A2C0E6]/10'
            }`}
          >
            <Zap className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Digital Marketing</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'seo'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-[#A2C0E6]/10'
            }`}
          >
            <Search className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">SEO Calc</span>
          </button>

          <button
            onClick={() => setActiveTab('lead-gen')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === 'lead-gen'
                ? 'bg-[#A2C0E6] text-[#060d16] shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-[#A2C0E6]/10'
            }`}
          >
            <Target className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Lead Generation</span>
          </button>

        </div>

        {/* ========================================================= */}
        {/* TAB 1: WEB DESIGN COST CALCULATOR */}
        {/* ========================================================= */}
        {activeTab === 'web-design' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#A2C0E6] flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#A2C0E6]" />
                1. Web Design Cost Calculator (वेब डिजाइन कॉस्ट कैलकुलेटर)
              </h4>
              <p className="text-xs text-slate-300">
                Customized price estimation tailored to every type of business model & requirements.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Customer / Business Type */}
              <div className="space-y-1.5">
                <label htmlFor="webCustomerType" className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#A2C0E6]" /> Customer / Business Category
                </label>
                <select
                  id="webCustomerType"
                  aria-label="Customer or Business Category"
                  value={webCustomerType}
                  onChange={(e) => setWebCustomerType(e.target.value)}
                  className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                >
                  <option value="small-biz">Freelance / Small Business (1-5 Pages)</option>
                  <option value="corporate">Growing Business / Corporate Site</option>
                  <option value="ecommerce">E-Commerce Online Store (WooCommerce/React)</option>
                  <option value="real-estate">Real Estate & Property Portal</option>
                  <option value="pharmacy-healthcare">Pharmacy, Doctor Clinic & Hospital</option>
                  <option value="manufacturing">Manufacturing & B2B Product Catalog</option>
                  <option value="salon-hotel">Salon, Beauty Spa, Hotel & Resort</option>
                  <option value="custom-webapp">Custom Web Application / SaaS Portal</option>
                </select>
              </div>

              {/* Page Count */}
              <div className="space-y-1.5">
                <label htmlFor="webPageCount" className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-[#A2C0E6]" /> Estimated Pages Needed
                </label>
                <select
                  id="webPageCount"
                  aria-label="Estimated Pages Needed"
                  value={webPageCount}
                  onChange={(e) => setWebPageCount(e.target.value)}
                  className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                >
                  <option value="1-5">1 - 5 Pages (Standard)</option>
                  <option value="6-15">6 - 15 Pages (Recommended)</option>
                  <option value="16-30">16 - 30 Pages (Large Site)</option>
                  <option value="30+">30+ Pages (Enterprise Portal)</option>
                </select>
              </div>

            </div>

            {/* Add-ons Checklist */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">
                Select Additional Web Design Features & Add-ons:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                
                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={webAddons.speed}
                    onChange={(e) => setWebAddons({ ...webAddons, speed: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <span className="text-slate-200">Core Web Vitals Speed (+₹3,500)</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={webAddons.seo}
                    onChange={(e) => setWebAddons({ ...webAddons, seo: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <span className="text-slate-200">Technical On-Page SEO (+₹4,500)</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={webAddons.whatsapp}
                    onChange={(e) => setWebAddons({ ...webAddons, whatsapp: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <span className="text-slate-200">WhatsApp Chat Integration (+₹2,500)</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={webAddons.payment}
                    onChange={(e) => setWebAddons({ ...webAddons, payment: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <span className="text-slate-200">Payment Gateway Setup (+₹5,000)</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={webAddons.content}
                    onChange={(e) => setWebAddons({ ...webAddons, content: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <span className="text-slate-200">Professional Copywriting (+₹4,000)</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={webAddons.hosting}
                    onChange={(e) => setWebAddons({ ...webAddons, hosting: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <span className="text-slate-200">1-Year Hosting & SSL Setup (+₹3,000)</span>
                </label>

              </div>
            </div>

            {/* Output Display Box */}
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#A2C0E6] uppercase tracking-wider">
                  Estimated Web Development Investment:
                </span>
                <span className="text-2xl font-black text-[#A2C0E6]">
                  ₹{webCostResult.totalCost.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <div className="text-xs font-bold text-white">{webCostResult.timeline}</div>
                  <div className="text-[10px] text-slate-400">Target Delivery Timeline</div>
                </div>
                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <div className="text-xs font-bold text-[#A2C0E6]">100% Mobile & Speed Ready</div>
                  <div className="text-[10px] text-slate-400">Guaranteed Responsive</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                *Includes initial design mockups, mobile optimization, SEO structure, and 1 year technical maintenance support in Zirakpur & Tricity.
              </p>
            </div>

            {/* WhatsApp Quote CTA */}
            <button
              onClick={() =>
                sendWhatsAppQuote(
                  `Hi Veiled Story! I calculated a Web Design Cost quote on your website:\n` +
                  `- Business Type: ${webCustomerType}\n` +
                  `- Pages Needed: ${webPageCount}\n` +
                  `- Estimated Cost: ₹${webCostResult.totalCost.toLocaleString('en-IN')}\n` +
                  `- Timeline: ${webCostResult.timeline}\n` +
                  `Please send me a detailed proposal!`
                )
              }
              className="w-full py-3.5 rounded-2xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-lg shadow-[#A2C0E6]/25 transition duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-[#060d16]" />
              <span>Send Web Design Quote to WhatsApp</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: DIGITAL MARKETING COST CALCULATOR */}
        {/* ========================================================= */}
        {activeTab === 'digital-marketing' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#A2C0E6] flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#A2C0E6]" />
                2. Digital Marketing Cost Calculator (डिजिटल मार्केटिंग कॉस्ट कैलकुलेटर)
              </h4>
              <p className="text-xs text-slate-300">
                Select your required marketing services to calculate a tailored monthly retainer.
              </p>
            </div>

            {/* Explicit Digital Marketing Services Toggles */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">
                Select Digital Marketing Services Required:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
                
                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.seo}
                    onChange={(e) => setDmServices({ ...dmServices, seo: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">SEO (Local & On-Page)</div>
                    <div className="text-[10px] text-slate-400">Search Rankings (₹12,000/mo)</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.smm}
                    onChange={(e) => setDmServices({ ...dmServices, smm: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">Social Media Marketing</div>
                    <div className="text-[10px] text-slate-400">Reels & Posts (₹10,000/mo)</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.smo}
                    onChange={(e) => setDmServices({ ...dmServices, smo: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">Social Media Optimization</div>
                    <div className="text-[10px] text-slate-400">Branding Setup (₹6,000/mo)</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.googleAds}
                    onChange={(e) => setDmServices({ ...dmServices, googleAds: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">Google Ads Management</div>
                    <div className="text-[10px] text-slate-400">PPC Search (₹10,000/mo)</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.metaAds}
                    onChange={(e) => setDmServices({ ...dmServices, metaAds: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">Meta Ads (FB & Insta)</div>
                    <div className="text-[10px] text-slate-400">Lead Campaigns (₹9,000/mo)</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.aeoGeo}
                    onChange={(e) => setDmServices({ ...dmServices, aeoGeo: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">AEO & GEO (AI Search)</div>
                    <div className="text-[10px] text-slate-400">ChatGPT Optimization (₹8,000/mo)</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.gbp}
                    onChange={(e) => setDmServices({ ...dmServices, gbp: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">Google Business Profile</div>
                    <div className="text-[10px] text-slate-400">Map Pack SEO (₹5,000/mo)</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.content}
                    onChange={(e) => setDmServices({ ...dmServices, content: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">Content Copywriting</div>
                    <div className="text-[10px] text-slate-400">Blogs & Copy (₹6,000/mo)</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 cursor-pointer hover:border-[#A2C0E6]">
                  <input
                    type="checkbox"
                    checked={dmServices.leadsAuto}
                    onChange={(e) => setDmServices({ ...dmServices, leadsAuto: e.target.checked })}
                    className="accent-[#A2C0E6] rounded"
                  />
                  <div>
                    <div className="font-bold text-white">WhatsApp & Email Auto</div>
                    <div className="text-[10px] text-slate-400">Lead Nurturing (₹5,000/mo)</div>
                  </div>
                </label>

              </div>
            </div>

            {/* Campaign Scale */}
            <div className="space-y-1.5">
              <label htmlFor="dmReach" className="text-xs font-semibold text-slate-300">Geographic Campaign Scope</label>
              <select
                id="dmReach"
                aria-label="Geographic Campaign Scope"
                value={dmReach}
                onChange={(e) => setDmReach(e.target.value)}
                className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
              >
                <option value="local">Local Zirakpur & Tricity (Chandigarh, Panchkula, Mohali)</option>
                <option value="regional">Punjab & Regional North India</option>
                <option value="pan-india">Pan-India National Coverage</option>
                <option value="international">Global / Export Market Focus</option>
              </select>
            </div>

            {/* Output Display Box */}
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/40 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <span className="text-[11px] text-slate-400 block">Veiled Story Monthly Retainer Fee:</span>
                  <span className="text-xl font-black text-[#A2C0E6]">₹{dmCostResult.monthlyFee.toLocaleString('en-IN')} / mo</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <span className="text-[11px] text-slate-400 block">Recommended Monthly Ad Budget:</span>
                  <span className="text-xl font-black text-white">₹{dmCostResult.adSpend.toLocaleString('en-IN')} / mo</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 text-center">
                <div className="text-sm font-bold text-[#A2C0E6]">
                  ~{dmCostResult.impressions.toLocaleString('en-IN')} Monthly Impressions
                </div>
                <div className="text-[10px] text-slate-400">Target Monthly Reach Potential</div>
              </div>
            </div>

            {/* WhatsApp Quote CTA */}
            <button
              onClick={() =>
                sendWhatsAppQuote(
                  `Hi Veiled Story! I calculated a Digital Marketing Package cost on your site:\n` +
                  `- Monthly Agency Retainer: ₹${dmCostResult.monthlyFee.toLocaleString('en-IN')}\n` +
                  `- Recommended Ad Spend: ₹${dmCostResult.adSpend.toLocaleString('en-IN')}\n` +
                  `- Scope: ${dmReach}\n` +
                  `Please contact me to discuss this campaign!`
                )
              }
              className="w-full py-3.5 rounded-2xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-lg shadow-[#A2C0E6]/25 transition duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-[#060d16]" />
              <span>Send Digital Marketing Proposal Request to WhatsApp</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: SEO CALCULATOR */}
        {/* ========================================================= */}
        {activeTab === 'seo' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#A2C0E6] flex items-center gap-2">
                <Search className="w-4 h-4 text-[#A2C0E6]" />
                3. SEO Cost & Ranking Calculator (एसईओ कैलकुलेटर)
              </h4>
              <p className="text-xs text-slate-300">
                Estimate required SEO investment, target ranking timeline, and organic traffic growth.
              </p>
            </div>

            {/* SEO Strategy Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* SEO Focus */}
              <div className="space-y-1.5">
                <label htmlFor="seoType" className="text-xs font-semibold text-slate-300">SEO Strategy Focus</label>
                <select
                  id="seoType"
                  aria-label="SEO Strategy Focus"
                  value={seoType}
                  onChange={(e) => setSeoType(e.target.value)}
                  className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                >
                  <option value="local-only">Local Map Pack SEO (Google Business Profile)</option>
                  <option value="local-onpage">Local SEO + On-Page Technical Fixes</option>
                  <option value="full-technical">Full Technical SEO + High DA Link Building</option>
                  <option value="ecommerce">E-Commerce Product SEO & Schema</option>
                  <option value="ai-geo">AI Overview / GEO / ChatGPT Search SEO</option>
                </select>
              </div>

              {/* Target Keyword Scope */}
              <div className="space-y-1.5">
                <label htmlFor="seoKeywordScope" className="text-xs font-semibold text-slate-300">Target Keyword Volume</label>
                <select
                  id="seoKeywordScope"
                  aria-label="Target Keyword Volume"
                  value={seoKeywordScope}
                  onChange={(e) => setSeoKeywordScope(e.target.value)}
                  className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                >
                  <option value="10-15">10 - 15 High-Intent Keywords</option>
                  <option value="25-50">25 - 50 Competitive Keywords</option>
                  <option value="50+">50+ Enterprise & National Keywords</option>
                </select>
              </div>

              {/* Location Target */}
              <div className="space-y-1.5">
                <label htmlFor="seoLocation" className="text-xs font-semibold text-slate-300">Target Location Scope</label>
                <select
                  id="seoLocation"
                  aria-label="Target Location Scope"
                  value={seoLocation}
                  onChange={(e) => setSeoLocation(e.target.value)}
                  className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                >
                  <option value="zirakpur">Zirakpur & VIP Road Area</option>
                  <option value="tricity">Entire Tricity (Chandigarh, Panchkula, Mohali)</option>
                  <option value="north-india">North India / Punjab Region</option>
                  <option value="pan-india">Pan-India Nationwide Search</option>
                </select>
              </div>

              {/* Campaign Duration */}
              <div className="space-y-1.5">
                <label htmlFor="seoDuration" className="text-xs font-semibold text-slate-300">Campaign Duration Goal</label>
                <select
                  id="seoDuration"
                  aria-label="Campaign Duration Goal"
                  value={seoDuration}
                  onChange={(e) => setSeoDuration(Number(e.target.value))}
                  className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                >
                  <option value={3}>3 Months Organic Sprint</option>
                  <option value={6}>6 Months Sustainable Page 1 Dominance</option>
                  <option value={12}>12 Months Long-Term Market Leader</option>
                </select>
              </div>

            </div>

            {/* Output Display Box */}
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#A2C0E6] uppercase tracking-wider">
                  Estimated Monthly SEO Investment:
                </span>
                <span className="text-2xl font-black text-[#A2C0E6]">
                  ₹{seoResult.monthlyPackage.toLocaleString('en-IN')} / mo
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <div className="text-xs font-bold text-[#A2C0E6]">+{seoResult.trafficMin}% to +{seoResult.trafficMax}%</div>
                  <div className="text-[10px] text-slate-400">Target Organic Traffic Growth</div>
                </div>
                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <div className="text-xs font-bold text-white">{seoResult.rankingWindow}</div>
                  <div className="text-[10px] text-slate-400">First Page Ranking Window</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                *100% White-Hat SEO guarantee with weekly rank tracking reports, schema markup, and Google Search Console monitoring.
              </p>
            </div>

            {/* WhatsApp Quote CTA */}
            <button
              onClick={() =>
                sendWhatsAppQuote(
                  `Hi Veiled Story! I calculated an SEO campaign cost on your site:\n` +
                  `- Strategy: ${seoType}\n` +
                  `- Keywords: ${seoKeywordScope}\n` +
                  `- Monthly Package: ₹${seoResult.monthlyPackage.toLocaleString('en-IN')}\n` +
                  `- Target Duration: ${seoDuration} Months\n` +
                  `Please share a detailed SEO Audit and keyword plan!`
                )
              }
              className="w-full py-3.5 rounded-2xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-lg shadow-[#A2C0E6]/25 transition duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-[#060d16]" />
              <span>Get Free SEO Roadmap on WhatsApp</span>
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: LEAD GENERATION CALCULATOR */}
        {/* ========================================================= */}
        {activeTab === 'lead-gen' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#A2C0E6] flex items-center gap-2">
                <Target className="w-4 h-4 text-[#A2C0E6]" />
                4. Lead Generation Cost Calculator (लीड जनरेशन कैलकुलेटर)
              </h4>
              <p className="text-xs text-slate-300">
                Calculates specific Lead Generation Cost (CPL) tailored by business industry & ad channel (Google vs Meta Ads).
              </p>
            </div>

            {/* Industry & Channel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Business Sector */}
              <div className="space-y-1.5">
                <label htmlFor="leadNiche" className="text-xs font-semibold text-slate-300">Business Sector / Niche</label>
                <select
                  id="leadNiche"
                  aria-label="Business Sector or Niche"
                  value={leadNiche}
                  onChange={(e) => setLeadNiche(e.target.value)}
                  className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                >
                  <option value="real-estate">Real Estate & Property (Flats, Commercial, Plots)</option>
                  <option value="pharma">Pharma / PCD Franchise & Medical Equipment</option>
                  <option value="manufacturing">B2B Manufacturing & Industrial Products</option>
                  <option value="healthcare">Healthcare, Dental & Surgical Clinics</option>
                  <option value="education">Education, Coaching & Study Abroad</option>
                  <option value="ecommerce">E-Commerce & D2C Brands</option>
                  <option value="services">Local Services (Salon, Hotel, Interior Design)</option>
                </select>
              </div>

              {/* Lead Channel */}
              <div className="space-y-1.5">
                <label htmlFor="leadChannel" className="text-xs font-semibold text-slate-300">Primary Ad Channel Choice</label>
                <select
                  id="leadChannel"
                  aria-label="Primary Ad Channel Choice"
                  value={leadChannel}
                  onChange={(e) => setLeadChannel(e.target.value)}
                  className="w-full bg-[#060d16] border border-[#A2C0E6]/40 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
                >
                  <option value="google-ads">Google Search Ads (High Purchase Intent Leads)</option>
                  <option value="meta-ads">Meta Ads (FB & Instagram Lead Forms)</option>
                  <option value="omnichannel">Omnichannel (Google + Meta + Retargeting)</option>
                </select>
              </div>

            </div>

            {/* Target Leads Goal Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-slate-300">Monthly Target Verified Leads Goal</span>
                <span className="font-extrabold text-[#A2C0E6]">{targetLeadsGoal} Inquiries / mo</span>
              </div>
              <input
                type="range"
                min={15}
                max={300}
                step={5}
                value={targetLeadsGoal}
                onChange={(e) => setTargetLeadsGoal(Number(e.target.value))}
                className="w-full accent-[#A2C0E6] cursor-pointer"
              />
            </div>

            {/* Output Display Box */}
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/40 space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                
                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <div className="text-lg font-black text-[#A2C0E6]">₹{leadResult.cpl}</div>
                  <div className="text-[10px] text-slate-400">Est. CPL (Cost Per Lead)</div>
                </div>

                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <div className="text-lg font-black text-white">₹{leadResult.adSpend.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-400">Recommended Ad Budget</div>
                </div>

                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <div className="text-lg font-black text-[#A2C0E6]">₹{leadResult.agencyFee.toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-400">Agency Campaign Fee</div>
                </div>

                <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20">
                  <div className="text-lg font-black text-[#A2C0E6]">~{leadResult.estimatedCalls} Calls</div>
                  <div className="text-[10px] text-slate-400">Direct Phone Inquiries</div>
                </div>

              </div>

              <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">Total Estimated Monthly Lead Budget:</span>
                <span className="text-base font-black text-[#A2C0E6]">₹{leadResult.totalInvestment.toLocaleString('en-IN')} / mo</span>
              </div>

              <p className="text-[11px] text-slate-400 italic text-center">
                *Lead quality is verified with instant CRM integration, lead form filtration, and custom negative keyword matching.
              </p>
            </div>

            {/* WhatsApp Quote CTA */}
            <button
              onClick={() =>
                sendWhatsAppQuote(
                  `Hi Veiled Story! I calculated a Lead Generation campaign budget on your site:\n` +
                  `- Industry: ${leadNiche}\n` +
                  `- Channel: ${leadChannel}\n` +
                  `- Target Leads Goal: ${targetLeadsGoal}/mo\n` +
                  `- Estimated CPL: ₹${leadResult.cpl}\n` +
                  `- Total Investment: ₹${leadResult.totalInvestment.toLocaleString('en-IN')}\n` +
                  `Please contact me to set up our lead campaign!`
                )
              }
              className="w-full py-3.5 rounded-2xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-lg shadow-[#A2C0E6]/25 transition duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-[#060d16]" />
              <span>Send Lead Generation Strategy Request to WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
