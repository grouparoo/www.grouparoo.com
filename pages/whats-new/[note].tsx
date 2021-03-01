import ReleaseIndex from "./index";
import { getReleasePaths, getReleaseNote } from "../../utils/releaseNotes";

export default function Note({ pageProps }) {
  return ReleaseIndex({ pageProps });
}

export async function getStaticProps(ctx) {
  const slug = ctx.params.note;
  const note = await getReleaseNote(slug);

  return { props: { feature: note } };
}

export async function getStaticPaths() {
  return getReleasePaths();
}
