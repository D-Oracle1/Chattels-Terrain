/** Central site configuration — single source of truth for brand metadata. */
export const siteConfig = {
  name: "Chattels Terrain",
  legalName: "Chattels Terrain Ltd",
  tagline: "Edinburgh Serviced Apartment Investment Specialists",
  description:
    "Chattels Terrain Ltd is an Edinburgh-based property portfolio and investment sourcing company. We help investors identify, package and secure high-yield serviced apartment opportunities in one of the UK's most resilient property markets.",
  url: "https://www.chattelsterrain.com",
  // Replace with the live registration number when available.
  companyNumber: "15482093",
  vatNumber: "GB 438 2910 55",
  email: "info@chattelsterrain.co.uk",
  phone: "0330 043 1069",
  phoneHref: "tel:+443300431069",
  whatsapp: "0330 043 1069",
  whatsappHref: "https://wa.me/443300431069",
  // General contact address.
  emails: [
    { label: "General enquiries", address: "info@chattelsterrain.co.uk" },
  ],
  address: {
    line1: "Edinburgh",
    city: "Edinburgh",
    region: "Scotland",
    postcode: "",
    country: "United Kingdom",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/chattels-terrain",
    instagram: "https://www.instagram.com/chattelsterrain",
    x: "https://x.com/chattelsterrain",
    youtube: "https://www.youtube.com/@chattelsterrain",
  },
  keywords: [
    "Edinburgh Serviced Apartments",
    "Serviced Apartment Investment Edinburgh",
    "Property Investment Edinburgh",
    "Property Sourcing Edinburgh",
    "Serviced Accommodation Investment Scotland",
    "High-Yield Property Investment UK",
    "Investor Advisory Edinburgh",
  ],
};

export type NavItem = { label: string; href: string };

export const navigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Why Edinburgh", href: "/#why-edinburgh" },
  { label: "Opportunities", href: "/projects" },
  { label: "Invest", href: "/investment" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
