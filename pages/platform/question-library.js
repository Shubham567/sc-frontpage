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
        <TopPlatformSection {...topRawData} />
        {/*<Benefits benefitsData={benefitsData} />*/}
        <Features featureData={featureData} />
        <Actions actionData={actionData} />
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


const featureData = [
  {
    id: 1,
    image: <Image src="/images/young-businesswoman.png" width="700px" height="400px"/>,
    heading: "Variety of Questions for a variety of roles",
    description: "SkillCounty’s Premium library has hundreds of questions that cover a wide range of skills & roles. These questions have been designed by subject matter experts. These experts continuously curate this library to ensure the best quality questions find a home there and leaked questions are pruned out. ",
    direction: "flex-col xl:flex-row"
  },
  {
    id: 2,
    image: <Image src="/images/young-businesswoman.png" width="700px" height="400px"/>,
    heading: "A library of your own! ",
    description: "If you have a team of specialists, you can develop your own pool of questions and save them in your private library.\n",
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
  heading : "Hundred of expert designed questions covering a wide range of skills",
  description: "Craft high quality assessments from SkillCounty’s extensive library of expert designed questions or deploy your own experts to create your private library."
}


