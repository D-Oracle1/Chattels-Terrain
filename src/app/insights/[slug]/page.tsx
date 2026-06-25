import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { PostCard } from "@/components/post-card";
import { CTA } from "@/components/sections/cta";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", images: [post.image] },
  };
}

const body = [
  "The United Kingdom's property market continues to reward investors who combine patience with disciplined site selection. As infrastructure investment reshapes regional connectivity, the gap between prime and secondary locations is being redrawn — and with it, the opportunity set.",
  "At Chattels Terrain, our approach begins with fundamentals: demographics, employment, transport and planning trajectory. We underwrite conservatively, stress-test every assumption and only proceed where the margin of safety is clear. It is an unglamorous discipline, but it is the foundation of durable returns.",
  "Sustainability is no longer a premium feature — it is a baseline expectation that protects long-term value. BREEAM-aligned design, net-zero operational targets and genuine community benefit are now central to occupier demand, lending appetite and exit valuations alike.",
  "For investors, the message is simple. The strongest risk-adjusted returns will accrue to those backing experienced developers with transparent governance, strong local relationships and the patience to build through the cycle rather than around it.",
];

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.legalName },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy-950 pb-16 pt-40">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/65 to-navy-950/30" />
        <div className="container-luxe relative max-w-3xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-light-grey/70 transition-colors hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">
            {post.category}
          </span>
          <h1 className="heading-lg mt-3 text-white">{post.title}</h1>
          <p className="mt-5 text-sm text-light-grey/60">
            By {post.author} ·{" "}
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readingTime} read
          </p>
        </div>
      </section>

      <article className="py-20">
        <div className="container-luxe max-w-3xl">
          <p className="font-serif text-2xl leading-relaxed text-navy dark:text-light-grey">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-charcoal/75 dark:text-light-grey/70">
            {body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="bg-light-grey py-24 dark:bg-navy-900">
        <div className="container-luxe">
          <h2 className="heading-lg text-center text-navy dark:text-white">
            Related insights
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
