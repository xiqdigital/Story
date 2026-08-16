import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS_DATA, BlogPost } from '@/lib/blogsData';
import { SITE_CONFIG } from '@/lib/data';
import { getThemedImageUrl } from '@/lib/imageUtils';
import {
  Clock,
  Calendar,
  User,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Star,
  Share2,
  Building2,
  MapPin,
  Bot,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA[resolvedParams.slug];

  if (!post) {
    return {
      title: 'Article Not Found | Veiled Story',
    };
  }

  return {
    title: `${post.title} | Veiled Story Zirakpur`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://veiledstory.com/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://veiledstory.com/blogs/${post.slug}`,
      siteName: 'Veiled Story',
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = BLOG_POSTS_DATA[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  // Generate All 5 Required Schemas
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. BlogPosting Schema
      {
        '@type': 'BlogPosting',
        '@id': `https://veiledstory.com/blogs/${post.slug}/#blogposting`,
        headline: post.title,
        description: post.metaDescription,
        url: `https://veiledstory.com/blogs/${post.slug}`,
        datePublished: '2026-08-08',
        dateModified: '2026-08-08',
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Veiled Story Digital Marketing Agency',
          url: 'https://veiledstory.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://veiledstory.com/icon.png',
          },
        },
        keywords: post.keywords.join(', '),
        image: {
          '@type': 'ImageObject',
          url: getThemedImageUrl(post.imageSeed || post.slug, post.category),
          caption: post.imageAlt || `${post.title} - Veiled Story Zirakpur Blog Article Banner`,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://${SITE_CONFIG.domain}/blogs/${post.slug}`,
        },
      },

      // 2. FAQPage Schema
      {
        '@type': 'FAQPage',
        '@id': `https://${SITE_CONFIG.domain}/blogs/${post.slug}/#faq`,
        mainEntity: post.content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },

      // 3. BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        '@id': `https://${SITE_CONFIG.domain}/blogs/${post.slug}/#breadcrumb`,
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
            name: 'Blogs',
            item: `https://${SITE_CONFIG.domain}/blogs`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://${SITE_CONFIG.domain}/blogs/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#060d16] text-slate-100 relative selection:bg-[#A2C0E6] selection:text-[#060d16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="pt-28 pb-20">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs text-slate-400 overflow-x-auto whitespace-nowrap scrollbar-none">
            <Link href="/" className="hover:text-[#A2C0E6] transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#A2C0E6] shrink-0" />
            <Link href="/blogs" className="hover:text-[#A2C0E6] transition">Blogs</Link>
            <ChevronRight className="w-3 h-3 text-[#A2C0E6] shrink-0" />
            <span className="text-[#A2C0E6] font-medium truncate max-w-xs">{post.title}</span>
          </nav>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold uppercase">
              {post.category}
            </span>
            <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-full text-amber-300 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>{post.rating}</span>
              <span className="text-slate-400 font-normal">({post.reviewCount} verified reviews)</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="pt-3 border-t border-[#A2C0E6]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <Link 
              href="/author/vishal-sahani" 
              className="flex items-center gap-3 group hover:opacity-90 transition duration-200"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#A2C0E6]/40 shrink-0">
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-white group-hover:text-[#A2C0E6] transition-colors block flex items-center gap-1.5">
                  {post.author.name}
                  <span className="text-[10px] text-[#A2C0E6] bg-[#A2C0E6]/10 px-1.5 py-0.2 rounded border border-[#A2C0E6]/30">Verified Author</span>
                </span>
                <span className="text-[11px] text-[#A2C0E6]">{post.author.role}</span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#A2C0E6]" /> {post.publishDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A2C0E6]" /> {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Blog Article Banner Image & Description */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="liquid-glass rounded-2xl p-3 sm:p-4 border border-[#A2C0E6]/30 shadow-2xl space-y-3 relative group">
            
            {/* Banner Media Frame */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#060d16] border border-[#A2C0E6]/20">
              <Image
                src={getThemedImageUrl(post.imageSeed || post.slug, post.category)}
                alt={post.imageAlt || `${post.title} - Digital Marketing & Local SEO Guide Banner by Veiled Story Zirakpur`}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/20 to-transparent p-4 sm:p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-[#060d16]/90 backdrop-blur-md text-[10px] sm:text-xs font-extrabold text-[#A2C0E6] border border-[#A2C0E6]/30 uppercase tracking-widest shadow-md">
                    Featured Article Banner
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold bg-[#060d16]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/30 shadow-md">
                    <Zap className="w-3.5 h-3.5" /> Fast WebP Asset
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-[#A2C0E6] uppercase tracking-wider block">
                    {post.category} • Veiled Story Insights
                  </span>
                  <h2 className="text-base sm:text-xl font-extrabold text-white tracking-tight line-clamp-1">
                    {post.title}
                  </h2>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* AEO & GEO Direct Answer Box (AI Search Engine Snippet) */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="liquid-glass border border-[#A2C0E6]/40 rounded-2xl p-6 shadow-xl space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1.5 uppercase tracking-wider">
                <Bot className="w-4 h-4 text-[#A2C0E6]" /> DIRECT ANSWER SUMMARY
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 font-bold">
                ChatGPT & Gemini Ready
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium bg-[#060d16]/80 p-4 rounded-xl border border-[#A2C0E6]/20">
              &quot;{post.aeoDirectAnswer}&quot;
            </p>
          </div>
        </section>

        {/* Key Takeaways Summary Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="liquid-glass border border-[#A2C0E6]/30 rounded-2xl p-6 space-y-3">
            <h2 className="text-sm font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A2C0E6]" /> Key Strategy Takeaways
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              {post.content.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#060d16]/80 p-3 rounded-xl border border-[#A2C0E6]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Article Body Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300 leading-relaxed text-sm">
          
          {/* Intro */}
          <div className="liquid-glass border border-[#A2C0E6]/20 rounded-2xl p-6 text-slate-200 space-y-3 whitespace-pre-line">
            {post.content.intro}
          </div>

          {/* Dynamic Sections */}
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-extrabold text-white border-b border-[#A2C0E6]/20 pb-2">
                {section.heading}
              </h2>

              {section.subtext && (
                <p className="text-slate-300 font-normal">
                  {section.subtext}
                </p>
              )}

              {section.bulletPoints && (
                <ul className="space-y-2.5 pl-2">
                  {section.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-[#060d16]/80 p-3 rounded-xl border border-[#A2C0E6]/20">
                      <span className="w-2 h-2 rounded-full bg-[#A2C0E6] shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Local Client Case Study Box */}
          {post.content.localCaseStudy && (
            <div className="liquid-glass border border-[#A2C0E6]/40 rounded-2xl p-6 shadow-xl space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#A2C0E6]/20 pb-3">
                <span className="text-xs font-bold text-[#A2C0E6] flex items-center gap-1.5 uppercase">
                  <Building2 className="w-4 h-4 text-[#A2C0E6]" /> Real Local Client Case Result
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Location: {post.content.localCaseStudy.location}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-white">
                  Client: {post.content.localCaseStudy.client}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                  <div className="bg-[#060d16] p-3 rounded-xl border border-[#A2C0E6]/20">
                    <span className="font-bold text-red-400 block mb-1">Challenge:</span>
                    <p className="text-slate-300">{post.content.localCaseStudy.problem}</p>
                  </div>
                  <div className="bg-[#060d16] p-3 rounded-xl border border-[#A2C0E6]/20">
                    <span className="font-bold text-[#A2C0E6] block mb-1">Veiled Story Solution:</span>
                    <p className="text-slate-300">{post.content.localCaseStudy.solution}</p>
                  </div>
                  <div className="bg-[#060d16] p-3 rounded-xl border border-emerald-500/30">
                    <span className="font-bold text-emerald-400 block mb-1">Measured Outcome:</span>
                    <p className="text-emerald-200 font-bold">{post.content.localCaseStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Article FAQs */}
          {post.content.faqs && post.content.faqs.length > 0 && (
            <div className="pt-6 border-t border-[#A2C0E6]/20 space-y-4">
              <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#A2C0E6]" /> Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {post.content.faqs.map((faq, idx) => (
                  <div key={idx} className="liquid-glass border border-[#A2C0E6]/20 rounded-xl p-4 space-y-1.5">
                    <h3 className="font-bold text-white text-xs sm:text-sm">Q: {faq.question}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conclusion */}
          <div className="liquid-glass border border-[#A2C0E6]/30 rounded-2xl p-6 text-slate-200 space-y-3">
            <h2 className="text-lg font-bold text-white">Conclusion & Next Steps</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Author Bio Card for Vishal Sahani */}
          <div className="liquid-glass border border-[#A2C0E6]/40 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#A2C0E6] shrink-0 shadow-lg">
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#A2C0E6] uppercase tracking-wider font-bold">
                      Written By
                    </span>
                    <h3 className="text-lg font-extrabold text-white flex items-center justify-center sm:justify-start gap-2">
                      <Link href="/author/vishal-sahani" className="hover:text-[#A2C0E6] transition-colors">
                        {post.author.name}
                      </Link>
                      <span className="text-[10px] bg-[#A2C0E6]/10 text-[#A2C0E6] px-2 py-0.5 rounded border border-[#A2C0E6]/30 font-bold">
                        10+ Yrs Exp
                      </span>
                    </h3>
                    <p className="text-xs text-[#A2C0E6] font-medium">{post.author.role}</p>
                  </div>

                  <Link
                    href="/author/vishal-sahani"
                    className="inline-flex items-center gap-1 bg-[#060d16] hover:bg-[#A2C0E6]/10 text-[#A2C0E6] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#A2C0E6]/30 transition"
                  >
                    View Full Author Resume & Profile →
                  </Link>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Vishal Sahani is a Senior Digital Marketing Specialist and SEO Expert with over a decade of hands-on experience scaling organic traffic, real estate portals (Propertygkp.com, Investo Homes Advisors), Google Ads, and Meta Lead campaigns across Zirakpur, Chandigarh & India.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400">
                  <a href="tel:+917905403546" className="text-slate-300 hover:text-[#A2C0E6] font-semibold flex items-center gap-1">
                    📞 +91 7905403546
                  </a>
                  <span>•</span>
                  <a href="mailto:Vis792@gmail.com" className="text-slate-300 hover:text-[#A2C0E6] font-semibold flex items-center gap-1">
                    ✉️ Vis792@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </article>

        {/* Sub-Service Internal Links Grid */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-12 liquid-glass border border-[#A2C0E6]/25 rounded-2xl p-6">
          <h3 className="text-xs font-bold text-[#A2C0E6] uppercase tracking-wider mb-3">
            Explore Related Digital Marketing Services in Zirakpur
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <Link href="/services/seo-company-zirakpur" className="p-2.5 rounded-lg bg-[#060d16] border border-[#A2C0E6]/20 hover:border-[#A2C0E6] hover:text-[#A2C0E6] transition text-slate-300">
              • SEO Company in Zirakpur
            </Link>
            <Link href="/services/google-ads-agency" className="p-2.5 rounded-lg bg-[#060d16] border border-[#A2C0E6]/20 hover:border-[#A2C0E6] hover:text-[#A2C0E6] transition text-slate-300">
              • Google Ads Agency
            </Link>
            <Link href="/services/meta-ads-agency" className="p-2.5 rounded-lg bg-[#060d16] border border-[#A2C0E6]/20 hover:border-[#A2C0E6] hover:text-[#A2C0E6] transition text-slate-300">
              • Meta Ads Agency
            </Link>
            <Link href="/services/answer-engine-optimization" className="p-2.5 rounded-lg bg-[#060d16] border border-[#A2C0E6]/20 hover:border-[#A2C0E6] hover:text-[#A2C0E6] transition text-slate-300">
              • AEO & GEO (AI Search)
            </Link>
            <Link href="/services/custom-web-designing" className="p-2.5 rounded-lg bg-[#060d16] border border-[#A2C0E6]/20 hover:border-[#A2C0E6] hover:text-[#A2C0E6] transition text-slate-300">
              • Custom Web Designing
            </Link>
            <Link href="/services/google-business-profile-optimization" className="p-2.5 rounded-lg bg-[#060d16] border border-[#A2C0E6]/20 hover:border-[#A2C0E6] hover:text-[#A2C0E6] transition text-slate-300">
              • Google Business Profile
            </Link>
          </div>
        </section>

        {/* High-Converting CTA Banner */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="liquid-glass border border-[#A2C0E6]/40 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Want These Results For Your Business in Zirakpur or Tricity?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Schedule a free 1-on-1 strategy call with Veiled Story&apos;s technical growth leads. We&apos;ll audit your local competitors and provide a custom growth roadmap.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/917905403546?text=${encodeURIComponent(`Hi Veiled Story! I read your article "${post.title}" and want a digital marketing consultation.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm transition shadow-lg flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" /> Consult Strategy Leads on WhatsApp
              </a>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-[#060d16] border border-[#A2C0E6]/30 text-[#A2C0E6] font-bold text-xs sm:text-sm hover:border-[#A2C0E6] hover:bg-[#A2C0E6]/10 transition"
              >
                Book Office Visit at VIP Road →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
