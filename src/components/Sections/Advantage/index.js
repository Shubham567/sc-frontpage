import React from 'react';
import Image from "next/image";
import clsx from "clsx";
import EffectAppearOnView from "../../Effects/EffectAppearOnView";

const Advantage = () => {
  return (
    <div className="mt-24 mb-72 relative">
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold text-4xl tracking-wide text-primary text-center">SkillCounty Advantages</h1>
        <p style={{letterSpacing: "3.5px", wordSpacing: "5px"}}
           className="pl-4 pr-4 text-center tracking-wide break-words font-normal text-sp mt-2">Accelerate Hiring,
          Scale Tasks & Hire Better</p>
      </div>
      <div className="mt-48 hidden xl:block h-full mb-12 w-full flex justify-center items-center relative">
        {/*<div className="rounded-t-full w-5/12 h-72 bg-yellow">*/}
        {/*</div>*/}
        <div className="flex item-center justify-center ml-8 mr-8 -z-10 ml-2">
          <Image src="/images/professional-group.png" width="815px" height="411px" alt="Professional people's group"/>
        </div>
        {
          advantageData.map((item,index) => (
            <div key={item.id} style={{boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.25)"}} className={
              clsx("xl:w-1/5 md:w-1/4 p-6 rounded-lg m-2 bg-white absolute", position[index].x, position[index].y)
            }>
              <EffectAppearOnView>
                <h4 className="font-medium text-xl mb-4">{item.title}</h4>
              </EffectAppearOnView>
              <EffectAppearOnView>
                <p className="font-normal text-md">{item.description}</p>
              </EffectAppearOnView>
            </div>
          ))
        }
      </div>

      <div className="mt-96 block xl:hidden h-full mb-12 w-full flex flex-col justify-center items-center relative">
        <div className="ml-8 mr-8 -z-10 ml-2">
          <Image src="/images/professional-group.png" width="815px" height="411px" alt="Professional people's group"/>
        </div>
        <div className="ml-8 mt-72 mr-8 -z-10 ml-2">
          <Image src="/images/half-circle.png" width="815px" height="411px" alt="half-circle"  />
        </div>

        <div className="rounded-full w-8 h-8 bg-yellow -ml-12 absolute bottom-1/3  left-1/2">

        </div>
        <div className="rounded-full w-8 h-8 bg-yellow -ml-12 absolute left-1/4 top-3/5">

        </div>
        <div className="rounded-full w-8 h-8 bg-yellow -ml-12 absolute top-1/3 left-1/2">

        </div>

          {
            advantageData.map((item,index) => (
              <div key={item.id} style={{boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.25)"}} className={
                clsx("w-2/3 sm:w-1/2 md:w-1/3 p-6 rounded-lg m-2 bg-white absolute", mobilePosition[index].x, mobilePosition[index].y)
              }>
               <EffectAppearOnView>
                 <h4 className="font-medium md:text-xl text-lg mb-4">{item.title}</h4>
               </EffectAppearOnView>
               <EffectAppearOnView>
                 <p className="font-normal text-md text-left">{item.description}</p>
               </EffectAppearOnView>
              </div>
            ))
          }

      </div>
      <div className="hidden xl:block absolute left-8 -bottom-4/5 -z-200">
        <Image width="500px" height="550px" src="/images/dottedSkillCounty.png" alt="SkillCounty logo"/>
      </div>

    </div>
  );
};

export default Advantage;

const advantageData = [
  {
    id: 1,
    title: "Team Support",
    description: "Your hiring team has to work collaboratively to scale and bring in the best talent. With team support, you and your colleagues share the account and thus can share responsibilities of crafting & conducting assessments and then reviewing reports and metrics. "
  },
  {
    id: 2,
    title: "Application Tracking System (ATS) Integration",
    description: "SkillCounty offers strong APIs for integration. Some popular ATS are already integrated. But if you have a homegrown ATS and need help, SKillCounty Services can step in to ensure your workflows are seamless."
  },
  {
    id: 3,
    title: "Custom Workflows Integrations",
    description: "If there is existing enterprise technology that your company already uses, SkillCounty Services can help you integrate assessments to it. So whether it is slack, teams or something else entirely, you can build a workflow that works for your company."
  },
]

const position = [
  {
   id: 1,
    x: "xl:left-16 md:left-0",
    y: "xl:bottom-16 md:bottom-12"
  },
  {
    id: 2,
    x: "xl:right-32 md:right-0",
    y: "xl:-top-28 md:-top-28"
  },
  {
    id: 3,
    x: "xl:right-64 md:right-28",
    y: "xl:-bottom-72 md:-bottom-72"
  }
];

const mobilePosition = [
  {
    id: 1,
    x: "left-0",
    y: "-top-80"
  },
  {
    id: 2,
    x: "right-0",
    y: "top-4/5"
  },
  {
    id: 3,
    x: "left-0",
    y: "-bottom-72"
  }
]
