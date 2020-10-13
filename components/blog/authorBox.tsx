import Link from "next/link";
import BlogTags from "../../utils/blogTags";
import { BlogEntry } from "../../utils/blogEngine";
import { Row, Col, Image, Alert } from "react-bootstrap";

export default function AuthorBox({
  author,
  entry,
}: {
  author: { name: string; slug: string; url: string; description: string };
  entry?: BlogEntry;
}) {
  return (
    <Alert variant="primary">
      <Row>
        <Col md={2}>
          <Image
            style={{ width: "100%", maxWidth: 200 }}
            roundedCircle
            src={require(`../../public/images/team/${author.slug}.png`)}
          />
        </Col>
        <Col md={10}>
          <small>
            {entry ? (
              <>
                <strong>
                  Written by {author.name} on {entry.dateText()}
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
