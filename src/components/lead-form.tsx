"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";

type Variant = "consultation" | "investor";

const fieldClass =
  "h-12 w-full rounded-xl border border-gold-100/70 bg-white px-4 text-sm text-navy outline-none transition-colors placeholder:text-charcoal/40 focus:border-gold dark:border-white/15 dark:bg-navy-950 dark:text-white dark:placeholder:text-light-grey/35";

export function LeadForm({ variant = "consultation" }: { variant?: Variant }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Wire this to your CRM / API route (e.g. /api/lead).
    setTimeout(() => setStatus("done"), 900);
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-gold-100/60 bg-white p-12 text-center dark:border-white/10 dark:bg-navy-950">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-sheen text-navy-900">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-heading text-2xl text-navy dark:text-white">
          Thank you — we&apos;ll be in touch
        </h3>
        <p className="mt-3 max-w-sm text-sm text-charcoal/60 dark:text-light-grey/55">
          A member of our {variant === "investor" ? "investment" : "advisory"}{" "}
          team will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border border-gold-100/60 bg-white p-8 shadow-luxe dark:border-white/10 dark:bg-navy-950 sm:p-10"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={fieldClass} placeholder="First name" required />
        <input className={fieldClass} placeholder="Last name" required />
        <input type="email" className={fieldClass} placeholder="Email address" required />
        <input type="tel" className={fieldClass} placeholder="Phone number" />
      </div>

      {variant === "investor" ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <select className={fieldClass} defaultValue="" required>
            <option value="" disabled>
              Investor type
            </option>
            <option>High-net-worth individual</option>
            <option>Family office</option>
            <option>Institutional</option>
            <option>Diaspora / International</option>
          </select>
          <select className={fieldClass} defaultValue="">
            <option value="" disabled>
              Investment range
            </option>
            <option>£25,000 – £100,000</option>
            <option>£100,000 – £500,000</option>
            <option>£500,000 – £1M</option>
            <option>£1M+</option>
          </select>
        </div>
      ) : (
        <select className={`${fieldClass} mt-4`} defaultValue="">
          <option value="" disabled>
            How can we help?
          </option>
          <option>Schedule a consultation</option>
          <option>Land acquisition</option>
          <option>Property development</option>
          <option>Construction management</option>
          <option>Investment opportunities</option>
          <option>General enquiry</option>
        </select>
      )}

      <textarea
        rows={4}
        placeholder="Tell us a little about your goals…"
        className="mt-4 w-full rounded-xl border border-gold-100/70 bg-white p-4 text-sm text-navy outline-none transition-colors placeholder:text-charcoal/40 focus:border-gold dark:border-white/15 dark:bg-navy-950 dark:text-white dark:placeholder:text-light-grey/35"
      />

      <label className="mt-4 flex items-start gap-3 text-xs text-charcoal/55 dark:text-light-grey/50">
        <input type="checkbox" required className="mt-0.5 accent-gold-500" />
        I consent to Chattels Terrain processing my data in line with the
        Privacy Policy.
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-sheen text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            {variant === "investor" ? "Register interest" : "Send enquiry"}
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
