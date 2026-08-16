import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
  PieChart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO Company in Zirakpur – Result-Driven SEO Services for Business Growth | Veiled Story',
  description:
    'Looking for the best SEO Company in Zirakpur? Veiled Story offers result-driven Local SEO, Technical SEO, On-Page, Off-Page, E-commerce, AEO & GEO services to scale organic traffic and leads in Zirakpur & Tricity.',
  keywords: [
    'SEO Company in Zirakpur',
    'SEO Services Zirakpur',
    'Local SEO Zirakpur',
    'Best SEO Agency Zirakpur',
    'Google Maps SEO Zirakpur',
    'SEO Expert Zirakpur',
    'Technical SEO Zirakpur',
    'E-Commerce SEO Zirakpur',
    'AEO GEO SEO Zirakpur',
    'Vishal Sahani SEO Expert'
  ],
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}/seo-company-in-zirakpur`,
  },
  openGraph: {
    title: 'SEO Company in Zirakpur – Result-Driven SEO Services for Business Growth',
    description:
      'Scale your business organic rankings on Google and AI Search Engines with Veiled Story—the top-rated SEO company on VIP Road Zirakpur.',
    url: `https://${SITE_CONFIG.domain}/seo-company-in-zirakpur`,
    siteName: 'Veiled Story Digital Marketing Agency',
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Zirakpur | Veiled Story',
    description: 'Result-driven Local, Technical, On-Page & Off-Page SEO services in Zirakpur, Chandigarh, Panchkula & Mohali.',
  },
};

export default function SeoCompanyInZirakpurPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://${SITE_CONFIG.domain}/seo-company-in-zirakpur#service`,
        name: 'SEO Company in Zirakpur – Result-Driven SEO Services for Business Growth',
        serviceType: 'Search Engine Optimization',
        description:
          'Comprehensive SEO services in Zirakpur including On-Page SEO, Technical SEO, Off-Page Link Building, Google Maps Local SEO, E-Commerce SEO, and AI Search Optimization (AEO & GEO).',
        provider: {
          '@type': 'LocalBusiness',
          '@id': `https://${SITE_CONFIG.domain}/#localbusiness`,
          name: 'Veiled Story Digital Marketing Agency',
          url: `https://${SITE_CONFIG.domain}`,
          telephone: SITE_CONFIG.phone,
          email: SITE_CONFIG.email,
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
          'VIP Road',
          'Dhakoli',
          'Baltana',
          'Peer Muchalla',
          'Gazipur',
          'Lohgarh',
          'Patiala Road',
          'Chandigarh',
          'Panchkula',
          'Mohali',
        ],
      },
      {
        '@type': 'Article',
        '@id': `https://${SITE_CONFIG.domain}/seo-company-in-zirakpur#article`,
        headline: 'SEO Company in Zirakpur – Result-Driven SEO Services for Business Growth',
        description:
          'Complete SEO landing page blueprint and implementation guide by Vishal Sahani at Veiled Story Digital Marketing Agency Zirakpur.',
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
        datePublished: '2026-08-11T08:00:00+05:30',
        dateModified: '2026-08-11T10:00:00+05:30',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://${SITE_CONFIG.domain}/seo-company-in-zirakpur#breadcrumb`,
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
            name: 'SEO Company in Zirakpur',
            item: `https://${SITE_CONFIG.domain}/seo-company-in-zirakpur`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://${SITE_CONFIG.domain}/seo-company-in-zirakpur#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What Does an SEO Company in Zirakpur Do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An SEO company in Zirakpur helps local and national businesses rank higher on Google search results and Google Maps. At Veiled Story, we audit your website, fix technical issues, optimize keywords and content, build local citations, manage backlinks, and optimize for AI search overviews.',
            },
          },
          {
            '@type': 'Question',
            name: 'How Much Does SEO Cost in Zirakpur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO cost in Zirakpur ranges from ₹12,000 to ₹45,000+ per month depending on website size, keyword competition, business goals, and geographical scope. We offer transparent starter, local, small business, and enterprise SEO packages.',
            },
          },
          {
            '@type': 'Question',
            name: 'How Long Does SEO Take to Show Results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Local SEO fixes and Google Maps optimization typically show initial ranking movements within 30 to 60 days. Competitive organic keywords usually show significant traffic and lead growth in 3 to 6 months.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is SEO Better Than Google Ads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Google Ads deliver instant paid leads, while SEO builds compounding, long-term organic traffic without paying per click. Combining both creates the ultimate performance marketing funnel.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can SEO Help My Local Business Rank on Google Maps?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Our local SEO services optimize your Google Business Profile (GBP), NAP consistency, customer reviews, local ZIP code keywords (140603), and localized backlinks to secure top #1 spots on Google Maps in Zirakpur & Tricity.',
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
            <span className="text-[#A2C0E6] font-medium">SEO Company in Zirakpur</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Top #1 Rated SEO Agency on VIP Road Zirakpur</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl tracking-tight">
            SEO Company in Zirakpur – Result-Driven SEO Services for Business Growth
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Welcome! I’m <strong className="text-white">Vishal Sahani</strong>, Senior Digital Marketing Specialist & SEO Expert at <strong className="text-white">Veiled Story</strong>. We help local businesses, startups, and established enterprises in Zirakpur, Chandigarh, Mohali & Panchkula dominate Google Search, Google Maps, and AI Answer Engines with 100% white-hat, ROI-focused SEO strategies.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <SeoPageCTA variant="primary" buttonText="Get Free SEO Consultation" />
            <SeoPageCTA variant="secondary" buttonText="Request Free SEO Audit" />
          </div>

          {/* Quick Summary Box (SEO, GEO, AEO Summary) */}
          <div className="mt-10 liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/35 space-y-4">
            <div className="flex items-center gap-2.5 text-[#A2C0E6]">
              <Zap className="w-5 h-5 text-[#A2C0E6]" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider text-xs">
                Quick Summary: Complete SEO, GEO & AEO Strategy for Zirakpur Businesses
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-sm text-slate-300 leading-relaxed">
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">1. Traditional SEO Excellence</h3>
                <p>
                  We combine technical site speed fixes, search intent keyword targeting, and hyper-local citation building across VIP Road, Dhakoli, Baltana, Peer Muchalla & Tricity.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">2. Generative Engine Optimization (GEO)</h3>
                <p>
                  We structure your brand content with entity graphs and clear facts so ChatGPT, Gemini, and Perplexity recommend your business when users search in Tricity.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-[#A2C0E6]/50 pl-4">
                <h3 className="font-bold text-white text-base">3. Answer Engine Optimization (AEO)</h3>
                <p>
                  We engineer direct, conversational question-answer pairs and JSON-LD schema markup so your website captures Google Featured Snippets and AI Search Overviews.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder 1 */}
          <div className="mt-8 liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/20 flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:w-1/2 h-56 rounded-xl bg-slate-900 border border-[#A2C0E6]/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              <BarChart3 className="w-12 h-12 text-[#A2C0E6] mb-2 animate-pulse" />
              <span className="text-xs font-mono text-[#A2C0E6]">FILE NAME: seo-company-in-zirakpur-hero-banner.jpg</span>
              <p className="text-xs text-slate-400 mt-2 px-4">
                IMAGE ALT TEXT: Vishal Sahani explaining SEO strategy to local business owners on VIP Road Zirakpur
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-3">
              <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Local Search Dominance</span>
              <h3 className="text-xl font-bold text-white">Ranking Local Businesses on Google Page 1 Since 2014</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you run a real estate consultancy, dental clinic, restaurant, salon, or e-commerce brand in Zirakpur, our custom organic search frameworks ensure your target customers find you first.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#A2C0E6]" />
                <span>Verified Google Search Central Compliance • 100% Ethical White-Hat Practices</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area with exact heading hierarchy */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* H2: Grow Your Business with a Trusted SEO Company in Zirakpur */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Grow Your Business with a Trusted SEO Company in Zirakpur
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            In today&apos;s digital-first economy, simply having a website is not enough. If your business in Zirakpur is not appearing on the first page of Google search results or top 3 Google Maps local pack, you are actively giving away valuable customers to your competitors.
          </p>
          <p className="text-slate-300 text-base leading-relaxed">
            At <strong className="text-white">Veiled Story</strong>, situated right on VIP Road in Zirakpur, we understand the hyper-local buyer behavior across Zirakpur, Dhakoli, Baltana, Peer Muchalla, Gazipur, Lohgarh, Patiala Road, Chandigarh, Panchkula, and Mohali. We don&apos;t rely on generic automated software or shady black-hat link schemes. Instead, we build clean, long-term organic search authority that drives qualified phone calls, store visits, WhatsApp inquiries, and online transactions.
          </p>
        </section>

        {/* H2: Why Choose Veiled Story as Your SEO Company in Zirakpur? */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Why Choose Veiled Story as Your SEO Company in Zirakpur?
            </h2>
            <p className="text-slate-300 text-base">
              Choosing the right SEO partner can make or break your digital revenue. Here is why business owners across Tricity trust Vishal Sahani and the Veiled Story team:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <Target className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Customized SEO Strategies for Your Business</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We never use copy-paste templates. Every campaign starts with a deep analysis of your unique business offerings, target audience, local competitors, and profit margins.
              </p>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <MapPin className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Local SEO Experts in Zirakpur</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our team operates physically on VIP Road, Zirakpur (ZIP 140603). We know the exact local search terms customers use when searching for services in VIP Road, Dhakoli, Baltana, and Tricity.
              </p>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">White-Hat SEO Practices</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We strictly adhere to <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-[#A2C0E6] underline hover:text-white">Google Search Essentials</a>. Our ethical methods protect your domain from spam penalties and ensure stable rankings.
              </p>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <BarChart3 className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Data-Driven SEO Campaigns</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Every optimization decision is backed by live data from <a href="https://search.google.com/search-console/about" target="_blank" rel="noopener noreferrer" className="text-[#A2C0E6] underline hover:text-white">Google Search Console</a>, Google Analytics 4, and real search user metrics.
              </p>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <FileText className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Transparent SEO Reporting</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                No jargon or vanity metrics. You receive simple, easy-to-understand monthly performance reports highlighting keyword progress, organic traffic growth, and generated lead inquiries.
              </p>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <Users className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">Experienced SEO & Digital Marketing Team</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Led by <Link href="/author/vishal-sahani" className="text-[#A2C0E6] underline hover:text-white">Vishal Sahani</Link> with 10+ years of hands-on experience, our specialists combine technical web development, content engineering, and link building expertise.
              </p>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3 md:col-span-2 lg:col-span-3">
              <TrendingUp className="w-8 h-8 text-[#A2C0E6]" />
              <h3 className="text-lg font-bold text-white">SEO Strategies Focused on Long-Term Growth</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                While paid ads stop generating leads the second your budget runs out, our organic SEO strategies build a compounding digital asset that continues attracting high-intent customers for years.
              </p>
            </div>

          </div>
        </section>

        {/* H2: Our SEO Services in Zirakpur */}
        <section className="space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Our SEO Services in Zirakpur
            </h2>
            <p className="text-slate-300 text-base">
              We offer end-to-end Search Engine Optimization solutions tailored to solve specific digital visibility challenges for Indian businesses:
            </p>
          </div>

          {/* H3: On-Page SEO Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <PenTool className="w-6 h-6 text-[#A2C0E6]" />
              <span>On-Page SEO Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              On-Page SEO involves optimizing all visible elements and code structure on your website to ensure search engines understand your context and user relevance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20 space-y-2">
                <h4 className="font-bold text-white text-sm">SEO Keyword Research</h4>
                <p className="text-xs text-slate-400">Discovering high-intent search terms used by local buyers in Zirakpur and Tricity.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20 space-y-2">
                <h4 className="font-bold text-white text-sm">SEO-Friendly Content Optimization</h4>
                <p className="text-xs text-slate-400">Writing clear, natural Indian English content aligned with Google EEAT standards.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20 space-y-2">
                <h4 className="font-bold text-white text-sm">Title Tag & Meta Description Optimization</h4>
                <p className="text-xs text-slate-400">Crafting high-CTR title tags and meta descriptions that entice searchers to click.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20 space-y-2">
                <h4 className="font-bold text-white text-sm">Heading Tag Optimization</h4>
                <p className="text-xs text-slate-400">Structuring H1, H2, H3, and H4 tags logically for maximum readability and crawl clarity.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20 space-y-2">
                <h4 className="font-bold text-white text-sm">URL & Permalink Optimization</h4>
                <p className="text-xs text-slate-400">Creating clean, descriptive permalink structures with targeted primary keywords.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20 space-y-2">
                <h4 className="font-bold text-white text-sm">Internal Linking Optimization</h4>
                <p className="text-xs text-slate-400">Connecting related service pages and blog articles to distribute page authority.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20 space-y-2">
                <h4 className="font-bold text-white text-sm">Image SEO & Alt Text Optimization</h4>
                <p className="text-xs text-slate-400">Compressing images and writing descriptive ALT tags for Google Image search visibility.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20 space-y-2">
                <h4 className="font-bold text-white text-sm">Schema Markup Implementation</h4>
                <p className="text-xs text-slate-400">Integrating <a href="https://schema.org" target="_blank" rel="noopener noreferrer" className="text-[#A2C0E6] underline">Schema.org</a> JSON-LD tags for rich snippets and AI search parsing.</p>
              </div>
            </div>
          </div>

          {/* H3: Technical SEO Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-6 h-6 text-[#A2C0E6]" />
              <span>Technical SEO Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Technical SEO ensures search engine spiders can effortlessly crawl, index, and render your website pages without speed bottlenecks or broken code.
            </p>

            {/* Image Placeholder 2 */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-[#A2C0E6]/30 flex flex-col sm:flex-row items-center gap-4 my-2">
              <div className="p-4 bg-black/60 rounded-xl border border-[#A2C0E6]/20 text-center w-full sm:w-auto">
                <span className="text-[10px] font-mono text-[#A2C0E6] block">FILE NAME: technical-seo-audit-zirakpur.jpg</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  IMAGE ALT TEXT: Comprehensive website technical SEO audit report by Veiled Story Zirakpur
                </p>
              </div>
              <p className="text-xs text-slate-300">
                Our technical SEO audits uncover hidden crawl errors, slow server response times, render-blocking JavaScript, and mobile usability bugs that suppress Google rankings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Website SEO Audit</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Website Speed Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Core Web Vitals Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Mobile SEO Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Crawlability & Indexability Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">XML Sitemap Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Robots.txt Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Canonical URL Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">HTTPS & Website Security</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">JavaScript SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Duplicate Content Management</h4></div>
            </div>
          </div>

          {/* H3: Off-Page SEO Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-[#A2C0E6]" />
              <span>Off-Page SEO Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Off-Page SEO builds online reputation and domain trust by acquiring authoritative backlinks, digital PR coverage, and localized business citations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">High-Quality Link Building</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Authority Backlink Building</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Digital PR & Brand Mentions</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Business Citations</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Content Outreach</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Competitor Backlink Analysis</h4></div>
            </div>
          </div>

          {/* H3: Local SEO Services in Zirakpur */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#A2C0E6]" />
              <span>Local SEO Services in Zirakpur</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Designed specifically for local business owners in Zirakpur to dominate Google Maps 3-pack and &quot;near me&quot; local intent queries. Check out our dedicated <Link href="/services/local-seo-zirakpur" className="text-[#A2C0E6] underline hover:text-white">Local SEO Zirakpur Service Page</Link>.
            </p>

            {/* Image Placeholder 3 */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-[#A2C0E6]/30 flex flex-col sm:flex-row items-center gap-4 my-2">
              <div className="p-4 bg-black/60 rounded-xl border border-[#A2C0E6]/20 text-center w-full sm:w-auto">
                <span className="text-[10px] font-mono text-[#A2C0E6] block">FILE NAME: google-maps-local-seo-zirakpur.jpg</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  IMAGE ALT TEXT: Google Maps local #1 rank case study in Zirakpur, Chandigarh, and Panchkula
                </p>
              </div>
              <p className="text-xs text-slate-300">
                Securing top positions on Google Maps local pack generates direct phone inquiries and physical store visits from customers actively searching on VIP Road and across Tricity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Business Profile Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Local Keyword Research</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Local Citation Building</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">NAP Consistency Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Local Link Building</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Local Landing Page Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Online Reputation & Review Strategy</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Google Maps SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">“Near Me” SEO</h4></div>
            </div>
          </div>

          {/* H3: E-Commerce SEO Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-[#A2C0E6]" />
              <span>E-Commerce SEO Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              For online stores targeting Indian and international shoppers, we optimize product pages, category hierarchies, product schemas, and checkout speeds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Product Page SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Category Page SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Product Keyword Research</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">E-Commerce Technical SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Product Schema Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">E-Commerce Internal Linking</h4></div>
            </div>
          </div>

          {/* H3: Enterprise SEO Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#A2C0E6]" />
              <span>Enterprise SEO Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tailored frameworks for high-volume websites with thousands of URLs, complex taxonomies, and multi-location footprints across India.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Large Website SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">SEO Scalability Strategy</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">International & Multi-Location SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Enterprise Technical SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">SEO Automation & Reporting</h4></div>
            </div>
          </div>

          {/* H3: Content SEO Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#A2C0E6]" />
              <span>Content SEO Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Creating high-value, helpful content that answers exact user search questions while establishing your brand as a trusted industry authority.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">SEO Blog Writing</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Service Page Content Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Landing Page SEO Content</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Topic Cluster Strategy</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Pillar Page & Supporting Content</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Search Intent Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Content Refresh & Optimization</h4></div>
            </div>
          </div>

          {/* H3: AEO & GEO Optimization Services */}
          <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/30 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Bot className="w-6 h-6 text-[#A2C0E6]" />
              <span>AEO & GEO Optimization Services</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Future-proofing your brand for AI engines (ChatGPT, Google Gemini, Perplexity) with structured answer paragraphs and entity associations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Answer Engine Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Generative Engine Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">AI Search Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Featured Snippet Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">People Also Ask Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Conversational Search Optimization</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Entity-Based SEO</h4></div>
              <div className="p-3.5 rounded-xl bg-[#060d16]/70 border border-[#A2C0E6]/20"><h4 className="font-bold text-white text-xs">Structured Data for AI Search</h4></div>
            </div>
          </div>

        </section>

        {/* H2: SEO Services We Offer for Different Business Types */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            SEO Services We Offer for Different Business Types
          </h2>
          <p className="text-slate-300 text-base">
            Every sector in Zirakpur and Tricity requires a specialized organic search approach. We build customized frameworks for:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Local Businesses</h3><p className="text-xs text-slate-400">Stores, clinics, & outlets across VIP Road, Dhakoli, Baltana & Zirakpur.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Startups</h3><p className="text-xs text-slate-400">Agile content clusters and rapid organic search visibility setup.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Small Businesses</h3><p className="text-xs text-slate-400">High ROI local keywords that maximize customer inquiries on a budget.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Service-Based Businesses</h3><p className="text-xs text-slate-400">Plumbers, interior designers, legal consultants, and home services.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for E-Commerce Businesses</h3><p className="text-xs text-slate-400">National and global product page optimization with fast checkout funnel.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Real Estate Companies</h3><p className="text-xs text-slate-400">Flat buyers, luxury 3BHK flats in Zirakpur, and commercial property leads.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Healthcare Businesses</h3><p className="text-xs text-slate-400">Dental clinics, multi-specialty hospitals, and diagnostic centers in Tricity.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Educational Institutions</h3><p className="text-xs text-slate-400">Schools, coaching institutes, and skill academies attracting student admissions.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Hospitality & Hotels</h3><p className="text-xs text-slate-400">Banquet halls, luxury hotels, and cafes in Zirakpur and Panchkula.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Professional Services</h3><p className="text-xs text-slate-400">CA firms, IT agencies, financial advisors, and architects.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for B2B Companies</h3><p className="text-xs text-slate-400">Manufacturing plants, industrial exporters, and wholesale distributors.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO for Multi-Location Businesses</h3><p className="text-xs text-slate-400">Chains and franchise outlets across Chandigarh, Mohali, Panchkula & Zirakpur.</p></div>
          </div>
        </section>

        {/* H2: How Our SEO Process Works */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            How Our SEO Process Works
          </h2>
          <p className="text-slate-300 text-base">
            We follow a systematic 10-step SEO execution roadmap designed for guaranteed progress and accountability:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 1 – Website & SEO Audit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Analyzing code health, site speed, indexation issues, and keyword penalties.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 2 – Competitor & Market Analysis</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Deconstructing competitor backlinks, keyword rankings, and content gaps in Zirakpur.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 3 – Keyword Research & Search Intent Mapping</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Mapping informational, transactional, and local search intent queries.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 4 – SEO Strategy Development</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Creating a 90-day action plan with milestones and primary target KPIs.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 5 – On-Page SEO Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Updating meta tags, headings, content structure, internal links, and schemas.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 6 – Technical SEO Implementation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Optimizing Core Web Vitals, sitemaps, robots.txt, and mobile responsiveness.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 7 – Content Strategy & Content Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Publishing helpful, expert blog articles and location landing page content.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 8 – Local & Off-Page SEO</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Optimizing Google Business Profile, local citations, and authority link acquisition.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 9 – Performance Tracking & Analysis</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Monitoring weekly ranking shifts, GSC clicks, CTR, and conversion rates.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-lg font-bold text-white text-[#A2C0E6]">Step 10 – Continuous SEO Improvement</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Adapting content to Google core updates and maintaining #1 rank positions.</p>
            </div>
          </div>
        </section>

        {/* H2: Our SEO Strategy for Businesses in Zirakpur */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Our SEO Strategy for Businesses in Zirakpur
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Our custom search strategy for Zirakpur businesses focuses on building high topical relevance and brand entity trust:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Understanding Your Target Audience</h3><p className="text-xs text-slate-400">Analyzing local consumer behavior across VIP Road and Tricity.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Identifying High-Intent Keywords</h3><p className="text-xs text-slate-400">Targeting queries that lead directly to phone calls and sales inquiries.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Analyzing Local Search Competition</h3><p className="text-xs text-slate-400">Uncovering competitor weaknesses on Google Search and Maps.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Building Topical Authority</h3><p className="text-xs text-slate-400">Publishing comprehensive guides and localized topic clusters.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Improving Organic Visibility</h3><p className="text-xs text-slate-400">Securing first-page positions for primary and secondary keywords.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Increasing Qualified Website Traffic</h3><p className="text-xs text-slate-400">Attracting real buyers rather than accidental clicks.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1 md:col-span-2 lg:col-span-3"><h3 className="font-bold text-white text-sm">Converting Organic Traffic into Leads</h3><p className="text-xs text-slate-400">Optimizing call-to-action buttons, lead forms, and WhatsApp integration.</p></div>
          </div>
        </section>

        {/* H2: Why SEO Is Important for Businesses in Zirakpur */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Why SEO Is Important for Businesses in Zirakpur
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Zirakpur is one of the fastest-growing commercial and residential hubs in Punjab and Tricity. Here is why investing in professional SEO services is non-negotiable:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Reach Customers Searching on Google</h3><p className="text-xs text-slate-400">88% of local buyers search on Google before making a purchase decision.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Improve Local Search Visibility</h3><p className="text-xs text-slate-400">Capture buyers searching specifically in Zirakpur, Dhakoli, Baltana & VIP Road.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Generate Consistent Organic Traffic</h3><p className="text-xs text-slate-400">Build a continuous stream of free organic visitors 24/7/365.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Build Long-Term Brand Authority</h3><p className="text-xs text-slate-400">Ranking #1 signals market trust and industry leadership to buyers.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Reduce Dependence on Paid Advertising</h3><p className="text-xs text-slate-400">Lower your average acquisition costs compared to Google & Meta Ads.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Increase Qualified Leads and Sales</h3><p className="text-xs text-slate-400">Organic visitors have higher intent and convert better than cold traffic.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1 md:col-span-2 lg:col-span-3"><h3 className="font-bold text-white text-sm">Compete with Established Businesses</h3><p className="text-xs text-slate-400">Outrank bigger brands in Chandigarh & Mohali by dominating hyper-local search intent.</p></div>
          </div>
        </section>

        {/* H2: Local SEO Company in Zirakpur for Google Maps & Local Search */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Local SEO Company in Zirakpur for Google Maps & Local Search
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Our Google Business Profile (GBP) and Google Maps SEO protocols are engineered to put your business at the top of local map results across Zirakpur:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Google Business Profile SEO</h3><p className="text-xs text-slate-400">Full profile claiming, verification, category selection, and photo geotagging.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Google Maps Ranking Optimization</h3><p className="text-xs text-slate-400">Securing persistent #1 spots on Google Maps for local intent searches.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Local Search Keyword Optimization</h3><p className="text-xs text-slate-400">Embedding ZIP code 140603 and VIP Road keywords in profile updates.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Local Business Citations</h3><p className="text-xs text-slate-400">Consistent Name, Address, Phone (NAP) listings on Justdial, Sulekha, and IndiaMART.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Customer Review Strategy</h3><p className="text-xs text-slate-400">Systematic 5-star review acquisition workflows and localized keyword replies.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Local Content Strategy</h3><p className="text-xs text-slate-400">Publishing localized news articles and neighborhood updates.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1 md:col-span-2 lg:col-span-3"><h3 className="font-bold text-white text-sm">Location-Based Landing Pages</h3><p className="text-xs text-slate-400">Building landing pages for VIP Road, Dhakoli, Baltana, Peer Muchalla & Gazipur.</p></div>
          </div>
        </section>

        {/* H2: SEO Audit & Website SEO Analysis */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            SEO Audit & Website SEO Analysis
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Before launching any campaign, we perform an exhaustive 25+ point audit covering every dimension of your search presence:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Technical SEO Audit</h3><p className="text-xs text-slate-400">Identifying crawl bottlenecks, broken links, and mobile responsiveness bugs.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">On-Page SEO Audit</h3><p className="text-xs text-slate-400">Evaluating title tags, meta descriptions, heading structures, and internal links.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Content Quality Audit</h3><p className="text-xs text-slate-400">Checking for thin content, duplicate text, and Google EEAT alignment.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Backlink Profile Audit</h3><p className="text-xs text-slate-400">Analyzing domain authority, anchor text distribution, and disavowing toxic spam links.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Local SEO Audit</h3><p className="text-xs text-slate-400">Checking Google Maps ranking signals, NAP consistency, and local reviews.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Competitor SEO Analysis</h3><p className="text-xs text-slate-400">Comparing your organic presence against top-ranking businesses in Zirakpur.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1 md:col-span-2 lg:col-span-3"><h3 className="font-bold text-white text-sm">SEO Health & Performance Report</h3><p className="text-xs text-slate-400">Delivering an actionable PDF roadmap with step-by-step priority fixes.</p></div>
          </div>
        </section>

        {/* H2: SEO Tools & Technologies We Use */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            SEO Tools & Technologies We Use
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We leverage industry-standard enterprise software and Google developer platforms to power our SEO research and execution:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Google Search Console</h3><p className="text-xs text-slate-400">Index tracking & CTR performance.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Google Analytics</h3><p className="text-xs text-slate-400">GA4 user flow & lead tracking.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Google Business Profile</h3><p className="text-xs text-slate-400">Local map insights & call tracking.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Keyword Research Tools</h3><p className="text-xs text-slate-400">Ahrefs, Semrush, & Keyword Planner.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Technical SEO Crawling Tools</h3><p className="text-xs text-slate-400">Screaming Frog & Sitebulb crawlers.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Backlink Analysis Tools</h3><p className="text-xs text-slate-400">Majestic & Ahrefs backlink auditors.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Website Performance Tools</h3><p className="text-xs text-slate-400">Google PageSpeed Insights & GTmetrix.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Structured Data Tools</h3><p className="text-xs text-slate-400">Rich Results Test & Schema Validator.</p></div>
          </div>
        </section>

        {/* H2: SEO Metrics We Track */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            SEO Metrics We Track
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We focus strictly on tangible business metrics that correlate directly to revenue and customer growth:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Organic Traffic</h3><p className="text-xs text-slate-400">Total non-paid visitors from Google search.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Keyword Rankings</h3><p className="text-xs text-slate-400">First-page rank position for target search terms.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Organic Impressions</h3><p className="text-xs text-slate-400">Number of times your website appears in search results.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Organic Click-Through Rate</h3><p className="text-xs text-slate-400">Percentage of searchers who click your website link.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Search Visibility</h3><p className="text-xs text-slate-400">Overall market share across local keywords.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Qualified Organic Leads</h3><p className="text-xs text-slate-400">Verified WhatsApp chats, calls, and form submissions.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Conversion Rate</h3><p className="text-xs text-slate-400">Percentage of visitors converting into leads.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Backlink Growth</h3><p className="text-xs text-slate-400">Increase in high-authority referring domains.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Local Search Performance</h3><p className="text-xs text-slate-400">Google Maps calls, directions, and profile views.</p></div>
          </div>
        </section>

        {/* H2: SEO Packages for Businesses in Zirakpur */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              SEO Packages for Businesses in Zirakpur
            </h2>
            <p className="text-slate-300 text-base">
              Transparent, monthly plans designed for local growth without hidden contracts or lock-in periods:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Entry Level</span>
                <h3 className="text-xl font-bold text-white">Starter SEO Package</h3>
                <p className="text-xs text-slate-300">Ideal for single-location small businesses in Zirakpur needing initial search setup.</p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> 10 Target Keywords</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Google Business Profile Setup</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> On-Page & Technical Audit</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Monthly Ranking Report</li>
                </ul>
              </div>
              <SeoPageCTA variant="package" buttonText="Enquire Starter Package" packageName="Starter SEO Package" />
            </div>

            <div className="liquid-glass rounded-2xl p-6 border-2 border-[#A2C0E6] flex flex-col justify-between space-y-4 relative">
              <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#A2C0E6] text-[#060d16] text-[10px] font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div className="space-y-3">
                <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Local Dominance</span>
                <h3 className="text-xl font-bold text-white">Local SEO Package</h3>
                <p className="text-xs text-slate-300">Tailored for clinics, real estate, and retail outlets on VIP Road & Tricity.</p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> 25 Local Keywords</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Google Maps 3-Pack Optimization</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> 30 Local Citation Listings</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Review Generation Workflow</li>
                </ul>
              </div>
              <SeoPageCTA variant="primary" buttonText="Enquire Local SEO Package" packageName="Local SEO Package" />
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Rapid Scaling</span>
                <h3 className="text-xl font-bold text-white">Growth SEO Package</h3>
                <p className="text-xs text-slate-300">For ambitious brands expanding across Zirakpur, Chandigarh, Mohali & Panchkula.</p>
                <ul className="text-xs text-slate-300 space-y-2 pt-2">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> 50+ Targeted Keywords</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> High DA Link Building & Outreach</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> AEO & GEO AI Search Schema</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#A2C0E6]" /> Bi-Weekly Progress Calls</li>
                </ul>
              </div>
              <SeoPageCTA variant="package" buttonText="Enquire Growth Package" packageName="Growth SEO Package" />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Small Business SEO Package</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">E-Commerce SEO Package</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Enterprise SEO Package</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Custom SEO Package</h3></div>
          </div>
        </section>

        {/* H2: How Much Does SEO Cost in Zirakpur? */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            How Much Does SEO Cost in Zirakpur?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            SEO pricing in Zirakpur depends on the scope of work and business competition. On average, monthly SEO retainers range from ₹12,000 to ₹45,000+.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Factors That Affect SEO Pricing</h3><p className="text-xs text-slate-400">Industry competition, keyword difficulty, & target locations.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Website Size and Complexity</h3><p className="text-xs text-slate-400">Single landing page vs 1,000+ product e-commerce stores.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Business Competition</h3><p className="text-xs text-slate-400">Niche markets vs highly competitive real estate or dental niches.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Target Keywords</h3><p className="text-xs text-slate-400">Number of transactional and informational search terms.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Number of Locations</h3><p className="text-xs text-slate-400">Single ZIP code (140603) vs multi-city coverage in Tricity.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Current Website Authority</h3><p className="text-xs text-slate-400">Brand new domain vs established website with existing history.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">SEO Services Required</h3><p className="text-xs text-slate-400">Technical fixes only vs full content & link building execution.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Monthly SEO Investment vs Long-Term ROI</h3><p className="text-xs text-slate-400">Organic traffic compounding yields up to 10x ROI compared to paid ads.</p></div>
          </div>
        </section>

        {/* H2: SEO Company in Zirakpur vs SEO Freelancer */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            SEO Company in Zirakpur vs SEO Freelancer
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Understanding the difference between hiring a full-service agency versus a single freelancer:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">SEO Strategy & Expertise</h3>
              <p className="text-xs text-slate-300">A dedicated agency brings multi-disciplinary skills spanning web design, technical SEO, content writing, and link acquisition.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Team & Resources</h3>
              <p className="text-xs text-slate-300">Access to enterprise tools (Ahrefs, Semrush, Screaming Frog) that individual freelancers rarely maintain.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Scalability</h3>
              <p className="text-xs text-slate-300">Seamless capacity to scale your campaign as your business expands across Punjab and Tricity.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Reporting & Accountability</h3>
              <p className="text-xs text-slate-300">Dedicated monthly reporting protocols, transparent metrics, and direct point-of-contact communication.</p>
            </div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2 md:col-span-2">
              <h3 className="text-base font-bold text-white">Long-Term SEO Support</h3>
              <p className="text-xs text-slate-300">Continuous protection against Google algorithm updates with ongoing content refreshes and technical monitoring.</p>
            </div>
          </div>
        </section>

        {/* H2: Why Local Businesses Need Professional SEO Services */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Why Local Businesses Need Professional SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Improve Google Search Visibility</h3><p className="text-xs text-slate-400">Be visible right when local buyers are ready to purchase.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Generate Local Leads</h3><p className="text-xs text-slate-400">Capture direct calls, directions, and WhatsApp chats from VIP Road.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Reach High-Intent Customers</h3><p className="text-xs text-slate-400">Target people explicitly searching for your specific solutions.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-sm">Build Local Brand Authority</h3><p className="text-xs text-slate-400">Establish your business as the go-to provider in Zirakpur & Tricity.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 md:col-span-2 lg:col-span-2"><h3 className="font-bold text-white text-sm">Increase Website Conversions</h3><p className="text-xs text-slate-400">Turn casual site visitors into paying clients with high-converting layouts.</p></div>
          </div>
        </section>

        {/* H2: SEO Results & Performance Reporting */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            SEO Results & Performance Reporting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Monthly SEO Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Keyword Ranking Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Traffic & Conversion Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Technical SEO Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Local SEO Performance Reports</h3></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20"><h3 className="font-bold text-white text-xs">Recommendations for Continuous Growth</h3></div>
          </div>
        </section>

        {/* Case Studies & Testimonials Section */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">Proven Track Record</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Local Case Studies & Client Testimonials in Zirakpur
            </h2>
          </div>

          {/* Image Placeholder 4 */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-[#A2C0E6]/30 flex flex-col sm:flex-row items-center gap-4">
            <div className="p-4 bg-black/60 rounded-xl border border-[#A2C0E6]/20 text-center w-full sm:w-auto">
              <span className="text-[10px] font-mono text-[#A2C0E6] block">FILE NAME: seo-results-case-study-zirakpur.jpg</span>
              <p className="text-[11px] text-slate-400 mt-1">
                IMAGE ALT TEXT: Organic traffic growth chart showing 300% increase for Zirakpur business
              </p>
            </div>
            <p className="text-xs text-slate-300">
              Our data-backed organic strategies consistently turn local businesses into market leaders in Zirakpur, Chandigarh, Panchkula, and Mohali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &quot;Veiled Story doubled our qualified real estate flat buyer inquiries in Zirakpur within 60 days using targeted Local SEO and Google Maps optimization.&quot;
              </p>
              <div>
                <h4 className="text-sm font-bold text-white">Rajesh Sharma</h4>
                <p className="text-[11px] text-[#A2C0E6]">Royal Heights Infra, VIP Road Zirakpur</p>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &quot;Outstanding SEO company in Tricity. They brought our dental clinic to the #1 spot on Google Maps in Chandigarh and Panchkula.&quot;
              </p>
              <div>
                <h4 className="text-sm font-bold text-white">Dr. Vikas Verma</h4>
                <p className="text-[11px] text-[#A2C0E6]">Cosmetic Dental Studio, Tricity</p>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/25 space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &quot;Best website design and SEO agency! Their technical SEO optimization and lead generation funnel turned our home decor business around.&quot;
              </p>
              <div>
                <h4 className="text-sm font-bold text-white">Sanjay Gupta</h4>
                <p className="text-[11px] text-[#A2C0E6]">Urban Decor Studio, VIP Road</p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: Frequently Asked Questions About SEO Company in Zirakpur */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs text-[#A2C0E6] font-bold uppercase tracking-widest">AEO & Search Help</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
              Frequently Asked Questions About SEO Company in Zirakpur
            </h2>
            <p className="text-slate-300 text-base">
              Clear, honest answers to common questions asked by business owners looking for SEO services in Zirakpur:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">What Does an SEO Company in Zirakpur Do?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                An SEO company in Zirakpur helps local and national businesses rank higher on Google search results and Google Maps. At Veiled Story, we audit your website, fix technical issues, optimize keywords and content, build local citations, manage backlinks, and optimize for AI search overviews.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">How Much Does SEO Cost in Zirakpur?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                SEO cost in Zirakpur ranges from ₹12,000 to ₹45,000+ per month depending on website size, keyword competition, business goals, and geographical scope. We offer transparent starter, local, small business, and enterprise SEO packages.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">How Long Does SEO Take to Show Results?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Local SEO fixes and Google Maps optimization typically show initial ranking movements within 30 to 60 days. Competitive organic keywords usually show significant traffic and lead growth in 3 to 6 months.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Is SEO Better Than Google Ads?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Google Ads deliver instant paid leads, while SEO builds compounding, long-term organic traffic without paying per click. Combining both creates the ultimate performance marketing funnel. Learn more on our <Link href="/services/google-ads-agency" className="text-[#A2C0E6] underline">Google Ads Page</Link>.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Can SEO Help My Local Business Rank on Google Maps?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! Our local SEO services optimize your Google Business Profile (GBP), NAP consistency, customer reviews, local ZIP code keywords (140603), and localized backlinks to secure top #1 spots on Google Maps in Zirakpur & Tricity.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Do Small Businesses Need SEO?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes, small businesses need SEO to compete with larger brands locally. SEO helps small businesses get discovered by customers actively searching for nearby products and services in Zirakpur.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">What Is Included in Monthly SEO Services?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Monthly SEO services include technical maintenance, keyword tracking, content creation, on-page updates, Google Business Profile management, link building, and monthly performance reports.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Can You Improve My Existing Website&apos;s SEO?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes! We optimize existing websites on WordPress, Next.js, Shopify, and custom code bases without needing a complete redesign unless technically necessary.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Do You Provide Local SEO Services in Zirakpur?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Yes, our office is located on VIP Road, Zirakpur. We specialize in local SEO, Google Maps 3-pack rankings, and local business citations across Tricity.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2">
              <h3 className="text-base font-bold text-white">Can SEO Generate Leads for My Business?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Absolutely. By targeting high-intent buyer keywords, SEO attracts customers who are actively seeking your services, resulting in higher conversion rates.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="text-base font-bold text-white">How Do You Measure SEO Success?</h3><p className="text-xs text-slate-300">We track organic traffic growth, keyword rankings, Google Maps calls, CTR, and total qualified lead inquiries.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="text-base font-bold text-white">Do You Provide SEO Reports?</h3><p className="text-xs text-slate-300">Yes, we provide transparent monthly performance reports detailing keyword rank movements, traffic trends, and completed action items.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="text-base font-bold text-white">Can You Optimize Google Business Profile?</h3><p className="text-xs text-slate-300">Yes, we fully optimize your GBP listing with geotagged images, category selections, review responses, and regular GMB post updates.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="text-base font-bold text-white">What Is the Difference Between On-Page and Off-Page SEO?</h3><p className="text-xs text-slate-300">On-Page SEO optimizes elements directly on your website, while Off-Page SEO builds external authority through backlinks and citations.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="text-base font-bold text-white">What Is Technical SEO?</h3><p className="text-xs text-slate-300">Technical SEO improves site architecture, page load speed, Core Web Vitals, mobile responsiveness, and search engine crawlability.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="text-base font-bold text-white">How Do You Choose SEO Keywords?</h3><p className="text-xs text-slate-300">We analyze search volume, keyword difficulty, buyer intent, and local competitor ranking gaps to select winning keywords.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="text-base font-bold text-white">Can SEO Help My Business Appear in AI Search Results?</h3><p className="text-xs text-slate-300">Yes! Through GEO and AEO, we structure your brand data so AI models like ChatGPT, Gemini, and Perplexity recommend your business.</p></div>
            <div className="p-5 rounded-2xl liquid-glass border border-[#A2C0E6]/25 space-y-2"><h3 className="text-base font-bold text-white">What Are AEO and GEO in SEO?</h3><p className="text-xs text-slate-300">Answer Engine Optimization (AEO) targets direct Q&A snippets, while Generative Engine Optimization (GEO) optimizes content for AI LLM engine recommendations.</p></div>

          </div>
        </section>

        {/* H2: SEO Company Serving Zirakpur and Nearby Areas */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            SEO Company Serving Zirakpur and Nearby Areas
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We provide local SEO and digital marketing coverage across all major neighborhoods in Zirakpur and neighboring Tricity areas:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company in Dhakoli</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company in VIP Road Zirakpur</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company in Baltana</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company in Peer Muchalla</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company in Gazipur</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company in Lohgarh</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company in Patiala Road Zirakpur</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company Near Chandigarh</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company Near Panchkula</h3></div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">SEO Company Near Mohali</h3></div>
          </div>
        </section>

        {/* H2: Industries We Serve in Zirakpur */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Industries We Serve in Zirakpur
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Real Estate SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Hotel & Hospitality SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Restaurant SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Healthcare SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Education SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">E-Commerce SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">IT & Software SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Finance & Professional Services SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Travel & Tourism SEO</h3></div>
            <div className="p-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-center"><h3 className="font-bold text-white text-xs">Home Services SEO</h3></div>
          </div>
        </section>

        {/* H2: Get More Customers with Veiled Story SEO Services */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Get More Customers with Veiled Story SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Build Your Search Visibility</h3><p className="text-xs text-slate-400">Secure top Google rankings across high-volume local keywords.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Reach the Right Audience</h3><p className="text-xs text-slate-400">Connect directly with ready-to-buy customers in VIP Road and Tricity.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Generate More Qualified Leads</h3><p className="text-xs text-slate-400">Drive phone calls, store visits, and WhatsApp inquiries daily.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Turn Organic Traffic into Customers</h3><p className="text-xs text-slate-400">Convert search traffic with optimized, high-converting landing pages.</p></div>
          </div>
        </section>

        {/* H2: Get a Free SEO Consultation in Zirakpur */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Get a Free SEO Consultation in Zirakpur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Request Your Free SEO Audit</h3><p className="text-xs text-slate-400">Get a 25+ point technical audit of your current website.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Discuss Your Business Goals</h3><p className="text-xs text-slate-400">Speak directly with Senior Specialist Vishal Sahani.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Get a Customized SEO Strategy</h3><p className="text-xs text-slate-400">Receive a 90-day organic growth roadmap tailored to your budget.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Start Growing Your Organic Visibility</h3><p className="text-xs text-slate-400">Outrank local competitors and dominate search results in Zirakpur.</p></div>
          </div>
        </section>

        {/* H2: Choose Veiled Story as Your SEO Partner in Zirakpur */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight border-l-4 border-[#A2C0E6] pl-4">
            Choose Veiled Story as Your SEO Partner in Zirakpur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Strategy-First SEO</h3><p className="text-xs text-slate-400">Every task aligns with business revenue and lead goals.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Ethical & Sustainable SEO</h3><p className="text-xs text-slate-400">100% white-hat Google Search Central compliance.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Transparent Communication</h3><p className="text-xs text-slate-400">Direct phone and WhatsApp access with your dedicated SEO specialist.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1"><h3 className="font-bold text-white text-sm">Measurable SEO Growth</h3><p className="text-xs text-slate-400">Clear monthly reporting tracking rankings, traffic, and leads.</p></div>
            <div className="p-4 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 space-y-1 md:col-span-2 lg:col-span-2"><h3 className="font-bold text-white text-sm">Long-Term Digital Growth Partnership</h3><p className="text-xs text-slate-400">Continuous refinement to keep your brand #1 as search engines evolve.</p></div>
          </div>
        </section>

        {/* Inline Lead Capture Section */}
        <section className="pt-6">
          <SeoPageCTA variant="inline-form" />
        </section>

        {/* H2: Ready to Grow Your Business with SEO? */}
        <section className="liquid-glass rounded-3xl p-8 sm:p-12 border border-[#A2C0E6]/40 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#A2C0E6]/10 to-transparent pointer-events-none" />
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight relative z-10">
            Ready to Grow Your Business with SEO?
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-[#A2C0E6] relative z-10">
            Talk to Veiled Story Today About Your SEO Growth Strategy
          </h3>

          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed relative z-10">
            Don&apos;t let your competitors capture your local buyers in Zirakpur and Tricity. Partner with Vishal Sahani and the Veiled Story team to build your organic search dominance today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 relative z-10">
            {/* Primary CTA */}
            <SeoPageCTA variant="primary" buttonText="Get Free SEO Consultation" />
            {/* Secondary CTA */}
            <SeoPageCTA variant="secondary" buttonText="Request Free SEO Audit" />
            {/* Lead CTA */}
            <SeoPageCTA variant="package" buttonText="Get Custom SEO Package & Pricing" packageName="Custom SEO Strategy" />
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-[#A2C0E6]/20 relative z-10">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#A2C0E6]" />
              <span>SCO 14, VIP Road, High Street Market, Zirakpur</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#A2C0E6]" />
              <span>{SITE_CONFIG.phone}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#A2C0E6]" />
              <span>{SITE_CONFIG.email}</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
