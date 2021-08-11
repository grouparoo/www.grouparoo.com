import "../scss/grouparoo.scss";
import "../components/icons"; // this is needed to load the library
import Layout from "../components/layouts/main";
import FloatingLayout from "../components/layouts/floating";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { googleAnalyticsPageView } from "../components/googleAnalytics";

export default function GrouparooWWW(props) {
  const { Component } = props;
  const router = useRouter();

  useEffect(() => {
    storeInSession();

    function handleRouteChange(url: string) {
      googleAnalyticsPageView(url);
      scrollToTop();
    }

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.asPath, router.isReady]);

  function storeInSession() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", globalThis.location.pathname);

    Object.keys(router.query)
      .filter((k) => k.match(/^utm_*/))
      .forEach((k) => {
        const tmp = router.query[k];
        const value = Array.isArray(tmp) ? tmp[0] : tmp;
        storeQueryToSession(storage, k, value);
      });
  }

  function scrollToTop() {
    globalThis.scrollTo(0, 0);
  }

  function storeQueryToSession(storage: Storage, key: string, value: string) {
    if (!value) return;
    const existing = storage.getItem(key);
    if (!existing) storage.setItem(key, value);
  }

  if (router.pathname === "/trial" || router.pathname === "/trial_landing") {
    return (
      <FloatingLayout>
        <Component {...props} />{" "}
      </FloatingLayout>
    );
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}
