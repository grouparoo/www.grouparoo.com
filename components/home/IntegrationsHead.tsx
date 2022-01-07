import SEO from "../SEO";

export default function IntegrationsHead({
  primaryType,
  name,
  slug,
}: {
  primaryType: string;
  name: string;
  slug: string;
}) {
  return (
    <SEO
      title={`${name} Integrations - Best Data App Integration Tools`}
      description={`The Grouparoo ${name} integration allows you to sync all of your customer data that lives in various sources into ${name}. ✓ Start a free trial now!`}
      path={`/integrations/${primaryType}s/${slug}`}
      canonical={true}
    />
  );
}
