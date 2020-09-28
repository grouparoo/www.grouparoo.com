import BlogIndex from "../index";
import { useRouter } from "next/router";

export default function BlogIndexWithCategory() {
  const router = useRouter();
  const { author } = router.query;
  return <BlogIndex author={Array.isArray(author) ? author[0] : author} />;
}
