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
        <section>
          <Feature featuresData={featuresData} topTableTitle={topTableTitle}/>
        </section>
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
    priceYear: 49 * 11,
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
    priceYear: 99 * 11,
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
];

const topTableTitle = [
  {
    id: 1,
    title: "Features"
  },
  {
    id: 2,
    title: "Free"
  },
  {
    id: 3,
    title: "Basic"
  },
  {
    id: 4,
    title: "Pro"
  },
  {
    id: 5,
    title: "Enterprise"
  }
];

const featuresData = [
  {
    id: 1,
    dataKey: "Assessments",
    free: {
      title: "2"
    },
    basic: {
      title: "Unlimited"
    },
    pro: {
      title: "Unlimited"
    },
    enterprise: {
      title: "Unlimited"
    }
  },
  {
    id: 2,
    dataKey: "Candidates Per Month",
    free: {
      title: "25"
    },
    basic: {
      title: "300"
    },
    pro: {
      title: "1000"
    },
    enterprise: {
      title: "Customizable"
    }
  },
  {
    id: 3,
    dataKey: "Company Library",
    free: {
      title: "Yes"
    },
    basic: {
      title: "Yes"
    },
    pro: {
      title: "Yes"
    },
    enterprise: {
      title: "Yes"
    }
  },
  {
    id: 4,
    dataKey: "SkillCount Question Library",
    free: {
      title: "Limited Access"
    },
    basic: {
      title: "Full Access"
    },
    pro: {
      title: "Full Access"
    },
    enterprise: {
      title: "Full Access"
    }
  },
  {
    id: 5,
    dataKey: "SkillCounty Test Library",
    free: {
      title: "No"
    },
    basic: {
      title: "Yes"
    },
    pro: {
      title: "Yes"
    },
    enterprise: {
      title: "Yes"
    }
  },
  {
    id: 6,
    dataKey: "Coding Tests",
    free: {
      title: "Yes"
    },
    basic: {
      title: "Yes"
    },
    pro: {
      title: "Yes"
    },
    enterprise: {
      title: "Yes"
    }
  },
  {
    id: 7,
    dataKey: "Live-Pair Coding Interviews",
    free: {
      title: "5"
    },
    basic: {
      title: "20"
    },
    pro: {
      title: "Unlimited"
    },
    enterprise: {
      title: "Unlimited"
    }
  },
  {
    id: 8,
    dataKey: "Audio-Video Per Month",
    free: {
      title: "125mins"
    },
    basic: {
      title: "500mins"
    },
    pro: {
      title: "2000mins"
    },
    enterprise: {
      title: "Customizable"
    }
  },
  {
    id: 9,
    dataKey: "Account level storage limit on file attachments Per Month",
    free: {
      title: "limit 100MB per month"
    },
    basic: {
      title: "Limit 1GB"
    },
    pro: {
      title: "10GB"
    },
    enterprise: {
      title: "Customizable"
    }
  },
  {
    id: 10,
    dataKey: "Concurrent Users",
    free: {
      title: "5"
    },
    basic: {
      title: "50"
    },
    pro: {
      title: "200"
    },
    enterprise: {
      title: "Customizable"
    }
  },
  {
    id: 11,
    dataKey: "Team",
    free: {
      title: "No"
    },
    basic: {
      title: "No"
    },
    pro: {
      title: "3 Members"
    },
    enterprise: {
      title: "Customizable"
    }
  },
  {
    id: 12,
    dataKey: "Candidate Data Retention",
    free: {
      title: "15 Days"
    },
    basic: {
      title: "1 Month"
    },
    pro: {
      title: "3 Months"
    },
    enterprise: {
      title: "Customizable"
    }
  },
  {
    id: 13,
    dataKey: "Custom Coding Questions",
    free: {
      title: "No"
    },
    basic: {
      title: "No"
    },
    pro: {
      title: "No"
    },
    enterprise: {
      title: "Yes"
    }
  },
  {
    id: 14,
    dataKey: "Scheduling",
    free: {
      title: "Yes"
    },
    basic: {
      title: "Yes"
    },
    pro: {
      title: "Yes"
    },
    enterprise: {
      title: "Yes"
    }
  },
  {
    id: 15,
    dataKey: "Proctoring",
    free: {
      title: "No"
    },
    basic: {
      title: "Image"
    },
    pro: {
      title: "Image & Screen"
    },
    enterprise: {
      title: "Image & Screen"
    }
  },
  {
    id: 16,
    dataKey: "Screen Proctoring",
    free: {
      title: "No"
    },
    basic: {
      title: "No"
    },
    pro: {
      title: "Yes"
    },
    enterprise: {
      title: "Yes"
    }
  },
  {
    id: 17,
    dataKey: "Download Excel Report",
    free: {
      title: "Yes"
    },
    basic: {
      title: "Yes"
    },
    pro: {
      title: "Yes"
    },
    enterprise: {
      title: "Yes"
    }
  },
  {
    id: 18,
    dataKey: "Download Candidate Report",
    free: {
      title: "Yes"
    },
    basic: {
      title: "Yes"
    },
    pro: {
      title: "Yes"
    },
    enterprise: {
      title: "Yes"
    }
  },
  {
    id: 19,
    dataKey: "Support",
    free: {
      title: "Email"
    },
    basic: {
      title: "Email"
    },
    pro: {
      title: "Email, Call"
    },
    enterprise: {
      title: "Email, Call"
    }
  },
  {
    id: 20,
    dataKey: "Custom Integration",
    free: {
      title: "No"
    },
    basic: {
      title: "No"
    },
    pro: {
      title: "Slack, Teams"
    },
    enterprise: {
      title: "Slack, Teams, Customizable support for additional softwares"
    }
  },
  {
    id: 21,
    dataKey: "Custom Imtegrations & API",
    free: {
      title: "No"
    },
    basic: {
      title: "No"
    },
    pro: {
      title: "No"
    },
    enterprise: {
      title: "Yes"
    }
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

