import { whyInvest } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function WhyInvest() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white lg:py-32">
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
      <div
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Why Invest With Us"
          title="A partner engineered for confidence and returns"
          description="Six reasons sophisticated investors choose Chattels Terrain to compound capital responsibly."
          light
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyInvest.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i % 3}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06]">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-sheen text-navy-900 shadow-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-heading text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-light-grey/65">
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
