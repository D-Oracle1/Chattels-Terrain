import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  Completed: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300",
  "In Progress": "bg-gold-200/40 text-gold-600 dark:text-gold-300",
  Upcoming: "bg-navy-100/60 text-navy-700 dark:bg-white/10 dark:text-light-grey",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-100/50 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe dark:border-white/10 dark:bg-navy-950"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              {project.category}
            </span>
            <h3 className="font-heading text-2xl text-white">{project.name}</h3>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-gold group-hover:text-navy-900">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
        <span
          className={cn(
            "absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur",
            statusStyles[project.status],
          )}
        >
          {project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-sm text-charcoal/65 dark:text-light-grey/60">
          <MapPin className="h-4 w-4 text-gold-500" /> {project.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/70 dark:text-light-grey/65">
          {project.scope}
        </p>
        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-gold-100/50 pt-5 dark:border-white/10">
          <Stat label="Value" value={project.value} />
          <Stat label="Target ROI" value={project.roi} />
          <Stat label="Timeline" value={project.timeline.split(" – ")[1] ?? project.timeline} />
        </dl>
      </div>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal/45 dark:text-light-grey/45">
        {label}
      </dt>
      <dd className="mt-1 font-heading text-base text-navy dark:text-white">
        {value}
      </dd>
    </div>
  );
}
