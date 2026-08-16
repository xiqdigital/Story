import type { Metadata } from 'next';
import './globals.css';
import { SITE_CONFIG } from '@/lib/data';
import { FloatingContactWidget } from '@/components/FloatingContactWidget';

export const metadata: Metadata = {
  title: {
    default: 'Digital Marketing Agency in Zirakpur & Tricity | Veiled Story',
    template: '%s | Veiled Story Digital Marketing Agency',
  },
  description:
    'Grow your business with Veiled Story—top digital marketing agency in Zirakpur & Tricity. We deliver ROI-driven SEO, Google Ads, AEO, GEO & Web Design. Call today!',
  keywords: [
    'Veiled Story Digital Marketing Agency',
    'Digital Marketing Agency in Zirakpur',
    'Best SEO Company Zirakpur',
    'Digital Marketing Agency Chandigarh',
    'PPC Google Ads Agency Mohali',
    'Local SEO Panchkula',
    'Veiled Story Zirakpur',
    'Vishal Sahani Digital Marketing',
    'Web Design Company Zirakpur',
  ],
  authors: [{ name: 'Vishal Sahani', url: `https://${SITE_CONFIG.domain}/author/vishal-sahani` }],
  creator: 'Veiled Story Digital Marketing Agency',
  publisher: 'Veiled Story Digital Marketing Agency',
  metadataBase: new URL(`https://${SITE_CONFIG.domain}`),
  openGraph: {
    title: 'Digital Marketing Agency in Zirakpur & Tricity | Veiled Story',
    description:
      'Grow your business with Veiled Story—top digital marketing agency in Zirakpur & Tricity. We deliver ROI-driven SEO, Google Ads, AEO, GEO & Web Design. Call today!',
    url: `https://${SITE_CONFIG.domain}`,
    siteName: 'Veiled Story Digital Marketing Agency',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Zirakpur & Tricity | Veiled Story',
    description:
      'Grow your business with Veiled Story—top digital marketing agency in Zirakpur & Tricity. We deliver ROI-driven SEO, Google Ads, AEO, GEO & Web Design. Call today!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Masterpiece Ultra-detailed All-in-one Schema.org JSON-LD Structured Data Graph
const masterAllInOneSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `https://${SITE_CONFIG.domain}/#organization`,
      'name': 'Veiled Story Digital Marketing Agency',
      'alternateName': ['Veiled Story', 'Veiled Story Digital Growth Agency'],
      'url': `https://${SITE_CONFIG.domain}`,
      'logo': {
        '@type': 'ImageObject',
        'url': `https://${SITE_CONFIG.domain}/logo.png`,
        'caption': 'Veiled Story Digital Marketing Agency Logo',
      },
      'image': `https://${SITE_CONFIG.domain}/og-image.jpg`,
      'foundingDate': '2014',
      'founder': {
        '@id': `https://${SITE_CONFIG.domain}/#vishal-sahani`,
      },
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': SITE_CONFIG.phone,
          'contactType': 'customer service',
          'email': SITE_CONFIG.email,
          'areaServed': ['IN', 'Zirakpur', 'Chandigarh', 'Panchkula', 'Mohali', 'Punjab'],
          'availableLanguage': ['en', 'hi'],
        },
      ],
      'sameAs': [
        'https://linkedin.com/in/vishal-sahani',
        'https://instagram.com/vishal_sahani',
        'https://facebook.com/vishalsahani',
        `https://${SITE_CONFIG.domain}`,
      ],
    },
    {
      '@type': ['DigitalMarketingAgency', 'LocalBusiness'],
      '@id': `https://${SITE_CONFIG.domain}/#localbusiness`,
      'name': 'Veiled Story Digital Marketing Agency',
      'description':
        'Top-rated digital marketing agency in Zirakpur, Chandigarh, Panchkula & Mohali offering ROI-focused SEO, Google Ads, Meta Ads, SMM, AEO, GEO & custom website design.',
      'url': `https://${SITE_CONFIG.domain}`,
      'telephone': SITE_CONFIG.phone,
      'email': SITE_CONFIG.email,
      'priceRange': '₹₹',
      'image': `https://${SITE_CONFIG.domain}/og-image.jpg`,
      'logo': `https://${SITE_CONFIG.domain}/logo.png`,
      'parentOrganization': {
        '@id': `https://${SITE_CONFIG.domain}/#organization`,
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'SCO 14, VIP Road, High Street Market',
        'addressLocality': 'Zirakpur',
        'addressRegion': 'Punjab',
        'postalCode': '140603',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '30.6425',
        'longitude': '76.8173',
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '09:00',
          'closes': '20:00',
        },
      ],
      'areaServed': [
        { '@type': 'City', 'name': 'Zirakpur', 'sameAs': 'https://en.wikipedia.org/wiki/Zirakpur' },
        { '@type': 'City', 'name': 'Chandigarh', 'sameAs': 'https://en.wikipedia.org/wiki/Chandigarh' },
        { '@type': 'City', 'name': 'Panchkula', 'sameAs': 'https://en.wikipedia.org/wiki/Panchkula' },
        { '@type': 'City', 'name': 'Mohali', 'sameAs': 'https://en.wikipedia.org/wiki/Mohali' },
      ],
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5.0',
        'reviewCount': '148',
        'bestRating': '5',
        'worstRating': '1',
      },
      'review': [
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Rajesh Sharma' },
          'datePublished': '2026-07-15',
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5', 'worstRating': '1' },
          'reviewBody':
            'Veiled Story Digital Marketing Agency doubled our qualified real estate inquiries in Zirakpur within 60 days using targeted Google Ads and Local SEO.',
          'itemReviewed': {
            '@type': 'LocalBusiness',
            '@id': `https://${SITE_CONFIG.domain}/#localbusiness`,
            'name': 'Veiled Story Digital Marketing Agency',
          },
        },
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Dr. Vikas Verma' },
          'datePublished': '2026-06-20',
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5', 'worstRating': '1' },
          'reviewBody':
            'Outstanding digital marketing & SEO services in Tricity. They brought our dental clinic to the top #1 spot on Google Maps in Chandigarh.',
          'itemReviewed': {
            '@type': 'LocalBusiness',
            '@id': `https://${SITE_CONFIG.domain}/#localbusiness`,
            'name': 'Veiled Story Digital Marketing Agency',
          },
        },
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Priya Kapoor' },
          'datePublished': '2026-08-02',
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5', 'worstRating': '1' },
          'reviewBody':
            'Best website design and digital marketing agency! Their Liquid Glass Morphism design and lead generation strategy turned our business around.',
          'itemReviewed': {
            '@type': 'LocalBusiness',
            '@id': `https://${SITE_CONFIG.domain}/#localbusiness`,
            'name': 'Veiled Story Digital Marketing Agency',
          },
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': `https://${SITE_CONFIG.domain}/#vishal-sahani`,
      'name': 'Vishal Sahani',
      'jobTitle': 'Founder & Senior Digital Marketing Specialist',
      'description':
        'Founder of Veiled Story Digital Marketing Agency and Senior SEO Expert with 10+ years experience driving high-converting lead campaigns and search engine dominance.',
      'url': `https://${SITE_CONFIG.domain}/author/vishal-sahani`,
      'image': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      'worksFor': {
        '@id': `https://${SITE_CONFIG.domain}/#organization`,
      },
      'sameAs': [
        'https://linkedin.com/in/vishal-sahani',
        'https://instagram.com/vishal_sahani',
        'https://facebook.com/vishalsahani',
      ],
      'knowsAbout': [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Generative Engine Optimization (GEO)',
        'Answer Engine Optimization (AEO)',
        'Social Media Marketing & Brand Strategy',
        'High-Converting Web Development',
      ],
    },
    {
      '@type': 'Service',
      '@id': `https://${SITE_CONFIG.domain}/#service-seo`,
      'name': 'Search Engine Optimization (SEO) & Local Map Pack Dominance',
      'serviceType': 'SEO Services',
      'description':
        'Comprehensive white-hat SEO, technical speed optimization, schema markup, and Google Business Profile rank boosting for Zirakpur & Tricity businesses.',
      'provider': { '@id': `https://${SITE_CONFIG.domain}/#localbusiness` },
      'areaServed': ['Zirakpur', 'Chandigarh', 'Panchkula', 'Mohali', 'Tricity'],
    },
    {
      '@type': 'Service',
      '@id': `https://${SITE_CONFIG.domain}/#service-ppc`,
      'name': 'Google Ads PPC & Meta Ad Lead Campaigns',
      'serviceType': 'Pay Per Click Advertising',
      'description':
        'High-ROI search ads, performance max campaigns, Meta lead ads, and retargeting workflows for rapid lead generation.',
      'provider': { '@id': `https://${SITE_CONFIG.domain}/#localbusiness` },
      'areaServed': ['Zirakpur', 'Chandigarh', 'Panchkula', 'Mohali', 'Pan-India'],
    },
    {
      '@type': 'Service',
      '@id': `https://${SITE_CONFIG.domain}/#service-web`,
      'name': 'Liquid Glass Website Design & Development',
      'serviceType': 'Web Design & Development',
      'description':
        'Custom high-performance websites built with Next.js, Tailwind CSS, Core Web Vitals 90+ speed, and liquid glass morphism visuals.',
      'provider': { '@id': `https://${SITE_CONFIG.domain}/#localbusiness` },
      'areaServed': ['Zirakpur', 'Chandigarh', 'Panchkula', 'Mohali'],
    },
    {
      '@type': 'NewsArticle',
      '@id': `https://${SITE_CONFIG.domain}/#news-article`,
      'headline': 'Masterpiece Digital Growth Blueprint 2026: Dominating Search, Social & AI Overview',
      'description':
        'Detailed insights on combining SEO, GEO, AEO, and Liquid Glass web design to dominate search engines and generate high-intent customer leads in 2026.',
      'image': [`https://${SITE_CONFIG.domain}/og-image.jpg`],
      'datePublished': '2026-08-01T08:00:00+05:30',
      'dateModified': '2026-08-10T10:00:00+05:30',
      'mainEntityOfPage': `https://${SITE_CONFIG.domain}`,
      'author': {
        '@id': `https://${SITE_CONFIG.domain}/#vishal-sahani`,
      },
      'publisher': {
        '@id': `https://${SITE_CONFIG.domain}/#organization`,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `https://${SITE_CONFIG.domain}/#website`,
      'url': `https://${SITE_CONFIG.domain}`,
      'name': 'Veiled Story Digital Marketing Agency',
      'description': 'Official website of Veiled Story Digital Marketing Agency in Zirakpur, Chandigarh, Panchkula & Mohali.',
      'publisher': { '@id': `https://${SITE_CONFIG.domain}/#organization` },
      'inLanguage': 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': `https://${SITE_CONFIG.domain}/#webpage`,
      'url': `https://${SITE_CONFIG.domain}`,
      'name': 'Veiled Story Digital Marketing Agency | Home',
      'description': 'Leading digital marketing agency in Zirakpur, Chandigarh, Panchkula & Mohali.',
      'isPartOf': { '@id': `https://${SITE_CONFIG.domain}/#website` },
      'about': { '@id': `https://${SITE_CONFIG.domain}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(masterAllInOneSchemaGraph) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Self-healing chunk loader & error barrier for Hostinger / LiteSpeed deployments
              (function() {
                if (typeof window === 'undefined') return;
                var reloadKey = 'vs_last_chunk_reload';
                window.addEventListener('error', function(e) {
                  var msg = (e && e.message) ? e.message.toLowerCase() : '';
                  if (
                    msg.indexOf('chunkloaderror') !== -1 ||
                    msg.indexOf('loading chunk') !== -1 ||
                    msg.indexOf('failed to fetch dynamically imported module') !== -1 ||
                    msg.indexOf('unexpected token') !== -1 && msg.indexOf('<') !== -1
                  ) {
                    var lastReload = parseInt(sessionStorage.getItem(reloadKey) || '0', 10);
                    var now = Date.now();
                    // Prevent infinite reload loops (only reload once every 15 seconds)
                    if (now - lastReload > 15000) {
                      sessionStorage.setItem(reloadKey, now.toString());
                      window.location.reload(true);
                    }
                  }
                }, true);

                window.addEventListener('unhandledrejection', function(e) {
                  var reason = (e && e.reason && e.reason.message) ? e.reason.message.toLowerCase() : '';
                  if (
                    reason.indexOf('chunkloaderror') !== -1 ||
                    reason.indexOf('loading chunk') !== -1 ||
                    reason.indexOf('failed to fetch dynamically imported module') !== -1
                  ) {
                    var lastReload = parseInt(sessionStorage.getItem(reloadKey) || '0', 10);
                    var now = Date.now();
                    if (now - lastReload > 15000) {
                      sessionStorage.setItem(reloadKey, now.toString());
                      window.location.reload(true);
                    }
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <FloatingContactWidget />
      </body>
    </html>
  );
}


