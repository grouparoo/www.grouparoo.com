import DocPage, {
  getStaticProps as DocPageGetStaticProps,
  getStaticPaths as DocPageGetStaticPaths,
} from "./index";

export default function SectionDocPage(props) {
  return <DocPage {...props} />;
}

export async function getStaticProps(ctx) {
  return DocPageGetStaticProps(ctx);
}

export async function getStaticPaths() {
  return DocPageGetStaticPaths(2);
}
