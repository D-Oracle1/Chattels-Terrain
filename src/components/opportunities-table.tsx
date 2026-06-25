import { ArrowRight, Download } from "lucide-react";
import { opportunities } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function OpportunitiesTable() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {opportunities.map((o, i) => (
        <Reveal key={o.name} delay={i}>
          <div className="flex h-full flex-col rounded-3xl border border-gold-100/60 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe dark:border-white/10 dark:bg-navy-950">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gold-100/50 px-3 py-1 text-xs font-semibold text-gold-600 dark:bg-white/10 dark:text-gold-300">
                {o.status}
              </span>
              <span className="font-heading text-2xl text-gold-500">
                {o.projectedRoi}
              </span>
            </div>
            <h3 className="mt-5 font-heading text-xl text-navy dark:text-white">
              {o.name}
            </h3>
            <p className="mt-1 text-sm text-charcoal/60 dark:text-light-grey/55">
              {o.location} · {o.type}
            </p>

            <dl className="mt-6 space-y-3 border-t border-gold-100/50 pt-6 text-sm dark:border-white/10">
              <Row label="Target raise" value={o.targetRaise} />
              <Row label="Minimum investment" value={o.minInvestment} />
              <Row label="Term" value={o.term} />
            </dl>

            <div className="mt-6">
              <div className="flex items-center justify-between text-xs text-charcoal/55 dark:text-light-grey/50">
                <span>{o.funded}% funded</span>
                <span>{100 - o.funded}% remaining</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gold-100/60 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-gold-sheen"
                  style={{ width: `${o.funded}%` }}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <Button href="/contact" variant="gold" size="sm">
                Register interest <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="ghost" size="sm">
                <Download className="h-4 w-4" /> Download brochure
              </Button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-charcoal/55 dark:text-light-grey/50">{label}</dt>
      <dd className="font-semibold text-navy dark:text-white">{value}</dd>
    </div>
  );
}
