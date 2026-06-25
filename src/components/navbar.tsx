"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/site";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-xl py-3"
          : "bg-transparent py-5",
      )}
    >
      <nav className="container-luxe flex items-center justify-between">
        <Logo light={!scrolled || true} />

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-underline text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white",
                  active && "text-gold-300 after:w-full",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="text-white">
            <ThemeToggle />
          </div>
          <Button
            href="/contact"
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Schedule Consultation
          </Button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-luxe mt-4 flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-950/95 p-4 backdrop-blur-xl">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-gold-300",
                    pathname === item.href && "text-gold-300",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" variant="gold" size="md" className="mt-2">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
