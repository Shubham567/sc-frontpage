import TopNav from "../src/components/TopNav";
import Intro from "../src/components/pages/Home/Intro";
import React from "react";
import CustomerList from "../src/components/pages/Home/CustomerList";
import OnTopBgTrapez from "../src/components/pages/Home/OnTopBgTrapez";
import Footer from "../src/components/Footer";
import HiringAssessment from "../src/components/Sections/HiringAssessmentPortal";
import PercentageView from "../src/components/Sections/PercentageView";
import Advantage from "../src/components/Sections/Advantage";
import CommonHead from "../src/components/CommonHead";
import AlternateSlidePresentationForHome from "../src/components/pages/Home/v2/AlternateSlidePresentationForHome";
import HiringSolution from "../src/components/pages/Home/v2/HiringSolution";


export default function Home() {


  return (
    <div className="relative">
      <CommonHead title="Welcome to SkillCounty" metaDescription="Hire with evidence & build great teams using a Skill Platform that works for any role. SkillCounty Assessment Platform helps you hire at scale and provides the best value for money." />

      {/*<TopEllipses className="absolute top-0 right-0 -z-50"  />*/}
      <TopNav/>

      <header className="bg-cover bg-no-repeat bg-right md:bg-center"
              style={{backgroundImage: "url(/images/cool-girl-bg.jpg)"}}>
        <Intro/>
      </header>

      <main className="w-screen">

        <section>
          <PercentageView />
        </section>

        <section>
          <HiringSolution/>
        </section>

        <section >
          <AlternateSlidePresentationForHome />
        </section>

        <aside>
          <CustomerList />
        </aside>

        <section>
          <HiringAssessment />
        </section>

        <section>
          <OnTopBgTrapez />
        </section>

        <section>
          <Advantage />
        </section>

      </main>

      <Footer />


    </div>
  )
}
