import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms governing use of the ${siteConfig.legalName} website.`,
};

const sections = [
  {
    h: "Use of this website",
    p: "By accessing this website you agree to these terms. The content is provided for general information about our services and does not constitute an offer, solicitation or financial advice.",
  },
  {
    h: "Investment disclaimer",
    p: "Investments in property carry risk. The value of investments can fall as well as rise and you may get back less than you invest. Projected returns are illustrative only and not guaranteed. You should seek independent professional advice before making any investment decision.",
  },
  {
    h: "Intellectual property",
    p: `All content, branding and design on this website are the property of ${siteConfig.legalName} and may not be reproduced without prior written consent.`,
  },
  {
    h: "Limitation of liability",
    p: "While we take care to ensure information is accurate, we accept no liability for any loss arising from reliance on the content of this website to the fullest extent permitted by law.",
  },
  {
    h: "Governing law",
    p: "These terms are governed by the laws of England & Wales and subject to the exclusive jurisdiction of its courts.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-20">
        <div className="container-luxe max-w-3xl space-y-10">
          <p className="text-sm text-charcoal/50 dark:text-light-grey/45">
            Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-heading text-2xl text-navy dark:text-white">
                {s.h}
              </h2>
              <p className="mt-3 leading-relaxed text-charcoal/70 dark:text-light-grey/65">
                {s.p}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
