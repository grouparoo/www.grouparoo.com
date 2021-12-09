import Document, { Html, Head, Main, NextScript } from "next/document";

const fontFamilies = [
  "IBM+Plex+Mono:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700",
  "IBM+Plex+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400",
  "Inter:wght@100;300;400;500;700;900",
];
const fontUrl = `https://fonts.googleapis.com/css2?${fontFamilies
  .map((f) => `family=${f}`)
  .join("&")}&display=swap`;

// we are doing what next suggests on https://nextjs.org/docs/advanced-features/custom-document, but we have type errors
// @ts-ignore
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Fonts */}
          <link href={fontUrl} rel="stylesheet" />

          {/* Google Tag Manager + Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
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

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
