import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function ServicesGrid({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="services" className="bg-light-grey py-24 dark:bg-navy-900 lg:py-32">
      <div className="container-luxe">
        {withHeading && (
          <SectionHeading
            eyebrow="What We Do"
            title="Integrated expertise across the property lifecycle"
            description="From the first acre to the final handover and beyond, we deliver every discipline under one trusted roof."
          />
        )}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={i % 3} as="div">
                <article
                  id={service.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-100/50 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe dark:border-white/10 dark:bg-navy-950"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-sheen text-navy-900 shadow-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-heading text-xl text-navy dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
                      {service.summary}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-charcoal/75 dark:text-light-grey/70"
                        >
                          <Check className="h-4 w-4 text-gold-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 dark:text-gold-300"
                    >
                      Enquire
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
