'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, FAQS_DATA } from '@/lib/data';
import { Sparkles, MapPin, Phone, Mail, Globe, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060d16] border-t border-[#A2C0E6]/25 text-slate-400 py-12 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white via-[#A2C0E6] to-[#5b87c2] p-0.5 shadow-md shadow-[#A2C0E6]/20">
                <div className="w-full h-full bg-[#060d16] rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#A2C0E6]" />
                </div>
              </div>
              <span className="text-lg font-bold text-white">
                Veiled <span className="bg-gradient-to-r from-white via-[#A2C0E6] to-[#7ba8e0] bg-clip-text text-transparent">Story</span>
              </span>
            </a>

            <p className="text-slate-300 leading-relaxed max-w-sm">
              Veiled Story is the top result-driven digital marketing company in Zirakpur, Chandigarh, Panchkula, and Mohali. We specialize in Local & Technical SEO, PPC Google Ads, Social Media Growth, and Converting Web Design.
            </p>

            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A2C0E6]" />
                <span>Enquiry Line: <strong>{SITE_CONFIG.phone}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#A2C0E6]" />
                <span>Website: <strong>{SITE_CONFIG.domain}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A2C0E6]" />
                <span>VIP Road, Zirakpur, Punjab 140603</span>
              </div>
            </div>
          </div>

          {/* Col 2: Digital Marketing Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2">
              <li><Link href="/digital-marketing-company-chandigarh" className="hover:text-white transition font-bold text-[#A2C0E6]">• Digital Marketing Chandigarh</Link></li>
              <li><Link href="/lead-generation-company-in-zirakpur" className="hover:text-white transition font-bold text-[#A2C0E6]">• Lead Generation in Zirakpur</Link></li>
              <li><Link href="/digital-marketing-in-pharma-industry" className="hover:text-white transition font-bold text-emerald-400">• Digital Marketing in Pharma</Link></li>
              <li><Link href="/seo-company-in-zirakpur" className="hover:text-white transition font-bold text-[#A2C0E6]">• SEO Company in Zirakpur</Link></li>
              <li><Link href="/services/seo-company-zirakpur" className="hover:text-[#A2C0E6] transition">• SEO Company in Zirakpur</Link></li>
              <li><Link href="/services/google-ads-agency" className="hover:text-[#A2C0E6] transition">• Google Ads Agency</Link></li>
              <li><Link href="/services/meta-ads-agency" className="hover:text-[#A2C0E6] transition">• Meta Ads Agency</Link></li>
              <li><Link href="/services/answer-engine-optimization" className="hover:text-[#A2C0E6] transition">• AEO & GEO Optimization</Link></li>
              <li><Link href="/services/custom-web-designing" className="hover:text-[#A2C0E6] transition">• Custom Web Designing</Link></li>
              <li><Link href="/services/google-business-profile-optimization" className="hover:text-[#A2C0E6] transition">• Google Business Profile</Link></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation & Insights
            </h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#A2C0E6] transition">• About Us Page</Link></li>
              <li><Link href="/contact" className="hover:text-[#A2C0E6] transition">• Contact Us Page</Link></li>
              <li><Link href="/blogs" className="hover:text-[#A2C0E6] transition">• SEO & AEO Blogs</Link></li>
              <li><Link href="/services/real-estate-website-designing" className="hover:text-[#A2C0E6] transition">• Real Estate Websites</Link></li>
              <li><Link href="/services/e-commerce-website-design" className="hover:text-[#A2C0E6] transition">• E-Commerce Development</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Action */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Connect
            </h4>
            <p className="text-slate-400">
              Need immediate digital marketing guidance? Contact our team directly on WhatsApp:
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Veiled Story! I am looking for a Digital Marketing Company in Zirakpur / Tricity.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white hover:shadow-[0_0_20px_rgba(162,192,230,0.5)] shadow-md shadow-[#A2C0E6]/20 transition duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#060d16]" /> WhatsApp Enquiry
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#A2C0E6]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong>Veiled Story</strong>. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-xs text-slate-400">
            <span>VIP Road, Zirakpur, Punjab</span>
            <span>•</span>
            <a href="#services" className="hover:text-[#A2C0E6] transition">Digital Growth Solutions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
