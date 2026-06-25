"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go]);

  const active = testimonials[index];

  return (
    <section className="bg-light-grey py-24 dark:bg-navy-900 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Investor Success"
          title="Trusted by investors building Edinburgh portfolios"
          description="Real outcomes from the people who have grown their property wealth alongside us."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative rounded-3xl border border-gold-100/60 bg-white p-10 shadow-luxe dark:border-white/10 dark:bg-navy-950 sm:p-14">
            <Quote className="absolute right-10 top-10 h-16 w-16 text-gold-100 dark:text-white/5" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <p className="font-serif text-2xl leading-relaxed text-navy dark:text-light-grey sm:text-[1.7rem]">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <Image
                    src={active.image}
                    alt={active.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-gold/40"
                  />
                  <div>
                    <p className="font-heading text-lg text-navy dark:text-white">
                      {active.name}
                    </p>
                    <p className="text-sm text-charcoal/60 dark:text-light-grey/55">
                      {active.title}
                    </p>
                  </div>
                  <button className="ml-auto hidden items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-300 sm:inline-flex">
                    <PlayCircle className="h-5 w-5" /> Watch story
                  </button>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-100/60 text-navy transition-colors hover:border-gold hover:text-gold-600 dark:border-white/15 dark:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-2 bg-gold-200/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-100/60 text-navy transition-colors hover:border-gold hover:text-gold-600 dark:border-white/15 dark:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
