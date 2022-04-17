import Image from 'next/image'
import TopNav from "../src/components/TopNav";
import appDetails from "../config/appDetails";
import Head from "next/head";
import Intro from "../src/components/pages/Home/Intro";
import BgTopVector from "../src/components/svgs/BgTopVector";
import React from "react";
import useScreenSize from "../src/hooks/useScreenSize";


export default function Home() {

  const screen  = useScreenSize();

  return (
    <div className="relative">
      <Head>
        <title>{appDetails.title}</title>
\-        <meta name="description" content={appDetails.metaDescription} />
      </Head>


      <TopNav/>
      <BgTopVector  className={"absolute top-0 -mt-10 -z-10"} height={screen.height} width={screen.width} />
      <header>
        <Intro/>

      </header>

     <main className="flex h-100 w-100 text-xl">

     </main>

    </div>
  )
}
