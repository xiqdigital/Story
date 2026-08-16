import React from 'react';
import Link from 'next/link';
import { Home, Search, ArrowRight, PhoneCall } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060d16] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-4 pt-28 pb-16">
        <div className="max-w-xl w-full p-8 sm:p-10 rounded-3xl bg-[#09131f] border border-[#A2C0E6]/30 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1E3E62]/40 text-[#A2C0E6] text-xs font-semibold">
            Error 404 • Page Not Found
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Looking for Digital Growth?
          </h1>

          <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            The page you are looking for might have been moved or updated. Let&apos;s get you back on track to grow your business in Zirakpur &amp; Tricity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="py-3 px-6 rounded-xl bg-[#A2C0E6] hover:bg-white text-[#060d16] font-bold text-xs shadow-lg shadow-[#A2C0E6]/20 transition flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <Link
              href="/seo-company-in-zirakpur"
              className="py-3 px-6 rounded-xl bg-[#060d16] hover:bg-[#102238] border border-[#A2C0E6]/30 text-white font-semibold text-xs transition flex items-center gap-2"
            >
              <Search className="w-4 h-4 text-[#A2C0E6]" />
              <span>SEO Services Zirakpur</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
            Need urgent assistance? WhatsApp Vishal Sahani at{' '}
            <a
              href="https://wa.me/917905403546"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A2C0E6] underline font-semibold hover:text-white"
            >
              +91 79054 03546
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
