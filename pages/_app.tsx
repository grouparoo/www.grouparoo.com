import "../scss/grouparoo.scss";
import "../components/Icons"; // this is needed to load the library
import Layout from "../components/layouts/Main";
import FloatingLayout from "../components/layouts/Floating";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { googleAnalyticsPageView } from "../components/GoogleAnalytics";
import SSRProvider from "react-bootstrap/SSRProvider";

export default function GrouparooWWW(props) {
  const { Component } = props;
  const router = useRouter();

  const storeInSession = useCallback(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) {
      return;
    }

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
  }, [router.query]);

  useEffect(() => {
    storeInSession();
    router.events.on("routeChangeComplete", googleAnalyticsPageView);

    return () => {
      router.events.off("routeChangeComplete", googleAnalyticsPageView);
    };
  }, [router.asPath, router.events, router.isReady, storeInSession]);

  function storeQueryToSession(storage: Storage, key: string, value: string) {
    if (!value) return;
    const existing = storage.getItem(key);
    if (!existing) storage.setItem(key, value);
  }

  if (router.pathname === "/trial" || router.pathname === "/trial_landing") {
    return (
      <SSRProvider>
        <FloatingLayout>
          <Component {...props} />{" "}
        </FloatingLayout>
      </SSRProvider>
    );
  }

  return (
    <SSRProvider>
      <Layout>
        <Component {...props} />
      </Layout>
    </SSRProvider>
  );
}
