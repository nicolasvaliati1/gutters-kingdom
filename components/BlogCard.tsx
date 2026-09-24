import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/blogPosts";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border border-border bg-white">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 w-full">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            loading="lazy"
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="p-6">
          <div className="eyebrow flex items-center gap-3 text-[11px] text-accent-dark">
            <span>{post.category}</span>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <time dateTime={post.date} className="text-muted">
              {formatDate(post.date)}
            </time>
          </div>
          <h3 className="font-display mt-3 text-lg font-semibold text-ink">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
