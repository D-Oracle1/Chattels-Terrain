import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { ProjectsMap } from "@/components/projects-map";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Opportunities",
  description:
    "Explore carefully selected serviced apartment investment opportunities across Edinburgh — net yields, locations and availability at a glance.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Opportunities"
        title="Serviced apartment opportunities across Edinburgh"
        description="Filter our current opportunities by type and explore each property's location, price, net yield and availability."
        image="https://images.unsplash.com/photo-1506377585622-bedcbb027afc?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 lg:py-28">
        <div className="container-luxe">
          <ProjectsShowcase />
        </div>
      </section>

      <section className="bg-light-grey py-24 dark:bg-navy-900 lg:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Interactive Map"
            title="Where we source across Edinburgh"
            description="Select a marker to explore each opportunity's neighbourhood, price and projected net yield."
          />
          <div className="mt-14">
            <ProjectsMap />
          </div>
        </div>
      </section>

      <CTA
        title="Want to discuss an opportunity?"
        description="Speak with our team about current serviced apartment opportunities or book a private consultation."
      />
    </>
  );
}
