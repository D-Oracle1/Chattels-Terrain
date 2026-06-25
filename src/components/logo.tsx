import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Chattels Terrain — home"
    >
      {/* logo-light.png = white wordmark for dark surfaces; logo.png = charcoal wordmark for light. */}
      <Image
        src={light ? "/logo-light.png" : "/logo.png"}
        alt="Chattels Terrain"
        width={403}
        height={280}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
