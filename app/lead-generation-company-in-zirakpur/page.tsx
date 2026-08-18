import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/data';
import { SeoPageCTA } from '@/components/SeoPageCTA';
import { SeoImagePlaceholder } from '@/components/SeoImagePlaceholder';
import { LeadGenAiCalculator } from '@/components/LeadGenAiCalculator';
import {
  Target,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  Users,
  Building2,
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight,
  Star,
  Check,
  Layers,
  Search,
  MessageSquare,
  Award,
  Globe,
  Sliders,
  DollarSign,
  PieChart,
  Clock,
  Briefcase,
  GraduationCap,
  Hospital,
  Compass,
  FileCheck,
  Send,
  HelpCircle,
  Phone,
  Laptop,
  Calculator,
  Bot
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lead Generation Company in Zirakpur – Verified B2B & B2C Inquiries | Veiled Story',
  description:
    'Veiled Story is the premier Lead Generation Company in Zirakpur & Tricity. We deliver 100% verified, high-intent leads for Real Estate, Pharma, Healthcare, Education & B2B using Google Ads, Meta Funnels, SEO & CRO.',
  keywords: [
    'Lead Generation Company in Zirakpur',
    'Lead Generation Agency Zirakpur',
    'B2B Lead Generation Zirakpur',
    'Real Estate Lead Generation Zirakpur',
    'Pharma Franchise Leads Zirakpur',
    'Google Ads Lead Generation Zirakpur',
    'Facebook Meta Ads Agency Zirakpur',
    'High-Converting Landing Pages Zirakpur',
    'Performance Marketing Agency Zirakpur',
    'Vishal Sahani Lead Generation Expert'
  ],
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/lead-generation-company-in-zirakpur`,
  },
  openGraph: {
    title: 'Lead Generation Company in Zirakpur – High-Intent B2B & B2C Revenue Growth',
    description:
      'Stop wasting ad spend on junk leads. Scale your revenue with Veiled Story—the ROI-driven lead generation company on VIP Road Zirakpur.',
    url: `https://${SITE_CONFIG.domain}/lead-generation-company-in-zirakpur`,
    siteName: 'Veiled Story Digital Marketing Agency',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Generation Company in Zirakpur | Veiled Story',
    description:
      'Performance-driven lead generation for Real Estate, Pharma, Healthcare, Education & B2B brands across Zirakpur, Chandigarh, Panchkula & Mohali.',
  },
};

export default function LeadGenerationCompanyInZirakpurPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://${SITE_CONFIG.domain}/lead-generation-company-in-zirakpur#service`,
        name: 'Lead Generation Company in Zirakpur – High-Intent Customer Acquisition Services',
        serviceType: 'Performance Marketing & Lead Generation',
        description:
          'End-to-end B2B and B2C lead generation services in Zirakpur, Chandigarh, Mohali & Panchkula. Specializing in Google Ads PPC, Meta Ad funnels, LinkedIn ABM, high-converting landing pages, and automated lead qualification.',
        provider: {
          '@id': `https://${SITE_CONFIG.domain}/#organization`,
        },
        areaServed: [
          'Zirakpur',
          'VIP Road',
          'PR7 Airport Road',
          'Patiala Road',
          'Dhakoli',
          'Baltana',
          'Peer Muchalla',
          'Chandigarh',
          'Mohali',
          'Panchkula',
          'Tricity',
          'Baddi Pharma Belt',
          'Pan-India',
        ],
      },
      {
        '@type': 'Article',
        '@id': `https://${SITE_CONFIG.domain}/lead-generation-company-in-zirakpur#article`,
        headline: 'Lead Generation Company in Zirakpur – Complete 2026 Strategic Blueprint for Predictable Revenue',
        description:
          'Comprehensive guide and strategic framework for high-intent customer acquisition and B2B lead generation in Zirakpur and Tricity by Vishal Sahani at Veiled Story.',
        image: {
          '@type': 'ImageObject',
          url: `https://${SITE_CONFIG.domain}/images/lead-generation-company-in-zirakpur-funnel.webp`,
          width: 1200,
          height: 675,
          caption: 'Lead Generation Company in Zirakpur - Multi-Channel ROI Funnel Architecture & Attribution Workflow',
        },
        author: {
          '@type': 'Person',
          '@id': `https://${SITE_CONFIG.domain}/#vishal-sahani`,
          name: 'Vishal Sahani',
          jobTitle: 'Senior Growth Strategist & Performance Marketing Expert',
          url: `https://${SITE_CONFIG.domain}/author/vishal-sahani`,
        },
        publisher: {
          '@type': 'Organization',
          '@id': `https://${SITE_CONFIG.domain}/#organization`,
          name: 'Veiled Story Digital Marketing Agency',
          logo: {
            '@type': 'ImageObject',
            url: `https://${SITE_CONFIG.domain}/logo.png`,
          },
        },
        datePublished: '2026-08-17T09:00:00+05:30',
        dateModified: '2026-08-17T10:30:00+05:30',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://${SITE_CONFIG.domain}/lead-generation-company-in-zirakpur#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `https://${SITE_CONFIG.domain}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Lead Generation Company in Zirakpur',
            item: `https://${SITE_CONFIG.domain}/lead-generation-company-in-zirakpur`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://${SITE_CONFIG.domain}/lead-generation-company-in-zirakpur#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does lead generation cost for businesses in Zirakpur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Lead generation pricing in Zirakpur depends on your target industry, geography, and qualification criteria. Typically, ad campaign management retainers range from ₹15,000 to ₹50,000/month. Cost Per Lead (CPL) varies by sector: Real Estate (₹350 to ₹1,200), Pharma Franchise/B2B (₹200 to ₹600), Education/Coaching (₹120 to ₹380), and Local Healthcare/Services (₹150 to ₹450). We focus strictly on Cost Per Qualified Lead (CPQL) to maximize actual ROI.',
            },
          },
          {
            '@type': 'Question',
            name: 'How quickly can we start receiving verified leads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For paid acquisition channels like Google Ads PPC and Meta Ad funnels, our team builds high-converting landing pages, sets up conversion tracking, and launches campaigns within 3 to 5 business days. You will start receiving real-time, verified customer inquiries directly into your WhatsApp and CRM within 24 to 48 hours of campaign activation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which platform works best: Google Ads or Meta Ads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Both platforms serve distinct, complementary stages of the buyer journey. Google Ads captures high-intent searchers actively looking for immediate services (e.g., "3 BHK luxury flat on PR7 Road" or "PCD pharma franchise company in Zirakpur"). Meta Ads (Facebook & Instagram) excels at visual storytelling, lifestyle prospecting, and generating high-volume interest for real estate, beauty, education, and consumer services. We build hybrid multi-channel funnels combining both for maximum market dominance.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Veiled Story ensure lead quality?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We deploy a rigorous 4-tier lead quality filtration system: (1) Mandatory qualifying questions in interactive multi-step forms (e.g., budget range, purchasing timeline, location preference), (2) OTP and phone number validation algorithms to eliminate fake numbers, (3) Strict negative keyword matching on Google Ads to block low-intent traffic, and (4) Real-time CRM lead scrubbing that flags duplicates before notifying your sales reps.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you provide landing page design along with campaigns?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! High-converting landing page design is a core component of our full-stack lead generation service. We build ultra-fast, mobile-first Next.js / Tailwind CSS landing pages featuring our proprietary Liquid Glass aesthetics, sticky call-to-actions, trust badges, WhatsApp click-to-chat triggers, and SSL security to convert up to 18% to 28% of total traffic.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can you generate B2B and real estate leads in the Tricity area?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. We specialize in high-ticket B2B and real estate lead generation across Zirakpur (VIP Road, PR7 Airport Ring Road, Patiala Road, Dhakoli, Baltana), Chandigarh, Panchkula, Mohali (IT City, Aerocity), and the Baddi Industrial Belt, as well as high-net-worth NRI buyer targeting across Canada, UK, USA, Australia, and UAE.',
            },
          },
        ],
      },
    ],
  };

  const industries = [
    {
      title: 'Real Estate & Luxury Housing',
      icon: Building2,
      stat: '₹350 - ₹1,200 CPL',
      desc: 'High-intent buyer inquiries for 2/3/4 BHK apartments, luxury villas, SCO commercial floors, and plots on PR7 Airport Road, VIP Road, and High Ground Road.',
      highlights: ['NRI Buyer Prospecting (Canada, UAE, UK)', 'Verified Budget & Purchasing Timeline Filters', 'Direct Site-Visit Booking Funnels'],
    },
    {
      title: 'Pharma & Healthcare Solutions',
      icon: Hospital,
      stat: '₹180 - ₹550 CPL',
      desc: 'High-volume B2B leads for PCD Pharma Franchise monopoly rights, third-party manufacturing inquiries, ethical doctor leads, and clinical equipment buyers.',
      highlights: ['State/District Exclusive Franchise Inquiries', 'Drug License & GST Verified Inquiries', 'Tricity & Baddi Belt Targeting'],
    },
    {
      title: 'Education, IELTS & Coaching',
      icon: GraduationCap,
      stat: '₹120 - ₹380 CPL',
      desc: 'Student and parent inquiries for private schools, engineering/management colleges, study abroad consultants, and IELTS coaching centers in Tricity.',
      highlights: ['Intake-Season Surge Campaigns', 'Parent Engagement WhatsApp Lead Triggers', 'Free Demo Class / Counseling Bookings'],
    },
    {
      title: 'IT, SaaS & Professional B2B Services',
      icon: Briefcase,
      stat: '₹250 - ₹850 CPL',
      desc: 'Qualified decision-maker meetings with CEOs, Managing Directors, and Founders for software development, ERP integrations, accounting, and legal consulting.',
      highlights: ['LinkedIn Account-Based Marketing (ABM)', 'Enterprise B2B Decision-Maker Prospecting', 'High-Ticket Contract Acquisition Funnels'],
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Competitor & Search Intent Research',
      desc: 'We perform deep-dive competitor reverse engineering and intent-mapping across Zirakpur and Tricity to uncover high-intent commercial keywords and market gaps.',
      icon: Search,
    },
    {
      step: '02',
      title: 'High-Converting Landing Page Setup',
      desc: 'Our design team crafts bespoke, mobile-optimized landing pages with Liquid Glass aesthetics, fast Core Web Vitals (<1.2s LCP), and multi-step qualifying forms.',
      icon: Laptop,
    },
    {
      step: '03',
      title: 'Targeted Multi-Channel Campaign Launch',
      desc: 'We launch synchronized campaigns across Google Search, Performance Max, Meta Lead Forms, and LinkedIn with strict geo-fencing and audience segmentation.',
      icon: Zap,
    },
    {
      step: '04',
      title: 'Lead Quality Scoring & Filtering',
      desc: 'Every incoming inquiry passes through automated OTP verification, custom qualification criteria, and anti-spam filters to ensure only hot prospects reach your sales desk.',
      icon: ShieldCheck,
    },
    {
      step: '05',
      title: 'Continuous Optimization & Scaling',
      desc: 'Daily bid adjustments, search term pruning, creative A/B testing, and conversion rate optimization (CRO) to systematically drive down your Cost Per Acquisition (CPA).',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-[#060d16] text-slate-200 selection:bg-[#A2C0E6] selection:text-[#060d16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />

      {/* Hero Section with H1 */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#A2C0E6]/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-r from-[#A2C0E6]/15 via-[#7BA4D5]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#A2C0E6] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#A2C0E6] font-medium">Lead Generation Company in Zirakpur</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Top-Rated B2B & B2C Performance Marketing Agency in Tricity</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl tracking-tight">
            Lead Generation Company in Zirakpur
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Stop burning marketing budget on low-quality leads and tire-kickers. At <strong className="text-white">Veiled Story</strong>, led by Senior Growth Strategist <strong className="text-white">Vishal Sahani</strong>, we engineer predictable, high-converting customer acquisition funnels for real estate builders, pharma manufacturers, educational institutions, and B2B enterprises across Zirakpur, Chandigarh, Panchkula & Mohali.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-4xl">
            <div className="liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/25">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">500,000+</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Verified Inquiries Delivered</div>
            </div>
            <div className="liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/25">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#A2C0E6]">8.4x</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Average Client ROAS</div>
            </div>
            <div className="liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/25">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">&lt; 10 Sec</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Real-Time Lead CRM Dispatch</div>
            </div>
            <div className="liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/25">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">4.9/5 ⭐</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Client Satisfaction Score</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <SeoPageCTA variant="primary" buttonText="Book Free Growth Strategy Call" />
            <a
              href="#ai-price-calculator"
              className="px-6 py-3.5 rounded-2xl bg-[#A2C0E6]/15 hover:bg-[#A2C0E6]/25 border border-[#A2C0E6]/35 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition"
            >
              <Calculator className="w-4 h-4 text-[#A2C0E6]" />
              <span>Real-Time AI Pricing &amp; ROI Calculator</span>
              <ArrowRight className="w-4 h-4 text-[#A2C0E6]" />
            </a>
          </div>

          {/* NLP / AI Overview Direct Answer Box */}
          <div className="mt-8 liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/35 space-y-4">
            <div className="flex items-center gap-2.5 text-[#A2C0E6]">
              <Zap className="w-5 h-5 text-[#A2C0E6]" />
              <span className="font-bold text-white uppercase tracking-wider text-xs">
                Quick Strategic Answer: Why Veiled Story is Zirakpur&apos;s Leading Lead Generation Agency
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong>Veiled Story</strong> is a specialized performance marketing and lead generation company headquartered in Zirakpur on VIP Road. Unlike generic digital marketing agencies that sell vanity impressions and clicks, we build full-funnel customer acquisition ecosystems. We combine hyper-targeted <strong>Google Search Ads</strong>, <strong>Meta (Facebook & Instagram) AI Lead Funnels</strong>, <strong>Local Google 3-Pack SEO</strong>, <strong>High-Converting Liquid Glass Landing Pages</strong>, and <strong>Automated Lead Scoring Systems</strong> to deliver exclusive, verified inquiries with validated phone numbers, verified intent, and measurable Cost Per Acquisition (CPA).
            </p>
          </div>

          {/* Hero Section Featured Image Placeholder */}
          <div className="pt-4 max-w-5xl">
            <SeoImagePlaceholder
              altText="Lead Generation Company in Zirakpur - Multi-Channel ROI Funnel Architecture & Attribution Workflow"
              captionTitle="Figure 1: Full-Funnel Multi-Channel Customer Acquisition Ecosystem by Veiled Story Zirakpur"
              category="Lead Generation Architecture Blueprint"
              dimensions="1200 × 675 (16:9)"
              aspectRatio="16/9"
              icon={Target}
              badgeText="Zirakpur Growth Framework"
              schemaKeywords={[
                'Lead Generation Company in Zirakpur',
                'Performance Marketing Tricity',
                'Multi-Channel Funnel',
                'High Intent Inquiries'
              ]}
              mockType="funnel"
            />
          </div>

        </div>
      </section>

      {/* SECTION 1: Performance-Driven Lead Generation Services */}
      <section className="py-20 border-b border-[#A2C0E6]/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] text-xs font-semibold tracking-wider uppercase">
              <Target className="w-3.5 h-3.5" />
              <span>Full-Spectrum Customer Acquisition</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Performance-Driven Lead Generation Services to Scale Your Revenue
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Generating sustainable business revenue in today&apos;s competitive marketplace requires more than sporadic ad boosts. We implement a multi-channel acquisition architecture that captures existing customer demand on search engines while creating new high-intent demand on social feeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1: Google Ads (PPC) Management */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/60 transition duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Google Ads (PPC) Management
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Capture prospects at the exact moment they are actively searching for your services with surgical precision. We build high-converting Google Search campaigns, Performance Max (PMax) asset groups, Local Service Ads, and call-only campaigns targeting high-commercial-intent keywords across Zirakpur, Tricity, and pan-India.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Exact & Phrase Match High-Intent Keyword Mining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Aggressive Negative Keyword Scrubbing to Block Waste</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Smart Bidding Optimization (tCPA & Target ROAS)</span>
                  </li>
                </ul>

                {/* Service 1 Image Placeholder */}
                <div className="pt-2">
                  <SeoImagePlaceholder
                    altText="Google Ads Lead Generation Campaign Dashboard & High-Intent Keyword Architecture for Zirakpur Businesses"
                    captionTitle="Google Search Ads Intent Mining & Negative Keyword Scrubbing"
                    category="Google Ads PPC"
                    dimensions="800 × 450 (16:9)"
                    aspectRatio="16/9"
                    icon={Search}
                    badgeText="Search Ad Architecture"
                    schemaKeywords={['Google Ads Zirakpur', 'PPC Management', 'High Intent Keyword']}
                    mockType="search_ad"
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link href="/services/google-ads-agency" className="text-xs font-semibold text-[#A2C0E6] hover:text-white flex items-center gap-1">
                  Explore Google Ads PPC Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 2: Meta Ads (Facebook & Instagram Lead Funnels) */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/60 transition duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Meta Ads (Facebook & Instagram Lead Funnels)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Transform passive social media scrollers into qualified sales conversations. We engineer high-engagement Instant Lead Forms, high-impact video creative funnels, Conversions API (CAPI) server tracking, and direct WhatsApp Click-to-Chat campaigns that engage decision-makers where they spend their attention.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Interactive Multi-Step Native Lead Capture Forms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>High-Converting UGC & Motion Graphic Ad Creatives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Lookalike (LAL) Audiences & Dynamic Retargeting</span>
                  </li>
                </ul>

                {/* Service 2 Image Placeholder */}
                <div className="pt-2">
                  <SeoImagePlaceholder
                    altText="Meta Facebook and Instagram Ads Lead Funnel with WhatsApp Click-to-Chat Integration in Zirakpur"
                    captionTitle="Meta Ads Instant Lead Capture & Direct WhatsApp Chat Flow"
                    category="Meta Ads Funnel"
                    dimensions="800 × 450 (16:9)"
                    aspectRatio="16/9"
                    icon={MessageSquare}
                    badgeText="Meta Lead Ads"
                    schemaKeywords={['Meta Ads Zirakpur', 'Facebook Lead Forms', 'Instagram Ads']}
                    mockType="social_ad"
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link href="/services/meta-ads-agency" className="text-xs font-semibold text-[#A2C0E6] hover:text-white flex items-center gap-1">
                  Explore Meta Ads Funnels <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 3: Local SEO & Google Business Profile Ranking */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/60 transition duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Local SEO & Google Business Profile Ranking
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Dominate Google 3-Pack map listings in Zirakpur, Chandigarh, Panchkula, and Mohali to generate consistent incoming phone calls and walk-in consultations with zero recurring ad cost per click. We optimize geo-signals, local citations, review velocity, and localized service pages.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Google 3-Pack Map Ranking on VIP Road & Tricity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Geo-Targeted Citation Building & 100% NAP Consistency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Organic Inbound Direct Phone Call Generation</span>
                  </li>
                </ul>

                {/* Service 3 Image Placeholder */}
                <div className="pt-2">
                  <SeoImagePlaceholder
                    altText="Google Map 3-Pack Local SEO Ranking on VIP Road Zirakpur for High-Intent Phone Calls"
                    captionTitle="Local Google 3-Pack Map Rank Dominance & Inbound Calls"
                    category="Local SEO Zirakpur"
                    dimensions="800 × 450 (16:9)"
                    aspectRatio="16/9"
                    icon={MapPin}
                    badgeText="Google 3-Pack Rank"
                    schemaKeywords={['Local SEO Zirakpur', 'VIP Road Map Ranking', 'GBP Optimization']}
                    mockType="map_rank"
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link href="/seo-company-in-zirakpur" className="text-xs font-semibold text-[#A2C0E6] hover:text-white flex items-center gap-1">
                  Explore Local SEO Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 4: High-Converting Landing Page Optimization */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/60 transition duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  High-Converting Landing Page Optimization
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Your ad campaign is only as good as the landing page behind it. We design custom, ultra-fast Next.js landing pages with sub-second load times, distraction-free layouts, psychological friction-reduction, and interactive qualifying widgets that turn up to 28% of traffic into booked leads.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Sub-Second 95+ Core Web Vitals Performance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>A/B Split-Testing on Headlines, CTA & Hook Angles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Dynamic Keyword Replacement for 1:1 Ad Match</span>
                  </li>
                </ul>

                {/* Service 4 Image Placeholder */}
                <div className="pt-2">
                  <SeoImagePlaceholder
                    altText="High-Converting Mobile-First Liquid Glass Landing Page Design with Sub-Second Speed for Zirakpur Inquiries"
                    captionTitle="Sub-Second Core Web Vitals Next.js Landing Page with High Conversion Rate"
                    category="Landing Page CRO"
                    dimensions="800 × 450 (16:9)"
                    aspectRatio="16/9"
                    icon={Laptop}
                    badgeText="Core Web Vitals 100"
                    schemaKeywords={['Landing Page Design Zirakpur', 'CRO Optimization', 'Next.js Fast Funnel']}
                    mockType="landing_page"
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link href="/services/custom-web-designing" className="text-xs font-semibold text-[#A2C0E6] hover:text-white flex items-center gap-1">
                  Explore Landing Page Design <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 5: B2B LinkedIn Lead Generation */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/60 transition duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  B2B LinkedIn Lead Generation
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Secure high-value enterprise contracts and B2B partnerships. We design Account-Based Marketing (ABM) campaigns on LinkedIn, laser-targeting C-suite executives, Managing Directors, Procurement Officers, and Healthcare Professionals by job title, company revenue, and industry vertical.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Direct C-Level & Procurement Head Targeting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>High-Value Thought Leadership & Whitepaper Funnels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Account-Based Marketing (ABM) Pipeline Building</span>
                  </li>
                </ul>

                {/* Service 5 Image Placeholder */}
                <div className="pt-2">
                  <SeoImagePlaceholder
                    altText="B2B LinkedIn Account Based Marketing ABM Pipeline for Decision Makers in Chandigarh Tricity"
                    captionTitle="LinkedIn ABM Pipeline for C-Suite & Procurement Directors"
                    category="B2B LinkedIn ABM"
                    dimensions="800 × 450 (16:9)"
                    aspectRatio="16/9"
                    icon={Briefcase}
                    badgeText="ABM Enterprise"
                    schemaKeywords={['B2B Lead Generation Zirakpur', 'LinkedIn ABM', 'Corporate Leads']}
                    mockType="dashboard"
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <Link href="/services/lead-generation" className="text-xs font-semibold text-[#A2C0E6] hover:text-white flex items-center gap-1">
                  Explore B2B Lead Funnels <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 6: Omnichannel Funnel Integration */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/60 transition duration-300 space-y-4 flex flex-col justify-between bg-gradient-to-br from-[#A2C0E6]/10 via-transparent to-transparent">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/20 border border-[#A2C0E6]/40 flex items-center justify-center text-[#A2C0E6]">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Omnichannel Automated CRM Integration
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Speed to lead determines conversion rates. Our automated lead routers push fresh inquiries to your sales team&apos;s WhatsApp and CRM within 10 seconds of submission, triggering instant SMS confirmations and calendar bookings before your competitors even know the lead exists.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Instant WhatsApp API & Webhook Alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Automated Lead Nurturing & Follow-Up Drips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                    <span>Real-Time Google Sheets & CRM Synchronization</span>
                  </li>
                </ul>

                {/* Service 6 Image Placeholder */}
                <div className="pt-2">
                  <SeoImagePlaceholder
                    altText="Real-Time 10-Second CRM and WhatsApp Lead Notification Workflow for Sales Teams"
                    captionTitle="Automated Instant 10-Second Lead Dispatch Architecture & WhatsApp Alert System"
                    category="CRM & Speed-to-Lead"
                    dimensions="800 × 450 (16:9)"
                    aspectRatio="16/9"
                    icon={Zap}
                    badgeText="10s Dispatch Router"
                    schemaKeywords={['WhatsApp API Lead Dispatch', 'Speed to Lead', 'CRM Automation']}
                    mockType="workflow"
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-800">
                <SeoPageCTA variant="primary" buttonText="Schedule Setup Call" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE AI REAL-TIME PRICING & ROI CALCULATOR (MASTERPIECE SECTION) */}
      <LeadGenAiCalculator />

      {/* SECTION 2: Specialized Lead Generation for High-Growth Industries */}
      <section className="py-20 border-b border-[#A2C0E6]/15 relative bg-[#04080e]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] text-xs font-semibold tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5" />
              <span>Industry-Specific Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Specialized Lead Generation for High-Growth Industries in Zirakpur
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Every vertical requires custom customer psychology, distinct compliance standards, and specialized conversion triggers. Here is how we drive high-volume qualified inquiries for key industries across Zirakpur and Tricity:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/50 transition duration-300 space-y-6 relative overflow-hidden group"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6] group-hover:scale-105 transition-transform">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div className="px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold">
                      {ind.stat}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {/* Exact H3 match */}
                    {idx === 0 && <h3 className="text-2xl font-bold text-white">Real Estate & Commercial Property Leads</h3>}
                    {idx === 1 && <h3 className="text-2xl font-bold text-white">Pharma & Healthcare Lead Solutions</h3>}
                    {idx === 2 && <h3 className="text-2xl font-bold text-white">Education & Admissions Lead Generation</h3>}
                    {idx === 3 && <h3 className="text-2xl font-bold text-white">IT, SaaS & Professional B2B Services</h3>}
                    <p className="text-slate-300 text-sm leading-relaxed">{ind.desc}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    <div className="text-xs font-bold text-[#A2C0E6] uppercase tracking-wider">Key Frameworks We Deploy:</div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {ind.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#A2C0E6] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industry-specific Image Placeholder */}
                  <div className="pt-2">
                    <SeoImagePlaceholder
                      altText={
                        idx === 0
                          ? 'Real Estate Buyer Inquiries Funnel for PR7 Airport Road Flats and Luxury Villas in Zirakpur'
                          : idx === 1
                          ? 'PCD Pharma Franchise Monopoly Rights and Third-Party Manufacturing B2B Lead Funnel in Tricity and Baddi'
                          : idx === 2
                          ? 'Education and Study Abroad Admissions Lead Generation Campaign Architecture'
                          : 'Enterprise IT and Software B2B Contract Acquisition Sales Pipeline in Mohali IT City'
                      }
                      captionTitle={
                        idx === 0
                          ? 'Real Estate Multi-Channel Buyer Funnel (Meta Video + WhatsApp Site Booking)'
                          : idx === 1
                          ? 'Pharma PCD Franchise & B2B Manufacturer Acquisition Funnel'
                          : idx === 2
                          ? 'Education & Coaching Admissions Surge Lead Engine'
                          : 'Enterprise IT & SaaS B2B Contract Acquisition Pipeline'
                      }
                      category={
                        idx === 0
                          ? 'Real Estate Funnel'
                          : idx === 1
                          ? 'Pharma B2B Funnel'
                          : idx === 2
                          ? 'Admissions Funnel'
                          : 'Enterprise B2B'
                      }
                      dimensions="700 × 394 (16:9)"
                      aspectRatio="16/9"
                      icon={IconComp}
                      badgeText="Industry Blueprint"
                      schemaKeywords={[
                        ind.title,
                        'Lead Generation Zirakpur',
                        'High Intent Buyer Funnel'
                      ]}
                      mockType={
                        idx === 0
                          ? 'social_ad'
                          : idx === 1
                          ? 'dashboard'
                          : idx === 2
                          ? 'funnel'
                          : 'workflow'
                      }
                    />
                  </div>

                  <div className="pt-2">
                    <SeoPageCTA
                      variant="secondary"
                      buttonText={`Get ${ind.title.split(' ')[0]} Growth Plan`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Industry Deep Dive Callout */}
          <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/30 space-y-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#A2C0E6]" />
              Zirakpur Real Estate & Pharma Growth Corridor Advantage
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zirakpur is strategically positioned at the nexus of Punjab, Haryana, and Himachal Pradesh along PR7 Airport Ring Road and the NH-152 highway corridor. With over 65+ residential townships, sprawling commercial retail hubs, and direct adjacency to the Baddi-Solan pharmaceutical manufacturing cluster, high-intent local targeting combined with NRI digital prospecting consistently delivers 4x to 10x higher closing rates compared to generic pan-India blasts.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: Why Choose Veiled Story as Your Growth Partner */}
      <section className="py-20 border-b border-[#A2C0E6]/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] text-xs font-semibold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>The Veiled Story Advantage</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose Veiled Story as Your Growth Partner in Zirakpur?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We do not act as an outsourced vendor; we operate as an embedded growth engineering partner aligned directly with your revenue and profitability metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* H3 1 */}
            <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                100% Verified & High-Intent Inquiries
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Most agencies boast about generating leads for ₹40, but when your sales team dials the numbers, half are invalid or belong to people who don&apos;t remember filling a form. We implement two-layer validation, interactive qualifier questions (e.g., budget, purchasing timeframe, decision-maker status), and real-time OTP verification to eliminate tire-kickers and ensure 100% genuine inquiries.
              </p>
            </div>

            {/* H3 2 */}
            <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Data-Driven Funnels & ROI-Centric Campaigns
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We measure success exclusively in bottom-line return on ad spend (ROAS) and Customer Acquisition Cost (CAC). By running systematic multivariate split-tests across 15+ ad creatives, 8 headline variations, and multiple landing page angles each week, we continuously drive down your Cost Per Acquisition while scaling lead volume.
              </p>
            </div>

            {/* H3 3 */}
            <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Transparent Tracking with Real-Time Lead Dashboards
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No opaque monthly PDF reports with vanity metrics. We provide live, transparent 24/7 client dashboards connected directly to Google Looker Studio, Google Sheets, or your internal CRM. You see every single click, conversion rate, cost per lead, and revenue attribution in real-time.
              </p>
            </div>

            {/* H3 4 */}
            <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Full-Funnel Lead Qualification & Nurturing Support
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our support does not stop at lead generation. We assist your internal sales department with automated WhatsApp follow-up sequences, instant email confirmations, appointment scheduling calendars, and high-converting phone scripts to ensure your sales team converts raw inquiries into paying clients.
              </p>
            </div>

          </div>

          {/* Founder Quote Card */}
          <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/35 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#A2C0E6] to-[#7BA4D5] flex items-center justify-center text-[#060d16] font-extrabold text-2xl shrink-0 shadow-lg shadow-[#A2C0E6]/20">
              VS
            </div>
            <div className="space-y-2 text-center md:text-left">
              <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                &ldquo;In performance marketing, vanity metrics like impressions and cheap clicks do not pay the bills. Our entire philosophy at Veiled Story is anchored on delivering verified, sales-ready conversations that directly multiply your business revenue.&rdquo;
              </p>
              <div className="text-xs text-[#A2C0E6] font-semibold">
                — Vishal Sahani, Senior Growth Strategist at Veiled Story (VIP Road, Zirakpur)
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Our Proven 5-Step Lead Generation Framework */}
      <section className="py-20 border-b border-[#A2C0E6]/15 relative bg-[#04080e]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] text-xs font-semibold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Scientific Revenue Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Proven 5-Step Lead Generation Framework
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We deploy an engineered, 5-phase scientific acquisition methodology that systematically transforms cold prospects into loyal, high-paying customers:
            </p>
          </div>

          <div className="space-y-6">
            {steps.map((st, i) => {
              const IconC = st.icon;
              return (
                <div
                  key={i}
                  className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 hover:border-[#A2C0E6]/50 transition duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <div className="text-3xl sm:text-4xl font-black text-[#A2C0E6]/40 tracking-tighter shrink-0 w-12">
                      {st.step}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6] shrink-0">
                      <IconC className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      {/* Exact H3 match */}
                      {i === 0 && <h3 className="text-lg sm:text-xl font-bold text-white">Step 1: Competitor & Search Intent Research</h3>}
                      {i === 1 && <h3 className="text-lg sm:text-xl font-bold text-white">Step 2: High-Converting Landing Page Setup</h3>}
                      {i === 2 && <h3 className="text-lg sm:text-xl font-bold text-white">Step 3: Targeted Multi-Channel Campaign Launch</h3>}
                      {i === 3 && <h3 className="text-lg sm:text-xl font-bold text-white">Step 4: Lead Quality Scoring & Filtering</h3>}
                      {i === 4 && <h3 className="text-lg sm:text-xl font-bold text-white">Step 5: Continuous Optimization & Scaling</h3>}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 w-full sm:w-auto">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#A2C0E6] px-3 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A2C0E6]" /> Fully Managed
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Framework Overview Visual Blueprint */}
          <div className="pt-4 max-w-5xl mx-auto">
            <SeoImagePlaceholder
              altText="5-Step Proven Lead Generation Framework Flowchart from Search Intent to Sales Qualified Lead"
              captionTitle="Figure 4: 5-Phase End-to-End Acquisition Architecture (Intent → Landing Page → Multi-Channel → OTP Scoring → Scaling)"
              category="Proprietary Acquisition Methodology"
              dimensions="1200 × 600 (2:1)"
              aspectRatio="21/9"
              icon={Compass}
              badgeText="Scientific Acquisition Engine"
              schemaKeywords={[
                '5-Step Lead Generation Framework',
                'Sales Qualified Lead Pipeline',
                'Conversion Rate Optimization',
                'Zirakpur Growth Strategy'
              ]}
              mockType="funnel"
            />
          </div>

        </div>
      </section>

      {/* SECTION 5: Key Performance Metrics We Track for Maximum ROI */}
      <section className="py-20 border-b border-[#A2C0E6]/15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] text-xs font-semibold tracking-wider uppercase">
              <PieChart className="w-3.5 h-3.5" />
              <span>Full Financial Transparency</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Key Performance Metrics We Track for Maximum ROI
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We eliminate guesswork with rigorous financial and pipeline tracking. Here are the core mathematical indicators that guide every optimization decision:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Metric 1 */}
            <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Cost Per Qualified Lead (CPL)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We differentiate between raw, unverified clicks and genuine, qualified leads that meet your strict budget, location, and timeline criteria. Our automated bidding algorithms continually work to suppress low-intent clicks and reduce your true Cost Per Qualified Lead (CPQL).
              </p>
              <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                Formula: <code className="text-[#A2C0E6]">Total Ad Spend ÷ Total Verified Inquiries</code>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Marketing Qualified Leads (MQL) vs Sales Qualified Leads (SQL)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                An inquiry downloading a brochure is an MQL; an inquiry requesting a site visit or price quote is an SQL. We track pipeline velocity through every stage to ensure your marketing budget produces high-closing Sales Qualified Leads.
              </p>
              <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                Goal: <code className="text-[#A2C0E6]">&gt; 65% MQL to SQL Transition Rate</code>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="liquid-glass rounded-3xl p-8 border border-[#A2C0E6]/25 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Customer Acquisition Cost (CAC) & ROAS
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The ultimate health metric of any enterprise is Customer Acquisition Cost versus Customer Lifetime Value (LTV:CAC). We track end-to-end sales outcomes to deliver an average Return on Ad Spend (ROAS) between 4.5x and 12x across our active client portfolio.
              </p>
              <div className="pt-2 text-xs text-slate-400 border-t border-slate-800">
                Target: <code className="text-[#A2C0E6]">LTV:CAC Ratio &gt; 4:1</code>
              </div>
            </div>

          </div>

          {/* Performance Analytics Telemetry Image Placeholder */}
          <div className="pt-2 max-w-5xl mx-auto">
            <SeoImagePlaceholder
              altText="Lead Generation Key Performance Indicators Dashboard Tracking CPL, MQL, SQL, CAC, and ROAS"
              captionTitle="Figure 5: Enterprise Analytics Dashboard – Real-Time Tracking of CPQL, MQL-to-SQL Velocity, and ROAS"
              category="Financial & Performance Telemetry"
              dimensions="1200 × 675 (16:9)"
              aspectRatio="16/9"
              icon={BarChart3}
              badgeText="Live Client Reporting"
              schemaKeywords={[
                'CPL Benchmark Zirakpur',
                'MQL to SQL Funnel',
                'ROAS Tracking Dashboard',
                'Customer Acquisition Cost CAC'
              ]}
              mockType="analytics"
            />
          </div>

          {/* Pricing & CPL Benchmark Table */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white">
                Industry CPL & Conversion Benchmarks in Zirakpur & Tricity (2026 Data)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Real-world average cost and conversion benchmarks achieved across active client campaigns managed by Veiled Story:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300 border-collapse">
                <thead>
                  <tr className="border-b border-[#A2C0E6]/25 text-white font-bold bg-[#A2C0E6]/10">
                    <th className="p-3.5">Industry Sector</th>
                    <th className="p-3.5">Primary Channels</th>
                    <th className="p-3.5">Avg. CPL Range</th>
                    <th className="p-3.5">Lead-to-Meeting Rate</th>
                    <th className="p-3.5">Expected ROAS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-800/40 transition">
                    <td className="p-3.5 font-semibold text-white">Real Estate (2/3 BHK & Plots)</td>
                    <td className="p-3.5">Meta Ads + Google Search</td>
                    <td className="p-3.5 text-[#A2C0E6] font-medium">₹350 – ₹950</td>
                    <td className="p-3.5">18% – 28%</td>
                    <td className="p-3.5 text-emerald-400 font-bold">8.5x – 15x</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition">
                    <td className="p-3.5 font-semibold text-white">Pharma PCD Franchise & B2B</td>
                    <td className="p-3.5">Google Search + SEO + B2B Ads</td>
                    <td className="p-3.5 text-[#A2C0E6] font-medium">₹180 – ₹550</td>
                    <td className="p-3.5">22% – 35%</td>
                    <td className="p-3.5 text-emerald-400 font-bold">6.0x – 11x</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition">
                    <td className="p-3.5 font-semibold text-white">Education & IELTS Coaching</td>
                    <td className="p-3.5">Instagram Funnels + Local SEO</td>
                    <td className="p-3.5 text-[#A2C0E6] font-medium">₹120 – ₹380</td>
                    <td className="p-3.5">30% – 45%</td>
                    <td className="p-3.5 text-emerald-400 font-bold">5.0x – 8.0x</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40 transition">
                    <td className="p-3.5 font-semibold text-white">IT, SaaS & Professional B2B</td>
                    <td className="p-3.5">LinkedIn ABM + Google Ads</td>
                    <td className="p-3.5 text-[#A2C0E6] font-medium">₹250 – ₹850</td>
                    <td className="p-3.5">15% – 25%</td>
                    <td className="p-3.5 text-emerald-400 font-bold">4.5x – 9.0x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: Frequently Asked Questions (FAQ) */}
      <section className="py-20 border-b border-[#A2C0E6]/15 relative bg-[#04080e]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] text-xs font-semibold tracking-wider uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clear Answers to Common Questions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Everything you need to know about our lead generation methodology, pricing, setup timelines, and quality guarantees in Zirakpur:
            </p>
          </div>

          <div className="space-y-6">
            
            {/* FAQ 1 */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-start gap-3">
                <span className="text-[#A2C0E6] font-black">Q1.</span>
                <span>How much does lead generation cost for businesses in Zirakpur?</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-8">
                Lead generation costs consist of two components: the media ad spend paid directly to ad platforms (Google/Meta) and our monthly campaign management & optimization retainer (starting from ₹15,000 to ₹50,000/month depending on scope). Average Cost Per Lead (CPL) typically ranges between ₹120 to ₹1,200 depending on industry competition (Real Estate, Pharma, Healthcare, or B2B). We provide custom cost projections during your initial strategy audit.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-start gap-3">
                <span className="text-[#A2C0E6] font-black">Q2.</span>
                <span>How quickly can we start receiving verified leads?</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-8">
                For paid acquisition funnels (Google Ads and Meta Ads), our turnaround time from contract signing to campaign launch is 3 to 5 business days. This includes competitor research, custom landing page creation, pixel tracking setup, and ad copywriting. Once live, verified leads start streaming into your CRM and WhatsApp within 24 to 48 hours.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-start gap-3">
                <span className="text-[#A2C0E6] font-black">Q3.</span>
                <span>Which platform works best: Google Ads or Meta Ads?</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-8">
                Google Ads captures <em>active demand</em> (customers with urgent intent typing exact search terms into Google), making it ideal for immediate B2B, pharma, or urgent service inquiries. Meta Ads (Facebook & Instagram) captures <em>passive discovery</em> (visual storytelling and lifestyle interest), making it unbeatable for real estate township showcases, education admissions, and high-volume local prospecting. We build hybrid funnels that leverage both channels simultaneously.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-start gap-3">
                <span className="text-[#A2C0E6] font-black">Q4.</span>
                <span>How does Veiled Story ensure lead quality?</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-8">
                We deploy a rigorous 4-step quality barrier: (1) Mandatory qualifying questions in forms (budget range, location, purchasing timeframe), (2) OTP and phone number validation algorithms to filter invalid numbers, (3) Strict negative keyword matching on Google Ads to block job seekers and window-shoppers, and (4) Real-time CRM lead scrubbing that prevents duplicate submissions.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-start gap-3">
                <span className="text-[#A2C0E6] font-black">Q5.</span>
                <span>Do you provide landing page design along with campaigns?</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-8">
                Yes! High-converting landing page engineering is included as a standard part of our lead generation service. We build ultra-fast, mobile-first Next.js / Tailwind CSS pages with Liquid Glass aesthetics, sticky call-to-actions, trust badges, WhatsApp click-to-chat triggers, and SSL security to convert up to 18% to 28% of total visitors.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/25 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-start gap-3">
                <span className="text-[#A2C0E6] font-black">Q6.</span>
                <span>Can you generate B2B and real estate leads in the Tricity area?</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-8">
                Yes! We specialize in high-ticket B2B and real estate lead generation across Zirakpur (VIP Road, PR7 Airport Ring Road, Patiala Road, Dhakoli, Baltana), Chandigarh, Panchkula, Mohali (IT City, Aerocity), and the Baddi Industrial Belt, as well as high-net-worth NRI buyer targeting across Canada, UK, USA, Australia, and UAE.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: Ready to Scale? Get Your Free Lead Generation Strategy Consultation */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-[#A2C0E6]/40 shadow-2xl relative overflow-hidden space-y-8 bg-gradient-to-br from-[#0a1829] via-[#060d16] to-[#04080e]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Zero Risk • 100% Free Strategy Session</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Scale? Get Your Free Lead Generation Strategy Consultation
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Let&apos;s analyze your existing customer acquisition funnel, identify your highest-ROI growth opportunities, and build a predictable lead generation engine for your business in Zirakpur & Tricity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              
              {/* Consultation Pillar 1 */}
              <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Audit Your Current Marketing Funnel
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We will perform a comprehensive 20-point teardown of your current ads, keyword bidding efficiency, landing page conversion friction, tracking pixels, and cost per acquisition to uncover where you are losing money.
                </p>
                <div className="pt-2">
                  <SeoPageCTA variant="primary" buttonText="Claim Free Funnel Audit" />
                </div>
              </div>

              {/* Consultation Pillar 2 */}
              <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#A2C0E6]/15 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Get a Custom Lead Acquisition Roadmap
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Receive an actionable 90-day multi-channel roadmap tailored specifically to your target industry, ideal customer profile (ICP), budget, and revenue goals, designed by Vishal Sahani.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      'Hi Vishal! I would like to get a Custom Lead Acquisition Roadmap for my business in Zirakpur / Tricity.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#060d16]/80 text-white font-bold text-sm border border-[#A2C0E6]/40 hover:border-[#A2C0E6] transition shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4 text-[#A2C0E6]" />
                    <span>WhatsApp Vishal Directly</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Contact Bar */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#A2C0E6]" />
                <span>Office: VIP Road, Zirakpur, Punjab 140603</span>
              </div>
              <div className="flex items-center gap-6">
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-[#A2C0E6] transition flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#A2C0E6]" /> {SITE_CONFIG.phone}
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#A2C0E6] transition flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#A2C0E6]" /> {SITE_CONFIG.email}
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
