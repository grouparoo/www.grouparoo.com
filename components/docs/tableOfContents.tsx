import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Card } from "react-bootstrap";

import { titleize } from "../../utils/inflectors";

export function TableOfContents({ docs }) {
  const router = useRouter();
  const highlightColor = "#fd7e14";
  const tableOfContents = tableOfContentsFromEntries(docs);

  return (
    <>
      <Card>
        <Card.Header>Grouparoo Docs</Card.Header>
        <Card.Body>
          <small>
            {Object.entries(tableOfContents).map(([id, section]) => {
              return (
                <Fragment key={`toc-section-${id}`}>
                  <Link href={`/docs/${section.path}`}>
                    <a
                      style={{
                        color:
                          router.asPath === `/docs/${section.path}`
                            ? highlightColor
                            : undefined,
                      }}
                    >
                      <strong>{section.title}</strong>
                    </a>
                  </Link>
                  <ul>
                    {section.children.map((entry) => (
                      <li key={`toc-${section}-${entry.title}`}>
                        <Link href={entry.path}>
                          <a
                            style={{
                              color:
                                router.asPath === entry.path
                                  ? highlightColor
                                  : undefined,
                            }}
                          >
                            {entry.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              );
            })}
          </small>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

interface NavItem {
  title: string;
  path: string;
  children: NavItem[];
}

export function tableOfContentsFromEntries(docs) {
  const sections: { [section: string]: NavItem } = {
    "try-now": { title: "Try Now!", path: "try-now", children: [] },
    installation: { title: "Installation", path: "installation", children: [] },
    //
    deployment: { title: "Deployment", path: "deployment", children: [] },
    guides: { title: "Guides", path: "guides", children: [] },
    development: { title: "Development", path: "development", children: [] },
    community: { title: "Community", path: "community", children: [] },
  };

  const externalLinks = {
    community: [
      {
        title: "What's New",
        path: "/whats-new",
      },
      {
        title: "Roadmap",
        path: "/roadmap",
      },
    ],
  };

  docs.forEach((entry) => {
    const pathParts = entry.path.split("/");
    if (pathParts.length > 3) {
      const section = pathParts[2];
      if (!sections[section]) {
        sections[section] = { title: section, path: section, children: [] };
      }
      if (!sections[section].children) sections[section].children = [];
      sections[section].children.push(entry);
    }
  });

  for (const section in externalLinks) {
    for (const k in externalLinks[section]) {
      sections[section].children.push(externalLinks[section][k]);
    }
  }

  return sections;
}
