'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA, TestimonialItem } from '@/lib/data';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Quote,
  TrendingUp,
  Building2,
  Pause,
  Play,
  Award
} from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const industries = ['All', ...Array.from(new Set(TESTIMONIALS_DATA.map((t) => t.industry)))];

  const filteredTestimonials = selectedIndustry === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.industry === selectedIndustry);

  const handleIndustryChange = (ind: string) => {
    setSelectedIndustry(ind);
    setCurrentIndex(0);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isAutoPlaying && filteredTestimonials.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
      }, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, filteredTestimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  const activeItem: TestimonialItem = filteredTestimonials[currentIndex] || TESTIMONIALS_DATA[0];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-[#060d16] border-t border-[#A2C0E6]/20">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold tracking-wide uppercase">
            <Award className="w-3.5 h-3.5 text-[#A2C0E6]" />
            Client Success Stories & Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Top Businesses in <span className="bg-gradient-to-r from-white via-[#A2C0E6] to-[#7ba8e0] bg-clip-text text-transparent">Zirakpur & Tricity</span>
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Real results from real local business leaders in Zirakpur, Chandigarh, Panchkula, and Mohali. Discover how Veiled Story drives verified revenue growth, Google rankings, and high-converting leads.
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {industries.map((ind) => {
            const isActive = selectedIndustry === ind;
            return (
              <button
                key={ind}
                onClick={() => handleIndustryChange(ind)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#A2C0E6] text-[#060d16] font-bold shadow-lg shadow-[#A2C0E6]/20 scale-105'
                    : 'liquid-glass text-slate-300 border border-[#A2C0E6]/20 hover:border-[#A2C0E6]/50 hover:text-white'
                }`}
              >
                {ind}
              </button>
            );
          })}
        </div>

        {/* Main Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative liquid-glass border border-[#A2C0E6]/35 rounded-3xl p-6 sm:p-10 shadow-2xl">
            
            {/* Top Bar inside Card: Metric Badge + Verified Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#A2C0E6]/20">
              
              {/* Metric Pill */}
              <div className="flex items-center gap-3 bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 px-4 py-2 rounded-2xl">
                <TrendingUp className="w-5 h-5 text-[#A2C0E6]" />
                <div>
                  <span className="text-lg font-black text-white mr-2">{activeItem.metric}</span>
                  <span className="text-xs font-semibold text-[#A2C0E6]">{activeItem.metricLabel}</span>
                </div>
              </div>

              {/* Verified Badge & Location */}
              <div className="flex items-center gap-3 text-xs">
                {activeItem.verified && (
                  <span className="flex items-center gap-1.5 font-bold text-[#A2C0E6] bg-[#A2C0E6]/10 px-3 py-1.5 rounded-full border border-[#A2C0E6]/30">
                    <ShieldCheck className="w-4 h-4" /> Verified Client
                  </span>
                )}
                <span className="flex items-center gap-1 text-slate-300 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#A2C0E6]" /> {activeItem.location}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative my-6">
              <Quote className="w-12 h-12 text-[#A2C0E6]/20 absolute -top-4 -left-3 pointer-events-none" />
              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal italic relative z-10 pl-4 sm:pl-6">
                &ldquo;{activeItem.quote}&rdquo;
              </p>
            </div>

            {/* Client Profile Footer inside Card */}
            <div className="mt-8 pt-6 border-t border-[#A2C0E6]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#A2C0E6]/50 shadow-md shrink-0 bg-[#060d16]">
                  <Image
                    src={activeItem.avatar}
                    alt={activeItem.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white">{activeItem.name}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#A2C0E6]/20 text-[#A2C0E6] border border-[#A2C0E6]/30 uppercase tracking-wider">
                      {activeItem.industry}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{activeItem.role}, <span className="text-[#A2C0E6]">{activeItem.company}</span></p>
                  <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-slate-400" /> Service: {activeItem.serviceUsed}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-1">
                  {Array.from({ length: activeItem.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-[#A2C0E6]">5.0 / 5.0 Star Rating</span>
              </div>

            </div>

          </div>

          {/* Carousel Controls (Nav Buttons & Dots) */}
          <div className="flex items-center justify-between mt-8 px-2">
            
            {/* Auto Play Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#060d16] border border-[#A2C0E6]/30 text-slate-300 text-xs hover:text-[#A2C0E6] hover:border-[#A2C0E6] transition"
              title={isAutoPlaying ? "Pause Auto Play" : "Start Auto Play"}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#A2C0E6]" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#A2C0E6]" /> Auto-Play
                </>
              )}
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-[#A2C0E6] shadow-md shadow-[#A2C0E6]/40'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            {/* Previous & Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-3 rounded-full bg-[#060d16] border border-[#A2C0E6]/30 text-slate-300 hover:text-[#A2C0E6] hover:border-[#A2C0E6] hover:scale-105 active:scale-95 transition shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-3 rounded-full bg-[#060d16] border border-[#A2C0E6]/30 text-slate-300 hover:text-[#A2C0E6] hover:border-[#A2C0E6] hover:scale-105 active:scale-95 transition shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
