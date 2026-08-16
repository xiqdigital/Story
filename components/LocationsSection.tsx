'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LOCATIONS_DATA, SITE_CONFIG } from '@/lib/data';
import { MapPin, Navigation, CheckCircle2, MessageSquare, Building2, ChevronRight } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Zirakpur");

  const activeLocation = LOCATIONS_DATA.find((l) => l.city === selectedCity) || LOCATIONS_DATA[0];

  const handleCityEnquiry = (cityName: string) => {
    const text = encodeURIComponent(
      `Hello Veiled Story! I am looking for a Digital Marketing Company in ${cityName}. Please share local SEO & marketing details for my business.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="locations" className="py-20 relative overflow-hidden bg-[#060d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* H2 Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border-[#A2C0E6]/40 text-xs font-semibold text-[#A2C0E6]">
            <MapPin className="w-3.5 h-3.5 text-[#A2C0E6]" />
            <span>Tricity Regional Coverage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Digital Marketing Company Serving Chandigarh, Panchkula & Mohali
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            While our operational headquarters are situated on VIP Road in Zirakpur, Veiled Story delivers hyper-targeted digital marketing, SEO, Google Ads, and SMM solutions across the entire Chandigarh Tricity metropolis.
          </p>
        </div>

        {/* City Selection Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {LOCATIONS_DATA.map((loc) => {
            const isSelected = selectedCity === loc.city;
            return (
              <button
                key={loc.city}
                onClick={() => setSelectedCity(loc.city)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#A2C0E6] text-[#060d16] shadow-xl shadow-[#A2C0E6]/20 scale-105'
                    : 'liquid-glass text-slate-300 hover:text-white hover:border-[#A2C0E6]/50 border border-[#A2C0E6]/20'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>{loc.city}</span>
              </button>
            );
          })}
        </div>

        {/* Main City Detail Liquid Glass Display */}
        <div className="liquid-glass rounded-3xl p-6 md:p-10 border border-[#A2C0E6]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#060d16]/80 border border-[#A2C0E6]/30 text-xs font-semibold text-[#A2C0E6]">
              <Navigation className="w-3.5 h-3.5 text-[#A2C0E6]" />
              <span>Target Region: {activeLocation.city}</span>
            </div>

            {/* H3 Heading for City */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {activeLocation.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeLocation.description}
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-[#A2C0E6] uppercase tracking-wider">
                Key Local SEO & Growth Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeLocation.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-[#060d16]/60 p-2.5 rounded-xl border border-[#A2C0E6]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Landmarks & Zip Codes */}
            <div className="pt-2 border-t border-[#A2C0E6]/20 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div>
                <span className="text-slate-300 font-semibold">Key Landmarks:</span> {activeLocation.landmarks}
              </div>
              <div>
                <span className="text-slate-300 font-semibold">Pincodes:</span> {activeLocation.zipCodes}
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-2">
              <button
                onClick={() => handleCityEnquiry(activeLocation.city)}
                className="px-6 py-3.5 rounded-2xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-lg shadow-[#A2C0E6]/20 transition duration-300 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-[#060d16]" />
                <span>Get Local Marketing Proposal for {activeLocation.city}</span>
              </button>
            </div>
          </div>

          {/* Right Map Placeholder & Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#A2C0E6]/30 group bg-[#060d16]">
              <Image
                src={
                  activeLocation.city.toLowerCase() === 'zirakpur'
                    ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
                    : activeLocation.city.toLowerCase() === 'chandigarh'
                    ? 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1200&auto=format&fit=crop'
                    : activeLocation.city.toLowerCase() === 'panchkula'
                    ? 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
                    : 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
                }
                alt={`Map and Local SEO Services for ${activeLocation.title} - Veiled Story`}
                width={800}
                height={600}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/30 to-transparent p-4 flex flex-col justify-end">
                <span className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#A2C0E6]" /> Veiledstory.com Local Hub
                </span>
                <p className="text-xs text-slate-300 mt-1">
                  Dominating Google Map Pack & Local Search Queries across {activeLocation.city}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl liquid-glass border border-[#A2C0E6]/20 text-xs text-slate-300 space-y-2">
              <div className="flex justify-between items-center text-[#A2C0E6] font-semibold">
                <span>Tricity Local SEO Coverage</span>
                <span>100% Geo-Targeted</span>
              </div>
              <p>
                We optimize local Schema markup, geo-tagged image metadata, and regional backlinks so customers searching in {activeLocation.city} find your company first.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Cities Quick Grid Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.city}
              onClick={() => setSelectedCity(loc.city)}
              className={`p-4 rounded-2xl cursor-pointer transition border ${
                selectedCity === loc.city
                  ? 'bg-[#A2C0E6]/10 border-[#A2C0E6]'
                  : 'liquid-glass border-[#A2C0E6]/20 hover:border-[#A2C0E6]/50'
              }`}
            >
              <h3 className="text-sm font-bold text-white flex items-center justify-between">
                <span>{loc.city} Hub</span>
                <ChevronRight className="w-4 h-4 text-[#A2C0E6]" />
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                {loc.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
