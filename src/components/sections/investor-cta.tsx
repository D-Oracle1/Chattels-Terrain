import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export function InvestorCTA() {
  return (
    <section className="py-24">
      <div className="container-luxe">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gold-sheen px-8 py-16 text-center shadow-gold sm:px-16 sm:py-20">
            <div
              className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-navy-950/10 blur-3xl"
              aria-hidden
            />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="heading-lg text-balance text-navy-950">
                Ready to explore high-yield serviced apartment opportunities in
                Edinburgh?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-900/80">
                Let&apos;s discuss how strategic property investment can support
                your long-term financial goals.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href={siteConfig.phoneHref}
                  size="lg"
                  className="bg-navy-950 text-white hover:bg-navy-900"
                >
                  <PhoneCall className="h-4 w-4" /> Schedule a Call
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  className="border border-navy-950/30 bg-white/30 text-navy-950 backdrop-blur hover:bg-white/50"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
