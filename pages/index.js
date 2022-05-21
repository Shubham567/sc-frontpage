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
import DemoForm from "../src/components/pages/Home/DemoForm";
import {useDispatch} from "react-redux";
import {actionSetHomeDemoRequestForm} from "../src/store/reducers/homeReducer/homeReducerActions";
import ImageBesideText from "../src/components/ImageBesideText";

import livePairImg from "../assets/livePair.png";
import videoQuestionImg from "../assets/videoQuestion.png";
import HiringAssessment from "../src/components/Sections/HiringAssessmentPortal";
import PercentageView from "../src/components/Sections/PercentageView";
import Advantage from "../src/components/Sections/Advantage";

const primaryBgContents = [
  // Max 3 items
  {title: "Library", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {title: "AI Evaluation", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {title: "Proctoring", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
]


export default function Home() {
  const dispatch = useDispatch();
  const openModal = () => dispatch(actionSetHomeDemoRequestForm(true));

  return (
    <div className="relative">
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>

      {/*<TopEllipses className="absolute top-0 right-0 -z-50"  />*/}
      <TopNav/>

      <header className="bg-cover bg-no-repeat bg-right md:bg-center" style={{backgroundImage: "url(/images/cool-girl-bg.png)"}}>
        <Intro/>
      </header>
      <section>
        <PercentageView />
      </section>

      <aside>
        <CustomerList />
      </aside>

      {/*<aside>*/}
      {/*  <h3 className="hidden">Types of questions available at SkillCounty.com</h3>*/}
      {/*  <QuestionTags />*/}
      {/*</aside>*/}

      <main className="flex flex-col h-100">
        <HowToUse />
        <OnSolidBg contents={primaryBgContents}/>
        <ImageBesideText imageProps={{alt : "Live pair, collaborative coding interview", src: livePairImg}}
                         title="Live Pair"
                         content="Lorem ipsum dolor sit amet, consectetur adip"
                         controls={
                           <>
                             <Button variant="outlined" color="primary" onClick={openModal}>
                               Request Demo
                             </Button>
                             <Button variant="contained" color="primary">
                               Get Started
                             </Button>
                           </>
                         }
        />
        <ImageBesideText imageProps={{alt : "One way asynchronous video interview", src: videoQuestionImg}}
                         title="One way interview"
                         content="Lorem ipsum dolor sit amet, consectetur adip"
                         reverse
                         controls={
                           <>
                             <Button variant="outlined" color="primary" onClick={openModal}>
                               Request Demo
                             </Button>
                             <Button variant="contained" color="primary">
                               Get Started
                             </Button>
                           </>
                         }
        />

        <HiringAssessment />

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
      <section>
        <Advantage />
      </section>
      <Footer />
      <DemoForm />
    </div>
  )
}
