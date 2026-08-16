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

// Global Site-Wide Schema.org JSON-LD (Organization, WebSite & Founder)
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
      '@type': 'WebSite',
      '@id': `https://${SITE_CONFIG.domain}/#website`,
      'url': `https://${SITE_CONFIG.domain}`,
      'name': 'Veiled Story Digital Marketing Agency',
      'description': 'Official website of Veiled Story Digital Marketing Agency in Zirakpur, Chandigarh, Panchkula & Mohali.',
      'publisher': { '@id': `https://${SITE_CONFIG.domain}/#organization` },
      'inLanguage': 'en-IN',
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


