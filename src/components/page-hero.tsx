import { Reveal } from "@/components/reveal";

type Crumb = { label: string };

export function PageHero({
  eyebrow,
  title,
  description,
  image = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-navy-950 pb-16 pt-40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40"
        aria-hidden
      />
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden />
      <div className="container-luxe relative">
        <Reveal>
          <span className="eyebrow">
            <span className="gold-rule inline-block" /> {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="heading-xl mt-5 max-w-3xl text-balance text-white">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-light-grey/75">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
