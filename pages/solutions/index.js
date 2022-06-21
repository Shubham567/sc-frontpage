import React from 'react';
import Head from "next/head";
import appDetails from "../../config/appDetails";
import TopNav from "../../src/components/TopNav";
import Features from "../../src/components/Common-Section-style/Features/Features";
import Actions from "../../src/components/Common-Section-style/Actions/Actions";
import Footer from "../../src/components/Footer";
import Image from "next/image";
import ScaleHiring from "../../src/components/Common-Section-style/ScaleHiring/ScaleHiring";
import TopSectionForSolution from "../../src/components/pages/Ssolutions/TopSection";
import CommonHead from "../../src/components/CommonHead";
// import {router} from "next/client";

const Platform = () => {
  return (
    <div>
      <CommonHead title="SkillCounty a Platform that works for any role"  metaDescription="Hire with evidence & build great teams using a Skill Platform that works for any role. SkillCounty Assessment Platform helps you hire the best engineers, developers, bankers and more."/>
      <TopNav/>
      <main>
        {/*<TopPlatformSection {...topRawData} hideBg={"invisible"} />*/}
        <TopSectionForSolution {...topRawData} />
        {/*<Benefits benefitsData={benefitsData} />*/}
        <Features featureData={featureData1}/>
        <ScaleHiring title={"Hire Affordably At Scale"}/>
        <Features featureData={featureData2}/>
        <Actions actionData={actionData}/>
        <Features featureData={featureData3}/>
        <Features featureData={featureData4}/>
        {/*<OtherPlatformTab tabData={tabData} />*/}
      </main>
      <Footer/>
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
    // actionHandler: actionHandler
  },
];

const benefitsData = [
  {
    id: 1,
    image: <Image src="/images/platform/random.png" alt="random" width="158px" height="81px"/>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
  {
    id: 2,
    image: <Image src="/images/platform/random.png" alt="random"  width="158px" height="81px"/>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
  {
    id: 3,
    image: <Image src="/images/platform/random.png" alt="random"  width="158px" height="81px"/>,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit."
  },
];

const featureData1 = [
  {
    id: 1,
    image: <Image src="/images/solutions/young-smiley-businessWomen.png" alt="Young smiley business women" width="700px"
                  height="400px"/>,
    heading: "Professional Hiring",
    description: "Hire professionals who will help your firm succeed." +
      "Talent drives a company’s success.  So, using the right processes and tools to power talent acquisition is critical. More than 70% of the Fortune 500 companies use an assessment tool to validate the skills of the candidates instead of just relying on resumes or CVs. By construction, resumes are opinions and not facts. Studies have shown that 40% of resumes misrepresent the skills of the candidate.  By introducing an automated assessment in the early stages of your hiring pipeline, you can enhance the quality of the candidates that your company interviews and reduce your per head hiring cost.  SkillCounty’s platform reduces both the effort and the time to close a role and boosts your hiring pipeline in terms of quality, quantity and diversity.",
    direction: "flex-col xl:flex-row-reverse"
  },
  {
    id: 2,
    image: <Image src="/images/solutions/large-group-diverse-people.png" alt="large group diverse people" width="700px"
                  height="400px"/>,
    heading: "Bulk Hiring",
    description: "Affordably  accelerate hiring on a large scale\n" +
      "Hiring in bulk is an effort and time intensive process. Screening, shortlisting and interviewing 100s of candidates simultaneously is a perfect storm to wear down the hiring team and all the hiring metrics that matter like time to close a role, per-head hiring cost, candidate experience and quality of hired candidates. Without an assessment platform, being successful in bulk hiring is a challenge. SkillCounty’s proprietary technology helps you get a competitive advantage by enabling you to do bulk hiring at a fraction of the cost and in minimal time while ensuring you capture the best candidates. It delivers consistent and crisp hiring experience to the candidates and helps you curtail inefficiencies.\n",
    direction: "flex-col xl:flex-row"
  }
];

const featureData2 = [
  {
    id: 1,
    image: <Image src="/images/solutions/portrait-african-american.png" alt="Portrait african american" width="700px"
                  height="400px"/>,
    heading: "Technical Hiring ",
    description: "Assess candidate's problem solving, coding & design skills\n" +
      "SkillCounty brings together all the tools you need to assess technical skills like problem solving, coding and design. In addition, it can help you assess adjacent skills which are required in senior technical roles: like planning, teamwork, management, execution, and communication. SkillCounty covers a wide array of programming languages, offers a sophisticated online coding editor and even enables assessments on the desktop for a best-in-class developer hiring experience.  So whether you are looking for coding tests, live coding interviews or live design sessions, SkillCounty does it all. \n",
    direction: "flex-col xl:flex-row-reverse"
  },
  {
    id: 2,
    image: <Image src="/images/solutions/contract-male-sunny-sand-career.png" alt="Contract male sunny sand career"
                  width="700px" height="400px"/>,
    heading: "Call Center Hiring ",
    description: "Assess communication skills and problem solving ability to find the best frontline talent" +
      "Each call from client/customer is unique, and call centre employees must be equipped with the necessary skills and knowledge to manage these calls. Call centers need good communication and problem-solving abilities that can be used in a global market. SkillCounty's technology gives you an advantage over the competition by allowing you to evaluate all of the applicants' using AI-driven  asynchronous audio or video interviews as well as expert-designed data interpretation assessments.",
    direction: "flex-col xl:flex-row"
  }
];

const featureData3 = [
  {
    id: 1,
    image: <Image src="/images/solutions/free-time-students-bachelor-s-campus-life.png"
                  alt="Free time students bachelor school/college camus life" width="700px" height="400px"/>,
    heading: "Campus Hiring ",
    description: "Fuel your growth by discovering the brightest new talent.\n" +
      "Academic success does not predict future job performance. And, with no experience, student resumes look the same. With SkillCounty you can cast a wide net and simultaneously screen 100s of students on skills you value (like analytical, communication, technical, team-fit etc.) to zero-in on the best.  You can approach several colleges at once and  set up a consistent and bias-free hiring pipeline, which will bring in high quality talent and boost your company’s brand.\n",
    direction: "flex-col xl:flex-row-reverse"
  },
  {
    id: 2,
    image: <Image src="/images/solutions/closeup-person-filling-out-questionary-form.png"
                  alt="closeup person filling out questionary form" width="700px" height="400px"/>,
    heading: "Entrance Exams",
    description: "Assess hundreds of candidates by conducting entrance exams \n" +
      "Universities, colleges, and schools all want the best students to enroll in their programmes, but grades can only tell us so much about candidates. Rather than focusing on prior academic performance, entrance exams evaluate students' creativity, intellect, and potential. With SkillCounty, colleges can conduct large scale examinations across multiple locations and for a wide range of skills that matter such as speaking, objective abilities, personality assessment and more. \n",
    direction: "flex-col xl:flex-row"
  }
];

const featureData4 = [
  {
    id: 1,
    image: <Image src="/images/solutions/clg-placement-cell-resource.png"
                  alt="Free time students bachelor school/college camus life" width="700px" height="400px"/>,
    heading: "College Placement Cell - Resources ",
    description: "Conduct mock placement assessments to help your student prepare and excel\n" +
      "With little to no knowledge about how to give interviews and placement assessments, the placement season can be a little overwhelming for the students. As a result, every top college and university spends a considerable amount of time and effort in training their students for the placement season. With SkillCounty, colleges can easily create and conduct mock placement assessments and interviews so they wont be nervous or anxious when it's their time to shine.   \n",
    direction: "flex-col xl:flex-row-reverse"
  },
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
  heading: "Hiring Assessment Platform",
  description: "Upgrade your hiring. Use SkillCounty Assessment Platform to hire the right candidates faster and more efficiently."
}

