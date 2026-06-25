import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { ProjectsMap } from "@/components/projects-map";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore landmark Chattels Terrain developments across residential, commercial, industrial, infrastructure and mixed-use projects in the UK.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Landmark developments across the United Kingdom"
        description="Filter our portfolio by sector and explore each scheme's scope, value, location and projected returns."
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
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
            title="Where we build"
            description="Select a marker to explore live development stages and status across the country."
          />
          <div className="mt-14">
            <ProjectsMap />
          </div>
        </div>
      </section>

      <CTA title="Want to co-develop or invest in a project?" />
    </>
  );
}
