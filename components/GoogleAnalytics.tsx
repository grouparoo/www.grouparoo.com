import React, { useEffect } from "react";
import Head from "next/head";

const GoogleAnalyticsTrackingID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

export function googleAnalyticsPageView(url: string) {
  if (globalThis?.gtag) {
    globalThis.gtag("config", GoogleAnalyticsTrackingID, { page_path: url });
  }
}
