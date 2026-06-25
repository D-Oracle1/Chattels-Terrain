import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.legalName} collects, uses and protects your personal data.`,
};

const sections = [
  {
    h: "Who we are",
    p: `${siteConfig.legalName} ("we", "us") is an Edinburgh-based property portfolio and investment sourcing company (Company No. ${siteConfig.companyNumber}). We are the data controller for personal data collected through this website.`,
  },
  {
    h: "Information we collect",
    p: "We collect information you provide directly — such as your name, email, phone number and enquiry details — as well as limited technical data (e.g. device and analytics information) to improve our service.",
  },
  {
    h: "How we use your data",
    p: "We use your data to respond to enquiries, provide investment information you request, send updates where you have consented, and meet our legal and regulatory obligations.",
  },
  {
    h: "Lawful basis",
    p: "We process personal data on the basis of your consent, the performance of a contract, our legitimate interests, and compliance with legal obligations under UK GDPR.",
  },
  {
    h: "Your rights",
    p: "You have the right to access, rectify, erase, restrict and port your data, and to object to processing. To exercise these rights, contact us using the details below.",
  },
  {
    h: "Contact",
    p: `For any privacy questions, email ${siteConfig.email} or write to us at ${siteConfig.address.line1}, ${siteConfig.address.city} ${siteConfig.address.postcode}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
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
