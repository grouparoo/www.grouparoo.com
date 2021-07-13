import { Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Card } from "react-bootstrap";
import navItems from "../../data/docs-nav";

const highlightColor = "#fd7e14";

const NavListItem = ({ item }) => {
  const router = useRouter();

  const isActive = router.asPath.includes(item.path);

  return (
    <li>
      <Link href={item.path}>
        <a
          style={{ color: isActive ? highlightColor : undefined }}
          target={item.target}
          rel={item.target === "_blank" ? "nofollow noopener noreferrer" : null}
        >
          {item.title}
        </a>
      </Link>
      {isActive ? <NavList items={item.children} /> : null}
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
              const isActiveSection = router.asPath.includes(section.path);

              return (
                <Fragment key={`toc-section-${idx}`}>
                  <Link href={section.path}>
                    <a
                      style={{
                        color: isActiveSection ? highlightColor : undefined,
                      }}
                      target={section.target}
                      rel={
                        section.target === "_blank"
                          ? "nofollow noopener noreferrer"
                          : null
                      }
                      className="sectionHeading"
                    >
                      <strong>{section.title}</strong>
                    </a>
                  </Link>
                  {isActiveSection ? (
                    <NavList items={section.children} />
                  ) : null}
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
