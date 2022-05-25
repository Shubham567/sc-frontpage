import React from 'react';
import Image from "next/image"
import CollapsibleCard from "../../CollapsibleCard";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";

const HiringAssessment = () => {
  return (
    <div className="m-4 mt-12 overflow-x-hidden w-full text-dark relative flex justify-center flex-col align-center">
      <div>
        <div className="absolute -right-72 bottom-0 -z-10">
          <Image width="781px" height="824px" src="/images/dottedSkillCounty.png" alt="SkillCounty logo"/>
        </div>
        <h1 className="text-center text-4xl font-normal text-primary mb-2 font-bold">Hiring Assessment Platform</h1>
        {/*<EffectAppearOnView>*/}
          <div className="w-full flex flex-wrap justify-center items-center">
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
    image: <Image width="359px" height="181px" src="/images/home/customizable-assessments.svg"/>,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam."
  },
  {
    id: 2,
    title: "Expert Curated Library",
    image: <Image width="358px" height="181px" src="/images/home/expert-curated-library.png"/>,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam."
  },
  {
    id: 3,
    title: "AI Based Evaluation",
    image: <Image width="359px" height="181px" src="/images/home/ai-based-evaluation.svg"/>,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam."
  },
  {
    id: 4,
    title: "Coding Tests/Interviews",
    image: <Image width="359px" height="181px" src="/images/home/coding-test.svg"/>,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam."
  },
  {
    id: 5,
    title: "Proctoring",
    image: <Image width="359px" height="181px" src="/images/home/proctoring.svg"/>,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam."
  },
  {
    id: 6,
    title: "One-Way Interviews",
    image: <Image width="359px" height="181px" src="/images/home/one-way-interview.svg"/>,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium, sem et efficitur blandit, mauris ex rutrum quam, non pharetra lectus arcu vitae quam."
  },
]
