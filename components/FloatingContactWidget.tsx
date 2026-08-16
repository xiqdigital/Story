'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/data';

// Official Crisp WhatsApp Vector Icon
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.276-.1-.477-.15-.677.15-.201.3-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.3-.019-.463.132-.613.135-.135.301-.351.452-.527.15-.175.201-.3.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.928-2.238-.244-.588-.493-.508-.677-.518-.175-.009-.376-.01-.577-.01-.201 0-.527.075-.803.376-.276.3-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.379.198 1.9.12.58-.088 1.782-.728 2.033-1.432.251-.703.251-1.306.176-1.432-.076-.126-.276-.201-.577-.351z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.892.525 3.662 1.438 5.176L2 22l4.966-1.405A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.57 0-3.045-.45-4.298-1.23l-.308-.192-2.949.835.845-2.87-.2-.318A8.134 8.134 0 013.833 12C3.833 7.49 7.49 3.833 12 3.833S20.167 7.49 20.167 12 16.51 20.167 12 20.167z"
      />
    </svg>
  );
}

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneFormatted = '+91 79054 03546';
  const rawPhone = SITE_CONFIG.phone || '+917905403546';
  const whatsappNum = SITE_CONFIG.whatsappNumber || '917905403546';
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(
    'Hi Vishal Sahani, I would like to discuss digital marketing & SEO services for my business.'
  )}`;

  return (
    <aside
      aria-label="Quick Call and WhatsApp Contact Widget"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto select-none"
    >
      {/* Expanded Quick Contact Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[calc(100vw-32px)] max-w-[340px] rounded-2xl p-4 bg-[#09131F]/95 backdrop-blur-md border border-[#A2C0E6]/30 shadow-[0_12px_40px_rgba(0,0,0,0.7)] text-slate-200 space-y-3.5"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1E3E62] to-[#A2C0E6] flex items-center justify-center font-bold text-white text-xs shadow">
                    VS
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#09131F]" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs flex items-center gap-1.5">
                    Vishal Sahani
                    <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-[#A2C0E6]/20 text-[#A2C0E6] font-medium">
                      SEO Expert
                    </span>
                  </div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Zirakpur & Tricity
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
                aria-label="Close contact window"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed bg-[#060D16] p-2.5 rounded-xl border border-slate-800/80">
              Need instant growth consulting, Google 3-Pack rankings, or qualified leads in Zirakpur & Tricity?
            </p>

            {/* Actions */}
            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs shadow-md transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <div className="text-left">
                    <div className="text-[10px] font-normal opacity-90 leading-tight">Chat on WhatsApp</div>
                    <div className="text-xs font-bold leading-tight">{phoneFormatted}</div>
                  </div>
                </div>
                <span className="text-[9px] bg-black/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  Instant
                </span>
              </a>

              <a
                href={`tel:${rawPhone}`}
                className="flex items-center justify-between w-full p-2.5 rounded-xl bg-[#0F2847] hover:bg-[#153459] border border-[#A2C0E6]/30 text-white font-semibold text-xs transition-all active:scale-[0.98]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#A2C0E6]/20 flex items-center justify-center text-[#A2C0E6]">
                    <Phone className="w-3 h-3" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-normal text-slate-300 leading-tight">Direct Phone Call</div>
                    <div className="text-xs font-bold text-[#A2C0E6] leading-tight">{phoneFormatted}</div>
                  </div>
                </div>
                <span className="text-[9px] bg-[#A2C0E6]/20 text-[#A2C0E6] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                  Call Now
                </span>
              </a>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>100% Free Consultation</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#A2C0E6]" />
                <span>Quick Response</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons: Sleek, Mobile-Friendly, Crisp */}
      <div className="flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href={`tel:${rawPhone}`}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0E243F] hover:bg-[#15375E] text-[#A2C0E6] hover:text-white border border-[#A2C0E6]/40 shadow-lg flex items-center justify-center transition-transform active:scale-95"
          aria-label="Direct Phone Call: +91 79054 03546"
          title="Direct Call: +91 79054 03546"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <div className="relative">
          {/* Subtle clean ping ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] flex items-center justify-center transition-transform active:scale-95 border-2 border-white/30"
            aria-label="Open WhatsApp & Call Contact Options"
            title="Chat on WhatsApp (+91 79054 03546)"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <WhatsAppIcon className="w-6 h-6 fill-white" />
            )}
            
            {/* Active Status Dot */}
            {!isOpen && (
              <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-white border-2 border-[#25D366] shadow-sm flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-[#25D366]" />
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
