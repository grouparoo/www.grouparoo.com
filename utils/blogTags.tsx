import { Fragment } from "react";
import { Badge } from "react-bootstrap";
import Link from "next/link";

export const badgeTypes = {
  marketing: "primary",
  engineering: "success",
  connections: "info",
  notes: "warning",
  product: "danger",
  operations: "secondary",
  company: "info",
};

export default function blogTags(tags: string[]) {
  return (
    <>
      {(tags || []).map((tag, idx) => (
        <Fragment key={`tag-${idx}`}>
          <Link href="/blog/category/[category]" as={`/blog/category/${tag}`}>
            <a>
              <Badge variant={badgeTypes[tag] || "secondary"}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </Badge>
            </a>
          </Link>
          &nbsp;
        </Fragment>
      ))}
    </>
  );
}
