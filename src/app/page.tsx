import { Hero } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { WhyInvest } from "@/components/sections/why-invest";
import { InvestmentCalculator } from "@/components/investment-calculator";
import { OpportunitiesTable } from "@/components/opportunities-table";
import { Testimonials } from "@/components/sections/testimonials";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { Credibility } from "@/components/sections/credibility";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Credibility />
      <AboutPreview />
      <ServicesGrid />

      {/* Featured projects */}
      <section className="py-24 lg:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Featured Projects"
            title="A portfolio built on conviction"
            description="Landmark schemes across residential, commercial, industrial, infrastructure and mixed-use."
          />
          <div className="mt-14">
            <ProjectsShowcase limit={6} />
          </div>
          <div className="mt-12 text-center">
            <Button href="/projects" variant="outline" size="lg">
              View all projects <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <WhyInvest />

      {/* Investment opportunities + calculator */}
      <section className="bg-light-grey py-24 dark:bg-navy-900 lg:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Investment Opportunities"
            title="Current opportunities for qualified investors"
            description="Institutional-grade developments with transparent terms and clear projected returns."
          />
          <div className="mt-14">
            <OpportunitiesTable />
          </div>
          <Reveal className="mt-16">
            <InvestmentCalculator />
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <InsightsPreview />
      <CTA />
    </>
  );
}
