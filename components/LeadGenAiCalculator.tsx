'use client';

import React, { useState, useMemo } from 'react';
import { SITE_CONFIG } from '@/lib/data';
import {
  Calculator,
  Search,
  MessageSquare,
  MapPin,
  Laptop,
  Briefcase,
  Zap,
  TrendingUp,
  DollarSign,
  PieChart,
  CheckCircle2,
  Sparkles,
  Bot,
  ArrowRight,
  Copy,
  Check,
  RefreshCw,
  Building2,
  Sliders,
  Award,
  Layers,
  ChevronDown,
  ChevronUp,
  Percent,
  Flame,
  Activity
} from 'lucide-react';

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  baseMonthlyFee: number;
  setupFee: number;
  description: string;
  deliverables: string[];
  recommendedFor: string[];
  popular?: boolean;
}

const AVAILABLE_SERVICES: ServiceItem[] = [
  {
    id: 'google-ads',
    name: 'Google Ads (PPC) Management',
    category: 'High-Intent Search',
    icon: Search,
    baseMonthlyFee: 15000,
    setupFee: 6000,
    description: 'High-commercial-intent Search, Performance Max, Call-Only ads with negative keyword scrubbing.',
    deliverables: [
      'Exact & Phrase Match Keyword Mining',
      'Negative Keyword Scrubbing (Blocks 100% junk queries)',
      'High-Converting Responsive Search Ad Copy',
      'Call Tracking & Conversion Value Setup',
      'Continuous Bid Optimization (tCPA / Target ROAS)'
    ],
    recommendedFor: ['Real Estate', 'Pharma B2B', 'Education', 'Healthcare', 'Local Services'],
    popular: true,
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram Funnels)',
    category: 'Social Demand Generation',
    icon: MessageSquare,
    baseMonthlyFee: 14000,
    setupFee: 5000,
    description: 'Multi-step native Instant Lead Forms, video creatives, CAPI tracking & WhatsApp Click-to-Chat.',
    deliverables: [
      'Custom Instant Form with Qualifying Questions',
      'Lookalike (LAL) & Geo-Fenced Audience Targeting',
      'Conversions API (CAPI) Server-Side Tracking',
      'High-Impact Video & Carousel Ad Creatives',
      'Direct WhatsApp Click-to-Chat Lead Flow'
    ],
    recommendedFor: ['Real Estate', 'Education', 'Interior Design', 'Retail', 'Healthcare'],
    popular: true,
  },
  {
    id: 'local-seo',
    name: 'Local SEO & Google 3-Pack Ranking',
    category: 'Organic Inbound Calls',
    icon: MapPin,
    baseMonthlyFee: 12000,
    setupFee: 4000,
    description: 'Dominate Google Map 3-Pack rankings on VIP Road, Zirakpur, and Chandigarh Tricity.',
    deliverables: [
      'Google Business Profile (GBP) Full Optimization',
      '100% Consistent Geo-Citations across Top Directories',
      'Review Generation & Reputation Engine',
      'Localized Geo-Tagged Service Landing Pages',
      'Zero Cost Per Click Inbound Phone Calls'
    ],
    recommendedFor: ['Local Services', 'Clinics & Hospitals', 'Real Estate Brokers', 'Showrooms'],
  },
  {
    id: 'landing-page',
    name: 'High-Converting Next.js Landing Page',
    category: 'Conversion Rate Optimization',
    icon: Laptop,
    baseMonthlyFee: 0, // One-time asset
    setupFee: 18000,
    description: 'Sub-second load speed, mobile-first liquid glass design, OTP validation & dynamic keyword match.',
    deliverables: [
      '100/100 Core Web Vitals Sub-Second Load Speed',
      'Multi-Step Psychological Qualifier Questionnaire',
      'SMS / OTP Lead Phone Number Validation',
      'A/B Split Test Variants for Headlines & CTA Hooks',
      'Direct CRM & WhatsApp Webhook Integration'
    ],
    recommendedFor: ['All Performance Marketing Campaigns'],
    popular: true,
  },
  {
    id: 'b2b-linkedin',
    name: 'B2B LinkedIn ABM & Executive Outreach',
    category: 'Enterprise Sales Pipeline',
    icon: Briefcase,
    baseMonthlyFee: 20000,
    setupFee: 7500,
    description: 'Account-Based Marketing targeting C-Suite, Managing Directors, and Procurement Officers.',
    deliverables: [
      'Sales Navigator Decision Maker Scraping & Verification',
      'Personalized Multi-Touch InMail & Message Sequences',
      'Thought Leadership Content & Whitepaper Funnels',
      'Direct Calendar Appointment Booking Workflow',
      'High-Ticket B2B Lead Qualification'
    ],
    recommendedFor: ['IT & SaaS', 'Pharma PCD & Manufacturing', 'Corporate Services', 'Industrial'],
  },
  {
    id: 'crm-whatsapp',
    name: 'Automated CRM & 10-Second WhatsApp Router',
    category: 'Speed to Lead Automation',
    icon: Zap,
    baseMonthlyFee: 3500,
    setupFee: 4500,
    description: 'Instant lead dispatch to sales teams within 10 seconds via WhatsApp, SMS, and live sheets.',
    deliverables: [
      'Instant Lead Notification to Sales WhatsApp in <10s',
      'Automated Welcome & Brochure Drip via WhatsApp API',
      'Real-Time Google Sheets & CRM Synchronization',
      'Lead Status Scoring & Auto-Follow-Up Triggers',
      'Missed Call Auto-SMS & Callback Dispatcher'
    ],
    recommendedFor: ['High-Velocity Sales Teams'],
  },
];

interface IndustryPreset {
  id: string;
  name: string;
  avgCpl: number; // in INR
  defaultDealValue: number; // in INR
  defaultCloseRate: number; // percentage
  recommendedServices: string[];
  cplRange: string;
  description: string;
}

const INDUSTRY_PRESETS: IndustryPreset[] = [
  {
    id: 'real-estate',
    name: 'Real Estate & Luxury Housing (Zirakpur/PR7)',
    avgCpl: 450,
    defaultDealValue: 500000, // Average broker commission or developer profit per unit
    defaultCloseRate: 3.5,
    recommendedServices: ['google-ads', 'meta-ads', 'landing-page', 'crm-whatsapp'],
    cplRange: '₹350 - ₹650',
    description: 'High-intent buyer inquiries for 2/3/4 BHK flats, commercial SCOs, and luxury villas.',
  },
  {
    id: 'pharma-healthcare',
    name: 'Pharma PCD Franchise & Manufacturing (Tricity/Baddi)',
    avgCpl: 380,
    defaultDealValue: 120000,
    defaultCloseRate: 7.0,
    recommendedServices: ['google-ads', 'b2b-linkedin', 'landing-page', 'crm-whatsapp'],
    cplRange: '₹280 - ₹520',
    description: 'District-wise monopoly franchise inquiries & third-party contract manufacturing deals.',
  },
  {
    id: 'education-admissions',
    name: 'Education, Study Abroad & Coaching Institutes',
    avgCpl: 260,
    defaultDealValue: 65000,
    defaultCloseRate: 9.0,
    recommendedServices: ['meta-ads', 'google-ads', 'landing-page', 'crm-whatsapp'],
    cplRange: '₹180 - ₹380',
    description: 'IELTS, study visa aspirants, entrance test coaching, and university admissions.',
  },
  {
    id: 'it-saas',
    name: 'IT Services, SaaS & Tech Agencies (Mohali IT Park)',
    avgCpl: 850,
    defaultDealValue: 250000,
    defaultCloseRate: 6.0,
    recommendedServices: ['b2b-linkedin', 'google-ads', 'landing-page'],
    cplRange: '₹600 - ₹1,400',
    description: 'High-value enterprise software development, app design, and offshore IT contracts.',
  },
  {
    id: 'clinics-hospitals',
    name: 'Healthcare, Dental & Aesthetic Clinics',
    avgCpl: 320,
    defaultDealValue: 35000,
    defaultCloseRate: 18.0,
    recommendedServices: ['local-seo', 'meta-ads', 'google-ads', 'crm-whatsapp'],
    cplRange: '₹220 - ₹480',
    description: 'Patient consultations, dental implants, cosmetic surgeries, and specialist appointments.',
  },
  {
    id: 'interior-construction',
    name: 'Interior Designers, Architects & Construction',
    avgCpl: 520,
    defaultDealValue: 350000,
    defaultCloseRate: 5.0,
    recommendedServices: ['meta-ads', 'google-ads', 'local-seo', 'landing-page'],
    cplRange: '₹400 - ₹750',
    description: 'Turnkey residential and commercial interior renovation and architectural projects.',
  },
  {
    id: 'local-services',
    name: 'Local Businesses & Professional Services (VIP Road)',
    avgCpl: 190,
    defaultDealValue: 25000,
    defaultCloseRate: 15.0,
    recommendedServices: ['local-seo', 'google-ads', 'crm-whatsapp'],
    cplRange: '₹120 - ₹290',
    description: 'High-frequency local customer calls for legal, financial, repair, and showroom businesses.',
  },
];

export const LeadGenAiCalculator: React.FC = () => {
  // State
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('real-estate');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'google-ads',
    'meta-ads',
    'landing-page',
    'crm-whatsapp',
  ]);
  const [contractPlan, setContractPlan] = useState<'monthly' | 'quarterly' | 'annual'>('quarterly');
  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(60000);
  const [dealValue, setDealValue] = useState<number>(500000);
  const [closeRate, setCloseRate] = useState<number>(3.5);
  const [businessName, setBusinessName] = useState<string>('');
  
  // UI Tabs inside the calculator
  const [activeView, setActiveView] = useState<'calculator' | 'breakdown' | 'ai-strategy'>('calculator');
  const [copied, setCopied] = useState<boolean>(false);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // AI Strategic Generator State
  const [isGeneratingAi, setIsGeneratingAi] = useState<boolean>(false);
  interface AiStrategyResult {
    strategyTitle?: string;
    executiveSummary?: string;
    channelSplit?: Array<{ channel: string; percentage: string; rationale?: string }>;
    targetCplRange?: string;
    highIntentKeywords?: string[];
    funnelArchitecture?: string;
    keyRecommendations?: string[];
    breakEvenTimeline?: string;
    projectedRevenueMultiplier?: string;
    speedToLeadTactic?: string;
  }
  const [aiStrategy, setAiStrategy] = useState<AiStrategyResult | null>(null);

  // Current industry object
  const currentIndustry = useMemo(() => {
    return INDUSTRY_PRESETS.find((i) => i.id === selectedIndustryId) || INDUSTRY_PRESETS[0];
  }, [selectedIndustryId]);

  // When industry changes, optionally apply its defaults
  const handleIndustryChange = (id: string) => {
    setSelectedIndustryId(id);
    const ind = INDUSTRY_PRESETS.find((i) => i.id === id);
    if (ind) {
      setDealValue(ind.defaultDealValue);
      setCloseRate(ind.defaultCloseRate);
      setSelectedServiceIds(ind.recommendedServices);
    }
  };

  // Toggle service selection
  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter((s) => s !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  // Bundle Selector (select all for mega bundle)
  const selectAllServices = () => {
    setSelectedServiceIds(AVAILABLE_SERVICES.map((s) => s.id));
  };

  // ==========================================
  // MATHEMATICAL ENGINE & REAL-TIME PRICING
  // ==========================================
  const calculations = useMemo(() => {
    const isBundle = selectedServiceIds.length >= 4;
    const isAllSelected = selectedServiceIds.length === AVAILABLE_SERVICES.length;

    // 1. Raw Base Monthly Management Fee
    let rawMonthlyManagementFee = 0;
    let rawSetupFee = 0;

    selectedServiceIds.forEach((id) => {
      const s = AVAILABLE_SERVICES.find((srv) => srv.id === id);
      if (s) {
        rawMonthlyManagementFee += s.baseMonthlyFee;
        rawSetupFee += s.setupFee;
      }
    });

    // Scale management fee if monthly ad spend is above ₹2,00,000 (standard tier scaling)
    if (monthlyAdSpend > 200000) {
      const excessSpend = monthlyAdSpend - 200000;
      rawMonthlyManagementFee += Math.round(excessSpend * 0.04); // 4% scaled management on high ad spend
    }

    // Discounts based on contract term & bundle
    let bundleDiscountPercent = 0;
    if (isAllSelected) {
      bundleDiscountPercent = 25; // 25% Mega Bundle discount
    } else if (isBundle) {
      bundleDiscountPercent = 15; // 15% Multi-service discount
    }

    let contractDiscountPercent = 0;
    let setupFeeWaiver = false;

    if (contractPlan === 'quarterly') {
      contractDiscountPercent = 10;
      setupFeeWaiver = true; // 100% Setup Fee Waived on Quarterly Plans
    } else if (contractPlan === 'annual') {
      contractDiscountPercent = 25;
      setupFeeWaiver = true; // 100% Setup Fee Waived on Annual Plans
    }

    const totalDiscountPercent = Math.min(bundleDiscountPercent + contractDiscountPercent, 35);
    const discountedMonthlyManagementFee = Math.round(
      rawMonthlyManagementFee * (1 - totalDiscountPercent / 100)
    );
    const finalSetupFee = setupFeeWaiver ? 0 : Math.round(rawSetupFee * (1 - bundleDiscountPercent / 100));

    // 2. Lead Volume & Quality Calculation
    // Adjust CPL based on channel mix (if SEO & Landing Page selected, CPL improves by 18%)
    let effectiveCpl = currentIndustry.avgCpl;
    if (selectedServiceIds.includes('landing-page')) {
      effectiveCpl *= 0.85; // 15% cheaper CPL due to high conversion rate
    }
    if (selectedServiceIds.includes('crm-whatsapp')) {
      effectiveCpl *= 0.92; // 8% improved qualification efficiency
    }
    effectiveCpl = Math.max(Math.round(effectiveCpl), 100);

    // Estimated Total Leads generated from Ad Spend
    const projectedAdLeads = Math.max(Math.round(monthlyAdSpend / effectiveCpl), 5);

    // If Local SEO is selected, add bonus organic inbound leads (15 to 45 free leads/mo)
    const organicBonusLeads = selectedServiceIds.includes('local-seo') ? 22 : 0;
    const totalEstimatedLeads = projectedAdLeads + organicBonusLeads;

    // MQL (Marketing Qualified Leads) ~ 85% of verified leads
    const projectedMql = Math.round(totalEstimatedLeads * 0.82);
    // SQL (Sales Qualified Leads) ~ 60% of MQL
    const projectedSql = Math.round(projectedMql * 0.65);

    // Closed Deals / Customers
    const projectedClosedDeals = Math.max(
      Math.round((totalEstimatedLeads * (closeRate / 100)) * 10) / 10,
      0.5
    );

    // Projected Monthly New Revenue Generated
    const projectedRevenue = Math.round(projectedClosedDeals * dealValue);

    // Total Monthly Investment (Ad Spend + Agency Management Fee)
    const totalMonthlyInvestment = monthlyAdSpend + discountedMonthlyManagementFee;

    // Return On Ad Spend (ROAS)
    const netRoas = projectedRevenue > 0
      ? (projectedRevenue / totalMonthlyInvestment).toFixed(1)
      : '0.0';

    // Customer Acquisition Cost (CAC)
    const projectedCac = projectedClosedDeals >= 1
      ? Math.round(totalMonthlyInvestment / projectedClosedDeals)
      : totalMonthlyInvestment;

    return {
      rawMonthlyManagementFee,
      discountedMonthlyManagementFee,
      rawSetupFee,
      finalSetupFee,
      setupFeeWaiver,
      totalDiscountPercent,
      bundleDiscountPercent,
      contractDiscountPercent,
      effectiveCpl,
      totalEstimatedLeads,
      projectedMql,
      projectedSql,
      projectedClosedDeals,
      projectedRevenue,
      totalMonthlyInvestment,
      netRoas,
      projectedCac,
      isBundle,
      isAllSelected,
    };
  }, [selectedServiceIds, monthlyAdSpend, dealValue, closeRate, contractPlan, currentIndustry]);

  // ==========================================
  // AI STRATEGY DEEP-DIVE GENERATOR (GEMINI)
  // ==========================================
  const handleGenerateAiStrategy = async () => {
    setIsGeneratingAi(true);
    setActiveView('ai-strategy');

    try {
      const selectedNames = selectedServiceIds.map(
        (id) => AVAILABLE_SERVICES.find((s) => s.id === id)?.name || id
      );

      const res = await fetch('/api/lead-gen-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          services: selectedNames,
          industry: currentIndustry.name,
          monthlyAdSpend,
          dealValue,
          targetLeads: calculations.totalEstimatedLeads,
          location: 'Zirakpur, VIP Road & Chandigarh Tricity',
          businessName: businessName.trim(),
        }),
      });

      if (!res.ok) throw new Error('API request failed');
      const data = await res.json();
      setAiStrategy(data);
    } catch {
      // Fallback heuristics if API call fails
      setAiStrategy({
        strategyTitle: `High-Velocity ${currentIndustry.name.split(' ')[0]} Growth Blueprint for ${businessName || 'Your Business'}`,
        executiveSummary: `Targeting Zirakpur, PR7, and Tricity with a combined Google PPC + Meta Instant Form funnel maximizes reach across active searchers and social discoverers.`,
        channelSplit: [
          { channel: 'Google Ads (High Commercial Intent)', percentage: '45%' },
          { channel: 'Meta Ads (Video Testimonials & WhatsApp)', percentage: '35%' },
          { channel: 'Local SEO & Google 3-Pack Optimization', percentage: '20%' },
        ],
        targetCplRange: currentIndustry.cplRange,
        highIntentKeywords: [
          `best ${currentIndustry.name.toLowerCase()} zirakpur`,
          `top verified ${currentIndustry.name.toLowerCase()} vip road`,
          `price quote ${currentIndustry.name.toLowerCase()} tricity`,
          `verified lead generation zirakpur`,
        ],
        funnelArchitecture:
          'Sub-second Next.js Liquid-Glass landing page featuring interactive qualifying questions, OTP validation, and automated 10-second WhatsApp sales routing.',
        keyRecommendations: [
          'Deploy exact-match negative keyword filters to block unready or informational queries.',
          'Implement WhatsApp Click-to-Chat buttons with pre-filled property/service inquiry prompts.',
          'A/B split-test 3 distinct hero hooks focusing on pricing transparency and verified quality.',
          'Track end-to-end sales outcomes inside Google Looker Studio for daily CAC optimization.',
        ],
        breakEvenTimeline: '30 to 45 Days',
        projectedRevenueMultiplier: `${calculations.netRoas}x Target ROAS`,
        speedToLeadTactic:
          'Automatic WhatsApp API webhook dispatch to sales team within 10 seconds of lead submission.',
      });
    } finally {
      setIsGeneratingAi(false);
    }
  };

  // Copy Quotation to Clipboard
  const handleCopyProposal = () => {
    const summary = `
========================================
VEILED STORY - REAL-TIME LEAD GENERATION PROPOSAL
Zirakpur | VIP Road | Chandigarh Tricity
========================================
Business: ${businessName || 'Valued Growth Client'}
Industry: ${currentIndustry.name}
Contract Term: ${contractPlan.toUpperCase()} (Save ${calculations.totalDiscountPercent}%)

SELECTED MARKETING SERVICES:
${selectedServiceIds.map((id) => `• ${AVAILABLE_SERVICES.find((s) => s.id === id)?.name}`).join('\n')}

INVESTMENT & BUDGET BREAKDOWN:
- Monthly Ad Spend: ₹${monthlyAdSpend.toLocaleString('en-IN')}
- Agency Management Fee: ₹${calculations.discountedMonthlyManagementFee.toLocaleString('en-IN')}/month
- Setup & Funnel Build: ${calculations.setupFeeWaiver ? '₹0 (100% WAIVED)' : `₹${calculations.finalSetupFee.toLocaleString('en-IN')}`}
- Total Monthly Investment: ₹${calculations.totalMonthlyInvestment.toLocaleString('en-IN')}

PROJECTED PERFORMANCE METRICS:
- Target CPL (Cost Per Qualified Lead): ₹${calculations.effectiveCpl}
- Estimated Monthly Qualified Inquiries: ~${calculations.totalEstimatedLeads} Leads/mo
- Marketing Qualified Leads (MQL): ~${calculations.projectedMql}/mo
- Sales Qualified Leads (SQL): ~${calculations.projectedSql}/mo
- Estimated Closed Customers/Deals: ~${calculations.projectedClosedDeals} Deals/mo
- Projected Monthly Pipeline Value: ₹${calculations.projectedRevenue.toLocaleString('en-IN')}
- Projected Net ROAS: ${calculations.netRoas}x Return On Ad Spend
- Estimated CAC: ₹${calculations.projectedCac.toLocaleString('en-IN')} per closed customer

Claim This Locked-In Quote via WhatsApp: https://wa.me/${SITE_CONFIG.whatsappNumber}
========================================
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // WhatsApp formatted URL
  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      `Hello Veiled Story Growth Team! 🚀\n\nI just calculated our Real-Time Lead Generation Plan on your website:\n\n• Business: ${businessName || 'My Business'}\n• Industry: ${currentIndustry.name}\n• Selected Services: ${selectedServiceIds.length} Services (${selectedServiceIds.join(', ')})\n• Monthly Ad Spend: ₹${monthlyAdSpend.toLocaleString('en-IN')}\n• Target Leads: ~${calculations.totalEstimatedLeads} Leads/mo\n• Estimated CPL: ₹${calculations.effectiveCpl}\n• Agency Fee: ₹${calculations.discountedMonthlyManagementFee.toLocaleString('en-IN')}/mo\n• Plan: ${contractPlan.toUpperCase()} (Waiver: ${calculations.setupFeeWaiver ? 'Yes' : 'No'})\n• Projected ROAS: ${calculations.netRoas}x\n\nCan we schedule a 15-min strategy call to lock in this plan?`
    );
    return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  }, [businessName, currentIndustry, selectedServiceIds, monthlyAdSpend, calculations, contractPlan]);

  return (
    <section id="ai-price-calculator" className="py-20 border-b border-[#A2C0E6]/20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7BA4D5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold tracking-wider uppercase">
            <Bot className="w-4 h-4 text-[#A2C0E6]" />
            <span>Masterpiece Real-Time AI Price &amp; ROI Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Interactive AI Lead Generation Pricing &amp; ROI Forecast Calculator
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Zero hidden costs. Select your exact services, target industry, and monthly advertising budget to get an instantaneous mathematical quotation, itemized deliverables breakdown, and AI-powered ROAS forecast.
          </p>
        </div>

        {/* Navigation Mode Pill Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#A2C0E6]/20 pb-4">
          <div className="inline-flex p-1.5 rounded-2xl liquid-glass border border-[#A2C0E6]/25">
            <button
              onClick={() => setActiveView('calculator')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
                activeView === 'calculator'
                  ? 'bg-gradient-to-r from-[#A2C0E6] to-[#7BA4D5] text-[#060d16] shadow-md shadow-[#A2C0E6]/20'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Real-Time Pricing Engine</span>
            </button>
            <button
              onClick={() => setActiveView('breakdown')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
                activeView === 'breakdown'
                  ? 'bg-gradient-to-r from-[#A2C0E6] to-[#7BA4D5] text-[#060d16] shadow-md shadow-[#A2C0E6]/20'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Itemized Deliverables &amp; Pricing</span>
            </button>
            <button
              onClick={() => setActiveView('ai-strategy')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 ${
                activeView === 'ai-strategy'
                  ? 'bg-gradient-to-r from-[#A2C0E6] to-[#7BA4D5] text-[#060d16] shadow-md shadow-[#A2C0E6]/20'
                  : 'text-[#A2C0E6] hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>AI Strategic Roadmap</span>
              {aiStrategy && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
            </button>
          </div>

          {/* Contract Duration Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">Billing Term:</span>
            <div className="inline-flex p-1 rounded-xl liquid-glass border border-[#A2C0E6]/20 text-xs">
              <button
                onClick={() => setContractPlan('monthly')}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  contractPlan === 'monthly'
                    ? 'bg-[#A2C0E6]/25 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setContractPlan('quarterly')}
                className={`px-3 py-1.5 rounded-lg font-medium transition relative ${
                  contractPlan === 'quarterly'
                    ? 'bg-[#A2C0E6] text-[#060d16] font-bold shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Quarterly
                <span className="ml-1 text-[10px] uppercase px-1 py-0.2 rounded bg-amber-400 text-black font-extrabold">
                  Save 10% + 0 Setup
                </span>
              </button>
              <button
                onClick={() => setContractPlan('annual')}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  contractPlan === 'annual'
                    ? 'bg-[#A2C0E6] text-[#060d16] font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Annual <span className="text-[10px] text-emerald-400 font-bold">(Save 25%)</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: INTERACTIVE CALCULATOR MAIN GRID */}
        {/* ========================================================================= */}
        {activeView === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Input Controls & Service Selection (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Industry Selector */}
              <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#A2C0E6]" />
                    <span>1. Select Your Target Industry Benchmark</span>
                  </label>
                  <span className="text-xs text-[#A2C0E6] font-semibold">
                    CPL: {currentIndustry.cplRange}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {INDUSTRY_PRESETS.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => handleIndustryChange(ind.id)}
                      className={`p-3 rounded-2xl text-left text-xs transition border flex flex-col justify-between gap-1.5 ${
                        selectedIndustryId === ind.id
                          ? 'bg-[#A2C0E6]/20 border-[#A2C0E6] text-white shadow-sm'
                          : 'bg-black/30 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{ind.name.split('(')[0]}</span>
                        {selectedIndustryId === ind.id && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A2C0E6]" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">
                        {ind.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Service Multi-Selection Grid */}
              <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#A2C0E6]" />
                    <span>2. Choose Marketing Services ({selectedServiceIds.length} Selected)</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={selectAllServices}
                      className="text-xs font-semibold text-[#A2C0E6] hover:underline flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" /> Select All (25% Mega Bundle)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {AVAILABLE_SERVICES.map((service) => {
                    const isSelected = selectedServiceIds.includes(service.id);
                    const IconComp = service.icon;

                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`p-4 rounded-2xl cursor-pointer transition border relative flex flex-col justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#A2C0E6]/15 border-[#A2C0E6] text-white shadow-md'
                            : 'bg-black/25 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {service.popular && (
                          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-[9px] font-bold text-amber-300 uppercase tracking-wider">
                            Popular
                          </span>
                        )}

                        <div className="space-y-2">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                isSelected ? 'bg-[#A2C0E6] text-[#060d16]' : 'bg-slate-800 text-[#A2C0E6]'
                              }`}
                            >
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-bold text-xs leading-snug">{service.name}</div>
                              <div className="text-[10px] text-[#A2C0E6]">{service.category}</div>
                            </div>
                          </div>

                          <p className="text-[11px] text-slate-300 line-clamp-2">
                            {service.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                          <span className="font-bold text-[#A2C0E6]">
                            {service.baseMonthlyFee > 0
                              ? `₹${service.baseMonthlyFee.toLocaleString('en-IN')}/mo`
                              : `₹${service.setupFee.toLocaleString('en-IN')} one-time`}
                          </span>
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center border text-[10px] ${
                              isSelected
                                ? 'bg-[#A2C0E6] border-[#A2C0E6] text-black font-bold'
                                : 'border-slate-700 bg-black/40 text-transparent'
                            }`}
                          >
                            ✓
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Sliders: Monthly Ad Spend, Deal Value & Conversion */}
              <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-6">
                <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#A2C0E6]" />
                  <span>3. Fine-Tune Monthly Ad Spend &amp; Deal Economics</span>
                </label>

                {/* Slider A: Monthly Ad Spend */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">Monthly Direct Ad Spend (Paid to Google/Meta):</span>
                    <span className="text-base font-extrabold text-white bg-[#A2C0E6]/20 px-3 py-1 rounded-xl border border-[#A2C0E6]/30">
                      ₹{monthlyAdSpend.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="15000"
                    max="500000"
                    step="5000"
                    value={monthlyAdSpend}
                    onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#A2C0E6]"
                  />

                  {/* Preset Buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[25000, 50000, 100000, 200000, 350000].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setMonthlyAdSpend(preset)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition ${
                          monthlyAdSpend === preset
                            ? 'bg-[#A2C0E6] text-[#060d16]'
                            : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        ₹{(preset / 1000)}k
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider B: Average Deal / Customer Value */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">Average Deal / Customer Lifetime Value:</span>
                    <span className="text-sm font-extrabold text-[#A2C0E6] bg-black/40 px-3 py-1 rounded-xl border border-slate-800">
                      ₹{dealValue.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10000"
                    max="2000000"
                    step="10000"
                    value={dealValue}
                    onChange={(e) => setDealValue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#A2C0E6]"
                  />
                </div>

                {/* Slider C: Sales Closing Rate */}
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">Your Sales Team Lead-to-Sale Closing Rate:</span>
                    <span className="text-sm font-extrabold text-emerald-400 bg-black/40 px-3 py-1 rounded-xl border border-slate-800">
                      {closeRate}% Conversion
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1.0"
                    max="25.0"
                    step="0.5"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Conservative (2%)</span>
                    <span>Industry Avg ({currentIndustry.defaultCloseRate}%)</span>
                    <span>High Velocity (15%+)</span>
                  </div>
                </div>

              </div>

            </div>

            {/* RIGHT COLUMN: Live Financial & Revenue Telemetry Matrix (5 cols) */}
            <div className="lg:col-span-5 space-y-6 sticky top-24">
              
              {/* Telemetry Card */}
              <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/40 space-y-6 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#06121e]/90 via-[#04080e]/95 to-[#04080e]">
                
                {/* Badge top */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#A2C0E6] uppercase tracking-wider">
                    <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                    <span>Live Quotation &amp; Forecast</span>
                  </div>
                  {calculations.totalDiscountPercent > 0 && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-extrabold">
                      {calculations.totalDiscountPercent}% Discount Applied
                    </span>
                  )}
                </div>

                {/* Main Monthly Agency Management Fee */}
                <div className="p-5 rounded-2xl bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 space-y-1 text-center sm:text-left">
                  <span className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                    Monthly Agency Management Fee:
                  </span>
                  <div className="flex items-baseline gap-3 justify-center sm:justify-start">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      ₹{calculations.discountedMonthlyManagementFee.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400">/ month</span>
                    {calculations.discountedMonthlyManagementFee < calculations.rawMonthlyManagementFee && (
                      <span className="text-xs text-slate-500 line-through">
                        ₹{calculations.rawMonthlyManagementFee.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-[#A2C0E6] pt-1">
                    Setup &amp; Funnel Build: {calculations.setupFeeWaiver ? (
                      <strong className="text-emerald-300">₹0 (100% Waived)</strong>
                    ) : (
                      `₹${calculations.finalSetupFee.toLocaleString('en-IN')} one-time`
                    )}
                  </div>
                </div>

                {/* Performance Metrics Matrix Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  
                  {/* Metric 1: Estimated CPL */}
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-slate-800 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Estimated CPL</div>
                    <div className="text-xl font-extrabold text-[#A2C0E6]">
                      ₹{calculations.effectiveCpl}
                    </div>
                    <div className="text-[10px] text-slate-500">Per Qualified Lead</div>
                  </div>

                  {/* Metric 2: Estimated Leads */}
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-slate-800 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Projected Leads</div>
                    <div className="text-xl font-extrabold text-white flex items-center gap-1">
                      <span>~{calculations.totalEstimatedLeads}</span>
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {calculations.projectedSql} SQL High-Intent
                    </div>
                  </div>

                  {/* Metric 3: Projected Closed Deals */}
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-slate-800 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Closed Deals</div>
                    <div className="text-xl font-extrabold text-emerald-400">
                      ~{calculations.projectedClosedDeals}
                    </div>
                    <div className="text-[10px] text-slate-500">At {closeRate}% closing rate</div>
                  </div>

                  {/* Metric 4: Projected Pipeline Revenue */}
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-slate-800 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Pipeline Revenue</div>
                    <div className="text-lg sm:text-xl font-extrabold text-white truncate">
                      ₹{calculations.projectedRevenue.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-semibold">
                      {calculations.netRoas}x Target ROAS
                    </div>
                  </div>

                </div>

                {/* Financial Summary Bar */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#A2C0E6]/15 to-transparent border border-[#A2C0E6]/25 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Monthly Ad Spend:</span>
                    <strong className="text-white">₹{monthlyAdSpend.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Agency Management:</span>
                    <strong className="text-white">₹{calculations.discountedMonthlyManagementFee.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex justify-between text-slate-300 border-t border-slate-800 pt-1.5 font-bold">
                    <span className="text-[#A2C0E6]">Total Monthly Investment:</span>
                    <span className="text-white font-extrabold">₹{calculations.totalMonthlyInvestment.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Optional Business Name Input for Personalized AI Proposal */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                    Your Business / Brand Name (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Sushma Joynest / Medisun Pharma"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#A2C0E6]"
                  />
                </div>

                {/* Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  
                  {/* WhatsApp Direct Lock-in */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Lock In This Plan on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {/* AI Deep-Dive Roadmap Generator */}
                  <button
                    onClick={handleGenerateAiStrategy}
                    disabled={isGeneratingAi}
                    className="w-full py-3 px-4 rounded-2xl bg-[#A2C0E6]/20 hover:bg-[#A2C0E6]/30 border border-[#A2C0E6]/40 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                  >
                    {isGeneratingAi ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#A2C0E6]" />
                        <span>AI Analyzing Zirakpur Market Dynamics...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Generate Custom AI Strategy Roadmap</span>
                      </>
                    )}
                  </button>

                  {/* Copy Proposal Summary */}
                  <button
                    onClick={handleCopyProposal}
                    className="w-full py-2 px-3 rounded-xl bg-black/40 hover:bg-black/60 border border-slate-800 text-slate-400 hover:text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Proposal Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Detailed Quotation Breakdown</span>
                      </>
                    )}
                  </button>

                </div>

                <div className="text-[10px] text-center text-slate-500">
                  🛡️ 100% Verified Inquiries • Transparent Looker Studio Reporting • No Lock-in Contracts
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: ITEMIZED DELIVERABLES & DETAILED PRICE BREAKDOWN */}
        {/* ========================================================================= */}
        {activeView === 'breakdown' && (
          <div className="space-y-6">
            
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Line-Item Deliverables &amp; Service Transparency
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Every service is backed by rigorous execution frameworks. Review exactly what is included in your active plan:
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Total Monthly Retainer</div>
                  <div className="text-2xl font-black text-[#A2C0E6]">
                    ₹{calculations.discountedMonthlyManagementFee.toLocaleString('en-IN')}/mo
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                {AVAILABLE_SERVICES.map((service) => {
                  const isSelected = selectedServiceIds.includes(service.id);
                  const isExpanded = expandedService === service.id;
                  const IconC = service.icon;

                  return (
                    <div
                      key={service.id}
                      className={`liquid-glass rounded-2xl border transition overflow-hidden ${
                        isSelected
                          ? 'border-[#A2C0E6]/50 bg-[#A2C0E6]/5'
                          : 'border-slate-800/80 bg-black/20 opacity-70'
                      }`}
                    >
                      <div
                        onClick={() => setExpandedService(isExpanded ? null : service.id)}
                        className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition"
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              isSelected ? 'bg-[#A2C0E6] text-[#060d16]' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            <IconC className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm sm:text-base flex items-center gap-2">
                              <span>{service.name}</span>
                              {isSelected && (
                                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                                  Included in Plan
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-400">{service.category}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm font-bold text-[#A2C0E6]">
                              {service.baseMonthlyFee > 0
                                ? `₹${service.baseMonthlyFee.toLocaleString('en-IN')}/mo`
                                : `₹${service.setupFee.toLocaleString('en-IN')} one-time`}
                            </div>
                            <div className="text-[10px] text-slate-500">
                              Setup: ₹{service.setupFee.toLocaleString('en-IN')}
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </div>

                      {/* Expandable Deliverables */}
                      {isExpanded && (
                        <div className="p-5 pt-0 border-t border-slate-800/60 bg-black/30 space-y-3 text-xs">
                          <p className="text-slate-300">{service.description}</p>
                          <div className="space-y-1.5">
                            <strong className="text-[#A2C0E6] uppercase tracking-wider text-[10px]">
                              Scope of Deliverables:
                            </strong>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                              {service.deliverables.map((del, i) => (
                                <li key={i} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action row */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setActiveView('calculator')}
                  className="text-xs text-[#A2C0E6] font-semibold hover:underline flex items-center gap-1"
                >
                  ← Back to Interactive Sliders
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Official PDF Scope &amp; Quote</span>
                </a>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 3: AI STRATEGIC GROWTH ROADMAP (GEMINI ASSISTED) */}
        {/* ========================================================================= */}
        {activeView === 'ai-strategy' && (
          <div className="space-y-6">
            
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/35 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A2C0E6]/20 pb-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>Gemini AI Strategic Acquisition Engine</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {aiStrategy?.strategyTitle || `Tailored Growth Roadmap for ${currentIndustry.name}`}
                  </h3>
                </div>

                <button
                  onClick={handleGenerateAiStrategy}
                  disabled={isGeneratingAi}
                  className="px-4 py-2 rounded-xl bg-[#A2C0E6]/20 hover:bg-[#A2C0E6]/30 border border-[#A2C0E6]/40 text-white text-xs font-bold flex items-center gap-2 transition shrink-0"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-[#A2C0E6] ${isGeneratingAi ? 'animate-spin' : ''}`} />
                  <span>Re-Generate AI Analysis</span>
                </button>
              </div>

              {isGeneratingAi ? (
                <div className="py-16 text-center space-y-4">
                  <RefreshCw className="w-8 h-8 animate-spin text-[#A2C0E6] mx-auto" />
                  <div className="text-sm font-bold text-white">
                    AI Strategist is synthesizing local competitive data in Zirakpur...
                  </div>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Calculating high-intent search volumes, competitor ad saturation, and negative keyword matrices for {currentIndustry.name}.
                  </p>
                </div>
              ) : aiStrategy ? (
                <div className="space-y-6">
                  
                  {/* Executive Summary */}
                  {aiStrategy.executiveSummary && (
                    <div className="p-4 rounded-2xl bg-[#A2C0E6]/10 border border-[#A2C0E6]/25 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <strong>Executive Strategic Assessment:</strong> {aiStrategy.executiveSummary}
                    </div>
                  )}

                  {/* Channel Budget Allocation Matrix */}
                  {aiStrategy.channelSplit && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-[#A2C0E6] uppercase tracking-wider">
                        Recommended Ad Budget Allocation Split:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {aiStrategy.channelSplit.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-black/40 border border-slate-800 space-y-1"
                          >
                            <div className="text-2xl font-black text-white">{item.percentage}</div>
                            <div className="text-xs font-bold text-[#A2C0E6]">{item.channel}</div>
                            {item.rationale && (
                              <div className="text-[11px] text-slate-400 pt-1">{item.rationale}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Actionable Recommendations */}
                  {aiStrategy.keyRecommendations && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-[#A2C0E6] uppercase tracking-wider">
                        Tactical Execution Protocols (First 30 Days):
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {aiStrategy.keyRecommendations.map((rec, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-black/30 border border-slate-800/80 flex items-start gap-3"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#A2C0E6]/20 text-[#A2C0E6] text-xs font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-xs text-slate-200 leading-relaxed">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* High Intent Keywords to Target */}
                  {aiStrategy.highIntentKeywords && aiStrategy.highIntentKeywords.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-[#A2C0E6] uppercase tracking-wider">
                        Priority High-Commercial-Intent Search Keywords:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {aiStrategy.highIntentKeywords.map((kw, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono"
                          >
                            &quot;{kw}&quot;
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom KPIs: Break Even & ROAS */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
                    <div className="p-3.5 rounded-xl bg-black/30 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Break-Even Timeline</span>
                      <div className="text-sm font-bold text-emerald-400">{aiStrategy.breakEvenTimeline || '30-45 Days'}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/30 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Projected ROAS</span>
                      <div className="text-sm font-bold text-[#A2C0E6]">{aiStrategy.projectedRevenueMultiplier || `${calculations.netRoas}x`}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/30 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Target CPL Range</span>
                      <div className="text-sm font-bold text-white">{aiStrategy.targetCplRange || currentIndustry.cplRange}</div>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="py-8 text-center space-y-3">
                  <Sparkles className="w-8 h-8 text-amber-300 mx-auto" />
                  <div className="text-sm font-bold text-white">
                    Ready to generate an AI-Powered Customer Acquisition Roadmap
                  </div>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Click below to generate a deep-dive tactical strategy based on your chosen services, budget, and industry.
                  </p>
                  <button
                    onClick={handleGenerateAiStrategy}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#A2C0E6] to-[#7BA4D5] text-[#060d16] font-bold text-xs shadow"
                  >
                    Generate AI Strategic Plan
                  </button>
                </div>
              )}

              {/* Action row */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => setActiveView('calculator')}
                  className="text-xs text-[#A2C0E6] font-semibold hover:underline flex items-center gap-1"
                >
                  ← Back to Interactive Sliders
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Execute This AI Roadmap with Our Team</span>
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
