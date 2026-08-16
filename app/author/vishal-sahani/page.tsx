import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { VISHAL_SAHANI_AUTHOR } from '@/lib/authorData';
import { BLOG_POSTS_DATA } from '@/lib/blogsData';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Award, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Phone, 
  Search, 
  Sparkles, 
  Star, 
  UserCheck, 
  BookOpen, 
  ChevronRight,
  TrendingUp,
  Target,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: `${VISHAL_SAHANI_AUTHOR.name} - ${VISHAL_SAHANI_AUTHOR.title} | Author Profile`,
  description: `Official author profile and resume bio of ${VISHAL_SAHANI_AUTHOR.name}, ${VISHAL_SAHANI_AUTHOR.title} with 10+ years of experience scaling Google rankings, Meta Ads, and real estate lead funnels.`,
  keywords: [
    'Vishal Sahani',
    'Vishal Sahani SEO Expert',
    'Senior Digital Marketing Specialist Gorakhpur Zirakpur',
    'SEO Expert Tricity',
    'Veiled Story Author'
  ],
  openGraph: {
    title: `${VISHAL_SAHANI_AUTHOR.name} - ${VISHAL_SAHANI_AUTHOR.title}`,
    description: VISHAL_SAHANI_AUTHOR.summary,
    images: [{ url: VISHAL_SAHANI_AUTHOR.avatarUrl }],
  },
};

export default function AuthorProfilePage() {
  const author = VISHAL_SAHANI_AUTHOR;
  const articles = Object.values(BLOG_POSTS_DATA);

  // Schema.org Person & ProfilePage JSON-LD for Google Author E-E-A-T
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.title,
    description: author.summary,
    image: author.avatarUrl,
    telephone: author.phone,
    email: author.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gorakhpur',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India'
    },
    alumniOf: 'Uttar Pradesh Board',
    worksFor: {
      '@type': 'Organization',
      name: 'Veiled Story',
      url: 'https://veiledstory.com'
    },
    knowsAbout: [
      'Search Engine Optimization',
      'Technical SEO',
      'Local SEO & GMB',
      'Google Ads & PPC',
      'Meta Ads & Performance Marketing',
      'Lead Generation Funnels',
      'WordPress Development',
      'Content Strategy & Copywriting'
    ],
    sameAs: [
      author.socials.linkedin,
      author.socials.instagram,
      author.socials.facebook
    ]
  };

  return (
    <main className="min-h-screen bg-[#060d16] text-slate-100 selection:bg-[#A2C0E6] selection:text-[#060d16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-28 pb-16 overflow-hidden border-b border-[#A2C0E6]/20 bg-[#060d16]">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#A2C0E6] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A2C0E6]" />
            <Link href="/blogs" className="hover:text-[#A2C0E6] transition-colors">Blogs</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A2C0E6]" />
            <span className="text-[#A2C0E6] font-semibold">{author.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Avatar & Key Stats */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group mb-6">
                <div className="absolute -inset-1 bg-[#A2C0E6]/40 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-500" />
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#A2C0E6]/30 shadow-2xl">
                  <Image
                    src={author.avatarUrl}
                    alt={`${author.name} - ${author.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-[#A2C0E6] text-[#060d16] p-2 rounded-full border-2 border-[#060d16] shadow-lg" title="Verified Author & SEO Expert">
                  <UserCheck className="w-5 h-5 font-bold" />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] px-3 py-1 rounded-full text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" />
                {author.experienceYears} Experience
              </div>

              <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-400 mt-2">
                <span className="bg-[#060d16] px-2.5 py-1 rounded border border-[#A2C0E6]/20 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#A2C0E6]" /> {author.location.split('|')[0]}
                </span>
              </div>
            </div>

            {/* Author Intro & Contact */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="text-xs font-mono text-[#A2C0E6] font-bold uppercase tracking-widest bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 px-2.5 py-0.5 rounded">
                    Lead Writer & SEO Architect
                  </span>
                  <span className="text-xs font-mono text-amber-300 font-bold bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-300 text-amber-300" /> #1 Google Rank Specialist
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  {author.name}
                </h1>
                <p className="text-lg sm:text-xl text-[#A2C0E6] font-medium mt-1">
                  {author.title}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {author.summary}
              </p>

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={`tel:${author.phone}`}
                  className="inline-flex items-center gap-2 bg-[#A2C0E6] text-[#060d16] font-extrabold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all hover:bg-white shadow-lg"
                >
                  <Phone className="w-4 h-4" /> Call Direct: {author.phone}
                </a>

                <a
                  href={`mailto:${author.email}`}
                  className="inline-flex items-center gap-2 bg-[#060d16] hover:bg-[#A2C0E6]/10 text-slate-200 font-semibold px-5 py-2.5 rounded-xl border border-[#A2C0E6]/30 text-xs sm:text-sm transition-all"
                >
                  <Mail className="w-4 h-4 text-[#A2C0E6]" /> {author.email}
                </a>

                <a
                  href={`https://wa.me/917905403546?text=${encodeURIComponent('Hi Vishal, I read your blog profile on Veiled Story and want to discuss digital marketing and SEO.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg"
                >
                  <Globe className="w-4 h-4" /> WhatsApp Consultation
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Core Career Highlights Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="liquid-glass border border-[#A2C0E6]/25 rounded-2xl p-5 space-y-2 hover:border-[#A2C0E6] transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">10+ Years</div>
            <p className="text-xs text-slate-400">Digital Marketing & SEO Expertise (Active Since 2014)</p>
          </div>

          <div className="liquid-glass border border-[#A2C0E6]/25 rounded-2xl p-5 space-y-2 hover:border-[#A2C0E6] transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">#1 Google Rank</div>
            <p className="text-xs text-slate-400">Scaled portals like Propertygkp.com & Investo Homes</p>
          </div>

          <div className="liquid-glass border border-[#A2C0E6]/25 rounded-2xl p-5 space-y-2 hover:border-[#A2C0E6] transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">High ROAS Ads</div>
            <p className="text-xs text-slate-400">Meta & Google Ads Campaign Management Specialist</p>
          </div>

          <div className="liquid-glass border border-[#A2C0E6]/25 rounded-2xl p-5 space-y-2 hover:border-[#A2C0E6] transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">10+ Articles</div>
            <p className="text-xs text-slate-400">Lead Author on Local SEO, AEO & Growth Strategy</p>
          </div>
        </section>

        {/* Work Experience Timeline */}
        <section className="space-y-8">
          <div className="border-b border-[#A2C0E6]/20 pb-4 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-[#A2C0E6] uppercase tracking-widest font-bold">
                Career History
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 mt-1">
                <Briefcase className="w-6 h-6 text-[#A2C0E6]" /> Professional Experience
              </h2>
            </div>
            <span className="text-xs text-slate-400 bg-[#060d16] border border-[#A2C0E6]/20 px-3 py-1.5 rounded-lg">
              Proven Track Record (2014 - Present)
            </span>
          </div>

          <div className="relative border-l-2 border-[#A2C0E6]/30 ml-3 sm:ml-6 space-y-8 pl-6 sm:pl-8">
            {author.experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#060d16] border-2 border-[#A2C0E6] group-hover:scale-125 transition duration-300" />
                
                <div className="liquid-glass border border-[#A2C0E6]/20 group-hover:border-[#A2C0E6] rounded-2xl p-6 transition duration-300 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-sm font-semibold text-[#A2C0E6]">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300 bg-[#060d16] border border-[#A2C0E6]/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#A2C0E6]" /> {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#A2C0E6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competencies & Skills */}
        <section className="space-y-8">
          <div className="border-b border-[#A2C0E6]/20 pb-4">
            <span className="text-xs font-mono text-[#A2C0E6] uppercase tracking-widest font-bold">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 mt-1">
              <Search className="w-6 h-6 text-[#A2C0E6]" /> Skills & Technical Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {author.skills.map((skillGroup, index) => (
              <div key={index} className="liquid-glass border border-[#A2C0E6]/20 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-white border-b border-[#A2C0E6]/20 pb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#A2C0E6]" /> {skillGroup.category}
                </h3>
                <ul className="space-y-2.5">
                  {skillGroup.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A2C0E6]" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="liquid-glass border border-[#A2C0E6]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#060d16] border border-[#A2C0E6]/30 flex items-center justify-center text-[#A2C0E6] shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Educational Background</span>
              <h3 className="text-lg font-bold text-white">{author.education.degree}</h3>
              <p className="text-xs text-slate-300">{author.education.board} ({author.education.year})</p>
            </div>
          </div>
          <div className="bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] text-xs font-semibold px-4 py-2 rounded-xl text-center">
            Foundational Excellence in Digital Media & Technology
          </div>
        </section>

        {/* Articles Authored by Vishal Sahani */}
        <section className="space-y-8">
          <div className="border-b border-[#A2C0E6]/20 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-[#A2C0E6] uppercase tracking-widest font-bold">
                Thought Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 mt-1">
                <BookOpen className="w-6 h-6 text-[#A2C0E6]" /> Articles Written by {author.name}
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Showing {articles.length} Published SEO & Digital Guides
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="liquid-glass-interactive rounded-2xl p-5 border border-[#A2C0E6]/20 hover:border-[#A2C0E6] flex flex-col justify-between transition group shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[#A2C0E6] font-bold bg-[#A2C0E6]/10 px-2.5 py-0.5 rounded border border-[#A2C0E6]/30 text-[11px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-[#A2C0E6]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#A2C0E6] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#A2C0E6]/15 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{post.publishDate}</span>
                  <span className="text-[#A2C0E6] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Article <ChevronRight className="w-3.5 h-3.5 text-[#A2C0E6]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact / Consultation Box */}
        <section className="liquid-glass border border-[#A2C0E6]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#A2C0E6]/10 border border-[#A2C0E6]/30 text-[#A2C0E6] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#A2C0E6]" /> Consult Directly with Vishal Sahani
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white max-w-2xl mx-auto leading-tight">
            Ready to Rank #1 on Google & Scale Your Leads in 2026?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get a 1-on-1 technical SEO audit, Google Ads campaign evaluation, or local map strategy tailored specifically for your business in Zirakpur, Chandigarh & Tricity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/917905403546?text=${encodeURIComponent('Hi Vishal Sahani, I would like to get a digital marketing audit for my business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg"
            >
              <Globe className="w-4 h-4" /> Message Vishal on WhatsApp
            </a>

            <a
              href={`tel:${author.phone}`}
              className="inline-flex items-center gap-2 bg-[#060d16] hover:bg-[#A2C0E6]/10 text-slate-100 font-bold px-6 py-3.5 rounded-xl border border-[#A2C0E6]/30 text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-[#A2C0E6]" /> Call Direct: {author.phone}
            </a>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
