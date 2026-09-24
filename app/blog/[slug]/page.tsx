import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TableOfContents } from "@/components/TableOfContents";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AuthorBio } from "@/components/AuthorBio";
import { BackToTop } from "@/components/BackToTop";
import { BlogCard } from "@/components/BlogCard";
import { CtaBanner } from "@/components/CtaBanner";
import { RichText } from "@/lib/richText";
import { blogPosts, getBlogPost } from "@/content/blogPosts";
import { site } from "@/content/site";
import { faqPageSchema, personSchema, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const path = `/blog/${post.slug}`;
  const ogImage = `/og/blog-${post.slug}.png`;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: `${post.title} | ${site.name}`,
      description: post.ogDescription,
      url: `${site.url}${path}`,
      images: [ogImage],
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${site.name}`,
      description: post.ogDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const tocItems = [
    ...post.sections.map((section) => ({ id: section.id, label: section.heading })),
    { id: "faq", label: "FAQ" },
  ];

  const relatedPosts = post.relatedPosts
    .map((relatedSlug) => getBlogPost(relatedSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const faqSchema = faqPageSchema(post.faqs);
  const authorSchema = personSchema(site.author, "/about");
  const blogArticleSchema = articleSchema({
    headline: post.title,
    description: post.metaDescription,
    url: path,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    authorName: site.author.name,
    authorUrl: "/about",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogArticleSchema) }}
      />

      <div className="border-b border-border bg-cream px-6 py-4 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            baseUrl={site.url}
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title, href: path },
            ]}
          />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 py-12 lg:px-10">
        <p className="eyebrow text-xs text-accent-dark">{post.category}</p>
        <h1 className="font-display mt-3 text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
          <span>
            By <span className="text-ink">{site.author.name}</span>
          </span>
          <span aria-hidden>·</span>
          <span>
            Published <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          {post.updatedDate && post.updatedDate !== post.date && (
            <>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={post.updatedDate}>{formatDate(post.updatedDate)}</time>
              </span>
            </>
          )}
        </div>

        <div className="relative mt-8 h-64 w-full sm:h-80 lg:h-96">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 56rem, 100vw"
          />
        </div>

        <div className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-ink/80">
          {post.intro.map((paragraph, index) => (
            <p key={index}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <div className="mt-10">
          <TableOfContents items={tocItems} />
        </div>

        <div className="mt-10 max-w-2xl">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 border-t border-border pt-8 first:border-t-0 first:pt-0">
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    <RichText text={paragraph} />
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2">
                    {section.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                        <span>
                          <RichText text={bullet} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <section id="faq" className="mt-12 max-w-2xl scroll-mt-24 border-t border-border pt-8">
          <p className="eyebrow text-xs text-accent-dark">Questions Answered</p>
          <h2 className="font-display mt-2 text-2xl font-medium text-ink sm:text-3xl">
            FAQ: {post.seoTitle}
          </h2>
          <FaqAccordion faqs={post.faqs} />
        </section>

        <div className="max-w-2xl">
          <AuthorBio />
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <p className="eyebrow text-xs text-accent-dark">Keep Reading</p>
            <h2 className="font-display mt-2 text-2xl font-medium text-ink sm:text-3xl">
              Related Guides
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
      <BackToTop />
    </>
  );
}
