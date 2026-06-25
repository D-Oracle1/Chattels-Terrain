import { ArrowRight, CalendarCheck, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { OpportunitiesTable } from "@/components/opportunities-table";

export function InvestorOpportunity() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-luxe">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center">
              <span className="gold-rule inline-block" /> Investor Opportunity
            </span>
            <h2 className="heading-lg mt-5 text-balance text-navy dark:text-white">
              Build wealth through carefully selected serviced apartment
              investments
            </h2>
            <p className="lede mt-6">
              We welcome partnerships with investors seeking high-yield serviced
              apartment opportunities in Edinburgh. Our goal is to make property
              investment clear, strategic and rewarding.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/investment" variant="gold" size="lg">
                Investment enquiry <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                <CalendarCheck className="h-4 w-4" /> Schedule a consultation
              </Button>
              <Button href="/investment#register" variant="ghost" size="lg">
                <UserPlus className="h-4 w-4" /> Register as an investor
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-16">
          <OpportunitiesTable />
        </div>
      </div>
    </section>
  );
}
