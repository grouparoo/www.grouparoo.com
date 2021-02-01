import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Card } from "react-bootstrap";
import navItems from "../../data/docs-nav";

export function TableOfContents({ docs }) {
  const router = useRouter();
  const highlightColor = "#fd7e14";

  return (
    <>
      <Card>
        <Card.Header>Grouparoo Docs</Card.Header>
        <Card.Body>
          <small>
            {Object.entries(navItems).map(([id, section]) => {
              return (
                <Fragment key={`toc-section-${id}`}>
                  <Link href={section.path}>
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
