import "../scss/grouparoo.scss";
import "../components/icons"; // this is needed to load the library
import Layout from "../components/layouts/main";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function GrouparooWWW(props) {
  const { Component } = props;
  const router = useRouter();

  useEffect(() => {
    setCookies();

    router.events.on("routeChangeComplete", scrollToTop);

    return () => {
      router.events.off("routeChangeComplete", scrollToTop);
    };
  }, [router.asPath]);

  function setCookies() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  function scrollToTop() {
    globalThis.scrollTo(0, 0);
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}
