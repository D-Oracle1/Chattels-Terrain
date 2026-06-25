import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SourcingProcess } from "@/components/sections/sourcing-process";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Property sourcing, investment packaging, investor advisory, serviced apartment opportunities and portfolio growth support — how Chattels Terrain works for investors.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Full-service investment sourcing, end to end"
        description="From market research to long-term portfolio support, we handle every stage of the serviced apartment investment journey on your behalf."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
      />

      <ServicesGrid withHeading={false} />

      <SourcingProcess />

      <CTA
        title="Ready to start your investment journey?"
        description="Tell us your goals and we'll source serviced apartment opportunities that match."
      />
    </>
  );
}
