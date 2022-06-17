import TopNav from "../src/components/TopNav";
import appDetails from "../config/appDetails";
import Head from "next/head";
import React from "react";
import OnTopBgTrapez from "../src/components/pages/Home/OnTopBgTrapez";
import Footer from "../src/components/Footer";


export default function RefundPolicyPage() {

  return (
    <div className="relative">
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>


      <TopNav/>

      <main className="p-8 pt-20 pb-40 flex justify-center bg-white">
        <div className="max-w-3xl flex flex-col justify-center gap-8">
          <h1 className="text-3xl text-primary">SkillCounty Refund & Cancellation Policy </h1>
          <p>Due to the nature of the service provided “NO REFUND”,“NO CANCELLATION” will be entertained once the Payment has been made</p>
        </div>
      </main>


      <OnTopBgTrapez />
      <Footer />
    </div>
  )
}
