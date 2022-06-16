import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import Footer from "../../src/components/Footer";
import ContactUs from "../../src/components/pages/ContactUs/ContactUs";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription}/>
      </Head>
      <TopNav/>
      <main>
        <ContactUs />
      </main>
      <Footer/>
    </div>
  );
};

export default Contact;