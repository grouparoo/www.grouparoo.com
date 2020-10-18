import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Card } from "react-bootstrap";

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
            {Object.keys(tableOfContents).map((section) => {
              return (
                <Fragment key={`toc-section-${section}`}>
                  <Link href={`/docs/${section}`}>
                    <a
                      style={{
                        color:
                          router.asPath === `/docs/${section}`
                            ? highlightColor
                            : undefined,
                      }}
                    >
                      <strong>{capitalize(section)}</strong>
                    </a>
                  </Link>
                  {tableOfContents[section].map((entry) => (
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

export function tableOfContentsFromEntries(docs) {
  const sections: { [section: string]: { title: string; path: string }[] } = {
    deployment: [],
    guides: [],
    development: [],
    community: [],
  };

  const externalLinks = {
    community: [
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
      if (!sections[section]) sections[section] = [];
      sections[section].push(entry);
    }
  });

  for (const section in externalLinks) {
    for (const k in externalLinks[section]) {
      sections[section].push(externalLinks[section][k]);
    }
  }

  return sections;
}

export function capitalize(word: string) {
  return word
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
