import React from 'react';
import { Sparkles, ImageIcon, CheckCircle2, Layers, LucideIcon } from 'lucide-react';

export interface SeoImagePlaceholderProps {
  altText: string;
  captionTitle: string;
  category: string;
  dimensions?: string;
  aspectRatio?: '16/9' | '4/3' | '21/9' | '1/1' | '3/2';
  icon?: LucideIcon;
  badgeText?: string;
  schemaKeywords?: string[];
  mockType?: 'funnel' | 'dashboard' | 'search_ad' | 'landing_page' | 'map_rank' | 'social_ad' | 'workflow' | 'analytics';
  className?: string;
}

export function SeoImagePlaceholder({
  altText,
  captionTitle,
  category,
  dimensions = '1200 × 675 (16:9)',
  aspectRatio = '16/9',
  icon: Icon = ImageIcon,
  badgeText = 'Verified Visual Blueprint',
  schemaKeywords = [],
  mockType = 'dashboard',
  className = '',
}: SeoImagePlaceholderProps) {
  const getAspectClass = () => {
    switch (aspectRatio) {
      case '21/9':
        return 'aspect-[21/9]';
      case '4/3':
        return 'aspect-[4/3]';
      case '1/1':
        return 'aspect-square';
      case '3/2':
        return 'aspect-[3/2]';
      case '16/9':
      default:
        return 'aspect-[16/9]';
    }
  };

  return (
    <figure
      role="group"
      aria-label={altText}
      className={`group relative overflow-hidden rounded-3xl border border-[#A2C0E6]/30 bg-gradient-to-b from-[#0e1d2f]/90 via-[#081320]/80 to-[#04080e]/95 p-4 sm:p-6 shadow-2xl transition-all duration-300 hover:border-[#A2C0E6]/60 hover:shadow-[#A2C0E6]/10 ${className}`}
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#A2C0E6]/10 blur-3xl transition-all duration-500 group-hover:bg-[#A2C0E6]/20" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#1E3E62]/20 blur-3xl" />

      {/* Header Info Bar */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#A2C0E6]/15 pb-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#A2C0E6]/15 text-[#A2C0E6]">
            <Icon className="h-3.5 w-3.5" />
          </div>
          <span className="font-bold uppercase tracking-wider text-[#A2C0E6] text-[11px]">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-slate-800/80 px-2.5 py-0.5 font-mono text-[10px] text-slate-400 border border-slate-700">
            {dimensions} • WebP
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#A2C0E6]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#A2C0E6] border border-[#A2C0E6]/20">
            <Sparkles className="h-2.5 w-2.5" />
            {badgeText}
          </span>
        </div>
      </div>

      {/* Visual Canvas with Simulated Mockup */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-[#A2C0E6]/20 bg-[#060c14]/90 flex flex-col justify-between p-4 sm:p-6 ${getAspectClass()}`}
      >
        {/* Subtle Blueprint Grid pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#A2C0E6 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Mock Graphics based on Type */}
        {mockType === 'dashboard' && (
          <div className="relative z-10 w-full space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-300">Live ROI Telemetry & Lead Tracker</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                +340% Pipeline Velocity
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-slate-900/80 p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400">Total Verified Inquiries</div>
                <div className="text-sm sm:text-base font-extrabold text-white">1,840+</div>
              </div>
              <div className="rounded-lg bg-slate-900/80 p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400">Average CPL (₹)</div>
                <div className="text-sm sm:text-base font-extrabold text-[#A2C0E6]">₹280</div>
              </div>
              <div className="rounded-lg bg-slate-900/80 p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400">Net ROAS Multiplier</div>
                <div className="text-sm sm:text-base font-extrabold text-amber-400">9.2x</div>
              </div>
            </div>
            {/* Simulated Chart Bars */}
            <div className="flex items-end gap-1.5 h-14 sm:h-20 pt-2 px-1">
              {[35, 48, 42, 65, 58, 80, 72, 92, 88, 100].map((height, idx) => (
                <div key={idx} className="flex-1 bg-gradient-to-t from-[#1E3E62] to-[#A2C0E6] rounded-t-sm opacity-85 hover:opacity-100 transition" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        )}

        {mockType === 'funnel' && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-[10px] text-slate-400 font-medium">
              <span>Full-Funnel Multi-Touch Attribution</span>
              <span className="text-[#A2C0E6]">100% Verified Quality</span>
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between rounded-lg bg-[#A2C0E6]/10 px-3 py-1.5 border border-[#A2C0E6]/20 text-xs">
                <span className="text-slate-200 font-semibold">1. Search & Social Intent Mining</span>
                <span className="font-mono text-[#A2C0E6] text-[11px]">10,000+ Impressions</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#A2C0E6]/15 px-3 py-1.5 border border-[#A2C0E6]/25 text-xs">
                <span className="text-slate-200 font-semibold">2. High-Converting Liquid Glass Landing Page</span>
                <span className="font-mono text-[#A2C0E6] text-[11px]">24.8% Conv. Rate</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#A2C0E6]/20 px-3 py-1.5 border border-[#A2C0E6]/30 text-xs">
                <span className="text-slate-200 font-semibold">3. OTP & Multi-Step Lead Qualification</span>
                <span className="font-mono text-[#A2C0E6] text-[11px]">Zero Junk Leads</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-emerald-500/20 px-3 py-1.5 border border-emerald-500/40 text-xs">
                <span className="text-emerald-300 font-bold">4. Sales Qualified Leads (SQL) to CRM</span>
                <span className="font-mono text-emerald-300 font-bold text-[11px]">&lt;10s WhatsApp Alert</span>
              </div>
            </div>
          </div>
        )}

        {mockType === 'search_ad' && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <span className="font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded">Ad</span>
              <span className="text-slate-400 font-mono">https://veiledstory.com/lead-generation</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#A2C0E6] leading-tight">
              Top Lead Generation Company in Zirakpur | High-Intent B2B & Real Estate Leads
            </div>
            <p className="text-[11px] text-slate-300 line-clamp-2">
              Generate 100% verified inquiries on PR7 Airport Road, VIP Road & Tricity. Google Search PPC & Meta Ads.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1 text-[10px]">
              <span className="bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-slate-300">★ High Commercial Intent</span>
              <span className="bg-slate-900 border border-slate-700 px-2 py-0.5 rounded text-slate-300">★ Negative Keyword Scrubbed</span>
              <span className="bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded text-emerald-400 font-semibold">Quality Score 10/10</span>
            </div>
          </div>
        )}

        {mockType === 'landing_page' && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center justify-between bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 text-[10px]">
              <span className="font-mono text-slate-400">LCP: 0.85s • CLS: 0.00 • FID: 12ms</span>
              <span className="text-emerald-400 font-bold">100/100 Core Web Vitals</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="rounded-lg bg-slate-900/80 p-2.5 border border-slate-800 space-y-1">
                <div className="h-2 w-3/4 rounded bg-[#A2C0E6]/40" />
                <div className="h-2 w-1/2 rounded bg-slate-700" />
                <div className="h-5 w-full rounded bg-[#A2C0E6]/20 border border-[#A2C0E6]/30 flex items-center justify-center text-[9px] text-[#A2C0E6] font-bold mt-2">
                  Instant Quote CTA
                </div>
              </div>
              <div className="rounded-lg bg-slate-900/80 p-2.5 border border-slate-800 space-y-1.5">
                <div className="text-[9px] text-slate-400 font-semibold">Multi-Step Form</div>
                <div className="h-2 w-full rounded bg-slate-700" />
                <div className="h-2 w-4/5 rounded bg-slate-700" />
                <div className="flex justify-between items-center text-[8px] text-emerald-400 pt-1">
                  <span>✔ OTP Verified</span>
                  <span>✔ 28% CR</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {mockType === 'map_rank' && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1.5">
              <span className="text-white font-bold">Google Local 3-Pack Map Dominance</span>
              <span className="text-amber-400 font-semibold">Rank #1 on VIP Road</span>
            </div>
            <div className="space-y-1.5">
              <div className="rounded-lg bg-[#A2C0E6]/10 p-2 border border-[#A2C0E6]/30 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">Veiled Story Digital Marketing Agency</div>
                  <div className="text-[10px] text-slate-400">SCO 14, 2nd Floor, VIP Road, Zirakpur • 4.9 ★★★★★ (148)</div>
                </div>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold border border-emerald-800">
                  #1 Ranking
                </span>
              </div>
              <div className="rounded-lg bg-slate-900/50 p-1.5 border border-slate-800 text-[10px] text-slate-400 flex justify-between">
                <span>Direct Inbound Phone Calls Generated</span>
                <span className="text-white font-bold">120+ Calls/Mo</span>
              </div>
            </div>
          </div>
        )}

        {mockType === 'social_ad' && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1.5">
              <span className="text-[#A2C0E6] font-bold">Meta Ads (Facebook & Instagram Feed)</span>
              <span className="text-slate-300">High-Converting Instant Form</span>
            </div>
            <div className="rounded-lg bg-slate-900/90 p-2 border border-slate-800 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-[#A2C0E6]/30 flex items-center justify-center text-[9px] font-bold text-white">VS</div>
                <div className="text-[10px] font-bold text-white">Veiled Story Sponsored</div>
              </div>
              <div className="text-[11px] text-slate-300">
                Luxury 3 BHK on PR7 Airport Road Zirakpur • Starting ₹75 Lakhs • Download Price Sheet
              </div>
              <div className="flex justify-between items-center bg-[#A2C0E6]/10 px-2.5 py-1.5 rounded border border-[#A2C0E6]/25">
                <span className="text-[10px] text-slate-200 font-semibold">Book Site Visit via WhatsApp</span>
                <span className="text-[9px] bg-[#A2C0E6] text-[#060d16] font-bold px-2 py-0.5 rounded">Learn More</span>
              </div>
            </div>
          </div>
        )}

        {mockType === 'workflow' && (
          <div className="relative z-10 w-full space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1">
              <span className="text-white font-bold">Instant Lead Dispatch Architecture</span>
              <span className="text-emerald-400 font-mono">Latency: 8.2 Seconds</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 pt-1 text-center">
              <div className="rounded bg-slate-900 p-1.5 border border-slate-800">
                <div className="text-[9px] text-slate-400">1. Inquiry</div>
                <div className="text-[10px] font-bold text-[#A2C0E6]">Web/Ad Form</div>
              </div>
              <div className="rounded bg-slate-900 p-1.5 border border-slate-800">
                <div className="text-[9px] text-slate-400">2. OTP Check</div>
                <div className="text-[10px] font-bold text-white">Validated</div>
              </div>
              <div className="rounded bg-slate-900 p-1.5 border border-slate-800">
                <div className="text-[9px] text-slate-400">3. CRM Sync</div>
                <div className="text-[10px] font-bold text-white">Auto-Tagged</div>
              </div>
              <div className="rounded bg-emerald-950/80 p-1.5 border border-emerald-800">
                <div className="text-[9px] text-emerald-400">4. WhatsApp</div>
                <div className="text-[10px] font-bold text-emerald-300">Instant Alert</div>
              </div>
            </div>
          </div>
        )}

        {mockType === 'analytics' && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1">
              <span className="text-white font-bold">Client CAC & LTV Financial Matrix</span>
              <span className="text-emerald-400 font-bold">LTV:CAC Ratio 5.2 : 1</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="rounded bg-slate-900 p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400">Customer Acquisition Cost</div>
                <div className="text-sm font-bold text-white">₹1,450</div>
                <div className="text-[9px] text-emerald-400 mt-0.5">▼ 42% vs Industry Average</div>
              </div>
              <div className="rounded bg-slate-900 p-2 border border-slate-800">
                <div className="text-[9px] text-slate-400">Average Customer LTV</div>
                <div className="text-sm font-bold text-[#A2C0E6]">₹7,540</div>
                <div className="text-[9px] text-emerald-400 mt-0.5">▲ High Repeat & Referral Rate</div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar: Alt Text & SEO Metadata */}
        <div className="relative z-10 mt-3 flex items-center justify-between border-t border-slate-800 pt-2 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3 w-3 text-emerald-400" />
            <span className="text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xs">
              {captionTitle}
            </span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[9px] text-slate-500">
            <Layers className="h-2.5 w-2.5" />
            <span>SEO Optimized</span>
          </div>
        </div>
      </div>

      {/* Semantic Figcaption with Full SEO Alt Text Description */}
      <figcaption className="mt-3.5 space-y-1.5 text-left">
        <div className="flex items-start gap-1.5 text-xs text-slate-300 leading-snug">
          <span className="font-bold text-[#A2C0E6] shrink-0 text-[11px] uppercase tracking-wide">
            Image Alt Text:
          </span>
          <span className="text-slate-300 font-medium italic text-[11px]">
            &ldquo;{altText}&rdquo;
          </span>
        </div>

        {schemaKeywords.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {schemaKeywords.map((kw, idx) => (
              <span
                key={idx}
                className="rounded-md bg-slate-800/90 px-2 py-0.5 text-[9px] font-medium text-slate-400 border border-slate-700/60"
              >
                #{kw}
              </span>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
