import Head from "next/head";

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
    <>
      <Head>
        <title>{name} Integrations - Best Data App Integration Tools</title>
        <meta
          name="description"
          content={`Grouparoo's ${name} integration allows you to sync all of your customer data that lives in various sources into ${name}. ✓ Start a free trial now!`}
        />
        <link
          rel="canonical"
          href={`https://www.grouparoo.com/integrations/${primaryType}s/${slug}`}
        />
      </Head>
    </>
  );
}
