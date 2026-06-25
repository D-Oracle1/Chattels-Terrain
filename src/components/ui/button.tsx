import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-700 shadow-luxe dark:bg-white dark:text-navy dark:hover:bg-light-grey",
  gold: "bg-gold-sheen text-navy-900 hover:shadow-gold hover:-translate-y-0.5",
  outline:
    "border border-navy/20 text-navy hover:border-gold hover:text-gold-600 dark:border-white/25 dark:text-white dark:hover:border-gold dark:hover:text-gold-300",
  ghost:
    "text-navy hover:text-gold-600 dark:text-white dark:hover:text-gold-300",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-sm",
};

type CommonProps = { variant?: Variant; size?: Size; className?: string };

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href"
  >;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | AnchorProps
>(({ variant = "primary", size = "md", className, ...props }, ref) => {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as AnchorProps;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...rest}
      />
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as ButtonProps)}
    />
  );
});

Button.displayName = "Button";
