import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogCard } from "@/components/BlogCard";
import { CtaBanner } from "@/components/CtaBanner";
import { blogPosts } from "@/content/blogPosts";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Gutter guides, material breakdowns, and planning advice for homeowners about to compare quotes.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${site.name}`,
    description:
      "Gutter guides, material breakdowns, and planning advice for homeowners about to compare quotes.",
    url: `${site.url}/blog`,
    images: ["/og/blog.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${site.name}`,
    images: ["/og/blog.png"],
  },
};

export default function BlogPage() {
  const postsByDate = [...blogPosts].sort(
    (a, b) => new Date(b.updatedDate ?? b.date).getTime() - new Date(a.updatedDate ?? a.date).getTime()
  );

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Blog"
        description="Gutter guides, material breakdowns, and planning advice. No fluff, just what you need to know before you compare quotes."
        breadcrumbHref="/blog"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {postsByDate.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
