import { Check } from "lucide-react";
import { trustBadges } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function TrustBadges() {
  return (
    <section className="border-y border-gold-100/50 bg-white py-14 dark:border-white/10 dark:bg-navy-900">
      <div className="container-luxe">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/45 dark:text-light-grey/45">
            Why investors trust Chattels Terrain
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {trustBadges.map((badge, i) => (
            <Reveal key={badge} delay={i}>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-100/70 bg-light-grey px-5 py-2.5 text-sm font-semibold text-navy shadow-sm dark:border-white/10 dark:bg-navy-950 dark:text-white">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-sheen text-navy-900">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {badge}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
