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
  return (
    <>
      <Link href={`/integrations/${type}s/${slug}`}>
        <a>
          <Button
            size="lg"
            variant="outline-primary"
            style={{ borderWidth: 4, marginBottom: 10 }}
          >
            <Image
              unsized
              style={{
                textAlign: "center",
                height: 50,
                padding: 4,
                marginRight: 15,
                backgroundColor: "white",
                borderRadius: 4,
              }}
              src={`/images/home/integrations/${slug}/${image}`}
              alt={name}
            />
            {name}
          </Button>
        </a>
      </Link>
    </>
  );
}
