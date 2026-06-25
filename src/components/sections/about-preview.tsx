import Image from "next/image";
import { Target, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function AboutPreview() {
  return (
    <section className="overflow-hidden py-24 lg:py-32">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-luxe">
              <Image
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1000&q=80"
                alt="Chattels Terrain development"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-56 rounded-2xl border border-gold-100/60 bg-white p-6 shadow-luxe dark:border-white/10 dark:bg-navy-900 sm:-right-8">
              <p className="font-heading text-4xl text-navy dark:text-white">
                £1.4B+
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/55 dark:text-light-grey/55">
                Development value delivered
              </p>
            </div>
            <div className="absolute -left-6 top-10 hidden rounded-2xl bg-gold-sheen px-6 py-5 text-navy-900 shadow-gold lg:block">
              <p className="font-heading text-3xl">18+</p>
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                Years building
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <span className="eyebrow">
            <span className="gold-rule inline-block" /> About Chattels Terrain
          </span>
          <h2 className="heading-lg mt-4 text-balance text-navy dark:text-white">
            A premium developer building places of lasting value
          </h2>
          <p className="lede mt-6">
            We are a property development, land acquisition, construction and
            investment company delivering exceptional real estate, sustainable
            developments and strategic wealth-building opportunities across the
            United Kingdom and beyond.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-gold-100/60 p-6 dark:border-white/10">
                <Target className="h-7 w-7 text-gold-500" />
                <h3 className="mt-4 font-heading text-lg text-navy dark:text-white">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
                  To transform land into thriving communities and enduring
                  returns through disciplined, sustainable development.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="rounded-2xl border border-gold-100/60 p-6 dark:border-white/10">
                <Eye className="h-7 w-7 text-gold-500" />
                <h3 className="mt-4 font-heading text-lg text-navy dark:text-white">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
                  To be the most trusted name in UK property development and
                  real estate investment.
                </p>
              </div>
            </Reveal>
          </div>

          <Button href="/about" className="mt-10">
            Discover our story <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
