import Image from "../Image";
import { getPluginDisplay } from "../../data/plugins";

export default function SmallIntegration({
  slug,
  fillWidth,
}: {
  slug: string;
  fillWidth?: boolean;
}) {
  const plugin = getPluginDisplay(slug);

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
        src={plugin.logoPath}
        alt={`${plugin.name} integration`}
        height={80}
        width={80}
      />
    </div>
  );
}
