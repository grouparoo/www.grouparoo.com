import Link from "next/link";
import { Button, Image } from "react-bootstrap";
import { formatNameIntoLink } from "../../utils/formatters";

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
      <Link href={`/integrations/${type}s/${formatNameIntoLink(name)}`}>
        <a>
          <Button
            size="lg"
            variant="outline-primary"
            style={{ borderWidth: 4, marginBottom: 10 }}
          >
            <Image
              style={{
                textAlign: "center",
                height: 50,
                padding: 4,
                marginRight: 15,
                backgroundColor: "white",
                borderRadius: 4,
              }}
              src={require(`../../public/images/home/integrations/${slug}/${image}`)}
            />
            {name}
          </Button>
        </a>
      </Link>
    </>
  );
}
