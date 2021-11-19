import SitemapSection from "../components/sitemap/SitemapSection";
import SitemapBlogSection from "../components/sitemap/SitemapBlogSection";
import SitemapIntegrationSection from "../components/sitemap/SitemapIntegrationsSection";
import { getBlogEntries } from "../utils/blogPosts";
import SEO from "../components/SEO";
import paths from "../public/public-sitemap.json";
import { badgeTypes } from "../data/blogTags";
import { titleize } from "../utils/inflectors";
import { SitemapDocsSection } from "../components/sitemap/SitemapDocsSection";

export type SitemapItem = {
  path: string;
  name: string;
};
export interface Sitemap {
  docs: Record<string, SitemapItem[]>;
  legal: SitemapItem[];
  solutions: SitemapItem[];
  other: SitemapItem[];
  integrations: {
    sources: SitemapItem[];
    destinations: SitemapItem[];
    guides: SitemapItem[];
  };
  blog: Record<keyof typeof badgeTypes, SitemapItem[]>;
}
function buildDocsTitle(category, rest) {
  return rest.length > 1
    ? //if there is more than one piece in "rest" to build with, combine the lowest two to make a descriptive title
      `${rest.slice(-2)[0]}:  ${rest.slice(-2)[1]}`
    : //otherwise give the only piece there (if it exists) or just the category name (if it doesn't)
      rest[0] ?? category;
}

export default function PublicSitemap({
  pageProps: { sitemap },
}: {
  pageProps: { sitemap: Sitemap };
}) {
  const { integrations, blog, docs, ...restSitemap } = sitemap;

  return (
    <>
      <SEO
        canonical={true}
        description="Grouparoo is the Reverse ETL product that integrates with all of your team's business tools such as CRMs and Marketing Automation."
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/public-sitemap"
        title="Grouparoo: Sitemap"
      />

      <div>
        <h1 className="mx-auto text-center">Sitemap</h1>
        <SitemapIntegrationSection {...integrations} />
        <SitemapDocsSection docs={docs} />

        {Object.entries(restSitemap).map(
          ([category, sitemapItems]: [string, SitemapItem[]], idx) => (
            <SitemapSection
              key={category}
              category={category}
              sitemapItems={sitemapItems}
              background={idx % 2 === 0 ? "dark" : "light"}
            />
          )
        )}
        <SitemapBlogSection {...blog} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { entries: blogPosts } = await getBlogEntries(1, null, null, 1000);
  const sitemap: Sitemap = {
    docs: {},
    integrations: {
      sources: [],
      destinations: [],
      guides: [],
    },
    solutions: [],
    legal: [],
    other: [],
    blog: {
      company: [],
      sync: [],
      product: [],
      operations: [],
      notes: [],
      marketing: [],
      engineering: [],
      data: [],
      connections: [],
    },
  };

  // All paths except for blog posts
  paths.forEach((path) => {
    if (path === "/") {
      return sitemap.other.push({
        path,
        name: "Home",
      });
    }
    const pathParts = path.split("/").filter(Boolean);
    if (pathParts.length === 1) {
      sitemap.other.push({
        path,
        name: titleize(pathParts[0]),
      });
    } else if (pathParts.length > 1) {
      if (pathParts[0] === "integrations") {
        const [, integrationType, name] = pathParts;
        if (name) {
          // We know it's a Source or Destintation
          sitemap.integrations[integrationType].push({
            path,
            name: titleize(name),
          });
        } else {
          sitemap.integrations.guides.push({
            path,
            name: titleize(integrationType),
          });
        }
      } else if (pathParts[0] === "docs") {
        const [, category, ...rest] = pathParts;
        sitemap.docs[category] ??= [];
        sitemap.docs[category].push({
          name: titleize(buildDocsTitle(category, rest)),
          path,
        });
      } else {
        const [type, ...rest] = pathParts;
        const name = titleize(rest.slice(-1)[0]);
        sitemap[type].push({
          path,
          name,
        });
      }
    } else {
      throw new Error("Empty path: " + path);
    }
  });

  blogPosts.forEach((blogPost) => {
    const [category] = blogPost.tags;
    if (!sitemap.blog[category]) {
      console.error(blogPost);
      throw new Error("Blog post with unknown category");
    }
    sitemap.blog[category].push({
      path: blogPost.path,
      name: blogPost.title,
    });
  });

  return { props: { sitemap } };
}
