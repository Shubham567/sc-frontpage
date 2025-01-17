import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import Features from "../../src/components/Common-Section-style/Features/Features";
import Actions from "../../src/components/Common-Section-style/Actions/Actions";
import OtherPlatformTab from "../../src/components/Common-Section-style/OtherPlatformTab/OtherPlatformTab";
import Footer from "../../src/components/Footer";
import Image from "next/image";
import TopSectionNew from "../../src/components/pages/Platform/TopSection/TopSectionNew";
// import {router} from "next/client";
import varietyOfQuestions from "/assets/platforms/Variety of Questions for a variety of roles.png";
import ownLibrary from "/assets/platforms/A library of your own.png";
import constants from "../../src/Constants/Constants";
import CommonHead from "../../src/components/CommonHead";


const Platform = () => {
  return (
    <div>
      <CommonHead title="Question Library"
                  metaDescription="Hire with evidence and build great teams using SkillCounty Assessment Platform that works for any role. SkillCounty offers hundreds of expert crafted questions  that you can use to swiftly create high-quality assessments for a wide range of roles"
      />
      <TopNav/>
      <main>
        {/*<TopPlatformSection {...topRawData} />*/}
        <TopSectionNew {...topRawData} />
        {/*<Benefits benefitsData={benefitsData} />*/}
        <Features featureData={featureData} />
        <Actions actionData={actionData} />
        <OtherPlatformTab pageInfo={constants.questionLibrary} />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;

const actionData = [
  {
    id: 1,
    heading: <div>Build the best teams with the <span className="font-bold text-4xl">most affordable</span> solution
    </div>,
    buttonLabel: "Check Pricing",
  },
];


const featureData = [
  {
    id: 1,
    image: <Image src={varietyOfQuestions} alt="Variety of Questions for a variety of roles" width="700px" height="400px"/>,
    heading: "Variety of Questions for a variety of roles",
    description: "SkillCounty’s Premium library has hundreds of questions that cover a wide range of skills & roles. These questions have been designed by subject matter experts. These experts continuously curate this library to ensure the best quality questions find a home there and leaked questions are pruned out. ",
    direction: "flex-col xl:flex-row"
  },
  {
    id: 2,
    image: <Image src={ownLibrary} alt="A library of your own" width="700px" height="400px"/>,
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
  heading: "Question library",
  description: "Craft high quality assessments from SkillCounty’s extensive library of expert designed questions or deploy your own experts to create your private library.",
  descriptionTitle: "Hundred of expert designed questions covering a wide range of skills",
  image: <Image src="/images/platform/book-library.png" alt="collection of books" height="510px" width="480px"/>,
  imagePosition: "md:right-40 right-8 top-8 sm:top-16 md:top-28"
}

