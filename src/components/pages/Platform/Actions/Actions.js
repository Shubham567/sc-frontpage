import React from 'react';
import ActionCard from "./ActionCard";
import EffectAppearOnView from "../../../Effects/EffectAppearOnView";

const actionHandler = () => {
  console.log("Button Clicked")
}

const Actions = () => {
  return (
    <div style={{borderLeft: "36px solid #F28705", borderRight: "36px solid #F28705"}} className="pt-24 pb-24 border-l-8 border-l-yellow">
   <EffectAppearOnView>
     <div className="pt-16 flex justify-evenly items-center flex-col xl:flex-row xl:pl-16 xl:pr-16 pb-16 bg-orange-light">
       {
         rawData.map((item) => (<ActionCard key={item.id} {...item} />))
       }
     </div>
   </EffectAppearOnView>
    </div>
  );
};

export default Actions;

const rawData = [
  {
    id: 1,
    heading: "Lorem ipsum dolor sit amet Lorem ipsum ",
    buttonLabel: "Button",
    actionHandler: actionHandler
  },
  {
    id: 2,
    heading: "Lorem ipsum dolor sit amet Lorem ipsum ",
    buttonLabel: "Button",
    actionHandler: actionHandler
  }
]
