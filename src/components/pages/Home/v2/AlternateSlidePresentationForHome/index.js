import React from 'react';
import useScreenSize from "../../../../../hooks/useScreenSize";
import AlternateSlidePresentationForHomeWideScreen from "./AlternateSlidePresentationForHomeWideScreen";
import EffectProgressBarIncrement from "../../../../Effects/EffectProgressBarIncrement";
import EffectIncrementUpto from "../../../../Effects/EffectIncrementUpto";

const data = [
  {
    title : "Top 3 hiring issues reported by companies in 2022",
    component: <div className="flex flex-col gap-4 items-center justify-center">
      {
        [
          {"text": "Time saving benefits", targetValue: 82},
          {"text": "Easier to identify best candidates", targetValue: 52},
          {"text": "Cost-effective benefits", targetValue: 70},
          {"text": "Most diverse pool of applicants", targetValue: 39},
          {"text": "More satisfied candidates", targetValue: 41},
          {"text": "Large Scale Hiring", targetValue: 79},

        ].map(item => {
          return <div key={item.text} className="w-full flex justify-between items-center gap-4">
            <div>
              {item.text}
            </div>
            <div>
              <EffectProgressBarIncrement targetValue={item.targetValue}/>
            </div>
          </div>
        })
      }
    </div>
  },
  {
    title: "Benefits of online assessments as reported by companies in 2022.",
    component: <div className="flex flex-col gap-8 items-center justify-center">
      {
        [
          {"text": "Difficult to find & attract quality candidates.", targetValue: 77},
          {"text": "Time to hire is high and increasing.", targetValue: 70},
          {"text": "Talent teams are under resourced and are getting worse with increased resignations.", targetValue: 60},

        ].map(item => {
          return <div key={item.text} className="w-full flex items-center gap-4">
            <div className="text-2xl text-secondary font-semibold">
              <EffectIncrementUpto targetValue={item.targetValue} >%</EffectIncrementUpto>
            </div>
            <div className="max-w-sm text-primary">
              {item.text}
            </div>
          </div>
        })
      }
    </div>
  },
  {
    title: "How talent leaders are using technology in 2022.",
    component: <div className="flex flex-col gap-8 items-center justify-center">
      {[
        {title: "Virtual Interviewing:", targetValue: 77, content: "using in atleast part of the hiring process."},
        {title: "Standardized Assessments:", targetValue: 59, content: "using in atleast part of the hiring process."},
        {title: "Automation:", targetValue: 47, content: "using in atleast part of the hiring process."},
        {title: "Artificial Intelligence:", targetValue: 41, content: "using in atleast part of the hiring process."},
      ].map(item => {
        return (
          <p key={item.title} className="w-full text-primary">
            <span className="underline font-semibold">{item.title}</span>&nbsp;
            <EffectIncrementUpto targetValue={item.targetValue} wrapperComponent="strong" className="text-2xl text-secondary" >%&nbsp;</EffectIncrementUpto>
            {item.content}
          </p>
        )
      })}


    </div>
  }
]

const breakPoint = 750;
const AlternateSlidePresentationForHome = () => {
  const screen = useScreenSize();
  return (
    <div className="flex justify-center items-center pt-16" style={{minHeight: 600}}>
      {
        screen.width > breakPoint ? <AlternateSlidePresentationForHomeWideScreen data={data} /> : ""
      }
    </div>
  );
};

export default AlternateSlidePresentationForHome;
