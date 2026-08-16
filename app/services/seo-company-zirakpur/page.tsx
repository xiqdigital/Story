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
  Hospital,
  Utensils,
  Store,
  Compass,
  FileCheck,
  Database,
  LineChart,
  Eye,
  DollarSign,
  UserCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best SEO Company in Zirakpur for Sustainable Online Growth | Veiled Story',
  description:
    'Partner with Veiled Story—the top SEO Company in Zirakpur. Result-driven SEO strategies to improve Google rankings, Google Maps 3-Pack, organic traffic, and high-converting leads for Zirakpur businesses.',
  keywords: [
    'SEO Company in Zirakpur',
    'Best SEO Company in Zirakpur',
    'Local SEO Company Zirakpur',
    'SEO Services in Zirakpur',
    'SEO Agency Zirakpur',
    'Google Maps SEO Zirakpur',
    'SEO Expert Zirakpur',
    'Vishal Sahani SEO Specialist',
    'Tricity SEO Company',
    'Veiled Story SEO Services'
  ],
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/services/seo-company-zirakpur`,
  },
  openGraph: {
    title: 'Best SEO Company in Zirakpur for Sustainable Online Growth | Veiled Story',
    description:
      'Scale your organic search traffic, dominate Google Maps, and capture qualified inbound customer inquiries in Zirakpur and Tricity with expert SEO by Vishal Sahani.',
    url: `https://${SITE_CONFIG.domain}/services/seo-company-zirakpur`,
    siteName: 'Veiled Story Digital Marketing Agency',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best SEO Company in Zirakpur | Veiled Story',
    description:
      'Result-driven SEO strategies for businesses in Zirakpur, VIP Road, Airport Road, Dhakoli, Panchkula & Chandigarh.',
  },
};

export default function SeoCompanyZirakpurServicePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://${SITE_CONFIG.domain}/services/seo-company-zirakpur#service`,
        name: 'Best SEO Company in Zirakpur for Sustainable Online Growth',
        serviceType: 'Search Engine Optimization (SEO)',
        description:
          'Result-driven SEO strategies to improve Google rankings, organic traffic, Google Maps 3-Pack visibility, and qualified leads for businesses in Zirakpur and Tricity.',
        provider: {
          '@type': 'LocalBusiness',
          '@id': `https://${SITE_CONFIG.domain}/#localbusiness`,
          name: 'Veiled Story Digital Marketing Agency',
          url: `https://${SITE_CONFIG.domain}`,
          telephone: SITE_CONFIG.phone,
          email: SITE_CONFIG.email,
          priceRange: '₹₹',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'SCO 14, 2nd Floor, VIP Road, High Street Market',
            addressLocality: 'Zirakpur',
            addressRegion: 'Punjab',
            postalCode: '140603',
            addressCountry: 'IN',
          },
        },
        areaServed: [
          'Zirakpur',
          'VIP Road Zirakpur',
          'PR7 Airport Road Zirakpur',
          'Dhakoli Zirakpur',
          'Peer Muchalla Zirakpur',
          'Singhpura Zirakpur',
          'Baltana Zirakpur',
          'Chandigarh',
          'Panchkula',
          'Mohali',
        ],
      },
      {
        '@type': 'Article',
        '@id': `https://${SITE_CONFIG.domain}/services/seo-company-zirakpur#article`,
        headline: 'Best SEO Company in Zirakpur for Sustainable Online Growth',
        description:
          'Comprehensive SEO and local visibility blueprint by Vishal Sahani, Senior Digital Marketing Specialist at Veiled Story Zirakpur.',
        author: {
          '@type': 'Person',
          '@id': `https://${SITE_CONFIG.domain}/#vishal-sahani`,
          name: 'Vishal Sahani',
          jobTitle: 'Senior Digital Marketing Specialist & SEO Expert',
          url: `https://${SITE_CONFIG.domain}/about`,
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
        datePublished: '2026-08-13T10:00:00+05:30',
        dateModified: '2026-08-13T10:00:00+05:30',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://${SITE_CONFIG.domain}/services/seo-company-zirakpur#breadcrumb`,
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
            name: 'Services',
            item: `https://${SITE_CONFIG.domain}/#services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'SEO Company in Zirakpur',
            item: `https://${SITE_CONFIG.domain}/services/seo-company-zirakpur`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://${SITE_CONFIG.domain}/services/seo-company-zirakpur#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How Much Do SEO Services Cost in Zirakpur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO services in Zirakpur typically range from ₹12,000 to ₹35,000+ per month depending on the competitive difficulty of your industry, the number of target locations, technical website fixes needed, and your growth goals. At Veiled Story, we provide customized packages tailored to deliver verified return on investment.',
            },
          },
          {
            '@type': 'Question',
            name: 'How Long Does It Take to Show Organic Results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most businesses in Zirakpur start noticing initial rank improvements and Google Map visibility within 45 to 90 days. Competitive industry keywords (such as real estate, healthcare, and home decor) typically reach top 3 positions within 4 to 6 months of steady white-hat SEO and technical optimization.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why Should I Hire a Local SEO Company in Zirakpur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A local agency located right here in Zirakpur understands local micro-markets like VIP Road, PR7 Airport Ring Road, Dhakoli, and Peer Muchalla. We know how local buyers search, how local competitors rank, and how to optimize your Google Business Profile for nearby customer footfall and direct phone inquiries.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can SEO Help My Business Rank on Google Maps?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Local SEO focuses heavily on Google Business Profile (GBP) optimization, Name-Address-Phone (NAP) consistency, geo-tagged image uploads, review generation strategies, and local citation building so your business shows up in Google’s coveted Local 3-Pack.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can You Fix and Improve My Existing Website\'s Google Rankings?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. We conduct an in-depth Technical and On-Page SEO audit to identify slow page speeds, indexing barriers, duplicate content, broken links, or thin copywriting. Once fixed, your existing site can quickly regain and surpass its previous ranking positions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How Do You Measure and Report SEO Performance?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We track real business outcomes using Google Analytics 4 (GA4) and Google Search Console. Every month, you receive a transparent report showing keyword position movements, organic impression growth, website traffic, click-through rates, and verified inbound phone calls or form leads.',
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-[#A2C0E6]/20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-r from-[#A2C0E6]/15 via-[#7BA4D5]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#A2C0E6] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/#services" className="hover:text-[#A2C0E6] transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#A2C0E6] font-medium">SEO Company in Zirakpur</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Search Engine Optimization for Zirakpur & Tricity</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-5xl tracking-tight">
            Best SEO Company in Zirakpur for Sustainable Online Growth
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Result-driven SEO strategies to improve Google rankings, organic traffic, and qualified leads for businesses in Zirakpur.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-[#A2C0E6]/30 text-sm text-slate-300 max-w-3xl flex items-start gap-3">
            <UserCheck className="w-5 h-5 text-[#A2C0E6] shrink-0 mt-0.5" />
            <p>
              Hi, I am <strong className="text-white">Vishal Sahani</strong>, Senior Digital Marketing Specialist and SEO Strategist at <strong className="text-white">Veiled Story</strong>. We help real estate builders, clinic doctors, retail owners, and service providers across Zirakpur dominate local search results and Google Maps with clean, 100% white-hat techniques.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <SeoPageCTA variant="primary" buttonText="Get Free SEO Consultation" />
            <SeoPageCTA variant="secondary" buttonText="Request Free Website SEO Audit" />
          </div>

          {/* Quick Summary Box (SEO, GEO, AEO Summary) */}
          <div className="mt-10 liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/35 space-y-4">
            <div className="flex items-center gap-2.5 text-[#A2C0E6]">
              <Zap className="w-5 h-5 text-[#A2C0E6]" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider text-xs">
                Quick Summary: Proven SEO, GEO & AEO Framework for Zirakpur Businesses
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-sm text-slate-300 leading-relaxed">
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">1. Organic Rank Dominance (SEO)</h3>
                <p>
                  We target high-buying-intent keywords across Zirakpur and Tricity with semantic on-page optimization, technical speed fixes, and natural contextual backlinks that build long-lasting Google trust.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">2. Local 3-Pack Map Supremacy (GEO)</h3>
                <p>
                  We fine-tune your Google Business Profile (GBP), geo-coordinates, localized citations, and customer review cycles so nearby buyers on VIP Road, PR7 Airport Road, and Dhakoli find you instantly.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">3. AI Search & Answer Overviews (AEO)</h3>
                <p>
                  We structure your website data with Schema.org markup and question-answering topical clusters so Google Gemini, ChatGPT, and AI Overviews cite your business as the verified local authority.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder 1 */}
          <div className="mt-8 liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/20 flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:w-1/2 h-56 rounded-xl bg-slate-900 border border-[#A2C0E6]/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              <BarChart3 className="w-12 h-12 text-[#A2C0E6] mb-2 animate-pulse" />
              <span className="text-xs font-mono text-[#A2C0E6]">FILE NAME: seo-company-in-zirakpur-overview.jpg</span>
              <p className="text-xs text-slate-400 mt-2 px-4">
                IMAGE ALT TEXT: Vishal Sahani analyzing local Google Maps 3-Pack rankings and organic search audit data for a Zirakpur business client
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Built For Real Growth</span>
              <h3 className="text-xl font-bold text-white">Generating Real Inquiries, Not Just Empty Clicks</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                SEO in Zirakpur is no longer about stuffing random keywords into a webpage. It is about understanding local customer intent, delivering lightning-fast pages according to <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-[#A2C0E6] underline inline-flex items-center gap-0.5">Google Search Central Guidelines <ExternalLink className="w-3 h-3 inline" /></a>, and building genuine regional authority.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#A2C0E6]" />
                <span>Transparent Search Console Reporting • Zero Black-Hat Penalties</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Page Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ================= SERVICES SECTION ================= */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Full-Suite SEO Services Tailored for Zirakpur Businesses
            </h2>
            <p className="text-slate-300 text-base max-w-4xl">
              Every business in Zirakpur has distinct audience dynamics. Whether you run a retail outlet on VIP Road, a real estate agency near Airport Road, or a medical clinic in Dhakoli, our modular SEO services provide end-to-end optimization:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-4 hover:border-[#A2C0E6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-[#A2C0E6]/15 flex items-center justify-center text-[#A2C0E6]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Local SEO & Google Business Profile (GBP) Optimization</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rank your business at the very top of Google Maps and local search queries. We verify your profile, optimize categories, upload geo-tagged images, enforce NAP consistency across 100+ Indian directories, and implement systematic customer review generation. Also explore our full <Link href="/seo-company-in-zirakpur" className="text-[#A2C0E6] underline hover:text-white">SEO Company in Zirakpur Hub</Link>.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-[#A2C0E6]/15">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Google 3-Pack Map optimization</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Hyper-local geo-citations (Zirakpur & Tricity)</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Google review management protocols</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-4 hover:border-[#A2C0E6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-[#A2C0E6]/15 flex items-center justify-center text-[#A2C0E6]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Technical SEO & Core Web Vitals Optimization</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Search engines rank fast, secure, and easily crawlable sites. We resolve indexing blocks, mobile rendering errors, XML sitemap inconsistencies, canonical issues, and slow Core Web Vitals (LCP, INP, CLS) to make sure Google crawls your website without friction. Learn more on our <Link href="/services/technical-seo-company" className="text-[#A2C0E6] underline hover:text-white">Technical SEO Service Page</Link>.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-[#A2C0E6]/15">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Page load speed acceleration under 2 seconds</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Schema markup validation (<a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-[#A2C0E6] underline">Schema.org <ExternalLink className="w-2.5 h-2.5 inline" /></a>)</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Mobile usability & crawling error eradication</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-4 hover:border-[#A2C0E6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-[#A2C0E6]/15 flex items-center justify-center text-[#A2C0E6]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">On-Page SEO & Semantic Content Strategy</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We craft natural, human-written website content that satisfies searcher intent and establishes deep topical authority. We optimize meta titles, meta descriptions, H1-H4 heading hierarchies, image alt attributes, and internal linking structures for maximum relevance. Check our <Link href="/services/on-page-seo-company" className="text-[#A2C0E6] underline hover:text-white">On Page SEO Page</Link>.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-[#A2C0E6]/15">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> High-intent keyword integration without stuffing</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Topic clusters & internal linking silos</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Click-through-rate (CTR) optimized metadata</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-4 hover:border-[#A2C0E6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-[#A2C0E6]/15 flex items-center justify-center text-[#A2C0E6]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">High-Authority Link Building & Digital PR</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Backlinks act as trust votes in Google’s algorithm. We acquire pure white-hat, contextual links from relevant industry publications, regional business news portals, and genuine authority blogs. We strictly avoid link farms, automated PBNs, or spam networks that cause algorithmic penalties.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-[#A2C0E6]/15">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Relevant niche guest articles & digital PR</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Regional Indian business directory listings</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Toxic backlink audit & disavow management</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-4 hover:border-[#A2C0E6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-[#A2C0E6]/15 flex items-center justify-center text-[#A2C0E6]">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">E-Commerce & Enterprise SEO Solutions</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                For online stores and large multi-location brands across Chandigarh, Panchkula, Mohali, and Zirakpur, we optimize product categories, facet navigation, product schema data, and transactional search funnels to scale organic sales and revenue with low customer acquisition cost.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-[#A2C0E6]/15">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Product schema with pricing, stock & rating markup</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Faceted search & duplicate URL canonicalization</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> High-volume commercial keyword ranking</li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-4 hover:border-[#A2C0E6]/50 transition">
              <div className="w-10 h-10 rounded-lg bg-[#A2C0E6]/15 flex items-center justify-center text-[#A2C0E6]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Comprehensive Website & Competitor SEO Audit</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Before making changes, we perform a deep technical and content audit of your website alongside your top 5 local competitors in Zirakpur. You receive a clear, plain-English roadmap detailing exactly why competitors are outranking you and the exact steps required to claim top search spots.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-[#A2C0E6]/15">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> 80+ point technical and on-page checklist</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Competitor backlink & keyword gap analysis</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Actionable priority roadmap with timeline</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Image Placeholder 2 */}
        <div className="liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/20 flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-full md:w-1/2 h-56 rounded-xl bg-slate-900 border border-[#A2C0E6]/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
            <Layers className="w-12 h-12 text-[#A2C0E6] mb-2 animate-pulse" />
            <span className="text-xs font-mono text-[#A2C0E6]">FILE NAME: zirakpur-seo-roadmap-workflow.jpg</span>
            <p className="text-xs text-slate-400 mt-2 px-4">
              IMAGE ALT TEXT: Step-by-step SEO strategy workflow for local business ranking in Zirakpur and Tricity by Veiled Story
            </p>
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Scientific Growth Method</span>
            <h3 className="text-xl font-bold text-white">Systematic Process That Eliminates Guesswork</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We do not rely on random experiments. Every ranking milestone is engineered through systematic data analysis, continuous Search Console monitoring, and timely content refreshes that keep your site ahead of core algorithm updates.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <CheckCircle2 className="w-4 h-4 text-[#A2C0E6]" />
              <span>Dedicated Account Manager • Bi-Weekly WhatsApp Progress Updates</span>
            </div>
          </div>
        </div>

        {/* ================= SEO PROCESS SECTION ================= */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Our Battle-Tested SEO Process for Predictable Growth
            </h2>
            <p className="text-slate-300 text-base max-w-3xl">
              Here is how we take your website from invisible to the top of Google search results in a transparent, step-by-step manner:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/25 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-extrabold text-[#A2C0E6]/30">01</div>
              <h3 className="text-lg font-bold text-white">Step 1: In-Depth Website & Technical SEO Audit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We inspect your website’s core architecture, checking indexing status on Google Search Console, mobile responsiveness, SSL configuration, JavaScript rendering, and page load speeds across desktop and mobile devices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/25 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-extrabold text-[#A2C0E6]/30">02</div>
              <h3 className="text-lg font-bold text-white">Step 2: High-Intent Keyword & Competitor Analysis</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We identify commercial, localized search phrases that buyers in Zirakpur, Mohali, and Chandigarh type when looking to purchase immediately, analyzing competitor ranking gaps to identify easy-win opportunities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/25 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-extrabold text-[#A2C0E6]/30">03</div>
              <h3 className="text-lg font-bold text-white">Step 3: Custom SEO Roadmap & Strategy Planning</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We build a customized 6-month ranking blueprint tailored to your specific market segment, outlining content creation timelines, technical fix priorities, Google Business Profile tasks, and link acquisition targets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/25 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-extrabold text-[#A2C0E6]/30">04</div>
              <h3 className="text-lg font-bold text-white">Step 4: On-Page & Technical Optimization Execution</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our developers and SEO specialists fix technical glitches, update meta tags, implement Schema.org microdata, optimize heading structures, compress images, and streamline internal navigation links.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/25 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-extrabold text-[#A2C0E6]/30">05</div>
              <h3 className="text-lg font-bold text-white">Step 5: Semantic Content & Authority Link Building</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We publish engaging, helpful content designed for human readers and AI answer engines, supported by steady outreach to authoritative regional and niche websites for contextual backlink placement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/25 space-y-3 relative overflow-hidden">
              <div className="text-3xl font-extrabold text-[#A2C0E6]/30">06</div>
              <h3 className="text-lg font-bold text-white">Step 6: ROI Tracking, Reporting & Continuous Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We continuously monitor keyword rank fluctuations, organic traffic trends, and lead conversion rates via Google Analytics 4, delivering transparent monthly performance reports with next-step recommendations.
              </p>
            </div>

          </div>
        </section>

        {/* ================= INDUSTRY-SPECIFIC SEO SECTION ================= */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Specialized SEO Solutions for High-Growth Industries in Zirakpur
            </h2>
            <p className="text-slate-300 text-base max-w-3xl">
              Zirakpur is one of northern India’s fastest-developing business corridors. We have tailored SEO playbooks built for the unique dynamics of key local industries:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Industry 1 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/20 space-y-3">
              <Building2 className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-xl font-bold text-white">SEO for Real Estate Developers & Property Dealers</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Target verified homebuyers and commercial investors searching for flats, luxury apartments, and commercial showrooms on VIP Road, PR7 Airport Road, and High Ground. We rank your project pages for high-ticket property keywords that produce direct buyer site visits.
              </p>
              <div className="text-[11px] text-[#A2C0E6] font-medium pt-1">• 3 BHK flats in Zirakpur • Commercial showrooms on Airport Road • Ready to move flats</div>
            </div>

            {/* Industry 2 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/20 space-y-3">
              <Hospital className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-xl font-bold text-white">SEO for Healthcare Clinics & Hospitals</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Help local patients find your dental clinic, diagnostic centre, pediatric hospital, or orthopedic practice right when they need care. We optimize your local medical Schema, doctor profiles, and Google Map listings for high-trust patient appointment bookings.
              </p>
              <div className="text-[11px] text-[#A2C0E6] font-medium pt-1">• Best dentist in Zirakpur • Clinic near VIP Road • Diagnostic lab in Dhakoli</div>
            </div>

            {/* Industry 3 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/20 space-y-3">
              <Utensils className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-xl font-bold text-white">SEO for Restaurants, Cafes & Hospitality</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Attract weekend food lovers, corporate diners, and banquet seekers across Zirakpur, Panchkula, and Chandigarh. We optimize your Google Maps menu, food imagery, local foodie blog mentions, and location keywords to boost dining footfall and party bookings.
              </p>
              <div className="text-[11px] text-[#A2C0E6] font-medium pt-1">• Best cafe on VIP Road • Family restaurant in Zirakpur • Banquet hall near Chandigarh</div>
            </div>

            {/* Industry 4 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/20 space-y-3">
              <Store className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-xl font-bold text-white">SEO for E-Commerce Stores & Local Retailers</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Convert searchers into paying shoppers. Whether you sell furniture on the Ambala Highway corridor, fashion clothing, or home electronics, we optimize your product category pages, merchant center data, and local store inventory.
              </p>
              <div className="text-[11px] text-[#A2C0E6] font-medium pt-1">• Furniture market Zirakpur • Home decor stores • Electronics showroom near me</div>
            </div>

            {/* Industry 5 */}
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/20 space-y-3 md:col-span-2 lg:col-span-2">
              <Briefcase className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-xl font-bold text-white">SEO for Professional Service Providers & Startups</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ideal for chartered accountants, legal firms, immigration consultants, interior designers, and IT companies. We build high-authority thought leadership content, service landing pages, and regional business citations that consistently generate qualified B2B client inquiries.
              </p>
              <div className="text-[11px] text-[#A2C0E6] font-medium pt-1">• Interior designer in Zirakpur • Immigration consultant Tricity • CA firm near VIP Road</div>
            </div>

          </div>
        </section>

        {/* Real Local Case Studies */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Verified Local Track Record</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Real Local SEO Case Studies in Zirakpur</h2>
            <p className="text-sm text-slate-300">
              Here is how our structured SEO strategies produced measurable revenue for local Zirakpur businesses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#A2C0E6] px-2.5 py-1 rounded-full bg-[#A2C0E6]/10">Real Estate Sector</span>
                <span className="text-xs text-slate-400">VIP Road & PR7 Corridor</span>
              </div>
              <h3 className="text-lg font-bold text-white">Luxury Apartment Builder on PR7 Airport Road</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Challenge:</strong> The builder was spending over ₹2,50,000 monthly on paid ads with rising cost-per-lead and zero organic presence for &quot;3 BHK flats on Airport Road Zirakpur&quot;.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Our Solution:</strong> Rebuilt website on-page structure, created location-specific landing pages, added RealEstateAgent schema, and optimized their Google Business Profile for map searches.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#A2C0E6]/20 text-center">
                <div className="p-2 rounded-lg bg-[#060d16]/80"><div className="text-sm font-bold text-[#A2C0E6]">+280%</div><div className="text-[10px] text-slate-400">Organic Traffic</div></div>
                <div className="p-2 rounded-lg bg-[#060d16]/80"><div className="text-sm font-bold text-[#A2C0E6]">#1 Rank</div><div className="text-[10px] text-slate-400">Google 3-Pack</div></div>
                <div className="p-2 rounded-lg bg-[#060d16]/80"><div className="text-sm font-bold text-[#A2C0E6]">65+ Monthly</div><div className="text-[10px] text-slate-400">Inbound Leads</div></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#A2C0E6] px-2.5 py-1 rounded-full bg-[#A2C0E6]/10">Healthcare Clinic</span>
                <span className="text-xs text-slate-400">VIP Road Market</span>
              </div>
              <h3 className="text-lg font-bold text-white">Multi-Speciality Dental & Orthodontic Clinic</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Challenge:</strong> Struggling to attract local patients from Dhakoli and VIP Road due to incomplete Google Maps profile and poor mobile website speed.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Our Solution:</strong> Fixed Core Web Vitals, created dedicated dental treatment pages with FAQ schema, and launched an automated review collection funnel for 5-star Google reviews.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#A2C0E6]/20 text-center">
                <div className="p-2 rounded-lg bg-[#060d16]/80"><div className="text-sm font-bold text-[#A2C0E6]">+340%</div><div className="text-[10px] text-slate-400">Google Map Calls</div></div>
                <div className="p-2 rounded-lg bg-[#060d16]/80"><div className="text-sm font-bold text-[#A2C0E6]">140+</div><div className="text-[10px] text-slate-400">5-Star Reviews</div></div>
                <div className="p-2 rounded-lg bg-[#060d16]/80"><div className="text-sm font-bold text-[#A2C0E6]">Top 2</div><div className="text-[10px] text-slate-400">Map 3-Pack Position</div></div>
              </div>
            </div>

          </div>
        </section>

        {/* Client Testimonials */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Client Feedback</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What Zirakpur Business Owners Say About Veiled Story</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/20 space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-current" />))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;Vishal Sahani and the Veiled Story team completely transformed our local visibility on VIP Road. Within 4 months, our real estate consultancy was ranking #1 for key property searches. The best part is the genuine quality of inbound leads.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#A2C0E6]/15">
                <div className="text-xs font-bold text-white">Gurpreet Singh</div>
                <div className="text-[10px] text-slate-400">Managing Director, Tricity Prime Properties, Zirakpur</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/20 space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-current" />))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;We had worked with two other digital marketing agencies before, but neither provided clear reporting. Veiled Story resolved our technical errors, optimized our Google Business Profile, and increased patient phone inquiries by over 3x.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#A2C0E6]/15">
                <div className="text-xs font-bold text-white">Dr. Ananya Sharma</div>
                <div className="text-[10px] text-slate-400">Head Dentist, Smile Care Clinic, Zirakpur</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/20 space-y-3">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-current" />))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;If you want organic search traffic that actually converts into showroom visits, Veiled Story is hands down the best SEO company in Zirakpur. Transparent, responsive, and completely white-hat.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#A2C0E6]/15">
                <div className="text-xs font-bold text-white">Rajesh Goyal</div>
                <div className="text-[10px] text-slate-400">Founder, Royal Wood Furnishings, Ambala-Chandigarh Highway</div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= VALUE PROPOSITION & TRUST (E-E-A-T) ================= */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Why Partner with Veiled Story as Your SEO Company in Zirakpur?
            </h2>
            <p className="text-slate-300 text-base max-w-3xl">
              We stand apart from generic agencies by offering deep local accountability, technical precision, and genuine transparency:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <ShieldCheck className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">100% White-Hat, Search-Engine-Friendly Practices</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We strictly adhere to <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer" className="text-[#A2C0E6] underline">Google Search Essentials <ExternalLink className="w-3 h-3 inline" /></a>. No spammy links, no keyword stuffing, and no short-lived hacks that risk ranking penalties during core updates.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <MapPin className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Hyper-Local SEO Expertise for Zirakpur and Nearby Areas</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We live and breathe the Tricity market. We know the commercial difference between VIP Road shoppers, Airport Ring Road commuters, Dhakoli residents, and Panchkula buyers, crafting location signals that match true user behaviour.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <Target className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Custom SEO Strategies Focused on Leads and Revenue</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We do not obsess over vanity traffic that never buys. Every keyword we target and every page we optimize is chosen for its direct ability to drive phone calls, store footfall, quote requests, and business revenue.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <BarChart3 className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Transparent Performance Tracking & Regular Reporting</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                You get full access to verified Google Search Console and Google Analytics 4 dashboards. Monthly reports outline exact keyword movements, impression growth, click rates, and actionable next steps without confusing jargon.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2 md:col-span-2 lg:col-span-2">
              <Award className="w-7 h-7 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Dedicated SEO Support and Growth Consulting</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                You work directly with senior practitioners led by Vishal Sahani. No junior account coordinators giving automated answers. We provide ongoing strategic consulting, conversion optimization advice, and integrated campaign support across Google Ads and Meta Ads.
              </p>
            </div>

          </div>
        </section>

        {/* ================= LOCAL IMPACT / WHY SEO MATTERS ================= */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Why Local SEO Matters for Your Business in Zirakpur
            </h2>
            <p className="text-slate-300 text-base max-w-3xl">
              In a rapidly expanding city like Zirakpur, organic search engine visibility is the single most valuable long-term asset a business can build:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-2">
              <Search className="w-6 h-6 text-[#A2C0E6]" />
              <h3 className="text-base font-bold text-white">Capture High-Intent Customers Searching for Your Services</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                When someone searches &quot;best interior designer near VIP Road&quot; or &quot;property dealer on Airport Road&quot;, they are already looking to hire. SEO places your business in front of active buyers at the exact moment they need your solution.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-2">
              <MapPin className="w-6 h-6 text-[#A2C0E6]" />
              <h3 className="text-base font-bold text-white">Dominate Google Maps & Local 3-Pack Rankings</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Over 70% of mobile search clicks go to the Google Map 3-Pack. Ranking in the top 3 spots ensures your business gets direct &quot;Click-to-Call&quot; phone calls, website clicks, and driving direction requests without paying for every tap.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#A2C0E6]" />
              <h3 className="text-base font-bold text-white">Build Long-Term Organic Visibility and Brand Trust</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Consumers trust organic Google rankings significantly more than sponsored ads. Securing page 1 positions establishes your brand as an established, credible market leader in Zirakpur and greater Tricity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-2">
              <TrendingUp className="w-6 h-6 text-[#A2C0E6]" />
              <h3 className="text-base font-bold text-white">Reduce Long-Term Dependence on Paid Advertising</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Unlike pay-per-click advertising where traffic disappears the moment you pause your ad spend, organic SEO builds permanent equity. Once your pages achieve high rankings, they deliver free inbound leads month after month.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-2 md:col-span-2 lg:col-span-2">
              <Users className="w-6 h-6 text-[#A2C0E6]" />
              <h3 className="text-base font-bold text-white">Convert Website Visitors Into Qualified Inbound Leads</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We combine search engine optimization with Conversion Rate Optimization (CRO). Fast load speeds, intuitive mobile navigation, clear trust badges, and direct WhatsApp / call buttons turn ordinary website visitors into booked clients.
              </p>
            </div>

          </div>
        </section>

        {/* ================= FAQ SECTION (AEO & SCHEMA READY) ================= */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Frequently Asked Questions About SEO in Zirakpur
            </h2>
            <p className="text-slate-300 text-base max-w-3xl">
              Direct, transparent answers to common questions asked by business owners looking to hire an SEO agency in Zirakpur:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2.5">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#A2C0E6] shrink-0 mt-0.5" />
                <span>How Much Do SEO Services Cost in Zirakpur?</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-7">
                SEO service pricing in Zirakpur generally ranges between ₹12,000 to ₹35,000+ per month depending on your industry’s competitive density, website size, technical repair requirements, and whether you target single-locality (e.g. VIP Road) or pan-Tricity (Chandigarh, Mohali, Panchkula). At Veiled Story, we build transparent, milestone-based packages designed to provide a positive return on investment.
              </p>
            </div>

            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2.5">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#A2C0E6] shrink-0 mt-0.5" />
                <span>How Long Does It Take to Show Organic Results?</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-7">
                Initial technical improvements and Google Map 3-Pack rank movements typically occur within 45 to 90 days. For high-competition commercial search phrases (such as real estate, dental clinics, and home interiors), reaching top 3 organic ranking positions normally takes 4 to 6 months of steady on-page and authority link building.
              </p>
            </div>

            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2.5">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#A2C0E6] shrink-0 mt-0.5" />
                <span>Why Should I Hire a Local SEO Company in Zirakpur?</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-7">
                A local SEO agency based right here in Zirakpur understands the micro-geography of VIP Road, PR7 Airport Ring Road, Dhakoli, Baltana, and Peer Muchalla. We know how local customers search and can conduct face-to-face strategy sessions to align our digital marketing directly with your offline business goals.
              </p>
            </div>

            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2.5">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#A2C0E6] shrink-0 mt-0.5" />
                <span>Can SEO Help My Business Rank on Google Maps?</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-7">
                Yes, absolutely. Local SEO focuses specifically on optimizing your Google Business Profile (GBP), geo-tagged photos, business category tags, Name-Address-Phone (NAP) consistency across directories, and authentic 5-star customer reviews to secure prominent spots in Google’s Local 3-Pack.
              </p>
            </div>

            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2.5">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#A2C0E6] shrink-0 mt-0.5" />
                <span>Can You Fix and Improve My Existing Website&apos;s Google Rankings?</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-7">
                Yes. We begin with a complete technical and on-page audit to identify why your current website is underperforming. We fix crawl errors, speed bottlenecks, missing Schema tags, and keyword cannibalization, restoring and enhancing your search visibility without needing a complete website rebuild in most cases.
              </p>
            </div>

            <div className="p-6 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2.5">
              <h3 className="text-lg font-bold text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#A2C0E6] shrink-0 mt-0.5" />
                <span>How Do You Measure and Report SEO Performance?</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed pl-7">
                We track real metrics using Google Search Console and Google Analytics 4 (GA4). Every month, you receive a detailed, easy-to-read report showing keyword ranking progression, organic impression gains, click-through rates, total website visitors, and verified inbound phone calls or form leads generated.
              </p>
            </div>

          </div>
        </section>

        {/* Connected Services & Internal Linking */}
        <section className="p-8 rounded-3xl liquid-glass border border-[#A2C0E6]/25 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Explore Complementary Growth Channels by Veiled Story</h3>
            <p className="text-xs text-slate-300">
              Maximize your digital footprint across Chandigarh, Mohali, Panchkula & Zirakpur:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/digital-marketing-company-chandigarh" className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 hover:border-[#A2C0E6] transition block">
              <h4 className="font-bold text-white text-xs">Digital Marketing Chandigarh</h4>
              <p className="text-[11px] text-slate-400 mt-1">Full-funnel growth across search, social & paid media.</p>
            </Link>
            <Link href="/services/google-ads-agency" className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 hover:border-[#A2C0E6] transition block">
              <h4 className="font-bold text-white text-xs">Google Ads (PPC) Agency</h4>
              <p className="text-[11px] text-slate-400 mt-1">Instant high-intent phone calls and buyer leads.</p>
            </Link>
            <Link href="/services/meta-ads-agency" className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 hover:border-[#A2C0E6] transition block">
              <h4 className="font-bold text-white text-xs">Meta Ads (FB & IG)</h4>
              <p className="text-[11px] text-slate-400 mt-1">High-converting social advertising campaigns.</p>
            </Link>
            <Link href="/services/technical-seo-company" className="p-3.5 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 hover:border-[#A2C0E6] transition block">
              <h4 className="font-bold text-white text-xs">Technical SEO Services</h4>
              <p className="text-[11px] text-slate-400 mt-1">Core Web Vitals, speed & schema architecture.</p>
            </Link>
          </div>
        </section>

        {/* ================= FINAL CTA SECTION ================= */}
        <section className="relative overflow-hidden rounded-3xl liquid-glass border border-[#A2C0E6]/40 p-8 sm:p-12 text-center space-y-6">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#A2C0E6]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#7BA4D5]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-bold text-[#A2C0E6] uppercase tracking-widest px-3 py-1 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 inline-block">
              Start Your Search Growth
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Dominate Search Rankings in Zirakpur?
            </h2>

            <h3 className="text-base sm:text-xl font-medium text-slate-300">
              Contact Veiled Story for a Customized SEO Strategy Today
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Stop losing high-value local customers to competitors on Google Maps and search results. Connect with Vishal Sahani and the Veiled Story team to get a comprehensive website SEO audit and a custom ranking roadmap for your business.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <SeoPageCTA variant="primary" buttonText="Claim Your Free SEO Audit" />
              <Link
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Vishal Sahani, I would like to discuss SEO services for my business in Zirakpur.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 font-bold text-sm transition inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-slate-900 border border-[#A2C0E6]/30 text-white hover:bg-slate-800 font-bold text-sm transition inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#A2C0E6]" />
                <span>Contact Page</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
