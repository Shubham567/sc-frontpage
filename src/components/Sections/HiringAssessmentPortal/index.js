import React from 'react';
import Image from "next/image"
import CollapsibleCard from "../../CollapsibleCard";

const HiringAssessment = () => {
  return (
    <div className="mt-24 overflow-x-hidden w-full text-dark relative flex justify-center flex-col align-center">
      <div>
        <div className="absolute -right-72 bottom-0 -z-10">
          <Image width="781px" height="824px" src="/images/dottedSkillCounty.png" alt="SkillCounty logo"/>
        </div>
        <h1 className="text-center text-4xl font-normal text-primary mb-24 font-bold">Hiring Assessment Platform</h1>
        {/*<EffectAppearOnView>*/}
          <div className="w-full flex flex-wrap justify-center items-stretch">
            {
              rawData.map((item) => (
                <CollapsibleCard
                  key={item.id}
                  collapsibleComponent={<p>{item.content}</p>}
                  heading={<p>{item.title}</p>}
                  topCollapsibleComponent={item.image}
                />
              ))
            }
          </div>
        {/*</EffectAppearOnView>*/}
      </div>
    </div>
  );
};

export default HiringAssessment;

const rawData = [
  {
    id: 1,
    title: "Customizable Assessments",
    image: <Image alt="Customizable Assessments" width="359px" height="181px" src="/images/home/customizable-assessments.svg"/>,
    content: "Create assessments from scratch or mix and match questions from the SkillCounty Premium Library to craft a competence bar that meets your standards."
  },
  {
    id: 2,
    title: "Expert Curated Library",
    image: <Image alt="Expert Curated Library" width="358px" height="181px" src="/images/home/expert-curated-library.png"/>,
    content: "SkillCounty’s Expert Curated Premium Library covers a wide range of skills and is extensively field tested for quality and coverage. With 100s of these questions, creating an assessment takes minutes. If you have your own experts, there is a place to curate and store your own private library. "
  },
  {
    id: 3,
    title: "AI Based Evaluation",
    image: <Image alt="AI Based Evaluation" width="359px" height="181px" src="/images/home/ai-based-evaluation.svg"/>,
    content: "For each assessment taken by a candidate, SkillCounty generates a detailed assessment report and updates metrics at the cohort level. Autograding, candidate activity tracking, override scores, AI based subjective evaluation and more - grading just got a whole lot easier"
  },
  {
    id: 4,
    title: "Coding Tests/Interviews",
    image: <Image alt="Coding Tests/Interviews" width="359px" height="181px" src="/images/home/coding-test.svg"/>,
    content: "SkillCounty Proprietary Coding Assessment technology can help you assess technical skills like programming, design, planning and execution. This technology covers a wide range of programming languages and enables both asynchronous coding tests and live coding / design interviews."
  },
  {
    id: 5,
    title: "Proctoring",
    image: <Image alt="Live Proctoring at SkillCounty" width="359px" height="181px" src="/images/home/proctoring.svg"/>,
    content: "Ensure the integrity of the assessments with sophisticated plagiarism or cheating detections capabilities that include real-time candidate’s screen & image capture, candidate activity and clipboard capture, full screen restrictions, tab switch counts, time away tracker and more."
  },
  {
    id: 6,
    title: "One-Way Interviews",
    image: <Image alt="One-Way Video Interviews" width="359px" height="181px" src="/images/home/one-way-interview.svg"/>,
    content: "Companies and candidates both love asynchronous or one-way interviews. There is no need to synchronize schedules and screening takes a lot less than the average 30mins a live interview takes. So, companies can assess skills like communication, pitching etc. in a fraction of time."
  },
]
