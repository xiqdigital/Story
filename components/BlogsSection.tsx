'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BLOGS_DATA, BlogPost } from '@/lib/data';
import { getThemedImageUrl } from '@/lib/imageUtils';
import { BookOpen, Calendar, Clock, ArrowUpRight, Sparkles, User } from 'lucide-react';

export const BlogsSection: React.FC = () => {
  return (
    <section id="blogs" className="py-20 relative overflow-hidden bg-[#060d16] border-t border-[#A2C0E6]/20">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A2C0E6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-bold tracking-wide uppercase">
            <BookOpen className="w-3.5 h-3.5 text-[#A2C0E6]" />
            Digital Growth & Marketing Blog
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Latest Marketing Insights, Guides & <span className="bg-gradient-to-r from-white via-[#A2C0E6] to-[#7ba8e0] bg-clip-text text-transparent">SEO Strategies</span>
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Actionable strategies written by our local SEO specialists, performance marketers, and web developers in Zirakpur & Tricity to help your business scale.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOGS_DATA.map((article: BlogPost) => (
            <article
              key={article.id}
              className="liquid-glass border border-[#A2C0E6]/20 hover:border-[#A2C0E6]/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#A2C0E6]/10 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-[#060d16]">
                <Image
                  src={getThemedImageUrl(article.imageSeed, article.category)}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060d16] via-[#060d16]/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#A2C0E6] text-[#060d16] font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                  {article.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#A2C0E6]" /> {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#A2C0E6]" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#A2C0E6] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-3 border-t border-[#A2C0E6]/20 flex items-center justify-between">
                  <Link href="/author/vishal-sahani" className="text-[11px] text-slate-300 hover:text-[#A2C0E6] flex items-center gap-1 transition-colors">
                    <User className="w-3 h-3 text-[#A2C0E6]" /> {article.author}
                  </Link>
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#A2C0E6] group-hover:text-white transition"
                  >
                    Read More <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center liquid-glass border border-[#A2C0E6]/30 rounded-2xl p-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#A2C0E6]" /> Want Custom Marketing Insights for Your Business?
            </h4>
            <p className="text-xs text-slate-300">
              Get a free 1-on-1 strategy audit from our Zirakpur team on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/917905403546?text=Hi%20Veiled%20Story!%20I%20read%20your%20blog%20and%20want%20a%20free%20growth%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#A2C0E6] text-[#060d16] text-xs font-extrabold shrink-0 hover:bg-white transition duration-300 shadow-lg"
          >
            WhatsApp Audit →
          </a>
        </div>

      </div>
    </section>
  );
};
