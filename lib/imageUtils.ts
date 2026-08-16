export function getThemedImageUrl(seedOrSlug?: string, category?: string): string {
  const seed = (seedOrSlug || '').toLowerCase();
  const cat = (category || '').toLowerCase();

  // Real estate & Properties
  if (seed.includes('real-estate') || seed.includes('property') || seed.includes('apartment') || cat.includes('real estate')) {
    return 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop';
  }

  // Pharma & Healthcare
  if (seed.includes('pharma') || seed.includes('health') || seed.includes('medicine') || cat.includes('pharma') || cat.includes('health')) {
    return 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop';
  }

  // Dental Clinic
  if (seed.includes('dental') || seed.includes('clinic') || cat.includes('dental')) {
    return 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop';
  }

  // B2B Manufacturing & Industrial
  if (seed.includes('manufacturing') || seed.includes('packaging') || seed.includes('industrial') || seed.includes('machinery') || cat.includes('b2b') || cat.includes('manufacturing')) {
    return 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop';
  }

  // E-commerce & Shopping
  if (seed.includes('ecom') || cat.includes('e-commerce') || cat.includes('ecommerce')) {
    return 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?q=80&w=1200&auto=format&fit=crop';
  }

  // Hotel, Banquet, Hospitality
  if (seed.includes('hotel') || seed.includes('banquet') || cat.includes('hotel') || cat.includes('hospitality')) {
    return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop';
  }

  // Salon & Beauty
  if (seed.includes('salon') || seed.includes('beauty')) {
    return 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop';
  }

  // AI / AEO / GEO / ChatGPT / Future Search
  if (seed.includes('aeo') || seed.includes('geo') || seed.includes('chatgpt') || seed.includes('ai') || cat.includes('aeo') || cat.includes('geo') || cat.includes('ai')) {
    return 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
  }

  // Social Media & Instagram/Meta Ads
  if (seed.includes('social') || seed.includes('meta') || seed.includes('smm') || cat.includes('social')) {
    return 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop';
  }

  // Google Ads / PPC / Paid Ads
  if (seed.includes('ads') || seed.includes('ppc') || cat.includes('google ads') || cat.includes('ppc')) {
    return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop';
  }

  // Web Design & Software Development
  if (seed.includes('web') || seed.includes('wordpress') || seed.includes('nextjs') || seed.includes('dev') || cat.includes('web')) {
    return 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop';
  }

  // SEO & Google Business Profile / Local Search
  if (seed.includes('seo') || seed.includes('gmb') || cat.includes('seo')) {
    return 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop';
  }

  // Default Digital Agency Analytics & Workspace
  return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
}
