import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import TopPlatformSection from "../../src/components/pages/Platform/TopSection/TopSection";
import Benefits from "../../src/components/Common-Section-style/Benefits/Benefits";
import Features from "../../src/components/Common-Section-style/Features/Features";
import Actions from "../../src/components/Common-Section-style/Actions/Actions";
import OtherPlatformTab from "../../src/components/Common-Section-style/OtherPlatformTab/OtherPlatformTab";
import Footer from "../../src/components/Footer";
import Image from "next/image";
import OnTopBgTrapez from "../../src/components/pages/Home/OnTopBgTrapez";
import TopSectionNew from "../../src/components/pages/Platform/TopSection/TopSectionNew";
import codingLibrary from "/assets/platforms/Comprehensive library of coding-design questions.png";
import constants from "../../src/Constants/Constants";

const Platform = () => {
  return (
    <div>
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>
      <TopNav/>
      <main>
        {/*<TopPlatformSection {...topRawData} />*/}
        <TopSectionNew {...topRawData} />
        <Features featureData={featureData} />
        <OnTopBgTrapez bgFillColor={"fill-orange-light"} headColor="text-dark" contentColor="text-primary"/>
        <OtherPlatformTab pageInfo={constants.codingAssessmentsAndInterviews} />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;


const featureData = [
  {
    id: 1,
    image: <Image src="/images/platform/best-in-class-developer-hiring.png" alt="Best in class developer hiring experience" width="700px" height="400px"/>,
    heading: "Best in class developer hiring experience",
    description: "SkillCounty supports a wide variety of programming languages and provides a sophisticated online code editor with intellisense. It even integrates with desktop coding environments for candidates who find online coding limiting. Infact, SkillCounty is the only assessment platform to offer an integrated online to desktop coding assessment and remote interview candidate experience.",
    direction: "flex-col xl:flex-row"
  },
  {
    id: 2,
    image: <Image src={codingLibrary} alt="Comprehensive library of coding & design questions" width="700px" height="400px"/>,
    heading: "Comprehensive library of coding & design questions",
    description: "SkillCounty offers a large library of coding & design questions that you can use to identify the top engineers. This library is curated by a team of experts and covers knowledge of algorithms, data structures, language constructs/syntax and specific technologies (like AI/ML libraries, hadoop, AWS etc.)",
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
  heading: "Coding Assessments and Interviews",
  description: "With SkillCounty, you can conduct coding assessments, hackathons, remote coding interviews and remote design interviews. You can assess technical skills along with important adjacent skills that software engineers require like  planning, teamwork, execution, and communication.",
  descriptionTitle: "Find the best software engineers using coding assessments, hackathons and remote coding & design interviews",
  image: <Image src="/images/platform/Coding Interviews.png" alt="proctoring based image" height="632px" width="948px"/>,
  imagePosition: "top-16 md:top-32"
}


