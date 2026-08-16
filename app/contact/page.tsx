'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG, FAQS_DATA } from '@/lib/data';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  Building2,
  Award
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'Local SEO & Google Maps',
    budget: '₹20,000 - ₹50,000 / month',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Veiled Story! My name is ${formData.name || 'a client'}. Phone: ${formData.phone || 'N/A'}. Company: ${formData.company || 'N/A'}. Service Interested: ${formData.service}. Message: ${formData.message || 'I would like a digital marketing consultation.'}`
    );
    window.open(`https://wa.me/917905403546?text=${text}`, '_blank');
  };

  const contactFaqs = FAQS_DATA.slice(0, 5);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `https://${SITE_CONFIG.domain}/contact/#webpage`,
        url: `https://${SITE_CONFIG.domain}/contact`,
        name: 'Contact Us | Veiled Story Digital Marketing Agency Zirakpur',
        description: 'Get in touch with Veiled Story for a free digital marketing consultation, local SEO audit, or performance marketing plan in Zirakpur, Chandigarh, Mohali & Panchkula.',
        mainEntity: {
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
              name: 'Contact Us',
              item: `https://${SITE_CONFIG.domain}/contact`,
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0b1318] text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="pt-28 pb-20">
        
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-medium">Contact Us</span>
          </nav>
        </div>

        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold tracking-wide uppercase">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              Direct Helpline & Local VIP Road Office
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Let&apos;s Scale Your Business in <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Zirakpur & Tricity</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Have questions about local SEO, Google Ads, Meta Lead Ads, or Next.js web development? Speak directly with our strategy leads or schedule an in-person consultation at our Zirakpur office.
            </p>
          </div>
        </section>

        {/* Grid: NAP Details & Interactive Consultation Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Official Contact Info (NAP & Maps) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary Contact Card */}
              <div className="bg-slate-900/90 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-cyan-400" /> Veiled Story Agency HQ
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Official Registered Business Details
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xs uppercase text-slate-400 tracking-wider">Office Address</h3>
                      <p className="text-slate-200 mt-0.5 font-medium leading-snug">
                        SCO 14, 2nd Floor, VIP Road, High Street Market, Zirakpur, Punjab 140603, India
                      </p>
                      <p className="text-[11px] text-teal-300 mt-1">
                        Landmark: Near VIP Road Highway Junction
                      </p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xs uppercase text-slate-400 tracking-wider">Helpline & WhatsApp</h3>
                      <p className="text-slate-200 mt-0.5 font-bold">
                        <a href="tel:+917905403546" className="hover:text-cyan-300 transition">+91 7905403546</a>
                      </p>
                      <p className="text-[11px] text-emerald-400 mt-0.5">
                        Instant WhatsApp Response Guaranteed
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xs uppercase text-slate-400 tracking-wider">Official Email</h3>
                      <p className="text-slate-200 mt-0.5 font-medium">
                        <a href="mailto:contact@veiledstory.com" className="hover:text-cyan-300 transition">contact@veiledstory.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xs uppercase text-slate-400 tracking-wider">Operating Hours</h3>
                      <p className="text-slate-200 mt-0.5 font-medium">
                        Monday – Saturday: 9:00 AM – 7:30 PM IST
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Sunday: By Appointment Only</p>
                    </div>
                  </div>

                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/917905403546?text=Hi%20Veiled%20Story!%20I%20am%20looking%20for%20a%20digital%20marketing%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 hover:brightness-110 transition shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp Us
                  </a>

                  <a
                    href="tel:+917905403546"
                    className="py-2.5 px-3 rounded-xl bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-700 transition"
                  >
                    <Phone className="w-4 h-4" /> Call Helpline
                  </a>
                </div>

              </div>

              {/* Google Maps Location Preview Frame */}
              <div className="bg-slate-900/80 border border-teal-500/20 rounded-3xl p-4 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between mb-3 px-2">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-cyan-400" /> VIP Road Zirakpur Location
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Location
                  </span>
                </div>

                <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
                  <iframe
                    title="Veiled Story Office VIP Road Zirakpur Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13727.18432328045!2d76.8100!3d30.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb2f6a9e14a1%3A0x8e8b2b6216a3c61b!2sVIP%20Rd%2C%20Zirakpur%2C%20Punjab%20140603!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter opacity-90 contrast-125"
                  />
                </div>
              </div>

            </div>

            {/* Right Column: Masterpiece Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 border border-teal-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

                <div className="mb-8 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold">
                    <Sparkles className="w-3.5 h-3.5" /> Free Growth Consultation & Strategy Call
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Send Us Your Project Brief
                  </h2>
                  <p className="text-xs text-slate-300">
                    Fill out this quick form and our lead digital growth strategist will contact you within 2 hours with a preliminary audit and customized roadmap.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4 my-8">
                    <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Thank You, {formData.name || 'Valued Client'}!</h3>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                      Your project brief has been received by our Zirakpur strategy team. We are analyzing your request and will get back to you shortly.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-300 to-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 hover:brightness-110 transition"
                      >
                        <MessageSquare className="w-4 h-4" /> Connect Immediately on WhatsApp →
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="rajesh@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                        />
                      </div>

                      {/* Business Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Business / Clinic / Brand Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Royal Heights Zirakpur"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Choice */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Primary Service Needed</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                        >
                          <option>Local SEO & Google Maps</option>
                          <option>Google Ads (PPC Leads)</option>
                          <option>Meta Ads (FB & Instagram Leads)</option>
                          <option>AEO & GEO (AI Search Optimization)</option>
                          <option>Next.js / WordPress Web Design</option>
                          <option>Full-Funnel Digital Marketing</option>
                        </select>
                      </div>

                      {/* Budget */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Estimated Monthly Marketing Budget</label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition"
                        >
                          <option>₹15,000 - ₹30,000 / month</option>
                          <option>₹30,000 - ₹60,000 / month</option>
                          <option>₹60,000 - ₹1,50,000 / month</option>
                          <option>₹1,50,000+ / month (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Project Goals & Message *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your target location, current search ranking, or monthly lead targets..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none transition resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition active:scale-95"
                      >
                        <Send className="w-4 h-4" /> Submit Strategy Request
                      </button>

                      <p className="text-[11px] text-slate-400 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Privacy Protected
                      </p>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* Frequently Asked Contact Questions */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" /> FAQs About Working With Us
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Got Questions Before Contacting Us?</h2>
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-teal-500/20 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-cyan-300 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
