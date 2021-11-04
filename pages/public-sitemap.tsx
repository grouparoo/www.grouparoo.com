import SitemapSection from "../components/sitemap/sitemapSection";
import SitemapBlogSection from "../components/sitemap/sitemapBlogSection";
import SitemapIntegrationSection from "../components/sitemap/sitemapIntegrationsSection";
import { getBlogEntries } from "../utils/blogPosts";
import SEO from "../components/seo";
import paths from "../public/public-sitemap.json";
import { badgeTypes } from "../data/blogTags";
import { titleize } from "../utils/inflectors";
import { SitemapDocsSection } from "../components/sitemap/sitemapDocsSection";

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
        <SitemapDocsSection docs={docs} />
        <SitemapIntegrationSection {...integrations} />
        <SitemapBlogSection {...blog} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { entries: blogPosts } = await getBlogEntries(1, null, null, 1000);
  const sitemap: Sitemap = {
    docs: {},
    legal: [],
    solutions: [],
    other: [],
    integrations: {
      sources: [],
      destinations: [],
      guides: [],
    },
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
      if (path.includes("integrations")) {
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
      } else if (path.includes("docs")) {
        const [, category, ...rest] = pathParts;
        sitemap.docs[category] ??= [];
        sitemap.docs[category].push({
          name: titleize(
            rest.length > 1 ? rest.slice(-1)[0] : rest[0] ?? category
          ),
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
