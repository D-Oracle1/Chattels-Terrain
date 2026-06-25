import { BadgeCheck, Award, Building } from "lucide-react";
import { certifications, partners, awards } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function Credibility() {
  return (
    <section className="border-y border-gold-100/50 bg-white py-16 dark:border-white/10 dark:bg-navy-900">
      <div className="container-luxe">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/45 dark:text-light-grey/45">
            Accredited, regulated and recognised
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((p) => (
            <span
              key={p}
              className="font-heading text-xl text-navy/40 transition-colors hover:text-navy dark:text-white/35 dark:hover:text-white"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-gold-100/50 pt-12 dark:border-white/10 md:grid-cols-3">
          <Reveal>
            <div className="flex items-start gap-4">
              <BadgeCheck className="h-8 w-8 shrink-0 text-gold-500" />
              <div>
                <h3 className="font-heading text-lg text-navy dark:text-white">
                  Certifications
                </h3>
                <p className="mt-2 text-sm text-charcoal/60 dark:text-light-grey/55">
                  {certifications.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 shrink-0 text-gold-500" />
              <div>
                <h3 className="font-heading text-lg text-navy dark:text-white">
                  Recent Awards
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-charcoal/60 dark:text-light-grey/55">
                  {awards.map((a) => (
                    <li key={a.title}>
                      {a.title} — {a.year}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex items-start gap-4">
              <Building className="h-8 w-8 shrink-0 text-gold-500" />
              <div>
                <h3 className="font-heading text-lg text-navy dark:text-white">
                  Registered Company
                </h3>
                <p className="mt-2 text-sm text-charcoal/60 dark:text-light-grey/55">
                  {siteConfig.legalName}, registered in England &amp; Wales No.{" "}
                  {siteConfig.companyNumber}. RICS regulated. Member of the UK
                  Green Building Council.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
