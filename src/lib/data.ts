import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  Building2,
  HardHat,
  TrendingUp,
  LineChart,
  Route,
  ShieldCheck,
  MapPin,
  Handshake,
  Leaf,
  Award,
  Gem,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Trust indicators                                                    */
/* ------------------------------------------------------------------ */
export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export const stats: Stat[] = [
  { label: "Years of Experience", value: 18, suffix: "+" },
  { label: "Projects Delivered", value: 240, suffix: "+" },
  { label: "Acres Developed", value: 1850, suffix: "" },
  { label: "Investors Served", value: 3200, suffix: "+" },
  { label: "Development Value", value: 1.4, prefix: "£", suffix: "B+" },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
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
    slug: "land-acquisition",
    title: "Land Acquisition",
    icon: Landmark,
    summary:
      "Strategic sourcing of high-potential land assets backed by rigorous due diligence and expert negotiation.",
    features: [
      "Land sourcing",
      "Land valuation",
      "Due diligence",
      "Negotiation support",
    ],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "property-development",
    title: "Property Development",
    icon: Building2,
    summary:
      "End-to-end residential, commercial and mixed-use developments engineered for enduring value.",
    features: [
      "Residential developments",
      "Commercial developments",
      "Mixed-use developments",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "construction-management",
    title: "Construction Management",
    icon: HardHat,
    summary:
      "Precision delivery from groundworks to handover, with uncompromising quality and programme control.",
    features: ["Project planning", "Building execution", "Quality assurance"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "real-estate-investment",
    title: "Real Estate Investment",
    icon: TrendingUp,
    summary:
      "Curated investment opportunities and managed portfolios designed to build and protect wealth.",
    features: [
      "Investment opportunities",
      "Portfolio management",
      "Joint ventures",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "property-consultancy",
    title: "Property Consultancy",
    icon: LineChart,
    summary:
      "Data-led advisory across market analysis, feasibility and strategy to de-risk every decision.",
    features: ["Market analysis", "Feasibility studies", "Advisory services"],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    icon: Route,
    summary:
      "Resilient roads, utilities and community infrastructure that unlock long-term regional growth.",
    features: ["Roads", "Utilities", "Community projects"],
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */
export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Infrastructure"
  | "Mixed-use";

export type ProjectStatus = "Completed" | "In Progress" | "Upcoming";

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
    slug: "terrain-quarter-manchester",
    name: "Terrain Quarter",
    category: "Mixed-use",
    status: "In Progress",
    location: "Manchester",
    value: "£185M",
    timeline: "2024 – 2027",
    scope: "420 homes, 90,000 sq ft of retail and a landscaped public realm.",
    roi: "12.4%",
    lat: 53.4808,
    lng: -2.2426,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "the-meridian-london",
    name: "The Meridian",
    category: "Commercial",
    status: "Completed",
    location: "London, Canary Wharf",
    value: "£260M",
    timeline: "2020 – 2023",
    scope: "Grade-A office tower with 310,000 sq ft of BREEAM Outstanding space.",
    roi: "10.1%",
    lat: 51.5054,
    lng: -0.0235,
    image:
      "https://images.unsplash.com/photo-1554435493-93422e8d1c46?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "harbour-gardens-bristol",
    name: "Harbour Gardens",
    category: "Residential",
    status: "Completed",
    location: "Bristol",
    value: "£96M",
    timeline: "2021 – 2024",
    scope: "286 waterfront residences with 35% affordable housing provision.",
    roi: "11.8%",
    lat: 51.4495,
    lng: -2.5879,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "northgate-logistics-leeds",
    name: "Northgate Logistics Park",
    category: "Industrial",
    status: "In Progress",
    location: "Leeds",
    value: "£74M",
    timeline: "2023 – 2026",
    scope: "640,000 sq ft of carbon-neutral distribution and light industrial units.",
    roi: "13.6%",
    lat: 53.8008,
    lng: -1.5491,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "a52-corridor-nottingham",
    name: "A52 Growth Corridor",
    category: "Infrastructure",
    status: "Upcoming",
    location: "Nottingham",
    value: "£128M",
    timeline: "2025 – 2029",
    scope: "Highway upgrades, utilities and serviced plots unlocking 1,200 homes.",
    roi: "9.7%",
    lat: 52.9548,
    lng: -1.1581,
    image:
      "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1473445730015-841f29a9490b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "kingsmere-village-oxford",
    name: "Kingsmere Village",
    category: "Mixed-use",
    status: "Upcoming",
    location: "Oxford",
    value: "£210M",
    timeline: "2025 – 2030",
    scope: "A sustainable garden village of 760 homes, schools and green corridors.",
    roi: "12.9%",
    lat: 51.752,
    lng: -1.2577,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
  "Mixed-use",
];

/* ------------------------------------------------------------------ */
/* Investment opportunities                                            */
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
    name: "Terrain Quarter — Phase II",
    location: "Manchester",
    type: "Mixed-use development",
    targetRaise: "£24M",
    minInvestment: "£25,000",
    projectedRoi: "12.4% p.a.",
    term: "36 months",
    funded: 68,
    status: "In Progress",
  },
  {
    name: "Northgate Logistics Park",
    location: "Leeds",
    type: "Industrial / Logistics",
    targetRaise: "£18M",
    minInvestment: "£50,000",
    projectedRoi: "13.6% p.a.",
    term: "30 months",
    funded: 41,
    status: "In Progress",
  },
  {
    name: "Kingsmere Village",
    location: "Oxford",
    type: "Garden village",
    targetRaise: "£40M",
    minInvestment: "£100,000",
    projectedRoi: "12.9% p.a.",
    term: "48 months",
    funded: 22,
    status: "Upcoming",
  },
];

/* ------------------------------------------------------------------ */
/* Why invest                                                          */
/* ------------------------------------------------------------------ */
export type ValueProp = { title: string; description: string; icon: LucideIcon };

export const whyInvest: ValueProp[] = [
  {
    title: "Proven Expertise",
    description:
      "Eighteen years and £1.4B+ of delivered value across every major UK asset class.",
    icon: Award,
  },
  {
    title: "Strategic Locations",
    description:
      "Sites selected on infrastructure, demographics and growth fundamentals — not hype.",
    icon: MapPin,
  },
  {
    title: "Transparent Processes",
    description:
      "Institutional-grade reporting, independent valuations and clear, audited governance.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Returns",
    description:
      "Disciplined underwriting targeting double-digit returns with capital preservation first.",
    icon: TrendingUp,
  },
  {
    title: "Sustainable Developments",
    description:
      "BREEAM and net-zero design embedded from masterplan to handover.",
    icon: Leaf,
  },
  {
    title: "Long-term Partnerships",
    description:
      "We co-invest alongside our partners and stay aligned for the full lifecycle.",
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
      "We do what we say. Every commitment is documented, transparent and honoured.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "Relentless craft from masterplanning to the final brick — no detail is too small.",
    icon: Gem,
  },
  {
    title: "Stewardship",
    description:
      "We build places and protect capital for generations, not quarters.",
    icon: Leaf,
  },
  {
    title: "Partnership",
    description:
      "Aligned interests and shared success with investors, landowners and communities.",
    icon: Handshake,
  },
];

/* ------------------------------------------------------------------ */
/* Leadership team                                                     */
/* ------------------------------------------------------------------ */
export type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
};

export const leadership: Leader[] = [
  {
    name: "Adrian Whitcombe",
    role: "Chief Executive Officer",
    bio: "Two decades leading £1B+ regeneration schemes across the UK and the Gulf.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://www.linkedin.com/company/chattels-terrain",
  },
  {
    name: "Priya Nair",
    role: "Chief Investment Officer",
    bio: "Former institutional fund director overseeing multi-asset real estate portfolios.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://www.linkedin.com/company/chattels-terrain",
  },
  {
    name: "Marcus Bello",
    role: "Director of Development",
    bio: "Chartered surveyor delivering award-winning mixed-use and residential schemes.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://www.linkedin.com/company/chattels-terrain",
  },
  {
    name: "Sofia Almeida",
    role: "Head of Sustainability",
    bio: "Net-zero strategist embedding ESG performance across the development lifecycle.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
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
      "Chattels Terrain combine institutional rigour with genuine partnership. Our capital has compounded reliably across three projects.",
    name: "James Okoro",
    title: "Private Investor, London",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "The transparency is exceptional. Quarterly reporting is the clearest I have seen in fifteen years of property investing.",
    name: "Helena Voss",
    title: "Family Office Principal",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "They unlocked value from a complex brownfield site others walked away from. A serious, dependable development partner.",
    name: "Daniel Mensah",
    title: "Diaspora Investor, Toronto",
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
    slug: "uk-land-investment-outlook-2026",
    title: "The UK Land Investment Outlook for 2026",
    category: "Property Investment",
    excerpt:
      "Where strategic land value is migrating as infrastructure spending and planning reform reshape the market.",
    date: "2026-05-18",
    readingTime: "8 min",
    author: "Priya Nair",
    image:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "brownfield-to-legacy",
    title: "From Brownfield to Legacy: The Regeneration Playbook",
    category: "Land Development",
    excerpt:
      "How disciplined remediation and masterplanning turn overlooked sites into thriving communities.",
    date: "2026-04-02",
    readingTime: "6 min",
    author: "Marcus Bello",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "net-zero-pays",
    title: "Why Net-Zero Development Pays",
    category: "Construction Insights",
    excerpt:
      "The commercial case for sustainable construction — from valuations to occupier demand.",
    date: "2026-03-11",
    readingTime: "5 min",
    author: "Sofia Almeida",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "reading-the-yield-curve",
    title: "Reading the Yield Curve: Timing Property Cycles",
    category: "Market Trends",
    excerpt:
      "A practical framework for positioning capital across the phases of the property cycle.",
    date: "2026-02-20",
    readingTime: "7 min",
    author: "Priya Nair",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "diaspora-investment-guide",
    title: "A Diaspora Investor's Guide to UK Real Estate",
    category: "Industry News",
    excerpt:
      "Structuring, currency and governance considerations for international investors entering the UK.",
    date: "2026-01-14",
    readingTime: "9 min",
    author: "Adrian Whitcombe",
    image:
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1200&q=80",
  },
];

export const postCategories = [
  "Property Investment",
  "Land Development",
  "Market Trends",
  "Construction Insights",
  "Industry News",
];

/* ------------------------------------------------------------------ */
/* Credibility — partners, certifications, awards                      */
/* ------------------------------------------------------------------ */
export const certifications = [
  "RICS Regulated",
  "ISO 9001 Quality",
  "ISO 14001 Environment",
  "BREEAM Accredited",
  "Considerate Constructors",
  "FCA-aligned Investments",
];

export const partners = [
  "Knight Frank",
  "Savills",
  "Arup",
  "Mace",
  "Turner & Townsend",
  "Lloyds Bank",
];

export const awards = [
  { title: "UK Developer of the Year", year: "2025" },
  { title: "Sustainable Scheme of the Year", year: "2024" },
  { title: "Regeneration Project of the Year", year: "2023" },
];
