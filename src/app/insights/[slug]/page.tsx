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
  "Edinburgh remains one of the UK's most resilient property markets — and few asset classes capture that resilience as well as professionally run serviced apartments. A rare combination of tourism, business travel, a vast student population and a year-round events calendar keeps quality short-stay accommodation in consistent demand.",
  "At Chattels Terrain, our approach begins with fundamentals: location, demand drivers, achievable nightly rates and occupancy. We assess every opportunity against clear yield criteria, complete rigorous due diligence and only present properties where the case for investment is genuinely compelling.",
  "Serviced apartments can meaningfully outperform traditional buy-to-let on net yield, but they reward careful selection. The right street, the right layout and the right operating model make the difference between an average return and a strong one — which is exactly where specialist sourcing earns its place.",
  "For investors, the message is simple. The strongest risk-adjusted returns accrue to those who partner with a sourcing specialist offering transparent analysis, deep local knowledge and genuine, long-term support as a portfolio grows.",
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

      <CTA
        title="Ready to explore Edinburgh opportunities?"
        description="Speak with our team about current serviced apartment opportunities or book a private consultation."
      />
    </>
  );
}
