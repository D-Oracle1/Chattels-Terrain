import type { LucideIcon } from "lucide-react";
import {
  Search,
  Package,
  LineChart,
  TrendingUp,
  BedDouble,
  MapPin,
  ShieldCheck,
  Handshake,
  Gem,
  Plane,
  GraduationCap,
  Ticket,
  Building2,
  Compass,
  Eye,
  Presentation,
  FileSearch,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Trust indicators — the Edinburgh investment case in numbers         */
/* ------------------------------------------------------------------ */
export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export const stats: Stat[] = [
  { label: "Visitors to Edinburgh / year", value: 4.4, suffix: "M+" },
  { label: "Student Population", value: 62, suffix: "K+" },
  { label: "Avg Occupancy Achieved", value: 82, suffix: "%" },
  { label: "Target Net Yield", value: 8, suffix: "%+" },
  { label: "Annual Tourism Economy", value: 1.3, prefix: "£", suffix: "B" },
];

/* ------------------------------------------------------------------ */
/* What we do — sourcing & advisory offering (NOT development)         */
/* ------------------------------------------------------------------ */
export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  features: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "property-sourcing",
    title: "Property Sourcing",
    icon: Search,
    summary:
      "We identify high-potential Edinburgh apartments suited to the serviced-accommodation model — before they reach the open market wherever possible.",
    features: [
      "Off-market and on-market sourcing",
      "Location & demand analysis",
      "Yield-led selection",
    ],
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "investment-packaging",
    title: "Investment Packaging",
    icon: Package,
    summary:
      "Each opportunity is structured into a clear, investor-ready package — numbers, projections and documentation in one place.",
    features: [
      "Full financial modelling",
      "Projected occupancy & yield",
      "Investor-ready documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "investor-advisory",
    title: "Investor Advisory",
    icon: LineChart,
    summary:
      "Clear, impartial guidance that helps you understand each opportunity and make confident, well-informed decisions.",
    features: [
      "Strategy & goal alignment",
      "Risk and return clarity",
      "Ongoing market guidance",
    ],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "serviced-apartments",
    title: "Serviced Apartment Opportunities",
    icon: BedDouble,
    summary:
      "Carefully selected serviced-apartment opportunities positioned for Edinburgh's year-round visitor and business-travel demand.",
    features: [
      "Premium short-stay assets",
      "Strong nightly-rate locations",
      "Operator-ready properties",
    ],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "portfolio-growth",
    title: "Portfolio Growth Support",
    icon: TrendingUp,
    summary:
      "We support investors beyond the first deal — helping you scale a resilient, income-producing Edinburgh property portfolio over time.",
    features: [
      "Repeat & scaled sourcing",
      "Performance reviews",
      "Long-term partnership",
    ],
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ------------------------------------------------------------------ */
/* Why Edinburgh — the investment case                                 */
/* ------------------------------------------------------------------ */
export type ValueProp = { title: string; description: string; icon: LucideIcon };

export const edinburghReasons: ValueProp[] = [
  {
    title: "Strong Tourism Demand",
    description:
      "A UNESCO World Heritage capital that draws visitors in every season — underpinning consistent short-stay occupancy.",
    icon: Compass,
  },
  {
    title: "International Visitors",
    description:
      "One of the UK's most visited cities outside London, attracting global leisure and corporate travellers year-round.",
    icon: Plane,
  },
  {
    title: "Major University Population",
    description:
      "Tens of thousands of students and visiting academics create durable, recurring accommodation demand.",
    icon: GraduationCap,
  },
  {
    title: "Business Travel Market",
    description:
      "A financial, tech and government hub generating steady mid-week corporate stays.",
    icon: Building2,
  },
  {
    title: "Festival Economy",
    description:
      "The world's largest arts festival and a packed events calendar drive premium peak-season nightly rates.",
    icon: Ticket,
  },
  {
    title: "Limited Premium Supply",
    description:
      "Tight planning and constrained stock keep quality serviced accommodation in short supply — and high demand.",
    icon: ShieldCheck,
  },
];

/** Headline infographic metrics for the "Edinburgh attracts" panel. */
export const edinburghMetrics: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { value: 4.4, suffix: "M+", label: "Annual visitors", icon: Compass },
  { value: 150, suffix: "K+", label: "Business travellers", icon: Plane },
  { value: 62, suffix: "K+", label: "Students in the city", icon: GraduationCap },
  { value: 365, suffix: "", label: "Days of demand a year", icon: Ticket },
];

/* ------------------------------------------------------------------ */
/* Property sourcing process — six steps                               */
/* ------------------------------------------------------------------ */
export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const sourcingProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Market Research",
    description:
      "We continuously analyse Edinburgh's neighbourhoods, demand drivers and nightly-rate trends.",
    icon: Search,
  },
  {
    step: "02",
    title: "Property Identification",
    description:
      "We pinpoint apartments with the right location, layout and yield potential for serviced use.",
    icon: MapPin,
  },
  {
    step: "03",
    title: "Due Diligence",
    description:
      "Each property is rigorously assessed — pricing, condition, licensing and demand validation.",
    icon: FileSearch,
  },
  {
    step: "04",
    title: "Investment Packaging",
    description:
      "We translate the opportunity into a clear, investor-ready package with full projections.",
    icon: Package,
  },
  {
    step: "05",
    title: "Investor Presentation",
    description:
      "We present the opportunity transparently, answering every question before you commit.",
    icon: Presentation,
  },
  {
    step: "06",
    title: "Portfolio Growth Support",
    description:
      "We stay alongside you — sourcing further opportunities to scale your portfolio over time.",
    icon: TrendingUp,
  },
];

/* ------------------------------------------------------------------ */
/* What sets us apart — four premium differentiators                   */
/* ------------------------------------------------------------------ */
export const differentiators: ValueProp[] = [
  {
    title: "Strategic Location Focus",
    description:
      "We concentrate on Edinburgh, one of the UK's most resilient and sought-after property markets.",
    icon: MapPin,
  },
  {
    title: "Carefully Selected Opportunities",
    description:
      "Every opportunity is assessed for location, demand and yield potential before it reaches you.",
    icon: Gem,
  },
  {
    title: "Investor-Centred Approach",
    description:
      "Transparency and clarity guide every recommendation we make — your goals come first.",
    icon: Eye,
  },
  {
    title: "Long-Term Partnership Mindset",
    description:
      "We help investors grow sustainable property portfolios, not just complete a single transaction.",
    icon: Handshake,
  },
];

/* ------------------------------------------------------------------ */
/* Investor trust badges                                               */
/* ------------------------------------------------------------------ */
export const trustBadges: string[] = [
  "Market Research Driven",
  "Due Diligence Focused",
  "Strategic Investment Opportunities",
  "Edinburgh Market Expertise",
  "Long-Term Portfolio Growth",
];

/* ------------------------------------------------------------------ */
/* Opportunities (serviced apartments) — shown as cards & map          */
/* ------------------------------------------------------------------ */
export type ProjectCategory =
  | "Serviced Apartments"
  | "Aparthotel"
  | "Boutique Suites"
  | "Short-Stay Let";

export type ProjectStatus = "Available" | "Funding" | "Coming Soon";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  value: string;
  timeline: string;
  scope: string;
  roi: string;
  lat: number;
  lng: number;
  image: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "royal-mile-residences",
    name: "Royal Mile Residences",
    category: "Serviced Apartments",
    status: "Available",
    location: "Old Town, Edinburgh",
    value: "£395,000",
    timeline: "Ready now",
    scope:
      "A two-bedroom apartment steps from the Royal Mile — prime footfall, premium nightly rates and year-round visitor demand.",
    roi: "8.6% net",
    lat: 55.9508,
    lng: -3.1869,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "new-town-collection",
    name: "New Town Collection",
    category: "Boutique Suites",
    status: "Funding",
    location: "New Town, Edinburgh",
    value: "£525,000",
    timeline: "Q3 2026",
    scope:
      "Georgian boutique suites in Edinburgh's elegant New Town — a UNESCO setting prized by leisure and corporate guests.",
    roi: "8.1% net",
    lat: 55.9568,
    lng: -3.1968,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "leith-waterfront-apartments",
    name: "Leith Waterfront Apartments",
    category: "Serviced Apartments",
    status: "Available",
    location: "Leith, Edinburgh",
    value: "£340,000",
    timeline: "Ready now",
    scope:
      "Modern waterfront apartments in Edinburgh's fastest-growing district — strong rates, rising demand and excellent transport links.",
    roi: "9.0% net",
    lat: 55.9758,
    lng: -3.1686,
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "haymarket-executive-suites",
    name: "Haymarket Executive Suites",
    category: "Aparthotel",
    status: "Funding",
    location: "West End, Edinburgh",
    value: "£610,000",
    timeline: "Q4 2026",
    scope:
      "Aparthotel-style suites by Haymarket station — ideal for the mid-week corporate and conference travel market.",
    roi: "8.4% net",
    lat: 55.9456,
    lng: -3.2181,
    image:
      "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "stockbridge-boutique-apartments",
    name: "Stockbridge Boutique Apartments",
    category: "Boutique Suites",
    status: "Coming Soon",
    location: "Stockbridge, Edinburgh",
    value: "£450,000",
    timeline: "2027",
    scope:
      "Characterful apartments in the village-like charm of Stockbridge — a favourite with discerning, longer-staying guests.",
    roi: "7.9% net",
    lat: 55.9586,
    lng: -3.2106,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "quartermile-investment-suites",
    name: "Quartermile Investment Suites",
    category: "Short-Stay Let",
    status: "Coming Soon",
    location: "Southside, Edinburgh",
    value: "£480,000",
    timeline: "2027",
    scope:
      "Contemporary suites beside the University and Old Town — blending student-season and visitor demand for resilient occupancy.",
    roi: "8.3% net",
    lat: 55.9425,
    lng: -3.1936,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Serviced Apartments",
  "Aparthotel",
  "Boutique Suites",
  "Short-Stay Let",
];

/* ------------------------------------------------------------------ */
/* Investment opportunities — card view for the opportunities table    */
/* ------------------------------------------------------------------ */
export type Opportunity = {
  name: string;
  location: string;
  type: string;
  targetRaise: string;
  minInvestment: string;
  projectedRoi: string;
  term: string;
  funded: number;
  status: ProjectStatus;
};

export const opportunities: Opportunity[] = [
  {
    name: "Royal Mile Residences",
    location: "Old Town, Edinburgh",
    type: "Serviced apartment",
    targetRaise: "£395,000",
    minInvestment: "£25,000",
    projectedRoi: "8.6% net p.a.",
    term: "5 years",
    funded: 72,
    status: "Available",
  },
  {
    name: "New Town Collection",
    location: "New Town, Edinburgh",
    type: "Boutique suites",
    targetRaise: "£525,000",
    minInvestment: "£50,000",
    projectedRoi: "8.1% net p.a.",
    term: "5 years",
    funded: 45,
    status: "Funding",
  },
  {
    name: "Haymarket Executive Suites",
    location: "West End, Edinburgh",
    type: "Aparthotel",
    targetRaise: "£610,000",
    minInvestment: "£50,000",
    projectedRoi: "8.4% net p.a.",
    term: "5 years",
    funded: 28,
    status: "Funding",
  },
];

/* ------------------------------------------------------------------ */
/* Why invest with us                                                  */
/* ------------------------------------------------------------------ */
export const whyInvest: ValueProp[] = [
  {
    title: "Edinburgh Specialists",
    description:
      "We focus exclusively on Edinburgh — deep local knowledge of demand, districts and nightly rates.",
    icon: MapPin,
  },
  {
    title: "Carefully Selected",
    description:
      "Only opportunities that clear our location, demand and yield criteria are ever presented.",
    icon: Gem,
  },
  {
    title: "Transparent & Clear",
    description:
      "Full projections, honest assumptions and plain-English documentation on every opportunity.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Net Yields",
    description:
      "Serviced apartments are positioned to outperform traditional buy-to-let on net return.",
    icon: TrendingUp,
  },
  {
    title: "Year-Round Demand",
    description:
      "Tourism, business travel, students and festivals keep occupancy resilient across the calendar.",
    icon: Ticket,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We support you well beyond the first deal, helping you grow a sustainable portfolio.",
    icon: Handshake,
  },
];

/* ------------------------------------------------------------------ */
/* Core values                                                         */
/* ------------------------------------------------------------------ */
export const coreValues: ValueProp[] = [
  {
    title: "Integrity",
    description:
      "Honest, impartial advice. Every recommendation is made in the investor's best interest.",
    icon: ShieldCheck,
  },
  {
    title: "Diligence",
    description:
      "Rigorous research and due diligence sit behind every opportunity we present.",
    icon: FileSearch,
  },
  {
    title: "Clarity",
    description:
      "We make property investment clear, strategic and rewarding — never opaque.",
    icon: Sparkles,
  },
  {
    title: "Partnership",
    description:
      "Aligned, long-term relationships built on transparency and shared success.",
    icon: Handshake,
  },
];

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */
export type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
};

// First names reflect the team contacts; replace with full names/bios when ready.
export const leadership: Leader[] = [
  {
    name: "Charles",
    role: "Founder & Managing Director",
    bio: "Leads sourcing strategy and investor relationships, with a focus on Edinburgh's serviced-accommodation market.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://www.linkedin.com/company/chattels-terrain",
  },
  {
    name: "Shaun",
    role: "Head of Investor Relations",
    bio: "Guides investors through each opportunity with clarity, ensuring every question is answered before they commit.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://www.linkedin.com/company/chattels-terrain",
  },
  {
    name: "Henry",
    role: "Property Sourcing Manager",
    bio: "Identifies and assesses apartments across Edinburgh, validating demand, pricing and yield potential.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://www.linkedin.com/company/chattels-terrain",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Chattels Terrain made serviced-apartment investing genuinely clear. The Edinburgh opportunity they sourced has performed exactly as projected.",
    name: "James Okoro",
    title: "Private Investor, London",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "Their due diligence and transparency are exceptional. I knew exactly what I was investing in — no surprises, just consistent returns.",
    name: "Helena Voss",
    title: "Family Office Principal",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "I started with one apartment and now hold three across Edinburgh. They've supported my portfolio growth every step of the way.",
    name: "Daniel Mensah",
    title: "Portfolio Investor, Toronto",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
  },
];

/* ------------------------------------------------------------------ */
/* Insights / blog                                                     */
/* ------------------------------------------------------------------ */
export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  image: string;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "why-edinburgh-serviced-apartments",
    title: "Why Edinburgh Is the UK's Standout Serviced Apartment Market",
    category: "Edinburgh Market",
    excerpt:
      "Tourism, festivals, students and business travel combine to make Edinburgh uniquely resilient for short-stay investment.",
    date: "2026-05-18",
    readingTime: "7 min",
    author: "Charles",
    image:
      "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "serviced-apartments-vs-buy-to-let",
    title: "Serviced Apartments vs Buy-to-Let: The Yield Case",
    category: "Investment Strategy",
    excerpt:
      "How professionally run serviced accommodation can meaningfully outperform traditional letting on net yield.",
    date: "2026-04-02",
    readingTime: "6 min",
    author: "Shaun",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "edinburgh-festival-demand",
    title: "Understanding Edinburgh's Festival-Driven Demand",
    category: "Edinburgh Market",
    excerpt:
      "What the world's largest arts festival means for peak-season nightly rates and annual occupancy.",
    date: "2026-03-11",
    readingTime: "5 min",
    author: "Henry",
    image:
      "https://images.unsplash.com/photo-1551845041-63e8e76836ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "how-we-source-opportunities",
    title: "How We Source and Package Investment Opportunities",
    category: "Investor Guides",
    excerpt:
      "Inside our six-step process — from market research to investor-ready packaging and portfolio support.",
    date: "2026-02-20",
    readingTime: "6 min",
    author: "Charles",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "first-time-serviced-accommodation-guide",
    title: "A First-Time Investor's Guide to Serviced Accommodation",
    category: "Investor Guides",
    excerpt:
      "The essentials of getting started — yields, occupancy, licensing and what to look for in a property.",
    date: "2026-01-14",
    readingTime: "8 min",
    author: "Shaun",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
  },
];

export const postCategories = [
  "Edinburgh Market",
  "Investment Strategy",
  "Investor Guides",
  "Market Trends",
];

/* ------------------------------------------------------------------ */
/* Credibility — partners, standards, recognition                      */
/* ------------------------------------------------------------------ */
export const certifications = [
  "Edinburgh Market Specialists",
  "Due Diligence Led",
  "AML Compliant",
  "ICO Registered",
  "Transparent Reporting",
  "Investor-First Advisory",
];

export const partners = [
  "Savills",
  "Knight Frank",
  "Rettie & Co.",
  "JLL",
  "ASSC",
  "Lloyds Bank",
];

export const awards = [
  { title: "Boutique Investment Sourcing", year: "Edinburgh" },
  { title: "Serviced Accommodation Focus", year: "Scotland" },
  { title: "Investor-Centred Advisory", year: "2026" },
];
