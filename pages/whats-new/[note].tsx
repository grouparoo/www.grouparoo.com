import ReleaseIndex, { getStaticProps as parentStaticProps } from "./index";
import { getReleasePaths } from "../../utils/releaseNotes";

export default function Note({ pageProps }) {
  return ReleaseIndex({ pageProps });
}

export async function getStaticProps({ params }) {
  const parent = await parentStaticProps();
  const all = parent.props.notes;
  const notes = [];

  let feature = null;
  for (const note of all) {
    if (params.note === note.slug) {
      feature = note;
    } else {
      notes.push(note);
    }
  }

  if (!feature) {
    throw new Error(`Release note not found: ${params.note}`);
  }
  Object.assign(parent.props, { notes, feature });
  return parent;
}

export async function getStaticPaths() {
  return getReleasePaths();
}
