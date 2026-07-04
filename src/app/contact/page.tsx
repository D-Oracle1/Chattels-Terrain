import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with Chattels Terrain about Edinburgh serviced apartment investment opportunities. Contact our team by phone, email or WhatsApp.",
};

export default function ContactPage() {
  const cards = [
    {
      icon: Phone,
      label: "Call us",
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: siteConfig.whatsapp,
      href: siteConfig.whatsappHref,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's discuss your investment goals"
        description="Schedule a private consultation or send us an enquiry — our team responds within one business day."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 lg:py-28">
        <div className="container-luxe grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div>
            <span className="eyebrow">
              <span className="gold-rule inline-block" /> Contact
            </span>
            <h2 className="heading-lg mt-4 text-navy dark:text-white">
              Speak with our team
            </h2>
            <p className="lede mt-5">
              Whether you are an experienced investor or exploring serviced
              apartments for the first time, we would be delighted to help.
            </p>

            <div className="mt-10 space-y-4">
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.label === "WhatsApp" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-gold-100/60 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-luxe dark:border-white/10 dark:bg-navy-950"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-sheen text-navy-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-charcoal/50 dark:text-light-grey/45">
                        {c.label}
                      </p>
                      <p className="font-heading text-lg text-navy dark:text-white">
                        {c.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Email the team */}
            <div className="mt-6 rounded-2xl border border-gold-100/60 bg-white p-6 dark:border-white/10 dark:bg-navy-950">
              <p className="text-xs uppercase tracking-[0.16em] text-charcoal/50 dark:text-light-grey/45">
                Email the team
              </p>
              <ul className="mt-4 space-y-3">
                {siteConfig.emails.map((e) => (
                  <li key={e.address} className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-gold-500" />
                    <a
                      href={`mailto:${e.address}`}
                      className="text-sm text-charcoal/75 transition-colors hover:text-gold-600 dark:text-light-grey/70 dark:hover:text-gold-300"
                    >
                      <span className="font-semibold text-navy dark:text-white">
                        {e.label}:
                      </span>{" "}
                      {e.address}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-gold-100/60 bg-light-grey p-6 text-sm dark:border-white/10 dark:bg-navy-900">
              <p className="flex items-start gap-3 text-charcoal/70 dark:text-light-grey/65">
                <MapPin className="mt-0.5 h-5 w-5 text-gold-500" />
                {siteConfig.address.city}, {siteConfig.address.region},{" "}
                {siteConfig.address.country}
              </p>
              <p className="flex items-center gap-3 text-charcoal/70 dark:text-light-grey/65">
                <Clock className="h-5 w-5 text-gold-500" />
                Mon–Fri, 9:00–18:00 GMT
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <LeadForm variant="consultation" />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container-luxe">
          <div className="overflow-hidden rounded-3xl border border-gold-100/60 shadow-luxe dark:border-white/10">
            <iframe
              title="Chattels Terrain — Edinburgh"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-3.2200%2C55.9400%2C-3.1500%2C55.9650&layer=mapnik&marker=55.9533%2C-3.1883"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
