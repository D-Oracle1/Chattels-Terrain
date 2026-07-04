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
      {/* Gold transparent lockup — reads on both light and dark surfaces. */}
      <Image
        src={light ? "/logo-light.png" : "/logo.png"}
        alt="Chattels Terrain"
        width={636}
        height={580}
        priority
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
