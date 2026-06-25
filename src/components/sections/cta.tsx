import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export function CTA({
  title = "Ready to build your Edinburgh portfolio?",
  description = "Speak with our team about current serviced apartment opportunities or book a private consultation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-24">
      <div className="container-luxe">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-16 text-center shadow-luxe sm:px-16 sm:py-20">
            <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
            <div
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow justify-center">
                <span className="gold-rule inline-block" /> Let&apos;s talk
              </span>
              <h2 className="heading-lg mt-5 text-balance text-white">{title}</h2>
              <p className="mt-5 text-lg text-light-grey/70">{description}</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" variant="gold" size="lg">
                  Schedule Consultation <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={siteConfig.phoneHref}
                  size="lg"
                  className="border border-white/25 bg-white/5 text-white hover:border-gold hover:text-gold-300"
                >
                  <PhoneCall className="h-4 w-4" /> {siteConfig.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
