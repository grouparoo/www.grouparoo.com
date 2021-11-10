import Head from "next/head";

const DescriptionTags = ({ description }: { description?: string }) => {
  if (!description || description.length === 0) return null;

  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

const ImageTags = ({ image }: { image?: string }) => {
  if (!image || image.length === 0) return null;

  return (
    <Head>
      <meta name="image" content={image} />
      <meta name="og:image" content={image} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

const getTwitterCardType = ({ image, twitterCard }) => {
  if (twitterCard && twitterCard.length > 0) return twitterCard;
  return image ? "summary_large_image" : "summary";
};

const SEO = ({
  canonical,
  description,
  image,
  title,
  twitterAuthor,
  twitterCard,
  path,
  noIndex = false,
}: {
  canonical?: boolean;
  description?: string;
  image?: string;
  title: string;
  twitterAuthor?: string;
  twitterCard?: string;
  path: string;
  noIndex?: boolean;
}) => {
  if (!path || !title) {
    console.error(`path and title are required for SEO component.`);
  }

  const baseUrl = `https://www.grouparoo.com`;
  const url = `${baseUrl}${path}`;

  let imageUrl;
  if (image) {
    imageUrl = !image.startsWith("http") ? `${baseUrl}/images/${image}` : image;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <DescriptionTags description={description} />
      <ImageTags image={imageUrl} />

      <Head>
        {canonical && <link rel="canonical" href={url} />}

        <meta
          name="twitter:card"
          content={getTwitterCardType({ image, twitterCard })}
        />
        <meta name="twitter:site" content="@grouparoo" />
        <meta name="twitter:creator" content={twitterAuthor || "@grouparoo"} />
        {noIndex ? <meta name="robots" content="noindex" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
      </Head>
    </>
  );
};

export default SEO;
