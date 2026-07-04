import Image from "next/image";
import { Reveal } from "@/components/reveal";

const badges = [
  {
    src: "/property-ombudsman.png",
    alt: "The Property Ombudsman",
    width: 272,
    height: 112,
  },
  {
    src: "/ico.png",
    alt: "Information Commissioner's Office (ICO) registered",
    width: 253,
    height: 222,
  },
];

/** Regulatory & data-protection accreditations, shown at the foot of the home page. */
export function Accreditations() {
  return (
    <section className="border-t border-gold-100/50 bg-white py-14 dark:border-white/10 dark:bg-navy-900">
      <div className="container-luxe">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/45 dark:text-light-grey/45">
            Regulated &amp; Accredited
          </p>
        </Reveal>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {badges.map((badge, i) => (
            <Reveal key={badge.src} delay={i}>
              <Image
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className="h-16 w-auto sm:h-20"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
