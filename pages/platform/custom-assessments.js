import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import Features from "../../src/components/Common-Section-style/Features/Features";
import OtherPlatformTab from "../../src/components/Common-Section-style/OtherPlatformTab/OtherPlatformTab";
import Footer from "../../src/components/Footer";
import Image from "next/image";
import OnTopBgTrapez from "../../src/components/pages/Home/OnTopBgTrapez";
import TopSectionNew from "../../src/components/pages/Platform/TopSection/TopSectionNew";
import constants from "../../src/Constants/Constants";
import CommonHead from "../../src/components/CommonHead";

const Platform = () => {
  return (
    <div>
      <CommonHead title="Custom Assessments"
                  metaDescription="Hire with evidence & build great teams using a Skill Platform that works for any role. You can build custom assessments or use SkillCounty’s expert designed assessments to hire engineers, developers, teachers, marketing associates and more."
      />
      <TopNav/>
      <main>
        {/*<TopPlatformSection {...topRawData} />*/}
        <TopSectionNew {...topRawData} />
        <Features featureData={featureData} />
        <OnTopBgTrapez bgFillColor={"fill-orange-light"} headColor="text-dark" contentColor="text-primary"/>
        <OtherPlatformTab pageInfo={constants.customAssessments} />

      </main>
      <Footer />
    </div>
  );
};

export default Platform;


const featureData = [
  {
    id: 1,
    image: <Image src="/images/platform/types-of-assessments.png" alt="Make your own assessments" width="700px" height="400px"/>,
    heading: "Make your own assessments ",
    description: "Create an assessment from the ground up using a wide variety of question types like MCQ, MSQ, Open ended, audio/video based, passage based and more, to examine the technical and other abilities of the candidates. \n",
    direction: "flex-col xl:flex-row"
  },
  {
    id: 2,
    image: <Image src="/images/platform/create-assessment.png" alt="Create assessments within minutes!" width="700px" height="400px"/>,
    heading: "Create assessments within minutes!",
    description: "Create an assessment that contains questions from both your experts and our experts using SkillCounty's premium questions and assessment collection, and you'll have a full-fledged assessment in minutes. ",
    direction: "flex-col xl:flex-row-reverse"
  }
];

const tabData = [
  {
    id: 1,
    heading: "Team Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
  },
  {
    id: 2,
    heading: "ATS Integration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
  },
  {
    id: 3,
    heading: "Workspace",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
  }
];

const topRawData = {
  heading: "Customizable assessments",
  descriptionTitle: "Customize assessments for the right fit ",
  description: "Create assessments from scratch or use the SkillCounty Premium library to mix and match questions to assess different skills in one assessment.",
  image: <Image src="/images/platform/hand-and-pen.png" alt="hand with a pen" height="834px" width="890px"/>,
  imagePosition: "top-16 sm:top-0"
}


