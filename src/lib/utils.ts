import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Compose conditional class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as GBP currency with sensible defaults. */
export function formatGBP(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits,
  }).format(value);
}
