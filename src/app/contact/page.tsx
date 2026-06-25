import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a consultation with Chattels Terrain. Contact our London team by phone, email or WhatsApp for property, development and investment enquiries.",
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
      icon: Mail,
      label: "Email us",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
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
        title="Let's build something exceptional together"
        description="Schedule a private consultation or send us an enquiry — our team responds within one business day."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
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
              Whether you are an investor, landowner, partner or client, we would
              be delighted to discuss how Chattels Terrain can help.
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

            <div className="mt-6 space-y-3 rounded-2xl border border-gold-100/60 bg-light-grey p-6 text-sm dark:border-white/10 dark:bg-navy-900">
              <p className="flex items-start gap-3 text-charcoal/70 dark:text-light-grey/65">
                <MapPin className="mt-0.5 h-5 w-5 text-gold-500" />
                {siteConfig.address.line1}, {siteConfig.address.city}{" "}
                {siteConfig.address.postcode}, {siteConfig.address.country}
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
              title="Chattels Terrain office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1525%2C51.5070%2C-0.1380%2C51.5130&layer=mapnik&marker=51.5100%2C-0.1452"
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
