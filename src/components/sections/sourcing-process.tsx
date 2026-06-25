import { sourcingProcess } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function SourcingProcess({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-luxe">
        {withHeading && (
          <SectionHeading
            eyebrow="How We Work"
            title="Our property sourcing process"
            description="A clear, six-step methodology that turns Edinburgh market intelligence into investor-ready opportunities."
          />
        )}

        <div className="relative mt-16">
          {/* Connecting line on large screens */}
          <div
            className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
            aria-hidden
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {sourcingProcess.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} delay={i % 3} as="li">
                  <div className="relative flex h-full flex-col">
                    <div className="relative z-10 mx-auto inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-gold-100/70 bg-white shadow-luxe dark:border-white/10 dark:bg-navy-950">
                      <Icon className="h-7 w-7 text-gold-500" />
                      <span className="absolute -right-1 -top-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-sheen text-xs font-bold text-navy-900 shadow-gold">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-6 text-center font-heading text-lg text-navy dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-center text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
