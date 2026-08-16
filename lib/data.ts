export interface ServiceCategory {
  id: string;
  h3: string;
  iconName: string;
  description: string;
  h4s: { title: string; desc: string; slug?: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface LocationItem {
  city: string;
  title: string;
  description: string;
  highlights: string[];
  zipCodes: string;
  landmarks: string;
}

export const SITE_CONFIG = {
  name: "Veiled Story",
  domain: "Veiledstory.com",
  phone: "+917905403546",
  whatsappNumber: "917905403546",
  email: "contact@veiledstory.com",
  address: "VIP Road, Zirakpur, Punjab 140603, India",
  primaryKeyword: "Digital Marketing Company in Zirakpur",
  secondaryLocations: ["Chandigarh", "Panchkula", "Mohali", "Zirakpur"],
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "seo-services",
    h3: "Search Engine Optimization (SEO)",
    iconName: "Search",
    description: "Get your business found on Google search results and Google Map packs. We deliver organic search engine optimization for local businesses, real estate builders, and service providers in Zirakpur and Tricity.",
    h4s: [
      {
        title: "Digital Marketing Company in Chandigarh Page",
        desc: "360° full-funnel digital marketing landing page for Chandigarh & Tricity businesses—combining SEO, Google Ads, Meta Ads, SMM, Web Design, and AEO/GEO.",
        slug: "/digital-marketing-company-chandigarh"
      },
      {
        title: "SEO Company in Zirakpur Page",
        desc: "Our flagship SEO landing page engineered specifically for Zirakpur businesses to achieve top Google search rankings, GMB map pack leads, and AI overview visibility.",
        slug: "/seo-company-in-zirakpur"
      },
      {
        title: "SEO Company in Zirakpur",
        desc: "Dominate Google Map pack listings and search results in Zirakpur and Tricity. We optimize geo-targeted keywords, local citations, and Google Business Profile signals so nearby customers find you first.",
        slug: "seo-company-zirakpur"
      },
      {
        title: "On-Page SEO",
        desc: "Improve your website search relevance with optimized title tags, meta descriptions, heading tags, image alt text, and structured schema markup.",
        slug: "on-page-seo-company"
      },
      {
        title: "Technical SEO",
        desc: "Fix site speed issues, core web vitals, broken links, indexing errors, and XML sitemaps to ensure search engine bots crawl your site without errors.",
        slug: "technical-seo-company"
      },
      {
        title: "Off-Page SEO",
        desc: "Build authority for your domain with high-quality contextual backlinks, local business listings, and genuine brand mentions.",
        slug: "off-page-seo-company"
      },
      {
        title: "Google Business Profile Optimization",
        desc: "Claim, verify, and fully optimize your Google Business Listing to trigger local map results, generate direct call inquiries, and get 5-star customer reviews.",
        slug: "google-business-profile-optimization"
      }
    ]
  },
  {
    id: "ppc-services",
    h3: "Google Ads & Pay-Per-Click (PPC) Marketing",
    iconName: "Target",
    description: "Generate steady phone calls and direct WhatsApp leads with targeted Google Search, Display, and Remarketing ad campaigns built for local buyers in Zirakpur.",
    h4s: [
      {
        title: "Search Ads",
        desc: "Capture customers searching for your services in Zirakpur with high-converting Google Search ads optimized for maximum quality score and lower cost per click.",
        slug: "google-ads-agency"
      },
      {
        title: "Display Advertising",
        desc: "Show visual banner ads across popular news sites and blogs to build local brand awareness among prospective customers in Tricity.",
        slug: "google-ads-agency"
      },
      {
        title: "Remarketing Campaigns",
        desc: "Re-engage past website visitors with targeted follow-up ads that encourage them to complete an enquiry or buy your product.",
        slug: "google-ads-agency"
      },
      {
        title: "Lead Generation Campaigns",
        desc: "Design fast landing pages and lead forms that convert website visitors into phone calls and direct WhatsApp messages.",
        slug: "lead-generation"
      }
    ]
  },
  {
    id: "smm-services",
    h3: "Social Media Marketing",
    iconName: "Share2",
    description: "Build brand awareness and attract customers with targeted Facebook, Instagram, and LinkedIn campaigns tailored for local audiences in Zirakpur and Tricity.",
    h4s: [
      {
        title: "Facebook & Instagram Marketing",
        desc: "Reach local customers in Zirakpur, Chandigarh, and Mohali with engaging reels, carousel posts, and story ads.",
        slug: "meta-ads-agency"
      },
      {
        title: "Social Media Management",
        desc: "Complete social media account handling including content planning, graphics design, caption writing, hashtag research, and community engagement.",
        slug: "social-media-marketing"
      },
      {
        title: "Paid Social Advertising",
        desc: "Run laser-focused lead ads using Meta Ads Manager to generate verified inquiries for real estate, clinics, retail stores, and service businesses.",
        slug: "meta-ads-agency"
      },
      {
        title: "Social Media Content Strategy",
        desc: "Plan structured content pillars combining educational guides, customer testimonials, special offers, and behind-the-scenes posts.",
        slug: "social-media-optimization"
      }
    ]
  },
  {
    id: "aeo-geo-services",
    h3: "AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization)",
    iconName: "Cpu",
    description: "Get your business cited and recommended when customers search on AI platforms like Google AI Overviews, ChatGPT, Gemini, and Perplexity for local services in Zirakpur.",
    h4s: [
      {
        title: "Generative Engine Optimization (GEO)",
        desc: "Format your website content with structured facts, statistics, citations, and entity signals so AI search engines recommend your brand.",
        slug: "generative-engine-optimization"
      },
      {
        title: "Answer Engine Optimization (AEO)",
        desc: "Structure content into clear FAQ blocks and concise answers that appear directly in Google AI Overviews and voice search answers.",
        slug: "answer-engine-optimization"
      },
      {
        title: "AI Knowledge Graph & Entity Building",
        desc: "Establish clear brand entity relationships across official directories and news mentions so AI tools identify your business accurately.",
        slug: "ai-overview-optimization"
      },
      {
        title: "Brand Citation & Recommendation Strategy",
        desc: "Earn authoritative local mentions and reviews that influence AI model recommendations when users ask for top digital marketing agencies in Zirakpur.",
        slug: "ai-overview-optimization"
      }
    ]
  },
  {
    id: "web-dev-services",
    h3: "Website Design & Development",
    iconName: "Globe",
    description: "Convert website visitors into paying clients with fast, mobile-responsive, SEO-optimized websites built on modern frameworks.",
    h4s: [
      {
        title: "SEO-Friendly Website Design",
        desc: "Websites engineered with clean code structure, fast load speeds, proper heading hierarchy, and mobile-first layouts.",
        slug: "custom-web-designing"
      },
      {
        title: "Responsive Website Development",
        desc: "Ensure your website looks great and works smoothly across mobile phones, tablets, laptops, and desktop screens.",
        slug: "wordpress-web-development"
      },
      {
        title: "Landing Page Design",
        desc: "High-converting single-page landing pages optimized with persuasive copy, clear calls-to-action, and quick WhatsApp lead forms.",
        slug: "real-estate-website-designing"
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Optimize website layout, button placement, forms, and user pathways to convert more traffic into actual business inquiries.",
        slug: "custom-web-designing"
      }
    ]
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    h3: "Customized Digital Marketing Strategies",
    h4: "Strategies Built Around Your Business Goals",
    desc: "We do not use standard templates. Veiled Story analyzes your business goals, local Zirakpur competitors, and target customers to build a custom growth strategy aligned with your budget."
  },
  {
    h3: "Data-Backed Execution",
    h4: "Campaigns Optimized for Real ROI",
    desc: "Every rupee you invest is tracked against actual lead metrics—phone calls, WhatsApp messages, form fills, and sales conversions. No guesswork, only clear performance."
  },
  {
    h3: "Clear Monthly Reporting",
    h4: "Simple Performance Updates",
    desc: "Track your campaign progress through easy-to-understand monthly reports and direct WhatsApp updates. You will always know how your traffic and leads are growing."
  },
  {
    h3: "Creative Content & Design",
    h4: "Professional Visual Identity",
    desc: "Our team creates eye-catching visual content, clear copy, and modern website layouts that build trust with your customers and make your brand stand out in Zirakpur."
  },
  {
    h3: "Focus on Real Business Growth",
    h4: "More Calls, Leads & Revenue",
    desc: "We measure success by phone calls ringing at your business, WhatsApp inquiries sent to +917905403546, and actual customer walk-ins in Zirakpur, not just vanity impressions."
  }
];

export const LOCATIONS_DATA: LocationItem[] = [
  {
    city: "Zirakpur",
    title: "Digital Marketing Company in Zirakpur",
    description: "Based on VIP Road, Zirakpur, Veiled Story helps local businesses rank at the top of Google search results and map listings across VIP Road, Chandigarh-Ambala Highway, Gazipur Road, and PR7 Ring Road.",
    highlights: ["Google Map Pack Dominance", "VIP Road & Highway Business SEO", "Fast Lead Gen for Real Estate & Retail", "Direct WhatsApp Client Connect"],
    zipCodes: "140603, 140105",
    landmarks: "VIP Road, Ambala Highway, Maya Garden, Highland Park"
  },
  {
    city: "Chandigarh",
    title: "Digital Marketing Company in Chandigarh",
    description: "Chandigarh businesses require strong brand positioning and organic SEO. We help companies in Sector 17, Sector 35, Industrial Area Phase 1 & 2, and Elante Mall reach local buyers effectively.",
    highlights: ["Strong Brand Positioning", "B2B Corporate Lead Generation", "High-Converting Web Design", "Sector-Specific Local Targeting"],
    zipCodes: "160017, 160002, 160036",
    landmarks: "Sector 17 Plaza, Elante Mall, IT Park, Sector 35"
  },
  {
    city: "Panchkula",
    title: "Digital Marketing Company in Panchkula",
    description: "Grow your business across Panchkula's residential sectors, Industrial Area, and medical clinics. We run targeted SEO and Google Ads campaigns tailored for local residents.",
    highlights: ["Healthcare & Education SEO", "Industrial Lead Pipelines", "Google Business Profile Booster", "Local Social Media Branding"],
    zipCodes: "134109, 134112, 134113",
    landmarks: "MDC Swastik Vihar, Sector 8 Market, Industrial Area Phase 1"
  },
  {
    city: "Mohali",
    title: "Digital Marketing Company in Mohali",
    description: "Position your tech startup, real estate office, or retail store in Mohali's growing commercial hubs like Phase 8B, Sector 70, and Aerocity with focused digital marketing.",
    highlights: ["IT & Startup Performance Marketing", "Aerocity Real Estate PPC Campaigns", "Social Media Local Growth", "E-commerce Web Optimization"],
    zipCodes: "160055, 160062, 160071",
    landmarks: "Mohali IT Park, Phase 7 Market, Aerocity, VR Punjab"
  }
];

export const INDUSTRIES_DATA = [
  {
    title: "Digital Marketing for Local Businesses",
    desc: "Restaurants, retail shops, salons, gyms, and repair service providers in Zirakpur get direct phone calls and foot traffic using Google Map SEO and localized Facebook ads."
  },
  {
    title: "Digital Marketing for Startups",
    desc: "Cost-effective digital marketing plans for startups looking for rapid customer acquisition, lower lead cost, and steady organic search growth."
  },
  {
    title: "Digital Marketing for E-commerce Businesses",
    desc: "Increase product sales through Google Shopping Ads, Facebook catalog ads, fast online store design, and search engine optimization."
  },
  {
    title: "Digital Marketing for Service-Based Businesses",
    desc: "Law firms, accounting offices, consultants, and coaching centers receive steady inquiries from clients actively searching for services."
  },
  {
    title: "Digital Marketing for Real Estate Businesses",
    desc: "High-converting lead generation campaigns for 2BHK/3BHK flats, plots, and commercial properties in Zirakpur, Aerocity Mohali, and New Chandigarh."
  },
  {
    title: "Digital Marketing for Healthcare Clinics",
    desc: "Compliant digital marketing for medical clinics, dental centers, and hospitals in Tricity focused on patient appointments and Google reviews."
  }
];

export const APPROACH_STEPS = [
  {
    step: "01",
    title: "Business & Competitor Audit",
    desc: "We analyze your business offerings, target audience, local competitors in Zirakpur, and current search engine presence."
  },
  {
    step: "02",
    title: "Custom Strategy & Keyword Mapping",
    desc: "Our team creates a 90-day marketing plan covering target keywords, budget allocation, landing page structure, and lead forms."
  },
  {
    step: "03",
    title: "Campaign Setup & Launch",
    desc: "We launch your SEO, Google Ads, or social media campaigns with proper conversion tracking to measure calls and message inquiries."
  },
  {
    step: "04",
    title: "Continuous Optimization & Scaling",
    desc: "We monitor campaign performance daily, refine keyword bidding, test creative copy, and scale the channels that produce the highest ROI."
  }
];

export const GROWTH_BENEFITS = [
  {
    title: "More Qualified Website Visitors",
    desc: "Attract local customers actively searching for your services in Zirakpur and nearby Tricity locations."
  },
  {
    title: "Top Search Rankings",
    desc: "Rank on page 1 of Google for high-intent keywords like 'Digital Marketing Company in Zirakpur' and earn organic traffic."
  },
  {
    title: "Consistent Sales Leads",
    desc: "Receive direct phone calls and WhatsApp messages (+917905403546) from ready-to-buy clients with simple contact forms."
  },
  {
    title: "Professional Brand Image",
    desc: "Build a strong, trustworthy brand identity across Google, Facebook, Instagram, and LinkedIn that competitors envy."
  },
  {
    title: "Maximum Return on Ad Spend",
    desc: "Eliminate wasted ad spend by continuously refining campaigns to focus only on high-performing keywords and audiences."
  }
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  location: string;
  metric: string;
  metricLabel: string;
  serviceUsed: string;
  quote: string;
  rating: number;
  avatar: string;
  verified: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh Sharma",
    role: "Managing Director",
    company: "Royal Heights Infra",
    industry: "Real Estate",
    location: "VIP Road, Zirakpur",
    metric: "+380%",
    metricLabel: "Organic Lead Inquiries",
    serviceUsed: "Local SEO & Meta Lead Ads",
    quote: "Veiled Story helped us generate consistent property buyer leads in Zirakpur. After optimizing our Google Business Profile and running focused Facebook Lead Ads, site visits increased significantly. They understand the local Zirakpur real estate market very well.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    verified: true
  },
  {
    id: "test-2",
    name: "Dr. Ananya Kapoor",
    role: "Founder & Lead Surgeon",
    company: "Aura Dental Clinic",
    industry: "Healthcare",
    location: "Sector 35, Chandigarh",
    metric: "#1 Rank",
    metricLabel: "Google Map Pack Positioning",
    serviceUsed: "Google Business Profile & Local SEO",
    quote: "Our dental clinic was difficult to find on Google Maps earlier. Veiled Story updated our local listings, added proper patient FAQs, and built local citations. Now we rank at the top of Google Maps in Sector 35 Chandigarh for key dental queries.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    verified: true
  },
  {
    id: "test-3",
    name: "Vikram Malhotra",
    role: "Co-Founder",
    company: "Apex PCD Pharma Franchise",
    industry: "Pharma",
    location: "Phase 8B, Mohali",
    metric: "4.8x ROI",
    metricLabel: "Google Ads ROAS",
    serviceUsed: "Google Search PPC & Landing Page",
    quote: "Getting genuine PCD pharma franchise leads across India was expensive before. Veiled Story built a fast landing page and managed our Google Search Ads with strict negative keyword filtering. Our cost per verified inquiry reduced by 45%.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    verified: true
  },
  {
    id: "test-4",
    name: "Pooja Verma",
    role: "Brand Manager",
    company: "Luxe Couture Salon & Spa",
    industry: "Beauty & Wellness",
    location: "MDC Sector 5, Panchkula",
    metric: "+210%",
    metricLabel: "Monthly Booking Growth",
    serviceUsed: "Instagram Reels & Social Media Marketing",
    quote: "We needed clean, eye-catching social media posts to attract clients in Panchkula. Veiled Story created sleek Instagram reels, carousel posts, and targeted local ads. Our weekend appointment calendar stays fully booked now.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    verified: true
  },
  {
    id: "test-5",
    name: "Gurpreet Singh",
    role: "General Manager",
    company: "Grand Pine Boutique Hotel",
    industry: "Hospitality",
    location: "Ambala-Chandigarh Highway, Zirakpur",
    metric: "₹14L+",
    metricLabel: "Direct Banquet Bookings",
    serviceUsed: "Full-Funnel Digital Marketing",
    quote: "Veiled Story created an easy-to-use website for our hotel with direct booking inquiry forms. Combining that with Google Search Ads for banquet hall bookings in Zirakpur brought us high-value direct wedding bookings.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    verified: true
  },
  {
    id: "test-6",
    name: "Amanpreet Kaur",
    role: "E-Commerce Founder",
    company: "Vedic Roots Organic Care",
    industry: "E-Commerce",
    location: "Chandigarh Road, Zirakpur",
    metric: "3.2x",
    metricLabel: "Sales Growth in 90 Days",
    serviceUsed: "E-Commerce Web Design & Meta Ads",
    quote: "They developed a fast online store for us that loads under 1 second on mobile phones. Their Facebook and Instagram ad management helped scale our online orders significantly within 90 days.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    verified: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "What Does a Digital Marketing Company Do?",
    answer: "A digital marketing company builds and manages online campaigns—such as Search Engine Optimization (SEO), Google Ads (PPC), Social Media Marketing, and Website Development—to help businesses get higher search visibility, drive website traffic, and generate verified sales leads.",
    category: "General"
  },
  {
    question: "Why Should I Hire a Digital Marketing Company in Zirakpur?",
    answer: "Hiring a local agency in Zirakpur like Veiled Story gives you access to a team that understands the local Tricity buyer mindset (Zirakpur, Chandigarh, Panchkula, and Mohali). We offer local SEO, face-to-face meetings, and fast communication on WhatsApp at +917905403546.",
    category: "Local"
  },
  {
    question: "Which Digital Marketing Services Does Veiled Story Offer?",
    answer: "Veiled Story provides complete digital marketing solutions: Local SEO, On-Page & Technical SEO, Google Search & Display Ads, Facebook & Instagram Paid Marketing, Social Media Handling, Web Design & Development, and Google Business Profile Optimization.",
    category: "Services"
  },
  {
    question: "Do You Provide Digital Marketing Services in Chandigarh, Mohali & Panchkula?",
    answer: "Yes. While our primary office is located in Zirakpur on VIP Road, Veiled Story serves clients across Chandigarh (Sector 17, Sector 35, Industrial Area), Panchkula (MDC, Sector 8), and Mohali (Phase 7, Aerocity, IT Park).",
    category: "Coverage"
  },
  {
    question: "How Long Does SEO Take to Show Results in Zirakpur?",
    answer: "SEO is an ongoing growth investment. Initial improvements in Google Business Profile listings and site technical fixes usually show progress within 3 to 6 weeks, while major organic keyword rankings and steady lead volume grow over 3 to 6 months.",
    category: "SEO"
  },
  {
    question: "What is AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization)?",
    answer: "AEO prepares your website content to directly answer questions on AI platforms like ChatGPT, Gemini, and Google AI Overviews. GEO structures your business facts, citations, and entity data so AI engines cite your brand as a recommended option for local queries.",
    category: "AEO & GEO"
  },
  {
    question: "Why Does My Zirakpur Business Need AEO and GEO Optimization?",
    answer: "More customers are asking questions directly to AI tools like ChatGPT and Google AI Overviews. AEO and GEO ensure your business is recommended when potential clients ask AI assistants for top service providers in Zirakpur.",
    category: "AEO & GEO"
  },
  {
    question: "How Much Do Digital Marketing Services Cost in Zirakpur?",
    answer: "Digital marketing costs depend on your campaign goals, target location scope, and services required. Veiled Story provides clear, budget-friendly packages for small local businesses, real estate firms, and growing enterprises. Contact us on WhatsApp at +917905403546 for a custom quote.",
    category: "Pricing"
  },
  {
    question: "Can You Manage Both SEO and Google Ads Together?",
    answer: "Yes. Combining SEO for long-term organic search traffic with Google Ads for immediate lead generation builds a comprehensive growth system. We manage both simultaneously for complete search coverage.",
    category: "Services"
  }
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  imageSeed: string;
}

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "blog-1",
    slug: "local-seo-guide-zirakpur-tricity",
    title: "How to Rank #1 on Google Maps in Zirakpur & Tricity (Local SEO Guide)",
    excerpt: "Learn how to optimize your Google Business Profile, get 5-star customer reviews, and rank higher for local search queries across VIP Road, Chandigarh, Panchkula, and Mohali.",
    category: "Local SEO",
    date: "August 2026",
    readTime: "6 min read",
    author: "Vishal Sahani",
    imageSeed: "local-seo-zirakpur-guide"
  },
  {
    id: "blog-2",
    slug: "aeo-geo-chatgpt-search-optimization",
    title: "AEO & GEO: How to Get Your Business Recommended by ChatGPT & Perplexity",
    excerpt: "Discover how structured business facts, citations, and FAQ content ensure AI search engines recommend your brand for local queries.",
    category: "AI Marketing",
    date: "August 2026",
    readTime: "8 min read",
    author: "Vishal Sahani",
    imageSeed: "chatgpt-aeo-marketing"
  },
  {
    id: "blog-3",
    slug: "real-estate-lead-generation-google-meta-ads",
    title: "Google Ads vs Meta Ads for Real Estate Lead Generation in Zirakpur",
    excerpt: "A practical guide comparing cost per lead, buyer intent, and conversion rates when selling flats and commercial spaces in Tricity.",
    category: "Paid Advertising",
    date: "July 2026",
    readTime: "7 min read",
    author: "Vishal Sahani",
    imageSeed: "real-estate-ads-zirakpur"
  },
  {
    id: "blog-4",
    slug: "speed-matters-nextjs-vs-wordpress-web-design",
    title: "Why Fast Website Page Speed Matters for Google Rankings in 2026",
    excerpt: "Page loading speed directly affects your search positions and visitor conversions. Learn why modern clean website builds perform better on mobile.",
    category: "Web Development",
    date: "July 2026",
    readTime: "5 min read",
    author: "Vishal Sahani",
    imageSeed: "nextjs-web-design-speed"
  }
];



