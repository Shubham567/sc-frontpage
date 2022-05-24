import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import TopPlatformSection from "../../src/components/pages/Platform/TopSection/TopSection";
import Benefits from "../../src/components/pages/Platform/Benefits/Benefits";
import Features from "../../src/components/pages/Platform/Features/Features";
import Actions from "../../src/components/pages/Platform/Actions/Actions";
import OtherPlatformTab from "../../src/components/pages/Platform/OtherPlatformTab/OtherPlatformTab";
import Footer from "../../src/components/Footer";

const Platform = () => {
  return (
    <div>
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>
      <TopNav/>
      <main>
        <TopPlatformSection />
        <Benefits />
        <Features />
        <Actions />
        <OtherPlatformTab />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
