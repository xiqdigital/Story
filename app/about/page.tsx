import React from 'react';
import Metadata from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/data';
import {
  Award,
  CheckCircle2,
  MapPin,
  Sparkles,
  Target,
  ShieldCheck,
  TrendingUp,
  Users,
  Building2,
  MessageSquare,
  ChevronRight,
  Zap,
  Globe,
  Bot,
  HeartHandshake,
  Check
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Veiled Story - Premier Digital Marketing Agency in Zirakpur & Tricity',
  description: 'Learn about Veiled Story, Zirakpur’s leading digital marketing company. We specialize in Local SEO, Google Business Profile optimization, Meta Ads, Next.js Web Development, and AEO/GEO AI search optimization for businesses across Zirakpur, Chandigarh, Mohali & Panchkula.',
  keywords: [
    'About Veiled Story',
    'Digital Marketing Agency Zirakpur',
    'Best SEO Company Tricity',
    'Local SEO Specialist Chandigarh',
    'Performance Marketing Agency Mohali',
    'Veiled Story VIP Road Zirakpur'
  ],
  alternates: {
    canonical: 'https://veiledstory.com/about',
  },
  openGraph: {
    title: 'About Us | Veiled Story - Zirakpur & Tricity Digital Growth Agency',
    description: 'Discover how Veiled Story transforms local businesses in Zirakpur, Chandigarh, Mohali & Panchkula with verified ROI, Local SEO dominance, and high-converting leads.',
    url: 'https://veiledstory.com/about',
    siteName: 'Veiled Story',
    type: 'website',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `https://${SITE_CONFIG.domain}/about/#webpage`,
        url: `https://${SITE_CONFIG.domain}/about`,
        name: 'About Us | Veiled Story Digital Marketing Agency',
        description: 'Veiled Story is a full-funnel digital marketing agency based on VIP Road, Zirakpur, serving clients in Chandigarh, Mohali, Panchkula, and nationwide.',
        about: {
          '@id': `https://${SITE_CONFIG.domain}/#localbusiness`,
        },
        publisher: {
          '@id': `https://${SITE_CONFIG.domain}/#organization`,
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
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
              name: 'About Us',
              item: `https://${SITE_CONFIG.domain}/about`,
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0b1318] text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/* Main Container */}
      <main className="pt-28 pb-20">
        
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-medium">About Us</span>
          </nav>
        </div>

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden mb-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wide uppercase">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  Rooted in Zirakpur • Serving Tricity & Global Brands
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                  We Don&apos;t Sell <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Vanity Metrics</span>. We Build Revenue Engines.
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  Veiled Story was founded on VIP Road, Zirakpur with a single uncompromising mission: to give local Tricity businesses and ambitious brands a transparent, ROI-driven digital growth agency that operates with 100% technical precision and human integrity.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://wa.me/917905403546?text=Hi%20Veiled%20Story!%20I%20want%20to%20learn%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 text-slate-950 font-extrabold text-sm hover:brightness-110 shadow-lg shadow-cyan-500/25 transition active:scale-95 flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-slate-950" /> Speak With Our Founders
                  </a>

                  <Link
                    href="/contact"
                    className="px-6 py-3.5 rounded-xl bg-slate-900 border border-teal-500/40 text-cyan-300 font-bold text-sm hover:border-cyan-400 transition flex items-center gap-2"
                  >
                    Visit Our VIP Road Office →
                  </Link>
                </div>
              </div>

              {/* Right Hero Visual Image */}
              <div className="lg:col-span-5">
                <div className="liquid-glass rounded-2xl p-3 border border-teal-500/30 shadow-2xl relative">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                      alt="Veiled Story Digital Marketing Team Strategy Session at VIP Road Zirakpur Office"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-4 flex flex-col justify-end">
                      <span className="text-xs font-bold text-cyan-300">Veiled Story Headquarters</span>
                      <p className="text-[11px] text-slate-300">VIP Road, Zirakpur, Punjab (Tricity)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story & Evolution Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Card */}
            <div className="bg-slate-900/80 border border-teal-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full pointer-events-none" />
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cyan-400" /> Our Founding Story
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>
                  For years, business owners across Zirakpur, Chandigarh, Mohali, and Panchkula were tired of traditional marketing agencies that delivered fancy PowerPoint slides, thousands of meaningless social media impressions, and vague monthly reports—while actual sales inquiries and footfalls remained flat.
                </p>
                <p>
                  We started <strong className="text-white">Veiled Story</strong> in Zirakpur to unveil the real story behind digital marketing. We replaced guesswork with technical SEO audits, Google Map Pack optimization, conversion-engineered Next.js websites, and hyper-targeted paid advertising campaigns.
                </p>
                <p>
                  Whether you own a real estate housing project on PR7 Airport Road, a dental clinic in Sector 35 Chandigarh, a PCD pharma franchise in Mohali, or a banquet hall on the Zirakpur highway—our local team brings deep regional buyer insight and cutting-edge digital execution to your doorstep.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-cyan-300">380%+</span>
                  <p className="text-[11px] text-slate-400 mt-1 font-medium">Avg Organic Lead Growth</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-teal-300">50+</span>
                  <p className="text-[11px] text-slate-400 mt-1 font-medium">Tricity Client Partners</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-300">4.8x</span>
                  <p className="text-[11px] text-slate-400 mt-1 font-medium">Average Campaign ROAS</p>
                </div>
              </div>

            </div>

            {/* Core Values Grid */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Why Brands Trust Us</span>
                <h2 className="text-3xl font-extrabold text-white">Our 4 Pillars of E-E-A-T Excellence</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition">
                  <ShieldCheck className="w-6 h-6 text-cyan-400 mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">100% Data Transparency</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    No hidden ad spend markups or inflated reporting. You get full ownership of your Google Ads, Meta accounts, and GMB profiles.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition">
                  <MapPin className="w-6 h-6 text-teal-400 mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">Hyper-Local Tricity Mastery</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We understand local search behavior across Zirakpur, Chandigarh, Panchkula, and Mohali better than remote agencies.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition">
                  <Zap className="w-6 h-6 text-emerald-400 mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">Sub-Second Speed Engineering</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We build modern websites using Next.js and React that load under 1 second, ensuring perfect Core Web Vitals and top search ranks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition">
                  <Bot className="w-6 h-6 text-cyan-300 mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">AEO & GEO AI Readiness</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We optimize your brand entity so conversational AI assistants like ChatGPT, Gemini, and Perplexity recommend your business.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Our Specialist Teams Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Our In-House Growth Specialists</h2>
            <p className="text-sm text-slate-300">
              Meet the dedicated strategists, technical SEO engineers, performance media buyers, and web developers managing your campaigns from Zirakpur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-900/70 border border-teal-500/20 rounded-2xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-300 font-bold text-xl">
                SEO
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Technical SEO Leads</h3>
                <p className="text-xs text-teal-300 mt-0.5">Google 3-Pack & Maps Experts</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specializing in schema markups, local citation building, Google Business Profile optimization, and Core Web Vitals fixes.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-teal-500/20 rounded-2xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-400/30 flex items-center justify-center mx-auto text-teal-300 font-bold text-xl">
                PPC
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Media Buyers & PPC Leads</h3>
                <p className="text-xs text-cyan-300 mt-0.5">Google & Meta Ad Specialists</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Managing high-intent lead generation campaigns, negative keyword lists, remarketing funnels, and landing page conversions.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-teal-500/20 rounded-2xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-300 font-bold text-xl">
                DEV
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Web Architects</h3>
                <p className="text-xs text-emerald-300 mt-0.5">Next.js & WordPress Engineers</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building custom, mobile-responsive, lightning-fast web layouts engineered to turn traffic into WhatsApp inquiries.
              </p>
            </div>

            <div className="bg-slate-900/70 border border-teal-500/20 rounded-2xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-300 font-bold text-xl">
                AEO
              </div>
              <div>
                <h3 className="text-base font-bold text-white">AI Search Researchers</h3>
                <p className="text-xs text-cyan-300 mt-0.5">AEO & GEO Optimization</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Structuring entity graphs, citations, and conversational answer snippets for Google AI Overviews, ChatGPT, and Perplexity.
              </p>
            </div>

          </div>
        </section>

        {/* Sub-Services Quick Links for Internal SEO Linking */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 bg-slate-900/50 border border-teal-500/20 rounded-3xl p-8">
          <div className="mb-6 space-y-2">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" /> Explore Our Specialized Sub-Service Hubs
            </h2>
            <p className="text-xs text-slate-300">
              Click any of our specialized sub-service hubs to read detailed technical blueprints, pricing models, and case studies:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
            <Link href="/services/seo-company-zirakpur" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-cyan-300 transition">
              • SEO Company in Zirakpur
            </Link>
            <Link href="/services/google-ads-agency" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-cyan-300 transition">
              • Google Ads Agency
            </Link>
            <Link href="/services/meta-ads-agency" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-cyan-300 transition">
              • Meta Ads Agency
            </Link>
            <Link href="/services/answer-engine-optimization" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-cyan-300 transition">
              • AEO & GEO Optimization
            </Link>
            <Link href="/services/custom-web-designing" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-cyan-300 transition">
              • Custom Web Designing
            </Link>
            <Link href="/services/google-business-profile-optimization" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-cyan-300 transition">
              • Google Business Profile
            </Link>
            <Link href="/services/e-commerce-website-design" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-cyan-300 transition">
              • E-Commerce Stores
            </Link>
            <Link href="/services/real-estate-website-designing" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500/40 hover:text-cyan-300 transition">
              • Real Estate Web Design
            </Link>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-teal-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/20 blur-3xl pointer-events-none" />

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Outrank Your Competition in Zirakpur & Tricity?
            </h2>

            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Get a free 1-on-1 digital audit and strategy call with our team. We&apos;ll analyze your website, Google Maps profile, and competitor ad strategies for free.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/917905403546?text=Hi%20Veiled%20Story!%20I%20want%20a%20Free%201-on-1%20Digital%20Strategy%20Audit."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 text-slate-950 font-black text-sm hover:brightness-110 transition shadow-xl"
              >
                Get Free WhatsApp Audit →
              </a>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-slate-900 border border-teal-500/40 text-cyan-300 font-bold text-sm hover:border-cyan-400 transition"
              >
                Contact Us Form
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
