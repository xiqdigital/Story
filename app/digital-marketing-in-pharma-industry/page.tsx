import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/data';
import { SeoPageCTA } from '@/components/SeoPageCTA';
import { PharmaInteractiveCalculator } from '@/components/PharmaInteractiveCalculator';
import { PharmaAccordion, AccordionItem } from '@/components/PharmaAccordion';
import {
  Pill,
  Stethoscope,
  Building2,
  ShieldCheck,
  TrendingUp,
  Search,
  Sparkles,
  Award,
  Users,
  BarChart3,
  Globe2,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
  FileText,
  HelpCircle,
  Clock,
  Layers,
  Target,
  Zap,
  Microscope,
  HeartPulse,
  Activity,
  Lock,
  Share2,
  Compass,
  Star,
  Check,
  Code,
  Cpu,
  Smartphone,
  Palette,
  ShoppingCart,
  Database,
  Cloud,
  Monitor,
  Layout,
  Video,
  FileSpreadsheet,
  Boxes,
  Workflow,
  FileCode,
  Terminal,
  Settings,
  Sparkle,
  MessageSquare,
  Quote
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Digital Marketing in Pharma Industry | Pharma SEO & B2B Lead Agency',
  description:
    'Scale pharma manufacturers & PCD franchises with high-ROI digital marketing, SEO, AEO/GEO, Google & Meta Ads, TallyPrime ERP, Web & Mobile Apps by Veiled Story.',
  keywords: [
    'Digital Marketing in Pharma Industry',
    'Pharma Digital Marketing Agency',
    'PCD Pharma Franchise Marketing',
    'Pharmaceutical B2B Lead Generation',
    'Pharma SEO Services',
    'On Page SEO Pharma',
    'Technical SEO Pharma',
    'Off Page SEO Pharma',
    'AEO GEO AI Overview Pharma',
    'Google Ads for Pharma',
    'Meta Ads Facebook Instagram Pharma',
    'Pharma Website Designing',
    'Custom Pharma Web Development',
    'Pharma TallyPrime Integration',
    'Pharma Shopify Ecommerce',
    'React Native Flutter Pharma Mobile Apps',
    'Pharma Packaging & Logo Designing',
    'Figma Photoshop Illustrator Canva After Effects Pharma',
    'Baddi Pharma Digital Marketing',
    'Chandigarh Pharma SEO Agency'
  ],
  authors: [{ name: 'Vishal Sahani', url: 'https://veiledstory.com/about' }],
  creator: 'Veiled Story',
  publisher: 'Veiled Story',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://veiledstory.com/digital-marketing-in-pharma-industry',
  },
  openGraph: {
    title: 'Digital Marketing in Pharma Industry | Pharma SEO & Growth Agency',
    description:
      'End-to-end digital marketing, SEO, AEO/GEO, Performance Ads, TallyPrime ERP, Ecommerce, and Apps for pharmaceutical enterprises.',
    url: 'https://veiledstory.com/digital-marketing-in-pharma-industry',
    siteName: 'Veiled Story',
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2026-01-15T09:00:00+05:30',
    modifiedTime: '2026-08-16T15:00:00+05:30',
    authors: ['https://veiledstory.com/about'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing in Pharma Industry | Veiled Story',
    description:
      'Full-stack digital marketing and technology solutions for pharmaceutical manufacturers and PCD brands.',
    creator: '@veiledstory',
  },
};

export default function DigitalMarketingPharmaPage() {
  const masterPharmaSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://veiledstory.com/#organization',
        name: 'Veiled Story',
        legalName: 'Veiled Story Digital Innovations',
        url: 'https://veiledstory.com',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://veiledstory.com/#logo',
          url: 'https://veiledstory.com/logo.png',
          caption: 'Veiled Story Digital Marketing & Technology Agency',
        },
        telephone: SITE_CONFIG.phone,
        email: SITE_CONFIG.email,
        founder: {
          '@type': 'Person',
          name: 'Vishal Sahani',
          jobTitle: 'Senior Growth & Healthcare Marketing Strategist',
          url: 'https://veiledstory.com/about',
        },
        sameAs: [
          'https://www.linkedin.com/company/veiledstory',
          'https://www.facebook.com/veiledstory',
          'https://www.instagram.com/veiledstory',
        ],
        knowsAbout: [
          'Digital Marketing in Pharma Industry',
          'Pharmaceutical B2B Lead Generation',
          'PCD Pharma Franchise Growth',
          'Search Engine Optimization (SEO)',
          'Answer Engine Optimization (AEO)',
          'Generative Engine Optimization (GEO)',
          'AI Overview Optimization',
          'TallyPrime ERP Pharma Integration',
          'Healthcare Application Development',
        ],
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://veiledstory.com/#localbusiness',
        name: 'Veiled Story - Pharma Digital Marketing & Tech Solutions',
        image: 'https://veiledstory.com/logo.png',
        url: 'https://veiledstory.com/digital-marketing-in-pharma-industry',
        telephone: SITE_CONFIG.phone,
        priceRange: '₹₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'VIP Road, Zirakpur & Tricity Hub',
          addressLocality: 'Zirakpur',
          addressRegion: 'Punjab',
          postalCode: '140603',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 30.6425,
          longitude: 76.8173,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
          },
        ],
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Baddi Industrial Belt' },
          { '@type': 'AdministrativeArea', name: 'Chandigarh' },
          { '@type': 'AdministrativeArea', name: 'Panchkula' },
          { '@type': 'AdministrativeArea', name: 'Mohali' },
          { '@type': 'AdministrativeArea', name: 'Zirakpur' },
          { '@type': 'Country', name: 'India' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '88',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Dr. Rajiv Aggarwal',
            },
            datePublished: '2026-02-10',
            reviewBody:
              'Veiled Story and Vishal Sahani completely transformed our WHO-GMP manufacturing inquiries in Baddi. Our monthly contract manufacturing RFQs jumped by over 400% with high quality B2B leads.',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sandeep Sharma',
            },
            datePublished: '2026-03-24',
            reviewBody:
              'Their PCD franchise lead generation and TallyPrime batch sync system helped us appoint 85+ exclusive district monopoly partners across 7 states in under 6 months.',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Full-Spectrum Pharmaceutical Digital & Tech Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pharma SEO (On-Page, Technical, Off-Page)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEO, GEO & Google AI Overview Optimization' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile Optimization for Pharma' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'High-Intent Google Ads & Meta Ads (FB/IG)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Optimization (SMO) & Organic Branding' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'High-Ticket PCD & B2B Lead Generation' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pharma Web Development & Custom UI/UX Design' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pharma TallyPrime Accounting & Batch Management' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify, Magento & WooCommerce Pharma Stores' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AWS Cloud Hosting & HIPAA/DISHA Compliance' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Apps (React Native, Flutter, Swift, Kotlin)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Packaging, Logo & 3D After-Effects MOA Video Detailing' } },
          ],
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://veiledstory.com/digital-marketing-in-pharma-industry#service',
        name: 'Digital Marketing & Technology Solutions in Pharma Industry',
        serviceType: 'Pharmaceutical Digital Marketing & Full-Stack Tech Development',
        category: 'Healthcare & Pharmaceutical B2B Marketing',
        provider: {
          '@id': 'https://veiledstory.com/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        description:
          'Comprehensive 360-degree digital marketing, On-Page/Technical/Off-Page SEO, AEO, GEO, Google AI Overview Optimization, Google & Meta Ads, Social Media Optimization, Graphic & Logo Design, Web & Mobile App Development (React Native, Flutter, Swift, Kotlin), TallyPrime ERP Services, Shopify & Magento Ecommerce, AWS Cloud Architecture, and After-Effects 3D MOA Animation for the pharmaceutical sector.',
      },
      {
        '@type': 'NewsArticle',
        '@id': 'https://veiledstory.com/digital-marketing-in-pharma-industry#newsarticle',
        headline: 'Digital Marketing in Pharma Industry: Complete 2026 Strategic Blueprint for B2B & HCP Growth',
        description:
          'Authoritative healthcare strategy guide detailing how pharmaceutical companies leverage ethical SEO, AEO/GEO AI search, custom web architecture, TallyPrime ERP, and compliant advertising.',
        image: ['https://veiledstory.com/images/pharma-digital-marketing-growth-funnel-2026.jpg'],
        datePublished: '2026-01-15T09:00:00+05:30',
        dateModified: '2026-08-16T15:00:00+05:30',
        author: {
          '@type': 'Person',
          name: 'Vishal Sahani',
          jobTitle: 'Senior Digital Marketing & Healthcare Growth Consultant',
          url: 'https://veiledstory.com/about',
        },
        publisher: {
          '@id': 'https://veiledstory.com/#organization',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://veiledstory.com/digital-marketing-in-pharma-industry',
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '#aeo-summary', '#core-services'],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://veiledstory.com/digital-marketing-in-pharma-industry#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://veiledstory.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://veiledstory.com/services' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Digital Marketing in Pharma Industry',
            item: 'https://veiledstory.com/digital-marketing-in-pharma-industry',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://veiledstory.com/digital-marketing-in-pharma-industry#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How is digital marketing in the pharma industry different from other sectors?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pharma digital marketing operates under stringent regulatory compliance including CDSCO guidelines, Drugs and Magic Remedies Act, and YMYL search algorithms. It requires dual-target funnels: B2B acquisition for PCD distributors and third-party contracts, alongside ethical educational outreach for Healthcare Professionals (HCPs) without misleading clinical claims.',
            },
          },
          {
            '@type': 'Question',
            name: 'What services does Veiled Story provide for pharmaceutical companies?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Veiled Story delivers an end-to-end technology and growth stack: On-Page, Technical & Off-Page SEO; AEO, GEO & AI Overview Optimization; Google Business Profile Optimization; Google & Meta Ads; Social Media Optimization; Lead Generation; Custom Web & UI/UX Design; WordPress, Shopify & Magento Ecommerce; TallyPrime Pharma Accounting Integration; AWS Cloud Architecture; Mobile App Development (React Native, Flutter, Swift, Kotlin); and Creative Visual Design using Figma, Photoshop, Illustrator, Canva, and After Effects for 3D MOA animations.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can pharmaceutical companies run paid ads on Google and Meta in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, with specific compliance protocols. Prescription (Rx) drugs cannot be advertised directly to consumers. However, B2B franchise promotion, third-party contract manufacturing capabilities, OTC wellness products, nutraceuticals, and medical education campaigns for doctors can be legitimately run using verified certifications and compliant ad copy.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you integrate TallyPrime with pharma e-commerce and distributor portals?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We configure bidirectional TallyPrime integrations that synchronize real-time stock levels, batch numbers, manufacturing/expiry dates, GST e-invoices, and credit limits between your warehouse ERP and online B2B distributor ordering systems.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you ensure medical content passes Google’s E-E-A-T and AI Overview standards?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'All therapeutic content is developed under our Medical Review Board protocol, incorporating references to PubMed, clinical trial registries, and peer-reviewed journals. We embed MedicalWebPage Schema and clear author/reviewer credentials to satisfy Google’s strict YMYL search quality guidelines and trigger citations in Perplexity, Claude, and Google AI Overviews.',
            },
          },
        ],
      },
    ],
  };

  const complianceAccordionItems: AccordionItem[] = [
    {
      id: 'cdsco',
      title: 'CDSCO & Drugs and Cosmetics Act Compliance Architecture',
      badge: 'Regulatory Safety',
      subtitle: 'Ensuring 100% legal safety for all digital promotional assets, packaging designs, and landing pages.',
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <p>
            In India, advertising pharmaceuticals is strictly governed by the Drugs and Cosmetics Act of 1940 and the Drugs and Magic Remedies (Objectionable Advertisements) Act. We enforce mandatory legal guardrails:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Clear Rx vs OTC Demarcation:</strong> Prescription molecules are restricted to password-protected or HCP-verified educational portals; direct-to-consumer promotion is never run for Schedule H/H1/X formulations.</li>
            <li><strong>Fair Balance & Safety Disclaimers:</strong> All medical communication includes balanced indications, dosage limitations, contraindications, and mandatory regulatory disclaimers.</li>
            <li><strong>Truthful Claim Verification:</strong> Eliminating absolute superlatives (e.g., &quot;100% cure&quot;, &quot;guaranteed relief&quot;) to shield your brand from regulatory notices and ad account suspensions.</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'ymyl_eeat',
      title: 'Google YMYL & Medical E-E-A-T Algorithm Optimization',
      badge: 'Search Authority',
      subtitle: 'Achieving top organic rankings in high-competition healthcare and pharmaceutical search queries.',
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <p>
            Google categorizes healthcare and pharmaceutical queries under its most rigorous standard: <strong>Your Money or Your Life (YMYL)</strong>. To rank on page one, websites must demonstrate undeniable Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-[#060d16] border border-slate-800">
              <div className="font-bold text-white text-xs">Medical Review Protocols</div>
              <div className="text-[11px] text-slate-400 mt-1">Articles vetted with named medical reviewers, qualifications, and direct PubMed citations.</div>
            </div>
            <div className="p-3 rounded-xl bg-[#060d16] border border-slate-800">
              <div className="font-bold text-white text-xs">MedicalWebPage Schema</div>
              <div className="text-[11px] text-slate-400 mt-1">Structured data declaring drug indications, active chemical moieties, and manufacturer credentials.</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'pharmacovigilance',
      title: 'Adverse Drug Reaction (ADR) & Social Listening Guardrails',
      badge: 'Risk Management',
      subtitle: 'Proactive pharmacovigilance monitoring on all active digital channels and social pages.',
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <p>
            When pharma companies launch social media channels, patient community groups, or interactive comment sections, any reported side effect qualifies as a potential Adverse Event (AE) that must be reported under standard Pharmacovigilance Programme of India (PvPI) guidelines.
          </p>
          <p>
            Veiled Story establishes automated keyword listening filters and a 24-hour escalation protocol that alerts your medical safety officer the moment an adverse experience is cited online, ensuring immediate documentation and regulatory compliance.
          </p>
        </div>
      ),
    },
    {
      id: 'hcp_privacy',
      title: 'HCP Identity Verification & Data Privacy (DISHA / DPDP / HIPAA Alignment)',
      badge: 'Data Security',
      subtitle: 'Securing doctor and distributor data with enterprise-grade encryption and consent management.',
      content: (
        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <p>
            Engaging physicians requires robust credentialing (MCI/NMC registration verification) before granting access to clinical trials, electronic product monographs, and CME modules.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>End-to-end encrypted databases for lead capture and webinar registries.</li>
            <li>Double opt-in consent mechanisms compliant with India&apos;s Digital Personal Data Protection (DPDP) Act.</li>
            <li>Zero unauthorized third-party tracking scripts on sensitive medical portal environments.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#060d16] text-slate-100 selection:bg-[#A2C0E6] selection:text-[#060d16] overflow-x-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(masterPharmaSchema) }}
      />

      <Navbar />

      <main className="relative pt-24 pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#1E3E62]/30 via-[#A2C0E6]/10 to-transparent blur-3xl pointer-events-none -z-10" />

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-xs text-slate-400">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
            <li>
              <Link href="/services" className="hover:text-white transition">Services</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-slate-600" /></li>
            <li className="text-[#A2C0E6] font-medium">Digital Marketing in Pharma Industry</li>
          </ol>
        </nav>

        {/* AUTHOR & VERIFICATION BADGE (E-E-A-T) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#09131f] border border-[#A2C0E6]/30 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Medically Vetted Content</span>
            <span className="text-slate-600">|</span>
            <span>Author: <strong className="text-white">Vishal Sahani</strong> (Senior Healthcare Strategist)</span>
            <span className="text-slate-600">|</span>
            <span>Updated: <strong className="text-[#A2C0E6]">August 2026</strong></span>
          </div>
        </div>

        {/* HERO SECTION */}
        <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3E62]/60 border border-[#A2C0E6]/40 text-[#A2C0E6] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-[#1E3E62]/20">
              <Pill className="w-4 h-4 text-[#A2C0E6]" />
              360° Pharmaceutical Digital Growth & Technology Powerhouse
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Digital Marketing in Pharma Industry for High-Value{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A2C0E6] via-white to-[#7fa1d1]">
                B2B Contracts & Doctor Engagement
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
              The pharmaceutical landscape has fundamentally transformed. Beyond traditional field Medical Representatives (MRs), successful pharma manufacturers, PCD franchises, and healthcare brands now dominate search engines, digital e-detailing, and automated distributor acquisition funnels. Veiled Story builds 100% CDSCO-compliant, high-conversion growth ecosystems combining <strong>SEO, AEO/GEO, Performance Ads, TallyPrime ERP, Custom UI/UX, Mobile Apps, and 3D Motion Detailing</strong> for pharmaceutical leaders in Chandigarh, Baddi, and across India.
            </p>

            {/* Quick Hero Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
              <div className="p-3.5 rounded-2xl bg-[#09131f]/80 border border-[#A2C0E6]/25 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#A2C0E6]">180+</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Pharma Brands Scaled</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#09131f]/80 border border-[#A2C0E6]/25 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">₹45 Cr+</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Contract Pipeline Built</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#09131f]/80 border border-[#A2C0E6]/25 text-center">
                <div className="text-xl sm:text-2xl font-black text-white">14,000+</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Doctors & HCPs Reached</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#09131f]/80 border border-[#A2C0E6]/25 text-center">
                <div className="text-xl sm:text-2xl font-black text-[#A2C0E6]">100%</div>
                <div className="text-[11px] text-slate-300 mt-0.5">CDSCO / FDA Compliant</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <SeoPageCTA variant="primary" buttonText="Schedule Free Pharma Growth Audit" />
              <Link
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Vishal Sahani, I want to discuss Digital Marketing, ERP & Technology solutions for my Pharmaceutical / PCD Franchise business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 font-bold text-sm transition inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                WhatsApp Pharma Strategist (+91 79054 03546)
              </Link>
            </div>
          </div>
        </section>

        {/* (SEO, GEO & AEO) QUICK TAKEAWAY SUMMARY BOX */}
        <section id="aeo-summary" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0c1c30] to-[#050b13] border-2 border-[#A2C0E6]/40 shadow-2xl text-slate-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#A2C0E6]/20 flex items-center justify-center text-[#A2C0E6]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#A2C0E6]">
                  AEO & GEO Executive Takeaway
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Quick Summary: Digital Marketing & Technology in Pharma Industry at a Glance
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-[#060d16]/70 border border-slate-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5 text-xs text-[#A2C0E6]">
                  <Building2 className="w-4 h-4" /> B2B PCD Franchise & Contract Mfg
                </div>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Capturing high-intent searches from distributors seeking monopoly rights and third-party buyers needing WHO-GMP formulation batches through targeted{' '}
                  <Link href="/services/lead-generation" className="text-[#A2C0E6] hover:underline font-medium">B2B Lead Generation</Link> and{' '}
                  <Link href="/services/google-ads-agency" className="text-[#A2C0E6] hover:underline font-medium">Google Ads</Link>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#060d16]/70 border border-slate-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5 text-xs text-[#A2C0E6]">
                  <Stethoscope className="w-4 h-4" /> HCP Doctor Tele-Detailing & Apps
                </div>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Scientific peer-reviewed case briefs, digital sampling workflows, and interactive mobile apps built with React Native and Flutter for specialist physicians.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#060d16]/70 border border-slate-800 space-y-1.5">
                <div className="font-bold text-white flex items-center gap-1.5 text-xs text-[#A2C0E6]">
                  <ShieldCheck className="w-4 h-4" /> Regulatory, YMYL & AI Discovery
                </div>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Full alignment with CDSCO, Drugs & Magic Remedies Act, Medical Review Board credentials, and next-gen{' '}
                  <Link href="/services/answer-engine-optimization" className="text-[#A2C0E6] hover:underline font-medium">AEO</Link> &{' '}
                  <Link href="/services/generative-engine-optimization" className="text-[#A2C0E6] hover:underline font-medium">GEO</Link> indexing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE SECTION 1: PHARMA DIGITAL MARKETING GROWTH FUNNEL */}
        <section id="funnel-architecture" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl p-6 sm:p-8 bg-[#09131f] border border-[#A2C0E6]/30 shadow-2xl relative overflow-hidden space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3E62]/40 text-[#A2C0E6] text-xs font-semibold w-fit">
                <Microscope className="w-3.5 h-3.5" /> High-Resolution Strategy Visual Architecture
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Omnichannel Funnel Schema</span>
            </div>

            <div className="relative w-full aspect-[16/9] max-h-[460px] rounded-2xl overflow-hidden border border-[#A2C0E6]/30 shadow-inner group bg-slate-950">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80"
                alt="Complete omnichannel digital marketing conversion funnel for pharmaceutical manufacturers and PCD franchises showing HCP awareness, B2B distributor acquisition, and compliant conversion tracking by Veiled Story Vishal Sahani"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
                referrerPolicy="no-referrer"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/30 to-transparent pointer-events-none" />

              {/* Floating Informational Badges on Image */}
              <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#060d16]/80 text-[#A2C0E6] border border-[#A2C0E6]/40 backdrop-blur-md">
                  Pharma B2B &amp; HCP Growth Framework
                </span>
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                  CDSCO &amp; YMYL Certified
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#060d16]/85 border border-[#A2C0E6]/25 backdrop-blur-md space-y-1">
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Pharmaceutical Omnichannel Acquisition Funnel</span>
                  <span className="text-xs text-[#A2C0E6] font-mono hidden sm:inline">Veiled Story Core Framework</span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2">
                  Synchronizing search intent (SEO &amp; AEO), distributor franchise acquisition, doctor e-detailing flipbooks, and ERP inventory automation into a compliant growth engine.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <span className="text-[11px] px-3 py-1 rounded-lg bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/20">100% CDSCO Compliant</span>
              <span className="text-[11px] px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">B2B + HCP Dual Funnel</span>
              <span className="text-[11px] px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">Google YMYL Schema Ready</span>
            </div>
          </div>
        </section>

        {/* SECTION: TRADITIONAL MR MARKETING VS DIGITAL PHARMA MARKETING */}
        <section id="comparison" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Traditional MR Detailing Must Evolve to Omnichannel Digital Marketing
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              While field sales teams remain essential, relying solely on physical medical representatives creates severe geographic bottlenecks, escalating travel expenses, and zero data visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Column */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#09111c] border border-red-950/60 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-red-900/30 pb-3">
                <h3 className="text-lg font-bold text-red-300 flex items-center gap-2">
                  <span>Traditional Field MR Detailing</span>
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-950/60 text-red-400 border border-red-800/40">
                  Legacy Model
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Limited Territory Coverage:</strong> An MR can realistically visit only 8–12 clinics daily, restricted by traffic and doctor clinic timings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>High Cost Per Touchpoint:</strong> Monthly salaries, daily travel allowances (TA/DA), visual aid printing, and physical sample wastage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Zero Analytics & Attribution:</strong> No empirical data on whether a doctor actually reviewed clinical trial brochures or prescribing leaflets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Distributor Bottlenecks:</strong> Waiting months for trade fairs to sign 2–3 new PCD franchise district stockists.</span>
                </li>
              </ul>
            </div>

            {/* Modern Omnichannel Column */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#0c1a2c] border-2 border-[#A2C0E6]/50 shadow-2xl shadow-[#A2C0E6]/10 space-y-4 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#A2C0E6] text-[#060d16] font-extrabold text-[10px] uppercase tracking-wider">
                Veiled Story Growth Engine
              </div>
              <div className="flex items-center justify-between border-b border-[#A2C0E6]/25 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Omnichannel Pharma Digital Marketing</span>
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  High ROI & Scale
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Nationwide 24/7 Discovery:</strong> Thousands of verified doctors and distributors discover your formulation catalog on Google and LinkedIn simultaneously.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>60–80% Lower Lead Acquisition Cost:</strong> Scalable digital search ads and organic SEO drive pre-qualified B2B franchise inquiries directly to WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Granular Scientific Engagement Tracking:</strong> Track exact time spent on clinical trial PDF downloads, 3D mechanism videos, and e-detailing slides.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Rapid Monopoly Distributor Expansion:</strong> Sign 10–25+ verified district franchise partners every single month on automated autopilot.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MASTER SECTION: COMPREHENSIVE PHARMACEUTICAL SERVICES & TECHNOLOGY MATRIX */}
        {/* ========================================================================= */}
        <section id="core-services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3E62]/60 border border-[#A2C0E6]/40 text-[#A2C0E6] text-xs font-bold uppercase tracking-wider">
              <Boxes className="w-4 h-4 text-[#A2C0E6]" /> Comprehensive Pharmaceutical Service Portfolio
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Complete 360° Digital, Development, ERP & Creative Ecosystem for Pharma
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
              From organic search engine dominance and AI answer engines to custom web architectures, TallyPrime enterprise accounting, native doctor mobile apps, and 3D medical motion graphics—explore our fully integrated pharmaceutical growth services.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* PILLAR 1: SEARCH ENGINE & GENERATIVE AI DOMINATION */}
            <div className="rounded-3xl p-6 sm:p-10 bg-[#08121f] border border-[#A2C0E6]/30 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A2C0E6]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3E62] border border-[#A2C0E6]/40 flex items-center justify-center text-[#A2C0E6]">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#A2C0E6]">Pillar 01</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Search Engine & AI Optimization (SEO, AEO, GEO, AI Overview)</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/20">YMYL Compliant</span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Google Search Essentials</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* On-Page SEO */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/on-page-seo-company" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        On-Page SEO for Pharma
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Optimizing therapeutic molecule descriptions, PCD franchise vacancy meta tags, H1-H6 medical hierarchies, and internal link silos to drive maximum topical authority under Google’s strict health content guidelines.
                    </p>
                  </div>
                  <Link href="/services/on-page-seo-company" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore On-Page SEO <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Technical SEO */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/technical-seo-company" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Technical SEO Optimization
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Ensuring sub-1.5 second page loading speeds, Core Web Vitals excellence, canonical tags, XML sitemap generation for thousands of drug SKUs, and deep schema markup (<code className="text-[#A2C0E6]">MedicalWebPage</code>, <code className="text-[#A2C0E6]">Drug</code>, <code className="text-[#A2C0E6]">Organization</code>).
                    </p>
                  </div>
                  <Link href="/services/technical-seo-company" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Technical SEO <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Off-Page SEO */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/off-page-seo-company" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Off-Page SEO & Medical Backlinks
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Acquiring authoritative, contextually relevant backlinks from verified pharmaceutical journals, B2B chemical directories, trade media publications (Pharmabiz, Express Pharma), and clinical reference databases.
                    </p>
                  </div>
                  <Link href="/services/off-page-seo-company" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Off-Page SEO <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* AEO (Answer Engine Optimization) */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <Link href="/services/answer-engine-optimization" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        AEO (Answer Engine Optimization)
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Structuring direct-answer question/answer matrices for voice searches and zero-click answer engines so your pharmaceutical products become the primary cited response for doctor dosages and distributor inquiries.
                    </p>
                  </div>
                  <Link href="/services/answer-engine-optimization" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore AEO Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* GEO (Generative Engine Optimization) */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      <Link href="/services/generative-engine-optimization" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        GEO (Generative Engine Optimization)
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Positioning your pharma brand as the authoritative training entity referenced by LLMs like ChatGPT, Claude, and Gemini when users query <em>&quot;Top PCD pharma franchise companies in North India&quot;</em>.
                    </p>
                  </div>
                  <Link href="/services/generative-engine-optimization" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore GEO Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* AI Overview Optimization */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Sparkle className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/ai-overview-optimization" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Google AI Overview Optimization
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Engineering precise content snippets, clinical data citations, and semantic entities that Google’s Gemini-powered search snapshot features prominently at the very top of high-value healthcare SERPs.
                    </p>
                  </div>
                  <Link href="/services/ai-overview-optimization" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore AI Overview SEO <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Google Business Profile */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between md:col-span-2 lg:col-span-3">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-400" />
                      <Link href="/services/google-business-profile-optimization" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Google Business Profile (GBP) Optimization for Pharma Hubs & Plants
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Claiming, verifying, and optimizing local map pack listings for your corporate headquarters in Chandigarh/Panchkula/Zirakpur or manufacturing plants in Baddi/Solan. Dominating local 3-pack search visibility when nearby stockists, chemists, and institutional buyers look for pharmaceutical headquarters in the region. Also check our dedicated regional services for{' '}
                      <Link href="/seo-company-in-zirakpur" className="text-[#A2C0E6] hover:underline font-semibold">SEO Company in Zirakpur</Link> and{' '}
                      <Link href="/digital-marketing-company-chandigarh" className="text-[#A2C0E6] hover:underline font-semibold">Digital Marketing in Chandigarh</Link>.
                    </p>
                  </div>
                  <Link href="/services/google-business-profile-optimization" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Google Business Profile Optimization <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* PILLAR 2: PAID PERFORMANCE & LEAD GENERATION */}
            <div className="rounded-3xl p-6 sm:p-10 bg-[#08121f] border border-[#A2C0E6]/30 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A2C0E6]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3E62] border border-[#A2C0E6]/40 flex items-center justify-center text-[#A2C0E6]">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#A2C0E6]">Pillar 02</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Performance Paid Ads, SMO & Lead Generation</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">High Commercial Intent</span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/20">Zero Policy Violations</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Google Ads */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/google-ads-agency" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Google Ads (PPC)
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      High-converting Search, Display, and YouTube ad campaigns targeting keywords like <em>&quot;PCD pharma franchise monopoly rights&quot;</em> and <em>&quot;third party pharma manufacturing in Baddi&quot;</em>.
                    </p>
                  </div>
                  <Link href="/services/google-ads-agency" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Google Ads <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Meta Ads */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/meta-ads-agency" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Meta Ads (FB & IG)
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Compliant Facebook & Instagram ads for B2B distributor recruitment, visual-aid product launches, and OTC wellness brand scaling without ad account suspensions.
                    </p>
                  </div>
                  <Link href="/services/meta-ads-agency" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Meta Ads <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Social Media Optimization */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/social-media-optimization" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Social Media Optimization
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Building corporate pharmaceutical prestige, showcasing WHO-GMP plant certifications, sharing clinical trial breakthroughs, and nurturing physician engagement across LinkedIn & YouTube.
                    </p>
                  </div>
                  <Link href="/services/social-media-optimization" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore SMO Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Lead Generation */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <Link href="/services/lead-generation" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        High-Ticket B2B Leads
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Custom lead funnels with instant drug license number verification, minimum investment validation, and automatic WhatsApp CRM distribution to your sales managers.
                    </p>
                  </div>
                  <Link href="/services/lead-generation" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Lead Generation <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* PILLAR 3: WEB DEVELOPMENT, UI/UX & E-COMMERCE */}
            <div className="rounded-3xl p-6 sm:p-10 bg-[#08121f] border border-[#A2C0E6]/30 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A2C0E6]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3E62] border border-[#A2C0E6]/40 flex items-center justify-center text-[#A2C0E6]">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#A2C0E6]">Pillar 03</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Pharma Web Development, UI/UX & E-Commerce</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/20">Next.js & WordPress</span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">B2B Wholesale Portals</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Custom Web Designing & UI/UX */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Layout className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/custom-web-designing" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Custom Web & UI/UX Designing
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Bespoke pharmaceutical website architectures featuring interactive molecule viewers, visual-aid digital flipbooks, downloadable product price lists, and physician portals. Also see our{' '}
                      <Link href="/services/pharma-website-designing" className="text-[#A2C0E6] underline">Pharma Website Designing</Link> and{' '}
                      <Link href="/services/pharmacy-web-designing" className="text-[#A2C0E6] underline">Pharmacy Web Design</Link>.
                    </p>
                  </div>
                  <Link href="/services/custom-web-designing" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Custom Web Design <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Manufacturing Web Development */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/manufacturing-web-development" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Manufacturing Web Development
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Industrial-grade digital showcases for formulation plants, softgel facilities, sterile injectable lines, and R&amp;D laboratories in Baddi and Pan-India.
                    </p>
                  </div>
                  <Link href="/services/manufacturing-web-development" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Manufacturing Web <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* WordPress Web Development */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-[#A2C0E6]" />
                      <Link href="/services/wordpress-web-development" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        WordPress Pharma Development
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Custom, high-speed WordPress themes tailored for pharmaceutical catalogs with 2,000+ drug formulations, therapeutic filters (Cardio, Diabetic, Derma, Gynae, Ortho), and SEO siloing.
                    </p>
                  </div>
                  <Link href="/services/wordpress-web-development" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore WordPress Web <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Shopify & Magento Ecommerce */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-emerald-400" />
                      <Link href="/services/e-commerce-website-design" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        Shopify &amp; Magento Pharma Ecommerce
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      High-converting Shopify D2C stores for OTC vitamins, protein supplements, and Ayurvedic brands, alongside Magento enterprise wholesale portals for bulk distributor ordering with Minimum Order Quantity (MOQ) rules.
                    </p>
                  </div>
                  <Link href="/services/e-commerce-website-design" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore Ecommerce Design <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* SEO-Friendly Architecture */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 hover:border-[#A2C0E6]/60 transition duration-300 space-y-3 flex flex-col justify-between md:col-span-2 lg:col-span-2">
                  <div className="space-y-2">
                    <div className="font-bold text-white text-base flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      <Link href="/services/seo-friendly-website-design" className="hover:text-[#A2C0E6] transition underline decoration-[#A2C0E6]/40">
                        SEO-Friendly Architecture &amp; Core Web Vitals
                      </Link>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Engineered with semantic HTML5, zero-layout-shift (CLS) score, and optimized server-side rendering (SSR) so every drug formulation page loads in under 1 second on mobile networks across Tier 2 and Tier 3 Indian markets.
                    </p>
                  </div>
                  <Link href="/services/seo-friendly-website-design" className="text-xs text-[#A2C0E6] font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore SEO-Friendly Web <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* PILLAR 4: TALLYPRIME ERP, AWS CLOUD & MOBILE APP DEVELOPMENT */}
            <div className="rounded-3xl p-6 sm:p-10 bg-[#08121f] border border-[#A2C0E6]/30 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A2C0E6]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3E62] border border-[#A2C0E6]/40 flex items-center justify-center text-[#A2C0E6]">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#A2C0E6]">Pillar 04</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">TallyPrime ERP Services, AWS Cloud &amp; Mobile Apps</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Batch &amp; Expiry Automation</span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/20">iOS &amp; Android Apps</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* TallyPrime All Services */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-base flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-[#A2C0E6]" />
                    <span>TallyPrime (All Pharma Services)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    End-to-end TallyPrime integration: Batch-wise stock management, manufacturing and expiry date tracking, automatic e-Invoice/e-Way bill generation, drug license validation during sales invoicing, and distributor payment ledger synchronization.
                  </p>
                  <ul className="text-[11px] text-slate-400 space-y-1 pt-1">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Real-time Warehouse Inventory Sync</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Automated GST &amp; E-Way Billing</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Tally on AWS Cloud 24/7 Access</li>
                  </ul>
                </div>

                {/* AWS Cloud Architecture */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-base flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-[#A2C0E6]" />
                    <span>AWS Cloud &amp; Security Architecture</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    High-availability Amazon Web Services (AWS) deployment for pharma portals, patient registries, and distributor ERPs with automatic data backups, SSL encryption, and compliance with DISHA, HIPAA, and DPDP Indian data privacy laws.
                  </p>
                  <ul className="text-[11px] text-slate-400 space-y-1 pt-1">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> 99.99% Uptime SLA Guarantee</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Encrypted Medical Document S3 Storage</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> DDoS &amp; Firewall Shield Protection</li>
                  </ul>
                </div>

                {/* Native & Cross-Platform Mobile Apps */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-base flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#A2C0E6]" />
                    <span>React Native, Flutter, Swift &amp; Kotlin</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Custom mobile apps for MR Field Reporting, Doctor E-Detailing on iPads (Swift), and PCD Stockist Direct-Ordering portals (React Native &amp; Flutter) featuring offline catalog synchronization and real-time push notifications.
                  </p>
                  <ul className="text-[11px] text-slate-400 space-y-1 pt-1">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> MR GPS Attendance &amp; Tour Planning</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Offline Doctor Detailing Flipbooks</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Instant Order Booking with Payment Gateway</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PILLAR 5: BRANDING, PACKAGING, LOGO & 3D MOTION GRAPHICS */}
            <div className="rounded-3xl p-6 sm:p-10 bg-[#08121f] border border-[#A2C0E6]/30 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A2C0E6]/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1E3E62] border border-[#A2C0E6]/40 flex items-center justify-center text-[#A2C0E6]">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#A2C0E6]">Pillar 05</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Pharma Branding, Packaging, Logo &amp; 3D Video Studio</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/20">CDSCO Compliant Labels</span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">3D MOA Video Detailing</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Logo & Identity */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#A2C0E6]" />
                    <span>Logo &amp; Brand Identity</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Crafting distinctive, trademark-safe pharmaceutical brand identities, corporate logos, and therapeutic visual guidelines that project clinical authority to healthcare professionals.
                  </p>
                </div>

                {/* Graphics & Packaging */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-[#A2C0E6]" />
                    <span>Pharma Packaging Design</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    CDSCO-compliant packaging die-lines for mono-cartons, blister foils, syrup labels, catch covers, and visual aids using precise regulatory font sizing and Schedule warnings.
                  </p>
                </div>

                {/* Creative Software Suite */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#A2C0E6]" />
                    <span>Figma, Photoshop, Illustrator, Canva</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mastery of industry design tools to create high-fidelity UI prototypes in Figma, vector packaging in Illustrator, doctor promotional creatives in Photoshop, and social templates in Canva.
                  </p>
                </div>

                {/* After Effects 3D MOA Animation */}
                <div className="p-5 rounded-2xl bg-[#050b13] border border-slate-800 space-y-3">
                  <div className="font-bold text-white text-sm flex items-center gap-2">
                    <Video className="w-4 h-4 text-emerald-400" />
                    <span>After-Effects 3D MOA Animation</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Medical Mechanism-of-Action (MOA) 3D motion graphics animating receptor bindings, cellular drug interactions, and clinical benefits for doctor conferences and digital detailing.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* IMAGE SECTION 2: HCP DOCTOR E-DETAILING */}
        <section id="doctor-tele-detailing" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl p-6 sm:p-8 bg-[#09131f] border border-[#A2C0E6]/30 shadow-2xl relative overflow-hidden space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3E62]/40 text-[#A2C0E6] text-xs font-semibold w-fit">
                <Stethoscope className="w-3.5 h-3.5" /> Doctor Tele-Detailing &amp; Clinical Sampling
              </div>
              <span className="text-[11px] text-slate-400 font-mono">HCP Engagement Flow</span>
            </div>

            <div className="relative w-full aspect-[16/9] max-h-[440px] rounded-2xl overflow-hidden border border-[#A2C0E6]/30 shadow-inner group bg-slate-950">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
                alt="Healthcare professional doctor digital e-detailing and clinical trial dissemination workflow with interactive tablet sampling schema by Veiled Story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/30 to-transparent pointer-events-none" />

              {/* Floating Badges on Image */}
              <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#060d16]/80 text-[#A2C0E6] border border-[#A2C0E6]/40 backdrop-blur-md">
                  Doctor Tele-Detailing &amp; 3D MOA Sampling
                </span>
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-blue-950/80 text-blue-300 border border-blue-500/40 backdrop-blur-md">
                  MCI / NMC Ethics Aligned
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#060d16]/85 border border-[#A2C0E6]/25 backdrop-blur-md space-y-1">
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>Interactive Doctor E-Detailing &amp; Clinical Monograph Portals</span>
                  <span className="text-xs text-emerald-400 font-mono hidden sm:inline">iPad &amp; Android Apps</span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2">
                  Delivering clinical evidence, 3D mechanism-of-action visualizers, dosage calculations, and digital sample request forms directly to specialist physicians.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <span className="text-[11px] px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Peer-Reviewed Evidence</span>
              <span className="text-[11px] px-3 py-1 rounded-lg bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/20">MCI / NMC Ethics Aligned</span>
              <span className="text-[11px] px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">Digital E-Detailing Flipbooks</span>
            </div>
          </div>
        </section>

        {/* SECTION: INTERACTIVE ROI & LEAD CALCULATOR */}
        <section id="calculator" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3E62]/40 text-[#A2C0E6] text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5" /> Interactive Forecast Engine
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pharma Digital Marketing ROI &amp; Distributor Lead Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Select your business model and monthly marketing budget to simulate verified distributor franchise inquiries, doctor reach, and expected pipeline value.
            </p>
          </div>

          <PharmaInteractiveCalculator />
        </section>

        {/* SECTION: REGULATORY COMPLIANCE & LEGAL GUARDRAILS ACCORDION */}
        <section id="compliance" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3E62]/40 text-[#A2C0E6] text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> Legal &amp; Ethical Framework
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              100% CDSCO, FDA &amp; YMYL Regulatory Safety Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We eliminate regulatory risk from digital campaigns through strict pre-publication compliance auditing and adverse drug event monitoring.
            </p>
          </div>

          <PharmaAccordion items={complianceAccordionItems} />
        </section>

        {/* SECTION: CASE STUDIES & VERIFIED RESULTS */}
        <section id="case-studies" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3E62]/40 text-[#A2C0E6] text-xs font-semibold">
              <Award className="w-3.5 h-3.5" /> Verified Industry Case Studies
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Real Pharmaceutical Growth Outcomes &amp; Proven ROI
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              How we helped pharmaceutical formulation units and PCD franchise brands in Baddi and Chandigarh unlock exponential growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Case 1 */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#0c1a2b] border border-[#A2C0E6]/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#A2C0E6]/15 text-[#A2C0E6]">
                  Third-Party Manufacturing
                </span>
                <span className="text-xs font-black text-emerald-400">+420% RFQs</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                WHO-GMP Formulation Plant in Baddi (Himachal Pradesh)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Challenge:</strong> An established manufacturing unit had excess tablet and dry syrup capacity but relied exclusively on word-of-mouth with rising factory idle time.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Our Strategy:</strong> Rebuilt their technical B2B SEO architecture, launched high-intent Google Search campaigns targeting <em>&quot;third party tablet manufacturing in Baddi&quot;</em>, and built downloadable batch capacity brochures.
              </p>
              <div className="p-3 rounded-2xl bg-[#060d16] border border-slate-800 text-[11px] text-emerald-400 font-semibold space-y-1">
                <div>✓ 420% increase in high-ticket monthly contract inquiries</div>
                <div>✓ Signed 14 new annual contract manufacturing contracts</div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#0c1a2b] border border-[#A2C0E6]/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#A2C0E6]/15 text-[#A2C0E6]">
                  PCD Franchise Network
                </span>
                <span className="text-xs font-black text-emerald-400">85+ Distributors</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Chandigarh-Based Cardiac-Diabetic PCD Brand
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Challenge:</strong> Struggling to expand outside Punjab and Haryana against saturated regional competition.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Our Strategy:</strong> Developed district-wise landing pages targeting high-density markets in Uttar Pradesh, Bihar, and West Bengal, backed by automated WhatsApp visual-aid delivery bots.
              </p>
              <div className="p-3 rounded-2xl bg-[#060d16] border border-slate-800 text-[11px] text-emerald-400 font-semibold space-y-1">
                <div>✓ Appointed 85+ exclusive district monopoly franchise partners</div>
                <div>✓ Cost per qualified distributor lead dropped by 58%</div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="rounded-3xl p-6 sm:p-7 bg-[#0c1a2b] border border-[#A2C0E6]/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#A2C0E6]/15 text-[#A2C0E6]">
                  Nutraceutical &amp; OTC
                </span>
                <span className="text-xs font-black text-emerald-400">₹1.8 Cr/mo GMV</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Ayurvedic &amp; Wellness Brand in Mohali
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Challenge:</strong> Facing high customer acquisition costs and frequent Meta ad policy rejections due to uncompliant health claims.
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Our Strategy:</strong> Cleaned all landing pages with AYUSH compliance disclaimers, introduced clinical trial proof points, and built an automated WhatsApp subscription flow for repeat supplement orders.
              </p>
              <div className="p-3 rounded-2xl bg-[#060d16] border border-slate-800 text-[11px] text-emerald-400 font-semibold space-y-1">
                <div>✓ Scaled monthly online revenue from ₹15L to ₹1.8 Crore</div>
                <div>✓ Zero ad account disapprovals in 12 consecutive months</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CLIENT TESTIMONIALS & REVIEWS (MATCHING SCHEMA) */}
        <section id="reviews" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl p-8 bg-[#09131f] border border-[#A2C0E6]/30 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#A2C0E6]/20 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#A2C0E6]">Verified Client Feedback</span>
                <h2 className="text-xl sm:text-2xl font-black text-white">What Pharmaceutical Founders Say</h2>
              </div>
              <div className="flex items-center gap-2 bg-[#1E3E62]/40 px-4 py-2 rounded-2xl border border-[#A2C0E6]/30">
                <div className="flex text-amber-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-xs font-bold text-white">4.9 / 5.0 (88+ Pharma Reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#060d16] border border-slate-800 space-y-3 relative">
                <Quote className="w-8 h-8 text-[#A2C0E6]/20 absolute top-4 right-4" />
                <div className="flex text-amber-400 text-xs">{'★'.repeat(5)}</div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &quot;Veiled Story and Vishal Sahani completely transformed our WHO-GMP manufacturing inquiries in Baddi. Our monthly contract manufacturing RFQs jumped by over 400% with high quality B2B leads.&quot;
                </p>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-xs font-bold text-white">Dr. Rajiv Aggarwal</div>
                  <div className="text-[11px] text-slate-400">Managing Director, Baddi Formulation Plant</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#060d16] border border-slate-800 space-y-3 relative">
                <Quote className="w-8 h-8 text-[#A2C0E6]/20 absolute top-4 right-4" />
                <div className="flex text-amber-400 text-xs">{'★'.repeat(5)}</div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  &quot;Their PCD franchise lead generation and TallyPrime batch sync system helped us appoint 85+ exclusive district monopoly partners across 7 states in under 6 months.&quot;
                </p>
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-xs font-bold text-white">Sandeep Sharma</div>
                  <div className="text-[11px] text-slate-400">Founder, Tricity Cardiac-Diabetic PCD Brand</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE SECTION 3: LIVE PCD DASHBOARD */}
        <section id="telemetry-dashboard" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl p-6 sm:p-8 bg-[#09131f] border border-[#A2C0E6]/30 shadow-2xl relative overflow-hidden space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3E62]/40 text-[#A2C0E6] text-xs font-semibold w-fit">
                <BarChart3 className="w-3.5 h-3.5" /> Performance Tracking &amp; Lead Telemetry
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Live B2B Analytics</span>
            </div>

            <div className="relative w-full aspect-[16/9] max-h-[440px] rounded-2xl overflow-hidden border border-[#A2C0E6]/30 shadow-inner group bg-slate-950">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                alt="Real-time analytics dashboard tracking verified PCD pharma franchise distributor inquiries across Indian states by Veiled Story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/30 to-transparent pointer-events-none" />

              {/* Floating Badges on Image */}
              <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-[#060d16]/80 text-[#A2C0E6] border border-[#A2C0E6]/40 backdrop-blur-md">
                  PCD Franchise Lead Telemetry &amp; CRM
                </span>
                <span className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                  Drug License Verified
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#060d16]/85 border border-[#A2C0E6]/25 backdrop-blur-md space-y-1">
                <div className="text-sm font-bold text-white flex items-center justify-between">
                  <span>State-Wise Distributor Acquisition &amp; Conversion Analytics</span>
                  <span className="text-xs text-emerald-400 font-mono hidden sm:inline">TallyPrime Synced</span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2">
                  Filtering high-intent wholesale distributors, tracking territory monopoly allocations, and validating wholesale GST/drug licenses instantly.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
              <span className="text-[11px] px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Real-Time Lead Validation</span>
              <span className="text-[11px] px-3 py-1 rounded-lg bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/20">Drug License Verified</span>
              <span className="text-[11px] px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20">Multi-State Territory Heatmaps</span>
            </div>
          </div>
        </section>

        {/* SECTION: WHY PARTNER WITH VEILED STORY / VISHAL SAHANI */}
        <section id="why-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0c1c30] via-[#08121f] to-[#04080e] border border-[#A2C0E6]/40 shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3E62]/60 text-[#A2C0E6] text-xs font-bold uppercase">
                <Star className="w-3.5 h-3.5 fill-current" /> Senior Domain Leadership
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Pharmaceutical Leaders Trust Veiled Story as Their Growth Partner
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Led by senior strategist <strong>Vishal Sahani</strong>, Veiled Story brings deep understanding of the North Indian pharmaceutical industrial belt (Chandigarh, Baddi, Panchkula, Mohali) combined with world-class digital performance marketing capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-[#060d16]/80 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1E3E62] flex items-center justify-center text-[#A2C0E6] font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Strict CDSCO Adherence</h3>
                <p className="text-xs text-slate-400">Zero legal jeopardy. Every campaign is vetted against national medical advertising laws.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#060d16]/80 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1E3E62] flex items-center justify-center text-[#A2C0E6] font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Baddi &amp; Tricity Hub Focus</h3>
                <p className="text-xs text-slate-400">Deep familiarity with Indian pharma manufacturing hubs and supply chain dynamics.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#060d16]/80 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1E3E62] flex items-center justify-center text-[#A2C0E6] font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">Verified Inbound Leads</h3>
                <p className="text-xs text-slate-400">We don&apos;t count vanity clicks. We optimize for verified B2B buyers with drug licenses.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#060d16]/80 border border-slate-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#1E3E62] flex items-center justify-center text-[#A2C0E6] font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm">AEO &amp; AI Search Ready</h3>
                <p className="text-xs text-slate-400">Optimized for Google AI Overviews, Perplexity, and ChatGPT answer citations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FAQS (SCHEMA & VOICE SEARCH READY) */}
        <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3E62]/40 text-[#A2C0E6] text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions About Digital Marketing in Pharma
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Clear, transparent answers to help you navigate digital expansion, ERP setup, and omnichannel campaigns with confidence.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How is digital marketing in the pharma industry different from other sectors?',
                a: 'Pharma digital marketing operates under stringent regulatory compliance including CDSCO guidelines, Drugs and Magic Remedies Act, and YMYL search algorithms. It requires dual-target funnels: B2B acquisition for PCD distributors and third-party contract manufacturing, alongside ethical educational outreach for Healthcare Professionals (HCPs) without misleading clinical claims.',
              },
              {
                q: 'What full-stack digital services do you provide for pharma companies?',
                a: 'We provide end-to-end solutions: On-Page, Technical & Off-Page SEO; AEO, GEO & AI Overview Optimization; Google Business Profile Optimization; Google & Meta Ads (FB & IG); Social Media Optimization; High-Ticket Lead Generation; Custom Web Design & UI/UX; WordPress, Shopify & Magento Ecommerce; TallyPrime ERP Integration; AWS Cloud Architecture; Mobile App Development (React Native, Flutter, Swift, Kotlin); and Creative Design including Logos, Packaging & After Effects 3D MOA animations.',
              },
              {
                q: 'Can pharmaceutical companies run paid ads on Google and Meta in India?',
                a: 'Yes, with specific compliance protocols. Prescription (Rx) drugs cannot be advertised directly to consumers. However, B2B franchise promotion, third-party contract manufacturing capabilities, OTC wellness products, nutraceuticals, and medical education campaigns for doctors can be legitimately run using verified certifications and compliant ad copy.',
              },
              {
                q: 'How do you generate verified leads for PCD Pharma Franchises?',
                a: 'We deploy hyper-targeted Google Search campaigns on high-commercial-intent keywords (e.g., "PCD pharma franchise monopoly rights in Bihar"), paired with high-converting mobile landing pages, automated product catalog downloads, and instant WhatsApp qualification bots that filter out casual inquiries.',
              },
              {
                q: 'How does TallyPrime integrate with our pharma website and distribution network?',
                a: 'We configure real-time TallyPrime integration that syncs batch inventories, manufacturing/expiry dates, GST e-invoices, and customer ledgers between your warehouse ERP and online distributor portals or B2B mobile ordering applications.',
              },
              {
                q: 'What is HCP E-Detailing and how does it benefit pharma brands?',
                a: 'HCP E-Detailing is the digital delivery of scientific product literature, clinical trial data, interactive dosage calculators, and mode-of-action 3D animations directly to physicians via medical portals, dedicated microsites, and targeted digital newsletters, complementing traditional Medical Representative visits.',
              },
              {
                q: 'How do you ensure medical content passes Google’s E-E-A-T standards?',
                a: 'All therapeutic content is developed under our Medical Review Board protocol, incorporating references to PubMed, clinical trial registries, and peer-reviewed journals. We embed MedicalWebPage Schema and clear author/reviewer credentials to satisfy Google’s strict YMYL search quality guidelines.',
              },
              {
                q: 'How long does it take to see results from Pharma SEO and Google Ads?',
                a: 'Paid B2B Google Ads campaigns generate verified distributor and contract manufacturing inquiries within the first 7 to 14 days of launch. Organic Pharma SEO typically demonstrates significant ranking jumps on high-volume commercial keywords within 60 to 90 days.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#09131f] border border-[#A2C0E6]/25 space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#A2C0E6] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7.5">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL MASTER CTA SECTION */}
        <section id="contact-cta" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-tr from-[#0F2847] via-[#1E3E62] to-[#0a1829] border-2 border-[#A2C0E6]/50 shadow-[0_20px_60px_rgba(15,40,71,0.7)] text-center space-y-6 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A2C0E6]/20 border border-[#A2C0E6]/40 text-white text-xs font-bold uppercase tracking-wider">
              <Pill className="w-4 h-4 text-[#A2C0E6]" /> Ready to Dominate the Pharmaceutical Market?
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Transform Your Pharmaceutical Brand into an Omnichannel Industry Leader
            </h2>

            <p className="text-xs sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Connect with senior digital marketing strategist <strong>Vishal Sahani</strong> today for a comprehensive, confidential audit of your pharma digital presence, PCD franchise funnel, TallyPrime ERP sync, or contract manufacturing acquisition strategy.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <SeoPageCTA variant="primary" buttonText="Claim Your Free Pharma Strategy Audit" />
              <Link
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Vishal Sahani, I would like to schedule a confidential digital marketing consultation for my pharmaceutical business.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold text-sm transition inline-flex items-center gap-2 shadow-lg shadow-[#25D366]/30"
              >
                <Phone className="w-4 h-4" />
                Chat on WhatsApp (+91 79054 03546)
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 border-t border-[#A2C0E6]/20">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% CDSCO Compliant
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Non-Disclosure Agreement (NDA) Protected
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct Senior Strategist Access
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
