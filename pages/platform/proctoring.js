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
import DemoForm from "../../src/components/pages/Home/DemoForm";
import TopSectionNew from "../../src/components/pages/Platform/TopSection/TopSectionNew";
import preventImpersonation from "/assets/platforms/prevent-impersonation-via-screenshot.png";
import additionalPlagiarismProtection from "/assets/platforms/additional-plagiarism-protection-measures.png";
import restrictIPAddress from "/assets/platforms/Restrict IP address for fair test taking.png";
import constants from "../../src/Constants/Constants"

const actionHandler = ({actionData}) => {
  console.log("Button Clicked")
}

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
        <Features featureData={featureData1} />
        <OnTopBgTrapez bgFillColor={"fill-orange-light"} headColor="text-dark" contentColor="text-primary"/>
        <Features featureData={featureData2} />
        <OtherPlatformTab pageInfo={constants.proctoring} />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;

const actionData = [
  {
    id: 1,
    heading: "Lorem ipsum dolor sit amet Lorem ipsum ",
    buttonLabel: "Button",
    actionHandler: actionHandler
  },
  {
    id: 2,
    heading: "Lorem ipsum dolor sit amet Lorem ipsum ",
    buttonLabel: "Button",
    actionHandler: actionHandler
  }
];


const featureData1 = [
  {
    id: 1,
    image: <Image src="/images/platform/copy-paste-tracking.png" alt="Copy - paste tracking to curb plagiarism" width="700px" height="400px"/>,
    heading: "Copy - paste tracking to curb plagiarism",
    description: "SkillCounty tracks any copy paste activity that the candidate does in or out of the assessment. Even the text that is copy-pasted is stored and made available as part of the assessment report. Copy-paste can also be disabled for a more stringent setup.",
    direction: "flex-col-reverse xl:flex-row"
  },
  {
    id: 2,
    image: <Image src={preventImpersonation} alt="Prevent impersonation via screenshot and candidate snapshot capture" width="700px" height="400px"/>,
    heading: "Prevent impersonation via screenshot and candidate snapshot capture",
    description: "SkillCounty takes snapshots of the candidate along with screenshots of the candidate’s device at random intervals. These images are used to report instances of a candidate not being in the frame, other people being in the frame, impersonation or even plagiarism.",
    direction: "flex-col-reverse xl:flex-row-reverse"
  }
];

const featureData2 = [
  {
    id: 1,
    image: <Image src={additionalPlagiarismProtection} alt="Additional Plagiarism Protection Measures" width="455px" height="493px"/>,
    heading: "Additional Plagiarism Protection Measures",
    description: "Exit full screen restrictions, time away from tab tracker, tab switch count, and more deter or detect unfair tactics used by some candidates to ace their assessments.",
    direction: "flex-col-reverse xl:flex-row"
  },
  {
    id: 2,
    image: <Image src={restrictIPAddress} alt="Restrict IP address for fair test taking" width="700px" height="400px"/>,
    heading: "Restrict IP address for fair test taking",
    description: "SkillCounty Assessments can be made to restrict IP addresses based on location. This feature is especially useful during campus recruitment or bulk recruiting drives where the candidate has to take the test from a specific location. ",
    direction: "flex-col-reverse xl:flex-row-reverse"
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
  heading: "Sophisticated Proctoring",
  description: "Ensure integrity of the assessment by tracking & recording candidate activity and setting up a controlled test environment",
  descriptionTitle: "Drive quality assessments with advanced proctoring capabilities",
  image: <Image src="/images/platform/proctoring.png" alt="proctoring based image" height="819px" width="900px"/>,
  imagePosition: "top-12"
}


