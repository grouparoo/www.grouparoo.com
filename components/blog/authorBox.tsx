import Link from "next/link";
import BlogTags from "../../utils/blogTags";
import { BlogEntry } from "../../utils/blogEngine";
import { Row, Col, Image, Alert } from "react-bootstrap";

export default function AuthorBox({ entry }: { entry: BlogEntry }) {
  return (
    <Alert variant="primary">
      <Row>
        <Col md={2}>
          <Image
            style={{ width: "100%", maxWidth: 200 }}
            roundedCircle
            src={require(`../../public/images/team/${entry.author.slug}.png`)}
          />
        </Col>
        <Col md={10}>
          <small>
            <strong>
              Written by {entry.author.name} on {entry.dateText()}
            </strong>
            <br />
            Tagged in {BlogTags(entry.tags)}
            <br />
            <Link
              href="/blog/author/[slug]"
              as={`/blog/author/${entry.author.slug}`}
            >
              <a>See all of {entry.author.name}'s posts.</a>
            </Link>{" "}
            <br />
            <br />
            <em>{entry.author.description}</em>
            <br />
            <br />
            Learn more about {entry.author.name.split(" ")[0]} @{" "}
            <a href={entry.author.url} target="_new">
              {entry.author.url}
            </a>
          </small>
        </Col>
      </Row>
    </Alert>
  );
}
