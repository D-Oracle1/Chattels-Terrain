"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

const filters = ["All", ...projectCategories] as const;

export function ProjectsShowcase({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = (
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active)
  ).slice(0, limit);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all",
              active === f
                ? "border-gold bg-gold-sheen text-navy-900"
                : "border-gold-100/60 text-charcoal/70 hover:border-gold dark:border-white/15 dark:text-light-grey/70",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
