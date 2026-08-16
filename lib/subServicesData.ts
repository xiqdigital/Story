export interface SubService {
  slug: string;
  title: string;
  category: 'SEO' | 'Google Ads' | 'Social Media' | 'AEO & GEO' | 'Web Development';
  h1: string;
  h2: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroDescription: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  keyDeliverables: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  whyChooseUs: { title: string; desc: string }[];
  targetIndustries: string[];
  faqs: { question: string; answer: string }[];
  imageAlt: string;
  imageSeed: string;
}

export const SUB_SERVICES_DATA: Record<string, SubService> = {
  'on-page-seo-company': {
    slug: 'on-page-seo-company',
    title: 'On Page SEO Company in Zirakpur & Tricity',
    category: 'SEO',
    h1: 'Result-Driven On Page SEO Company in Zirakpur',
    h2: 'Optimize Title Tags, Headings, Content Structure & Internal Links for Higher Rankings',
    metaDescription: 'Boost search engine visibility with expert On Page SEO services in Zirakpur. Veiled Story optimizes meta tags, content readability, internal linking, and keyword mapping.',
    primaryKeyword: 'On Page SEO Company in Zirakpur',
    secondaryKeywords: ['On Page SEO Services Chandigarh', 'Content SEO Zirakpur', 'SEO Meta Optimization Mohali'],
    heroDescription: 'Transform your website into a search-engine magnet. Our On-Page SEO experts audit and refine every HTML element, heading tag, internal link, and piece of copy to ensure search engines understand your authority and rank you higher.',
    overviewHeading: 'Precision On-Page SEO Engineering for Maximum Relevance',
    overviewParagraphs: [
      'On-Page SEO is the foundational cornerstone of search engine optimization. Even high-authority backlinks will not produce top rankings if your website contains weak title tags, missing H1/H2 structures, keyword cannibalization, or unoptimized internal links.',
      'At Veiled Story, our On Page SEO specialists systematically optimize every page using LSI keywords, semantic formatting, Schema markup, and internal link silos. We seamlessly integrate with our Technical SEO Company services, Local SEO Company solutions, and Off Page SEO Company strategies to dominate Google search results across Zirakpur, Chandigarh, Mohali, and Panchkula.',
      'Furthermore, our On-Page SEO methodologies prepare your content for modern AI search engines via Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO).'
    ],
    keyDeliverables: [
      { title: 'Title Tag & Meta Description Optimization', desc: 'Crafting click-worthy meta titles and descriptions infused with primary keywords like "Digital Marketing Company in Zirakpur".' },
      { title: 'H1-H6 Heading Hierarchy Setup', desc: 'Structuring logical heading hierarchies to satisfy search crawlers and improve user reading flow.' },
      { title: 'Keyword Mapping & Content Tuning', desc: 'Integrating primary, secondary, and LSI terms naturally without keyword stuffing or plagiarism.' },
      { title: 'Internal Link Architecture', desc: 'Building strategic topical clusters and direct internal links connecting Technical SEO, Google Business Profile, and SEO-Friendly Web Design pages.' }
    ],
    processSteps: [
      { step: '01', title: 'Content & HTML Audit', desc: 'Identifying thin pages, missing tags, and duplicate content issues.' },
      { step: '02', title: 'Keyword Architecture', desc: 'Mapping user intent queries to specific landing pages.' },
      { step: '03', title: 'On-Page Content Rewriting', desc: 'Crafting natural Indian English copy with clear E-E-A-T signals.' },
      { step: '04', title: 'Schema & Meta Injection', desc: 'Deploying JSON-LD schema for rich snippet eligibility.' }
    ],
    whyChooseUs: [
      { title: 'Natural E-E-A-T Content Writing', desc: 'We produce 100% original, plagiarism-free content written in fluent Indian English.' },
      { title: 'Higher Click-Through Rates', desc: 'Our compelling meta titles improve organic CTR by up to 35%.' }
    ],
    targetIndustries: ['Corporate Sites', 'E-commerce', 'Educational Institutes', 'Pharma Companies', 'Real Estate Portals'],
    faqs: [
      { question: 'Why is On-Page SEO so important for my site?', answer: 'On-Page SEO tells search engines exactly what your page is about and matches it with user search intent.' },
      { question: 'Does On-Page SEO include content writing?', answer: 'Yes, we optimize existing content and write brand-new, keyword-targeted content for your pages.' }
    ],
    imageAlt: 'On Page SEO Company Code and Content Optimization in Zirakpur by Veiled Story',
    imageSeed: 'on-page-seo-zirakpur'
  },

  'technical-seo-company': {
    slug: 'technical-seo-company',
    title: 'Technical SEO Company in Zirakpur & Tricity',
    category: 'SEO',
    h1: 'Top Technical SEO Company in Zirakpur',
    h2: 'Fix Core Web Vitals, Site Speed, Crawl Errors & Indexing Issues',
    metaDescription: 'Solve complex indexing, crawling, and site speed problems with Technical SEO experts in Zirakpur. Veiled Story optimizes Core Web Vitals and site architecture.',
    primaryKeyword: 'Technical SEO Company in Zirakpur',
    secondaryKeywords: ['Technical SEO Audit Chandigarh', 'Core Web Vitals Optimization Mohali', 'Site Speed SEO Zirakpur'],
    heroDescription: 'Eliminate hidden technical barriers holding back your search rankings. From Core Web Vitals and JavaScript rendering to XML sitemaps and SSL protocols, our technical SEO specialists ensure Google crawls and indexes your site flawlessly.',
    overviewHeading: 'Unlocking Search Performance Through Flawless Technical Architecture',
    overviewParagraphs: [
      'If search engine bots encounter crawl errors, slow server response times, broken links, or redirect loops on your website, your search rankings will drop regardless of content quality.',
      'Veiled Story performs comprehensive technical SEO audits and code refactoring. We optimize Next.js, WordPress Web Development, and custom platforms to deliver lightning-fast load times and seamless indexation across Google, Bing, and AI search engines.',
      'Our technical SEO strategies work in tandem with our On Page SEO Company optimizations, Local SEO Company map rankings, AI Overview Optimization, Generative Engine Optimization (GEO), and SEO-Friendly Web Design solutions.'
    ],
    keyDeliverables: [
      { title: 'Core Web Vitals Speed Optimization', desc: 'Improving LCP, FID, and CLS scores to pass Google PageSpeed Insights benchmarks on mobile and desktop.' },
      { title: 'XML Sitemap & Robots.txt Configuration', desc: 'Directing search bots to priority pages while blocking non-essential admin paths.' },
      { title: 'Mobile-First Indexing & Render Checks', desc: 'Ensuring responsive viewport rendering, fluid layouts, and fast JS execution.' },
      { title: 'Canonicalization & Duplicate Content Fixes', desc: 'Resolving trailing slash issues, HTTP/HTTPS mismatches, and URL parameter conflicts.' }
    ],
    processSteps: [
      { step: '01', title: 'Screaming Frog Audit', desc: 'Crawling every URL to diagnose 404 errors, 301 chains, and orphan pages.' },
      { step: '02', title: 'Speed & Code Refactoring', desc: 'Minifying assets, optimizing images, and enabling server caching.' },
      { step: '03', title: 'Indexation & Schema Validation', desc: 'Testing structured data in Google Search Console.' },
      { step: '04', title: 'Real-Time Monitoring', desc: 'Continuous tracking of crawl stats and Search Console performance alerts.' }
    ],
    whyChooseUs: [
      { title: 'Next.js & Modern Tech Stack Expertise', desc: 'Deep technical knowledge in Next.js App Router, SSR, and modern CSS frameworks.' },
      { title: 'Guaranteed PageSpeed Improvement', desc: 'We optimize site performance to achieve top tier load speeds under 1.5 seconds.' }
    ],
    targetIndustries: ['SaaS Platforms', 'E-commerce Web Stores', 'Large Real Estate Portals', 'News & Publishing Sites'],
    faqs: [
      { question: 'What is Core Web Vitals and why does Google care?', answer: 'Core Web Vitals measure loading speed, interactivity, and visual stability. Passing these tests directly boosts search rankings.' },
      { question: 'How do you fix crawl errors in Google Search Console?', answer: 'We fix 404 errors with 301 redirects, submit updated XML sitemaps, and update robots.txt directives.' }
    ],
    imageAlt: 'Technical SEO Speed and Code Optimization in Zirakpur by Veiled Story',
    imageSeed: 'technical-seo-zirakpur'
  },

  'off-page-seo-company': {
    slug: 'off-page-seo-company',
    title: 'Off Page SEO Company in Zirakpur & Tricity',
    category: 'SEO',
    h1: 'High-Authority Off Page SEO Company in Zirakpur',
    h2: 'Build Editorial Backlinks, Brand Citations & Domain Authority Safely',
    metaDescription: 'Boost domain authority and organic rankings with white-hat Off Page SEO services in Zirakpur. Veiled Story builds high-DR editorial backlinks and digital PR.',
    primaryKeyword: 'Off Page SEO Company in Zirakpur',
    secondaryKeywords: ['Link Building Agency Chandigarh', 'Off Page SEO Services Mohali', 'Digital PR Panchkula'],
    heroDescription: 'Elevate your site authority with Google-compliant, white-hat link building campaigns. We secure contextual editorial backlinks, guest features, and local brand citations that prove your trustworthiness to search engines.',
    overviewHeading: 'Building Trust, Authority, and Relevance Across the Web',
    overviewParagraphs: [
      'Backlinks remain one of Google’s top three ranking factors. However, low-quality spam links can trigger manual penalties and wipe out your rankings overnight.',
      'At Veiled Story, our Off-Page SEO team executes strategic outreach to authoritative Indian blogs, news portals, industry publications, and local business directories to earn real, impactful backlinks.'
    ],
    keyDeliverables: [
      { title: 'Editorial Backlink Acquisition', desc: 'Earning high DR contextual backlinks from relevant industry blogs and news platforms.' },
      { title: 'Digital PR & Brand Outreach', desc: 'Publishing feature articles and press releases highlighting your business achievements in Tricity.' },
      { title: 'Toxic Link Disavow Audits', desc: 'Auditing backlink profiles to identify and disavow toxic spam links harming domain trust.' },
      { title: 'Unlinked Brand Mention Reclaim', desc: 'Converting online mentions of your brand name into high-value follow backlinks.' }
    ],
    processSteps: [
      { step: '01', title: 'Link Profile Audit', desc: 'Analyzing existing backlinks and evaluating competitor link graphs.' },
      { step: '02', title: 'Target Outreach Prospecting', desc: 'Identifying high-DA, relevant blogs in India and Tricity.' },
      { step: '03', title: 'Content & Pitch Drafting', desc: 'Creating insightful guest articles that naturalize anchor text distribution.' },
      { step: '04', title: 'Link Verification & Reporting', desc: 'Delivering transparent monthly reports with live backlink links.' }
    ],
    whyChooseUs: [
      { title: '100% White-Hat Manual Link Building', desc: 'No PBNs, automated spam, or risky link farms. Only manual outreach.' },
      { title: 'Sustainable Rank Growth', desc: 'Backlinks that pass domain authority for long-term search stability.' }
    ],
    targetIndustries: ['Pharma Companies', 'Real Estate Brands', 'Financial Advisors', 'E-commerce Brands', 'B2B Manufacturers'],
    faqs: [
      { question: 'What is the difference between dofollow and nofollow backlinks?', answer: 'Dofollow links pass SEO authority directly to your website, while nofollow links provide referral traffic and brand visibility.' },
      { question: 'Are your link building strategies safe from Google penalties?', answer: 'Yes! We strictly adhere to Google Search Quality Guidelines using manual outreach.' }
    ],
    imageAlt: 'Off Page SEO Link Building Agency in Zirakpur - Veiled Story',
    imageSeed: 'off-page-seo-zirakpur'
  },

  'google-business-profile-optimization': {
    slug: 'google-business-profile-optimization',
    title: 'Google Business Profile Optimization in Zirakpur',
    category: 'SEO',
    h1: 'Google Business Profile Optimization Service in Zirakpur',
    h2: 'Maximize Local Map Views, Phone Calls & Direct Customer Enquiries',
    metaDescription: 'Optimize your Google My Business / GBP listing in Zirakpur, Chandigarh, Panchkula & Mohali. Veiled Story increases map pack calls, reviews, and directions.',
    primaryKeyword: 'Google Business Profile Optimization in Zirakpur',
    secondaryKeywords: ['GMB Optimization Services Tricity', 'Google Maps Agency Chandigarh', 'Local Business Profile Mohali'],
    heroDescription: 'Your Google Business Profile (GBP) is often the first impression local buyers have of your brand. We turn your Google Map listing into an active customer conversion magnet that drives daily phone calls and WhatsApp messages.',
    overviewHeading: 'Turn Google Maps Into Your Highest-Converting Sales Channel',
    overviewParagraphs: [
      'When customers in Zirakpur search for your services on mobile, the Google Map Pack displays prominently at the very top of search results. An optimized GBP listing captures up to 70% of local click volume.',
      'Our GBP specialists optimize every setting, select primary and secondary categories, craft search-optimized business descriptions, upload high-resolution geotagged photos, and enable direct WhatsApp messaging.'
    ],
    keyDeliverables: [
      { title: 'Profile Setup & Category Alignment', desc: 'Selecting exact primary and secondary categories to match local search algorithms.' },
      { title: 'Geotagged Photo & Video Management', desc: 'Uploading EXIF-geotagged interior, exterior, and team photos to boost local proximity signals.' },
      { title: 'Products & Services Catalog Integration', desc: 'Adding detailed service descriptions, pricing, and direct call-to-action buttons.' },
      { title: 'Weekly GBP Updates & Q&A Setup', desc: 'Publishing weekly promotional posts, offers, and answering frequently asked customer questions.' }
    ],
    processSteps: [
      { step: '01', title: 'Listing Audit', desc: 'Checking name, address, phone (NAP) accuracy and suspension risk.' },
      { step: '02', title: 'Content & Category Refresh', desc: 'Updating business attributes, categories, and keyword descriptions.' },
      { step: '03', title: 'Geotagged Asset Uploads', desc: 'Optimizing and publishing photos with embedded GPS coordinates.' },
      { step: '04', title: 'Review Growth Strategy', desc: 'Implementing direct review links and response workflows.' }
    ],
    whyChooseUs: [
      { title: 'Local Zirakpur Proximity Advantage', desc: 'We know exact landmarks like VIP Road, Gazipur, Ambala Highway, and Aerocity.' },
      { title: 'Direct WhatsApp Connect', desc: 'We enable direct WhatsApp inquiry buttons on your GBP for immediate leads.' }
    ],
    targetIndustries: ['Retail Outlets', 'Real Estate Agencies', 'Dental & Medical Clinics', 'Restaurants', 'Coaching Centers', 'Law Firms'],
    faqs: [
      { question: 'Why is my Google Business Profile suspended or not showing up?', answer: 'Common causes include NAP mismatches, duplicate profiles, or policy violations. We help resolve suspensions and reinstate profiles.' },
      { question: 'How do reviews affect my Google Map ranking?', answer: 'Higher rating averages and steady 5-star review velocity significantly improve local map pack rankings.' }
    ],
    imageAlt: 'Google Business Profile Optimization Service in Zirakpur by Veiled Story',
    imageSeed: 'gmb-optimization-zirakpur'
  },

  'google-ads-agency': {
    slug: 'google-ads-agency',
    title: 'Google Ads & PPC Management Agency in Zirakpur',
    category: 'Google Ads',
    h1: 'High-ROI Google Ads Agency in Zirakpur & Tricity',
    h2: 'Generate Qualified Leads & Instant Sales with Target Search & Display Ads',
    metaDescription: 'Maximize ROI with expert Google Ads Management in Zirakpur. Veiled Story runs high-converting PPC Search, Display, Remarketing, and Lead Gen campaigns.',
    primaryKeyword: 'Google Ads Agency in Zirakpur',
    secondaryKeywords: ['PPC Company Chandigarh', 'Google Ads Management Mohali', 'PPC Agency Panchkula', 'Search Ads Zirakpur'],
    heroDescription: 'Stop wasting budget on clicks that don’t convert. Our Google Ads certified specialists build hyper-targeted search, display, and remarketing campaigns that deliver verified customer leads and instant phone calls from day one.',
    overviewHeading: 'Precision Pay-Per-Click Advertising Built for Maximum ROAS',
    overviewParagraphs: [
      'Google Ads allows your business to appear at the very top of Google search results instantly. However, poor keyword targeting, bad match types, and weak landing pages can drain ad budgets quickly.',
      'Veiled Story structures campaigns with high Quality Scores, negative keyword lists, tight ad groups, compelling ad copy extensions, and high-converting landing pages built to turn clicks into phone calls and WhatsApp messages (+917905403546).'
    ],
    keyDeliverables: [
      { title: 'Google Search Ads (Paid Search)', desc: 'Capturing buyers searching for keywords like "Digital Marketing Company in Zirakpur" with high Quality Score ads.' },
      { title: 'Google Display & Banner Campaigns', desc: 'Visual banner advertising targeted by demographic, buyer interest, and affinity across top websites.' },
      { title: 'Remarketing & Retargeting Ads', desc: 'Re-engaging visitors who left your website without inquiring to bring them back into your sales funnel.' },
      { title: 'Call-Only & WhatsApp Lead Campaigns', desc: 'Mobile-optimized ad campaigns designed for 1-click phone calls and direct WhatsApp chats.' }
    ],
    processSteps: [
      { step: '01', title: 'Competitor & Keyword Research', desc: 'Finding high-intent commercial keywords and analyzing competitor ad copy.' },
      { step: '02', title: 'Campaign Architecture', desc: 'Building SKAG (Single Keyword Ad Groups) and match-type structures.' },
      { step: '03', title: 'A/B Ad Copy Testing', desc: 'Testing headlines, extensions, and landing page conversion triggers.' },
      { step: '04', title: 'Bid & Quality Score Tuning', desc: 'Lowering CPA (Cost Per Acquisition) and maximizing total ROAS.' }
    ],
    whyChooseUs: [
      { title: 'Google Ads Certified Specialists', desc: 'Data-driven campaign managers dedicated to scaling your business.' },
      { title: 'Zero Wasted Ad Spend', desc: 'We aggressively block negative keywords and useless click traffic.' }
    ],
    targetIndustries: ['Real Estate Developers', 'Pharma & Healthcare', 'Manufacturing Firms', 'Education & Institutes', 'E-commerce Stores'],
    faqs: [
      { question: 'How quickly can Google Ads start generating leads for my business?', answer: 'Google Ads campaigns can start generating phone calls and leads within 24 to 48 hours of launch.' },
      { question: 'What is a good starting budget for Google Ads in Zirakpur/Tricity?', answer: 'A monthly budget starting from ₹20,000 to ₹50,000 provides strong click volume for local search campaigns.' }
    ],
    imageAlt: 'Google Ads PPC Management Agency in Zirakpur - Veiled Story',
    imageSeed: 'google-ads-agency-zirakpur'
  },

  'social-media-marketing': {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing Agency in Zirakpur',
    category: 'Social Media',
    h1: 'Creative Social Media Marketing Agency in Zirakpur',
    h2: 'Build Brand Awareness & Customer Engagement Across Facebook, Instagram & LinkedIn',
    metaDescription: 'Grow your social presence with top Social Media Marketing in Zirakpur. Veiled Story creates viral content, reels, graphics, and community engagement.',
    primaryKeyword: 'Social Media Marketing in Zirakpur',
    secondaryKeywords: ['SMM Agency Chandigarh', 'Instagram Marketing Mohali', 'Facebook Marketing Zirakpur'],
    heroDescription: 'Transform social media followers into loyal, paying customers. We combine eye-catching visual design, trending video reels, persuasive copywriting, and community management to elevate your brand presence across Facebook, Instagram, LinkedIn, and YouTube.',
    overviewHeading: 'Strategic Social Media Storytelling That Drives Revenue',
    overviewParagraphs: [
      'Social media is the modern digital storefront. Consumers in Zirakpur, Chandigarh, and Mohali spend hours daily on Instagram and Facebook, researching brands before making purchasing decisions.',
      'Veiled Story crafts custom monthly social content calendars featuring branded post graphics, video reels, client testimonials, carousel guides, and interactive stories tailored to your audience.'
    ],
    keyDeliverables: [
      { title: 'Monthly Content Strategy & Calendars', desc: 'Planning creative content pillars, promotional offers, educational carousels, and festive posts.' },
      { title: 'High-Quality Graphics & Reel Production', desc: 'Designing custom branded graphics and editing short-form reels with trending audio.' },
      { title: 'Community Management & Moderation', desc: 'Responding promptly to DMs, post comments, and guiding prospects to WhatsApp enquiries.' },
      { title: 'Influencer & Outreach Campaigns', desc: 'Partnering with regional Tricity influencers to expand organic brand reach.' }
    ],
    processSteps: [
      { step: '01', title: 'Brand Persona Analysis', desc: 'Defining your unique tone of voice, visual aesthetics, and audience demographics.' },
      { step: '02', title: 'Content Calendar Creation', desc: 'Drafting monthly post copy, graphics, and video scripts for approval.' },
      { step: '03', title: 'Publishing & Engagement', desc: 'Scheduled posting at peak activity hours and active comment moderation.' },
      { step: '04', title: 'Analytics & Insights', desc: 'Tracking reach, engagement rate, profile visits, and lead inquiries.' }
    ],
    whyChooseUs: [
      { title: 'High-Impact Visual Design', desc: 'Sleek, modern glassmorphism graphics and polished video edits.' },
      { title: 'Consistent Brand Voice', desc: 'Professional content management that represents your business with excellence.' }
    ],
    targetIndustries: ['Fashion & Retail', 'Restaurants & Cafes', 'Salons & Beauty', 'Real Estate', 'Fitness Gyms', 'Education'],
    faqs: [
      { question: 'Which social media platforms are best for my local business?', answer: 'Instagram and Facebook are ideal for consumer brands, while LinkedIn works best for B2B and corporate services.' },
      { question: 'Do you create video reels as part of SMM packages?', answer: 'Yes! Short-form reels and videos are included in our social media management packages.' }
    ],
    imageAlt: 'Social Media Marketing Agency Visual Content Creation in Zirakpur by Veiled Story',
    imageSeed: 'social-media-marketing-zirakpur'
  },

  'social-media-optimization': {
    slug: 'social-media-optimization',
    title: 'Social Media Optimization (SMO) Services in Zirakpur',
    category: 'Social Media',
    h1: 'Social Media Optimization (SMO) Company in Zirakpur',
    h2: 'Optimize Social Profiles, Bio Structures & Organic Search Discoverability',
    metaDescription: 'Boost organic social search discoverability with Social Media Optimization (SMO) in Zirakpur. Veiled Story optimizes bios, keywords, highlights, and tags.',
    primaryKeyword: 'Social Media Optimization in Zirakpur',
    secondaryKeywords: ['SMO Services Chandigarh', 'Instagram Bio Optimization Mohali', 'Social Profile SEO Zirakpur'],
    heroDescription: 'Make your social profiles easily discoverable in social search algorithms. Our SMO services optimize your Instagram, Facebook, LinkedIn, and YouTube profile architecture with keyword-rich bios, custom highlights, and structured links.',
    overviewHeading: 'Maximizing Organic Discoverability Across Social Search Engines',
    overviewParagraphs: [
      'Social media platforms like Instagram and TikTok have evolved into search engines. Users actively search keywords like "best real estate in Zirakpur" directly inside social apps.',
      'Veiled Story executes comprehensive Social Media Optimization (SMO). We optimize profile names, bios, category tags, story highlight covers, link-in-bio landing pages, and post hashtag clusters.'
    ],
    keyDeliverables: [
      { title: 'Profile Bio & Username Keyword Setup', desc: 'Infusing primary search keywords into profile names and bios for social search ranking.' },
      { title: 'Custom Story Highlight Covers & Funnels', desc: 'Designing cohesive highlight icons guiding users to FAQs, testimonials, and contact links.' },
      { title: 'Hashtag Architecture & Tag Mapping', desc: 'Researching low, medium, and high competition local hashtags for maximum organic reach.' },
      { title: 'Custom Link-in-Bio Landing Page', desc: 'Building fast, mobile-friendly landing pages connecting social traffic to WhatsApp.' }
    ],
    processSteps: [
      { step: '01', title: 'Social Audit', desc: 'Analyzing current bio clarity, keyword presence, and visual cohesion.' },
      { step: '02', title: 'Bio & Keyword Overhaul', desc: 'Rewriting profile descriptions with strong call-to-actions.' },
      { step: '03', title: 'Highlight & Link Funnel Setup', desc: 'Structuring highlights for reviews, location, and services.' },
      { step: '04', title: 'Hashtag Matrix Integration', desc: 'Deploying strategic hashtag groups for upcoming content.' }
    ],
    whyChooseUs: [
      { title: 'Social Search Expertise', desc: 'We stay updated on Instagram and LinkedIn algorithm updates.' },
      { title: 'Instant Mobile Funnels', desc: 'Converting profile visitors into direct phone calls and WhatsApp messages.' }
    ],
    targetIndustries: ['Personal Brands', 'Local Boutiques', 'Clinics & Dentists', 'Real Estate Consultants', 'Cafes & Lounge Bars'],
    faqs: [
      { question: 'What is the difference between SMM and SMO?', answer: 'SMO focuses on optimizing profile structure and organic discoverability, while SMM encompasses ongoing content creation and advertising.' },
      { question: 'Can SMO help my Instagram profile rank in search results?', answer: 'Yes! Optimizing your profile name, bio keywords, and alt text improves search visibility inside Instagram.' }
    ],
    imageAlt: 'Social Media Optimization Profile Setup in Zirakpur by Veiled Story',
    imageSeed: 'social-media-optimization-zirakpur'
  },

  'meta-ads-agency': {
    slug: 'meta-ads-agency',
    title: 'Meta Ads Agency (Facebook & Instagram Ads) in Zirakpur',
    category: 'Social Media',
    h1: 'High-Converting Meta Ads Agency in Zirakpur',
    h2: 'Scale Customer Acquisition with Laser-Targeted Facebook & Instagram Ad Campaigns',
    metaDescription: 'Scale sales and lead volume with Meta Ads Agency in Zirakpur. Veiled Story runs high-ROI Facebook & Instagram ad campaigns for Tricity businesses.',
    primaryKeyword: 'Meta Ads Agency in Zirakpur',
    secondaryKeywords: ['Facebook Ads Company Chandigarh', 'Instagram Paid Ads Mohali', 'Meta Lead Gen Panchkula'],
    heroDescription: 'Reach millions of active buyers across Facebook, Instagram, and WhatsApp. Our Meta Ads experts build high-converting carousel ads, video funnels, lead form campaigns, and retargeting workflows that scale your business predictably.',
    overviewHeading: 'Data-Driven Meta Ad Campaigns Built for Low CPA and High ROAS',
    overviewParagraphs: [
      'Meta advertising provides unmatched demographic, interest, behavior, and lookalike targeting. Whether you want direct WhatsApp messages, lead form fills, or e-commerce sales, Meta Ads deliver instant scale.',
      'At Veiled Story, we manage complete Meta Ad operations—from pixel tracking and custom audience building to high-converting visual creative, copy writing, and A/B bid optimization.'
    ],
    keyDeliverables: [
      { title: 'Instant Lead Form Campaigns', desc: 'Capturing pre-filled lead data (name, phone, email, budget) directly inside Facebook & Instagram.' },
      { title: 'Click-to-WhatsApp Ad Funnels', desc: 'Driving instant 1-on-1 customer conversations directly to your sales team on WhatsApp.' },
      { title: 'Meta Pixel & Conversion API Setup', desc: 'Deploying server-side tracking to accurately capture conversions and train Meta algorithm models.' },
      { title: 'Custom & Lookalike Audience Building', desc: 'Building high-converting audience segments based on past customers, website visitors, and engagement.' }
    ],
    processSteps: [
      { step: '01', title: 'Target Audience Profiling', desc: 'Defining demographic, income, interest, and geographic parameters in Tricity.' },
      { step: '02', title: 'Ad Creative & Copy Production', desc: 'Designing high-converting graphics, reel videos, and compelling headlines.' },
      { step: '03', title: 'Funnel Launch & Testing', desc: 'A/B testing ad formats, headlines, and call-to-action buttons.' },
      { step: '04', title: 'Scaling & Optimization', desc: 'Reallocating budget to top-performing ad sets to maximize return on ad spend.' }
    ],
    whyChooseUs: [
      { title: 'Proven High-ROAS Track Record', desc: 'We systematically lower your Cost Per Lead (CPL) while scaling volume.' },
      { title: 'Click-to-WhatsApp Specialists', desc: 'Connecting Meta Ads directly to +917905403546 for real-time lead close.' }
    ],
    targetIndustries: ['Real Estate Developers', 'E-commerce Brands', 'Healthcare Clinics', 'Education & Coaching', 'Event Management'],
    faqs: [
      { question: 'Why choose Meta Lead Form Ads over standard website landing pages?', answer: 'Meta Lead Forms load instantly inside Facebook/Instagram and pre-fill user contact info, resulting in 2x-3x higher conversion rates.' },
      { question: 'What budget is required for Facebook Ads in Zirakpur?', answer: 'Campaigns can start with daily budgets as low as ₹500 to ₹1,500/day to generate a steady stream of leads.' }
    ],
    imageAlt: 'Meta Ads Agency Facebook and Instagram Campaigns in Zirakpur - Veiled Story',
    imageSeed: 'meta-ads-agency-zirakpur'
  },

  'lead-generation': {
    slug: 'lead-generation',
    title: 'B2B & B2C Lead Generation Agency in Zirakpur',
    category: 'Google Ads',
    h1: 'Performance Lead Generation Agency in Zirakpur',
    h2: 'Verified High-Intent Leads for Real Estate, Pharma, Manufacturing, Electronics & Software',
    metaDescription: 'Get pre-verified high-quality leads in Zirakpur, Chandigarh, Panchkula & Mohali for Real Estate, PCD Pharma, Manufacturing, Electronics, and Software.',
    primaryKeyword: 'Lead Generation Agency in Zirakpur',
    secondaryKeywords: ['Real Estate Lead Generation Zirakpur', 'PCD Pharma Leads Mohali', 'Manufacturing Lead Agency Chandigarh', 'B2B Leads Tricity'],
    heroDescription: 'Fuel your sales pipeline with verified, high-intent buyer inquiries. We build multi-channel lead generation funnels specifically engineered for high-value industries like Real Estate, Pharma, Manufacturing, Electronics, and Software.',
    overviewHeading: 'Predictable Lead Pipelines That Drive Real Bottom-Line Revenue',
    overviewParagraphs: [
      'Generic marketing inquiries often result in cold numbers and wasted sales effort. Veiled Story specializes in performance lead generation that pre-qualifies prospects before they reach your sales team.',
      'We combine hyper-targeted Google Search Ads, Meta Lead Forms, high-converting landing pages, and instant WhatsApp notification funnels tailored specifically for major North Indian industries.'
    ],
    keyDeliverables: [
      { title: 'Real Estate Lead Generation', desc: 'High-intent buyer leads for residential apartments, commercial plots, and villas in Zirakpur, Aerocity, and New Chandigarh.' },
      { title: 'Pharma & PCD Franchise Leads', desc: 'Connecting PCD Pharma companies with genuine franchise distributors and third-party manufacturing inquiries across India.' },
      { title: 'Manufacturing & B2B Inquiries', desc: 'Targeting industrial buyers and corporate procurement heads for custom machinery, packaging, and raw materials.' },
      { title: 'Software & Electronics Leads', desc: 'Generating qualified demo requests and product inquiries for B2B software, IT services, and electronic equipment.' }
    ],
    processSteps: [
      { step: '01', title: 'Industry Qualification Mapping', desc: 'Defining pre-qualification questions (budget, timeline, purchase intent).' },
      { step: '02', title: 'Custom Landing Page Build', desc: 'Building dedicated, high-converting glassmorphism landing pages.' },
      { step: '03', title: 'Omni-Channel Traffic Injection', desc: 'Combining Google Ads, Meta Ads, and LinkedIn targeting.' },
      { step: '04', title: 'Instant Lead Delivery', desc: 'Routing verified leads straight to your CRM and WhatsApp (+917905403546).' }
    ],
    whyChooseUs: [
      { title: 'Verified Contact Phone Numbers', desc: 'OTP and verification steps to ensure zero fake or invalid phone numbers.' },
      { title: 'Deep Sector Experience', desc: 'Specialized expertise in North Indian Pharma, Real Estate, and Industrial sectors.' }
    ],
    targetIndustries: ['Real Estate Builders & Brokers', 'Pharma & PCD Franchises', 'Industrial Manufacturers', 'Electronics Suppliers', 'Software & IT Companies'],
    faqs: [
      { question: 'How do you ensure lead quality for real estate or pharma?', answer: 'We implement qualifying questions (e.g., budget range, location preference, timeline) on forms before submission.' },
      { question: 'How fast do we receive inquiries after a user submits a form?', answer: 'Leads are delivered instantly in real time via WhatsApp alert and email.' }
    ],
    imageAlt: 'Performance Lead Generation Agency in Zirakpur for Real Estate and Pharma - Veiled Story',
    imageSeed: 'lead-generation-zirakpur'
  },

  'answer-engine-optimization': {
    slug: 'answer-engine-optimization',
    title: 'Answer Engine Optimization (AEO) Company in Zirakpur',
    category: 'AEO & GEO',
    h1: 'Answer Engine Optimization (AEO) Agency in Zirakpur',
    h2: 'Format Your Content to Trigger Voice Search, Direct Q&A & AI Answer Snippets',
    metaDescription: 'Dominate conversational AI and voice search queries with Answer Engine Optimization (AEO) in Zirakpur. Veiled Story structures FAQ schemas and direct answers.',
    primaryKeyword: 'Answer Engine Optimization in Zirakpur',
    secondaryKeywords: ['AEO Services Chandigarh', 'Voice Search SEO Mohali', 'AI Answer Snippet Agency Zirakpur'],
    heroDescription: 'Position your brand as the definitive direct answer across voice assistants and conversational search tools. AEO optimizes your content structure so Google Assistant, Siri, Alexa, and AI engines pull your business answers first.',
    overviewHeading: 'Capturing the Future of Voice and Conversational Search',
    overviewParagraphs: [
      'Search habits are shifting rapidly. Instead of typing short keywords, consumers ask full conversational questions like "Which is the best digital marketing company in Zirakpur with proven ROI?".',
      'Veiled Story executes specialized Answer Engine Optimization (AEO). We reformat your content into succinct FAQ answer blocks, implement Speakable and FAQ Schema markup, and optimize for zero-click featured snippets.'
    ],
    keyDeliverables: [
      { title: 'Conversational FAQ Content Formatting', desc: 'Structuring Q&A content blocks that directly match natural human spoken queries.' },
      { title: 'Featured Snippet & Zero-Click Capture', desc: 'Optimizing bullet points, tables, and definitions to win position zero on Google.' },
      { title: 'Speakable & FAQ Schema JSON-LD Markup', desc: 'Embedding structured data tags so voice assistants read your content aloud.' },
      { title: 'Entity-Based Knowledge Mapping', desc: 'Connecting your business name, services, and location attributes across knowledge bases.' }
    ],
    processSteps: [
      { step: '01', title: 'Conversational Query Audit', desc: 'Finding natural voice queries used by target buyers in Tricity.' },
      { step: '02', title: 'Content Restructuring', desc: 'Writing concise 40-60 word direct answers followed by detailed explanations.' },
      { step: '03', title: 'Schema Injection', desc: 'Deploying Schema.org JSON-LD FAQPage and Speakable markup.' },
      { step: '04', title: 'Snippet Tracking', desc: 'Monitoring Google position zero captures and voice search triggers.' }
    ],
    whyChooseUs: [
      { title: 'Pioneers in Voice & AEO Optimization', desc: 'First-mover advantage in North India for AI and voice answer capture.' },
      { title: 'Higher Brand Authority', desc: 'Winning featured snippets establishes immediate industry trust.' }
    ],
    targetIndustries: ['Healthcare Clinics', 'Legal Firms', 'Educational Institutes', 'Local Service Companies', 'B2B Enterprises'],
    faqs: [
      { question: 'What is Answer Engine Optimization (AEO)?', answer: 'AEO is the practice of structuring web content so AI answer engines and voice assistants pull direct answers from your site.' },
      { question: 'How does AEO help my local Zirakpur business?', answer: 'When local customers ask voice assistants for recommendations near them, AEO ensures your business is spoken as the answer.' }
    ],
    imageAlt: 'Answer Engine Optimization Voice Search Agency in Zirakpur - Veiled Story',
    imageSeed: 'aeo-agency-zirakpur'
  },

  'generative-engine-optimization': {
    slug: 'generative-engine-optimization',
    title: 'Generative Engine Optimization (GEO) Company in Zirakpur',
    category: 'AEO & GEO',
    h1: 'Generative Engine Optimization (GEO) Agency in Zirakpur',
    h2: 'Get Cited and Recommended by ChatGPT, Gemini, Perplexity & Claude AI Models',
    metaDescription: 'Optimize your brand visibility on ChatGPT, Gemini, Perplexity & Claude with Generative Engine Optimization (GEO) in Zirakpur. Veiled Story builds AI entity trust.',
    primaryKeyword: 'Generative Engine Optimization in Zirakpur',
    secondaryKeywords: ['GEO Services Chandigarh', 'ChatGPT Brand Optimization Mohali', 'AI Recommendation SEO Tricity'],
    heroDescription: 'Ensure your business is cited as the top recommendation when users ask Large Language Models (LLMs) for recommendations. GEO builds authoritative entity signals, statistics, citations, and semantic relevance across AI knowledge graphs.',
    overviewHeading: 'Establishing AI Model Trust and Brand Citation Dominance',
    overviewParagraphs: [
      'Millions of users now consult AI tools like ChatGPT, Gemini, Perplexity, and Claude for business recommendations instead of traditional search engines. If an LLM doesn’t know your brand, you miss out on modern buyers.',
      'Veiled Story implements Generative Engine Optimization (GEO). We optimize entity relationships, secure citations on trusted source databases, format statistics and quotes, and align brand authority across Wikidata and digital PR networks.'
    ],
    keyDeliverables: [
      { title: 'LLM Citation & Source Optimization', desc: 'Publishing authoritative content on platforms indexed heavily by OpenAI, Google, and Perplexity.' },
      { title: 'Statistical & Citation Formatting', desc: 'Infusing verified statistics, quotes, and primary research into your website copy for LLM extraction.' },
      { title: 'Brand Entity Building & Knowledge Graphs', desc: 'Establishing clear Organization schema, Wikidata entries, and press citations.' },
      { title: 'GEO Monitoring & Sentiment Analysis', desc: 'Testing prompt outputs across ChatGPT, Gemini, and Claude to monitor brand recommendations.' }
    ],
    processSteps: [
      { step: '01', title: 'AI Visibility Benchmark', desc: 'Querying ChatGPT, Gemini, and Perplexity to analyze current brand citations.' },
      { step: '02', title: 'Entity & Citation Audit', desc: 'Identifying missing knowledge graph links and authority gaps.' },
      { step: '03', title: 'GEO Content Injection', desc: 'Publishing structured statistical copy, FAQs, and authoritative citations.' },
      { step: '04', title: 'LLM Prompt Validation', desc: 'Verifying that AI models recommend your brand for local queries.' }
    ],
    whyChooseUs: [
      { title: 'Cutting-Edge AI Search Expertise', desc: 'We specialize in modern generative AI discovery algorithms.' },
      { title: 'Future-Proof Marketing', desc: 'Protecting your brand relevance as search transitions to generative AI.' }
    ],
    targetIndustries: ['Real Estate Developers', 'Healthcare Networks', 'IT & Software Companies', 'E-commerce Brands', 'B2B Manufacturers'],
    faqs: [
      { question: 'What is Generative Engine Optimization (GEO)?', answer: 'GEO optimizes brand content, data, and citations so generative AI models like ChatGPT and Gemini cite your company as a top recommendation.' },
      { question: 'How is GEO different from traditional SEO?', answer: 'Traditional SEO targets search engine ranking pages, whereas GEO targets generative AI prompt responses and LLM knowledge graphs.' }
    ],
    imageAlt: 'Generative Engine Optimization ChatGPT and Gemini Brand Citation in Zirakpur - Veiled Story',
    imageSeed: 'geo-agency-zirakpur'
  },

  'ai-overview-optimization': {
    slug: 'ai-overview-optimization',
    title: 'Google AI Overview Optimization Agency in Zirakpur',
    category: 'AEO & GEO',
    h1: 'Google AI Overview Optimization Agency in Zirakpur',
    h2: 'Win Prominent Citations Inside Google AI Search Overviews at the Top of SERPs',
    metaDescription: 'Capture top placements in Google AI Overviews with expert AI Search Optimization in Zirakpur. Veiled Story optimizes web content for Google Gemini AI Overviews.',
    primaryKeyword: 'AI Overview Optimization in Zirakpur',
    secondaryKeywords: ['Google AI Overviews Chandigarh', 'SGE Optimization Mohali', 'Gemini AI Search Zirakpur'],
    heroDescription: 'Claim top link cards inside Google AI Overviews. Google now displays AI-generated summaries above traditional search results. We optimize your content structure and entity authority so your pages appear as cited source links in AI Overviews.',
    overviewHeading: 'Dominating Google’s AI-Powered Search Overviews',
    overviewParagraphs: [
      'Google AI Overviews (formerly SGE) generate synthesized answers at the top of organic search results, displacing traditional rank #1 positions. Appearing as a cited link inside the AI Overview box drives massive high-intent traffic.',
      'At Veiled Story, our AI Overview specialists analyze the exact sources Google Gemini pulls from. We structure your content with direct answer summaries, Schema markup, authoritative data points, and semantic clarity.'
    ],
    keyDeliverables: [
      { title: 'AI Overview Source Link Optimization', desc: 'Structuring page copy so Google Gemini extracts your URLs as cited source cards.' },
      { title: 'Topic Cluster & Depth Enhancement', desc: 'Building comprehensive, long-form content hubs that answer user follow-up questions.' },
      { title: 'E-E-A-T Signal Hardening', desc: 'Demonstrating Experience, Expertise, Authoritativeness, and Trustworthiness required by Google AI.' },
      { title: 'Multi-Modal Asset Optimization', desc: 'Optimizing images and tables with descriptive alt text and structured captions for AI extraction.' }
    ],
    processSteps: [
      { step: '01', title: 'AI Overview SERP Analysis', desc: 'Identifying queries in your industry triggering Google AI Overviews.' },
      { step: '02', title: 'Content Summary Refactoring', desc: 'Adding 50-word clear summary blocks at the top of service pages.' },
      { step: '03', title: 'Entity & Schema Enhancement', desc: 'Deploying rich structured data to validate facts and relationships.' },
      { step: '04', title: 'Citation Verification', desc: 'Tracking URL inclusions inside Google AI Overview link carousels.' }
    ],
    whyChooseUs: [
      { title: 'First-Mover AI SERP Dominance', desc: 'We keep your website ahead of Google’s ongoing AI search updates.' },
      { title: 'High Organic Click-Through Rates', desc: 'Links inside AI Overviews receive higher intent clicks from qualified buyers.' }
    ],
    targetIndustries: ['Local Service Companies', 'Pharma & Healthcare', 'Real Estate Brands', 'Education & Colleges', 'B2B SaaS'],
    faqs: [
      { question: 'What is Google AI Overview (Search Generative Experience)?', answer: 'Google AI Overviews use Gemini AI to generate instant answers at the top of Google search results with clickable source links.' },
      { question: 'How can my business get featured in Google AI Overviews?', answer: 'By creating clear, concise direct answer blocks, implementing structured Schema data, and establishing high E-E-A-T domain authority.' }
    ],
    imageAlt: 'Google AI Overview Optimization Agency in Zirakpur - Veiled Story',
    imageSeed: 'ai-overview-optimization-zirakpur'
  },

  'wordpress-web-development': {
    slug: 'wordpress-web-development',
    title: 'WordPress Web Development Company in Zirakpur',
    category: 'Web Development',
    h1: 'Expert WordPress Web Development Company in Zirakpur',
    h2: 'Custom, Fast-Loading, SEO-Optimized & Mobile-Friendly WordPress Websites',
    metaDescription: 'Build high-converting WordPress websites in Zirakpur, Chandigarh, Panchkula & Mohali. Veiled Story develops fast, custom, mobile-friendly WordPress sites.',
    primaryKeyword: 'WordPress Web Development in Zirakpur',
    secondaryKeywords: ['WordPress Developer Chandigarh', 'Custom WordPress Agency Mohali', 'WordPress Web Design Zirakpur'],
    heroDescription: 'Get an ultra-fast, visually stunning, custom WordPress website built for high conversion. We build tailor-made Elementor and Gutenberg WordPress sites optimized for search speed, security, and effortless content updates.',
    overviewHeading: 'Custom WordPress Engineering Tailored for Business Growth',
    overviewParagraphs: [
      'WordPress powers over 40% of the world’s websites due to its flexibility and content management ease. However, bloated themes and bad plugin configurations can slow down load speeds.',
      'At Veiled Story, we build custom, lightweight WordPress themes engineered for sub-second page loads, mobile responsiveness, advanced security, and seamless WhatsApp integration (+917905403546).'
    ],
    keyDeliverables: [
      { title: 'Custom Theme & Layout Design', desc: 'Designing unique glassmorphism visual layouts tailored to your exact brand aesthetics.' },
      { title: 'Speed & Performance Tuning', desc: 'Optimizing code, enabling WP Rocket caching, and converting images to WebP for fast mobile speed.' },
      { title: 'SEO & Schema Integration', desc: 'Pre-installing SEO plugins, setting up XML sitemaps, canonical tags, and structured Schema.' },
      { title: 'Security & Anti-Malware Hardening', desc: 'Deploying SSL encryption, firewall security, automatic backups, and login protection.' }
    ],
    processSteps: [
      { step: '01', title: 'Wireframe & Design Prototype', desc: 'Designing custom UI mockups with cyan/teal glassmorphic accents.' },
      { step: '02', title: 'WordPress Development', desc: 'Building custom pages using lightweight page builders or block editors.' },
      { step: '03', title: 'Speed & Mobile Optimization', desc: 'Testing viewport rendering and achieving top PageSpeed scores.' },
      { step: '04', title: 'Testing & Launch', desc: 'Migrating to live hosting, setting up SSL, and conducting client training.' }
    ],
    whyChooseUs: [
      { title: 'Zero Bloatware Guarantee', desc: 'We write clean code without unnecessary plugins that slow down your site.' },
      { title: 'Easy Self-Management', desc: 'We provide video tutorials so your team can easily update text and photos.' }
    ],
    targetIndustries: ['Corporate Businesses', 'Real Estate Agencies', 'Pharma Companies', 'Consultants', 'Restaurants'],
    faqs: [
      { question: 'Why should I choose WordPress for my business website?', answer: 'WordPress is easy to update, highly customizable, SEO-friendly, and cost-effective to scale as your business grows.' },
      { question: 'Will my WordPress website load fast on mobile phones?', answer: 'Yes! We optimize every WordPress site to ensure fast loading times under 1.5 seconds.' }
    ],
    imageAlt: 'WordPress Web Development Company in Zirakpur - Veiled Story',
    imageSeed: 'wordpress-development-zirakpur'
  },

  'real-estate-website-designing': {
    slug: 'real-estate-website-designing',
    title: 'Real Estate Website Designing Company in Zirakpur',
    category: 'Web Development',
    h1: 'High-Converting Real Estate Website Design in Zirakpur',
    h2: 'Property Portals, Builder Landing Pages & Lead Generation Websites for Tricity',
    metaDescription: 'Get custom real estate website design in Zirakpur, Aerocity Mohali, and Chandigarh. Veiled Story builds property portals with instant WhatsApp enquiry buttons.',
    primaryKeyword: 'Real Estate Website Designing in Zirakpur',
    secondaryKeywords: ['Property Website Designer Mohali', 'Real Estate Portal Development Chandigarh', 'Builder Landing Page Zirakpur'],
    heroDescription: 'Convert property seekers into booked site visits. We build high-converting real estate websites, property listing portals, and project landing pages featuring 3D floor plan galleries, interactive maps, and instant WhatsApp inquiry triggers.',
    overviewHeading: 'Designed Specifically for Zirakpur, Aerocity & Tricity Real Estate Brands',
    overviewParagraphs: [
      'Real estate buyers in Zirakpur and Mohali expect visual luxury, property specifications, transparent pricing, floor plans, and instant contact options on their smartphones.',
      'Veiled Story designs glassmorphic real estate websites featuring property search filters, floor plan popups, video tour embeds, location advantages, and direct WhatsApp lead triggers sent to +917905403546.'
    ],
    keyDeliverables: [
      { title: 'Property Listing & Search Filters', desc: 'Category filters by price, BHK, location (VIP Road, Aerocity), and property type.' },
      { title: 'Interactive Floor Plan & Gallery Popups', desc: 'High-resolution photo carousels, 3D floor plan lightboxes, and video walkthrough embeds.' },
      { title: 'Instant Lead Capture & Brochure Download', desc: 'Gated PDF brochure downloads that capture buyer phone numbers before download.' },
      { title: 'Google Maps Location Advantage Section', desc: 'Interactive map pins highlighting nearby international airport, highways, and schools.' }
    ],
    processSteps: [
      { step: '01', title: 'Property Blueprint Analysis', desc: 'Gathering project highlights, floor plans, price sheets, and location USPs.' },
      { step: '02', title: 'Glassmorphic UI Design', desc: 'Creating a high-end luxury aesthetic tailored for property buyers.' },
      { step: '03', title: 'Lead Gate & WhatsApp Integration', desc: 'Connecting form fills directly to your sales team’s phones.' },
      { step: '04', title: 'Launch & Campaign Prep', desc: 'Integrating Google Ads and Meta Ads conversion tracking tags.' }
    ],
    whyChooseUs: [
      { title: 'Deep Real Estate Funnel Expertise', desc: 'We have launched property sites for top builders across Zirakpur and Mohali.' },
      { title: 'High Lead Conversion Rate', desc: 'Our real estate landing pages convert up to 18% of click traffic into leads.' }
    ],
    targetIndustries: ['Real Estate Builders', 'Property Brokers & Channel Partners', 'Commercial Property Owners', 'Villa & Plot Developers'],
    faqs: [
      { question: 'Can you build landing pages for specific builder projects in Zirakpur or Mohali?', answer: 'Yes! We design single-project landing pages optimized specifically for Google and Meta lead campaigns.' },
      { question: 'Do property websites include direct WhatsApp enquiry buttons?', answer: 'Yes, every property page features floating WhatsApp buttons and gated brochure downloads.' }
    ],
    imageAlt: 'Real Estate Website Designing Company in Zirakpur - Veiled Story',
    imageSeed: 'real-estate-web-design-zirakpur'
  },

  'pharmacy-web-designing': {
    slug: 'pharmacy-web-designing',
    title: 'Pharmacy & Medical Web Designing in Zirakpur',
    category: 'Web Development',
    h1: 'Pharmacy & Medical Website Designing in Zirakpur',
    h2: 'Compliant, Trust-Building Websites for Retail Pharmacies & Online Medicine Stores',
    metaDescription: 'Build fast, trustworthy pharmacy and medical websites in Zirakpur & Mohali. Veiled Story designs pharmacy sites with prescription upload & online ordering.',
    primaryKeyword: 'Pharmacy Web Designing in Zirakpur',
    secondaryKeywords: ['Medical Website Design Chandigarh', 'Online Pharmacy Web Developer Mohali', 'Chemist Web Design Zirakpur'],
    heroDescription: 'Establish digital trust and streamline online medicine inquiries. We build compliant, user-friendly pharmacy and medical retail websites featuring prescription upload forms, product categories, store locator maps, and direct WhatsApp order placement.',
    overviewHeading: 'Digital Front Doors for Pharmacies, Chemists, and Medical Suppliers',
    overviewParagraphs: [
      'Modern pharmacy customers prefer uploading prescriptions or ordering healthcare products online for fast home delivery across Zirakpur, Chandigarh, and Panchkula.',
      'Veiled Story creates clean, medical-grade glassmorphic pharmacy websites equipped with easy product search, category browsing, prescription photo upload tools, and instant WhatsApp ordering (+917905403546).'
    ],
    keyDeliverables: [
      { title: 'Prescription Photo Upload Module', desc: 'Allowing customers to snap a picture of their prescription and send it directly via WhatsApp.' },
      { title: 'Medicine Category Catalog', desc: 'Organized product categories for OTC medicines, ayurvedic products, wellness, and medical devices.' },
      { title: 'Home Delivery & Store Locator', desc: 'Clear delivery coverage zones across Zirakpur, Panchkula, and Mohali with map directions.' },
      { title: 'Health Blog & Knowledge Base', desc: 'SEO-optimized articles explaining medicine usage, wellness tips, and health guides.' }
    ],
    processSteps: [
      { step: '01', title: 'Pharmacy Workflow Mapping', desc: 'Defining order flow, prescription upload needs, and store locations.' },
      { step: '02', title: 'Clean Medical UI Creation', desc: 'Designing a trustworthy, high-contrast cyan/emerald green aesthetic.' },
      { step: '03', title: 'Upload & Ordering Integration', desc: 'Connecting prescription upload forms directly to WhatsApp.' },
      { step: '04', title: 'Speed & Compliance Check', desc: 'Ensuring fast mobile loading and secure data handling.' }
    ],
    whyChooseUs: [
      { title: 'Medical Trust Aesthetic', desc: 'Clean, professional UI design that reassures patients and buyers.' },
      { title: 'Frictionless Order Flow', desc: 'Patients can place orders in under 30 seconds via WhatsApp.' }
    ],
    targetIndustries: ['Retail Pharmacies & Chemists', 'Ayurvedic & Wellness Stores', 'Medical Device Distributors', 'Surgical Equipment Suppliers'],
    faqs: [
      { question: 'How do customers upload prescriptions on the pharmacy website?', answer: 'Customers click a button on mobile to snap a picture of their prescription, which attaches directly to a pre-filled WhatsApp message.' },
      { question: 'Can you integrate payment gateways for online medicine sales?', answer: 'Yes! We integrate Razorpay, PhonePe, and UPI gateways for online payments.' }
    ],
    imageAlt: 'Pharmacy and Medical Web Designing in Zirakpur by Veiled Story',
    imageSeed: 'pharmacy-web-design-zirakpur'
  },

  'custom-web-designing': {
    slug: 'custom-web-designing',
    title: 'Custom Web Designing Company in Zirakpur',
    category: 'Web Development',
    h1: 'Custom Web Designing & Development Company in Zirakpur',
    h2: 'Tailor-Made Full-Stack Next.js & React Web Applications Crafted to Perfection',
    metaDescription: 'Get high-performance custom website design in Zirakpur. Veiled Story develops bespoke Next.js, React, and TypeScript websites with glassmorphic liquid UI.',
    primaryKeyword: 'Custom Web Designing in Zirakpur',
    secondaryKeywords: ['Custom Web Developer Chandigarh', 'React Next.js Agency Mohali', 'Bespoke Web Design Zirakpur'],
    heroDescription: 'Break free from generic, slow-loading templates. Our custom web engineering team builds bespoke Next.js and React web applications featuring liquid glassmorphism, dynamic micro-interactions, custom API integrations, and ultra-fast page speeds.',
    overviewHeading: 'Unmatched Craftsmanship, Custom UI/UX, and Unbounded Scalability',
    overviewParagraphs: [
      'Off-the-shelf website templates often limit design creativity, bloat your website with unnecessary code, and compromise performance. Unique brands deserve custom digital experiences.',
      'Veiled Story specializes in custom full-stack web development using Next.js 15, React 19, Tailwind CSS, and TypeScript. We craft bespoke visual aesthetics, fluid animations, custom web apps, and secure backend integrations.'
    ],
    keyDeliverables: [
      { title: 'Bespoke UI/UX Glassmorphism Design', desc: 'Unique visual identity featuring liquid glow backgrounds, frosted glass cards, and crisp typography.' },
      { title: 'Next.js & React Server-Side Rendering', desc: 'Lightning-fast server component architecture delivering page load speeds under 1 second.' },
      { title: 'Custom Interactive Tools & Calculators', desc: 'Building custom ROI calculators, quotation builders, and booking engines.' },
      { title: 'API & Webhook Integrations', desc: 'Connecting custom web forms directly to CRMs, WhatsApp APIs, and payment systems.' }
    ],
    processSteps: [
      { step: '01', title: 'Architecture Planning', desc: 'Mapping user journeys, database schemas, and frontend interaction models.' },
      { step: '02', title: 'Figma to Code Engineering', desc: 'Coding pixel-perfect React components with custom Tailwind utility classes.' },
      { step: '03', title: 'API & Form Pipeline Setup', desc: 'Building secure server routes for forms and data persistence.' },
      { step: '04', title: 'Deployment & CI/CD', desc: 'Deploying to Cloud Run / Vercel with automated build optimizations.' }
    ],
    whyChooseUs: [
      { title: 'Modern Full-Stack Engineering', desc: 'Mastery of Next.js, React, Node.js, and TypeScript.' },
      { title: '100% Unique Design Guarantee', desc: 'Zero pre-made templates; every line of code is custom-built for your brand.' }
    ],
    targetIndustries: ['SaaS Startups', 'Fintech Firms', 'High-End Luxury Brands', 'Corporate Enterprises', 'Innovative Agencies'],
    faqs: [
      { question: 'Why is custom Next.js web development better than standard templates?', answer: 'Custom Next.js applications load drastically faster, rank higher on Google due to clean code, and offer infinite scalability without plugin bloat.' },
      { question: 'How long does it take to develop a custom website?', answer: 'Custom web design projects typically take 2 to 4 weeks depending on feature complexity.' }
    ],
    imageAlt: 'Custom Web Designing and Next.js Development in Zirakpur - Veiled Story',
    imageSeed: 'custom-web-design-zirakpur'
  },

  'manufacturing-web-development': {
    slug: 'manufacturing-web-development',
    title: 'Manufacturing Web Development Company in Zirakpur',
    category: 'Web Development',
    h1: 'Manufacturing & Industrial Web Development in Zirakpur',
    h2: 'B2B Industrial Catalog Websites, Machine Listings & RFQ Quote Funnels',
    metaDescription: 'Build high-converting B2B manufacturing websites in Zirakpur, Mohali & Chandigarh. Veiled Story develops industrial machinery catalogs and RFQ quote portals.',
    primaryKeyword: 'Manufacturing Web Development in Zirakpur',
    secondaryKeywords: ['Industrial Web Design Mohali', 'B2B Manufacturing Website Chandigarh', 'Machinery Catalog Developer Tricity'],
    heroDescription: 'Showcase your industrial machinery, products, and technical specifications to global B2B buyers. We build professional manufacturing websites equipped with product search, technical datasheet downloads, and Request for Quotation (RFQ) forms.',
    overviewHeading: 'Digital Industrial Showrooms Engineered for High-Value B2B Inquiries',
    overviewParagraphs: [
      'Industrial buyers and procurement managers in Mohali Industrial Area, Panchkula, and Zirakpur require clear technical specifications, ISO certifications, machinery CAD drawings, and fast quote request options.',
      'Veiled Story designs manufacturing websites that establish industrial authority. We organize complex product catalogs, embed technical PDF downloads, and implement instant RFQ forms routed directly to sales managers on WhatsApp (+917905403546).'
    ],
    keyDeliverables: [
      { title: 'B2B Product Machinery Catalog', desc: 'Structured catalog pages featuring technical spec tables, dimensions, power requirements, and applications.' },
      { title: 'Request for Quotation (RFQ) System', desc: 'Custom inquiry forms allowing buyers to select quantity, custom specs, and request instant price quotes.' },
      { title: 'Technical Datasheets & Certification Section', desc: 'Downloadable ISO certificates, product brochures, and safety compliance PDFs.' },
      { title: 'Global & Domestic B2B SEO Structure', desc: 'Optimized for domestic Indian queries (IndiaMART style) and international export inquiries.' }
    ],
    processSteps: [
      { step: '01', title: 'Industrial Catalog Structuring', desc: 'Categorizing machinery models, parts, and technical specification data.' },
      { step: '02', title: 'Industrial UI Design', desc: 'Creating a robust, professional design emphasizing engineering reliability.' },
      { step: '03', title: 'RFQ & WhatsApp Funnel Setup', desc: 'Connecting quote forms to instant phone and email alerts.' },
      { step: '04', title: 'SEO & Speed Hardening', desc: 'Optimizing technical product keywords for search engine ranking.' }
    ],
    whyChooseUs: [
      { title: 'B2B Industrial Expertise', desc: 'We understand B2B buyer journeys, procurement cycles, and RFQ needs.' },
      { title: 'High Inbound Inquiry Rates', desc: 'Turning cold traffic into verified manufacturing quote requests.' }
    ],
    targetIndustries: ['Machinery Manufacturers', 'Packaging Equipment Suppliers', 'Chemical & Plastic Units', 'Textile & Garment Mills', 'Electrical Component Makers'],
    faqs: [
      { question: 'Can buyers request custom price quotes for industrial machinery on the site?', answer: 'Yes! We build interactive RFQ forms where buyers can specify machine models, customized features, and order quantities.' },
      { question: 'Do you optimize manufacturing websites for export and international buyers?', answer: 'Yes, we optimize site architecture for international search engine visibility.' }
    ],
    imageAlt: 'Manufacturing and Industrial Web Development in Zirakpur - Veiled Story',
    imageSeed: 'manufacturing-web-design-zirakpur'
  },

  'pharma-website-designing': {
    slug: 'pharma-website-designing',
    title: 'Pharma Website Designing Company in Zirakpur',
    category: 'Web Development',
    h1: 'Pharma Website Designing & PCD Franchise Development in Zirakpur',
    h2: 'Compliant Pharma Catalogs, Visual Aids & PCD Franchise Lead Generation Portals',
    metaDescription: 'Get custom pharma website design in Zirakpur, Mohali & Chandigarh. Veiled Story builds PCD Pharma franchise websites, product lists, and DCGI compliant sites.',
    primaryKeyword: 'Pharma Website Designing in Zirakpur',
    secondaryKeywords: ['PCD Pharma Website Developer Mohali', 'Pharma Company Web Design Chandigarh', 'Pharmaceutical Website Zirakpur'],
    heroDescription: 'Scale your PCD Pharma franchise inquiries and third-party manufacturing inquiries. We build compliant, modern pharmaceutical websites featuring DCGI-approved product lists, downloadable visual aids, monopoly right maps, and instant franchise inquiry forms.',
    overviewHeading: 'Empowering Pharmaceutical & PCD Franchise Brands in North India',
    overviewParagraphs: [
      'North India (Mohali, Baddi, Zirakpur, Chandigarh) is the hub of India’s pharmaceutical industry. To stand out, pharma companies need websites that project scientific authority and capture franchisee leads.',
      'Veiled Story specializes in Pharma web design. We organize products by category (Tablets, Capsules, Injections, Syrups, Softgels), build monopoly state/district allocation maps, and link inquiry forms directly to WhatsApp (+917905403546).'
    ],
    keyDeliverables: [
      { title: 'DCGI Approved Molecule Search Catalog', desc: 'Searchable product catalog categorized by composition, brand name, packaging, and therapeutic segment.' },
      { title: 'PCD Franchise Monopoly Territory Checker', desc: 'Interactive map or dropdown list where prospective distributors check vacant district territories.' },
      { title: 'Downloadable Visual Aids & Product Lists', desc: 'Gated PDF downloads for promotional visual aids, MR literature, and price lists.' },
      { title: 'Third-Party Manufacturing Quote Request', desc: 'Dedicated inquiry funnel for high-volume contract manufacturing and WHO-GMP certs.' }
    ],
    processSteps: [
      { step: '01', title: 'Pharma Catalog Mapping', desc: 'Organizing product molecules, packing sizes, and DCGI certifications.' },
      { step: '02', title: 'Pharma UI Design', desc: 'Creating a clean, emerald green & cyan clinical design.' },
      { step: '03', title: 'Franchise Lead Funnel Build', desc: 'Connecting state/district franchise inquiry forms to WhatsApp.' },
      { step: '04', title: 'SEO & Mobile Optimization', desc: 'Optimizing for terms like "PCD Pharma Franchise Company in Mohali/Zirakpur".' }
    ],
    whyChooseUs: [
      { title: 'Unmatched Pharma Hub Insight', desc: 'Located right next to Mohali and Baddi pharma belts.' },
      { title: 'Proven Franchise Lead Generation', desc: 'Driving 100+ distributor inquiries per month for pharma clients.' }
    ],
    targetIndustries: ['PCD Pharma Companies', 'Third-Party Manufacturers', 'Nutraceutical Brands', 'Ayurvedic & Herbal Pharma', 'Veterinary Pharma'],
    faqs: [
      { question: 'Can prospective distributors check vacant franchise districts on the website?', answer: 'Yes! We build interactive district search dropdowns so distributors can check available territory rights instantly.' },
      { question: 'Can we upload our complete product list in PDF format for download?', answer: 'Yes, we embed downloadable PDF product lists with lead capture gates.' }
    ],
    imageAlt: 'Pharma Website Designing Company in Zirakpur and Mohali - Veiled Story',
    imageSeed: 'pharma-web-design-zirakpur'
  },

  'seo-friendly-website-design': {
    slug: 'seo-friendly-website-design',
    title: 'SEO-Friendly Website Design Company in Zirakpur',
    category: 'Web Development',
    h1: 'SEO-Friendly Website Design Company in Zirakpur',
    h2: 'Architected From Day One for Fast Indexing, Core Web Vitals & Top Search Rankings',
    metaDescription: 'Build an SEO-friendly website in Zirakpur designed for top Google rankings. Veiled Story codes clean, fast, schema-ready websites built to convert.',
    primaryKeyword: 'SEO-Friendly Website Design in Zirakpur',
    secondaryKeywords: ['SEO Web Design Chandigarh', 'High Ranking Website Developer Mohali', 'Fast SEO Web Design Zirakpur'],
    heroDescription: 'Rank on Google faster with a website built specifically for search engine algorithms. We merge modern aesthetic design with clean HTML semantic code, structured Schema markup, fast page speed, and mobile responsiveness.',
    overviewHeading: 'Bridging Beautiful Visual Design With Search Engine Algorithm Perfection',
    overviewParagraphs: [
      'A beautiful website is useless if Google cannot crawl it or if it takes 5 seconds to load on mobile devices. Traditional web designers often ignore SEO architecture during development.',
      'Veiled Story designs websites with SEO embedded into every line of code. From URL slugs and breadcrumbs to semantic H1-H6 tags, image compression, and schema injection, your site is built to rank from day one.'
    ],
    keyDeliverables: [
      { title: 'Clean Semantic HTML & Heading Structure', desc: 'Coding semantic header, nav, main, article, and section elements for search engine bots.' },
      { title: 'Sub-Second Page Speed Optimization', desc: 'Optimizing CSS, JS, and images so pages pass Core Web Vitals with 90+ PageSpeed scores.' },
      { title: 'Schema Markup Pre-Integration', desc: 'Pre-building LocalBusiness, FAQPage, BreadcrumbList, and Service JSON-LD schema tags.' },
      { title: 'Mobile-First Responsive Layouts', desc: 'Perfect rendering across all smartphone viewports, iPads, and ultra-wide desktop monitors.' }
    ],
    processSteps: [
      { step: '01', title: 'SEO Keyword Mapping', desc: 'Planning site architecture and URL structures based on search volume.' },
      { step: '02', title: 'SEO-First Coding', desc: 'Building clean Next.js/HTML code without bloated scripts.' },
      { step: '03', title: 'Speed & Mobile Benchmark', desc: 'Achieving 90+ Google PageSpeed Insights performance scores.' },
      { step: '04', title: 'Search Console Submission', desc: 'Submitting XML sitemaps and verifying instant indexation.' }
    ],
    whyChooseUs: [
      { title: 'Built by SEO Professionals', desc: 'We are a digital marketing agency first, so SEO is in our DNA.' },
      { title: 'Faster Organic Ranking', desc: 'Our websites rank 3x faster than standard WordPress template sites.' }
    ],
    targetIndustries: ['All Service Businesses', 'Local Retail Outlets', 'E-commerce Brands', 'Corporate Enterprises'],
    faqs: [
      { question: 'What makes a website "SEO-friendly"?', answer: 'Clean semantic code, fast loading speed under 1.5s, mobile responsiveness, clear heading hierarchy, XML sitemaps, and Schema markup.' },
      { question: 'Will my new website be indexed by Google automatically?', answer: 'Yes, we submit your XML sitemap directly to Google Search Console upon launch for immediate indexing.' }
    ],
    imageAlt: 'SEO-Friendly Website Design Architecture in Zirakpur - Veiled Story',
    imageSeed: 'seo-friendly-web-design-zirakpur'
  },

  'e-commerce-website-design': {
    slug: 'e-commerce-website-design',
    title: 'E-Commerce Website Design Company in Zirakpur',
    category: 'Web Development',
    h1: 'High-Converting E-Commerce Website Design in Zirakpur',
    h2: 'Shopify, WooCommerce & Custom Next.js Online Stores Built to Maximize Sales',
    metaDescription: 'Scale your online store with E-Commerce Website Design in Zirakpur & Mohali. Veiled Story builds fast Shopify, WooCommerce & Next.js stores with UPI payment integration.',
    primaryKeyword: 'E-Commerce Website Design in Zirakpur',
    secondaryKeywords: ['Shopify Developer Chandigarh', 'WooCommerce Agency Mohali', 'Online Store Development Tricity'],
    heroDescription: 'Turn store visitors into repeat paying customers. We build high-converting e-commerce web stores on Shopify, WooCommerce, and custom Next.js platforms equipped with fast UPI payment gateways, abandoned cart recovery, and mobile checkout.',
    overviewHeading: 'E-Commerce Stores Engineered for Speed, Smooth Checkout & High AOV',
    overviewParagraphs: [
      'E-commerce shoppers in India demand instant mobile page loading, easy category filters, product reviews, fast UPI payment options (PhonePe, Google Pay, Paytm), and automated order tracking.',
      'Veiled Story designs modern e-commerce stores with glassmorphism UI accents, sticky add-to-cart buttons, direct WhatsApp order assistance (+917905403546), cart recovery workflows, and automated courier integration.'
    ],
    keyDeliverables: [
      { title: 'Shopify & WooCommerce Setup', desc: 'Custom theme design, product uploads, inventory setup, and shipping zone rules.' },
      { title: 'Indian Payment Gateway Integration', desc: 'Integrating Razorpay, PhonePe, Paytm, and COD (Cash on Delivery) verification.' },
      { title: 'Abandoned Cart Recovery Funnels', desc: 'Automated WhatsApp and SMS reminders to recover lost sales.' },
      { title: 'Product Schema & Google Shopping Sync', desc: 'Injecting Product JSON-LD Schema to display price and star ratings in Google search.' }
    ],
    processSteps: [
      { step: '01', title: 'Product Catalog Blueprint', desc: 'Structuring categories, variants, pricing, and shipping zones.' },
      { step: '02', title: 'E-Commerce Store Design', desc: 'Designing high-converting mobile checkout pages and visual banners.' },
      { step: '03', title: 'Payment & Courier API Setup', desc: 'Connecting Razorpay and Shiprocket for automated shipping labels.' },
      { step: '04', title: 'Testing & Launch', desc: 'Testing mobile checkout flow and launching live store.' }
    ],
    whyChooseUs: [
      { title: 'Higher Checkout Conversion', desc: 'Optimized 1-click checkout flow reduces cart abandonment by up to 30%.' },
      { title: 'Mobile-First Shopping Experience', desc: 'Flawless shopping experience on all Android and iOS devices.' }
    ],
    targetIndustries: ['Fashion & Apparel', 'Jewelry & Accessories', 'Ayurveda & Cosmetics', 'Electronics & Gadgets', 'Food & Organic Goods'],
    faqs: [
      { question: 'Which e-commerce platform is better: Shopify or WooCommerce?', answer: 'Shopify is ideal for ease of use and quick scaling, while WooCommerce or custom Next.js offer total customization and lower transaction fees.' },
      { question: 'Can customers pay via UPI (Google Pay, PhonePe) and Cash on Delivery?', answer: 'Yes! We integrate seamless UPI payment options and Cash on Delivery verification.' }
    ],
    imageAlt: 'E-Commerce Website Design Company in Zirakpur - Veiled Story',
    imageSeed: 'ecommerce-web-design-zirakpur'
  },

  'salon-web-design': {
    slug: 'salon-web-design',
    title: 'Salon & Spa Website Design Company in Zirakpur',
    category: 'Web Development',
    h1: 'Stunning Salon & Beauty Spa Website Design in Zirakpur',
    h2: 'Luxury Aesthetic Websites with Service Price Menus & Online Booking Integration',
    metaDescription: 'Attract high-paying beauty clients with Salon & Spa Web Design in Zirakpur, Chandigarh & Panchkula. Veiled Story designs luxury salon websites with booking funnels.',
    primaryKeyword: 'Salon Web Design in Zirakpur',
    secondaryKeywords: ['Beauty Parlour Website Designer Chandigarh', 'Spa Web Design Mohali', 'Salon Booking Web Developer Zirakpur'],
    heroDescription: 'Attract style-conscious clients to your salon or spa. We design elegant, high-end beauty salon websites featuring visual price menus, before-and-after transformations, staff profiles, and 1-click WhatsApp appointment booking.',
    overviewHeading: 'Digital Elegance for Salons, Spas, and Beauty Clinics in Tricity',
    overviewParagraphs: [
      'Clients seeking hair styling, bridal makeup, skin treatments, and spa services in Zirakpur, Sector 8 Panchkula, and Chandigarh inspect a salon’s social presence and website aesthetic before booking.',
      'Veiled Story crafts luxury glassmorphism salon websites showcasing high-resolution interior photos, detailed service rate cards, bridal packages, client reviews, and direct WhatsApp booking buttons (+917905403546).'
    ],
    keyDeliverables: [
      { title: 'Interactive Service Menu & Pricing', desc: 'Categorized menus for Hair, Skin, Nails, Makeup, and Spa treatments with transparent pricing.' },
      { title: 'Online Appointment Booking Engine', desc: 'Easy 1-click WhatsApp appointment request selecting date, time, and preferred stylist.' },
      { title: 'Bridal & Party Package Showcase', desc: 'Dedicated galleries highlighting bridal makeup packages, pre-wedding grooming, and group offers.' },
      { title: 'Before & After Transformation Gallery', desc: 'High-impact photo sliders demonstrating hair coloring, skin treatments, and styling results.' }
    ],
    processSteps: [
      { step: '01', title: 'Salon Brand Discovery', desc: 'Gathering service rate cards, salon interior photos, and team highlights.' },
      { step: '02', title: 'Luxury UI Design', desc: 'Creating a chic, glassmorphic aesthetic with emerald green and cyan accents.' },
      { step: '03', title: 'Booking & Location Map Setup', desc: 'Integrating 1-click appointment booking via WhatsApp.' },
      { step: '04', title: 'Mobile Optimization & Launch', desc: 'Ensuring fast mobile loading for clients browsing on Instagram.' }
    ],
    whyChooseUs: [
      { title: 'Luxury Brand Aesthetic', desc: 'We make your salon look like a premium 5-star destination.' },
      { title: 'Instant Mobile Bookings', desc: 'Clients can book appointments directly into your WhatsApp in seconds.' }
    ],
    targetIndustries: ['Hair Salons & Barbershops', 'Luxury Beauty Spas', 'Bridal Makeup Studios', 'Dermatology & Skin Clinics', 'Nail Art Studios'],
    faqs: [
      { question: 'Can clients book appointments directly on WhatsApp from the website?', answer: 'Yes! Clicking "Book Appointment" opens WhatsApp with the chosen date, service, and time pre-filled.' },
      { question: 'Can we display our full service price list on the website?', answer: 'Yes, we design clean interactive price cards categorized by hair, skin, nails, and makeup.' }
    ],
    imageAlt: 'Salon and Spa Web Design in Zirakpur - Veiled Story',
    imageSeed: 'salon-web-design-zirakpur'
  },

  'hotel-website-design': {
    slug: 'hotel-website-design',
    title: 'Hotel & Resort Website Design Company in Zirakpur',
    category: 'Web Development',
    h1: 'Luxury Hotel, Resort & Banquet Web Design in Zirakpur',
    h2: 'Direct Room Booking Websites, Banquet Hall Showcase & Commission-Free Reservations',
    metaDescription: 'Boost direct commission-free room and banquet bookings with Hotel Web Design in Zirakpur, Ambala Highway & Chandigarh. Veiled Story builds hotel sites.',
    primaryKeyword: 'Hotel Website Design in Zirakpur',
    secondaryKeywords: ['Resort Web Design Chandigarh', 'Banquet Hall Website Mohali', 'Hotel Booking Web Developer Zirakpur'],
    heroDescription: 'Stop paying hefty 20% commissions to third-party booking portals. We design luxury hotel, resort, and banquet hall websites equipped with direct room booking engines, banquet event inquiries, photo galleries, and WhatsApp reservation assistance.',
    overviewHeading: 'Commission-Free Direct Reservations for Zirakpur Hospitality Brands',
    overviewParagraphs: [
      'Zirakpur is the hospitality gateway to Himachal Pradesh and Punjab, hosting hundreds of wedding banquets and corporate conferences daily along the Ambala-Chandigarh Highway.',
      'Veiled Story designs hotel websites that inspire luxury staycations and event bookings. We showcase room amenities, 360-degree banquet hall galleries, wedding packages, restaurant menus, and direct WhatsApp booking engines (+917905403546).'
    ],
    keyDeliverables: [
      { title: 'Direct Room Booking & Rate Showcase', desc: 'Displaying Deluxe, Executive, and Suite room rates with direct commission-free reservation forms.' },
      { title: 'Banquet Hall & Wedding Event Portal', desc: 'High-impact galleries for marriage banquets, lawn spaces, guest capacities, and catering menus.' },
      { title: 'Location & Nearby Tourist Attractiveness', desc: 'Highlighting proximity to Chandigarh Airport, Elante Mall, Shimla Highway, and Railway Station.' },
      { title: '360 Virtual Tour & Gallery Embeds', desc: 'Interactive photo and video tours of rooms, pool areas, restaurants, and conference halls.' }
    ],
    processSteps: [
      { step: '01', title: 'Hospitality Asset Gathering', desc: 'Collecting high-res room photos, banquet dimensions, menu PDFs, and room rates.' },
      { step: '02', title: 'Glassmorphism Luxury Design', desc: 'Designing a premium 5-star aesthetic tailored for corporate and wedding guests.' },
      { step: '03', title: 'Direct Booking Engine Setup', desc: 'Connecting room and banquet inquiry buttons to instant WhatsApp messaging.' },
      { step: '04', title: 'Local SEO & Launch', desc: 'Optimizing for keywords like "Hotels on VIP Road Zirakpur" and "Banquet Halls in Zirakpur".' }
    ],
    whyChooseUs: [
      { title: 'Commission-Free Revenue Growth', desc: 'Save thousands in OTA commission fees with direct guest bookings.' },
      { title: 'Tricity Highway Hub Knowledge', desc: 'Deep understanding of highway traveler and wedding event booking trends.' }
    ],
    targetIndustries: ['Hotels & Boutique Stays', 'Resorts & Waterparks', 'Wedding Banquet Halls', 'Homestays & Service Apartments', 'Fine Dining Restaurants'],
    faqs: [
      { question: 'Can guests book rooms directly without paying OTA commissions?', answer: 'Yes! Direct booking forms send reservation inquiries directly to your front desk on WhatsApp.' },
      { question: 'Can we showcase our banquet hall capacity and wedding menus?', answer: 'Yes, we build dedicated banquet hall pages with guest capacity tables, photos, and downloadable menus.' }
    ],
    imageAlt: 'Hotel and Banquet Website Design in Zirakpur - Veiled Story',
    imageSeed: 'hotel-web-design-zirakpur'
  }
};
