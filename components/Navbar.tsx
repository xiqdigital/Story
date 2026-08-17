'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/data';
import {
  MessageSquare,
  Sun,
  Moon,
  Phone,
  MapPin,
  Sparkles,
  Menu,
  X,
  Calculator,
  ChevronDown,
  Search,
  Zap,
  Share2,
  Bot,
  Code2
} from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal?: () => void;
  onOpenRoiCalc?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuditModal,
  onOpenRoiCalc,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileSubServicesOpen, setMobileSubServicesOpen] = useState(false);

  const handleAuditClick = () => {
    if (onOpenAuditModal) {
      onOpenAuditModal();
    } else {
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Veiled Story! I would like a Free SEO & Digital Marketing Audit.')}`, '_blank');
    }
  };

  const handleRoiClick = () => {
    if (onOpenRoiCalc) {
      onOpenRoiCalc();
    } else {
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Veiled Story! I want to calculate lead generation ROI for my business.')}`, '_blank');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppDirect = () => {
    const msg = encodeURIComponent(
      `Hello Veiled Story! I am looking for a Digital Marketing Company in Zirakpur / Tricity. Please share a customized consultation and growth plan.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar */}
      <div className="hidden md:block bg-[#060d16]/95 text-xs py-1.5 px-4 border-b border-[#A2C0E6]/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#A2C0E6] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#A2C0E6]" />
              Primary Hub: VIP Road, Zirakpur | Serving Chandigarh, Panchkula & Mohali
            </span>
            <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[#A2C0E6] transition flex items-center gap-1">
              <Phone className="w-3 h-3 text-[#A2C0E6]" /> {SITE_CONFIG.phone}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenRoiCalc}
              className="text-[#A2C0E6] hover:text-white flex items-center gap-1 font-semibold transition"
            >
              <Calculator className="w-3.5 h-3.5 text-[#A2C0E6]" /> Free Cost Calculator
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled ? 'px-4 py-2 my-2' : 'px-4 py-3 md:py-4'
        }`}
      >
        <div className="liquid-glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between shadow-2xl border border-[#A2C0E6]/30">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-white via-[#A2C0E6] to-[#5b87c2] p-0.5 shadow-lg shadow-[#A2C0E6]/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#060d16] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#A2C0E6] animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Veiled <span className="bg-gradient-to-r from-white via-[#A2C0E6] to-[#7ba8e0] bg-clip-text text-transparent">Story</span>
              </span>
              <span className="block text-[10px] text-[#A2C0E6]/90 font-medium tracking-wider uppercase">
                Digital Growth Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 text-sm font-medium text-slate-200">
            
            {/* 1. Home */}
            <Link
              href="/"
              className="hover:text-[#A2C0E6] transition-colors px-3.5 py-2.5 min-h-[44px] inline-flex items-center text-slate-100 font-semibold"
            >
              Home
            </Link>

            {/* 2. Service Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                className="hover:text-[#A2C0E6] transition-colors px-3.5 py-2.5 min-h-[44px] inline-flex items-center gap-1.5 text-slate-100 font-semibold group"
              >
                <span>Service</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#A2C0E6] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </a>

              {/* Mega Glass Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] p-5 liquid-glass rounded-2xl border border-[#A2C0E6]/35 shadow-2xl space-y-4 mt-1 animate-fadeIn bg-[#060d16]/95 backdrop-blur-2xl z-50">
                  {/* 4 Categorized Columns */}
                  <div className="grid grid-cols-4 gap-3 text-xs">
                    
                    {/* Col 1: SEO & Maps */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-[#A2C0E6] border-b border-[#A2C0E6]/25 pb-1 flex items-center gap-1">
                        <Search className="w-3 h-3 text-[#A2C0E6]" /> Local & Organic SEO
                      </div>
                      <Link href="/seo-company-in-zirakpur" className="p-1.5 rounded-lg bg-[#A2C0E6]/15 hover:bg-[#A2C0E6]/30 hover:text-white transition block border border-[#A2C0E6]/40">
                        <div className="font-bold text-white flex items-center gap-1">
                          SEO Company in Zirakpur <Sparkles className="w-2.5 h-2.5 text-[#A2C0E6]" />
                        </div>
                        <p className="text-[10px] text-[#A2C0E6]">Complete Zirakpur SEO Page</p>
                      </Link>
                      <Link href="/digital-marketing-company-chandigarh" className="p-1.5 rounded-lg bg-[#A2C0E6]/15 hover:bg-[#A2C0E6]/30 hover:text-white transition block border border-[#A2C0E6]/40">
                        <div className="font-bold text-white flex items-center gap-1">
                          Digital Marketing Chandigarh <Sparkles className="w-2.5 h-2.5 text-[#A2C0E6]" />
                        </div>
                        <p className="text-[10px] text-[#A2C0E6]">360° Chandigarh Growth Page</p>
                      </Link>
                      <Link href="/services/seo-company-zirakpur" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">SEO Company in Zirakpur</div>
                        <p className="text-[10px] text-slate-400">Google Map & Search rank</p>
                      </Link>
                      <Link href="/services/on-page-seo-company" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">On-Page SEO</div>
                        <p className="text-[10px] text-slate-400">Content optimization</p>
                      </Link>
                      <Link href="/services/technical-seo-company" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">Technical SEO</div>
                        <p className="text-[10px] text-slate-400">Core Web Vitals</p>
                      </Link>
                      <Link href="/services/google-business-profile-optimization" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">Google Business Profile</div>
                        <p className="text-[10px] text-slate-400">Map pack growth</p>
                      </Link>
                    </div>

                    {/* Col 2: Paid Ads & Performance */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-[#A2C0E6] border-b border-[#A2C0E6]/25 pb-1 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-[#A2C0E6]" /> Performance & Ads
                      </div>
                      <Link href="/lead-generation-company-in-zirakpur" className="p-1.5 rounded-lg bg-[#A2C0E6]/15 hover:bg-[#A2C0E6]/30 hover:text-white transition block border border-[#A2C0E6]/40">
                        <div className="font-bold text-white flex items-center gap-1">
                          Lead Generation Zirakpur <Sparkles className="w-2.5 h-2.5 text-[#A2C0E6]" />
                        </div>
                        <p className="text-[10px] text-[#A2C0E6]">B2B & Real Estate Funnels</p>
                      </Link>
                      <Link href="/digital-marketing-in-pharma-industry" className="p-1.5 rounded-lg bg-[#1E3E62]/40 hover:bg-[#1E3E62]/80 hover:text-white transition block border border-[#A2C0E6]/30">
                        <div className="font-bold text-[#A2C0E6] flex items-center gap-1">
                          Pharma Digital Marketing <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <p className="text-[10px] text-slate-300">PCD, B2B & Doctor Detailing</p>
                      </Link>
                      <Link href="/services/google-ads-agency" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">Google Ads (PPC)</div>
                        <p className="text-[10px] text-slate-400">High intent search ads</p>
                      </Link>
                      <Link href="/services/meta-ads-agency" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">Meta Ads (FB & IG)</div>
                        <p className="text-[10px] text-slate-400">Lead generation ads</p>
                      </Link>
                      <Link href="/services/lead-generation" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">Lead Generation</div>
                        <p className="text-[10px] text-slate-400">Verified buyers funnel</p>
                      </Link>
                      <Link href="/services/social-media-marketing" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">Social Media (SMM)</div>
                        <p className="text-[10px] text-slate-400">Brand engagement</p>
                      </Link>
                    </div>

                    {/* Col 3: AI Search (AEO & GEO) */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-[#A2C0E6] border-b border-[#A2C0E6]/25 pb-1 flex items-center gap-1">
                        <Bot className="w-3 h-3 text-[#A2C0E6]" /> Next-Gen AI Search
                      </div>
                      <Link href="/services/answer-engine-optimization" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">AEO (Answer Engine)</div>
                        <p className="text-[10px] text-slate-400">ChatGPT & Voice</p>
                      </Link>
                      <Link href="/services/generative-engine-optimization" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">GEO (Generative AI)</div>
                        <p className="text-[10px] text-slate-400">AI search overview</p>
                      </Link>
                      <Link href="/services/ai-overview-optimization" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">AI Overviews</div>
                        <p className="text-[10px] text-slate-400">Google Gemini cites</p>
                      </Link>
                    </div>

                    {/* Col 4: Web Development */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-bold text-[#A2C0E6] border-b border-[#A2C0E6]/25 pb-1 flex items-center gap-1">
                        <Code2 className="w-3 h-3 text-[#A2C0E6]" /> Web Development
                      </div>
                      <Link href="/services/custom-web-designing" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">Custom Web Design</div>
                        <p className="text-[10px] text-slate-400">High converting UX</p>
                      </Link>
                      <Link href="/services/wordpress-web-development" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">WordPress Dev</div>
                        <p className="text-[10px] text-slate-400">Custom themes</p>
                      </Link>
                      <Link href="/services/e-commerce-website-design" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">E-Commerce Stores</div>
                        <p className="text-[10px] text-slate-400">Shopify & Next.js</p>
                      </Link>
                      <Link href="/services/real-estate-website-designing" className="p-1.5 rounded-lg hover:bg-[#A2C0E6]/15 hover:text-white transition block">
                        <div className="font-semibold text-slate-200">Real Estate Websites</div>
                        <p className="text-[10px] text-slate-400">Flat listing portals</p>
                      </Link>
                    </div>

                  </div>

                  <div className="pt-2.5 border-t border-[#A2C0E6]/20 text-center flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">Need custom web or marketing consultation?</span>
                    <a
                      href="#services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-[11px] font-bold text-[#A2C0E6] hover:text-white transition inline-flex items-center gap-1"
                    >
                      View All Services →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 3. About */}
            <Link
              href="/about"
              className="hover:text-[#A2C0E6] transition-colors px-3 py-2.5 min-h-[44px] inline-flex items-center text-slate-100 font-semibold"
            >
              About
            </Link>

            {/* 4. Blogs */}
            <Link
              href="/blogs"
              className="hover:text-[#A2C0E6] transition-colors px-3 py-2.5 min-h-[44px] inline-flex items-center text-slate-100 font-semibold"
            >
              Blogs
            </Link>

            {/* 5. Author Profile */}
            <Link
              href="/author/vishal-sahani"
              className="hover:text-white transition-colors px-3 py-2.5 min-h-[44px] inline-flex items-center text-[#A2C0E6] font-semibold gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" /> Author Profile
            </Link>

            {/* 6. Contact */}
            <Link
              href="/contact"
              className="hover:text-[#A2C0E6] transition-colors px-3 py-2.5 min-h-[44px] inline-flex items-center text-slate-100 font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Free Audit Button */}
            <button
              onClick={handleAuditClick}
              aria-label="Request Free SEO Audit"
              className="hidden md:flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/40 hover:border-[#A2C0E6] hover:bg-[#A2C0E6]/20 transition hover:shadow-lg hover:shadow-[#A2C0E6]/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" /> Free SEO Audit
            </button>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppDirect}
              aria-label="WhatsApp Direct Enquiry"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white hover:shadow-[0_0_25px_rgba(162,192,230,0.6)] shadow-lg shadow-[#A2C0E6]/30 transition duration-300 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-[#060d16]" /> WhatsApp Enquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl liquid-glass text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#A2C0E6]" /> : <Menu className="w-6 h-6 text-[#A2C0E6]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 liquid-glass rounded-2xl border border-[#A2C0E6]/35 flex flex-col space-y-3 text-sm font-medium bg-[#060d16]/95 backdrop-blur-2xl">
            
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#A2C0E6]/10 text-slate-100 font-bold"
            >
              Home
            </Link>

            {/* 2. Service Mobile Accordion */}
            <div>
              <button
                onClick={() => setMobileSubServicesOpen(!mobileSubServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#A2C0E6]/10 text-slate-100 font-bold"
              >
                <span className="flex items-center gap-2 text-[#A2C0E6]">
                  <Sparkles className="w-4 h-4 text-[#A2C0E6]" /> Service
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileSubServicesOpen && (
                <div className="ml-3 pl-3 border-l border-[#A2C0E6]/30 my-2 space-y-2 text-xs">
                  <Link
                    href="/seo-company-in-zirakpur"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#A2C0E6] font-bold underline"
                  >
                    ★ SEO Company in Zirakpur Page
                  </Link>
                  <Link
                    href="/digital-marketing-company-chandigarh"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#A2C0E6] font-bold underline"
                  >
                    ★ Digital Marketing Company in Chandigarh
                  </Link>
                  <Link
                    href="/digital-marketing-in-pharma-industry"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-emerald-400 font-bold underline"
                  >
                    ★ Digital Marketing in Pharma Industry
                  </Link>
                  <Link
                    href="/services/seo-company-zirakpur"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-slate-300 hover:text-[#A2C0E6]"
                  >
                    SEO Company in Zirakpur
                  </Link>
                  <Link
                    href="/services/on-page-seo-company"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-slate-300 hover:text-[#A2C0E6]"
                  >
                    On Page SEO Company
                  </Link>
                  <Link
                    href="/services/technical-seo-company"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-slate-300 hover:text-[#A2C0E6]"
                  >
                    Technical SEO Company
                  </Link>
                  <Link
                    href="/services/google-ads-agency"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-slate-300 hover:text-[#A2C0E6]"
                  >
                    Google Ads Agency
                  </Link>
                  <Link
                    href="/services/meta-ads-agency"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-slate-300 hover:text-[#A2C0E6]"
                  >
                    Meta Ads (FB & IG)
                  </Link>
                  <Link
                    href="/services/answer-engine-optimization"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-slate-300 hover:text-[#A2C0E6]"
                  >
                    Answer Engine Optimization (AEO)
                  </Link>
                  <Link
                    href="/services/wordpress-web-development"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-slate-300 hover:text-[#A2C0E6]"
                  >
                    WordPress Web Development
                  </Link>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#A2C0E6] font-bold"
                  >
                    → View All Services
                  </a>
                </div>
              )}
            </div>

            {/* 3. About */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#A2C0E6]/10 text-slate-100 font-bold"
            >
              About Us
            </Link>

            {/* 4. Blogs */}
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#A2C0E6]/10 text-slate-100 font-bold"
            >
              Blogs
            </Link>

            {/* 5. Author Profile */}
            <Link
              href="/author/vishal-sahani"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#A2C0E6]/10 text-[#A2C0E6] font-bold flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" /> Author Profile (Vishal Sahani)
            </Link>

            {/* 6. Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#A2C0E6]/10 text-slate-100 font-bold"
            >
              Contact Us
            </Link>

            <div className="pt-2 border-t border-[#A2C0E6]/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleRoiClick();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/40 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#A2C0E6]" /> Lead & Cost Calculator
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppDirect();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Enquiry
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
