import { Card } from "react-bootstrap";
import SmallIntegration from "./smallIntegration";
import Link from "next/link";
import { formatNameIntoLink } from "../../utils/formatters";

export default function Integration({
  name,
  image,
  type,
  showLink = true,
}: {
  name: string;
  image: string;
  type?: string;
  showLink?: boolean;
}) {
  const card = (
    <Card bg="dark" text="white">
      <Card.Body>
        <SmallIntegration fillWidth={true} image={image} />
        <Card.Text>{name}</Card.Text>
      </Card.Body>
    </Card>
  );

  if (showLink) {
    return (
      <>
        <Link href={`/integrations/${type}s/${formatNameIntoLink(name)}`}>
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
