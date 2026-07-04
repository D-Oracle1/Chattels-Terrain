import { Hero } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { AboutPreview } from "@/components/sections/about-preview";
import { WhyEdinburgh } from "@/components/sections/why-edinburgh";
import { InvestorOpportunity } from "@/components/sections/investor-opportunity";
import { SourcingProcess } from "@/components/sections/sourcing-process";
import { WhatSetsUsApart } from "@/components/sections/what-sets-us-apart";
import { TrustBadges } from "@/components/sections/trust-badges";
import { Testimonials } from "@/components/sections/testimonials";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { InvestorCTA } from "@/components/sections/investor-cta";
import { Accreditations } from "@/components/sections/accreditations";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <AboutPreview />
      <WhyEdinburgh />
      <InvestorOpportunity />
      <SourcingProcess />
      <WhatSetsUsApart />
      <TrustBadges />
      <Testimonials />
      <InsightsPreview />
      <InvestorCTA />
      <Accreditations />
    </>
  );
}
