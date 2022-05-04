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
import Button from "../src/components/Button";
import ThreeCards from "../src/components/ThreeCards";

const primaryBgContents = [
  // Max 3 items
  {title: "Library", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {title: "AI Evaluation", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {title: "Proctoring", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
]


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
        <OnSolidBg contents={primaryBgContents}/>
        <SectionWithCardsAndButtons
          topCardHeading={"One Way Interview"}
          topCardContent={"Lorem ipsum dolor sit amet,"}
          mainHeading="One way Interview"
          mainContent="Lorem ipsum dolor sit amet"
          mainControls={<>
            <Button variant="outlined" color="primary">
              Request Demo
            </Button>
            <Button variant="contained" color="primary">
              Get Started
            </Button>
          </>}
        />
        <SectionWithCardsAndButtons  reverse
                                     topCardHeading={"Live Pair"}
                                     topCardContent={"Lorem ipsum dolor sit amet,"}
                                     mainHeading="Live Pair"
                                     mainContent="Lorem ipsum dolor sit amet"
                                     mainControls={<>
                                       <Button variant="outlined" color="primary">
                                         Request Demo
                                       </Button>
                                       <Button variant="contained" color="primary">
                                         Get Started
                                       </Button>
                                     </>}
        />
        <ThreeCards data={[
          {heading: "Customized Assessment", content: "Team SupportLorem ipsum dolor sit amet"},
          {heading: "Downloadable Report", content: "Lorem ipsum dolor sit amet"},
          {heading: "Question Types", content: "Lorem ipsum dolor sit amet"},]} />
        <ThreeCards mainTitle={"Enterprise Ready"}
          bgColor="primary" data={[
          {heading: "Team Support", content: "Team SupportLorem ipsum dolor sit amet"},
          {heading: "ATS Integration", content: "Lorem ipsum dolor sit amet"},
          {heading: "WorkSpace", content: "Lorem ipsum dolor sit amet"},
        ]}/>
        <UseCases />

      </main>

      <OnTopBgTrapez />
      <Footer />
    </div>
  )
}
