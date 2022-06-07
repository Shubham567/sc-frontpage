import React from 'react';
// import EffectIncrementUpto from "../../Effects/EffectIncrementUpto";
import dynamic from "next/dynamic";

const EffectIncrement = dynamic(() => import('../../Effects/EffectIncrementUpto'), {ssr: false})

const PercentageView = () => {
  return (
    <div className={"tracking-wide bg-yellow w-screen pt-12 pb-12 flex flex-wrap justify-evenly items-center relative"}>
      <div className="bg-yellow w-24 h-8 absolute -top-6 right-12">
        <div className="text-center -m-8 font-medium text-md">STATS</div>
      </div>
      <div  className={"m-8"}>
        <p className={"font-bold text-6xl text-center"}>
          <EffectIncrement targetValue={90} wrapperComponent={"h2"} >%</EffectIncrement>
        </p>
        <p className="text-center font-medium mt-2">Decrease in time to hire</p>
      </div>
      <div  className={"m-8"}>
        <p className={"font-bold text-6xl text-center"}>
          <EffectIncrement targetValue={30} wrapperComponent={"h2"} >%</EffectIncrement>
        </p>
        <p className="text-center font-medium mt-2">Increase in new hire
          diversity</p>
      </div>
      <div className={"m-8"}>
        <p className={"font-bold text-6xl text-center"}>
          <EffectIncrement targetValue={200} wrapperComponent={"h2"} >%</EffectIncrement>
        </p>
        <p className="text-center font-medium mt-2">Return on investment</p>
      </div>
    </div>
  );
};

export default PercentageView;
