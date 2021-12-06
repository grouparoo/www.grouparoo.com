import Link from "next/link";
import BlogTags from "../../utils/blogTags";
import { Row, Col, Alert } from "react-bootstrap";
import Image from "../Image";
import { Author } from "../../data/authors";

export default function AuthorBox({
  author,
  entry,
}: {
  author: Author;
  entry?: any;
}) {
  return (
    <Alert variant="primary">
      <Row>
        <Col md={2}>
          <Image
            roundedCircle
            src={`/images/authors/${author.image}`}
            alt={author.name}
            width={100}
            height={100}
          />
        </Col>
        <Col>
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
                  <a>See all of {author.name}&apos;s posts.</a>
                </Link>
                <br />
                <br />
              </>
            ) : null}
            <em>{author.description}</em>
            <br />
            <br />
            {author.url ? (
              <>
                Learn more about {author.name.split(" ")[0]} @{" "}
                <a href={author.url} target="_new">
                  {" "}
                  {author.url}{" "}
                </a>
              </>
            ) : null}
          </small>
        </Col>
      </Row>
    </Alert>
  );
}
