export default function SitemapSection({
  paths,
  background,
}: {
  paths: [];
  background: string;
}) {
  return <div>{paths.toString()}</div>;
}

// takes in the array of pages
// if present, use the first subdirectory (or second?) to generate a subheading if it doesn't exist
// then generate each line item
