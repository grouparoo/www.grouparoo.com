import Link from "next/link";
import { Button } from "react-bootstrap";
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
          <Button
            size="lg"
            variant="outline-primary"
            className="d-flex flex-row"
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
                alt={name}
                width={40}
                height={40}
              />
            </div>
            <div style={{ height }} className="d-flex align-items-center">
              <p style={{ marginLeft: 10, marginBottom: 0 }}>{name}</p>
            </div>
          </Button>
        </a>
      </Link>
    </>
  );
}
