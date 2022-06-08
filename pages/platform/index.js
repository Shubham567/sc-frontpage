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
import TopSectionNew from "../../src/components/pages/Platform/TopSection/TopSectionNew";
import ScaleHiring from "../../src/components/Common-Section-style/ScaleHiring/ScaleHiring";

const actionHandler = ({actionData}) => {
  console.log("Button Clicked")
}

const requestDemo = () => {
};
const calculateROI = () => {
};

const Platform = () => {
  return (
    <div>
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription}/>
      </Head>
      <TopNav/>
      <main>
        {/*<TopPlatformSection {...topRawData} />*/}
        <TopSectionNew {...topRawData} />
        {/*<Benefits benefitsData={benefitsData} />*/}
        <Features featureData={featureData}/>
        <ScaleHiring
          title={"Hire Affoardably At Scale"}
          description="Decrease your time to hire and increase your hiring pool with a platform that offers the value in the market"
          requestDemo={requestDemo}
          calculateROI={calculateROI}
        />
        {/*<Actions actionData={actionData} />*/}
        <OtherPlatformTab tabData={tabData}/>
      </main>
      <Footer/>
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

const benefitsData = [
  {
    id: 1,
    image: <Image src="/images/platform/random.png" width="158px" height="81px"/>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
  {
    id: 2,
    image: <Image src="/images/platform/random.png" width="158px" height="81px"/>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
  {
    id: 3,
    image: <Image src="/images/platform/random.png" width="158px" height="81px"/>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
  {
    id: 4,
    image: <Image src="/images/platform/random.png" width="158px" height="81px"/>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  }
];

const featureData = [
  {
    id: 1,
    image: <Image src="/images/platform/types-of-assessments.png" width="700px" height="400px"/>,
    heading: "Make your own assessments",
    description: "Create a test from the ground up using a wide variety of question types like MCQ, MSQ, Open ended, audio based, passage based and more, to examine the technical and other abilities of the candidates. ",
    direction: "flex-col-reverse xl:flex-row"
  },
  {
    id: 2,
    image: <Image src="/images/platform/create-assessment.png" width="700px" height="400px"/>,
    heading: "Create assessments within minutes!",
    description: "Create a test that contains questions from both your experts and our experts using SkillCounty's premium questions and test collection, and you'll have a full-fledged assessment in minutes.",
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
  heading: "Customizable assessments",
  description: "Create assessments from scratch or use the SkillCounty Premium library to mix and match questions to assess different skills in one assessment."
}


