import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { categories, allServices } from "@/content/categories";
import { cities } from "@/content/cities";
import { blogPosts } from "@/content/blogPosts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/services", "/about", "/faq", "/contact"];
  const categoryRoutes = categories.map((category) => `/${category.slug}`);
  const serviceRoutes = allServices().map(
    ({ category, service }) => `/${category.slug}/${service.slug}`
  );
  const cityServiceRoutes = allServices().flatMap(({ category, service }) =>
    cities.map((city) => `/${category.slug}/${service.slug}/${city.slug}`)
  );
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [
    ...routes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...cityServiceRoutes,
    ...blogRoutes,
  ].map((route) => {
    const post = blogPosts.find((p) => `/blog/${p.slug}` === route);
    return {
      url: `${site.url}${route}`,
      lastModified: post ? new Date(post.updatedDate ?? post.date) : new Date(),
    };
  });
}
