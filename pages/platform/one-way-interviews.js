import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import Features from "../../src/components/Common-Section-style/Features/Features";
import OtherPlatformTab from "../../src/components/Common-Section-style/OtherPlatformTab/OtherPlatformTab";
import Footer from "../../src/components/Footer";
import Image from "next/image";
// import betterWayImage from "/assets/platforms/Better-way-to-screen-applicants.png";
import TopSectionNew from "../../src/components/pages/Platform/TopSection/TopSectionNew";
import constants from "../../src/Constants/Constants";
import CommonHead from "../../src/components/CommonHead";

const Platform = () => {
  return (
    <div>
      <CommonHead title="One way interview, Audio - Video Questions"
                  metaDescription="Hire with evidence & build great teams using a Skill Platform that works for any role. With one way interviews or asynchronous interviews SkillCounty saves you time and enables you to assess soft skills like communication, presentation and more."
      />
      <TopNav/>
      <main>
        {/*<TopPlatformSection {...topRawData} />*/}
        <TopSectionNew {...topRawData} />
        <Features featureData={featureData} />
        <OtherPlatformTab pageInfo={constants.oneWayInterviewsOrAsynchronousInterviews} />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;


const featureData = [
  {
    id: 1,
    image: <Image src={'/images/platform/accelerate-the-hiring-process.png'} alt="Accelerate the hiring process" width="700px" height="400px"/>,
    heading: "Accelerate the hiring process",
    description: "With SkillCounty’s one way interviews, there is no need to scan schedules for a common slot. Candidates can record and submit their answers to your questions at their pace and time. So, in just a matter of minutes, you can schedule several one-way interviews and then review the answers at your own pace.  This is such an easy way to scale the hiring team and assess soft skills without the need to undertake expensive and effort intensive in-person interviews.",
    direction: "flex-col xl:flex-row"
  },
  {
    id: 2,
    image: <Image src={'/images/platform/better-way-to-access-soft-skills.png'} alt="Better way to assess soft skills" width="700px" height="400px"/>,
    heading: "Better way to assess soft skills",
    description: "There are certain roles where soft skills like communication & presentation skills are extremely important. For example sales, teaching, management and customer service roles.  With SkillCounty’s one way interviews, you can cast a wider net and truly assess these skills in the early stages of the hiring process, thereby bringing high quality candidates to the later more effort intensive and expensive stages.",
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
  heading: "One way Interviews or Asynchronous Interviews",
  description: "Skip scheduling woes, save time and unambiguously access communication skills and more using asynchronous interviews",
  descriptionTitle: "Accelerate hiring with one way audio and video interviews",
  image: <Image src="/images/platform/one-way-interview.png" alt="one way interview" height="614px" width="908px"/>,
  imagePosition: "top-24 sm:top-28"
}



