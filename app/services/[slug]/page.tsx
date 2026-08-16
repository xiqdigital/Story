import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SUB_SERVICES_DATA, SubService } from '@/lib/subServicesData';
import { getThemedImageUrl } from '@/lib/imageUtils';
import { SITE_CONFIG } from '@/lib/data';
import Link from 'next/link';
import {
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Phone,
  ShieldCheck,
  Zap,
  Building2,
  HelpCircle,
  FileCode2,
  Image as ImageIcon,
  Award,
  Users,
  Target,
  ArrowLeft
} from 'lucide-react';

interface SubServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SUB_SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: SubServicePageProps) {
  const resolvedParams = await params;
  const subService = SUB_SERVICES_DATA[resolvedParams.slug];
  if (!subService) {
    return {
      title: 'Service Not Found | Veiled Story',
    };
  }

  return {
    title: `${subService.title} | Veiled Story Zirakpur`,
    description: subService.metaDescription,
    keywords: [subService.primaryKeyword, ...subService.secondaryKeywords].join(', '),
    openGraph: {
      title: subService.title,
      description: subService.metaDescription,
      url: `https://${SITE_CONFIG.domain}/services/${subService.slug}`,
      siteName: 'Veiled Story',
      locale: 'en_IN',
      type: 'article',
    },
    alternates: {
      canonical: `https://${SITE_CONFIG.domain}/services/${subService.slug}`,
    },
  };
}

export default async function SubServicePage({ params }: SubServicePageProps) {
  const resolvedParams = await params;
  const subService: SubService | undefined = SUB_SERVICES_DATA[resolvedParams.slug];

  if (!subService) {
    notFound();
  }

  // Masterpiece Ultra-detailed All-in-one Schema.org JSON-LD structured data graph for Sub-Service Pages
  const masterSubServiceGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://${SITE_CONFIG.domain}/services/${subService.slug}#service`,
        'name': subService.h1,
        'serviceType': subService.primaryKeyword,
        'description': subService.metaDescription,
        'provider': {
          '@id': `https://${SITE_CONFIG.domain}/#organization`,
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Zirakpur', 'sameAs': 'https://en.wikipedia.org/wiki/Zirakpur' },
          { '@type': 'City', 'name': 'Chandigarh', 'sameAs': 'https://en.wikipedia.org/wiki/Chandigarh' },
          { '@type': 'City', 'name': 'Panchkula', 'sameAs': 'https://en.wikipedia.org/wiki/Panchkula' },
          { '@type': 'City', 'name': 'Mohali', 'sameAs': 'https://en.wikipedia.org/wiki/Mohali' },
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': `${subService.title} Key Deliverables`,
          'itemListElement': subService.keyDeliverables.map((item, idx) => ({
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': item.title,
              'description': item.desc,
            },
            'position': idx + 1,
          })),
        },
      },
      {
        '@type': 'Article',
        '@id': `https://${SITE_CONFIG.domain}/services/${subService.slug}#article`,
        'headline': `${subService.title} - Service Blueprint & Technical Guide 2026`,
        'description': subService.metaDescription,
        'image': [
          getThemedImageUrl(subService.category) || `https://${SITE_CONFIG.domain}/og-image.jpg`,
        ],
        'datePublished': '2026-08-01T08:00:00+05:30',
        'dateModified': '2026-08-11T10:00:00+05:30',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': `https://${SITE_CONFIG.domain}/services/${subService.slug}`,
        },
        'author': {
          '@type': 'Person',
          '@id': `https://${SITE_CONFIG.domain}/#vishal-sahani`,
          'name': 'Vishal Sahani',
          'url': `https://${SITE_CONFIG.domain}/author/vishal-sahani`,
        },
        'publisher': {
          '@type': 'Organization',
          '@id': `https://${SITE_CONFIG.domain}/#organization`,
          'name': 'Veiled Story Digital Marketing Agency',
          'logo': {
            '@type': 'ImageObject',
            'url': `https://${SITE_CONFIG.domain}/logo.png`,
          },
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `https://${SITE_CONFIG.domain}/services/${subService.slug}#faq`,
        'mainEntity': subService.faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://${SITE_CONFIG.domain}/services/${subService.slug}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': `https://${SITE_CONFIG.domain}`,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': `https://${SITE_CONFIG.domain}/#services`,
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': subService.title,
            'item': `https://${SITE_CONFIG.domain}/services/${subService.slug}`,
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `https://${SITE_CONFIG.domain}/services/${subService.slug}#webpage`,
        'url': `https://${SITE_CONFIG.domain}/services/${subService.slug}`,
        'name': subService.title,
        'description': subService.metaDescription,
        'isPartOf': { '@id': `https://${SITE_CONFIG.domain}/#website` },
        'breadcrumb': { '@id': `https://${SITE_CONFIG.domain}/services/${subService.slug}#breadcrumb` },
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Veiled Story! I am visiting https://${SITE_CONFIG.domain}/services/${subService.slug} and interested in ${subService.primaryKeyword}. Please share pricing and a customized proposal.`
  );
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#060d16] text-slate-100 font-sans selection:bg-[#A2C0E6] selection:text-[#060d16]">
      {/* Masterpiece Ultra-detailed All-in-one Schema.org Injection for Sub-Service Pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(masterSubServiceGraph) }}
      />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[#060d16]/80 backdrop-blur-xl border-b border-[#A2C0E6]/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#A2C0E6] hover:text-white transition font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs text-slate-400">
              Direct Helpline: <strong className="text-[#A2C0E6]">+91 7905403546</strong>
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-lg shadow-[#A2C0E6]/20 transition duration-300 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#060d16]" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Sub Service Hero Banner */}
      <section className="relative pt-10 pb-16 px-4 overflow-hidden border-b border-[#A2C0E6]/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#A2C0E6]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-[#A2C0E6]/80 mb-6">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span>Services</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-200 font-medium">{subService.category}</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#A2C0E6] font-semibold truncate">{subService.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6] animate-pulse" />
                <span>{subService.category} Sub-Service</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Tricity & Zirakpur Focus</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                {subService.h1}
              </h1>

              <p className="text-lg text-[#A2C0E6]/90 font-medium leading-snug">
                {subService.h2}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {subService.heroDescription}
              </p>

              {/* Call to Actions */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-xl shadow-[#A2C0E6]/25 transition duration-300 active:scale-95 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-[#060d16]" />
                  Get WhatsApp Quote
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="px-5 py-3.5 rounded-xl text-sm font-semibold bg-[#060d16]/90 text-[#A2C0E6] border border-[#A2C0E6]/40 hover:border-[#A2C0E6] transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#A2C0E6]" />
                  Call Us Directly
                </a>
              </div>

              {/* Fast Trust Indicators */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                  <span>100% White-Hat Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                  <span>Core Web Vitals Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#A2C0E6] shrink-0" />
                  <span>Proven North India ROI</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Container with Descriptive SEO Alt Text */}
            <div className="lg:col-span-5">
              <div className="liquid-glass rounded-2xl p-4 border border-[#A2C0E6]/30 shadow-2xl relative group">
                <div className="aspect-[4/3] rounded-xl bg-[#060d16] relative overflow-hidden group">
                  <Image
                    src={getThemedImageUrl(subService.imageSeed || subService.slug, subService.category)}
                    alt={subService.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/30 to-transparent p-4 flex flex-col justify-between pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-[#060d16]/80 backdrop-blur-md text-[10px] font-bold text-[#A2C0E6] border border-[#A2C0E6]/30 uppercase tracking-widest">
                        Visual Asset
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-[#A2C0E6] font-medium bg-[#060d16]/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-[#A2C0E6]/30">
                        <Zap className="w-3 h-3" /> WebP Fast Load
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {subService.primaryKeyword}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main E-E-A-T & Technical Content Section */}
      <section className="py-16 px-4 bg-[#060d16]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview & Why Vital */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 border border-[#A2C0E6]/20 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileCode2 className="w-6 h-6 text-[#A2C0E6]" />
                {subService.overviewHeading}
              </h2>
              {subService.overviewParagraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Deliverables & Actionable Scope */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#A2C0E6] uppercase tracking-widest">
                  Key Deliverables & Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  What We Deliver for {subService.primaryKeyword}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subService.keyDeliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="liquid-glass p-5 rounded-xl border border-[#A2C0E6]/20 hover:border-[#A2C0E6]/50 transition space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#A2C0E6] shrink-0" />
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Execution Process */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 border border-[#A2C0E6]/20 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#A2C0E6] uppercase tracking-widest">
                  Strategic Execution Roadmap
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Our Step-by-Step {subService.category} Process
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subService.processSteps.map((stepItem, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 relative space-y-2"
                  >
                    <span className="text-2xl font-black text-[#A2C0E6]/30 absolute top-3 right-4">
                      {stepItem.step}
                    </span>
                    <h3 className="text-base font-bold text-[#A2C0E6] pr-8">{stepItem.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Industries */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 border border-[#A2C0E6]/20 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#A2C0E6]" />
                Target Industries in Zirakpur & Tricity
              </h2>
              <div className="flex flex-wrap gap-2 pt-2">
                {subService.targetIndustries.map((ind, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#A2C0E6]/10 text-[#A2C0E6] border border-[#A2C0E6]/30 text-xs font-medium"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* AEO & Voice Search Conversational FAQs */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#A2C0E6] uppercase tracking-widest flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" /> Conversational AEO & Voice Search FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {subService.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="liquid-glass rounded-xl p-5 border border-[#A2C0E6]/20 space-y-2"
                  >
                    <h3 className="text-base font-bold text-[#A2C0E6] flex items-start gap-2">
                      <span className="text-[#A2C0E6] font-mono text-xs mt-0.5">Q.</span>
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Consultation Glass Card */}
            <div className="sticky top-20 liquid-glass rounded-2xl p-6 border border-[#A2C0E6]/30 space-y-6 shadow-2xl">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded-full bg-[#A2C0E6]/20 text-[#A2C0E6] text-[11px] font-bold border border-[#A2C0E6]/40 inline-block">
                  Instant Inquiry Response
                </span>
                <h3 className="text-xl font-bold text-white">
                  Need {subService.primaryKeyword}?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect directly with our team in Zirakpur to get a custom roadmap and pricing details for your business.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white transition duration-300 shadow-lg shadow-[#A2C0E6]/20 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-[#060d16]" />
                  Chat on WhatsApp
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="w-full py-3 rounded-xl text-xs font-semibold bg-[#060d16] text-[#A2C0E6] border border-[#A2C0E6]/40 hover:border-[#A2C0E6] transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A2C0E6]" />
                  Call Helpline
                </a>
              </div>

              {/* Why Choose Highlights */}
              <div className="pt-4 border-t border-[#A2C0E6]/20 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Why Choose Veiled Story
                </h4>
                <div className="space-y-2.5">
                  {subService.whyChooseUs.map((w, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A2C0E6] shrink-0" />
                        {w.title}
                      </div>
                      <p className="text-[11px] text-slate-400 pl-5 leading-snug">
                        {w.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secondary Keywords Matrix for GEO & Entity Connections */}
              <div className="pt-4 border-t border-[#A2C0E6]/20 space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Target Entity Keywords
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400">
                  {subService.secondaryKeywords.map((kw, i) => (
                    <span key={i} className="bg-[#060d16] px-2 py-0.5 rounded border border-[#A2C0E6]/20">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contextual Internal Links to Key Sub-Services */}
              <div className="pt-4 border-t border-[#A2C0E6]/20 space-y-3">
                <span className="text-[11px] uppercase font-bold text-[#A2C0E6] tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Interlinked Sub-Services
                </span>
                <div className="space-y-1.5 text-xs">
                  {Object.values(SUB_SERVICES_DATA)
                    .filter((item) => item.slug !== subService.slug)
                    .slice(0, 6)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="block p-2 rounded-lg bg-[#060d16] hover:bg-[#A2C0E6]/10 text-slate-300 hover:text-[#A2C0E6] transition border border-[#A2C0E6]/20 text-[11px] font-medium truncate flex items-center justify-between"
                      >
                        <span className="truncate">{item.title}</span>
                        <ChevronRight className="w-3 h-3 text-[#A2C0E6] shrink-0" />
                      </Link>
                    ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Sub-Service Directory Navigator (Quick links to all requested sub-services) */}
      <section className="py-12 px-4 border-t border-[#A2C0E6]/20 bg-[#060d16]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#A2C0E6] uppercase tracking-widest">
              Explore Specialized Solutions
            </span>
            <h2 className="text-2xl font-bold text-white">
              All Sub-Service Pages
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            {Object.values(SUB_SERVICES_DATA).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className={`p-3 rounded-xl border transition flex items-center justify-between group ${
                  item.slug === subService.slug
                    ? 'bg-[#A2C0E6]/20 border-[#A2C0E6] text-[#A2C0E6] font-bold'
                    : 'bg-[#060d16] border-[#A2C0E6]/20 text-slate-300 hover:border-[#A2C0E6]/50 hover:text-white'
                }`}
              >
                <span className="truncate pr-2">{item.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A2C0E6] shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#A2C0E6]/20 bg-[#060d16] text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} <strong>Veiled Story Digital Marketing Agency</strong>. Digital Marketing Company in Zirakpur. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <Link href="/" className="hover:text-[#A2C0E6] transition">Home</Link>
            <span>•</span>
            <a href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="text-[#A2C0E6] hover:text-white font-bold">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
