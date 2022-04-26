import Image from 'next/image'
import TopNav from "../src/components/TopNav";
import appDetails from "../config/appDetails";
import Head from "next/head";
import Intro from "../src/components/pages/Home/Intro";
import BgTopVector from "../src/components/svgs/BgTopVector";
import React from "react";
import useScreenSize from "../src/hooks/useScreenSize";
import CustomerList from "../src/components/pages/Home/CustomerList";
import QuestionTags from "../src/components/pages/Home/QuestionTags";
import OnTopBgTrapez from "../src/components/pages/Home/OnTopBgTrapez";
import HowToUse from "../src/components/pages/Home/HowToUse";
import OnSolidBg from "../src/components/pages/Home/OnSolidBg";


export default function Home() {

  const screen  = useScreenSize();

  return (
    <div className="relative">
      <Head>
        <title>{appDetails.title}</title>
\-        <meta name="description" content={appDetails.metaDescription} />
      </Head>


      <TopNav/>
      {/*<BgTopVector  className={"absolute top-0 -mt-10 -z-10"} height={screen.height} width={screen.width} />*/}
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
       <OnTopBgTrapez />
       <HowToUse />
       <OnSolidBg />
     </main>

    </div>
  )
}
