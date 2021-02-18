import Head from "next/head";
import { isBrowser } from "../utils/isBrowser";

export default function PlausibleAnalytics() {
  if (!isBrowser()) return null;

  return (
    <>
      <Head>
        <script
          data-domain="grouparoo.com"
          async
          defer
          src={`https://plausible.io/js/plausible.js`}
        />
      </Head>
    </>
  );
}
