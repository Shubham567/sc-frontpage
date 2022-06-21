// noinspection HtmlRequiredTitleElement

import Document, {Head, Html, Main, NextScript} from 'next/document';
import appDetails from "../config/appDetails";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* Do NOT add title tag in this file*/}

          {/*Google font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet" />
          {/*Google font end*/}

          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json"/>
          <meta name="msapplication-TileColor" content="#000"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          {/* Social Media Links */}
          <meta name="theme-color" content="#ffffff"/>
          <meta property="og:title" content={appDetails.title} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/images/cool-girl.png" />
          <meta property="og:description" content={appDetails.metaDescription} />

          <meta name="twitter:title" content={appDetails.title} />
          <meta name="twitter:description" content={appDetails.metaDescription} />
          <meta name="twitter:image" content="/images/cool-girl.png" />
          <meta name="twitter:card" content="summary_large_image" />

        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
