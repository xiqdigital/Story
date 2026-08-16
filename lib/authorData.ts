export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface AuthorProfile {
  name: string;
  slug: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
  avatarUrl: string;
  experienceYears: string;
  summary: string;
  experiences: ExperienceItem[];
  skills: SkillCategory[];
  education: {
    degree: string;
    year: string;
    board: string;
  };
}

export const VISHAL_SAHANI_AUTHOR: AuthorProfile = {
  name: 'Vishal Sahani',
  slug: 'vishal-sahani',
  title: 'Senior Digital Marketing Specialist & SEO Expert',
  location: 'Gorakhpur, UP 273001 | Operating across Tricity & All India',
  phone: '+917905403546',
  email: 'Vis792@gmail.com',
  socials: {
    linkedin: 'https://linkedin.com/in/vishal-sahani',
    instagram: 'https://instagram.com/vishal_sahani',
    facebook: 'https://facebook.com/vishalsahani',
  },
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  experienceYears: '10+ Years (Since 2014)',
  summary: 'Results-driven Senior Digital Marketing Specialist and SEO Expert with over a decade (since 2014) of extensive expertise in driving organic growth, brand visibility, lead generation, and customer engagement. Proven track record of scaling high-traffic portals to #1 Google rankings, managing end-to-end digital marketing campaigns (Google Ads, Meta Ads), technical WordPress development, and delivering robust strategic sales planning to maximize ROI and business revenue.',
  experiences: [
    {
      role: 'Digital Marketing Specialist',
      company: 'Investo Homes Advisors',
      period: '2022 – 2025',
      highlights: [
        'Designed, developed, and maintained WordPress-based real estate portals, ensuring advanced technical SEO optimization, responsive layout, and top-tier user experience.',
        'Executed comprehensive Search Engine Optimization (SEO) strategies that drastically enhanced organic keyword rankings and targeted web traffic.',
        'Managed multi-channel Social Media Marketing and Meta Ads campaigns across platforms to actively engage high-net-worth potential clients and showcase premium property portfolios.',
        'Spearheaded high-impact digital marketing initiatives to amplify regional brand visibility and generate qualified, high-conversion real estate leads.',
      ],
    },
    {
      role: 'Digital Marketing & Sales Executive',
      company: 'Yamaha Showroom - Bharat Trading Company',
      period: 'June 2018 – Oct 2019',
      highlights: [
        'Directed comprehensive digital marketing and online promotional campaigns to drive targeted local foot traffic and accelerate automobile showroom sales.',
        'Executed highly customized Meta Ads (Facebook & Instagram advertising) campaigns highlighting new vehicle launches, exclusive dealership offers, and seasonal financial schemes.',
        'Analyzed digital campaign metrics and consumer data to continuously refine advertising strategies and boost regional brand outreach.',
      ],
    },
    {
      role: 'SEO & Lead Generation Specialist',
      company: 'Aisspra LifeSpace & Propertygkp.com',
      period: 'March 2015 – Dec 2018',
      highlights: [
        'Spearheaded systematic lead generation frameworks for Aisspra LifeSpace through targeted multi-channel content production and professional content writing across blogs, websites, and YouTube channels.',
        'Successfully scaled and managed Propertygkp.com, achieving #1 Google Rankings in 2017 for highly competitive real estate keywords including "Property in Gorakhpur", "Flats in Gorakhpur", "Residential Plots in Gorakhpur", and "3/4 BHK Flats in Gorakhpur".',
        'Conducted rigorous keyword research, competitor analysis, and market assessments to formulate high-ROI digital performance campaigns.',
        'Optimized Google My Business and local map profiles to secure dominant local search pack positioning.',
        'Delivered dedicated customer consulting and executed strategic sales planning to close high-value real estate transactions.',
      ],
    },
    {
      role: 'Independent Digital Marketer & Blogger',
      company: 'Self-Employed Ventures',
      period: 'July 2014 – March 2015',
      highlights: [
        'Launched self-managed blogging and content ventures in 2014, independently mastering advanced on-page/off-page SEO, content writing, audience engagement, and web analytics.',
        'Executed early-stage performance marketing campaigns utilizing Google AdWords and Meta Ads promotional networks.',
        'Architected and optimized custom WordPress websites, elevating technical performance and user retention for early business clients.',
      ],
    },
  ],
  skills: [
    {
      category: 'SEO & Search Marketing',
      skills: [
        'Search Engine Optimization (SEO)',
        'Technical SEO & Audits',
        'Keyword Research & Strategy',
        'Google Ads / PPC Campaigns',
        'Local SEO & GMB Optimization',
      ],
    },
    {
      category: 'Web & Content Development',
      skills: [
        'WordPress Development',
        'Content Management Systems (CMS)',
        'Professional Content Writer',
        'Digital Asset Branding',
        'Copywriting & Tech Blogging',
      ],
    },
    {
      category: 'Strategy, Ads & Analytics',
      skills: [
        'Meta Ads Specialist (FB & Insta)',
        'Lead Generation & Sales Funnels',
        'Social Media Marketing (SMM)',
        'Strategic Customer Consulting',
        'ROI Optimization & Analytics',
      ],
    },
  ],
  education: {
    degree: 'Higher Secondary Education (High School)',
    year: '2012',
    board: 'Uttar Pradesh Board',
  },
};
