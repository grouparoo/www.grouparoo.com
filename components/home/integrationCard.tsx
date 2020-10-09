import { Card, Badge } from "react-bootstrap";
import SmallIntegration from "./smallIntegration";
import Link from "next/link";
import { formatNameIntoLink } from "../../utils/formatters";

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
    <div style={{ boxShadow: "5px 5px 5px 5px grey" }}>
      <Card bg="dark" text="white">
        <Card.Body>
          {tag ? tag : ""}
          <SmallIntegration fillWidth={true} image={image} slug={slug} />
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
              <Badge pill variant="primary">
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
              <Badge pill variant="primary">
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
