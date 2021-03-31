import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card } from "react-bootstrap";

interface pageNavItem {
  href: string;
  title: string;
}

export function PageNavigation({
  includeLineBreak,
  pageNavSelector,
}: {
  includeLineBreak?: boolean;
  pageNavSelector?: string;
}) {
  const router = useRouter();
  const [pageNav, setPageNav] = useState<pageNavItem[]>([]);
  useEffect(() => {
    buildPageNavigation();
    setTimeout(buildPageNavigation, 150);
  }, [router.asPath]);

  function buildPageNavigation() {
    const headerElements = globalThis.document.querySelectorAll(
      pageNavSelector || "h1, h2, h3, h4, h5, h6"
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

  if (pageNav.length < 2) return null;

  return (
    <>
      {includeLineBreak ? <br /> : null}
      <Card>
        <Card.Header>On this Page</Card.Header>
        <Card.Body>
          <small className="docsTableOfContents">
            <ul>
              {pageNav.map((section) => (
                <li key={`nav-${section.href}`}>
                  <a href={section.href}>{section.title}</a>
                </li>
              ))}
            </ul>
          </small>
        </Card.Body>
      </Card>
    </>
  );
}
