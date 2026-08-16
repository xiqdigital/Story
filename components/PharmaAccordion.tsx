'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export interface AccordionItem {
  id: string;
  title: string;
  badge?: string;
  subtitle?: string;
  content: React.ReactNode;
}

interface PharmaAccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
}

export function PharmaAccordion({ items, defaultOpenId, allowMultiple = false }: PharmaAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : [items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
              isOpen
                ? 'bg-[#0b1829]/90 border-[#A2C0E6]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(162,192,230,0.1)]'
                : 'bg-[#060d16]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#08121f]'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition group"
              aria-expanded={isOpen}
            >
              <div className="space-y-1 pr-2">
                <div className="flex flex-wrap items-center gap-2">
                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#A2C0E6]/15 text-[#A2C0E6] border border-[#A2C0E6]/30">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#A2C0E6] transition">
                    {item.title}
                  </h3>
                </div>
                {item.subtitle && (
                  <p className="text-xs text-slate-400 font-normal leading-relaxed">{item.subtitle}</p>
                )}
              </div>

              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 border ${
                  isOpen
                    ? 'bg-[#A2C0E6] text-[#060d16] border-[#A2C0E6] rotate-180'
                    : 'bg-slate-800 text-slate-300 border-slate-700 group-hover:border-[#A2C0E6]/40'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-[#A2C0E6]/15 text-slate-300 text-sm leading-relaxed space-y-3">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
