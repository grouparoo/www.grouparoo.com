import Link from "next/link";
import { Card } from "react-bootstrap";
import Image from "../Image";

export default function IntegrationButton({
  name,
  type,
  slug,
  image,
}: {
  name: string;
  type: string;
  slug: string;
  image: string;
}) {
  const height = 50;
  return (
    <>
      <Link href={`/integrations/${type}s/${slug}`}>
        <a>
          <Card
            className="d-flex flex-row border-primary bg-transparent p-2"
            style={{ borderWidth: 4, marginBottom: 10 }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: 4,
                height,
                width: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={`/images/home/integrations/${slug}/${image}`}
                alt={`${name} integration`}
                width={40}
                height={40}
              />
            </div>
            <div style={{ height }} className="d-flex align-items-center">
              <p
                style={{ marginLeft: 10, marginBottom: 0 }}
              >{`${name} integration`}</p>
            </div>
          </Card>
        </a>
      </Link>
    </>
  );
}
