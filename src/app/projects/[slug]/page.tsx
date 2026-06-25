import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Banknote, TrendingUp } from "lucide-react";
import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/sections/cta";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.scope,
    openGraph: { images: [project.image] },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const facts = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Banknote, label: "Project value", value: project.value },
    { icon: TrendingUp, label: "Target ROI", value: project.roi },
    { icon: Calendar, label: "Timeline", value: project.timeline },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.name,
    description: project.scope,
    location: project.location,
    url: `${siteConfig.url}/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-navy-950 pb-16 pt-40">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/30" />
        <div className="container-luxe relative">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-light-grey/70 transition-colors hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
            {project.category} · {project.status}
          </span>
          <h1 className="heading-xl mt-3 text-white">{project.name}</h1>
        </div>
      </section>

      <section className="border-b border-gold-100/50 bg-white py-10 dark:border-white/10 dark:bg-navy-900">
        <div className="container-luxe grid grid-cols-2 gap-8 lg:grid-cols-4">
          {facts.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-sheen text-navy-900">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-charcoal/50 dark:text-light-grey/45">
                    {f.label}
                  </p>
                  <p className="font-heading text-lg text-navy dark:text-white">
                    {f.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe grid gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <h2 className="heading-lg text-navy dark:text-white">
              Project overview
            </h2>
            <p className="lede mt-6">{project.scope}</p>
            <p className="mt-5 leading-relaxed text-charcoal/70 dark:text-light-grey/65">
              {project.name} exemplifies our commitment to disciplined delivery
              and sustainable placemaking. From masterplan to handover, the
              scheme is engineered for long-term value — combining
              best-in-class design, BREEAM-aligned sustainability and a
              transparent investment structure.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <Reveal key={src} delay={i}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={src}
                      alt={`${project.name} gallery ${i + 1}`}
                      fill
                      sizes="(max-width:1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-gold-100/60 bg-light-grey p-8 dark:border-white/10 dark:bg-navy-950">
              <h3 className="font-heading text-xl text-navy dark:text-white">
                Investment snapshot
              </h3>
              <dl className="mt-6 space-y-4 text-sm">
                <SnapRow label="Sector" value={project.category} />
                <SnapRow label="Status" value={project.status} />
                <SnapRow label="Value" value={project.value} />
                <SnapRow label="Target ROI" value={project.roi} />
                <SnapRow label="Timeline" value={project.timeline} />
              </dl>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-sheen px-6 py-3 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5"
              >
                Request investment pack
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
}

function SnapRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gold-100/50 pb-3 dark:border-white/10">
      <dt className="text-charcoal/55 dark:text-light-grey/50">{label}</dt>
      <dd className="font-semibold text-navy dark:text-white">{value}</dd>
    </div>
  );
}
