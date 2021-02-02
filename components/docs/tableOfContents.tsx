import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Card } from "react-bootstrap";
import navItems from "../../data/docs-nav";

const highlightColor = "#fd7e14";

const NavListItem = ({ item }) => {
  const router = useRouter();

  return (
    <li>
      <Link href={item.path}>
        <a
          style={{
            color: router.asPath === item.path ? highlightColor : undefined,
          }}
        >
          {item.title}
        </a>
      </Link>
      <NavList items={item.children} />
    </li>
  );
};

const NavList = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul>
      {items.map((item, idx) => (
        <NavListItem key={idx} item={item} />
      ))}
    </ul>
  );
};

export function TableOfContents() {
  const router = useRouter();

  return (
    <>
      <Card>
        <Card.Header>Grouparoo Docs</Card.Header>
        <Card.Body>
          <small className="docsTableOfContents">
            {navItems.map((section, idx) => {
              return (
                <Fragment key={`toc-section-${idx}`}>
                  <Link href={section.path}>
                    <a
                      style={{
                        color:
                          router.asPath === `/docs/${section.path}`
                            ? highlightColor
                            : undefined,
                      }}
                      className="sectionHeading"
                    >
                      <strong>{section.title}</strong>
                    </a>
                  </Link>
                  <NavList items={section.children} />
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
