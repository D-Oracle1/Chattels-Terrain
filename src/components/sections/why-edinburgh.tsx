import { edinburghReasons, edinburghMetrics } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";

export function WhyEdinburgh() {
  return (
    <section
      id="why-edinburgh"
      className="scroll-mt-24 bg-light-grey py-24 dark:bg-navy-900 lg:py-32"
    >
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why Edinburgh?"
          title="A capital city built for resilient returns"
          description="Edinburgh blends world-class tourism, a vast student population and a thriving business economy — a rare combination that keeps premium accommodation in constant demand."
        />

        {/* Reasons grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {edinburghReasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i % 3}>
                <div className="group h-full rounded-2xl border border-gold-100/60 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe dark:border-white/10 dark:bg-navy-950">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-sheen text-navy-900 shadow-gold transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg text-navy dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* "Edinburgh attracts" infographic band */}
        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-14 text-white shadow-luxe sm:px-12">
            <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.32em] text-gold-300">
                Edinburgh attracts
              </p>
              <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
                {edinburghMetrics.map((m, i) => {
                  const Icon = m.icon;
                  return (
                    <Reveal key={m.label} delay={i} className="text-center">
                      <Icon className="mx-auto h-7 w-7 text-gold-300" />
                      <p className="mt-4 font-heading text-4xl text-white lg:text-5xl">
                        <AnimatedCounter
                          value={m.value}
                          prefix={m.prefix}
                          suffix={m.suffix}
                        />
                      </p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-light-grey/55">
                        {m.label}
                      </p>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
