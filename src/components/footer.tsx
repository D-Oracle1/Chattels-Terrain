import Link from "next/link";
import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { siteConfig, navigation } from "@/lib/site";

const investorResources = [
  { label: "Investment Opportunities", href: "/projects" },
  { label: "How We Work", href: "/services" },
  { label: "Register as an Investor", href: "/investment#register" },
  { label: "Schedule a Consultation", href: "/contact" },
  { label: "Insights & Resources", href: "/insights" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-light-grey">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="container-luxe relative">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Company Overview */}
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-light-grey/65">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            {navigation.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Investor Resources */}
          <FooterColumn title="Investor Resources">
            {investorResources.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading text-lg text-white">Contact Information</h4>
            <ul className="mt-5 space-y-3 text-sm text-light-grey/70">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-300" />
                <a href={siteConfig.phoneHref} className="hover:text-gold-300">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-300" />
                <a
                  href={siteConfig.phoneSecondaryHref}
                  className="hover:text-gold-300"
                >
                  {siteConfig.phoneSecondary}
                </a>
              </li>
              {siteConfig.emails.map((e) => (
                <li key={e.address} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-gold-300" />
                  <a
                    href={`mailto:${e.address}`}
                    className="break-all hover:text-gold-300"
                  >
                    {e.address}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3 pt-1">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
                <span>
                  {siteConfig.address.city}, {siteConfig.address.region},{" "}
                  {siteConfig.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-8 text-xs text-light-grey/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. An
            Edinburgh-based property portfolio and investment sourcing company.
            Company No. {siteConfig.companyNumber}.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-gold-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-300">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-gold-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-heading text-lg text-white">{title}</h4>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-light-grey/65 transition-colors hover:text-gold-300"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-light-grey/70 transition-all hover:border-gold hover:text-gold-300"
    >
      {children}
    </a>
  );
}
