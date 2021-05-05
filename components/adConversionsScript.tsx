import Head from "next/head";
import { isBrowser } from "../utils/isBrowser";

export default function AdConversionsScript() {
  if (!isBrowser()) return null;

  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-467110449"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-467110449');`,
          }}
        />
      </Head>
    </>
  );
}
