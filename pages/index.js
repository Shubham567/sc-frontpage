import TopNav from "../src/components/TopNav";
import Intro from "../src/components/pages/Home/Intro";
import React from "react";
import CustomerList from "../src/components/pages/Home/CustomerList";
import OnTopBgTrapez from "../src/components/pages/Home/OnTopBgTrapez";
import HowToUse from "../src/components/pages/Home/HowToUse";
import OnSolidBg from "../src/components/pages/Home/OnSolidBg";
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
import CommonHead from "../src/components/CommonHead";

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
      <CommonHead title="Welcome to SkillCounty"/>

      {/*<TopEllipses className="absolute top-0 right-0 -z-50"  />*/}
      <TopNav/>

      <header className="bg-cover bg-no-repeat bg-right md:bg-center" style={{backgroundImage: "url(/images/cool-girl-bg.png)"}}>
        <Intro/>
      </header>
      <main>
        <PercentageView />
      </main>

      <aside>
        <CustomerList />
      </aside>

      <main>
          <HiringAssessment />
      </main>

      <OnTopBgTrapez />

      <main>
        <section>
          <Advantage />
        </section>
      </main>
      <Footer />
      <DemoForm />
    </div>
  )
}
