import { Card } from "react-bootstrap";

export default function WorkingAtGrouparooCard() {
  return (
    <Card>
      <Card.Body>
        <p>
          Learn more about what it is like working at Grouparoo on our{" "}
          <a
            href="https://www.keyvalues.com/grouparoo"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            KeyValues profile.
          </a>
        </p>

        <small>
          We are always looking for exceptional Engineers, Designers, Product
          Managers, and Marketers who share our Mission. Even if we don't have a
          position posted, we would love to meet you! You can reach us at{" "}
          <a href="mailto:hello@grouparoo.com">hello@grouparoo.com</a>.
        </small>
      </Card.Body>
    </Card>
  );
}
