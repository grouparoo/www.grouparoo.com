import { Card, Button, Row } from "react-bootstrap";
import Image from "../Image";

export interface GetStartedCardProps {
  title: string;
  image: string;
  imageWidth: string;
  tagline: string;
  buttonVariant: string;
  buttonText: string;
  footerText?: string;
}
export const GetStartedCard = ({
  title,
  image,
  imageWidth,
  tagline,
  buttonVariant,
  buttonText,
  footerText,
}: GetStartedCardProps) => {
  return (
    <Card className="mx-3 pt-4 pb-5 shadow-lg h-100 mb-4" bg="white">
      <Card.Header className="bg-white border-0">
        <Image src={image} width={imageWidth} height="63" alt={title}></Image>
        <Card.Title>
          <div className="h3 pt-2 mb-2">{title}</div>
        </Card.Title>
      </Card.Header>
      <Card.Body className="lead align-middle">{tagline} </Card.Body>
      <Card.Footer className="border-0 bg-white">
        <Row>
          <Button
            variant={buttonVariant}
            href="/docs/getting-started"
            className="col-4 rounded-pill mx-auto"
          >
            {buttonText}
          </Button>
          {footerText ? (
            <span className="small mt-4">{footerText}</span>
          ) : (
            <div className="mb-5"></div>
          )}
        </Row>{" "}
      </Card.Footer>
    </Card>
  );
};
