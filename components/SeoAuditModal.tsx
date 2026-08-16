'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/lib/data';
import { Sparkles, MessageSquare, ShieldCheck, CheckCircle2, X } from 'lucide-react';

interface SeoAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoAuditModal: React.FC<SeoAuditModalProps> = ({ isOpen, onClose }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Zirakpur');
  const [selectedServices, setSelectedServices] = useState<string[]>(['SEO']);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmitAudit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Veiled Story! I would like a Free Digital Marketing & SEO Audit:\n` +
      `- Business Name: ${businessName || 'N/A'}\n` +
      `- Website URL: ${websiteUrl || 'Not yet built'}\n` +
      `- Phone Number: ${phone || 'N/A'}\n` +
      `- Location: ${location}\n` +
      `- Services Needed: ${selectedServices.join(', ')}\n` +
      `Please audit my website and send a customized growth plan.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060d16]/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg liquid-glass rounded-3xl p-6 sm:p-8 border border-[#A2C0E6]/40 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#A2C0E6]/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#A2C0E6]" />
            <h3 className="text-base font-bold text-white">
              Free Digital Marketing Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-xl bg-[#060d16] text-slate-300 hover:text-[#A2C0E6] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300">
          Request a 100% free technical SEO audit, Google Map score, and competitor analysis tailored for Zirakpur, Chandigarh, Panchkula & Mohali.
        </p>

        <form onSubmit={handleSubmitAudit} className="space-y-4">
          
          <div className="space-y-1">
            <label htmlFor="auditBusinessName" className="text-[11px] font-semibold text-slate-300">Business / Brand Name</label>
            <input
              id="auditBusinessName"
              type="text"
              required
              placeholder="e.g., Royal Crest Real Estate Zirakpur"
              aria-label="Business or Brand Name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full bg-[#060d16] border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="auditWebsiteUrl" className="text-[11px] font-semibold text-slate-300">Website URL (if available)</label>
            <input
              id="auditWebsiteUrl"
              type="text"
              placeholder="e.g., https://mybusiness.com"
              aria-label="Website URL"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="w-full bg-[#060d16] border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="auditPhone" className="text-[11px] font-semibold text-slate-300">Phone / WhatsApp</label>
              <input
                id="auditPhone"
                type="tel"
                required
                placeholder="+91 XXXXX XXXXX"
                aria-label="Phone or WhatsApp Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#060d16] border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="auditPrimaryLocation" className="text-[11px] font-semibold text-slate-300">Primary Location</label>
              <select
                id="auditPrimaryLocation"
                aria-label="Primary Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#060d16] border border-[#A2C0E6]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#A2C0E6]"
              >
                <option value="Zirakpur">Zirakpur</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Panchkula">Panchkula</option>
                <option value="Mohali">Mohali</option>
              </select>
            </div>
          </div>

          {/* Service selection checkboxes */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-300">Select Services Needed:</label>
            <div className="flex flex-wrap gap-2">
              {['SEO & Google Maps', 'Google Ads (PPC)', 'Social Media', 'Website Design'].map((srv) => {
                const isSelected = selectedServices.includes(srv);
                return (
                  <button
                    type="button"
                    key={srv}
                    onClick={() => toggleService(srv)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition border ${
                      isSelected
                        ? 'bg-[#A2C0E6] text-[#060d16] border-[#A2C0E6]'
                        : 'bg-[#060d16] text-slate-400 border-[#A2C0E6]/20 hover:text-white'
                    }`}
                  >
                    {srv}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#060d16]/80 border border-[#A2C0E6]/20 text-[11px] text-slate-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A2C0E6] shrink-0" />
            <span>Direct WhatsApp Enquiry sent to official team</span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl text-xs font-bold text-[#060d16] bg-[#A2C0E6] hover:bg-white shadow-lg shadow-[#A2C0E6]/20 transition duration-300 flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-[#060d16]" />
            <span>Submit via WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
};
