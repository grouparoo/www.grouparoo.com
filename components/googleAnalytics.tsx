import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";

const GoogleAnalyticsTrackingID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

function GoogleAnalytics() {
  useEffect(() => {
    if (!GoogleAnalyticsTrackingID) return;

    const scriptContent = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GoogleAnalyticsTrackingID}');
`;

    const script = document.createElement("script");
    script.innerHTML = scriptContent;
    document.body.appendChild(script);

    Router.events.on("routeChangeComplete", () => pageView());
  }, []);

  function pageView() {
    // @ts-ignore
    gtag("event", "page_view", { send_to: GoogleAnalyticsTrackingID });
  }

  if (!GoogleAnalyticsTrackingID) return null;

  return (
    <>
      <Head>
        <script
          key="googleAnalytics"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsTrackingID}`}
        />
      </Head>
    </>
  );
}

export default GoogleAnalytics;
