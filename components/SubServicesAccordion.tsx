'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Zap,
  Share2,
  Bot,
  Code2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Layers,
  CheckCircle2
} from 'lucide-react';

export interface SubServiceItem {
  slug: string;
  title: string;
  badge: string;
  desc: string;
}

export interface SubServiceCategory {
  id: string;
  name: string;
  iconName: 'seo' | 'ppc' | 'smm' | 'ai' | 'web';
  count: number;
  items: SubServiceItem[];
}

export const CATEGORIZED_SUB_SERVICES: SubServiceCategory[] = [
  {
    id: 'seo',
    name: 'SEO & Google Maps',
    iconName: 'seo',
    count: 5,
    items: [
      {
        slug: 'seo-company-zirakpur',
        title: 'SEO Company in Zirakpur',
        badge: 'Local & Maps',
        desc: 'Google Map 3-pack rankings, local citations & search dominance in Zirakpur & Tricity.',
      },
      {
        slug: 'on-page-seo-company',
        title: 'On Page SEO Company',
        badge: 'Content & Meta',
        desc: 'Title tags, heading tags, LSI keyword mapping & Schema markup optimization.',
      },
      {
        slug: 'technical-seo-company',
        title: 'Technical SEO Company',
        badge: 'Core Web Vitals',
        desc: 'Fix Core Web Vitals, site speed, crawl errors & Search Console indexing issues.',
      },
      {
        slug: 'off-page-seo-company',
        title: 'Off Page SEO Company',
        badge: 'Authority Backlinks',
        desc: 'High-authority contextual editorial backlinks, digital PR & brand citations.',
      },
      {
        slug: 'google-business-profile-optimization',
        title: 'Google Business Profile',
        badge: 'Map Pack',
        desc: 'Maximize local map views, phone calls & direct WhatsApp customer enquiries.',
      },
    ],
  },
  {
    id: 'ppc',
    name: 'Google Ads & Lead Gen',
    iconName: 'ppc',
    count: 2,
    items: [
      {
        slug: 'google-ads-agency',
        title: 'Google Ads Agency',
        badge: 'PPC Ads',
        desc: 'Target search ads, display remarketing, call campaigns & instant sales leads.',
      },
      {
        slug: 'lead-generation',
        title: 'Lead Generation Agency',
        badge: 'Qualified Leads',
        desc: 'Verified buyer leads for Real Estate, PCD Pharma, Manufacturing & B2B.',
      },
    ],
  },
  {
    id: 'smm',
    name: 'Social Media & Meta Ads',
    iconName: 'smm',
    count: 3,
    items: [
      {
        slug: 'social-media-marketing',
        title: 'Social Media Marketing',
        badge: 'SMM Organic',
        desc: 'Build brand awareness with viral reels, graphics & community engagement.',
      },
      {
        slug: 'social-media-optimization',
        title: 'Social Media Optimization',
        badge: 'SMO Profiles',
        desc: 'Optimize profile bios, category tags, highlights & social search discoverability.',
      },
      {
        slug: 'meta-ads-agency',
        title: 'Meta Ads Agency',
        badge: 'Facebook & IG Ads',
        desc: 'High-converting Facebook & Instagram lead forms and click-to-WhatsApp ads.',
      },
    ],
  },
  {
    id: 'ai',
    name: 'AEO & GEO (AI Search)',
    iconName: 'ai',
    count: 3,
    items: [
      {
        slug: 'answer-engine-optimization',
        title: 'Answer Engine Optimization',
        badge: 'AEO Voice',
        desc: 'Voice search triggers, direct Q&A blocks, Speakable Schema & zero-click snippets.',
      },
      {
        slug: 'generative-engine-optimization',
        title: 'Generative Engine Optimization',
        badge: 'GEO AI Models',
        desc: 'Get cited & recommended by ChatGPT, Gemini, Perplexity & Claude AI models.',
      },
      {
        slug: 'ai-overview-optimization',
        title: 'AI Overview Optimization',
        badge: 'Google AI Overviews',
        desc: 'Claim prominent source link cards inside Google Gemini AI Search Overviews.',
      },
    ],
  },
  {
    id: 'web',
    name: 'Web Design & Development',
    iconName: 'web',
    count: 9,
    items: [
      {
        slug: 'wordpress-web-development',
        title: 'WordPress Web Development',
        badge: 'WordPress',
        desc: 'Custom, fast-loading, SEO-optimized Elementor & Gutenberg WordPress sites.',
      },
      {
        slug: 'real-estate-website-designing',
        title: 'Real Estate Web Design',
        badge: 'Property Portals',
        desc: 'Property portals, builder landing pages, floor plan lightboxes & WhatsApp leads.',
      },
      {
        slug: 'pharmacy-web-designing',
        title: 'Pharmacy Web Designing',
        badge: 'Chemist Catalog',
        desc: 'Prescription upload, medicine catalog & online chemist store ordering.',
      },
      {
        slug: 'custom-web-designing',
        title: 'Custom Web Designing',
        badge: 'Next.js & React',
        desc: 'Tailor-made Next.js, React, TypeScript websites with liquid glassmorphism UI.',
      },
      {
        slug: 'manufacturing-web-development',
        title: 'Manufacturing Web Dev',
        badge: 'B2B Catalog',
        desc: 'B2B industrial machinery catalogs, technical datasheets & RFQ quote funnels.',
      },
      {
        slug: 'pharma-website-designing',
        title: 'Pharma Website Designing',
        badge: 'PCD Pharma',
        desc: 'PCD Pharma franchise portals, DCGI molecule list & monopoly territory maps.',
      },
      {
        slug: 'seo-friendly-website-design',
        title: 'SEO-Friendly Web Design',
        badge: 'Speed & Schema',
        desc: 'Semantic HTML, fast indexing, Core Web Vitals & Schema pre-integration.',
      },
      {
        slug: 'e-commerce-website-design',
        title: 'E-Commerce Web Design',
        badge: 'Shopify / Woo',
        desc: 'Shopify, WooCommerce & Next.js stores with Razorpay, PhonePe & COD.',
      },
      {
        slug: 'salon-web-design',
        title: 'Salon Web Design',
        badge: 'Beauty & Spa',
        desc: 'Luxury beauty salon & spa websites with price rate cards & WhatsApp bookings.',
      },
      {
        slug: 'hotel-website-design',
        title: 'Hotel Website Design',
        badge: 'Hospitality',
        desc: 'Direct room reservations, banquet hall showcase & commission-free booking.',
      },
    ],
  },
];

export const SubServicesAccordion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('seo');
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    seo: true,
    ppc: false,
    smm: false,
    ai: false,
    web: false,
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'seo':
        return <Search className="w-4 h-4 text-[#A2C0E6]" />;
      case 'ppc':
        return <Zap className="w-4 h-4 text-[#A2C0E6]" />;
      case 'smm':
        return <Share2 className="w-4 h-4 text-[#A2C0E6]" />;
      case 'ai':
        return <Bot className="w-4 h-4 text-[#A2C0E6]" />;
      case 'web':
        return <Code2 className="w-4 h-4 text-[#A2C0E6]" />;
      default:
        return <Layers className="w-4 h-4 text-[#A2C0E6]" />;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Category Tabs (Desktop / Tablet view) */}
      <div className="hidden md:flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#060d16]/90 border border-[#A2C0E6]/20">
        {CATEGORIZED_SUB_SERVICES.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setOpenAccordions((prev) => ({ ...prev, [cat.id]: true }));
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                isActive
                  ? 'bg-[#A2C0E6] text-[#060d16] shadow-lg shadow-[#A2C0E6]/25 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-[#A2C0E6]/10'
              }`}
            >
              {renderIcon(cat.iconName)}
              <span>{cat.name}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                  isActive ? 'bg-[#060d16] text-[#A2C0E6]' : 'bg-[#060d16]/80 text-slate-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Desktop Active Tab Content Card */}
      <div className="hidden md:block">
        {CATEGORIZED_SUB_SERVICES.filter((cat) => cat.id === activeTab).map((category) => (
          <div
            key={category.id}
            className="liquid-glass rounded-3xl p-6 border border-[#A2C0E6]/30 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-[#A2C0E6]/20 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#A2C0E6]/10 border border-[#A2C0E6]/30">
                  {renderIcon(category.iconName)}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white">{category.name}</h4>
                  <p className="text-xs text-slate-400">
                    Showing {category.items.length} specialized sub-service landing pages
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> High Conversion
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="liquid-glass-interactive p-4 rounded-2xl border border-[#A2C0E6]/20 hover:border-[#A2C0E6]/80 flex flex-col justify-between group transition duration-300 space-y-2 hover:bg-[#A2C0E6]/10"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-[#A2C0E6]/10 text-[#A2C0E6] text-[10px] font-bold border border-[#A2C0E6]/20">
                        {item.badge}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A2C0E6] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h5 className="text-sm font-bold text-white group-hover:text-[#A2C0E6] transition">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#A2C0E6]/10 flex items-center justify-between text-[11px] font-bold text-[#A2C0E6]">
                    <span>View Landing Page</span>
                    <span className="text-[#A2C0E6]">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Accordion View */}
      <div className="md:hidden space-y-3">
        {CATEGORIZED_SUB_SERVICES.map((category) => {
          const isOpen = openAccordions[category.id];
          return (
            <div
              key={category.id}
              className="liquid-glass rounded-2xl border border-[#A2C0E6]/30 overflow-hidden transition"
            >
              <button
                onClick={() => toggleAccordion(category.id)}
                className="w-full p-4 flex items-center justify-between bg-[#060d16]/80 hover:bg-[#060d16] transition text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#A2C0E6]/10 border border-[#A2C0E6]/30">
                    {renderIcon(category.iconName)}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      {category.name}
                      <span className="px-2 py-0.5 rounded-full bg-[#A2C0E6]/20 text-[#A2C0E6] text-[10px] font-extrabold">
                        {category.count}
                      </span>
                    </span>
                  </div>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-[#A2C0E6] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-4 pt-2 border-t border-[#A2C0E6]/20 space-y-2 bg-[#060d16]/50">
                  {category.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/services/${item.slug}`}
                      className="block p-3 rounded-xl bg-[#060d16]/90 border border-[#A2C0E6]/20 hover:border-[#A2C0E6] transition"
                    >
                      <div className="flex items-center justify-between">
                        <h5 className="text-xs font-bold text-white">{item.title}</h5>
                        <span className="text-[10px] text-[#A2C0E6] font-bold bg-[#A2C0E6]/10 px-1.5 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
