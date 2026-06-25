import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Land acquisition, property development, construction management, real estate investment, consultancy and infrastructure development across the UK.",
};

const process = [
  {
    step: "01",
    title: "Discover & Source",
    description:
      "We identify and secure high-potential land and assets aligned to your objectives.",
  },
  {
    step: "02",
    title: "Appraise & Plan",
    description:
      "Rigorous due diligence, feasibility and masterplanning de-risk every scheme.",
  },
  {
    step: "03",
    title: "Build & Deliver",
    description:
      "Precision construction management keeps quality, cost and programme on track.",
  },
  {
    step: "04",
    title: "Invest & Grow",
    description:
      "Transparent investment structures and asset management compound your returns.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Integrated expertise across the property lifecycle"
        description="Six core disciplines, delivered under one trusted roof — from the first acre to the final handover and beyond."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      />

      <ServicesGrid withHeading={false} />

      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="How We Work"
            title="A disciplined, end-to-end process"
            description="A proven methodology that protects capital and maximises value at every stage."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i}>
                <div className="relative h-full rounded-2xl border border-gold-100/60 bg-white p-8 dark:border-white/10 dark:bg-navy-950">
                  <span className="font-heading text-5xl text-gold-200 dark:text-white/10">
                    {p.step}
                  </span>
                  <h3 className="mt-4 font-heading text-xl text-navy dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Tell us about your project or land" />
    </>
  );
}
