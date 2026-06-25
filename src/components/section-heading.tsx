import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="gold-rule inline-block" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={cn(
            "heading-lg mt-4 text-balance",
            light ? "text-white" : "text-navy dark:text-white",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p
            className={cn(
              "lede mt-5",
              light && "text-light-grey/75",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
