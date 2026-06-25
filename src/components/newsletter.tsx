"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Wire to your ESP / CRM endpoint here.
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 text-sm text-gold-300">
        <Check className="h-4 w-4" /> You&apos;re on the list. Welcome.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        aria-label="Email address"
        className="h-11 w-full rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-sheen text-navy-900 transition-transform hover:-translate-y-0.5"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
