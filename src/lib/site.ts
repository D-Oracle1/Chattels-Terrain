/** Central site configuration — single source of truth for brand metadata. */
export const siteConfig = {
  name: "Chattels Terrain",
  legalName: "Chattels Terrain Ltd",
  tagline: "Transforming Land Into Legacy",
  description:
    "Chattels Terrain Ltd delivers premium property development, strategic land acquisition, construction excellence and investment opportunities across the United Kingdom.",
  url: "https://www.chattelsterrain.com",
  // Replace with the live registration number when available.
  companyNumber: "15482093",
  vatNumber: "GB 438 2910 55",
  email: "invest@chattelsterrain.com",
  phone: "+44 20 4525 8800",
  phoneHref: "tel:+442045258800",
  whatsapp: "+44 7700 900123",
  whatsappHref: "https://wa.me/447700900123",
  address: {
    line1: "12 Berkeley Square, Mayfair",
    city: "London",
    postcode: "W1J 6BS",
    country: "United Kingdom",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/chattels-terrain",
    instagram: "https://www.instagram.com/chattelsterrain",
    x: "https://x.com/chattelsterrain",
    youtube: "https://www.youtube.com/@chattelsterrain",
  },
  keywords: [
    "Property Development UK",
    "Land Acquisition UK",
    "Real Estate Investment UK",
    "Construction Company UK",
    "Property Consultancy UK",
    "Infrastructure Development UK",
  ],
};

export type NavItem = { label: string; href: string };

export const navigation: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Investment", href: "/investment" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
