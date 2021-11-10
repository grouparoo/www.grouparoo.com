import { Card, Badge } from "react-bootstrap";
import SmallIntegration from "./SmallIntegration";
import { getPluginDisplay } from "../../data/plugins";
import Link from "next/link";

export default function IntegrationCard({
  slug,
  type,
  otherType,
  category,
  showLink = true,
}: {
  slug: string;
  type?: string;
  otherType?: string;
  category?: string;
  tag?: string;
  showLink?: boolean;
}) {
  const plugin = getPluginDisplay(slug);
  const card = (
    <div
      style={{ borderRadius: "5px", boxShadow: "5px 5px 5px 5px lightgrey" }}
      className="h-100"
    >
      <Card
        bg="dark"
        text="white"
        className={showLink ? "integrationCard h-100" : "h-100"}
      >
        <Card.Body>
          <SmallIntegration fillWidth={true} slug={plugin.slug} />
          <Card.Text>{plugin.name}</Card.Text>

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
