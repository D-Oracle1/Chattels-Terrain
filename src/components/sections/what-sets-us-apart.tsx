import { differentiators } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function WhatSetsUsApart() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
      <div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="What Sets Us Apart"
          title="A boutique partner, built around the investor"
          description="Four principles that make Chattels Terrain different from a traditional property agency."
          light
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06]">
                  <span
                    className="absolute -right-2 -top-3 font-heading text-7xl text-white/[0.04]"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-sheen text-navy-900 shadow-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mt-6 font-heading text-xl">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-light-grey/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
