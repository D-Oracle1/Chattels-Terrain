import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InsightsGrid } from "@/components/insights-grid";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Edinburgh market analysis, serviced apartment investment strategy and investor guides from the Chattels Terrain team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title="Intelligence for the discerning investor"
        description="Edinburgh market analysis, serviced-apartment strategy and investor guides from our specialists."
        image="https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-24 lg:py-28">
        <div className="container-luxe">
          <InsightsGrid />
        </div>
      </section>
      <CTA title="Want bespoke market intelligence?" description="Our research team produces tailored briefings for serious investors and partners." />
    </>
  );
}
