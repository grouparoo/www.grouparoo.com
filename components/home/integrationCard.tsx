import { Card, Badge } from "react-bootstrap";
import SmallIntegration from "./smallIntegration";
import Link from "next/link";

export default function IntegrationCard({
  name,
  image,
  slug,
  type,
  otherType,
  category,
  tag,
  showLink = true,
}: {
  name: string;
  image: string;
  slug: string;
  type?: string;
  otherType?: string;
  category?: string;
  tag?: string;
  showLink?: boolean;
}) {
  const card = (
    <div
      style={{ borderRadius: "5px", boxShadow: "5px 5px 5px 5px lightgrey" }}
    >
      <Card
        bg="dark"
        text="white"
        className={showLink ? "integrationCard" : ""}
      >
        <Card.Body className="">
          <SmallIntegration
            fillWidth={true}
            image={image}
            slug={slug}
            name={name}
          />
          <Card.Text>{name}</Card.Text>

          {type ? (
            <>
              <Badge pill variant="warning">
                {" "}
                {type.toUpperCase()}
              </Badge>
              <br />
            </>
          ) : (
            ""
          )}

          {otherType ? (
            <>
              <Badge pill variant="warning">
                {" "}
                {otherType.toUpperCase()}
              </Badge>
              <br />
            </>
          ) : (
            ""
          )}
          {category ? (
            <>
              <Badge pill variant="primary" className="text-wrap m-1">
                {" "}
                {category.toUpperCase()}
              </Badge>
            </>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </div>
  );

  if (showLink) {
    return (
      <>
        <Link href={`/integrations/${type}s/${slug}`}>
          <a>{card}</a>
        </Link>
        <br />
      </>
    );
  } else {
    return (
      <>
        {card}
        <br />
      </>
    );
  }
}
