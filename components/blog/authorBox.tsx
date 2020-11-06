import Link from "next/link";
import BlogTags from "../../utils/blogTags";
import { Row, Col, Alert } from "react-bootstrap";
import Image from "../Image";

export default function AuthorBox({
  author,
  entry,
}: {
  author: { name: string; slug: string; url: string; description: string };
  entry?: any;
}) {
  return (
    <Alert variant="primary">
      <Row>
        <Col md={2}>
          <Image
            roundedCircle
            src={`/images/authors/${author.slug}.png`}
            alt={author.name}
            width={200}
            height={200}
          />
        </Col>
        <Col md={10}>
          <small>
            {entry ? (
              <>
                <strong>
                  Written by {author.name} on {entry.date}
                </strong>
                <br />
                Tagged in {BlogTags(entry.tags)}
                <br />
                <Link
                  href="/blog/author/[slug]"
                  as={`/blog/author/${author.slug}`}
                >
                  <a>See all of {author.name}'s posts.</a>
                </Link>
                <br />
                <br />
              </>
            ) : null}
            <em>{author.description}</em>
            <br />
            <br />
            Learn more about {author.name.split(" ")[0]} @{" "}
            <a href={author.url} target="_new">
              {author.url}
            </a>
          </small>
        </Col>
      </Row>
    </Alert>
  );
}
