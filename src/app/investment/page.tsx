import type { Metadata } from "next";
import { Download, ShieldCheck, FileText, PieChart } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { OpportunitiesTable } from "@/components/opportunities-table";
import { InvestmentCalculator } from "@/components/investment-calculator";
import { LeadForm } from "@/components/lead-form";
import { WhyInvest } from "@/components/sections/why-invest";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Investment Opportunities",
  description:
    "Discover current UK real estate investment opportunities with Chattels Terrain — projected returns, downloadable prospectus and investor registration.",
};

const steps = [
  { icon: FileText, title: "Register", text: "Create your investor profile and access the deal room." },
  { icon: PieChart, title: "Review", text: "Explore opportunities, projections and full documentation." },
  { icon: ShieldCheck, title: "Commit", text: "Invest securely with transparent, FCA-aligned structures." },
];

export default function InvestmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="Strategic real estate investment, built on transparency"
        description="Access institutional-grade UK developments with clear terms, projected returns and rigorous governance."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Dashboard-style opportunities */}
      <section className="py-24 lg:py-28">
        <div className="container-luxe">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <SectionHeading
              align="left"
              eyebrow="Current Opportunities"
              title="Open investment opportunities"
              description="Live developments accepting capital from qualified investors."
              className="max-w-xl"
            />
            <Button href="/contact" variant="gold" className="shrink-0">
              <Download className="h-4 w-4" /> Download prospectus
            </Button>
          </div>
          <div className="mt-14">
            <OpportunitiesTable />
          </div>
        </div>
      </section>

      {/* Calculator / ROI estimator */}
      <section className="bg-light-grey py-24 dark:bg-navy-900 lg:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="ROI Estimator"
            title="Project your returns with confidence"
            description="Adjust the inputs to model how your capital could compound across a typical investment term."
          />
          <Reveal className="mt-14">
            <InvestmentCalculator />
          </Reveal>
        </div>
      </section>

      <WhyInvest />

      {/* How to invest */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Investor Portal"
            title="Three steps to start investing"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i}>
                  <div className="h-full rounded-2xl border border-gold-100/60 bg-white p-8 text-center dark:border-white/10 dark:bg-navy-950">
                    <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-sheen text-navy-900">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl text-navy dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/65 dark:text-light-grey/60">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investor registration */}
      <section className="bg-navy-950 py-24 text-white lg:py-32">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <span className="gold-rule inline-block" /> Investor Registration
            </span>
            <h2 className="heading-lg mt-4 text-white">
              Join our community of investors
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-light-grey/70">
              Register to access our private deal room, downloadable investment
              prospectus and early notification of new opportunities.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-light-grey/70">
              {[
                "Priority access to new developments",
                "Detailed financial models and documentation",
                "Quarterly performance reporting",
                "Dedicated investor relations contact",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-gold-300" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm variant="investor" />
        </div>
      </section>

      <section className="py-12">
        <div className="container-luxe">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-charcoal/50 dark:text-light-grey/45">
            Capital at risk. The value of investments can go down as well as up
            and you may get back less than you invest. Projected returns are
            illustrative and not guaranteed. This website does not constitute
            financial advice. Investments are available to qualified investors
            only.
          </p>
        </div>
      </section>
    </>
  );
}
