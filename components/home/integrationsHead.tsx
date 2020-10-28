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
        <title>Grouparoo Integration: {name}</title>
        <meta
          name="description"
          content={`Sync your customer data with ${name}`}
        />
        <link
          rel="canonical"
          href={`http://www.grouparoo.com/integrations/${primaryType}s/${slug}`}
        />
      </Head>
    </>
  );
}
