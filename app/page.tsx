'use client';

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/data';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ServicesSection } from '@/components/ServicesSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { LocationsSection } from '@/components/LocationsSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { ApproachSection } from '@/components/ApproachSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogsSection } from '@/components/BlogsSection';
import { FaqSection } from '@/components/FaqSection';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/Footer';
import { RoiCalculator } from '@/components/RoiCalculator';
import { SeoAuditModal } from '@/components/SeoAuditModal';
import { MessageSquare, Phone, Calculator, Sparkles } from 'lucide-react';

export default function HomePage() {
  const [isRoiCalcOpen, setIsRoiCalcOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleFloatingWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Veiled Story! I am visiting ${SITE_CONFIG.domain} and looking for a Digital Marketing Company in Zirakpur / Tricity (+917905403546).`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen relative bg-[#060d16] text-slate-100">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenRoiCalc={() => setIsRoiCalcOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* Hero Section with H1 and H2 */}
        <Hero
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
          onOpenRoiCalc={() => setIsRoiCalcOpen(true)}
        />

        {/* Why Choose Veiled Story Section */}
        <WhyChooseUs />

        {/* Our Digital Marketing Services in Zirakpur Section */}
        <ServicesSection />

        {/* Client Growth Case Studies & Before vs After Metrics */}
        <CaseStudiesSection />

        {/* Locations Section (Chandigarh, Panchkula, Mohali, Zirakpur) */}
        <LocationsSection />

        {/* Industry Solutions */}
        <IndustriesSection />

        {/* Our Approach & Growth Benefits */}
        <ApproachSection />

        {/* Client Testimonials & Success Stories Carousel */}
        <TestimonialsSection />

        {/* Latest Blogs & Digital Marketing Articles */}
        <BlogsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Ready to Grow CTA */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <RoiCalculator
        isOpen={isRoiCalcOpen}
        onClose={() => setIsRoiCalcOpen(false)}
      />

      <SeoAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

    </div>
  );
}
