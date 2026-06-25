import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Chattels Terrain — home"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-md bg-gold-sheen text-navy-900 shadow-gold">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M3 20L12 4l9 16H3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M8 20l4-7 4 7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg tracking-wide",
            light ? "text-white" : "text-navy dark:text-white",
          )}
        >
          Chattels Terrain
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-500 dark:text-gold-300">
          Land · Build · Invest
        </span>
      </span>
    </Link>
  );
}
