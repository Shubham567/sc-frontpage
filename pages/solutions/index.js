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
import ScaleHiring from "../../src/components/Common-Section-style/ScaleHiring/ScaleHiring";
import TopSectionForSolution from "../../src/components/pages/Ssolutions/TopSection";

const actionHandler = ({actionData}) => {
  console.log("Button Clicked")
}

const requestDemo = () => {

}

const calculateROI = () => {

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
        {/*<TopPlatformSection {...topRawData} hideBg={"invisible"} />*/}
        <TopSectionForSolution {...topRawData} />
        <Benefits benefitsData={benefitsData} />
        <Features featureData={featureData1} />
        <ScaleHiring title={"Hire Affoardably At Scale"} requestDemo={requestDemo} calculateROI={calculateROI} />
        <Features featureData={featureData2} />
        <Actions actionData={actionData} />
        <Features featureData={featureData3} />
        <OtherPlatformTab tabData={tabData} />
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

const benefitsData = [
  {
    id: 1,
    image:  <Image src="/images/platform/random.png" width="158px" height="81px" />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
  {
    id: 2,
    image:  <Image src="/images/platform/random.png" width="158px" height="81px" />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
  {
    id: 3,
    image:  <Image src="/images/platform/random.png" width="158px" height="81px" />,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
];

const featureData1 = [
  {
    id: 1,
    image: <Image src="/images/solutions/young-smiley-businessWomen.png" alt="Young smiley business women" width="700px" height="400px"/>,
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    direction: "flex-col xl:flex-row-reverse"
  },
  {
    id: 2,
    image: <Image src="/images/solutions/large-group-diverse-people.png" alt="large group diverse people" width="700px" height="400px"/>,
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    direction: "flex-col xl:flex-row"
  }
];

const featureData2 = [
  {
    id: 1,
    image: <Image src="/images/solutions/portrait-african-american.png" alt="Portrait african american" width="700px" height="400px"/>,
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    direction: "flex-col xl:flex-row-reverse"
  },
  {
    id: 2,
    image: <Image src="/images/solutions/contract-male-sunny-sand-career.png" alt="Contract male sunny sand career" width="700px" height="400px"/>,
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    direction: "flex-col xl:flex-row"
  }
];

const featureData3 = [
  {
    id: 1,
    image: <Image src="/images/solutions/free-time-students-bachelor-s-campus-life.png" alt="Free time students bachelor school/college camus life" width="700px" height="400px"/>,
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    direction: "flex-col xl:flex-row-reverse"
  },
  {
    id: 2,
    image: <Image src="/images/solutions/closeup-person-filling-out-questionary-form.png" alt="closeup person filling out questionary form" width="700px" height="400px"/>,
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam.",
    direction: "flex-col xl:flex-row"
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
  heading : "Hiring Assessment Platform",
  description: "Upgrade your hiring. Use SkillCounty Assessment Platform to hire the right candidates faster and more efficiently."
}

