import "../scss/grouparoo.scss";
import "../components/icons"; // this is needed to load the library
import Layout from "../components/layouts/main";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

export default function GrouparooWWW(props) {
  const { Component } = props;
  const router = useRouter();

  useEffect(() => {
    storeInSession();

    router.events.on("routeChangeComplete", scrollToTop);

    return () => {
      router.events.off("routeChangeComplete", scrollToTop);
    };
  }, [router.asPath, router.isReady]);

  function storeInSession() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", globalThis.location.pathname);

    ["utm_source", "utm_medium", "utm_campaign"].forEach((q) =>
      storeQueryToSession(router.query, storage, q)
    );
  }

  function scrollToTop() {
    globalThis.scrollTo(0, 0);
  }

  function storeQueryToSession(
    query: ParsedUrlQuery,
    storage: Storage,
    key: string
  ) {
    const tmp = query[key];
    const value = Array.isArray(tmp) ? tmp[0] : tmp;
    const existing = storage.getItem(key);
    if (!existing && value) storage.setItem(key, value);
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}
