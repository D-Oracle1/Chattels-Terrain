import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/lib/data";
import { cn } from "@/lib/utils";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function PostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-gold-100/50 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe dark:border-white/10 dark:bg-navy-950",
        featured && "lg:flex-row",
      )}
    >
      <div
        className={cn(
          "relative h-52 overflow-hidden",
          featured && "lg:h-auto lg:w-1/2",
        )}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={featured ? "(max-width:1024px) 100vw, 50vw" : "(max-width:768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-semibold text-gold-300 backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:p-10")}>
        <div className="flex items-center gap-3 text-xs text-charcoal/50 dark:text-light-grey/45">
          <span>{formatDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span>{post.readingTime} read</span>
        </div>
        <h3
          className={cn(
            "mt-3 font-heading text-navy transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-300",
            featured ? "text-2xl lg:text-3xl" : "text-xl",
          )}
        >
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65 dark:text-light-grey/60">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 dark:text-gold-300">
          Read article
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
