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
import constants from "../../src/Constants/Constants";

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
        <Features featureData={featureData} />
        <OtherPlatformTab pageInfo={constants.assessmentMarketPlace} />
      </main>
      <Footer />
    </div>
  );
};

export default Platform;


const featureData = [
  {
    id: 1,
    image: <Image src="/images/platform/pre-designed-assessment-for-wide-range.png" alt="Pre-designed assessments for a wide range of roles" width="700px" height="400px"/>,
    heading: "Pre-designed assessments for a wide range of roles",
    description: "SkillCounty’s Assessment Marketplace offers a number of assessments for a variety of roles. So whether you are looking for a Java engineer, engineering manager, sales associate or customer service representative, we have got you covered.",
    direction: "flex-col xl:flex-row"
  },
  {
    id: 2,
    image: <Image src="/images/platform/start-your-evaluation-process.png" alt="Start your evaluation process right away" width="700px" height="400px"/>,
    heading: "Start your evaluation process right away",
    description: "It takes less than 2 mins. Go to SkillCounty's Assessment MarketPlace, search for assessments for the specific role you are recruiting for, choose an assessment that meets your needs and start inviting candidates to take the assessment. That's all you need to get this ball rolling.",
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
  heading: "Assessment Marketplace",
  description: "Save yourself time by selecting pre-designed assessments that cover all the important skills required the specific role you are looking to fill",
  descriptionTitle: "Expert crafted role specific assessments",
  image: <Image src="/images/platform/hands-holding-shopping-cart.png" alt="hands holding shopping cart" height="821px" width="868px"/>
}


