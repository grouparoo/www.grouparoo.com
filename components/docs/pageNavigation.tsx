import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

interface pageNavItem {
  href: string;
  title: string;
}

export function PageNavigation() {
  const [pageNav, setPageNav] = useState<pageNavItem[]>([]);
  useEffect(() => buildPageNavigation(), []);

  function buildPageNavigation() {
    const headerElements = globalThis.document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6"
    );
    const _pageNav: pageNavItem[] = Array.from(headerElements)
      .filter((e) => e.id)
      .map((e) => {
        return {
          href: `#${e.id}`,
          title: e.textContent,
        };
      });

    setPageNav(_pageNav);
  }

  return (
    <Card>
      <Card.Header>On this Page</Card.Header>
      <Card.Body>
        <small className="docsTableOfContents">
          <ul>
            {pageNav.map((section) => (
              <li key={`nav-${section.title}`}>
                <a href={section.href}>{section.title}</a>
              </li>
            ))}
          </ul>
        </small>
      </Card.Body>
    </Card>
  );
}
