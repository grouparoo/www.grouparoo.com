import Image from "../Image";

export default function SmallIntegration({
  image,
  slug,
  name,
  fillWidth,
}: {
  image: string;
  slug: string;
  name: string;
  fillWidth?: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        height: 110,
        width: fillWidth ? undefined : 130,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #C4C4C4",
      }}
    >
      <Image
        src={`/images/home/integrations/${slug}/${image}`}
        alt={`${name} integration`}
        height={80}
        width={80}
      />
    </div>
  );
}
