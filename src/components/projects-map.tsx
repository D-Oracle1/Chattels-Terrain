"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Lightweight interactive map. Edinburgh lat/lng are projected onto a stylised
 * panel — no external tile dependency, so it stays fast and offline-safe.
 */
const BOUNDS = { minLat: 55.93, maxLat: 55.99, minLng: -3.25, maxLng: -3.12 };

function project(p: Project) {
  const x = ((p.lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * 100;
  const y = ((BOUNDS.maxLat - p.lat) / (BOUNDS.maxLat - BOUNDS.minLat)) * 100;
  return { x: Math.min(92, Math.max(8, x)), y: Math.min(92, Math.max(8, y)) };
}

const statusColor: Record<Project["status"], string> = {
  Available: "bg-emerald-400",
  Funding: "bg-gold-400",
  "Coming Soon": "bg-sky-400",
};

export function ProjectsMap() {
  const [active, setActive] = useState<Project>(projects[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-navy-950 sm:aspect-[5/4]">
        <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-900/40 to-navy-950"
          aria-hidden
        />

        {projects.map((p) => {
          const pos = project(p);
          const isActive = p.slug === active.slug;
          return (
            <button
              key={p.slug}
              onClick={() => setActive(p)}
              aria-label={p.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <span className="relative flex">
                <span
                  className={cn(
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
                    statusColor[p.status],
                  )}
                />
                <span
                  className={cn(
                    "relative inline-flex items-center justify-center rounded-full text-navy-950 transition-all",
                    statusColor[p.status],
                    isActive ? "h-8 w-8 ring-4 ring-white/30" : "h-5 w-5",
                  )}
                >
                  {isActive && <MapPin className="h-4 w-4" />}
                </span>
              </span>
            </button>
          );
        })}

        <div className="absolute bottom-4 left-4 flex gap-4 rounded-full bg-navy-950/80 px-4 py-2 text-xs text-light-grey/70 backdrop-blur">
          {(["Available", "Funding", "Coming Soon"] as const).map((s) => (
            <span key={s} className="flex items-center gap-1.5">
              <span className={cn("h-2.5 w-2.5 rounded-full", statusColor[s])} />
              {s}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        key={active.slug}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col justify-center rounded-3xl border border-gold-100/60 bg-white p-8 dark:border-white/10 dark:bg-navy-950"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-300">
          {active.category} · {active.status}
        </span>
        <h3 className="mt-3 font-heading text-3xl text-navy dark:text-white">
          {active.name}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-charcoal/60 dark:text-light-grey/55">
          <MapPin className="h-4 w-4 text-gold-500" /> {active.location}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/70 dark:text-light-grey/65">
          {active.scope}
        </p>
        <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-gold-100/50 pt-6 dark:border-white/10">
          <div>
            <dt className="text-xs text-charcoal/50 dark:text-light-grey/45">Price</dt>
            <dd className="font-heading text-lg text-navy dark:text-white">
              {active.value}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-charcoal/50 dark:text-light-grey/45">Net yield</dt>
            <dd className="font-heading text-lg text-navy dark:text-white">
              {active.roi}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-charcoal/50 dark:text-light-grey/45">Available</dt>
            <dd className="font-heading text-lg text-navy dark:text-white">
              {active.timeline}
            </dd>
          </div>
        </dl>
      </motion.div>
    </div>
  );
}
