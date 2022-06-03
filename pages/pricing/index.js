import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import OtherPlatformTab from "../../src/components/Common-Section-style/OtherPlatformTab/OtherPlatformTab";
import Footer from "../../src/components/Footer";
import Image from "next/image";
import OnTopBgTrapez from "../../src/components/pages/Home/OnTopBgTrapez";
import Pricing from "../../src/components/pages/Pricing/PriceList/Pricing";
import Feature from "../../src/components/pages/Pricing/Features/Features";
import TopSection from "../../src/components/pages/Pricing/Top-Section/TopSection";

const PricingMainPage = () => {
  return (
    <div>
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription}/>
      </Head>
      <TopNav/>
      <main>
        <section className="h-screen">
          <div style={{backgroundImage: "url(/images/pricing/bgTop.png)", height: "88%"}}
               className="w-full bg-no-repeat	bg-cover bg-dark">
            <TopSection/>
          </div>
        </section>
        <section>
          <Pricing pricingCardData={pricingCardData}/>
        </section>
        {/*<section>*/}
        {/*  <Feature />*/}
        {/*</section>*/}
        <section>
          <OnTopBgTrapez/>
        </section>
        <section className="mt-24">
          <OtherPlatformTab tabData={tabData}/>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default PricingMainPage;

const pricingCardData = [
  {
    id: 1,
    type: "Tiny",
    topSubHeading: "",
    priceMonth: "Free",
    priceYear: "Free",
    heading: "Warming up",
    subHeading: "Top Features",
    features: [
      {
        id: 1,
        disabled: false,
        title: "2 Assessment",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 2,
        disabled: false,
        title: "25 Candidates per month",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 3,
        disabled: false,
        title: "Limited Question Library Access",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 4,
        disabled: false,
        title: "Company Library",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 5,
        disabled: false,
        title: "Create unlimited questions",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 6,
        disabled: false,
        title: "All question types",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 7,
        disabled: false,
        title: "125 min AV question",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 8,
        disabled: false,
        title: "Upto 5 concurrent users",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 9,
        disabled: false,
        title: "5 Code Pair Assessment",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
    ]
  },

  {
    id: 2,
    type: "Basic",
    topSubHeading: "",
    priceMonth: 49,
    priceYear: 49*11,
    heading: "Getting there",
    subHeading: "Everything in free plus . . .",
    features: [
      {
        id: 1,
        disabled: false,
        title: "Unlimited Assessments",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 2,
        disabled: false,
        title: "300 Candidates per month",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 3,
        disabled: false,
        title: "Full Question Library Access",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 4,
        disabled: false,
        title: "500 mins AV question per month",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 5,
        disabled: false,
        title: "Upto 50 concurrent users",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 6,
        disabled: true,
        title: "Image based Proctoring",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 7,
        disabled: true,
        title: "Priority Email Support",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 8,
        disabled: true,
        title: "20 Live Pair interview",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
    ]
  },

  {
    id: 3,
    type: "Pro",
    topSubHeading: "*MOST POPULAR",
    priceMonth: 99,
    priceYear: 99*11,
    heading: "Striking Success",
    subHeading: "Basic plan plus . . .",
    features: [
      {
        id: 1,
        disabled: false,
        title: "Image & Screen Proctoring",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 2,
        disabled: false,
        title: "Team Access (3 members)",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 3,
        disabled: false,
        title: "1000 candidates per month",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 4,
        disabled: false,
        title: "3 month data retention",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 5,
        disabled: true,
        title: "Priority Call Support",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 6,
        disabled: true,
        title: "Upto 200 concurrent users",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 7,
        disabled: true,
        title: "2000 mins AV question / month",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
    ]
  },

  {
    id: 4,
    type: "Enterprise",
    topSubHeading: "",
    priceMonth: "",
    priceYear: "",
    heading: "Max Performance",
    subHeading: "Pro plan plus . . .",
    features: [
      {
        id: 1,
        disabled: false,
        title: "Unlimited Candidates",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 2,
        disabled: false,
        title: "Concurrent users scaling",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 3,
        disabled: false,
        title: "API integration",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 4,
        disabled: false,
        title: "Custom Workflow integration",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 5,
        disabled: false,
        title: "Additional support",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 6,
        disabled: true,
        title: "All question types",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 7,
        disabled: true,
        title: "125 min AV question",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 8,
        disabled: true,
        title: "Upto 5 concurrent users",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
      {
        id: 9,
        disabled: true,
        title: "5 Code Pair Assessment",
        tooltipHeading: "2 Assessment",
        tooltipDescription: "Assessment is here..."
      },
    ]
  }
]

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


