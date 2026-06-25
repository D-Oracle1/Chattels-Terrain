import { posts } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function InsightsPreview() {
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug).slice(0, 2);

  return (
    <section className="py-24 lg:py-32">
      <div className="container-luxe">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Insights & Resources"
            title="Intelligence for the discerning investor"
            description="Edinburgh market analysis, serviced-apartment strategy and investor guides from our specialists."
            className="max-w-xl"
          />
          <Button href="/insights" variant="outline" className="shrink-0">
            View all insights
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:row-span-2">
            <PostCard post={featured} featured />
          </Reveal>
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={i + 1}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
