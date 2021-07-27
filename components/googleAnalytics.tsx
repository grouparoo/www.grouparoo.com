import React, { useEffect } from "react";
import Head from "next/head";

const GoogleAnalyticsTrackingID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

function GoogleAnalytics() {
  useEffect(() => {
    if (!GoogleAnalyticsTrackingID) return;

    const scriptContent = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GoogleAnalyticsTrackingID}', {page_path: window.location.pathname});
`;

    const script = document.createElement("script");
    script.innerHTML = scriptContent;
    document.body.appendChild(script);
  }, []);

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
