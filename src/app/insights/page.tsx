import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InsightsGrid } from "@/components/insights-grid";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Property investment, land development, market trends, construction insights and industry news from the Chattels Terrain team.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title="Intelligence for the discerning investor"
        description="Market analysis, development thinking and industry news from our specialists."
        image="https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1920&q=80"
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
