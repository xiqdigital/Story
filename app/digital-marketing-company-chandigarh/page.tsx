import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/data';
import { SeoPageCTA } from '@/components/SeoPageCTA';
import {
  Search,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Users,
  Award,
  Zap,
  Phone,
  Mail,
  Globe,
  Bot,
  Cpu,
  FileText,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Star,
  Check,
  Settings,
  Building2,
  ShoppingCart,
  Target,
  Layers,
  MessageSquare,
  ExternalLink,
  Laptop,
  Briefcase,
  GraduationCap,
  Hospital,
  Hotel,
  Home,
  CheckSquare,
  PenTool,
  Clock,
  PieChart,
  Share2,
  Megaphone,
  Layout,
  MailCheck,
  MousePointerClick,
  UserCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Chandigarh – Result-Driven Digital Marketing Services | Veiled Story',
  description:
    'Scale your business with Veiled Story—the leading Digital Marketing Company in Chandigarh. Expert SEO, Google Ads, Meta Ads, SMM, Website Design, AEO & GEO services designed for maximum ROI.',
  keywords: [
    'Digital Marketing Company in Chandigarh',
    'Digital Marketing Agency Chandigarh',
    'Best Digital Marketing Company Chandigarh',
    'SEO Services Chandigarh',
    'Google Ads Agency Chandigarh',
    'Meta Ads Agency Chandigarh',
    'Social Media Marketing Chandigarh',
    'Website Design Chandigarh',
    'AEO GEO Marketing Chandigarh',
    'Vishal Sahani Digital Marketer'
  ],
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/digital-marketing-company-chandigarh`,
  },
  openGraph: {
    title: 'Digital Marketing Company in Chandigarh – Result-Driven Digital Marketing Services',
    description:
      'Transform your online visibility into verified buyer leads and revenue with Veiled Story—top-rated full-funnel digital marketing agency in Chandigarh & Tricity.',
    url: `https://${SITE_CONFIG.domain}/digital-marketing-company-chandigarh`,
    siteName: 'Veiled Story Digital Marketing Agency',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company in Chandigarh | Veiled Story',
    description: 'Result-driven SEO, Google Ads, Meta Ads, Content & Web Design services in Chandigarh, Mohali, Panchkula & Zirakpur.',
  },
};

export default function DigitalMarketingCompanyChandigarhPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://${SITE_CONFIG.domain}/digital-marketing-company-chandigarh#service`,
        name: 'Digital Marketing Company in Chandigarh – Result-Driven Digital Marketing Services',
        serviceType: 'Full-Service Digital Marketing Agency',
        description:
          'Comprehensive digital marketing services in Chandigarh including SEO, Google Ads PPC, Meta Ads SMM, Website Design, Content Marketing, ORM, Email Marketing, and AI Search Optimization (AEO & GEO).',
        provider: {
          '@id': `https://${SITE_CONFIG.domain}/#organization`,
        },
        areaServed: [
          'Chandigarh',
          'Sector 17 Chandigarh',
          'Sector 35 Chandigarh',
          'IT Park Chandigarh',
          'Mohali',
          'Panchkula',
          'Zirakpur',
          'Kharar',
          'Derabassi',
          'New Chandigarh',
        ],
      },
      {
        '@type': 'Article',
        '@id': `https://${SITE_CONFIG.domain}/digital-marketing-company-chandigarh#article`,
        headline: 'Digital Marketing Company in Chandigarh – Result-Driven Digital Marketing Services',
        description:
          'Complete multi-channel digital marketing guide and growth framework by Vishal Sahani at Veiled Story Digital Marketing Agency Chandigarh.',
        author: {
          '@type': 'Person',
          '@id': `https://${SITE_CONFIG.domain}/#vishal-sahani`,
          name: 'Vishal Sahani',
          jobTitle: 'Senior Digital Marketing Specialist & SEO Expert',
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
        datePublished: '2026-08-11T10:00:00+05:30',
        dateModified: '2026-08-11T10:30:00+05:30',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://${SITE_CONFIG.domain}/digital-marketing-company-chandigarh#breadcrumb`,
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
            name: 'Digital Marketing Company in Chandigarh',
            item: `https://${SITE_CONFIG.domain}/digital-marketing-company-chandigarh`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://${SITE_CONFIG.domain}/digital-marketing-company-chandigarh#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What Does a Digital Marketing Company in Chandigarh Do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A digital marketing company in Chandigarh helps businesses grow online by driving targeted website traffic, capturing qualified buyer leads, and scaling brand revenue through SEO, Google Ads, Meta Ads, social media marketing, content creation, website design, and AI search engine optimization.',
            },
          },
          {
            '@type': 'Question',
            name: 'How Much Does Digital Marketing Cost in Chandigarh?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Digital marketing packages in Chandigarh range from ₹15,000 to ₹75,000+ per month depending on chosen service scope (SEO, Paid Ads, SMM, Website Maintenance), business industry competition, target geographical reach, and direct performance goals.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which Digital Marketing Services Does Veiled Story Offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Veiled Story offers full-funnel digital marketing services: SEO, Local GMB SEO, Google Ads PPC, Meta (Facebook & Instagram) Ads, Social Media Marketing, SEO Content Writing, Custom Website Design, Online Reputation Management (ORM), Email Marketing, CRO, and AI Search Optimization (AEO & GEO).',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Digital Marketing Suitable for Small Businesses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Digital marketing allows small businesses in Chandigarh to target hyper-local customers, compete directly with established brands, control advertising budgets, and track measurable lead generation with high return on investment.',
            },
          },
          {
            '@type': 'Question',
            name: 'How Long Does Digital Marketing Take to Show Results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Paid ad campaigns (Google Ads and Meta Ads) deliver verified phone and lead inquiries within 24 to 48 hours. Organic SEO, Google Maps rankings, and content marketing start building strong compounding traffic within 3 to 6 months.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#060d16] text-slate-200 selection:bg-[#A2C0E6] selection:text-[#060d16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Navbar />

      {/* Hero Section with H1 */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#A2C0E6]/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#A2C0E6]/15 via-[#7BA4D5]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#A2C0E6] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#A2C0E6] font-medium">Digital Marketing Company in Chandigarh</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Top-Rated Full-Funnel Growth Agency in Chandigarh & Tricity</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-5xl tracking-tight">
            Digital Marketing Company in Chandigarh – Result-Driven Digital Marketing Services
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Welcome! I am <strong className="text-white">Vishal Sahani</strong>, Senior Digital Marketing Specialist at <strong className="text-white">Veiled Story</strong>. We empower local businesses, startups, real estate builders, healthcare providers, and e-commerce brands in Chandigarh, Mohali, Panchkula & Zirakpur to achieve predictable, revenue-focused online growth through data-backed Search, Social, Paid Media, and AI Search strategies.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <SeoPageCTA variant="primary" buttonText="Get Free Digital Marketing Consultation" />
            <SeoPageCTA variant="secondary" buttonText="Request Free Website & SEO Audit" />
          </div>

          {/* Quick Summary Box (SEO, GEO, AEO Summary) */}
          <div className="mt-10 liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/35 space-y-4">
            <div className="flex items-center gap-2.5 text-[#A2C0E6]">
              <Zap className="w-5 h-5 text-[#A2C0E6]" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider text-xs">
                Quick Summary: 360° Digital Growth Framework for Chandigarh Businesses
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-sm text-slate-300 leading-relaxed">
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">1. Full-Funnel Performance Marketing</h3>
                <p>
                  We blend intent-driven Google Search Ads and SEO with high-converting Meta Ads (Instagram & Facebook) to capture buyers at every stage of their purchasing journey.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">2. Local Dominance Across Tricity</h3>
                <p>
                  We optimize your Google Business Profile (GBP) and local NAP presence so your business dominates Google Maps 3-Pack searches in Sector 17, Sector 35, IT Park, Mohali, and Panchkula.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">3. AI Search (AEO & GEO) Engineering</h3>
                <p>
                  We structure your digital footprint with entity-rich schemas and direct answer frameworks so ChatGPT, Gemini, and Perplexity recommend your brand to AI searchers.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder 1 */}
          <div className="mt-8 liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/20 flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:w-1/2 h-56 rounded-xl bg-slate-900 border border-[#A2C0E6]/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              <BarChart3 className="w-12 h-12 text-[#A2C0E6] mb-2 animate-pulse" />
              <span className="text-xs font-mono text-[#A2C0E6]">FILE NAME: digital-marketing-company-in-chandigarh-hero.jpg</span>
              <p className="text-xs text-slate-400 mt-2 px-4">
                IMAGE ALT TEXT: Vishal Sahani leading a digital marketing strategy session for Chandigarh business clients
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Multi-Channel Growth Engine</span>
              <h3 className="text-xl font-bold text-white">Scaling Chandigarh Brands with Measurable ROI</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                From high-intent search keywords to viral social media creative campaigns, our digital marketing solutions turn online visitors into verified phone calls, store visits, and repeat transactions.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#A2C0E6]" />
                <span>Google Premier Partner Standards • Meta Business Partner Strategies</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* H2: Grow Your Business with a Leading Digital Marketing Company in Chandigarh */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Grow Your Business with a Leading Digital Marketing Company in Chandigarh
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Chandigarh is a vibrant commercial hub where consumer choices are heavily influenced by online search results, Google Maps reviews, Instagram reels, and peer recommendations. If your brand is invisible or poorly represented across these digital channels, potential clients will naturally choose your competitors.
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            As a premier digital marketing agency serving Chandigarh, Mohali, Panchkula, Zirakpur, Kharar, Derabassi, and New Chandigarh, <strong className="text-white">Veiled Story</strong> designs custom, data-informed marketing systems that drive actual business outcomes—not vanity metrics like empty likes or fake impressions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <Target className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Customized Digital Marketing Strategies for Your Business</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Tailored marketing blueprints based on your exact business model, target demographic, and revenue margins.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <BarChart3 className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Data-Driven Digital Marketing Campaigns</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Campaign decisions guided by analytics, search query data, click-through rates, and conversion funnel metrics.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <TrendingUp className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">ROI-Focused Marketing Solutions</h3>
              <p className="text-xs text-slate-300 leading-relaxed">We focus on lower Cost Per Acquisition (CPA) and higher Customer Lifetime Value (LTV).</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <Globe className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Local & Global Digital Marketing Expertise</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Deep local insight into Chandigarh & Tricity buyers combined with international digital marketing standards.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <FileText className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Transparent Reporting & Performance Tracking</h3>
              <p className="text-xs text-slate-300 leading-relaxed">No confusing jargon. You receive clear monthly performance reports tracking leads, calls, and sales.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <Award className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Strategies Designed Around Your Business Goals</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Whether you need immediate lead generation, brand awareness, or organic search dominance, we align with your timeline.</p>
            </div>
          </div>
        </section>

        {/* H2: Digital Marketing Services We Offer in Chandigarh */}
        <section className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Digital Marketing Services We Offer in Chandigarh
            </h2>
            <p className="text-slate-300 text-base">
              Explore our full suite of integrated digital marketing disciplines designed to capture, nurture, and convert high-intent customers:
            </p>
          </div>

          {/* H3: Search Engine Optimization (SEO) Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Search className="w-6 h-6 text-[#A2C0E6]" />
              <span>Search Engine Optimization (SEO) Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Rank #1 on Google search results and organic listings with technical site audits, keyword optimization, and authoritative backlink building. For local SEO details, visit our <Link href="/seo-company-in-zirakpur" className="text-[#A2C0E6] underline hover:text-white">SEO Company in Zirakpur Page</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">On-Page SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Technical SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Off-Page SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Local SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">E-Commerce SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Enterprise SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">International SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">SEO Audit & Competitor Analysis</h4></div>
            </div>
          </div>

          {/* H3: Local SEO Services in Chandigarh */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#A2C0E6]" />
              <span>Local SEO Services in Chandigarh</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Capture local searchers looking for services in Sector 17, Sector 35, Elante Mall area, Mohali, and Panchkula with Google Business Profile optimization and Google Maps ranking. Check our <Link href="/services/seo-company-zirakpur" className="text-[#A2C0E6] underline hover:text-white">SEO Company in Zirakpur Page</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Business Profile Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Maps SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Local Keyword Research</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Local Citation Building</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">NAP Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Local Link Building</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Online Review & Reputation Management</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">“Near Me” Search Optimization</h4></div>
            </div>
          </div>

          {/* H3: Social Media Marketing Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Share2 className="w-6 h-6 text-[#A2C0E6]" />
              <span>Social Media Marketing Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Build a brand community, publish high-converting reels, and engage your audience across Meta, LinkedIn, and YouTube.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Facebook Marketing</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Instagram Marketing</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">LinkedIn Marketing</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">YouTube Marketing</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Social Media Strategy</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Social Media Content Creation</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Community Management</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Social Media Analytics & Reporting</h4></div>
            </div>
          </div>

          {/* H3: Social Media Advertising */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Megaphone className="w-6 h-6 text-[#A2C0E6]" />
              <span>Social Media Advertising</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Target exact demographic profiles in Chandigarh & Tricity with high-converting Meta lead ads and retargeting funnels. Learn more on our <Link href="/services/meta-ads-agency" className="text-[#A2C0E6] underline hover:text-white">Meta Ads Service Page</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Facebook Ads</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Instagram Ads</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Meta Ads Campaign Management</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Lead Generation Campaigns</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Retargeting & Remarketing Campaigns</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Conversion-Focused Ad Campaigns</h4></div>
            </div>
          </div>

          {/* H3: Google Ads & PPC Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <MousePointerClick className="w-6 h-6 text-[#A2C0E6]" />
              <span>Google Ads & PPC Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Drive instant high-intent phone calls and inquiry leads with targeted Google Search, Performance Max, and Shopping campaigns. Explore our <Link href="/services/google-ads-agency" className="text-[#A2C0E6] underline hover:text-white">Google Ads Service Page</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Search Ads</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Display Ads</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">YouTube Advertising</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Performance Max Campaigns</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Shopping Ads</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Remarketing Campaigns</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">PPC Keyword Research</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Landing Page Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Conversion Tracking & Analytics</h4></div>
            </div>
          </div>

          {/* H3: Content Marketing Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#A2C0E6]" />
              <span>Content Marketing Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Build topical authority and educate your buyers with high-value blog articles, landing page copy, and content refresh frameworks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">SEO Content Writing</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Blog Writing</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Website Content</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Landing Page Content</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Content Strategy</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Topic Cluster Strategy</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Pillar Content</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Content Optimization & Refresh</h4></div>
            </div>
          </div>

          {/* H3: Website Design & Development */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layout className="w-6 h-6 text-[#A2C0E6]" />
              <span>Website Design & Development</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Fast, high-converting, mobile-responsive websites built for speed and sales. See our <Link href="/services/web-design-company" className="text-[#A2C0E6] underline hover:text-white">Website Design Service Page</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Business Website Design</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">SEO-Friendly Website Development</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">WordPress Website Development</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">E-Commerce Website Development</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Landing Page Design</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Mobile-Friendly Website Design</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Conversion Rate Optimization</h4></div>
            </div>
          </div>

          {/* H3: Online Reputation Management */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-[#A2C0E6]" />
              <span>Online Reputation Management</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Protect and enhance your brand trust across Google Business Reviews, Quora, news outlets, and social channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Brand Reputation Monitoring</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Review Management</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Review Response Strategy</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Brand Mention Monitoring</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Negative Reputation Management</h4></div>
            </div>
          </div>

          {/* H3: Email Marketing Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <MailCheck className="w-6 h-6 text-[#A2C0E6]" />
              <span>Email Marketing Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Automated lead nurturing sequences and promotional newsletters that increase repeat sales and customer retention.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Email Marketing Strategy</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Promotional Email Campaigns</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Lead Nurturing Campaigns</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Automated Email Marketing</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Email Performance Analytics</h4></div>
            </div>
          </div>

          {/* H3: Conversion Rate Optimization (CRO) */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <PieChart className="w-6 h-6 text-[#A2C0E6]" />
              <span>Conversion Rate Optimization (CRO)</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Transform existing website visitors into paying leads by fixing user experience friction points and testing call-to-action designs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Landing Page CRO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Website Conversion Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">CTA Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">User Experience Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Conversion Funnel Analysis</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">A/B Testing Strategy</h4></div>
            </div>
          </div>

          {/* H3: Analytics & Digital Marketing Reporting */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#A2C0E6]" />
              <span>Analytics & Digital Marketing Reporting</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Complete attribution tracking set up with GA4, GSC, Meta Pixel, and custom Looker Studio dashboards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Analytics Setup</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Search Console Analysis</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Conversion Tracking</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Marketing Performance Reports</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Campaign ROI Analysis</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Custom Digital Marketing Dashboards</h4></div>
            </div>
          </div>

        </section>

        {/* H2: AI Search, AEO & GEO Optimization Services */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              AI Search, AEO & GEO Optimization Services
            </h2>
            <p className="text-slate-300 text-base">
              The search landscape has evolved beyond blue links. We optimize your brand so ChatGPT, Google Gemini, and Perplexity actively recommend your business when users ask conversational questions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* H3: Answer Engine Optimization (AEO) */}
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4">
              <Bot className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-xl font-bold text-white">Answer Engine Optimization (AEO)</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Featured Snippet Optimization</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">People Also Ask Optimization</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Question-Based Content Optimization</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Conversational Search Optimization</h4></li>
              </ul>
            </div>

            {/* H3: Generative Engine Optimization (GEO) */}
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4">
              <Sparkles className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-xl font-bold text-white">Generative Engine Optimization (GEO)</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">AI Search Visibility Strategy</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Entity Optimization</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Brand Mention Optimization</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Structured Content for AI Systems</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">AI Overview Visibility Strategy</h4></li>
              </ul>
            </div>

            {/* H3: AI-Ready Content Strategy */}
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4">
              <Cpu className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-xl font-bold text-white">AI-Ready Content Strategy</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Semantic SEO</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Topical Authority</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Entity-Based Content</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Knowledge-Focused Content</h4></li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /><h4 className="font-medium text-white">Structured Data & Schema Markup</h4></li>
              </ul>
            </div>

          </div>
        </section>

        {/* H2: Digital Marketing Services for Every Business */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Digital Marketing Services for Every Business
          </h2>
          <p className="text-slate-300 text-base">
            We adapt campaign structures to match your organizational stage and operational workflow:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Digital Marketing for Small Businesses</h3><p className="text-xs text-slate-400">Affordable, high-ROI local lead generation.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Digital Marketing for Startups</h3><p className="text-xs text-slate-400">Rapid brand positioning and product-market testing.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Digital Marketing for Local Businesses</h3><p className="text-xs text-slate-400">Google Map packs and &quot;near me&quot; foot traffic boosters.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Digital Marketing for E-Commerce Businesses</h3><p className="text-xs text-slate-400">ROAS-focused Shopping ads and conversion checkout funnels.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Digital Marketing for B2B Companies</h3><p className="text-xs text-slate-400">LinkedIn outreach, SEO whitepapers, and corporate lead gen.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Digital Marketing for Service-Based Businesses</h3><p className="text-xs text-slate-400">High-intent Google search ads and appointment bookings.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Digital Marketing for Enterprises</h3><p className="text-xs text-slate-400">Multi-channel brand campaigns and multi-location SEO.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Digital Marketing for Multi-Location Businesses</h3><p className="text-xs text-slate-400">Chains across Chandigarh, Mohali, Panchkula & Zirakpur.</p></div>
          </div>
        </section>

        {/* H2: Industries We Serve in Chandigarh */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Industries We Serve in Chandigarh
          </h2>
          <p className="text-slate-300 text-base">
            Deep domain experience across key commercial sectors in Chandigarh & Tricity:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Real Estate Digital Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Healthcare Digital Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Education Digital Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Hotel & Hospitality Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Restaurant Digital Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Travel & Tourism Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">E-Commerce Digital Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">IT & Software Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Finance & Professional Services Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Home Services Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Manufacturing & Industrial Marketing</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Beauty & Salon Digital Marketing</h3></div>
          </div>
        </section>

        {/* H2: Why Choose Veiled Story as Your Digital Marketing Company in Chandigarh? */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Why Choose Veiled Story as Your Digital Marketing Company in Chandigarh?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">Goal-Oriented Digital Marketing Strategy</h3><p className="text-xs text-slate-300">We design campaigns around your exact revenue targets and customer acquisition metrics.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">Customized Marketing Solutions</h3><p className="text-xs text-slate-300">No cookie-cutter packages. Every channel plan is built specifically for your niche.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">SEO & Performance Marketing Expertise</h3><p className="text-xs text-slate-300">Over 10+ years of hands-on experience scaling organic rankings and paid PPC budgets.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">Creative Content & Campaign Strategy</h3><p className="text-xs text-slate-300">Compelling ad copy, engaging video reels, and high-converting landing page layouts.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">Data-Driven Decision Making</h3><p className="text-xs text-slate-300">Continuous testing and optimization guided by conversion rate data.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">Transparent Communication</h3><p className="text-xs text-slate-300">Direct WhatsApp access to senior specialists without account manager delays.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">Regular Performance Reporting</h3><p className="text-xs text-slate-300">Weekly rankings and monthly leads ROI reports delivered on time.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">Focus on Leads, Sales & Business Growth</h3><p className="text-xs text-slate-300">We judge success by your bank balance and verified buyer inquiries.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="font-bold text-white text-base">Long-Term Digital Growth Approach</h3><p className="text-xs text-slate-300">Building sustainable digital assets that compound value year after year.</p></div>
          </div>
        </section>

        {/* H2: Our Digital Marketing Process */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Our Digital Marketing Process
          </h2>
          <p className="text-slate-300 text-base">
            Our 10-step execution process guarantees complete clarity and consistent momentum:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 1 – Understand Your Business</h3><p className="text-xs text-slate-300 mt-1">Deep-dive into your products, margins, sales cycle, and target audience.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 2 – Market & Competitor Research</h3><p className="text-xs text-slate-300 mt-1">Analyzing competitor ads, keywords, backlink profiles, and social hooks in Chandigarh.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 3 – Target Audience Analysis</h3><p className="text-xs text-slate-300 mt-1">Defining customer personas, age demographics, pain points, and buyer intent.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 4 – Digital Marketing Audit</h3><p className="text-xs text-slate-300 mt-1">Evaluating current website technical health, ad pixel setup, and social profiles.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 5 – Keyword & Search Intent Research</h3><p className="text-xs text-slate-300 mt-1">Mapping high-value search queries across Google Search, Maps, and AI overview engines.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 6 – Strategy & Campaign Planning</h3><p className="text-xs text-slate-300 mt-1">Building budget allocations, creative ad angles, and landing page wireframes.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 7 – Campaign Execution</h3><p className="text-xs text-slate-300 mt-1">Launching Google Ads, Meta Ads, SEO optimizations, and social content calendars.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 8 – Performance Tracking</h3><p className="text-xs text-slate-300 mt-1">Monitoring live conversion rates, cost per lead, click-through rates, and GSC impressions.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 9 – Optimization & Testing</h3><p className="text-xs text-slate-300 mt-1">A/B testing ad headlines, landing page CTAs, bid strategies, and negative keywords.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-[#A2C0E6] text-sm">Step 10 – Reporting & Continuous Growth</h3><p className="text-xs text-slate-300 mt-1">Delivering transparent monthly reports and scaling successful campaign channels.</p></div>
          </div>
        </section>

        {/* H2: Digital Marketing Strategy for Businesses in Chandigarh */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Digital Marketing Strategy for Businesses in Chandigarh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Identify Your Ideal Customers</h3><p className="text-xs text-slate-400">Targeting high-income homeowners, students, professionals, and business owners.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Analyze Your Competitors</h3><p className="text-xs text-slate-400">Uncovering gap opportunities in Sector 17, Sector 35, and IT Park Chandigarh.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Find High-Intent Keywords</h3><p className="text-xs text-slate-400">Focusing on transactional search phrases with immediate purchasing intent.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Build Your Online Presence</h3><p className="text-xs text-slate-400">Optimizing website speed, mobile responsiveness, and social branding.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Increase Organic Search Visibility</h3><p className="text-xs text-slate-400">Ranking for high-volume keywords on Google Page 1.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Generate Targeted Website Traffic</h3><p className="text-xs text-slate-400">Attracting real local visitors interested in your products.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Generate Qualified Leads</h3><p className="text-xs text-slate-400">Capturing verified phone numbers, emails, and WhatsApp inquiries.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Improve Conversion Rates</h3><p className="text-xs text-slate-400">Optimizing landing page forms and call-to-action triggers.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Measure Marketing ROI</h3><p className="text-xs text-slate-400">Tracking every rupee spent against verified profit margins.</p></div>
          </div>
        </section>

        {/* H2: Local Digital Marketing Company in Chandigarh */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Local Digital Marketing Company in Chandigarh
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Local search visibility is essential for store walk-ins, clinic appointments, and service inquiries in Chandigarh. We optimize your local ecosystem:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Chandigarh Local SEO</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Google Maps Marketing</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Google Business Profile Optimization</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Local Search Advertising</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Location-Based Content Marketing</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Chandigarh Audience Targeting</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Local Lead Generation</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Reputation Management</h3></div>
          </div>
        </section>

        {/* H2: Digital Marketing Company Near You */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Digital Marketing Company Near You
          </h2>
          <p className="text-slate-300 text-base">
            We provide hands-on digital marketing services across all major surrounding hubs in Tricity:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Digital Marketing Company in Mohali</h3><p className="text-[11px] text-slate-400 mt-1">Phase 1-11, IT City, Aerocity.</p></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Digital Marketing Company in Zirakpur</h3><p className="text-[11px] text-slate-400 mt-1">VIP Road, Dhakoli, Baltana.</p></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Digital Marketing Company in Panchkula</h3><p className="text-[11px] text-slate-400 mt-1">Sector 5, 8, 11, 20 & MDC.</p></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Digital Marketing Company in Kharar</h3><p className="text-[11px] text-slate-400 mt-1">Landran Road, University area.</p></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Digital Marketing Company in Derabassi</h3><p className="text-[11px] text-slate-400 mt-1">Industrial belt & residential hubs.</p></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Digital Marketing Company in New Chandigarh</h3><p className="text-[11px] text-slate-400 mt-1">Mullanpur township & eco-city.</p></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20 sm:col-span-2"><h3 className="font-bold text-white text-xs">Digital Marketing Company in Tricity</h3><p className="text-[11px] text-slate-400 mt-1">Integrated regional growth campaigns across Chandigarh, Mohali & Panchkula.</p></div>
          </div>
        </section>

        {/* H2: SEO vs PPC – Which Digital Marketing Strategy Is Right for Your Business? */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            SEO vs PPC – Which Digital Marketing Strategy Is Right for Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Benefits of SEO</h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• Compounding organic website traffic over time</li>
                <li>• No payment per click; highly cost-effective long-term</li>
                <li>• Higher trust and credibility among searchers</li>
                <li>• Dominates organic Google search and Google Maps</li>
              </ul>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Benefits of PPC Advertising</h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• Instant visibility and leads within 24 to 48 hours</li>
                <li>• Precise targeting by location, demographic & search intent</li>
                <li>• Ideal for promotional launches & high-margin services</li>
                <li>• Full control over daily ad budgets and keyword bids</li>
              </ul>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-[#A2C0E6]/30 space-y-2">
            <h3 className="text-base font-bold text-white">SEO & PPC Together for Better Growth</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Combining SEO and PPC creates a double-impact strategy on Google Search results page. PPC generates immediate revenue, while SEO builds sustainable domain authority.
            </p>
            <h3 className="text-base font-bold text-white pt-2">Choosing the Right Strategy Based on Your Goals</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              During your free consultation with Vishal Sahani, we evaluate your timeline, margins, and budget to recommend the exact balance between SEO and PPC.
            </p>
          </div>
        </section>

        {/* H2: Social Media Marketing vs Search Marketing */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Social Media Marketing vs Search Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white text-[#A2C0E6]">When Social Media Marketing Works Best</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ideal for visual products, brand awareness, impulse purchases, lifestyle offers, reels engagement, and Meta ad remarketing.
              </p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white text-[#A2C0E6]">When Search Marketing Works Best</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ideal for high-intent problem solvers looking for instant solutions (doctors, lawyers, real estate flats, emergency home services).
              </p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white text-[#A2C0E6]">Building an Integrated Digital Marketing Strategy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We capture active searchers via Google Search and retarget passive scrollers on Instagram & Facebook for maximum conversion efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* H2: Digital Marketing Packages in Chandigarh */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Digital Marketing Packages in Chandigarh
            </h2>
            <p className="text-slate-300 text-base">
              Transparent, scalable monthly marketing plans designed to deliver measurable ROI:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4">
              <h3 className="text-lg font-bold text-white">Starter Digital Marketing Package</h3>
              <p className="text-xs text-slate-400">Essential SEO & GMB profile optimization for local Chandigarh stores.</p>
              <SeoPageCTA variant="package" buttonText="Enquire Starter Package" packageName="Starter Digital Marketing" />
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4">
              <h3 className="text-lg font-bold text-white">Local Business Marketing Package</h3>
              <p className="text-xs text-slate-400">Local SEO, GMB optimization, and hyper-local Meta ad campaigns.</p>
              <SeoPageCTA variant="package" buttonText="Enquire Local Package" packageName="Local Business Marketing" />
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4">
              <h3 className="text-lg font-bold text-white">SEO & Content Marketing Package</h3>
              <p className="text-xs text-slate-400">Deep technical SEO, blog topic clusters, and monthly authority backlinks.</p>
              <SeoPageCTA variant="package" buttonText="Enquire SEO Content Package" packageName="SEO & Content Marketing" />
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4">
              <h3 className="text-lg font-bold text-white">Social Media Marketing Package</h3>
              <p className="text-xs text-slate-400">Custom reels, carousel designs, community management & audience building.</p>
              <SeoPageCTA variant="package" buttonText="Enquire Social Package" packageName="Social Media Marketing" />
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4">
              <h3 className="text-lg font-bold text-white">SEO + PPC Package</h3>
              <p className="text-xs text-slate-400">Combined Google Search Ads management with long-term organic SEO rankings.</p>
              <SeoPageCTA variant="package" buttonText="Enquire SEO + PPC Package" packageName="SEO + PPC Hybrid" />
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/35 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#A2C0E6] text-[#060d16] text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Most Popular</div>
              <h3 className="text-lg font-bold text-white">Complete Digital Marketing Package</h3>
              <p className="text-xs text-slate-400">360° full-funnel marketing: SEO, Google Ads, Meta Ads, SMM, Content & CRO.</p>
              <SeoPageCTA variant="package" buttonText="Enquire Complete Package" packageName="Complete Digital Marketing 360" />
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-4 md:col-span-2 lg:col-span-3">
              <h3 className="text-lg font-bold text-white">Customized Digital Marketing Package</h3>
              <p className="text-xs text-slate-300">Need a specialized campaign scope? We create bespoke growth proposals tailored precisely to your targets.</p>
              <SeoPageCTA variant="primary" buttonText="Get Custom Digital Marketing Package & Pricing" />
            </div>
          </div>
        </section>

        {/* H2: How Much Does Digital Marketing Cost in Chandigarh? */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            How Much Does Digital Marketing Cost in Chandigarh?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Factors Affecting Digital Marketing Pricing</h3><p className="text-xs text-slate-400 mt-1">Website size, target keywords, geographical area, ad budgets, and creative requirements.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">SEO Pricing</h3><p className="text-xs text-slate-400 mt-1">₹12,000 to ₹40,000 / month based on competition and URL scope.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Social Media Marketing Pricing</h3><p className="text-xs text-slate-400 mt-1">₹10,000 to ₹30,000 / month for design, reels, and community management.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Google Ads Management Cost</h3><p className="text-xs text-slate-400 mt-1">10% to 15% of ad spend or fixed management retainer starting at ₹12,000.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Complete Digital Marketing Package Cost</h3><p className="text-xs text-slate-400 mt-1">₹25,000 to ₹75,000+ / month for full-funnel agency management.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Custom Digital Marketing Pricing</h3><p className="text-xs text-slate-400 mt-1">Enterprise scale custom proposals based on quarterly growth KPIs.</p></div>
          </div>
          <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/30">
            <h3 className="text-base font-bold text-white">Digital Marketing Investment vs ROI</h3>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Digital marketing should never be viewed as an expense. When executed properly by Veiled Story, every rupee invested generates a measurable multiplier in lead pipelines and sales transactions.
            </p>
          </div>
        </section>

        {/* H2: Digital Marketing Results We Focus On */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Digital Marketing Results We Focus On
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Website Traffic Growth</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Search Engine Visibility</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Brand Awareness</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Qualified Lead Generation</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Sales & Revenue Growth</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Customer Acquisition</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Conversion Rate Improvement</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Marketing ROI</h3></div>
          </div>
        </section>

        {/* H2: Digital Marketing Tools & Platforms We Work With */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Digital Marketing Tools & Platforms We Work With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Google Search</h3></div>
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Google Ads</h3></div>
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Google Analytics</h3></div>
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Google Search Console</h3></div>
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Google Business Profile</h3></div>
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Facebook & Instagram</h3></div>
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">LinkedIn</h3></div>
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">YouTube</h3></div>
            <div className="p-3 rounded-lg bg-slate-900 border border-[#A2C0E6]/20 text-center col-span-2"><h3 className="font-bold text-white text-xs">SEO & Analytics Platforms</h3></div>
          </div>
        </section>

        {/* H2: Digital Marketing Performance Reporting */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Digital Marketing Performance Reporting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">SEO Performance Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Google Ads Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Social Media Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Website Analytics Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Lead Generation Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Conversion Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 md:col-span-3"><h3 className="font-bold text-white text-xs">ROI & Performance Analysis</h3></div>
          </div>
        </section>

        {/* H2: Why Is Digital Marketing Important for Businesses in Chandigarh? */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Why Is Digital Marketing Important for Businesses in Chandigarh?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Reach Customers Where They Search</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Build a Strong Online Presence</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Generate Targeted Leads</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Compete with Local Businesses</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Increase Brand Visibility</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Build Customer Trust</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/20 md:col-span-3"><h3 className="font-bold text-white text-xs">Scale Your Business Online</h3></div>
          </div>
        </section>

        {/* Verified Case Studies & Testimonials */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Proven Track Record</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Chandigarh Client Case Studies & Verified Testimonials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/30 space-y-3">
              <div className="flex items-center gap-1 text-[#A2C0E6]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &quot;Veiled Story transformed our dental studio&apos;s online bookings in Sector 35 Chandigarh. Within 60 days of launching our combined Local SEO and Google Search Ads campaign, our monthly patient walk-ins increased by 180%.&quot;
              </p>
              <div className="pt-2 border-t border-[#A2C0E6]/20">
                <span className="font-bold text-white text-sm block">Dr. Amanpreet Kaur</span>
                <span className="text-[11px] text-[#A2C0E6]">Founder, SmileCraft Dental Studio Chandigarh</span>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/30 space-y-3">
              <div className="flex items-center gap-1 text-[#A2C0E6]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &quot;Vishal Sahani and the Veiled Story team managed our luxury 3BHK flat lead generation campaign in Mohali and Zirakpur. They lowered our Meta Ads Cost Per Verified Buyer Lead by 62%.&quot;
              </p>
              <div className="pt-2 border-t border-[#A2C0E6]/20">
                <span className="font-bold text-white text-sm block">Harpreet Singh</span>
                <span className="text-[11px] text-[#A2C0E6]">Marketing Director, Tricity Prime Developers</span>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Frequently Asked Questions About Digital Marketing Company in Chandigarh */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Frequently Asked Questions About Digital Marketing Company in Chandigarh
            </h2>
            <p className="text-slate-300 text-base">
              Clear, transparent answers to help you select the best growth partner for your business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">What Does a Digital Marketing Company in Chandigarh Do?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A digital marketing company plans and executes online growth strategies—including SEO, Google Ads, Meta Ads, social media marketing, content writing, website design, and AI search optimization—to increase brand visibility, website traffic, and verified customer leads.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">How Much Does Digital Marketing Cost in Chandigarh?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Digital marketing retainers in Chandigarh start from ₹15,000 / month for local business setups up to ₹75,000+ / month for multi-channel agency management across SEO, PPC, and SMM.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Which Digital Marketing Services Does Veiled Story Offer?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We offer full-funnel digital marketing: Search Engine Optimization (SEO), Local GMB SEO, Google Ads PPC, Meta Ads, Social Media Marketing, Content Writing, Website Design, Online Reputation Management (ORM), Email Marketing, CRO, and AI Search Optimization (AEO & GEO).
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Is Digital Marketing Suitable for Small Businesses?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Absolutely! Digital marketing allows small businesses in Chandigarh to compete on equal footing with large brands by targeting hyper-local buyers searching on Google Maps and social media.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">How Long Does Digital Marketing Take to Show Results?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Paid ads (Google Ads and Meta Ads) start delivering lead inquiries within 24 to 48 hours. Organic search engine rankings and content marketing usually show significant compounding traffic within 3 to 6 months.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Is SEO Better Than Google Ads?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Google Ads provide instant paid traffic, whereas SEO builds long-term organic assets that generate ongoing free traffic. Combining both yields the highest market share.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Can Digital Marketing Generate Leads for My Business?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! Our lead generation funnels focus on capturing verified phone calls, form submissions, and direct WhatsApp messages from high-intent buyers in Chandigarh.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Do You Provide Local SEO Services in Chandigarh?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! We specialize in Google Business Profile optimization, local citation building, and Google Maps #1 rank optimization across Chandigarh, Mohali, Panchkula & Zirakpur.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Can You Manage Facebook and Instagram Marketing?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! We handle creative reel production, graphic carousels, audience copywriting, community management, and targeted Meta lead generation ad campaigns.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Do You Provide Google Ads Management?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! As certified Search specialists, we manage Search, Display, YouTube, and Performance Max ad accounts with strict negative keyword filters to minimize wasted spend.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Can You Help My Business Rank on Google?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! We optimize your site&apos;s technical structure, write search-intent-focused content, and build clean authority backlinks to secure Page 1 Google rankings.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">How Do You Measure Digital Marketing Success?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We track primary business indicators: total lead inquiries, cost per lead (CPL), search impression share, return on ad spend (ROAS), and organic traffic growth.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Do You Provide Monthly Marketing Reports?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! Every client receives a comprehensive monthly report breaking down exact keyword movements, ad budget efficiency, website traffic analytics, and completed tasks.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Can You Create a Customized Digital Marketing Strategy?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! We audit your current online footprint and design a bespoke multi-channel marketing plan tailored specifically to your sales goals and target budget.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">What Is the Difference Between SEO and Digital Marketing?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                SEO is a specialized sub-discipline focused on organic search engine rankings. Digital marketing is the broader umbrella encompassing SEO, PPC paid advertising, social media, email marketing, and web design.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">What Is AEO and GEO in Digital Marketing?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are modern techniques that format brand information so AI systems (ChatGPT, Gemini, Perplexity) recommend your business during conversational searches.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Can Digital Marketing Help My Business Appear in AI Search Results?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! By integrating structured JSON-LD schemas, entity relationships, and clear fact-based content, we optimize your site for Google AI Overviews and conversational AI models.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">How Do I Choose the Right Digital Marketing Company in Chandigarh?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Look for verified local experience, transparent reporting, direct communication with senior specialists, white-hat ethical practices, and a clear focus on bottom-line business ROI over vanity metrics.
              </p>
            </div>

          </div>
        </section>

        {/* H2: Why Businesses Choose Veiled Story for Digital Marketing */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Why Businesses Choose Veiled Story for Digital Marketing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Strategy Before Execution</h3><p className="text-xs text-slate-400 mt-1">We analyze market positioning and buyer funnels before launching ad spend.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Customer-Centric Marketing</h3><p className="text-xs text-slate-400 mt-1">Crafting messages that address genuine buyer needs and overcome sales objections.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Transparent Campaign Management</h3><p className="text-xs text-slate-400 mt-1">Full access to your ad accounts, analytics dashboards, and campaign settings.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Data-Driven Optimization</h3><p className="text-xs text-slate-400 mt-1">Continuous conversion rate testing and ad audience refinement.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Creative & Technical Expertise</h3><p className="text-xs text-slate-400 mt-1">In-house combination of code development, graphic design, and copywriting.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Focus on Measurable Business Outcomes</h3><p className="text-xs text-slate-400 mt-1">Judging marketing performance purely by verified customer inquiries and revenue growth.</p></div>
          </div>
        </section>

        {/* H2: Start Your Digital Growth Journey with Veiled Story */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Start Your Digital Growth Journey with Veiled Story
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/25"><h3 className="font-bold text-white text-xs">Get a Free Digital Marketing Consultation</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/25"><h3 className="font-bold text-white text-xs">Request a Free Website & SEO Audit</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/25"><h3 className="font-bold text-white text-xs">Discuss Your Marketing Goals</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/25"><h3 className="font-bold text-white text-xs">Get a Customized Marketing Strategy</h3></div>
            <div className="p-4 rounded-xl liquid-glass border border-[#A2C0E6]/25"><h3 className="font-bold text-white text-xs">Get Your Digital Marketing Proposal</h3></div>
          </div>
        </section>

        {/* Inline Lead CTA Form */}
        <div className="my-10">
          <SeoPageCTA variant="inline-form" />
        </div>

        {/* H2: Ready to Grow Your Business Online? */}
        <section className="liquid-glass rounded-3xl p-8 sm:p-12 border border-[#A2C0E6]/30 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Grow Your Business Online?
          </h2>

          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-lg font-bold text-[#A2C0E6]">
              Talk to Veiled Story – Your Digital Marketing Partner in Chandigarh
            </h3>
            <h3 className="text-base font-semibold text-slate-200">
              Get Started with a Customized Digital Marketing Strategy
            </h3>
            <h3 className="text-sm text-slate-300">
              Turn Your Online Presence into a Growth Engine
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <SeoPageCTA variant="primary" buttonText="Get Free Digital Marketing Consultation" />
            <SeoPageCTA variant="secondary" buttonText="Request Free Website & SEO Audit" />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
