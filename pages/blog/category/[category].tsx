import BlogIndex from "../index";
import { useRouter } from "next/router";

export default function BlogIndexWithCategory() {
  const router = useRouter();
  const { category } = router.query;
  return (
    <BlogIndex category={Array.isArray(category) ? category[0] : category} />
  );
}
