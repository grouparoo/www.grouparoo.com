export { default, getStaticProps } from "../index";

export async function getStaticPaths() {
  const paths = [
    `/whats-new/page/1`,
    `/whats-new/page/2`,
    `/whats-new/page/3`,
    `/whats-new/page/4`,
    `/whats-new/page/5`,
  ];

  return {
    paths: paths,
    fallback: true,
  };
}
