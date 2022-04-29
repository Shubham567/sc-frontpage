import TopNav from "../src/components/TopNav";
import appDetails from "../config/appDetails";
import Head from "next/head";
import Intro from "../src/components/pages/Home/Intro";
import React from "react";
import CustomerList from "../src/components/pages/Home/CustomerList";
import QuestionTags from "../src/components/pages/Home/QuestionTags";
import OnTopBgTrapez from "../src/components/pages/Home/OnTopBgTrapez";
import HowToUse from "../src/components/pages/Home/HowToUse";
import OnSolidBg from "../src/components/pages/Home/OnSolidBg";
import SectionWithCardsAndButtons from "../src/components/pages/Home/SectionWithCardsAndButtons";
import TopEllipses from "../src/components/svgs/TopEllipses";
import Footer from "../src/components/Footer";
import UseCases from "../src/components/pages/Home/UseCases";


export default function Home() {

  return (
    <div className="relative">
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>

      <TopEllipses className="absolute top-0 right-0 -z-50"  />
      <TopNav/>


      <header>
        <Intro/>
      </header>

      <aside>
        <CustomerList />
      </aside>

      <aside>
        <h3 className="hidden">Types of questions available at SkillCounty.com</h3>
        <QuestionTags />
      </aside>

     <main className="flex flex-col h-100">
       <HowToUse />
       <OnSolidBg />
       <SectionWithCardsAndButtons  />
       <SectionWithCardsAndButtons  reverse/>
       <UseCases />
     </main>

      <OnTopBgTrapez />
      <Footer />
    </div>
  )
}
