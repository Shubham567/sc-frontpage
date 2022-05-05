import TopNav from "../src/components/TopNav";
import appDetails from "../config/appDetails";
import Head from "next/head";
import React from "react";
import OnTopBgTrapez from "../src/components/pages/Home/OnTopBgTrapez";
import TopEllipses from "../src/components/svgs/TopEllipses";
import Footer from "../src/components/Footer";
import DemoForm from "../src/components/pages/Home/DemoForm";


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
          <h1 className="text-3xl text-primary">About us </h1>
          <p>
            SkillCounty.com is a registered trademark of S759Labs Technology LLP, C-5, Grafikon Paradise NIBM Road, Khondwa Bk, Pune - 411048, Maharashtra. S759Labs Technology LLP was incorporated in the year 2021. We provide the most flexible assessment platform for pre-employment assessments, virtual campus hirings, college entrance exams etc.
          </p>
          <p>
            At present we serve across India. We help our customers in conduction any kind of assessments effortlessly at an affordable price. Contact us on contact@skillcounty.com to learn more.
          </p>
        </div>
      </main>
      <DemoForm />

      <OnTopBgTrapez />
      <Footer />
    </div>
  )
}
