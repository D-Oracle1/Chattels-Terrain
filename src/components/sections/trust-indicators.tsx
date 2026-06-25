import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/animated-counter";
import { Reveal } from "@/components/reveal";

export function TrustIndicators() {
  return (
    <section className="relative z-20 -mt-20 pb-8">
      <div className="container-luxe">
        <div className="glass-card grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-gold-100/30 shadow-luxe dark:bg-white/5 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i}
              className="bg-white px-6 py-10 text-center dark:bg-navy-900"
            >
              <p className="font-heading text-4xl text-navy dark:text-white lg:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/60 dark:text-light-grey/55">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
