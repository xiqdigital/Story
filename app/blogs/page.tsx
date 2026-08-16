'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS_DATA, BlogPost } from '@/lib/blogsData';
import { getThemedImageUrl } from '@/lib/imageUtils';
import {
  Search,
  Sparkles,
  ChevronRight,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Tag,
  BookOpen,
  MessageSquare
} from 'lucide-react';

export default function BlogsIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allPosts = Object.values(BLOG_POSTS_DATA);

  const categories = [
    'All',
    'Local SEO & Google Maps',
    'AI Search Engine Optimization',
    'PPC & Meta Ads',
    'Google Business Profile',
    'Web Architecture & Core Web Vitals',
    'B2B Lead Generation',
    'Hospitality & Local Business',
    'E-Commerce Growth',
    'Technical SEO',
    'Social Media & Branding'
  ];

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allPosts[0]; // First article as featured

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://veiledstory.com/blogs/#blog',
        url: 'https://veiledstory.com/blogs',
        name: 'Digital Marketing & Local SEO Insights Blog | Veiled Story',
        description: 'Read high-converting articles on Local SEO, Google Business Profile optimization, Meta Ads, Next.js Web Development, AEO, GEO, and B2B lead generation in Zirakpur and Tricity.',
        publisher: {
          '@type': 'Organization',
          name: 'Veiled Story Digital Marketing Agency',
          url: 'https://veiledstory.com',
        },
        blogPost: allPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `https://veiledstory.com/blogs/${post.slug}`,
          datePublished: '2026-08-08',
          description: post.metaDescription,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://veiledstory.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blogs',
            item: 'https://veiledstory.com/blogs',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#A2C0E6] transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#A2C0E6]" />
            <span className="text-[#A2C0E6] font-medium">Blogs & Insights</span>
          </nav>
        </div>

        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#A2C0E6]" />
              Actionable Growth Playbooks
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Local SEO, AEO & Digital Marketing <span className="bg-gradient-to-r from-white via-[#A2C0E6] to-[#7ba8e0] bg-clip-text text-transparent">Insights Blog</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              In-depth articles engineered to help local businesses in Zirakpur, Chandigarh, Mohali, and Panchkula dominate search engine rankings and generate verified sales inquiries.
            </p>
          </div>
        </section>

        {/* Search & Category Filter Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="liquid-glass border border-[#A2C0E6]/25 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
            
            {/* Search Input Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="w-4 h-4 text-[#A2C0E6] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by keyword, e.g. Local SEO, ChatGPT, Real Estate..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#060d16] border border-[#A2C0E6]/20 text-white text-xs placeholder-slate-400 focus:border-[#A2C0E6] focus:outline-none transition"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-[#A2C0E6] text-[#060d16] shadow-md'
                      : 'bg-[#060d16] text-slate-300 border border-[#A2C0E6]/20 hover:border-[#A2C0E6] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Featured Article Section */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="liquid-glass border border-[#A2C0E6]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" /> Featured Blueprint
                </div>

                <Link href={`/blogs/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl font-black text-white hover:text-[#A2C0E6] transition leading-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5 text-[#A2C0E6] font-medium">
                    <User className="w-3.5 h-3.5" /> {featuredPost.author.name}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> {featuredPost.publishDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> {featuredPost.readTime}
                  </span>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#A2C0E6] text-[#060d16] font-extrabold text-xs hover:bg-white transition shadow-lg"
                  >
                    Read Full Blueprint <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                {/* Featured Blog Banner Image */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#060d16] border border-[#A2C0E6]/25 group">
                  <Image
                    src={getThemedImageUrl(featuredPost.imageSeed || featuredPost.slug, featuredPost.category)}
                    alt={featuredPost.imageAlt || `${featuredPost.title} - Veiled Story Zirakpur Blog Banner`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/20 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#060d16]/90 backdrop-blur-md text-[#A2C0E6] font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#A2C0E6]/30">
                    Featured Banner
                  </span>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 liquid-glass rounded-2xl border border-[#A2C0E6]/20 space-y-3">
              <p className="text-sm text-slate-300 font-medium">No articles found matching &quot;{searchQuery}&quot;.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 rounded-xl bg-[#A2C0E6]/10 text-[#A2C0E6] text-xs font-bold border border-[#A2C0E6]/30 hover:bg-[#A2C0E6]/20 transition"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="liquid-glass-interactive rounded-2xl overflow-hidden border border-[#A2C0E6]/20 flex flex-col justify-between hover:border-[#A2C0E6] transition group shadow-md"
                >
                  {/* Card Image Banner */}
                  <div className="relative aspect-[16/9] w-full bg-[#060d16] overflow-hidden">
                    <Image
                      src={getThemedImageUrl(post.imageSeed || post.slug, post.category)}
                      alt={post.imageAlt || `${post.title} - Veiled Story Zirakpur Blog Article Banner`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#060d16]/90 backdrop-blur-md border border-[#A2C0E6]/30 text-[#A2C0E6] font-extrabold text-[10px] uppercase">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="font-medium text-slate-300">{post.publishDate}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#A2C0E6]" /> {post.readTime}
                        </span>
                      </div>

                      <Link href={`/blogs/${post.slug}`}>
                        <h3 className="text-base font-extrabold text-white group-hover:text-[#A2C0E6] transition leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#A2C0E6]/15">
                      <div className="flex items-center justify-between">
                        <Link 
                          href="/author/vishal-sahani"
                          className="text-[11px] text-[#A2C0E6] hover:underline font-medium transition-colors"
                        >
                          By {post.author.name}
                        </Link>

                        <Link
                          href={`/blogs/${post.slug}`}
                          className="text-xs font-bold text-[#A2C0E6] group-hover:translate-x-1 transition flex items-center gap-1"
                        >
                          Read Article <ChevronRight className="w-3.5 h-3.5 text-[#A2C0E6]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="liquid-glass border border-[#A2C0E6]/30 rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Need Customized Digital Marketing Solutions?</h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Our Zirakpur marketing leads are available for 1-on-1 consultation calls to audit your website, Google Maps listing, and ad funnels.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/917905403546?text=Hi%20Veiled%20Story!%20I%20read%20your%20blog%20and%20want%20a%20digital%20marketing%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm inline-flex items-center gap-2 transition shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-slate-950" /> Consult Strategy Leads on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
