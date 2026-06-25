import type { Metadata } from "next";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Credibility } from "@/components/sections/credibility";
import { CTA } from "@/components/sections/cta";
import { coreValues, leadership, stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/animated-counter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the mission, vision, values and leadership behind Chattels Terrain Ltd — a premium UK property development and investment company.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Chattels Terrain"
        title="Building places of lasting value and enduring returns"
        description="For nearly two decades we have transformed land into thriving communities and dependable investments across the United Kingdom."
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-luxe">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Chattels Terrain"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <span className="eyebrow">
              <span className="gold-rule inline-block" /> Our Story
            </span>
            <h2 className="heading-lg mt-4 text-navy dark:text-white">
              Why Chattels Terrain
            </h2>
            <div className="lede mt-6 space-y-5">
              <p>
                Founded on a simple conviction — that land, developed with
                discipline and care, is the most reliable engine of long-term
                wealth — Chattels Terrain has grown into one of the UK&apos;s most
                trusted independent developers.
              </p>
              <p>
                We combine institutional rigour with a genuine partnership
                ethos. Every project is underwritten conservatively, delivered
                to the highest standard and reported with complete transparency.
                The result is a portfolio our investors trust through every phase
                of the property cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision band */}
      <section className="bg-navy-950 py-20 text-white">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
              <span className="eyebrow">Mission</span>
              <p className="mt-4 font-serif text-2xl leading-relaxed text-light-grey">
                To transform land into thriving communities and enduring returns
                through disciplined, sustainable development.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
              <span className="eyebrow">Vision</span>
              <p className="mt-4 font-serif text-2xl leading-relaxed text-light-grey">
                To be the most trusted name in UK property development and real
                estate investment — admired for integrity, excellence and impact.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container-luxe grid grid-cols-2 gap-8 text-center lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <p className="font-heading text-4xl text-navy dark:text-white">
                <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/55 dark:text-light-grey/55">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="bg-light-grey py-24 dark:bg-navy-900 lg:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles behind every decision"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i}>
                  <div className="h-full rounded-2xl border border-gold-100/60 bg-white p-8 dark:border-white/10 dark:bg-navy-950">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-sheen text-navy-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg text-navy dark:text-white">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Leadership Excellence"
            title="Meet the team transforming land into legacy"
            description="Decades of combined experience across development, investment, construction and sustainability."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader, i) => (
              <Reveal key={leader.name} delay={i}>
                <div className="group overflow-hidden rounded-2xl border border-gold-100/60 bg-white dark:border-white/10 dark:bg-navy-950">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width:768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${leader.name} on LinkedIn`}
                      className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg text-navy dark:text-white">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold text-gold-600 dark:text-gold-300">
                      {leader.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Credibility />
      <CTA title="Partner with a developer you can trust" />
    </>
  );
}
