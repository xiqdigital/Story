'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calculator,
  TrendingUp,
  ShieldCheck,
  Building2,
  Stethoscope,
  Pill,
  Globe2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

interface PharmaSegment {
  id: string;
  name: string;
  icon: React.ElementType;
  avgLeadValue: string;
  typicalCpl: number;
  conversionRate: number;
  desc: string;
}

const PHARMA_SEGMENTS: PharmaSegment[] = [
  {
    id: 'pcd',
    name: 'PCD Pharma Franchise',
    icon: Building2,
    avgLeadValue: '₹50,000 - ₹5,00,000 Initial Order',
    typicalCpl: 450,
    conversionRate: 0.12,
    desc: 'Target monopoly district distributors & pharma stockists across Pan-India.'
  },
  {
    id: 'third_party',
    name: 'Third-Party Manufacturing',
    icon: Pill,
    avgLeadValue: '₹5,00,000 - ₹25,00,000+ Contract',
    typicalCpl: 850,
    conversionRate: 0.08,
    desc: 'High-ticket B2B inquiries for WHO-GMP certified tablet, syrup, & injectable formulations.'
  },
  {
    id: 'hcp',
    name: 'Doctor & HCP Detailing',
    icon: Stethoscope,
    avgLeadValue: 'High Lifetime Rx Value',
    typicalCpl: 320,
    conversionRate: 0.18,
    desc: 'Targeted webinars, medical journals, and digital sampling for specialists.'
  },
  {
    id: 'otc_nutra',
    name: 'OTC & Nutraceutical D2C',
    icon: Globe2,
    avgLeadValue: '₹899 - ₹2,499 AOV',
    typicalCpl: 180,
    conversionRate: 0.035,
    desc: 'Performance ads on Meta, Google Shopping, and Amazon with compliance guardrails.'
  }
];

export function PharmaInteractiveCalculator() {
  const [selectedSegment, setSelectedSegment] = useState<string>('pcd');
  const [monthlyBudget, setMonthlyBudget] = useState<number>(50000);
  const [targetReach, setTargetReach] = useState<string>('pan_india');

  const segment = PHARMA_SEGMENTS.find((s) => s.id === selectedSegment) || PHARMA_SEGMENTS[0];

  // Dynamic calculations based on industry benchmarks
  const estimatedLeads = Math.round(monthlyBudget / segment.typicalCpl);
  const estimatedQualifiedDeals = Math.max(1, Math.round(estimatedLeads * segment.conversionRate));
  const estimatedImpressions = Math.round(monthlyBudget * 45);

  const whatsappMessage = `Hi Vishal Sahani, I used the Pharma ROI Calculator for ${segment.name} with a budget of ₹${monthlyBudget.toLocaleString('en-IN')}/mo (${targetReach.replace('_', ' ').toUpperCase()}). Please share a customized Pharma Digital Strategy Blueprint.`;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 md:p-10 liquid-glass border border-[#A2C0E6]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(162,192,230,0.1)] text-slate-100 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#1E3E62]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-semibold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" /> Interactive Pharma ROI & Lead Estimator
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Calculate Your Digital Growth Potential in the Pharma Sector
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Estimate verified monthly B2B inquiries, distributor sign-ups, and qualified doctor reach based on real campaign benchmarks.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Configurator Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Select Pharma Business Model */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#A2C0E6] mb-2.5">
              1. Select Your Pharma Model
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PHARMA_SEGMENTS.map((seg) => {
                const Icon = seg.icon;
                const isSelected = selectedSegment === seg.id;
                return (
                  <button
                    key={seg.id}
                    onClick={() => setSelectedSegment(seg.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all border flex items-start gap-3 ${
                      isSelected
                        ? 'bg-[#1E3E62]/80 border-[#A2C0E6] text-white shadow-lg shadow-[#A2C0E6]/10 scale-[1.02]'
                        : 'bg-[#060d16]/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#0b1829]'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isSelected ? 'bg-[#A2C0E6] text-[#060d16]' : 'bg-slate-800 text-[#A2C0E6]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-white">{seg.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{seg.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Monthly Marketing Budget Slider */}
          <div className="p-4 rounded-2xl bg-[#060d16]/70 border border-slate-800/90 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-[#A2C0E6]">
                2. Target Monthly Marketing Budget
              </label>
              <span className="text-base font-extrabold text-white px-3 py-1 rounded-lg bg-[#1E3E62]/60 border border-[#A2C0E6]/30">
                ₹{monthlyBudget.toLocaleString('en-IN')} <span className="text-[10px] font-normal text-slate-400">/ mo</span>
              </span>
            </div>
            <input
              type="range"
              min={25000}
              max={300000}
              step={5000}
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full accent-[#A2C0E6] h-2 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>₹25,000 (Emerging)</span>
              <span>₹1,50,000 (Growth)</span>
              <span>₹3,00,000+ (Enterprise)</span>
            </div>
          </div>

          {/* 3. Geographical Reach Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#A2C0E6] mb-2">
              3. Target Geographical Scope
            </label>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              {[
                { id: 'north_india', label: 'North India (Tricity & Baddi Hub)' },
                { id: 'pan_india', label: 'Pan-India Distribution' },
                { id: 'global_export', label: 'Global Pharma Exports' }
              ].map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setTargetReach(loc.id)}
                  className={`py-2.5 px-2 rounded-xl font-semibold transition border text-[11px] ${
                    targetReach === loc.id
                      ? 'bg-[#1E3E62] border-[#A2C0E6] text-white'
                      : 'bg-[#060d16]/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Projected Impact Card */}
        <div className="lg:col-span-5 rounded-3xl p-6 bg-gradient-to-b from-[#0b1829] to-[#04080e] border border-[#A2C0E6]/30 shadow-2xl space-y-5">
          <div className="flex items-center justify-between border-b border-[#A2C0E6]/20 pb-3">
            <div>
              <div className="text-[11px] text-[#A2C0E6] uppercase font-bold tracking-wider">Projected Output</div>
              <h4 className="text-lg font-extrabold text-white">{segment.name}</h4>
            </div>
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> High ROI
            </span>
          </div>

          {/* Key Metric Blocks */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#060d16]/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">Est. Monthly Inquiries</div>
              <div className="text-2xl font-black text-[#A2C0E6] mt-0.5">{estimatedLeads}+</div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3 h-3" /> Verified B2B Leads
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#060d16]/80 border border-slate-800">
              <div className="text-[11px] text-slate-400">High-Probability Deals</div>
              <div className="text-2xl font-black text-emerald-400 mt-0.5">{estimatedQualifiedDeals} - {estimatedQualifiedDeals * 2}</div>
              <div className="text-[10px] text-slate-400 mt-1">Monopoly / Contract closures</div>
            </div>
          </div>

          {/* Average Pipeline Potential */}
          <div className="p-3.5 rounded-2xl bg-[#1E3E62]/30 border border-[#A2C0E6]/20 space-y-1">
            <div className="text-[11px] text-[#A2C0E6] font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Average Contract / Order Value
            </div>
            <div className="text-sm font-bold text-white">{segment.avgLeadValue}</div>
            <div className="text-[10px] text-slate-400">Estimated Reach: ~{estimatedImpressions.toLocaleString('en-IN')} decision makers</div>
          </div>

          {/* Compliance & Safety Guarantee */}
          <div className="flex items-start gap-2.5 text-[11px] text-slate-300 bg-[#060d16]/60 p-3 rounded-xl border border-slate-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>100% Pharma Compliant:</strong> Adheres to CDSCO, Drugs & Magic Remedies Act, and ethical medical advertising standards.
            </span>
          </div>

          {/* WhatsApp CTA Action */}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] transition"
          >
            <PhoneCall className="w-4 h-4" /> Claim Custom Pharma Strategy Blueprint
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
