"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950">
      {/* Video background with graceful poster fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-city-3633/1080p.mp4"
          type="video/mp4"
        />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950"
        aria-hidden
      />
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden />

      <div className="container-luxe relative z-10 pt-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          <span className="gold-rule inline-block" />
          Chattels Terrain Ltd · United Kingdom
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="heading-xl mt-6 max-w-4xl text-balance text-white"
        >
          Transforming Land Into{" "}
          <span className="bg-gold-sheen bg-clip-text text-transparent">
            Legacy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-light-grey/80"
        >
          Premium property development, strategic land acquisition, construction
          excellence and investment opportunities across the United Kingdom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/projects" variant="gold" size="lg">
            Explore Projects <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="border border-white/30 bg-white/5 text-white backdrop-blur hover:border-gold hover:text-gold-300"
          >
            <PlayCircle className="h-5 w-5" /> Schedule Consultation
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-light-grey/60"
        >
          <span className="text-xs uppercase tracking-[0.28em] text-light-grey/45">
            Trusted by
          </span>
          {["Knight Frank", "Savills", "Arup", "Mace", "Lloyds Bank"].map(
            (p) => (
              <span key={p} className="font-heading text-base text-light-grey/75">
                {p}
              </span>
            ),
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-gold-300" />
      </motion.div>
    </section>
  );
}
